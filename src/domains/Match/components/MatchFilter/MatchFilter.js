import React from 'react'
import dynamicStyles from './MatchFilter.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { View } from 'react-native'

const MatchFilter = (props) => {
  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  return <View />
}

MatchFilter.propTypes = {}

export default MatchFilter
