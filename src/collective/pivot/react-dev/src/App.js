import React, { useState } from 'react';
import FamilyView from './pages/FamilyView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import { divIcon } from 'leaflet';



function App() {
const url = document.getElementById('root').getAttribute('data-local_query_url');
const details = document.getElementById('root').getAttribute('details_url');

  return (
     <FamilyView  pivot_url={url} details_url={details} />
  );
}

export default App;