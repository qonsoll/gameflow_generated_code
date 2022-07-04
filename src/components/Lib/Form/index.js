import React, { memo, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useForm, FormProvider, useFieldArray } from 'react-hook-form'
import FormItem from './FormItem'
import _ from 'lodash'

const Form = (props) => {
  const { children, form, initialValues, onFinish, onFinishError } = props

  // [ADDITIONAL_HOOKS]
  const formInstance = Form.useForm({ defaultValues: initialValues }, form)

  // [COMPUTED_PROPERTIES]
  let methods = useMemo(() => {
    formInstance.submit = (e) =>
      formInstance.handleSubmit(onFinish, onFinishError)(e)

    return formInstance
  }, [formInstance, onFinish, onFinishError])

  useEffect(() => {
    initialValues && methods.setFieldsValue(initialValues)
  }, [])

  return <FormProvider {...methods}>{children}</FormProvider>
}

Form.propTypes = {
  form: PropTypes.object,
  initialValues: PropTypes.object,
  onFinish: PropTypes.func,
  onFinishError: PropTypes.func
}

Form.Item = memo(
  FormItem,
  (prev, next) => JSON.stringify(prev?.value) !== JSON.stringify(next?.value)
)
Form.useForm = (formData, formInstance) => {
  const formMethods = useForm(formData)

  return useMemo(
    () =>
      formInstance ?? {
        ...formMethods,
        setFieldsValue: (values, options) => {
          const updatedKey = Object.keys(_.omitBy(values, _.isNil))

          updatedKey.forEach((key) => {
            formMethods.setValue(key, values[key], {
              shouldDirty: true,
              ...options
            })
          })
        }
      },
    [formMethods, formInstance]
  )
}
Form.useFieldArray = useFieldArray

export default Form
