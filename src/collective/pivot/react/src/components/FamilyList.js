import React, {useState, useEffect} from 'react';
import FamilyCard from './FamilyCard';
import {ListGroup} from 'react-bootstrap';


function FamilyList(props) {
    const [state, setState] = useState([]);
    const [infoUrl, setInfoUrl] = useState("");

    useEffect(() => {
        setState(props.items)
        setInfoUrl(props.details)

     }, [props])
    return(
        <ListGroup variant="flush">
           {state && state.map((item, i) => (<ListGroup.Item><FamilyCard key={i} infoUrl={infoUrl}  item={item}/></ListGroup.Item>))}
        </ListGroup>
    );
}

export default FamilyList;