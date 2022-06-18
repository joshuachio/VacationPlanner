const express = require("express")
const router = express.Router()

const Amadeus = require('amadeus');
var amadeus = new Amadeus({
    clientId: '7jWUMdPF2A83drSc42nd381VxAPTk4GB',
    clientSecret: 'LxTQjJGs4B6SamHk'
  });

router.get("/", (req, res) => {
    res.render("flight")
})

router.post("/", (req, res) => {
    const isValid = true
    if (isValid) {
        res.redirect('/flights/' + req.body.airport)
    } else {
        res.render("flight", { Airport: req.body.Airport })
    }
    req.body.Airport
})

router
    .route("/:id")
    .get((req, res) => {
        var flightData = getFlights(req, res)
        // console.log(req)
        res.render(flightData)
    })
    .put((req, res) => {
        res.send('update airport Get with id ' + req.params.airportID)
    })
    .delete((req, res) => {
        res.send('delete airport Get with id ' + req.params.airportID)
    })

const airports = [{ Airport: "Joshua" }, { Airport: "Emily" }]

router.param("id", (req, res, next, id) => {
    req.airport = airports[id]
    next()
})

//function to get flights
function getFlights(req, res) {
amadeus.shopping.flightOffersSearch.get({
    originLocationCode: req.params.id,
    destinationLocationCode: 'ATL',
    departureDate: '2022-08-01',
    adults: '1'
}).then(function(response){
    return amadeus.shopping.flightOffers.pricing.post(
      JSON.stringify({
        'data': {
          'type': 'flight-offers-pricing',
          'flightOffers': [response.data[0]]
        }
      })
    )
}).then(function(response){
    console.log(response.data);
    return response.data;
}).catch(function(responseError){
    console.log(responseError);
});
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

