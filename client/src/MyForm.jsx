import React, { useState, setState } from 'react'

 
const MyForm = () => {

    //get the form data
    let [formData, setFormData] = useState({
        from: '',
        destination: '',
        departureDate: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    let {form, destination, departureDate} = formData

    function changeFrom(e) {
        setFormData({
            ...formData,
            from: e.target.value
        })
    }

    function changeDestination(e) {
        setFormData({
            ...formData,
            destination: e.target.value
        })
    }

    function changeDepartureDate(e) {
        setFormData({
            ...formData,
            departureDate: e.target.value
        })
    }


  return (
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <h1>Search for Flights</h1>

      {/* <form action='http://localhost:5000/flights/test/' method='POST'> */}
      <form onSubmit={handleSubmit} >
        <label>From:</label>
          <input type="text" name="from" onChange={changeFrom}/>
        <label>Destination:</label>
          <input type="text" name="destination" onChange={changeDestination}/>
        <label>Departure Date:</label>
          <input type="date" required min="2020-01-01T00:00" max="2030-12-31T00:00" name="departureDate"  onChange={changeDepartureDate} />
        <input type="submit" value="Search" />
      </form>
    </div>
  )

}
 
export default MyForm;