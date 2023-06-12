import { useState } from "react";

function AddCarsForm({ onAdd, onUpdate, carId }) {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    millage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (carId) {
      
      onUpdate(carId, formData);
    } else {
      // Call the onAdd prop function with the form data to add a new car
      onAdd(formData);
    }
    
    // Clear the form data after submission
    setFormData({
      make: "",
      model: "",
      year: "",
      color: "",
      millage: "",
    });
  };

  return (
    <form id="form" className="add-cars-form" onSubmit={handleSubmit}>
      <label htmlFor="make">Make:</label>
      <input
        type="text"
        id="make"
        name="make"
        value={formData.make}
        onChange={handleChange}
        required
      />
      <label htmlFor="model">Model:</label>
      <input
        type="text"
        id="model"
        name="model"
        value={formData.model}
        onChange={handleChange}
        required
      />
      <label htmlFor="year">Year:</label>
      <input
        type="number"
        id="year"
        name="year"
        value={formData.year}
        onChange={handleChange}
        required
      />
      <label htmlFor="color">Color:</label>
      <input
        type="text"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
        required
      />
      <label htmlFor="millage">Millage:</label>
      <input
        type="number"
        id="millage"
        name="millage"
        value={formData.millage}
        onChange={handleChange}
        required
      />
      <button type="submit" className="btn btn-primary">
        {carId ? "Update Car" : "Add Car"}
      </button>
    </form>
  );
}

export default AddCarsForm;
