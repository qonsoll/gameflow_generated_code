import { model, attr } from 'services/model'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .typeError('Field name has wrong type')
    .default(null)
    .nullable(),
  releaseDate: yup
    .date()
    .typeError('Field releaseDate has wrong type')
    .default(null)
    .nullable(),
  publisher: yup
    .string()
    .typeError('Field publisher has wrong type')
    .default(null)
    .nullable(),
  genre: yup
    .string()
    .typeError('Field genre has wrong type')
    .default(null)
    .nullable(),
  logoUrl: yup
    .string()
    .typeError('Field logoUrl has wrong type')
    .default(null)
    .nullable(),
  shortLogoUrl: yup
    .string()
    .typeError('Field shortLogoUrl has wrong type')
    .default(null)
    .nullable(),
  slug: yup
    .string()
    .typeError('Field slug has wrong type')
    .default(null)
    .nullable(),
  color: yup
    .string()
    .typeError('Field color has wrong type')
    .default(null)
    .nullable(),
  bgColor: yup
    .string()
    .typeError('Field bgColor has wrong type')
    .default(null)
    .nullable(),
  bgImage: yup
    .string()
    .typeError('Field bgImage has wrong type')
    .default(null)
    .nullable()
})

const VideoGame = model(
  'videoGame',
  {
    name: attr('string'),
    releaseDate: attr('date'),
    publisher: attr('string'),
    genre: attr('string'),
    logoUrl: attr('string'),
    shortLogoUrl: attr('string'),
    slug: attr('string'),
    color: attr('string'),
    bgColor: attr('string'),
    bgImage: attr('string')
  },
  validationSchema
)

export default VideoGame
