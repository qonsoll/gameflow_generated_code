// import { ALERT_TYPE, Toast } from 'react-native-alert-notification'
// import { ArrowShortLeft3x, Logo } from '../../../constants/assets'
// import {
//   Dimensions,
//   Image,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableOpacity,
//   View
// } from 'react-native'
// import React, { useState } from 'react'
// import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg'

// import Color from 'color'
// import { LoginForm } from '../../../domains/Auth/components/LoginForm'
// import { Text } from '@qonsoll/react-native-design'
// import auth from '@react-native-firebase/auth'
// import dynamicStyles from './styles'
// import theme from '../../../../theme'
// import { useNavigation } from '@react-navigation/native'

// const { width, height } = Dimensions.get('screen')

// const SignUpWithEmailScreen = () => {
//   const styles = dynamicStyles()
//   const navigation = useNavigation()

//   const lighterColor = Color(theme.CORE.COLORS['primary-default'])
//     .lighten(0.25)
//     .toString()

//   const [isSpin, setIsSpin] = useState(false)

//   const onEmailLogin = async (credentials) => {
//     const { email, password } = credentials

//     try {
//       setIsSpin(true)
//       await auth().signInWithEmailAndPassword(email, password)
//     } catch (e) {
//       Toast.show({
//         type: ALERT_TYPE.DANGER,
//         title: 'Cant login',
//         textBody: 'No user record found'
//       })
//     }
//     setIsSpin(false)
//   }

//   return (
//     <TouchableOpacity
//       activeOpacity={1}
//       onPress={() => {
//         Keyboard.dismiss()
//       }}>
//       <Svg>
//         <Defs>
//           <RadialGradient id="gradient" cx="50%" cy="40%">
//             <Stop offset="0%" stopColor={lighterColor} />
//             <Stop
//               offset="100%"
//               stopColor={theme.CORE.COLORS['primary-default']}
//             />
//           </RadialGradient>
//         </Defs>
//         <Rect x={0} y={0} width={width} height={height} fill="url(#gradient)" />
//       </Svg>
//       <View style={styles.wrapper}>
//         <View style={styles.headerContainer}>
//           <Image source={Logo} style={styles.logo} />
//           <View style={styles.topHeaderLine} />
//           <TouchableOpacity
//             onPress={() => navigation.navigate('Dashboard')}
//             style={styles.leftButton}>
//             <Image source={ArrowShortLeft3x} style={styles.icon} />
//           </TouchableOpacity>
//         </View>
//         <KeyboardAvoidingView
//           style={styles.keyboard}
//           behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//           <View style={styles.container}>
//             <Text variant="h3" color="white" mb={8}>
//               Sign up with Email
//             </Text>
//             <LoginForm onFinish={onEmailLogin} loading={isSpin} />
//           </View>
//         </KeyboardAvoidingView>
//         <View style={styles.bottomContainer}>
//           <Text variant="body1" fontWeight="medium" color="white-t-lighten1">
//             Don't remember your password?{' '}
//           </Text>
//           <TouchableOpacity
//             onPress={() => navigation.navigate('ForgotPasswordScreen')}>
//             <Text variant="body1" fontWeight="medium" color="white">
//               Restore it
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </TouchableOpacity>
//   )
// }

// export default SignUpWithEmailScreen
