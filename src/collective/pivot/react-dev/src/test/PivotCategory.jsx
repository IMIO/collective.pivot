import React, { useState, useEffect, setState } from 'react';
import useFetch from '../useFetch'
function PivotCategory() {
    // const [hotels, setHotels] = useState(null);

    let myHeaders = new Headers();
    myHeaders.append("ws_key", "1b24b1ce-3c3f-405f-8881-56721a0017b3");
    myHeaders.append("Accept", "application/json");
    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(
    //             `https://pivotweb.tourismewallonie.be/PivotWeb-3.1/query/OTH-A0-003P-2PWS;content=4;param=cp:7000`,requestOptions)     
    //         const data = await response.json();
    //         const item = data.offre
    //         setHotels(item);
            
    //     };
    
    //     fetchData();
    // }, []);
    // {console.log(hotels)}
    
    const res = useFetch("https://pivotweb.tourismewallonie.be/PivotWeb-3.1/query/OTH-A0-003P-2PWS;content=4;param=cp:7000", requestOptions);
    if (!res.response) {
      return <div>Loading...</div>
      
    }
    const resultCount = res.response.count
    const resultItem = res.response.offre

    console.log(res.response)
    return (
        <div>
            {/* {console.log(hotels)} */}
            <p>{resultCount}</p>
            {/* {hotels && <div>{hotels[0].codeCgt}</div>} */}
            {/* <p>{hotels.offre[2].codeCgtwez}</p> */}
            {<ul> 
                {
                  resultItem && resultItem.map(name => <li>{name.nom}</li>)
                }
            </ul>}
        </div>
    );
  }
  
  export default PivotCategory;