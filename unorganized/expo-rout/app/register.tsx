import { View, Text, Pressable } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'

const RegisterPage = () => {
  return (
	<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
	  <Text>RegisterPage</Text>
	  <Link href={'/'} asChild>
		<Pressable>
			<Text>Go to Home</Text>
		</Pressable>
	  </Link>
	</View>
  )
}

export default RegisterPage