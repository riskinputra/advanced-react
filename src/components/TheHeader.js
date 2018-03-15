import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'

export default class TheHeader extends Component {
  render() {
    return (
      <Container text>
        <Header as='h1'>Welcome To News API</Header>
        <hr/>
      </Container>
    )
  }
}
