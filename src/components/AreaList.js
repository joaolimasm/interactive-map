import React, { useState } from "react";
import areasData from "../areas.json";
import {
  Container,
  StyledSelect,
  StyledOption,
  StyledButton,
} from "./../design-system/styles";

const AreasSelecionadas = () => {
  const [areasSelecionadas, setAreasSelecionadas] = useState([]);

  const handleItemClick = (selectedArea) => {
    setAreasSelecionadas((prevSelection) => [...prevSelection, selectedArea]);
  };

  const onClearSelection = () => {
    setAreasSelecionadas([]);
  };

  return (
    <Container>
      <div className="row container">
        <div className="itens">
          
          <ul>
          <h2>Áreas Selecionadas</h2>
            {areasData.features
            
              .filter((area) =>
                areasSelecionadas.includes(area.properties.nome)
              )
              .map((selectedArea) => (
                
                <li key={selectedArea.properties.nome}>
                  
                  {selectedArea.properties.nome} - Área:{" "}
                  {selectedArea.properties.area}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="row container">
        <div className=" selected-itens">
          <h2>Selecione uma Área</h2>
          <StyledSelect onChange={(e) => handleItemClick(e.target.value)}>
            <StyledOption value="">Selecione...</StyledOption>
            {areasData.features.map((area) => (
              <StyledOption
                key={area.properties.nome}
                value={area.properties.nome}
              >
                {area.properties.nome}
              </StyledOption>
            ))}
          </StyledSelect>
          <StyledButton onClick={onClearSelection}>Limpar Seleção</StyledButton>
        </div>
      </div>
    </Container>
  );
};

export default AreasSelecionadas;
