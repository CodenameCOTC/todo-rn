import React, { PureComponent } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

import TodoItem from './TodoItem'
import { Text } from '../common'
import { ITodoState } from './redux/types'
import { ApplicationState, ConnectedReduxProps } from '../../store'
import { requestTodos } from './redux/actions'

interface ITodoSate {}

interface ITodoProps {}

interface IMapStateToProps {
  todos: ITodoState
  requestTodos(): any
}

type Props = IMapStateToProps & ITodoProps & ConnectedReduxProps

class Todo extends PureComponent<Props, ITodoSate> {
  componentDidMount() {
    this.props.requestTodos()
  }
  render() {
    const { todo } = this.props.todos.items

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{
            backgroundColor: '#fff',
            marginTop: 50,
          }}
          data={todo}
          renderItem={({ item }) => <TodoItem todo={item} />}
          keyExtractor={({ _id }) => _id}
          ListFooterComponent={<View style={{ height: 100 }} />}
        />
      </View>
    )
  }
}

const mapStateDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ requestTodos }, dispatch)

const mapStateToProps = (state: ApplicationState) => ({
  todos: state.todos,
})

export default connect(
  mapStateToProps,
  mapStateDispatchToProps
)(Todo)
