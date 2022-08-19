import AdvancedFormContext from './AdvancedFormContext'
import React from 'react'

const AdvancedFormProvider = (props) => {
  const { children } = props

  return <AdvancedFormContext.Provider>{children}</AdvancedFormContext.Provider>
}

export default AdvancedFormProvider
