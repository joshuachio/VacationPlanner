import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FlightCard from './FlightCard';

const Flights = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/flights/').then(res => {
            setFlights(res.data);
        })
      }, [flights.values])

    console.log(flights.values)

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Available Flights</h1>  
            {flights.map(flight => (<FlightCard flight={flight} />))}
        </div>
    )
}

export default Flights