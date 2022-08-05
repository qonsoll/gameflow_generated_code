import { updateDocument, createDocument, getId } from 'services/firestore'

import { Language } from 'models'
import { message } from 'antd'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useTranslations } from 'contexts/Translation'

const useActionsLanguageSimpleForm = ({ initialData, form } = {}) => {
  // [COMPONENT_STATE_HOOKS]
  const [loading, setLoading] = useState(false)

  // [ADDITIONAL_HOOKS]
  const { t } = useTranslations()
  const history = useHistory()

  const prepareValues = async (values, additionalValues) => {
    const languageId = initialData?._id || getId('languages')
    const preparedValues = {
      _id: languageId,
      ...additionalValues,
      name: values?.name ?? null
    }
    return preparedValues
  }

  const saveForm = async (values, callback) => {
    try {
      // Prepare data to be saved
      const data = await prepareValues(values)
      // Save data
      if (initialData) {
        await updateDocument('languages', initialData.language?._id, data)
        message.success(t('Language successfully updated'))
      } else {
        await createDocument('languages', data, data._id)
        message.success(t('Language successfully created'))
      }
      // Final callback
      callback?.()
    } catch (error) {
      console.error(error)
      throw new Error(t('Something went wrong during data save'))
    }
  }

  const validateForm = (values) => {
    try {
      // Prepare data to be validated
      const validationData = {
        name: values.name
      }
      Language.validationSchema.validateSync(validationData)
    } catch (error) {
      throw new Error(t('Validation error: ') + error.message)
    }
  }

  const onFinish = async () => {
    if (loading) {
      return
    } // Avoid multiple calls

    try {
      setLoading(true)
      // Get form values
      const formValues = form.getFieldsValue()
      // Validate fields
      validateForm(formValues)
      // Final callback
      const callback = () => history.goBack()
      // Save data
      await saveForm(formValues, callback)
    } catch (error) {
      console.error(error)
      setLoading(false)
      message.error(error.message)
    }
  }

  const onReset = () => {
    form.resetFields()
  }

  return { onFinish, onReset, loading, saveForm, validateForm, prepareValues }
}

export default useActionsLanguageSimpleForm
