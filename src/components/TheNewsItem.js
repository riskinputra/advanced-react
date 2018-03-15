import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class TheNewsItem extends Component {
  render() {
    console.log(this.props);
    
    return (
      <div>
        <Card style={{paddingBottom:'10px'}}>
          <Image src={this.props.item.urlToImage} />
          <Card.Content>
            <Card.Header>
              {this.props.item.title}
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                {this.props.item.publishedAt}
              </span>
            </Card.Meta>
            <Card.Description>
              {this.props.item.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <p>Author: {this.props.item.author}</p>
          </Card.Content>
        </Card>
      </div>
    )
  }
}