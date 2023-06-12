import React, { useState, useEffect } from 'react';
import './TableCars.css';


function TableCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Make a GET request to the server for all cars
    fetch('http://localhost:9292/cars')
      .then(res => res.json())
      .then(cars => setCars(cars));
  }, []);

  const deleteCar = (id) => {
    // Make a DELETE request to the server to delete the car with the given id
    fetch(`http://localhost:9292/cars/${id}`, {
      method: 'DELETE',
    }).then(() => setCars(cars.filter(car => car.id !== id)));
  };

  const addCar = (car) => {
    // Make a POST request to the server to add the new car
    fetch('http://localhost:9292/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    })
      .then(res => res.json())
      .then(newCar => setCars([...cars, newCar]));
  };

  return (
    <div>
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Make</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">Color</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.id}>
              <th scope="row">{car.id}</th>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.color}</td>
              <td>{car.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCar(car.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCars;
