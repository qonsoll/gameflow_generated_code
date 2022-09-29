import React from 'react'
import dynamicStyles from './CompetitionSortMenu.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { View } from 'react-native'

const CompetitionSortMenu = (props) => {
  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  return <></>
}

CompetitionSortMenu.propTypes = {}

export default CompetitionSortMenu
