import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import FlightCard from './FlightCard';
 
const MyForm = ({airports}) => {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        from: '',
        destination: '',
        departureDate: '',
    });
    const [flights, setFlights] = useState([]);

    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [value, setValue] = useState("");
  
    const handleChange = (e) => {
      const query = e.target.value.toLowerCase();
      setValue(query);
      if (query.length > 1 && airports) {
        const filterSuggestions = airports.filter(
          (suggestion) =>
            suggestion.toLowerCase().indexOf(query) > -1
        );
        setSuggestions(filterSuggestions);
        setSuggestionsActive(true);
      } else {
        setSuggestionsActive(false);
      }
    };
  
    const handleClick = (e) => {
      setSuggestions([]);
      setValue(e.target.innerText);
      setSuggestionsActive(false);
    };
  
    const handleKeyDown = (e) => {
      // ENTER
      if (e.keyCode === 13) {
        setValue(suggestions[suggestionIndex]);
        setSuggestionIndex(0);
        setSuggestionsActive(false);
      }
    };
  
    const Suggestions = () => {
      return (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => {
            return (
              <li
                className={index === suggestionIndex ? "active" : ""}
                key={index}
                onClick={handleClick}
              >
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    };


    const handleSubmit = (e) => {
      setLoading(true);
        e.preventDefault();
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
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <h1>Search for Flights</h1>

      <form >
        <label>From:</label>
          <input type="text" required value={value} onChange={handleChange} onKeyDown={handleKeyDown} name="from"/>
        <label>Destination:</label>
          <input type="text" required value={value} onChange={handleChange} onKeyDown={handleKeyDown} name="destination"/>
        <label>Departure Date:</label>
          <input type="date" required min="2020-01-01T00:00" max="2030-12-31T00:00" name="departureDate"  onChange={changeDepartureDate} />
        <input type="submit" value="Search" />
      </form>
      {suggestionsActive && <Suggestions />}
      { loading
        ? <h2>Loading...</h2>
        : flights && flights.map(flight => (flight.itineraries[0].segments.length === 1 && <FlightCard flight={flight} />)) }
    </div>
  )

}
 
export default MyForm;