import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import FlightCard from './FlightCard';
 
const MyForm = () => {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        from: '',
        destination: '',
        departureDate: '',
    });
    const [flights, setFlights] = useState([]);

    const handleSubmit = (e) => {
      setLoading(true);
        e.preventDefault();
        axios.post('http://localhost:5000/flights/', formData).then(data => {
            setFlights(data.data.data);
            setLoading(false);
        }
        ).catch(err => {
            console.log(err);
        }
        )
    }

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

      <form onSubmit={handleSubmit} >
        <label>From:</label>
          <input type="text" required name="from" onChange={changeFrom}/>
        <label>Destination:</label>
          <input type="text" required name="destination" onChange={changeDestination}/>
        <label>Departure Date:</label>
          <input type="date" required min="2020-01-01T00:00" max="2030-12-31T00:00" name="departureDate"  onChange={changeDepartureDate} />
        <input type="submit" value="Search" />
      </form>
      {loading && <h2>Loading...</h2>}
      {/* {!loading && flights && <h1>Available Flights</h1>} */}
      {!loading && flights && flights.map(flight => (<FlightCard flight={flight} />))}
    </div>
  )

}
 
export default MyForm;