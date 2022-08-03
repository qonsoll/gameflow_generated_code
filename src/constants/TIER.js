const TIER = {
  LOW: 'Low',
  MID: 'Mid',
  HIGH: 'High'
}

const TIER_OPTIONS = Object.keys(TIER).map((key) => ({
  label: TIER[key],
  value: key
}))

export default TIER
export { TIER_OPTIONS, TIER }
