import React, {Component} from 'react';
import {Button, Col, Form} from "react-bootstrap";
import Person from "../PersonCard/PersonCard";
import {NavLink} from "react-router-dom";
import axios from 'axios';

class Persons extends Component {

    state = {
      persons: [],
        term: ''
    };

    async componentDidMount() {
        try {
            const response  = await axios.get('https://lr-10f95.firebaseio.com/persons.json');
            const persons = Object.entries(response.data).map((person) => {
                return {
                    personId: person[0],
                    personData: person[1]
                }
            });
            this.setState({persons})
        } catch (e) {
            console.log(e)
        }
    }

    searchHandler = event => {
      this.setState({term: event.target.value})
    };

    searchingFor = term => {
        return function(x) {
            return (x.personData.name.toLowerCase().includes(term.toLowerCase())) || (x.personData.surName.toLowerCase().includes(term.toLowerCase())) || !term
        }
    };

    sortByIdPlus = (event) => {
        const getAge = require('get-age');
        console.log(event.target);
        if (event.target.value === 'По возрастанию ID') {
            const sorting = this.state.persons;
            sorting.sort(function (a,b) {
                return a.personId - b.personId
            });
            this.setState({persons: sorting})
        }
        else if (event.target.value === 'По убыванию ID') {
            const sorting = this.state.persons;
            sorting.sort(function (a,b) {
                return a.personId - b.personId
            });
            sorting.reverse();
            this.setState({persons: sorting})
        }
        else if (event.target.value === 'Сначала моложе') {
            const sorting = this.state.persons;
            sorting.sort(function (a,b) {
                return getAge(a.personData.born) - getAge(b.personData.born)
            });
            this.setState({persons: sorting})
        }
        else if (event.target.value === 'Сначала старше') {
            const sorting = this.state.persons;
            sorting.sort(function (a,b) {
                return getAge(a.personData.born) - getAge(b.personData.born)
            });
            sorting.reverse();
            this.setState({persons: sorting})
        }
    };

    render() {
        return (
            <div className={'Persons'}>
                <div className="card filters">
                    <div className="card-body">
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} lg={9} controlId="search">
                                    <Form.Control type="text" placeholder="Введите имя или фамилию" onChange={this.searchHandler} />
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </Form.Group>

                                <Form.Group as={Col} lg={3} controlId="formGridState">
                                    <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>
                                    <Form.Control as="select" onClick={this.sortByIdPlus}>
                                        <option>По возрастанию ID</option>
                                        <option>По убыванию ID</option>
                                        <option>Сначала старше</option>
                                        <option>Сначала моложе</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </div>
                </div>
                <div className="persons-list">
                    <div className={'card'}>
                        <div className={'card-header'}>
                            <NavLink to={'/add'}><Button variant={'success'}>+ Добавить сотрудника</Button></NavLink>
                        </div>
                        <div className={'card-body container-fluid'}>
                            <div className="row">
                                {this.state.persons.filter(this.searchingFor(this.state.term)).map((person, index) => {
                                    return (
                                        <Person
                                            className={'col-lg-3'}
                                            key={index+person}
                                            id={person.personId}
                                            personData={person.personData}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Persons;