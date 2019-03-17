import React, { PureComponent } from 'react'

import { Todo, Container } from '../../components'
import options from './index.options'

class Home extends PureComponent {
  static options() {
    return options
  }
  render() {
    return (
      <Container>
        <Todo />
      </Container>
    )
  }
}

export default Home
