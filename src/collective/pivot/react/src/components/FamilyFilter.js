import React from 'react';
import { Form} from 'react-bootstrap';

function FamilyFilter(props) {
    function handleChange(event) {
        props.onChange(event.target.value);

    }
    return(
        <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Catégories</Form.Label>
                <Form.Control value={props.value} onChange={handleChange} as="select" custom>
                <option value={"null"}>Toutes les catégories</option>
            {props.category && props.category.map((option, i) => <option key={i}>{option}</option>)}
                </Form.Control>
            </Form.Group>
        </Form>
    );
}

export default FamilyFilter;