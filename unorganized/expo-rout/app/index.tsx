import { View, Text, Pressable } from 'react-native'
import {Link, useRouter} from 'expo-router'
import React from 'react'

const LoginPage = () => {
	const router = useRouter()
	const handlePress=()=>{

		router.replace('app')
	}
  return (
	<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
		<Text>SOme fancy logo</Text>
	  
	  <Pressable onPress={handlePress}>
		<Text>Login</Text>

	  </Pressable>
	  <Text>FAncy slide bar to go register</Text>
	  <Link href={'/register'}>Create Account</Link>
	</View>
  )
}

export default LoginPage