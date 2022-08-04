import { model, attr } from 'services/model'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  isDraft: yup
    .boolean()
    .typeError('Field isDraft has wrong type')
    .default(null)
    .nullable(),
  author: yup
    .string()
    .typeError('Field author has wrong type')
    .required('Field author is required'),
  publishingDate: yup
    .date()
    .typeError('Field publishingDate has wrong type')
    .required('Field publishingDate is required'),
  title: yup
    .string()
    .typeError('Field title has wrong type')
    .required('Field title is required'),
  description: yup
    .string()
    .typeError('Field description has wrong type')
    .required('Field description is required')
})

const Post = model(
  'post',
  {
    isDraft: attr('boolean'),
    author: attr('string'),
    publishingDate: attr('date'),
    title: attr('string'),
    description: attr('string')
  },
  validationSchema
)

export default Post
