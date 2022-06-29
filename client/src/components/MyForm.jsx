import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import '../static/Airports.css';
import FlightCard from './FlightCard';
import { airports } from './Airports';
import { airport_id } from './Airport_ID';
 
const MyForm = () => {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        from: '',
        destination: '',
        departureDate: '',
    });
    const [flights, setFlights] = useState([]);

    const [from, setFrom] = useState('');
    const [suggestionsFrom, setSuggestionsFrom] = useState([]);

    const onChangeHandlerFrom = (from) => {
      let matches = []
      if (from.length > 1) {
        matches = airports.filter(ap => {
          const regex = new RegExp(`^.*${from}.*`, 'gi');
          return ap.match(regex)
        })
      }
      setSuggestionsFrom(matches)
      setFrom(from);
    }

    const onSuggestHandlerFrom = (from) => {
      setFrom(from);
      setSuggestionsFrom([]);
      setFormData({
        ...formData,
        from: from
      })
    }

    const [to, setTo] = useState('');
    const [suggestionsTo, setSuggestionsTo] = useState([]);

    const onChangeHandlerTo = (to) => {
      let matches = []
      if (to.length > 1) {
        matches = airports.filter(ap => {
          const regex = new RegExp(`^.*${to}.*`, 'gi');
          return ap.match(regex)
        })
      }
      setSuggestionsTo(matches)
      setTo(to);
      setFormData({
        ...formData,
        destination: to
    })
    }

    const onSuggestHandlerTo = (to) => {
      setTo(to);
      setSuggestionsTo([]);
      setFormData({
        ...formData,
        destination: to
      })
    }

    const handleSubmit = (e) => {
      setLoading(true);
        e.preventDefault();
        formData.from = airport_id[formData.from]
        formData.destination = airport_id[formData.destination]
        axios.post('http://localhost:5000/flights/', formData).then(data => {
            console.log(data.data.data)
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
    <div className='container'>

      <h1>Search for Flights</h1> 
      <div className='row'>
        <div className='col-md-5'>
          <label>From:</label>
        </div>
        <div className='col-md-5'>
          <label>Destination:</label>
        </div>
        <div className='col-md-2'>
          <label>Departure Date:</label>
        </div>
      </div>
      <form name='search' onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-md-5 col-xs-4'>
            <input className='col-md-5 form-control' type="text" required value={from} onChange={e => onChangeHandlerFrom(e.target.value)} name="from"
            onBlur={() => {
              setTimeout(() => {
                setSuggestionsFrom([]);
              }, 100)
            }}
              />
            {suggestionsFrom && suggestionsFrom.map((from, i) => {
              return (
                <div key={i} className='suggestion col-md-5 justify-content-md-center' onClick={() => onSuggestHandlerFrom(from)}>{from}</div>
              )}
            )}
        </div>
        
        <div className='col-md-5 col-xs-4'>
          <input className='col-md-5 form-control' type="text" required value={to} onChange={e => onChangeHandlerTo(e.target.value)} name="destination"
            onBlur={() => {
              setTimeout(() => {
                setSuggestionsTo([]);
              }, 100)
            }}
              />
            {suggestionsTo && suggestionsTo.map((to, i) => {
              return (
                <div key={i} className='suggestion col-md-5 justify-content-md-center' onClick={() => onSuggestHandlerTo(to)}>{to}</div>
              )}
            )}
        </div>

        <div className='col-md-2'>
          {/* <label>Departure Date:</label> */}
            <input type="date" required min="2020-01-01T00:00" max="2030-12-31T00:00" name="departureDate"  onChange={changeDepartureDate} />
          <input type="submit" value="Search" />
        </div>
        </div>
      </form>

      { loading
        ? <h2>Loading...</h2>
        : flights && flights.map(flight => (flight.itineraries[0].segments.length === 1 && <FlightCard flight={flight} />)) }
    </div>
  )

}
 
export default MyForm;