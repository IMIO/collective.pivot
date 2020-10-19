import React, {useState, useEffect} from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


function FamilyMap(props) {
  const [activeItem, setActiveItem] = useState(null);
    return (
        <Map center={[50.44569,3.95355]} zoom={14}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
             { props.items && props.items.map((mark,id) => (
              <Marker 
                key={id} 
                position={[
                  mark.latitude, 
                  mark.longitude
                ]}
                onClick= {() =>{
                  setActiveItem(mark)
                }}
              />
            ))};

            {activeItem && (
              <Popup 
                position={[
                  activeItem.latitude, 
                  activeItem.longitude
                ]}
                onClose={() =>{
                  setActiveItem(null);
                }}
              >
              <div>
                <h2>{activeItem.title}</h2>
              </div>
              </Popup>
            )}
        </Map>
    )
}

export default FamilyMap;