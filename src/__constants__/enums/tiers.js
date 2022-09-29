const TIERS = {
  LOW: 'Low',
  MID: 'Mid',
  HIGH: 'High'
}

const TIERS_OPTIONS = Object.keys(TIERS).map((key) => ({
  label: TIERS[key],
  value: key
}))

export default TIERS
export { TIERS_OPTIONS, TIERS }
