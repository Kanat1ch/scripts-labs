import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import './App.scss';
import Card from './Components/Card';

class App extends Component {
  state = {
    cards: [
      {id: 0, name: 'First', status: Math.floor(Math.random() * 2)},
      {id: 1, name: 'Second', status: Math.floor(Math.random() * 2)},
      {id: 2, name: 'Third', status: Math.floor(Math.random() * 2)},
      {id: 3, name: 'Fourth', status: Math.floor(Math.random() * 2)},
      {id: 4, name: 'Fifth', status: Math.floor(Math.random() * 2)},
      {id: 5, name: 'Sixth', status: Math.floor(Math.random() * 2)},
      {id: 6, name: 'Seventh', status: Math.floor(Math.random() * 2)},
      {id: 7, name: 'Eighth', status: Math.floor(Math.random() * 2)},
      {id: 8, name: 'Ninth', status: Math.floor(Math.random() * 2)},
      {id: 9, name: 'Tenth', status: Math.floor(Math.random() * 2)}
    ],
    cardName: ''
  };

setValue = (event) => {
  const newName = event.target.value;
  this.setState({
    value: newName
  })
};


addCard = (event) => {
  event.preventDefault();
  const random = Math.floor(Math.random() * 2);
  this.setState(prevState =>({
    cards: [...prevState.cards, {id: (prevState.cards.length !== 0 ? prevState.cards[prevState.cards.length - 1].id + 1 : 0), name: prevState.value, status: random}],
    value: ''
  }))
};

deleteCard = (deleteIndex) => {
  const cards = this.state.cards.filter(card => card.id !== deleteIndex);
  this.setState({
    cards
  })
};

render() {
return (
  <div className="App">
    <Container>
      <Row style={{padding: '20px 0 0'}}>
        { this.state.cards.map((card, index) => {
          return(
            <Col key={index} lg={3} md={6} xs={12}>
              <Card
                id={card.id}
                name={card.name}
                status={card.status}
                deleteCard={() => this.deleteCard(card.id)}
              />
            </Col>
          )
        }) }
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Card name" onChange={this.setValue} value={this.state.value}/>
              <Button variant="primary" type="submit" onClick={this.addCard}>Add</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  </div>
);
}
}

export default App;
