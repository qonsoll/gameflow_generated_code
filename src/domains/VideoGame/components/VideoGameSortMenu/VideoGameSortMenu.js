import React from 'react'
import dynamicStyles from './VideoGameSortMenu.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { View } from 'react-native'

const VideoGameSortMenu = (props) => {
  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  return <></>
}

VideoGameSortMenu.propTypes = {}

export default VideoGameSortMenu
