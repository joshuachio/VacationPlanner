const express = require("express")
const router = express.Router()

const Amadeus = require('amadeus');
var amadeus = new Amadeus({
    clientId: '7jWUMdPF2A83drSc42nd381VxAPTk4GB',
    clientSecret: 'LxTQjJGs4B6SamHk'
  });

router.post("/test", (req, res) => {
    res.send("worked")
    console.log(req.body)
})

// router.post("/", (req, res) => {
//     res.send("newPost")
// })

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

// router
//     .route("/:id")
//     .get((req, res) => {
//         var flightData = getFlights(req, res)
//         console.log(flightData)
//         res.json(flightData)
//     })
//     .put((req, res) => {
//         res.send('update airport Get with id ' + req.params.airportID)
//     })
//     .delete((req, res) => {
//         res.send('delete airport Get with id ' + req.params.airportID)
//     })

router.get("/testing", (req, res) => {
    res.send("dummy")
})

router.put("/testing", (req, res) => {
    console.log("testing")
    res.json("put new name")
})

const airports = [{ Airport: "Joshua" }, { Airport: "Emily" }]

search = {orgLoc: '', destLoc: '', departDate: ''}

router.param("id", (req, res, next, id) => {
    req.airport = airports[id]
    next()
})

const getFlightList = async (req) => {
    const flights = await getFlights(req)
    return flights
};

// let myPromise = new Promise(function(resolve, reject, req, res) {
//     // "Producing Code" (May take some time)
//     amadeus.shopping.flightOffersSearch.get({
//         originLocationCode: req.from,
//         destinationLocationCode: req.destination,
//         departureDate: req.departureDate,
//         adults: '1'
//     })
//       resolve(response.data); // when successful
//       reject();  // when error
// });

// "Consuming Code" (Must wait for a fulfilled Promise)


//function to get flights
async function getFlights(req, res) {
    const fl = amadeus.shopping.flightOffersSearch.get({
        originLocationCode: req.from,
        destinationLocationCode: req.destination,
        departureDate: req.departureDate,
        adults: '1'
    })
    return fl
    // .then(function(response){
    //     // console.log(response.data);
    //     return response.data;
    // }).catch(function(responseError){
    //     console.log(responseError);
    // });
}

module.exports = router


//This is the output this above will give

// { type: 'flight-offers-pricing',
//   flightOffers:
//    [ { type: 'flight-offer',
//        id: '1',
//        source: 'GDS',
//        instantTicketingRequired: false,
//        nonHomogeneous: false,
//        paymentCardRequired: false,
//        lastTicketingDate: '2022-06-16',
//        itineraries:
//         [ { segments:
//              [ { departure:
//                   { iataCode: 'DFW', terminal: 'E', at: '2022-08-01T13:03:00' },
//                  arrival:
//                   { iataCode: 'ATL', terminal: 'N', at: '2022-08-01T16:20:00' },
//                  carrierCode: 'F9',
//                  number: '1550',
//                  aircraft: { code: '32N' },
//                  operating: { carrierCode: 'F9' },
//                  duration: 'PT2H17M',
//                  id: '33',
//                  numberOfStops: 0,
//                  co2Emissions: [ { weight: 114, weightUnit: 'KG', cabin: 'ECONOMY' } ] } ] } ],
//        price:
//         { currency: 'EUR',
//           total: '96.47',
//           base: '77.00',
//           fees:
//            [ { amount: '0.00', type: 'SUPPLIER' },
//              { amount: '0.00', type: 'TICKETING' },
//              { amount: '0.00', type: 'FORM_OF_PAYMENT' } ],
//           grandTotal: '96.47',
//           billingCurrency: 'EUR' },
//        pricingOptions:
//         { fareType: [ 'PUBLISHED' ], includedCheckedBagsOnly: false },
//        validatingAirlineCodes: [ 'F9' ],
//        travelerPricings:
//         [ { travelerId: '1',
//             fareOption: 'STANDARD',
//             travelerType: 'ADULT',
//             price:
//              { currency: 'EUR',
//                total: '96.47',
//                base: '77.00',
//                taxes:
//                 [ { amount: '4.22', code: 'ZP' },
//                   { amount: '5.25', code: 'AY' },
//                   { amount: '5.78', code: 'US' },
//                   { amount: '4.22', code: 'XF' } ],
//                refundableTaxes: '19.47' },
//             fareDetailsBySegment:
//              [ { segmentId: '33',
//                  cabin: 'ECONOMY',
//                  fareBasis: 'S21NXS2',
//                  class: 'S' } ] } ] } ],
//   bookingRequirements:
//    { emailAddressRequired: true,
//      mobilePhoneNumberRequired: true,
//      travelerRequirements:
//       [ { travelerId: '1',
//           genderRequired: true,
//           dateOfBirthRequired: true,
//           redressRequiredIfAny: true,
//           residenceRequired: true } ] } }

