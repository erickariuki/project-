import React, { useState, useEffect } from 'react';
import './DisplayCars.css';
function DisplayCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/cars")
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(error => console.error(error));
  }, []);

  const handleToggleDetails = (id) => {
    setCars(prevCars => prevCars.map(car => {
      if (car.id === id) {
        return { ...car, showDetails: true };
      }
      return { ...car, showDetails: false };
    }));
  };

  {


  return (
    <div>
      {/* <h1>Car Rental</h1> */}
      <ul id="item-list">
        {cars.map(car => (
          <li key={car.id} className="card col-2 p-0 m-2" data-id={car.id} onClick={() => handleToggleDetails(car.id)}>
            {car.showDetails ?
              <>
                <img src={car.image} className="card-img-top" alt={car.name} />
                <div className="card-body">
                  <h5 className="card-title">{car.name}</h5>
                  <h5 className="card-brand">Make: {car.make}</h5>
                  <h5 className="card-brand">Model: {car.model}</h5>
                  <h3 className="card-text">license_plate: {car.license_plate}</h3>
                  <h4 className="card-text">millage: {car.millage}</h4>
                
            
            
                </div>
              </>
              :
              <>
                <img src={car.image} className="card-img-top" alt={car.name} title="Click to view details" />
                <div className="card-body">
                  <h5 className="card-title">{car.name}</h5>
        

                </div>
              </>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}
}
export default DisplayCars;
