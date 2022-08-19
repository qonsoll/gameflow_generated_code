import AdvancedFormContext from './AdvancedFormContext'

const AdvancedFormProvider = (props) => {
  const { children } = props

  return <AdvancedFormContext.Provider>{children}</AdvancedFormContext.Provider>
}

export default AdvancedFormProvider
