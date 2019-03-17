import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import moment from 'moment'

import { Text } from '../../common'
import { ITodoItem } from '../redux/types'
import styles from './index.styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface ITodoItemProps {
  todo: ITodoItem
}

const TodoItem: React.SFC<ITodoItemProps> = ({ todo }) => {
  return (
    <View style={styles.card}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{todo.title}</Text>
        <Text style={styles.description}>{todo.description}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            Created at: {moment(todo.createdDate).format('LL')}
          </Text>
          <Text style={styles.date}>
            Deadline: {moment(todo.deadline).format('LL')}
          </Text>
        </View>
      </View>
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity>
          <Icon name="done" size={30} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TodoItem
