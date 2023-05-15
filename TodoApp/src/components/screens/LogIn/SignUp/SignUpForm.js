import React, { useState } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import api from '../../../api'

const SignUpForm = ({ onNewItem }) => {
  const [text, setText] = useState('')

  const handleSubmit = async () => {
    if (text) {
      try {
        const response = await api.post('users/', { 
            first_name: first_name,
            last_name: last_name,
            email: email,
            user_name: user_name,
            password: password
        })
        setText('')
        onNewItem(response.data)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <View className='m-10'>
      <Text className='text-center pb-3 text-xl'>
        First Name
      </Text>
      <TextInput
        className='h-10 text-xl bg-white rounded-md p-2 text-center'
        onChangeText={setText}
        value={first_name}
        placeholder="First Name"
      />
      <Text className='text-center pb-3 text-xl'>
        Last Name
      </Text>
      <TextInput
        className='h-10 text-xl bg-white rounded-md p-2 text-center'
        onChangeText={setText}
        value={last_name}
        placeholder="Last Name"
      />
      <Text className='text-center pb-3 text-xl'>
        Email
      </Text>
      <TextInput
        className='h-10 text-xl bg-white rounded-md p-2 text-center'
        onChangeText={setText}
        value={email}
        placeholder="Email"
      />
      <Text className='text-center pb-3 text-xl'>
        User Name
      </Text>
      <TextInput
        className='h-10 text-xl bg-white rounded-md p-2 text-center'
        onChangeText={setText}
        value={user_name}
        placeholder="User Name"
      />
      <Text className='text-center pb-3 text-xl'>
        Password
      </Text>
      <TextInput
        className='h-10 text-xl bg-white rounded-md p-2 text-center'
        onChangeText={setText}
        value={password}
        placeholder="Password"
      />
      <View className='bg-green-100 rounded p-3 mx-10 my-3'>
        <Button title="Add" onPress={handleSubmit} />
      </View>
    </View>
  )
}

export default SignUpForm