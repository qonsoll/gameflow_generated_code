const PHASE = {
  ON_GOING: 'On going',
  IN_PROGRESS: 'In progress',
  FINISHED: 'Finished'
}

const PHASE_OPTIONS = Object.keys(PHASE).map((key) => ({
  label: PHASE[key],
  value: key
}))

export default PHASE
export { PHASE_OPTIONS, PHASE }
