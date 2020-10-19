import React, { useState, useEffect} from 'react';

function FamilyFilter(props) {
    // const [filter, setFilter] = useState(null);
    // useEffect(() => {
    //     setFilter(props.filter);
    // });
return(
    <div>
        TEEE
     <p>{'test'}</p>
         <label >Catégories</label> 
        <select  name="filters" id="filter-select">
        {props.filter && props.filter.map((option, i) => <option key={i}>{option.label[0].value}</option>)}
        </select>

    </div>
)

}
export default FamilyFilter