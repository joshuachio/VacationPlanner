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
        // returnDate: '2022-09-05',
        adults: '1'
    })
    return fl
}


//Supported airports for cheapest path search
const flightGrid = [["SEA", "SLC", "DEN", "ORD", "JFK"],
                    ["SFO", "LAS", "DFW", "BNA", "DCA"],
                    ["LAX", "PHX", "IAH", "ATL", "MIA"]]

const findCheapestFlight = (from, to) => {
    //Airport is not supported
    if (!(flightGrid.some(row => row.includes(from)) && flightGrid.some(row => row.includes(to)))) {
        return "Invalid airport code"
    }

    //Find index of from and to coordinates
    let fromR = flightGrid.findIndex(row => row.includes(from))
    let fromC = flightGrid[fromR].indexOf(from)
    let toR = flightGrid.findIndex(row => row.includes(to))
    let toC = flightGrid[toR].indexOf(to)

    //Creates a slice of array with relevant airports
    const airportGrid = flightGrid.slice(Math.min(fromR, toR), Math.max(fromR, toR) + 1).map(row => row.slice(Math.min(fromC, toC), Math.max(fromC, toC) + 1))
    const ROWS = airportGrid.length
    const COLS = airportGrid[0].length

    //Price array with same dimensions
    let priceGrid = Array.from(Array(ROWS), () => new Array(COLS))
    priceGrid[fromR][fromC] = Infinity

    //Finds new coordinates
    fromR = airportGrid.findIndex(row => row.includes(from))
    fromC = airportGrid[fromR].indexOf(from)
    toR = airportGrid.findIndex(row => row.includes(to))
    toC = airportGrid[toR].indexOf(to)

    //Starter path with the origin airport
    let path = [airportGrid[fromR][fromC]]

    //Nonstop price from origin to destination
    let curPrice = findCost(from , to)

    //Finds cheapest path
    let result = findPath(airportGrid, priceGrid, path, ROWS, COLS, fromR, fromC, toR, toC, 0)

    if (result[1] > curPrice) {
        path = result[0]
        curPrice = result[1]
    }

    return [path, curPrice]
}

const findPath = (airportGrid, priceGrid, path, ROWS, COLS, fromR, fromC, toR, toC, total) => {
    //Exit condition when the path is complete
    if (fromR === toR && fromC === toC) {
        return [path, total]
    }

    //Calcaultes cost for each possible path
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (!(path.includes(airportGrid[r][c]))) {
                priceGrid[r][c] = findCost(airportGrid[fromR][fromC], airportGrid[r][c])
            }
        }
    }

    //Find minimum cost in priceGrid
    let min = Infinity
    let minR = 0
    let minC = 0
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (priceGrid[r][c] < min) {
                min = priceGrid[r][c]
                minR = r
                minC = c
            }
        }
    }

    //Add the cheapest path to the path array
    path.push(airportGrid[minR][minC])
    priceGrid[minR][minC] = Infinity

    //Recursive call to find the cheapest path
    return findPath(airportGrid, priceGrid, path, ROWS, COLS, minR, minC, toR, toC, total + min)
}

const findCost = (from, to) => {
    req = {
        from: from,
        to: to
    }
    getFlightCost(req).then(function(response){
        console.log(response.data[0].price.total)
        return response.data[0].price.total
    }).catch(function(error){
        console.log(error)
    })
}

const getFlightCost = async (req) => {
    const flights = await searchFlight(req)
    return flights
};

async function searchFlight(req) {
    const fl = amadeus.shopping.flightOffersSearch.get({
        originLocationCode: req.from,
        destinationLocationCode: req.to,
        departureDate: '2022-09-05',
        adults: '1',
        currencyCode: 'USD',
        max: 1
    })
    return fl
}


module.exports = router

