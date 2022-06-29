import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import '../static/airports.css';
import FlightCard from './FlightCard';
import { airports } from './airports';
 
const MyForm = () => {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        from: '',
        destination: '',
        departureDate: '',
    });
    const [flights, setFlights] = useState([]);

    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [airportSuggestions, setAirportSuggestions] = useState([]);

    const onChangeHandler = (text) => {
      let matches = []
      if (text.length > 1) {
        matches = airports.filter(ap => {
          const regex = new RegExp(`^${text}`, 'gi');
          return ap.match(regex)
        })
      }
      setSuggestions(matches)
      setText(text);
    }

    const onSuggestHandler = (text) => {
      setText(text);
      setSuggestions([]);
    }

    // const [suggestions, setSuggestions] = useState([]);
    // const [suggestionIndex, setSuggestionIndex] = useState(0);
    // const [suggestionsActive, setSuggestionsActive] = useState(false);
    // const [value, setValue] = useState("");
  
    // const handleChange = (e) => {
    //   const query = e.target.value.toLowerCase();
    //   setValue(query);
    //   if (query.length > 1 && airports) {
    //     const filterSuggestions = airports.filter(
    //       (suggestion) =>
    //         suggestion.toLowerCase().indexOf(query) > -1
    //     );
    //     setSuggestions(filterSuggestions);
    //     setSuggestionsActive(true);
    //   } else {
    //     setSuggestionsActive(false);
    //   }
    // };
  
    // const handleClick = (e) => {
    //   setSuggestions([]);
    //   setValue(e.target.innerText);
    //   setSuggestionsActive(false);
    // };
  
    // const handleKeyDown = (e) => {
    //   // ENTER
    //   if (e.keyCode === 13) {
    //     setValue(suggestions[suggestionIndex]);
    //     setSuggestionIndex(0);
    //     setSuggestionsActive(false);
    //   }
    // };
  
    // const Suggestions = () => {
    //   return (
    //     <ul className="suggestions">
    //       {suggestions.map((suggestion, index) => {
    //         return (
    //           <li
    //             className={index === suggestionIndex ? "active" : ""}
    //             key={index}
    //             onClick={handleClick}
    //           >
    //             {suggestion}
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   );
    // };


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
    <div className='container'>

      <h1>Search for Flights</h1> 
      <div className='row'>
        <div className='col-md-4'>
          <label>From:</label>
        </div>
        <div className='col-md-4'>
          <label>Destination:</label>
        </div>
        <div className='col-md-4'>
          <label>Departure Date:</label>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-md-4'>
          {/* <label>From:</label> */}
            <input className='col-md-4 input' type="text" required value={text} onChange={e => onChangeHandler(e.target.value)} name="from"
            onBlur={() => {
              setTimeout(() => {
                setSuggestions([]);
              }, 100)
            }}
              />
            {suggestions && suggestions.map((suggestion, i) => {
              return (
                <div key={i} className='suggestion col-md-4 justify-content-md-center' onClick={() => onSuggestHandler(suggestion)}>{suggestion}</div>
              )}
            )}
        </div>
        
        <div className='col-md-4'>
          {/* <label>Destination:</label> */}
          <input className='col-md-4 input' type="text" required value={text} onChange={e => onChangeHandler(e.target.value)} name="destination"
            onBlur={() => {
              setTimeout(() => {
                setSuggestions([]);
              }, 100)
            }}
              />
            {suggestions && suggestions.map((suggestion, i) => {
              return (
                <div key={i} className='suggestion col-md-4 justify-content-md-center' onClick={() => onSuggestHandler(suggestion)}>{suggestion}</div>
              )}
            )}
        </div>

        <div className='col-md-4'>
          {/* <label>Departure Date:</label> */}
            <input type="date" required min="2020-01-01T00:00" max="2030-12-31T00:00" name="departureDate"  onChange={changeDepartureDate} />
          <input type="submit" value="Search" />
        </div>
        </div>
      </form>
     

      {/* style={{ textAlign: 'center', padding: '10px' }} */}

      {/* {suggestionsActive && <Suggestions />} */}
      { loading
        ? <h2>Loading...</h2>
        : flights && flights.map(flight => (flight.itineraries[0].segments.length === 1 && <FlightCard flight={flight} />)) }
    </div>
  )

}
 
export default MyForm;