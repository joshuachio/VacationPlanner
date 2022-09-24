import React from "react";
import Axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react';
import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import "../static/Hotels.css";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { Autocomplete } from "@material-ui/lab";
import * as ReactBootStrap from 'react-bootstrap'


const Hotels = () => {
       const [openDate, setOpenDate] = useState(false);
       const [date, setDate] = useState([
        {
           startDate: new Date(),
           endDate: new Date(),
           key: 'selection',
        }
      ]);

      const [openOptions, setOpenOptions] = useState(false)
      const [options, setOptions] = useState({
         adult: 1,
         children: 0,
         rooms: 1
      });

      const handleOption = (name, operation) => {
              setOptions((prev)=>{return {
                  ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
              }})
      }

      const [location, setLocation] = useState("");
      const [checkInDate, setCheckInDate] = useState("");
      const [checkOutDate, setCheckOutDate] = useState("");
      const [hotels, setHotels] = useState();

      /*state = {
        hotels: [],
        errorMessage: ''
      }*/

      const [cityCode, setCityCode] = useState(null);
      const [inputValue, setInputValue] = useState("");

      const [loading, setLoading] = useState(false);

      const [input, setInput] = useState("");
      const [suggestions, setSuggestions] = useState([]);

      const onChangeHandler = (input) => {
            // Possible hotel matches
            let matches = []

            // Searches the list based on the user input
            if (input.length > 1) {
                matches = hotels.filter(hot => {
                const regex = new RegExp(`^.*${input}.*`, 'gi');
                return hot.match(regex)
              })
            }
            console.log("matches", matches)
            setSuggestions(matches);
            setInput(input);
      }

      /*const onSuggestHandlerFrom = (input) => {
            setInput(input);
            // CLear the suggestion list
            setSuggestions([]);
            // Updates the form data to be sent to the server
            setFormData({
              ...formData,
              from: from
            })
      }*/

      const hotelSearch = async() => {
            try {
                setLoading(true);

                //formData.input = airport_id[formData.input]

                const result = await Axios.post("http://localhost:3001/hotels", {

                location: location,
                checkInDate: format(date[0].startDate, "yyyy-MM-dd"),
                checkOutDate: format(date[0].endDate, "yyyy-MM-dd"),
                guests: {options}
                })
                setHotels(result.data.data);
                setLoading(false);
                return(result);
            } catch(e) {
                console.log(e);
            }
        };

        useEffect(() => {
           hotelSearch();
        }, []);

        console.log(hotels);
        function toggleTable() {
          document.getElementById("myTable").classList.toggle("hidden");
        }
        return (
            <div className="headerSearch">
                <span>Hotels</span>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input
                        type="text"
                        placeholder="Enter a city code..."
                        onChange={(e) => {
                            setLocation(e.target.value);
                        }}
                        className="headerSearchInput"
                    />
                </div>
                <div className="headerSearchItem">
                     <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                     <span onClick={()=> {
                            setOpenDate(!openDate)
                            setOpenOptions(false);
                       }}
                        className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyy")
                     }
                            to ${format(date[0].endDate, "MM/dd/yyy")}`} </span>
                     {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                     />}
                </div>
                <div className="headerSearchItem">
                     <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                     <span
                        onClick={() => {
                            setOpenOptions(!openOptions)
                            setOpenDate(false)
                            }}
                            className="headerSearchText">{` ${options.adult} adult •
                            ${options.children} children • ${options.rooms} rooms `}
                     </span>
                        {openOptions && <div className="options">
                          <div className="optionItem">
                          <span className="optionText">Adult</span>
                           <div className="optionCounter">
                            <button
                                disabled={options.adult <= 1}
                                className="optionCounterButton"
                                onClick={()=>handleOption("adult", "d")}>-</button>
                            <span className="optionCounterNumber">{options.adult}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                           </div>
                         </div>

                   <div className="optionItem">
                      <span className="optionText">Children</span>
                     <div className="optionCounter">
                      <button
                        disabled={options.children <= 0}
                        className="optionCounterButton"
                        onClick={()=>handleOption("children", "d")}>-</button>
                      <span className="optionCounterNumber">{options.children}</span>
                      <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                     </div>
                   </div>
                   <div className="optionItem">
                      <span className="optionText">Rooms</span>
                      <div className="optionCounter">
                      <button
                        disabled={options.rooms <= 1}
                        className="optionCounterButton"
                        onClick={()=>handleOption("rooms", "d")}>-</button>
                      <span className="optionCounterNumber">{options.rooms}</span>
                      <button className="optionCounterButton" onClick={()=>handleOption("rooms", "i")}>+</button>
                     </div>
                   </div>
                </div>
                }
             </div>
             <div className="headers">
                <h1> Where to Next? </h1>
                <h2> Search for Hotels </h2>
             </div>
             <div style={{ textAlign : 'center' }}
                  className = "hotelList">
                  <div className = "hotelHeader">
                    <h2> ~ Hotels listed below once loaded ~ </h2>
                  </div>
                    <table id="myTable" class = "hidden">
                      <thead>
                        <tr>
                          <th>Hotel Name</th>
                          <th>Address</th>
                          <th>Total Price (USD) </th>
                        </tr>
                      </thead>
                        <tbody>
                        { loading ? <h2> Loading... </h2>
                        : !hotels ? <h1> No Hotels Found! </h1>
                        : hotels && hotels.map(hotel => {
                          return (
                            <tr>
                              <td> {hotel.hotel.name} </td>
                              <td> {hotel.hotel.address.lines} </td>
                              <td> {hotel.offers[0].price.total} </td>
                            </tr>
                          );
                        })}
                        </tbody>
                    </table>
             </div>
                <div className="headerSearchItem">
                        <button onClick={() => {
                            //document.write("Loading...");
                            //handleSubmit();
                            toggleTable();
                            hotelSearch();
                            setOpenDate(false);
                            setOpenOptions(false);
                            //return <CircularProgress/>
                         }}className="headerBtn">Search</button>
                </div>
<div className="App">{hotelSearch}</div>
            </div>
     
        );
}

export default Hotels;