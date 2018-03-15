import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { get_news } from '../redux/actions/newsActions'
import TheNewsItem from './TheNewsItem'

class TheNews extends Component {

  componentWillMount(){
    this.props.fetchNews()
  }

  render() {
    return (
      <div>
        <Container>
        <Grid columns={3}>
          <Grid.Row style={{paddingBottom:'10px'}}>
            {this.props.listNews.map((newsItem, i) => {
              return (
                <Grid.Column key={i}>
                  <TheNewsItem item={newsItem} index={i}/>
                </Grid.Column>
              )
            })}
          </Grid.Row>
        </Grid>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listNews: state.newsReducers.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: () => dispatch(get_news())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheNews)