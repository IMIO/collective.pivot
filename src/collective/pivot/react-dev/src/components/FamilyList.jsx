import React, {useState, useEffect} from 'react';
import FamilyCard from './FamilyCard';

function FamilyList(props) {
    const [state, setState] = useState([]);
    useEffect(() => {
        setState(props.items)
     }, [props])
    return(
        <div>

           {state && state.map((item, i) => (<FamilyCard key={i} item={item}/>))};
        </div>
    );
}

export default FamilyList;