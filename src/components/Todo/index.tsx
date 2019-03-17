import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

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
    return (
      <View>
        <Text>I'm a Todo Component</Text>
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
