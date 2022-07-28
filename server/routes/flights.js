const express = require("express")
const router = express.Router()

const Amadeus = require('amadeus');
var amadeus = new Amadeus({
    clientId: '7jWUMdPF2A83drSc42nd381VxAPTk4GB',
    clientSecret: 'LxTQjJGs4B6SamHk'
  });

router.get("/", (req, res) => {
    res.json()
})
router.post("/", (req, res) => {
    //Wait for getFlights to run then console log the response
    const f = getFlightList(req.body).then(function(response){
        console.log(response)
        res.json(response)
    }
    ).catch(function(error){
        console.log(error)
        res.sendStatus(404)
    })
})

const getFlightList = async (req) => {
    const flights = await getFlights(req)
    return flights
};

// function to get flights
async function getFlights(req, res) {
    const fl = amadeus.shopping.flightOffersSearch.get({
        originLocationCode: req.from,
        destinationLocationCode: req.destination,
        departureDate: req.departureDate,
        adults: '1'
    })
    return fl
}

const flightGrid = [['SEA', 'SLC', 'DEN', 'ORD', 'JFK'],
                    ['SFO', 'LAS', 'DFW', 'BNA', 'DCA'],
                    ['LAX', 'PHX', 'IAH', 'ATL', 'MIA']]

const findCheapestFlight = () => {

    const ROWS = flightGrid.length
    const COLS = flightGrid[0].length

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            console.log(flightGrid[r][c])
        }
    }
}



(findCheapestFlight())


module.exports = router

