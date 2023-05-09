import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import api from '../api'

const TodoItem = ({ item, onUpdate, onDelete }) => {
  console.log('item', item)
  const handleToggle = async () => {
    try {
      const response = await api.patch(`todos/${item.id}/`, {
        completed: !item.completed,
      });
      onUpdate(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = async () => {
    try {
      await api.delete(`todos/${item.id}/`)
      onDelete(item.id)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View className='flex text-center bg-slate-300 mx-10 my-3 rounded-xl'>
      <TouchableOpacity onPress={handleToggle}>

        <Text
          className={
            `font-semibold text-3xl text-center ${item.completed ? 'line-through text-gray-400' : ''}`
          }
        >
          {item.title} 
        </Text>
        
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDelete}>
        
        <Text 
          className='pt-3 text-red-500 font-semibold text-2xl text-center rounded'
        >
          Delete
        </Text>

      </TouchableOpacity>
    </View>
  )
}

export default TodoItem