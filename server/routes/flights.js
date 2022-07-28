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

const flightGrid = [["SEA", "SLC", "DEN", "ORD", "JFK"],
                    ["SFO", "LAS", "DFW", "BNA", "DCA"],
                    ["LAX", "PHX", "IAH", "ATL", "MIA"]]

const findCheapestFlight = (from, to) => {

    if (!(flightGrid.some(row => row.includes(from)) && flightGrid.some(row => row.includes(to)))) {
        return "Invalid airport code"
    }

    let fromR = flightGrid.findIndex(row => row.includes(from))
    let fromC = flightGrid[fromR].indexOf(from)

    let toR = flightGrid.findIndex(row => row.includes(to))
    let toC = flightGrid[toR].indexOf(to)
    
    const airportGrid = flightGrid.slice(Math.min(fromR, toR), Math.max(fromR, toR) + 1).map(row => row.slice(Math.min(fromC, toC), Math.max(fromC, toC) + 1))
    // return (airportGrid)

    const ROWS = airportGrid.length
    const COLS = airportGrid[0].length

    let priceGrid = Array.from(Array(ROWS), () => new Array(COLS))
    // console.log(airportGrid)
    // return priceGrid

    fromR = airportGrid.findIndex(row => row.includes(from))
    fromC = airportGrid[fromR].indexOf(from)

    toR = airportGrid.findIndex(row => row.includes(to))
    toC = airportGrid[toR].indexOf(to)

    let path = [airportGrid[fromR][fromC]]

    findPath(airportGrid, path, ROWS, COLS, fromR, fromC, toR, toC)

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (!(airportGrid[r][c] === from)) {
                priceGrid[r][c] = findCost(airportGrid[fromR][fromC], airportGrid[r][c])
            }
        }
    }
}

const findPath = (airportGrid, path, ROWS, COLS, fromR, fromC, toR, toC) => {

    if (fromR === toR && fromC === toC) {
        return path
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (!(path.includes(airportGrid[r][c]))) {
                priceGrid[r][c] = findCost(airportGrid[fromR][fromC], airportGrid[r][c])
            }
        }
    }
}

const findCost = (from, to) => {
    return 100
}



console.log(findCheapestFlight("DFW", "JFK"))


module.exports = router

