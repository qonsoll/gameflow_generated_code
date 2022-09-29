import { model, attr } from 'services/model'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .typeError('Field name has wrong type')
    .default(null)
    .nullable(),
  logoUrl: yup
    .string()
    .typeError('Field logoUrl has wrong type')
    .default(null)
    .nullable(),
  bgColor: yup
    .string()
    .typeError('Field bgColor has wrong type')
    .default(null)
    .nullable()
})

const Team = model(
  'team',
  {
    name: attr('string'),
    logoUrl: attr('string'),
    bgColor: attr('string')
  },
  validationSchema
)

export default Team
