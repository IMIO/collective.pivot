import React, {useState, useEffect} from 'react';
import PivotCategory from './PivotCategory';
import useFetch from './useFetch';
import FamilyFilter from './FamilyFilter'

function FamilyView2() {
    const [category, setCategory] = useState(null);
    const [items, setItems] = useState({});
    const [error, setError] = React.useState(null);

    let myHeaders = new Headers();
    myHeaders.append("ws_key", "1b24b1ce-3c3f-405f-8881-56721a0017b3");
    myHeaders.append("Accept", "application/json");
    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const useFetch = (url, options, stateSetter) => {
      React.useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(url, options);
            const json = await res.json();
            stateSetter(json);
          } catch (error) {
            setError(error);
          }
        };
        fetchData();
      }, []);
    };
      useFetch("https://pivotweb.tourismewallonie.be/PivotWeb-3.1/thesaurus/family/urn:fam:1;pretty=true;fmt=json", {}, setCategory);
      useFetch("https://pivotweb.tourismewallonie.be/PivotWeb-3.1/query/OTH-A0-003P-2PWS;content=1;param=cp:7000", requestOptions, setItems);

      console.log(items)
    
    return(
        <div>
          HEllo
          <FamilyFilter filter={category && category.spec[0].spec}/>
        </div>
    );
}

export default FamilyView2;