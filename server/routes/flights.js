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

router.get("/", (req, res) => {
    res.json([
        {
            "type": "flight-offer",
            "id": "1",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT2H17M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T21:12:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T22:29:00"
                            },
                            "carrierCode": "NK",
                            "number": "233",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT2H17M",
                            "id": "29",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "166.60",
                "base": "142.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "166.60"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "166.60",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "29",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "2",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 3,
            "itineraries": [
                {
                    "duration": "PT2H4M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "S",
                                "at": "2022-06-27T14:03:00"
                            },
                            "arrival": {
                                "iataCode": "DAL",
                                "terminal": "1",
                                "at": "2022-06-27T15:07:00"
                            },
                            "carrierCode": "DL",
                            "number": "2888",
                            "aircraft": {
                                "code": "717"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT2H4M",
                            "id": "1",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "193.48",
                "base": "167.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "193.48"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "DL"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "193.48",
                        "base": "167.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "1",
                            "cabin": "ECONOMY",
                            "fareBasis": "UA0NX0MQ",
                            "brandedFare": "MAINCABIN",
                            "class": "U",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "3",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 3,
            "itineraries": [
                {
                    "duration": "PT2H6M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "S",
                                "at": "2022-06-27T10:29:00"
                            },
                            "arrival": {
                                "iataCode": "DAL",
                                "terminal": "1",
                                "at": "2022-06-27T11:35:00"
                            },
                            "carrierCode": "DL",
                            "number": "2734",
                            "aircraft": {
                                "code": "717"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT2H6M",
                            "id": "4",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "193.48",
                "base": "167.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "193.48"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "DL"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "193.48",
                        "base": "167.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "4",
                            "cabin": "ECONOMY",
                            "fareBasis": "UA0NX0MQ",
                            "brandedFare": "MAINCABIN",
                            "class": "U",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "4",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 3,
            "itineraries": [
                {
                    "duration": "PT2H7M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "S",
                                "at": "2022-06-27T08:30:00"
                            },
                            "arrival": {
                                "iataCode": "DAL",
                                "terminal": "1",
                                "at": "2022-06-27T09:37:00"
                            },
                            "carrierCode": "DL",
                            "number": "2229",
                            "aircraft": {
                                "code": "717"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT2H7M",
                            "id": "7",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "193.48",
                "base": "167.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "193.48"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "DL"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "193.48",
                        "base": "167.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "7",
                            "cabin": "ECONOMY",
                            "fareBasis": "UA0NX0MQ",
                            "brandedFare": "MAINCABIN",
                            "class": "U",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "5",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 3,
            "itineraries": [
                {
                    "duration": "PT2H8M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "S",
                                "at": "2022-06-27T16:24:00"
                            },
                            "arrival": {
                                "iataCode": "DAL",
                                "terminal": "1",
                                "at": "2022-06-27T17:32:00"
                            },
                            "carrierCode": "DL",
                            "number": "2275",
                            "aircraft": {
                                "code": "717"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT2H8M",
                            "id": "8",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "193.48",
                "base": "167.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "193.48"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "DL"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "193.48",
                        "base": "167.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "8",
                            "cabin": "ECONOMY",
                            "fareBasis": "UA0NX0MQ",
                            "brandedFare": "MAINCABIN",
                            "class": "U",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "6",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 3,
            "itineraries": [
                {
                    "duration": "PT2H8M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "S",
                                "at": "2022-06-27T21:30:00"
                            },
                            "arrival": {
                                "iataCode": "DAL",
                                "terminal": "1",
                                "at": "2022-06-27T22:38:00"
                            },
                            "carrierCode": "DL",
                            "number": "2824",
                            "aircraft": {
                                "code": "717"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT2H8M",
                            "id": "9",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "193.48",
                "base": "167.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "193.48"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "DL"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "193.48",
                        "base": "167.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "9",
                            "cabin": "ECONOMY",
                            "fareBasis": "UA0NX0MQ",
                            "brandedFare": "MAINCABIN",
                            "class": "U",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "7",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 3,
            "itineraries": [
                {
                    "duration": "PT2H12M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "S",
                                "at": "2022-06-27T11:38:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T12:50:00"
                            },
                            "carrierCode": "DL",
                            "number": "1092",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT2H12M",
                            "id": "14",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "193.48",
                "base": "167.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "193.48"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "DL"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "193.48",
                        "base": "167.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "14",
                            "cabin": "ECONOMY",
                            "fareBasis": "UA0NX0MQ",
                            "brandedFare": "MAINCABIN",
                            "class": "U",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "8",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 3,
            "itineraries": [
                {
                    "duration": "PT2H13M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "S",
                                "at": "2022-06-27T13:55:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T15:08:00"
                            },
                            "carrierCode": "DL",
                            "number": "2508",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT2H13M",
                            "id": "18",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "193.48",
                "base": "167.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "193.48"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "DL"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "193.48",
                        "base": "167.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "18",
                            "cabin": "ECONOMY",
                            "fareBasis": "UA0NX0MQ",
                            "brandedFare": "MAINCABIN",
                            "class": "U",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "9",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 3,
            "itineraries": [
                {
                    "duration": "PT2H13M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "S",
                                "at": "2022-06-27T22:45:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T23:58:00"
                            },
                            "carrierCode": "DL",
                            "number": "1226",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT2H13M",
                            "id": "19",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "193.48",
                "base": "167.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "193.48"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "DL"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "193.48",
                        "base": "167.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "19",
                            "cabin": "ECONOMY",
                            "fareBasis": "UA0NX0MQ",
                            "brandedFare": "MAINCABIN",
                            "class": "U",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "10",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 3,
            "itineraries": [
                {
                    "duration": "PT2H14M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "S",
                                "at": "2022-06-27T20:54:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T22:08:00"
                            },
                            "carrierCode": "DL",
                            "number": "2338",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT2H14M",
                            "id": "26",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "193.48",
                "base": "167.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "193.48"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "DL"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "193.48",
                        "base": "167.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "26",
                            "cabin": "ECONOMY",
                            "fareBasis": "UA0NX0MQ",
                            "brandedFare": "MAINCABIN",
                            "class": "U",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "11",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 3,
            "itineraries": [
                {
                    "duration": "PT2H16M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "S",
                                "at": "2022-06-27T15:59:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T17:15:00"
                            },
                            "carrierCode": "DL",
                            "number": "1238",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT2H16M",
                            "id": "28",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "193.48",
                "base": "167.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "193.48"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "DL"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "193.48",
                        "base": "167.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "28",
                            "cabin": "ECONOMY",
                            "fareBasis": "UA0NX0MQ",
                            "brandedFare": "MAINCABIN",
                            "class": "U",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "12",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT7H8M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T07:00:00"
                            },
                            "arrival": {
                                "iataCode": "ORD",
                                "terminal": "2",
                                "at": "2022-06-27T08:04:00"
                            },
                            "carrierCode": "UA",
                            "number": "5284",
                            "aircraft": {
                                "code": "E7W"
                            },
                            "duration": "PT2H4M",
                            "id": "10",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "ORD",
                                "terminal": "1",
                                "at": "2022-06-27T10:40:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T13:08:00"
                            },
                            "carrierCode": "UA",
                            "number": "1841",
                            "aircraft": {
                                "code": "320"
                            },
                            "operating": {
                                "carrierCode": "UA"
                            },
                            "duration": "PT2H28M",
                            "id": "11",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "202.08",
                "base": "167.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "202.08"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "UA"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "202.08",
                        "base": "167.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "10",
                            "cabin": "ECONOMY",
                            "fareBasis": "WAA0AKEN",
                            "class": "W",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "11",
                            "cabin": "ECONOMY",
                            "fareBasis": "WAA0AKEN",
                            "brandedFare": "ECONOMY",
                            "class": "W",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "13",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT5H46M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T14:20:00"
                            },
                            "arrival": {
                                "iataCode": "FLL",
                                "terminal": "4",
                                "at": "2022-06-27T16:13:00"
                            },
                            "carrierCode": "NK",
                            "number": "1079",
                            "aircraft": {
                                "code": "32N"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H53M",
                            "id": "64",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FLL",
                                "terminal": "4",
                                "at": "2022-06-27T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T19:06:00"
                            },
                            "carrierCode": "NK",
                            "number": "971",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT3H11M",
                            "id": "65",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "219.28",
                "base": "183.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "219.28"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "219.28",
                        "base": "183.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "64",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "65",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "14",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT7H13M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T17:49:00"
                            },
                            "arrival": {
                                "iataCode": "MCO",
                                "at": "2022-06-27T19:21:00"
                            },
                            "carrierCode": "NK",
                            "number": "1566",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H32M",
                            "id": "20",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MCO",
                                "at": "2022-06-27T22:23:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-28T00:02:00"
                            },
                            "carrierCode": "NK",
                            "number": "3912",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT2H39M",
                            "id": "21",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "219.28",
                "base": "183.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "219.28"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "219.28",
                        "base": "183.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "20",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "21",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "15",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT5H57M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T17:49:00"
                            },
                            "arrival": {
                                "iataCode": "MCO",
                                "at": "2022-06-27T19:21:00"
                            },
                            "carrierCode": "NK",
                            "number": "1566",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H32M",
                            "id": "80",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MCO",
                                "at": "2022-06-27T21:03:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T22:46:00"
                            },
                            "carrierCode": "NK",
                            "number": "407",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT2H43M",
                            "id": "81",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "219.28",
                "base": "183.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "219.28"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "219.28",
                        "base": "183.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "80",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "81",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "16",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT5H58M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T19:00:00"
                            },
                            "arrival": {
                                "iataCode": "FLL",
                                "terminal": "4",
                                "at": "2022-06-27T20:56:00"
                            },
                            "carrierCode": "NK",
                            "number": "403",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H56M",
                            "id": "82",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FLL",
                                "terminal": "4",
                                "at": "2022-06-27T22:00:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T23:58:00"
                            },
                            "carrierCode": "NK",
                            "number": "469",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT2H58M",
                            "id": "83",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "219.28",
                "base": "183.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "219.28"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "219.28",
                        "base": "183.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "82",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "83",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "17",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT9H37M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T21:10:00"
                            },
                            "arrival": {
                                "iataCode": "LAX",
                                "terminal": "5",
                                "at": "2022-06-27T22:47:00"
                            },
                            "carrierCode": "NK",
                            "number": "1301",
                            "aircraft": {
                                "code": "32A"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT4H37M",
                            "id": "48",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "LAX",
                                "terminal": "5",
                                "at": "2022-06-28T00:40:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-28T05:47:00"
                            },
                            "carrierCode": "NK",
                            "number": "130",
                            "aircraft": {
                                "code": "32A"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT3H7M",
                            "id": "49",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "219.28",
                "base": "183.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "219.28"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "219.28",
                        "base": "183.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "49",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "18",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT7H52M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T09:24:00"
                            },
                            "arrival": {
                                "iataCode": "MSY",
                                "at": "2022-06-27T10:00:00"
                            },
                            "carrierCode": "NK",
                            "number": "481",
                            "aircraft": {
                                "code": "32N"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H36M",
                            "id": "76",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MSY",
                                "at": "2022-06-27T14:40:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T16:16:00"
                            },
                            "carrierCode": "NK",
                            "number": "2868",
                            "aircraft": {
                                "code": "32A"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H36M",
                            "id": "77",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "224.63",
                "base": "183.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "224.63"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "224.63",
                        "base": "183.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "76",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "77",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "19",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT9H20M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T09:05:00"
                            },
                            "arrival": {
                                "iataCode": "DTW",
                                "terminal": "N",
                                "at": "2022-06-27T11:02:00"
                            },
                            "carrierCode": "NK",
                            "number": "1700",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H57M",
                            "id": "32",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "DTW",
                                "terminal": "N",
                                "at": "2022-06-27T15:39:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T17:25:00"
                            },
                            "carrierCode": "NK",
                            "number": "313",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT2H46M",
                            "id": "33",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "224.63",
                "base": "183.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "224.63"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "224.63",
                        "base": "183.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "32",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "33",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "20",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT9H48M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T13:58:00"
                            },
                            "arrival": {
                                "iataCode": "MCO",
                                "at": "2022-06-27T15:26:00"
                            },
                            "carrierCode": "NK",
                            "number": "1209",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H28M",
                            "id": "68",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MCO",
                                "at": "2022-06-27T21:03:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T22:46:00"
                            },
                            "carrierCode": "NK",
                            "number": "407",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT2H43M",
                            "id": "69",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "224.63",
                "base": "183.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "224.63"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "224.63",
                        "base": "183.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "68",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "69",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "21",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT10H38M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T14:20:00"
                            },
                            "arrival": {
                                "iataCode": "FLL",
                                "terminal": "4",
                                "at": "2022-06-27T16:13:00"
                            },
                            "carrierCode": "NK",
                            "number": "1079",
                            "aircraft": {
                                "code": "32N"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H53M",
                            "id": "50",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FLL",
                                "terminal": "4",
                                "at": "2022-06-27T22:00:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T23:58:00"
                            },
                            "carrierCode": "NK",
                            "number": "469",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT2H58M",
                            "id": "51",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "224.63",
                "base": "183.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "224.63"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "224.63",
                        "base": "183.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "50",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "51",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "22",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT13H38M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T06:40:00"
                            },
                            "arrival": {
                                "iataCode": "LAX",
                                "terminal": "5",
                                "at": "2022-06-27T08:12:00"
                            },
                            "carrierCode": "NK",
                            "number": "628",
                            "aircraft": {
                                "code": "32A"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT4H32M",
                            "id": "52",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "LAX",
                                "terminal": "5",
                                "at": "2022-06-27T14:15:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T19:18:00"
                            },
                            "carrierCode": "NK",
                            "number": "1964",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT3H3M",
                            "id": "53",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "224.63",
                "base": "183.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "224.63"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "224.63",
                        "base": "183.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "52",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "53",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "23",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT15H24M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T21:10:00"
                            },
                            "arrival": {
                                "iataCode": "LAX",
                                "terminal": "5",
                                "at": "2022-06-27T22:47:00"
                            },
                            "carrierCode": "NK",
                            "number": "1301",
                            "aircraft": {
                                "code": "32A"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT4H37M",
                            "id": "34",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "LAX",
                                "terminal": "5",
                                "at": "2022-06-28T06:30:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-28T11:34:00"
                            },
                            "carrierCode": "NK",
                            "number": "868",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT3H4M",
                            "id": "35",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "224.63",
                "base": "183.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "224.63"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "224.63",
                        "base": "183.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "34",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "35",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "24",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT11H4M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T13:58:00"
                            },
                            "arrival": {
                                "iataCode": "MCO",
                                "at": "2022-06-27T15:26:00"
                            },
                            "carrierCode": "NK",
                            "number": "1209",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H28M",
                            "id": "2",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MCO",
                                "at": "2022-06-27T22:23:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-28T00:02:00"
                            },
                            "carrierCode": "NK",
                            "number": "3912",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT2H39M",
                            "id": "3",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "224.63",
                "base": "183.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "224.63"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "224.63",
                        "base": "183.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "2",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "3",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "25",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT11H36M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T08:30:00"
                            },
                            "arrival": {
                                "iataCode": "FLL",
                                "terminal": "4",
                                "at": "2022-06-27T10:25:00"
                            },
                            "carrierCode": "NK",
                            "number": "1315",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H55M",
                            "id": "46",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FLL",
                                "terminal": "4",
                                "at": "2022-06-27T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T19:06:00"
                            },
                            "carrierCode": "NK",
                            "number": "971",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT3H11M",
                            "id": "47",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "224.63",
                "base": "183.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "224.63"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "224.63",
                        "base": "183.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "26",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT11H13M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T13:00:00"
                            },
                            "arrival": {
                                "iataCode": "MIA",
                                "at": "2022-06-27T15:02:00"
                            },
                            "carrierCode": "NK",
                            "number": "3101",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT2H2M",
                            "id": "22",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MIA",
                                "at": "2022-06-27T20:59:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T23:13:00"
                            },
                            "carrierCode": "NK",
                            "number": "3163",
                            "aircraft": {
                                "code": "32A"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT3H14M",
                            "id": "23",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "224.63",
                "base": "183.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "224.63"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "224.63",
                        "base": "183.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "22",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "23",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "27",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT11H41M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T06:44:00"
                            },
                            "arrival": {
                                "iataCode": "DTW",
                                "terminal": "N",
                                "at": "2022-06-27T08:37:00"
                            },
                            "carrierCode": "NK",
                            "number": "768",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H53M",
                            "id": "60",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "DTW",
                                "terminal": "N",
                                "at": "2022-06-27T15:39:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T17:25:00"
                            },
                            "carrierCode": "NK",
                            "number": "313",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT2H46M",
                            "id": "61",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "224.63",
                "base": "183.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "224.63"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "224.63",
                        "base": "183.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "60",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "61",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "28",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT2H12M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "S",
                                "at": "2022-06-27T18:58:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T20:10:00"
                            },
                            "carrierCode": "DL",
                            "number": "31",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT2H12M",
                            "id": "15",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "241.85",
                "base": "212.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "241.85"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "DL"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "241.85",
                        "base": "212.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "15",
                            "cabin": "ECONOMY",
                            "fareBasis": "LA0NA0MQ",
                            "brandedFare": "MAINCABIN",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "29",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 3,
            "itineraries": [
                {
                    "duration": "PT2H14M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "S",
                                "at": "2022-06-27T07:30:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T08:44:00"
                            },
                            "carrierCode": "DL",
                            "number": "2940",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT2H14M",
                            "id": "24",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "241.85",
                "base": "212.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "241.85"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "DL"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "241.85",
                        "base": "212.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "24",
                            "cabin": "ECONOMY",
                            "fareBasis": "LA0NA0MQ",
                            "brandedFare": "MAINCABIN",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "30",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 3,
            "itineraries": [
                {
                    "duration": "PT2H14M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "S",
                                "at": "2022-06-27T09:40:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T10:54:00"
                            },
                            "carrierCode": "DL",
                            "number": "1240",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT2H14M",
                            "id": "25",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "241.85",
                "base": "212.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "241.85"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "DL"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "241.85",
                        "base": "212.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "25",
                            "cabin": "ECONOMY",
                            "fareBasis": "LA0NA0MQ",
                            "brandedFare": "MAINCABIN",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "31",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 1,
            "itineraries": [
                {
                    "duration": "PT4H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T07:45:00"
                            },
                            "arrival": {
                                "iataCode": "IAH",
                                "terminal": "B",
                                "at": "2022-06-27T08:42:00"
                            },
                            "carrierCode": "UA",
                            "number": "6326",
                            "aircraft": {
                                "code": "E7W"
                            },
                            "duration": "PT1H57M",
                            "id": "42",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "IAH",
                                "terminal": "C",
                                "at": "2022-06-27T10:00:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T11:15:00"
                            },
                            "carrierCode": "UA",
                            "number": "2484",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "UA"
                            },
                            "duration": "PT1H15M",
                            "id": "43",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "266.58",
                "base": "227.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "266.58"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "UA"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "266.58",
                        "base": "227.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "42",
                            "cabin": "ECONOMY",
                            "fareBasis": "VAA0OKEN",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "43",
                            "cabin": "ECONOMY",
                            "fareBasis": "VAA0OKEN",
                            "brandedFare": "ECONOMY",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "32",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 2,
            "itineraries": [
                {
                    "duration": "PT4H40M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T17:30:00"
                            },
                            "arrival": {
                                "iataCode": "IAH",
                                "terminal": "C",
                                "at": "2022-06-27T18:44:00"
                            },
                            "carrierCode": "UA",
                            "number": "308",
                            "aircraft": {
                                "code": "73G"
                            },
                            "operating": {
                                "carrierCode": "UA"
                            },
                            "duration": "PT2H14M",
                            "id": "54",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "IAH",
                                "terminal": "B",
                                "at": "2022-06-27T19:55:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T21:10:00"
                            },
                            "carrierCode": "UA",
                            "number": "6039",
                            "aircraft": {
                                "code": "E7W"
                            },
                            "duration": "PT1H15M",
                            "id": "55",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "266.58",
                "base": "227.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "266.58"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "UA"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "266.58",
                        "base": "227.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "54",
                            "cabin": "ECONOMY",
                            "fareBasis": "VAA0OKEN",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "55",
                            "cabin": "ECONOMY",
                            "fareBasis": "VAA0OKEN",
                            "brandedFare": "ECONOMY",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "33",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 6,
            "itineraries": [
                {
                    "duration": "PT6H40M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T12:45:00"
                            },
                            "arrival": {
                                "iataCode": "ORD",
                                "terminal": "2",
                                "at": "2022-06-27T14:03:00"
                            },
                            "carrierCode": "UA",
                            "number": "5339",
                            "aircraft": {
                                "code": "E7W"
                            },
                            "duration": "PT2H18M",
                            "id": "58",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "ORD",
                                "terminal": "1",
                                "at": "2022-06-27T15:50:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T18:25:00"
                            },
                            "carrierCode": "UA",
                            "number": "793",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "UA"
                            },
                            "duration": "PT2H35M",
                            "id": "59",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "266.58",
                "base": "227.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "266.58"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "UA"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "266.58",
                        "base": "227.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "58",
                            "cabin": "ECONOMY",
                            "fareBasis": "VAA0OKEN",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "59",
                            "cabin": "ECONOMY",
                            "fareBasis": "VAA0OKEN",
                            "brandedFare": "ECONOMY",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "34",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-26",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT2H15M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T07:15:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T08:30:00"
                            },
                            "carrierCode": "F9",
                            "number": "1551",
                            "aircraft": {
                                "code": "32N"
                            },
                            "operating": {
                                "carrierCode": "F9"
                            },
                            "duration": "PT2H15M",
                            "id": "27",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "271.95",
                "base": "240.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "271.95"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "F9"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "271.95",
                        "base": "240.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "27",
                            "cabin": "ECONOMY",
                            "fareBasis": "H01PXS5",
                            "class": "H"
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "35",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT5H49M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T07:15:00"
                            },
                            "arrival": {
                                "iataCode": "BWI",
                                "at": "2022-06-27T09:00:00"
                            },
                            "carrierCode": "NK",
                            "number": "556",
                            "aircraft": {
                                "code": "32A"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H45M",
                            "id": "70",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "BWI",
                                "at": "2022-06-27T10:00:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T12:04:00"
                            },
                            "carrierCode": "NK",
                            "number": "667",
                            "aircraft": {
                                "code": "32A"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT3H4M",
                            "id": "71",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "334.30",
                "base": "290.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "334.30"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "334.30",
                        "base": "290.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "70",
                            "cabin": "ECONOMY",
                            "fareBasis": "YNR",
                            "class": "Y",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "71",
                            "cabin": "ECONOMY",
                            "fareBasis": "YNR",
                            "class": "Y",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "36",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT13H51M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T06:15:00"
                            },
                            "arrival": {
                                "iataCode": "FLL",
                                "terminal": "4",
                                "at": "2022-06-27T08:05:00"
                            },
                            "carrierCode": "NK",
                            "number": "1877",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H50M",
                            "id": "72",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FLL",
                                "terminal": "4",
                                "at": "2022-06-27T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T19:06:00"
                            },
                            "carrierCode": "NK",
                            "number": "971",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT3H11M",
                            "id": "73",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "342.88",
                "base": "293.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "342.88"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "342.88",
                        "base": "293.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "72",
                            "cabin": "ECONOMY",
                            "fareBasis": "TNR",
                            "class": "T",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "73",
                            "cabin": "ECONOMY",
                            "fareBasis": "MNR",
                            "class": "M",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "37",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT15H34M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T19:00:00"
                            },
                            "arrival": {
                                "iataCode": "FLL",
                                "terminal": "4",
                                "at": "2022-06-27T20:56:00"
                            },
                            "carrierCode": "NK",
                            "number": "403",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H56M",
                            "id": "44",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FLL",
                                "terminal": "4",
                                "at": "2022-06-28T07:30:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-28T09:34:00"
                            },
                            "carrierCode": "NK",
                            "number": "1966",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT3H4M",
                            "id": "45",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "342.88",
                "base": "293.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "342.88"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "342.88",
                        "base": "293.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "44",
                            "cabin": "ECONOMY",
                            "fareBasis": "TNR",
                            "class": "T",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "45",
                            "cabin": "ECONOMY",
                            "fareBasis": "MNR",
                            "class": "M",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "38",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT16H28M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T08:30:00"
                            },
                            "arrival": {
                                "iataCode": "FLL",
                                "terminal": "4",
                                "at": "2022-06-27T10:25:00"
                            },
                            "carrierCode": "NK",
                            "number": "1315",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H55M",
                            "id": "40",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FLL",
                                "terminal": "4",
                                "at": "2022-06-27T22:00:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T23:58:00"
                            },
                            "carrierCode": "NK",
                            "number": "469",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT2H58M",
                            "id": "41",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "342.88",
                "base": "293.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "342.88"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "342.88",
                        "base": "293.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "40",
                            "cabin": "ECONOMY",
                            "fareBasis": "TNR",
                            "class": "T",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "41",
                            "cabin": "ECONOMY",
                            "fareBasis": "MNR",
                            "class": "M",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "39",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT18H43M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T06:15:00"
                            },
                            "arrival": {
                                "iataCode": "FLL",
                                "terminal": "4",
                                "at": "2022-06-27T08:05:00"
                            },
                            "carrierCode": "NK",
                            "number": "1877",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H50M",
                            "id": "62",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FLL",
                                "terminal": "4",
                                "at": "2022-06-27T22:00:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T23:58:00"
                            },
                            "carrierCode": "NK",
                            "number": "469",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT2H58M",
                            "id": "63",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "342.88",
                "base": "293.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "342.88"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "342.88",
                        "base": "293.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "62",
                            "cabin": "ECONOMY",
                            "fareBasis": "TNR",
                            "class": "T",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "63",
                            "cabin": "ECONOMY",
                            "fareBasis": "MNR",
                            "class": "M",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "40",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT27H51M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T15:29:00"
                            },
                            "arrival": {
                                "iataCode": "ORD",
                                "terminal": "3",
                                "at": "2022-06-27T17:04:00"
                            },
                            "carrierCode": "NK",
                            "number": "762",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT2H35M",
                            "id": "74",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "ORD",
                                "terminal": "3",
                                "at": "2022-06-28T15:45:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-28T18:20:00"
                            },
                            "carrierCode": "NK",
                            "number": "903",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT2H35M",
                            "id": "75",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "360.08",
                "base": "309.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "360.08"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "360.08",
                        "base": "309.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "74",
                            "cabin": "ECONOMY",
                            "fareBasis": "KNR",
                            "class": "K",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "75",
                            "cabin": "ECONOMY",
                            "fareBasis": "KNR",
                            "class": "K",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "41",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT6H40M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T07:45:00"
                            },
                            "arrival": {
                                "iataCode": "IAH",
                                "terminal": "B",
                                "at": "2022-06-27T08:42:00"
                            },
                            "carrierCode": "UA",
                            "number": "6326",
                            "aircraft": {
                                "code": "E7W"
                            },
                            "duration": "PT1H57M",
                            "id": "56",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "IAH",
                                "terminal": "B",
                                "at": "2022-06-27T12:10:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T13:25:00"
                            },
                            "carrierCode": "UA",
                            "number": "6168",
                            "aircraft": {
                                "code": "E7W"
                            },
                            "duration": "PT1H15M",
                            "id": "57",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "364.40",
                "base": "318.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "364.40"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "UA"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "364.40",
                        "base": "318.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "56",
                            "cabin": "ECONOMY",
                            "fareBasis": "VAA0OKEN",
                            "brandedFare": "ECONOMY",
                            "class": "V",
                            "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "57",
                            "cabin": "ECONOMY",
                            "fareBasis": "WAA0OKEN",
                            "brandedFare": "ECONOMY",
                            "class": "W",
                            "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "42",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT9H12M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T07:00:00"
                            },
                            "arrival": {
                                "iataCode": "ORD",
                                "terminal": "2",
                                "at": "2022-06-27T08:04:00"
                            },
                            "carrierCode": "UA",
                            "number": "5284",
                            "aircraft": {
                                "code": "E7W"
                            },
                            "duration": "PT2H4M",
                            "id": "16",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "ORD",
                                "terminal": "1",
                                "at": "2022-06-27T12:45:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T15:12:00"
                            },
                            "carrierCode": "UA",
                            "number": "2211",
                            "aircraft": {
                                "code": "738"
                            },
                            "operating": {
                                "carrierCode": "UA"
                            },
                            "duration": "PT2H27M",
                            "id": "17",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "427.80",
                "base": "372.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "427.80"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "UA"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "427.80",
                        "base": "372.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "16",
                            "cabin": "ECONOMY",
                            "fareBasis": "VAA0AKEN",
                            "brandedFare": "ECONOMY",
                            "class": "V",
                            "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "17",
                            "cabin": "ECONOMY",
                            "fareBasis": "VAA0JKEN",
                            "brandedFare": "ECONOMY",
                            "class": "V",
                            "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "43",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT15H56M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T17:49:00"
                            },
                            "arrival": {
                                "iataCode": "MCO",
                                "at": "2022-06-27T19:21:00"
                            },
                            "carrierCode": "NK",
                            "number": "1566",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H32M",
                            "id": "78",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MCO",
                                "at": "2022-06-28T07:00:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-28T08:45:00"
                            },
                            "carrierCode": "NK",
                            "number": "2963",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT2H45M",
                            "id": "79",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "436.40",
                "base": "380.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "436.40"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "436.40",
                        "base": "380.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "78",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "79",
                            "cabin": "ECONOMY",
                            "fareBasis": "MNR",
                            "class": "M",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "44",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 4,
            "itineraries": [
                {
                    "duration": "PT19H47M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T13:58:00"
                            },
                            "arrival": {
                                "iataCode": "MCO",
                                "at": "2022-06-27T15:26:00"
                            },
                            "carrierCode": "NK",
                            "number": "1209",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT1H28M",
                            "id": "66",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MCO",
                                "at": "2022-06-28T07:00:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-28T08:45:00"
                            },
                            "carrierCode": "NK",
                            "number": "2963",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "NK"
                            },
                            "duration": "PT2H45M",
                            "id": "67",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "436.40",
                "base": "380.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "436.40"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "NK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "436.40",
                        "base": "380.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "66",
                            "cabin": "ECONOMY",
                            "fareBasis": "VNR",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "67",
                            "cabin": "ECONOMY",
                            "fareBasis": "MNR",
                            "class": "M",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "45",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-26",
            "numberOfBookableSeats": 7,
            "itineraries": [
                {
                    "duration": "PT27H26M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T18:55:00"
                            },
                            "arrival": {
                                "iataCode": "JFK",
                                "terminal": "5",
                                "at": "2022-06-27T21:24:00"
                            },
                            "carrierCode": "B6",
                            "number": "1320",
                            "aircraft": {
                                "code": "E90"
                            },
                            "operating": {
                                "carrierCode": "B6"
                            },
                            "duration": "PT2H29M",
                            "id": "38",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "JFK",
                                "terminal": "5",
                                "at": "2022-06-28T18:30:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-28T21:21:00"
                            },
                            "carrierCode": "B6",
                            "number": "809",
                            "aircraft": {
                                "code": "320"
                            },
                            "operating": {
                                "carrierCode": "B6"
                            },
                            "duration": "PT3H51M",
                            "id": "39",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "741.70",
                "base": "664.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "741.70"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "B6"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "741.70",
                        "base": "664.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "38",
                            "cabin": "ECONOMY",
                            "fareBasis": "BH0ABEY5",
                            "brandedFare": "AN",
                            "class": "B",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "39",
                            "cabin": "ECONOMY",
                            "fareBasis": "EH0JUEN5",
                            "brandedFare": "AN",
                            "class": "E",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "46",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-26",
            "numberOfBookableSeats": 7,
            "itineraries": [
                {
                    "duration": "PT10H26M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T11:55:00"
                            },
                            "arrival": {
                                "iataCode": "JFK",
                                "terminal": "5",
                                "at": "2022-06-27T14:14:00"
                            },
                            "carrierCode": "B6",
                            "number": "520",
                            "aircraft": {
                                "code": "E90"
                            },
                            "operating": {
                                "carrierCode": "B6"
                            },
                            "duration": "PT2H19M",
                            "id": "36",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "JFK",
                                "terminal": "5",
                                "at": "2022-06-27T18:30:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T21:21:00"
                            },
                            "carrierCode": "B6",
                            "number": "809",
                            "aircraft": {
                                "code": "320"
                            },
                            "operating": {
                                "carrierCode": "B6"
                            },
                            "duration": "PT3H51M",
                            "id": "37",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "775.03",
                "base": "695.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "775.03"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "B6"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "775.03",
                        "base": "695.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "36",
                            "cabin": "ECONOMY",
                            "fareBasis": "BH0ABEY5",
                            "brandedFare": "AN",
                            "class": "B",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "37",
                            "cabin": "ECONOMY",
                            "fareBasis": "EH0JUEN5",
                            "brandedFare": "AN",
                            "class": "E",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "47",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-26",
            "numberOfBookableSeats": 7,
            "itineraries": [
                {
                    "duration": "PT15H6M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "N",
                                "at": "2022-06-27T07:15:00"
                            },
                            "arrival": {
                                "iataCode": "JFK",
                                "terminal": "5",
                                "at": "2022-06-27T09:29:00"
                            },
                            "carrierCode": "B6",
                            "number": "920",
                            "aircraft": {
                                "code": "320"
                            },
                            "operating": {
                                "carrierCode": "B6"
                            },
                            "duration": "PT2H14M",
                            "id": "5",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "JFK",
                                "terminal": "5",
                                "at": "2022-06-27T18:30:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T21:21:00"
                            },
                            "carrierCode": "B6",
                            "number": "809",
                            "aircraft": {
                                "code": "320"
                            },
                            "operating": {
                                "carrierCode": "B6"
                            },
                            "duration": "PT3H51M",
                            "id": "6",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "775.03",
                "base": "695.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "775.03"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "B6"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "775.03",
                        "base": "695.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "5",
                            "cabin": "ECONOMY",
                            "fareBasis": "BH0ABEY5",
                            "brandedFare": "AN",
                            "class": "B",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "EH0JUEN5",
                            "brandedFare": "AN",
                            "class": "E",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "48",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT5H11M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "S",
                                "at": "2022-06-27T13:24:00"
                            },
                            "arrival": {
                                "iataCode": "DTW",
                                "terminal": "EM",
                                "at": "2022-06-27T15:15:00"
                            },
                            "carrierCode": "DL",
                            "number": "386",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT1H51M",
                            "id": "12",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "DTW",
                                "terminal": "EM",
                                "at": "2022-06-27T15:50:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T17:35:00"
                            },
                            "carrierCode": "DL",
                            "number": "2268",
                            "aircraft": {
                                "code": "221"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT2H45M",
                            "id": "13",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "1710.30",
                "base": "1570.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "1710.30"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "DL"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "1710.30",
                        "base": "1570.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "12",
                            "cabin": "ECONOMY",
                            "fareBasis": "Y0N",
                            "brandedFare": "MAINCABIN",
                            "class": "Y",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "13",
                            "cabin": "ECONOMY",
                            "fareBasis": "Y0N",
                            "brandedFare": "MAINCABIN",
                            "class": "Y",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "49",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT5H18M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "ATL",
                                "terminal": "S",
                                "at": "2022-06-27T15:12:00"
                            },
                            "arrival": {
                                "iataCode": "DTW",
                                "terminal": "EM",
                                "at": "2022-06-27T17:09:00"
                            },
                            "carrierCode": "DL",
                            "number": "521",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT1H57M",
                            "id": "30",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "DTW",
                                "terminal": "EM",
                                "at": "2022-06-27T17:45:00"
                            },
                            "arrival": {
                                "iataCode": "DFW",
                                "terminal": "E",
                                "at": "2022-06-27T19:30:00"
                            },
                            "carrierCode": "DL",
                            "number": "1341",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "DL"
                            },
                            "duration": "PT2H45M",
                            "id": "31",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "1710.30",
                "base": "1570.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "1710.30"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "DL"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "1710.30",
                        "base": "1570.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "30",
                            "cabin": "ECONOMY",
                            "fareBasis": "Y0N",
                            "brandedFare": "MAINCABIN",
                            "class": "Y",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "31",
                            "cabin": "ECONOMY",
                            "fareBasis": "Y0N",
                            "brandedFare": "MAINCABIN",
                            "class": "Y",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        }
    ])
})

router.post("/", (req, res) => {
    //Wait for getFlights to run then console log the response
    const f = getFlightList(req.body).then(function(response){
        console.log(response)
        res.json(response)
    }
    ).catch(function(error){
        console.log(error)
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

