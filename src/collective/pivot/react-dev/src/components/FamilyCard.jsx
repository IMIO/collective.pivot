import React from 'react';
import { Card, Button} from 'react-bootstrap';

function FamilyCard(props) {

    return(
        <Card  style={{  }}   className="mb-3 offer-card">
            <Card.Img className="embed-responsive-img offer-card-img" variant="top" src="https://pivotmedia.tourismewallonie.be/ANX-0T-00W0-0001/ANX-0T-00W0-0001.jpg" />
            <Card.Body className="card-orientation card-horizontal">
                <Card.Title>{props.item["title"]}</Card.Title>
                <Button href={"num" && props.infoUrl + props.item["offer"]["offerID"]+'&type='+props.item["offer"]["offerTypeId"]}  type="submit" target="_blank" variant="primary">Détails</Button>
            </Card.Body>
        </Card>
    );
}
export default FamilyCard;