import React from 'react';
import PivotCategory from './PivotCategory';
import useFetch from './useFetch'

function FamilyView() {
    const [familyItem, setFamilyItem] = React.useState([
      {familytype: 'Gîte', id: '1'},
      {familytype: 'Hôtel', id:'2'},
      {familytype: 'Chambre d’hôtes', id:'2'},
      {familytype: 'Meublé', id:'2'},
      {familytype: 'Camping', id:'2'},
      {familytype: 'Budget Holiday', id:'2'},
      {familytype: 'Village de vacances', id:'2'},
      {familytype: 'Hébergements', id:'2'},

    ]);
    const [familyValue, setFamilyValue] = React.useState("tout");

    const res = useFetch("https://pivotweb.tourismewallonie.be/PivotWeb-3.1/thesaurus/family/urn:fam:1;pretty=true;fmt=json", {});
    if (!res.response) {
      return <div>Loading...</div>
      
    }
    const result = res.response.spec[0]
    const resultFamily= result.label[0].value
    const resultItem = result.spec
    const resultItemMap = resultItem.map(item => item.label[0].value);
    console.log(resultItemMap)
    console.log(familyValue)

    // console.log(familyValue)
    return(
        <div>
            <h1>PivotCategory</h1>
            <h2>{resultFamily}</h2>
            <label for="pet-select">Choose a catego</label>
        <select onChange={e => setFamilyValue(e.currentTarget.value)} value={familyValue} name="pets" id="pet-select">
        {familyItem.map((option, i) => <option key={i}>{option.familytype}</option>)}
        </select>
        <div>
        <ul>
            {
                // resultItem.filter((item) => <li>{item === "Hôtel"}</li>);
                // resultItem && resultItem.map((item, index) =>
                //     <li key={index}>{item.label[0].value}</li>
                // )
                resultItemMap.filter(item => item === familyValue).map(filteredItem => (
                    <li>
                      {filteredItem}
                    </li>
                  ))
            }
        </ul>
        </div>
        </div>
    );
}

export default FamilyView;