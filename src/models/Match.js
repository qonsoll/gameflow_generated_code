import { model, attr, hasMany } from 'services/model'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  startDate: yup
    .string()
    .typeError('Field startDate has wrong type')
    .default(null)
    .nullable(),
  teams: yup
    .array()
    .typeError('Field teams has wrong type')
    .default(null)
    .nullable(),
  streamUrl: yup
    .string()
    .typeError('Field streamUrl has wrong type')
    .default(null)
    .nullable()
})

const Match = model(
  'match',
  {
    startDate: attr('string'),
    teams: hasMany('team'),
    streamUrl: attr('string')
  },
  validationSchema
)

export default Match
