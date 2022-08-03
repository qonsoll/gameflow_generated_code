const SEASON = {
  WINTER: 'Winter',
  SPRING: 'Spring',
  SUMMER: 'Summer',
  AUTUMN: 'Autumn'
}

const SEASON_OPTIONS = Object.keys(SEASON).map((key) => ({
  label: SEASON[key],
  value: key
}))

export default SEASON
export { SEASON_OPTIONS, SEASON }
