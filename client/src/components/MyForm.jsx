import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import '../static/Airports.css';
import FlightCard from './FlightCard';
import { airports } from '../static/Airports';
import { airport_id } from '../static/Airport_ID';
 
const MyForm = () => {

    // Loading state used for loading the flight results
    const [loading, setLoading] = useState(false);

    // State that has the flight query data that will be sent to the server
    const [formData, setFormData] = useState({
        from: '',
        destination: '',
        departureDate: '',
    });

    // State that has the flight results
    const [flights, setFlights] = useState([]);

    // Stores the 'from' airport
    const [from, setFrom] = useState('');

    // State that has possible airports to select from
    const [suggestionsFrom, setSuggestionsFrom] = useState([]);

    // Handles when the user is typing in an airport in the 'from' field
    const onChangeHandlerFrom = (from) => {
      // Possible airport matches
      let matches = []

      // Searches the airport list based on the user input
      if (from.length > 1) {
        matches = airports.filter(ap => {
          const regex = new RegExp(`^.*${from}.*`, 'gi');
          return ap.match(regex)
        })
      }

      // Updates the possible airport matches 
      setSuggestionsFrom(matches)

      // Changes the 'from' form
      setFrom(from);
    }

    // Handles when the user clicks an airport option from the dropdown
    const onSuggestHandlerFrom = (from) => {
      setFrom(from);

      // CLear the suggestion list
      setSuggestionsFrom([]);

      // Updates the form data to be sent to the server
      setFormData({
        ...formData,
        from: from
      })
    }

    //Stores the 'to' airport
    const [to, setTo] = useState('');

    // State that has possible airports to select from
    const [suggestionsTo, setSuggestionsTo] = useState([]);

    // Handles when the user is typing in an airport in the 'destination' field
    const onChangeHandlerTo = (to) => {
      // Possible airport matches
      let matches = []

      // Searches the airport list based on the user input
      if (to.length > 1) {
        matches = airports.filter(ap => {
          const regex = new RegExp(`^.*${to}.*`, 'gi');
          return ap.match(regex)
        })
      }

      // Updates the possible airport matches 
      setSuggestionsTo(matches)

      // Changes the 'to' form
      setTo(to);
    }

    // Handles when the user clicks an airport option from the dropdown
    const onSuggestHandlerTo = (to) => {
      setTo(to);

      // CLear the suggestion list
      setSuggestionsTo([]);
      
      // Updates the form data to be sent to the server
      setFormData({
        ...formData,
        destination: to
      })
    }

    // Handles when the search is submitted
    const handleSubmit = (e) => {
      setLoading(true);
      e.preventDefault();

      // Update the airport names to the 3 letter airport codes
      formData.from = airport_id[formData.from]
      formData.destination = airport_id[formData.destination]

      // Post the form data to the server
      axios.post('http://localhost:5000/flights/', formData).then(data => {
        // Update the flight results
          setFlights(data.data.data);
          setLoading(false);
      }).catch(err => {
          console.log(err);
      })
    }

    // Handles when the user selects a flight date
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

        {/* Column of the starting airport */}
        <div className='col-md-5 col-xs-4'>
          <input className='col-md-5 form-control' type="text" required value={from} 
                onChange={e => onChangeHandlerFrom(e.target.value)} name="from"
                onBlur={() => {
                  setTimeout(() => {
                    setSuggestionsFrom([]);
                  }, 100)
                }} />
          {/* Maps the suggestion list */}
          {suggestionsFrom && suggestionsFrom.map((from, i) => {
            return (
              <div key={i} className='suggestion col-md-5 justify-content-md-center' 
                  onClick={() => onSuggestHandlerFrom(from)}>{from}</div>
            )}
          )}
        </div>
        
        {/* Column of the destination airport */}
        <div className='col-md-5 col-xs-4'>
          <input className='col-md-5 form-control' type="text" required value={to} 
                onChange={e => onChangeHandlerTo(e.target.value)} name="destination"
                onBlur={() => {
                  setTimeout(() => {
                    setSuggestionsTo([]);
                  }, 100)
                }} />
          {/* Maps the suggestion list */}
          {suggestionsTo && suggestionsTo.map((to, i) => {
            return (
              <div key={i} className='suggestion col-md-5 justify-content-md-center' 
                  onClick={() => onSuggestHandlerTo(to)}>{to}</div>
            )}
          )}
        </div>

        {/* Column of the departure date */}
        <div className='col-md-2'>
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