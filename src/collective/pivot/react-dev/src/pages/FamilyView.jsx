import React, {useState, useEffect} from 'react';
import FamilyFilter from '../components/FamilyFilter';
import FamilyList from '../components/FamilyList';
import FamilyMap from '../components/FamilyMap';
import { Container, Row, Col} from 'react-bootstrap';

function FamilyView() {
  const [categoryList, setCategoryList] = React.useState([]);
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = React.useState("null");
  const [filterItems, setFilterItems] = useState(null);
  const [error, setError] = React.useState(null);
  
  
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  // fetch data 
  const useFetch = (url, options, stateSetter) => {
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url, options);
          const json = await res.json();

          stateSetter(json.items);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, []);
  };


  // fetch category
  useEffect(() => {
    async function getCharacters() {
      const response = await fetch("http://localhost:8080/Plone/hey/@pivot", requestOptions);
      const body = await response.json();
      setCategoryList( () => {
          let category = body.items.map(t => t.category)
          let filter =  category.filter((value, index) => {return category.indexOf(value) === index;})
          return filter
      });
    }
    getCharacters();
  }, []);

    useFetch("http://localhost:8080/Plone/hey/@pivot", requestOptions, setItems);

    useEffect(() => {
      if(activeCategory !== "null"){
        const f = items.filter(item => item.category === activeCategory);
        setFilterItems(f);
      }else{
        setFilterItems(items)
        
      }
    }, [activeCategory,items]);

    function handleCategory(newCategory) {
        setActiveCategory(newCategory);
      }

    return(
      <Container fluid >
            <h1>Pivot</h1>
            <FamilyFilter items={items} category={categoryList} value={activeCategory} onChange={handleCategory} />
            <p className="h5">Il y a {filterItems && filterItems.length} offres</p>
            <Row>
              <Col className="pivot-offer-list"><FamilyList items={filterItems} /></Col>
              <Col><FamilyMap items={filterItems}/></Col>
            </Row>
      </Container>
    );
}

export default FamilyView;