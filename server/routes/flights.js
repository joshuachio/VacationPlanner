var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: '7jWUMdPF2A83drSc42nd381VxAPTk4GB',
  clientSecret: 'LxTQjJGs4B6SamHk'
});

amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'DFW',
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
}).catch(function(responseError){
    console.log(responseError);
});