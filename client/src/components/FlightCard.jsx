import React from 'react'

const FlightCard = (props) => {

    const { flight } = props;
    const { price, itineraries, id, validatingAirlineCodes } = flight;
    const { departure, arrival } = itineraries[0].segments[0];
    // let y = new Date(departure.at);
    return (
    <div id={id} style={{ backgroundColor: "lightGrey", width: "500px", margin: "auto"}}>
        <h2>
            <img src={"https://www.gstatic.com/flights/airline_logos/70px/" + validatingAirlineCodes[0] + ".png"} alt="airline logo" />
            {departure.iataCode} to {arrival.iataCode}
        </h2>
        <h4>From {new Date(departure.at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} - {new Date(arrival.at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} on {new Date(departure.at).toLocaleDateString('en-US')} </h4>
        <p>Total Price: ${price.total}</p>
        <button>Add to list</button>
    </div>
    )
}

export default FlightCard