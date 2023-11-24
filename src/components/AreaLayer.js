import React, { useEffect } from 'react';
import { Layer, Feature } from 'react-mapbox-gl';
import data from '../areas.json';

const AreaLayer = ({ area, onAreaClick }) => {
  const handleAreaClick = () => {
    onAreaClick(area);
  };

   const coordinates = data.features.map((area) => area.geometry.coordinates[0][0])

  useEffect(() => {
    console.log(coordinates);
  }, [coordinates]);

  return (
    <>
      <Layer
        type="fill"
        paint={{
          'fill-color': area.properties.isSelected ? '#f00' : '#088',
          'fill-opacity': area.properties.isSelected ? 0.7 : 0.5,
        }}
        onClick={handleAreaClick}
      >
        <Feature coordinates={coordinates} />
      </Layer>
      {area.properties.isSelected && (
        <Layer
          type="circle"
          paint={{
            'circle-radius': area.properties.area / 1000,
            'circle-color': '#f00',
            'circle-opacity': 0.7,
          }}
        >
          {coordinates.map((coord, index) => (
            <Feature key={`circle-${index}`} coordinates={coord} />
          ))}
        </Layer>
      )}
    </>
  );
};

export default AreaLayer;
