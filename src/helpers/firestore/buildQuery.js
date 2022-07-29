/**
 * It takes a Firestore query and an options object, and returns a new query with the options applied
 * @param query - The query object that we're building.
 * @param options - {
 * @returns A function that takes in a query and options and returns a query.
 */
const buildQuery = (query, options) => {
  const {
    ref,
    where,
    orderBy,
    limit,
    offset,
    startAt,
    endAt,
    startAfter,
    endBefore,
    ...rest
  } = options

  if (Array.isArray(where) && where.length) {
    where.forEach(([fieldName, comparator, value]) => {
      query = query.where(fieldName, comparator, value)
    })
  }

  if (Array.isArray(orderBy) && orderBy.length) {
    const [fieldName, direction] = orderBy
    query = query.orderBy(fieldName, direction)
  }

  if (limit) {
    query = query.limit(limit)
  }

  if (offset) {
    query = query.offset(offset)
  }

  if (startAt) {
    query = query.startAt(...startAt)
  }

  if (endAt) {
    query = query.endAt(...endAt)
  }

  if (startAfter) {
    query = query.startAfter(...startAfter)
  }

  if (endBefore) {
    query = query.endBefore(...endBefore)
  }

  if (Object.keys(rest).length) {
    throw new Error('Unsupported options')
  }

  return query
}

export default buildQuery
