import React, { useEffect, useState } from 'react'
import { Pressable } from 'react-native'
import PropTypes from 'prop-types'
import Collapsible from 'react-native-collapsible'
import { Box, Text } from '@qonsoll/react-native-design'

const Collapse = (props) => {
  const {
    title,
    titleProps,
    isCollapsed,
    children,
    onCollapseChange,
    defaultCollapse
  } = props

  // [COMPONENT_STATE_HOOKS]
  const [collapse, setCollapse] = useState(!isCollapsed)

  useEffect(() => {
    defaultCollapse && setCollapse(defaultCollapse)
  }, [defaultCollapse])

  return (
    <Pressable
      onPress={() => {
        setCollapse(!collapse)
        onCollapseChange(collapse)
      }}
      style={{ marginBottom: !collapse ? 16 : 0 }}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mb={16}>
        <Text variant="body1" {...titleProps}>
          {title}
        </Text>
        <Text variant="body1" fontWeight="medium">
          {collapse ? '+' : '-'}
        </Text>
      </Box>

      <Collapsible collapsed={collapse}>{children}</Collapsible>
    </Pressable>
  )
}

Collapse.propTypes = {
  title: PropTypes.string,
  titleProps: PropTypes.object,
  isCollapsed: PropTypes.bool,
  children: PropTypes.node,
  onCollapseChange: PropTypes.func
}

export default Collapse
