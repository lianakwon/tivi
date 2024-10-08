import React from "react";
import "./FourColGrid.css";

const FourColGrid = props => {
  const renderElements = () => {
    const gridElements = props.children.map((element, i) => {
      return (
        <div key={i} className="rmdb-grid-element">
          {element}
        </div>
      );
    });
    return gridElements;
  };

  return (
    <div className="rmdb-grid">
      <h1> </h1>
      <div className="rmdb-grid-content">{renderElements()}</div>
    </div>
  );
};

export default FourColGrid;
