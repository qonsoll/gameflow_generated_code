const SEASONS = {
  WINTER: 'Winter',
  SPRING: 'Spring',
  SUMMER: 'Summer',
  AUTUMN: 'Autumn'
}

const SEASONS_OPTIONS = Object.keys(SEASONS).map((key) => ({
  label: SEASONS[key],
  value: key
}))

export default SEASONS
export { SEASONS_OPTIONS, SEASONS }
