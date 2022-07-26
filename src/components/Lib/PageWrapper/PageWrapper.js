import { Box, Text } from '@qonsoll/react-native-design'
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView
} from 'react-native'

import PropTypes from 'prop-types'
import React from 'react'
import dynamicStyles from '../../Lib/PageWrapper/styles'
import { useColorScheme } from 'react-native-appearance'

const DEFAULT_HEADING_PROPS = {
  titleSize: 2
}

const PageWrapper = (props) => {
  const {
    children,
    alignMiddle,
    contentWrapperProps,
    wrapperProps,
    titleWrapperProps,
    headingProps = DEFAULT_HEADING_PROPS,
    action,
    mb,
    withoutScrollView,
    onMomentumScrollEnd,
    mx
  } = props
  const colorScheme = useColorScheme()

  const styles = dynamicStyles(colorScheme)

  const innerContent = (
    <Box
      flex={1}
      justifyContent={alignMiddle && 'center'}
      pt={32}
      pb={16}
      mx={mx ?? 32}
      {...wrapperProps}>
      {(headingProps.subTitle || action || headingProps.text) && (
        <Box flexDirection="row" mb={32} {...titleWrapperProps}>
          <Box flex={1}>
            <Box
              justifyContent={headingProps.titleAlignVertical}
              alignItems={headingProps.titleAlignHorizontal}
              flex={action && 1}>
              <Text
                variant={`h${headingProps.titleSize ?? 3}`}
                textAlign={headingProps.textAlign}>
                {headingProps.text}
              </Text>
            </Box>
            {headingProps.subTitle && <Text>{headingProps.subTitle}</Text>}
          </Box>
          {action && <Box>{action}</Box>}
        </Box>
      )}

      <Box mb={mb ?? 72} {...contentWrapperProps}>
        {children}
      </Box>
    </Box>
  )

  if (alignMiddle) {
    return (
      <SafeAreaView style={styles.screenContainer}>{innerContent}</SafeAreaView>
    )
  }
  return (
    <KeyboardAvoidingView
      style={styles.screenContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={styles.screenContainer}>
        {withoutScrollView ? (
          innerContent
        ) : (
          <ScrollView
            onMomentumScrollEnd={onMomentumScrollEnd}
            nestedScrollEnabled>
            {innerContent}
          </ScrollView>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

PageWrapper.propTypes = {
  alignMiddle: PropTypes.bool,
  contentWrapperProps: PropTypes.object,
  headingProps: PropTypes.shape({
    text: PropTypes.string,
    mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    subTitle: PropTypes.string,
    textAlign: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
    titleAlignHorizontal: PropTypes.oneOf(['flex-end', 'flex-start', 'center']),
    titleAlignVertical: PropTypes.oneOf(['flex-end', 'flex-start', 'center']),
    titleSize: PropTypes.number,
    titleMarginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  action: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default PageWrapper
