import { model, attr, hasMany, hasOne } from 'services/model'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .typeError('Field title has wrong type')
    .default(null)
    .nullable(),
  startDate: yup
    .date()
    .typeError('Field startDate has wrong type')
    .default(null)
    .nullable(),
  endDate: yup
    .date()
    .typeError('Field endDate has wrong type')
    .default(null)
    .nullable(),
  prize: yup
    .string()
    .typeError('Field prize has wrong type')
    .default(null)
    .nullable(),
  description: yup
    .string()
    .typeError('Field description has wrong type')
    .default(null)
    .nullable(),
  participants: yup
    .array()
    .typeError('Field participants has wrong type')
    .default(null)
    .nullable(),
  matches: yup
    .array()
    .typeError('Field matches has wrong type')
    .default(null)
    .nullable(),
  region: yup
    .string()
    .typeError('Field region has wrong type')
    .default(null)
    .nullable(),
  color: yup
    .string()
    .typeError('Field color has wrong type')
    .default(null)
    .nullable(),
  videoGame: yup
    .string()
    .typeError('Field videoGame has wrong type')
    .default(null)
    .nullable(),
  season: yup
    .string()
    .typeError('Field season has wrong type')
    .default(null)
    .nullable(),
  tier: yup
    .string()
    .typeError('Field tier has wrong type')
    .default(null)
    .nullable()
})

const Competition = model(
  'competition',
  {
    title: attr('string'),
    startDate: attr('date'),
    endDate: attr('date'),
    prize: attr('string'),
    description: attr('string'),
    participants: hasMany('team'),
    matches: hasMany('match'),
    region: attr('string'),
    color: attr('string'),
    videoGame: hasOne('videoGame'),
    season: attr('string'),
    tier: attr('string')
  },
  validationSchema
)

export default Competition
