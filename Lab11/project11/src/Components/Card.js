import React, {Component} from 'react';
import './Card.scss'
import {Button} from "react-bootstrap";


class Card extends Component {
    render() {
        let activityClass;
        this.props.status === 1 ? activityClass = 'active' : activityClass = 'inactive';

        return (
            <div className={`card ${activityClass}`}>
                <div className="card-body">
                    <div className="text">
                        <h3>ID: {this.props.id}</h3>
                        <p>Name: {this.props.name}</p>
                    </div>
                    <Button variant="danger" onClick={this.props.deleteCard}>Delete</Button>
                </div>
            </div>
        );
    }
}

export default Card;