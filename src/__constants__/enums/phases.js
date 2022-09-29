const PHASES = {
  ON_GOING: 'On going',
  IN_PROGRESS: 'In progress',
  FINISHED: 'Finished'
}

const PHASES_OPTIONS = Object.keys(PHASES).map((key) => ({
  label: PHASES[key],
  value: key
}))

export default PHASES
export { PHASES_OPTIONS, PHASES }
