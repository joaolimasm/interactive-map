import React, { useState } from "react";
import AreaList from "./components/AreaList";
import Map from "./components/Map";
const App = () => {
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [data, setData] = useState({ features: [] });

  const handleAreaClick = (area) => {
    const updatedAreas = data.features.map((a) => ({
      ...a,
      properties: {
        ...a.properties,
        isSelected: a.properties.nome === area.properties.nome,
      },
    }));

    setSelectedAreas([area]);
    setData({
      ...data,
      features: updatedAreas,
    });
  };

  const handleClearSelection = () => {
    setSelectedAreas([]);
  };

  const handleListSelection = (selectedArea) => {
    const area = data.features.find(
      (item) => item.properties.nome === selectedArea
    );
    if (area) {
      handleAreaClick(area);
    }
  };

  return (
    <div>
      <Map
        data={data}
        selectedAreas={selectedAreas}
        onAreaClick={handleAreaClick}
      />
      <AreaList
        areas={selectedAreas}
        onClearSelection={handleClearSelection}
        onListSelection={handleListSelection}
      />
    </div>
  );
};

export default App;
