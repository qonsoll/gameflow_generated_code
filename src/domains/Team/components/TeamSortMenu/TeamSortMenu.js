import React from 'react'
import dynamicStyles from './TeamSortMenu.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { View } from 'react-native'

const TeamSortMenu = (props) => {
  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  return <></>
}

TeamSortMenu.propTypes = {}

export default TeamSortMenu
