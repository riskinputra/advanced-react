import React, { Component } from 'react'
import { connect } from 'react-redux'
export default ChildComponent => {
  class ComposedComponent extends Component {
    // our components just go rendered
    componentDidMount() {
      this.shouldNavigateAway()
    }

    // our componets just go updated
    componentDidUpdate() {
      this.shouldNavigateAway()
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/')
      }
    }
    render() {
      return <ChildComponent {...this.props}/>
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth }
  }

  return connect(mapStateToProps)(ComposedComponent)
}
