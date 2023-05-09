import React, { useState } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import api from '../api'

const TodoForm = ({ onNewItem }) => {
  const [text, setText] = useState('')

  const handleSubmit = async () => {
    if (text) {
      try {
        const response = await api.post('todos/', { title: text })
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
        Add a new item to the list
      </Text>
      <TextInput
        className='h-10 text-xl bg-white rounded-md p-2 text-center'
        onChangeText={setText}
        value={text}
        placeholder="Enter new item"
      />
      <View className='bg-green-100 rounded p-3 mx-10 my-3'>
        <Button title="Add" onPress={handleSubmit} />
      </View>
    </View>
  )
}

export default TodoForm