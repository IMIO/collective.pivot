import React, {useState, useEffect} from 'react';
import { Card, Row, Col} from 'react-bootstrap';

function FamilyCard(props) {

    console.log(props)
    return(
        <Card className="mb-3">
            <Card.Body className="card-orientation card-horizontal">
                <Card.Title>{props.item["title"]}</Card.Title>
                <Card.Text>{"num" && props.item["category"]}</Card.Text>
                <Card.Text>{props.item["latitude"]}</Card.Text>
                <Card.Text>{props.item["longitude"]}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default FamilyCard;