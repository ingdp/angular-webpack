/**
 * Created by daniele on 02/11/16.
 */
import constant from '../constants/constants';

const requestSrvModule = 'requestSrvModule';

angular.module(requestSrvModule, [constant])
    .service('requestSrv', ['$http', '$log',
        'APIKEY', 'BASE_URL',
        ($http, $log,
         APIKEY, BASE_URL)=> {
            let requestConfig = {
                method: 'GET',
                url: BASE_URL,
                headers: {
                    'Authorization': `Basic ${btoa(APIKEY)}`,
                },
            };

            return {
                getAll: () => {
                    return $http(requestConfig).then(
                        (res)=> {
                            $log.debug('<requestSrv::getAll>', res);
                            return res.data;
                        },
                        (err)=> {
                            $log.warn('Mocking data!', err);
                            return [
                                {
                                    "id": 45,
                                    "name": "The Physics",
                                    "tagline": "Laid Back Amber Beer.",
                                    "first_brewed": "April 2007",
                                    "description": "A hoppy Amber Ale that won World's Best Amber Beer in the World Beer Awards 2007. Malt and hops are in perfect harmony in this incredibly balanced beer. Biscuity, bitter and packing a surprisingly hoppy punch, this beer ultimately morphed into 5AM Saint.",
                                    "abv": 5,
                                    "ibu": 47,
                                    "target_fg": 1010,
                                    "target_og": 1048.5,
                                    "ebc": 65,
                                    "srm": 32.5,
                                    "ph": 4.4,
                                    "attenuation_level": 79.4,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 19,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": null
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Extra Pale",
                                                "amount": {
                                                    "value": 4.06,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Caramalt",
                                                "amount": {
                                                    "value": 0.31,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Crystal 120",
                                                "amount": {
                                                    "value": 0.23,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Dark Crystal",
                                                "amount": {
                                                    "value": 0.94,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Amarillo",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Amarillo",
                                                "amount": {
                                                    "value": 12.5,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Bramling Cross",
                                                "amount": {
                                                    "value": 12.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Amarillo",
                                                "amount": {
                                                    "value": 50,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Wyeast 1056 - American Ale™"
                                    },
                                    "food_pairing": [
                                        "Barbecue pulled pork on sourdough bread",
                                        "Roast turkey with a honey and herb marinade and roasted vegetables",
                                        "Banana walnut loaf with chocolate chips"
                                    ],
                                    "brewers_tips": "Keep the fermentation temperature as close to 19°C as possible. This will ensure the yeast creates a more neutral flavour profile, allowing the hops to really shine through.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 117,
                                    "name": "Hop Rocker",
                                    "tagline": "Hoppy Aggressive Lager",
                                    "first_brewed": "April 2007",
                                    "description": "The first of our foray into lager beer, Hop Rocker is a high impact, hoppy behemoth made with 100% malt. Since 2007 we have been obsessive about quality, using only the best ingredients to ensure the flavour and craftsmanship of the beer in your glass. Hop Rocker is testament to that. The malt base gives this beer a sweet, balanced complexity while the combination of New Zealand and German hops merges new world tropical juiciness with old world peppery spice.",
                                    "abv": 5.5,
                                    "ibu": 40,
                                    "target_fg": 1010,
                                    "target_og": 1052,
                                    "ebc": 25,
                                    "srm": 12,
                                    "ph": 4.2,
                                    "attenuation_level": 80.7,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 10,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": null
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Extra Pale Maris Otter",
                                                "amount": {
                                                    "value": 3.78,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Caramalt",
                                                "amount": {
                                                    "value": 0.31,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Munich",
                                                "amount": {
                                                    "value": 0.31,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Cascade",
                                                "amount": {
                                                    "value": 12.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Saaz",
                                                "amount": {
                                                    "value": 12.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Cascade",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Motueka",
                                                "amount": {
                                                    "value": 12.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Chinook",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Saflager S189"
                                    },
                                    "food_pairing": [
                                        "Cajun spiced chicken wings",
                                        "Mild cheddar",
                                        "Lemon tart"
                                    ],
                                    "brewers_tips": "After the fermentation has finished, chill the beer to below 5°C (if you can), wait 10 days and then rack the beer off the yeast into another bucket. The yeast left in suspension will carry on working its magic to create really clean, crisp lager flavours.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 101,
                                    "name": "Riptide",
                                    "tagline": "Twisted Merciless Stout.",
                                    "first_brewed": "April 2007",
                                    "description": "The original BrewDog, Bracken decided to make a beer that best reflected himself; this is the beer equivalent of the big, cute chocolate monster. Soft, smooth, dark, chocolatey and a force to be reckoned with. This gentle giant will never bite, but you'll still want to be on your best behaviour!",
                                    "abv": 8,
                                    "ibu": 45,
                                    "target_fg": 1014,
                                    "target_og": 1075,
                                    "ebc": 240,
                                    "srm": 120,
                                    "ph": 4.4,
                                    "attenuation_level": 81.3,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 20,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": "Dark muscavado sugar 285g 30mins pre boil end"
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Maris Otter Extra Pale",
                                                "amount": {
                                                    "value": 5.36,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Dark Crystal 350-400",
                                                "amount": {
                                                    "value": 0.71,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Carafa Special Malt Type 3",
                                                "amount": {
                                                    "value": 0.18,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Caramalt",
                                                "amount": {
                                                    "value": 0.54,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Chocolate",
                                                "amount": {
                                                    "value": 0.25,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Wheat",
                                                "amount": {
                                                    "value": 0.36,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Flaked Oats",
                                                "amount": {
                                                    "value": 0.54,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Columbus",
                                                "amount": {
                                                    "value": 14.3,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Galena",
                                                "amount": {
                                                    "value": 14.3,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Galena",
                                                "amount": {
                                                    "value": 21.4,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Cascade",
                                                "amount": {
                                                    "value": 21.4,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Columbus",
                                                "amount": {
                                                    "value": 21.4,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Wyeast 1272 - American Ale II™"
                                    },
                                    "food_pairing": [
                                        "Seared scallops",
                                        "Pan seared venison with fruit salad side",
                                        "Caramelised apple pie with vanilla ice cream"
                                    ],
                                    "brewers_tips": "We recommend adding the chocolate malt at the start of the run off to ensure you extract the flavour and colour without imparting too much of the astringency of the malt into your wort. This will give the beer a really smooth mouthfeel, making this dangerously drinkable at 8% ABV.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 192,
                                    "name": "Punk IPA 2007 - 2010",
                                    "tagline": "Post Modern Classic. Spiky. Tropical. Hoppy.",
                                    "first_brewed": "April 2007",
                                    "description": "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
                                    "abv": 6,
                                    "ibu": 60,
                                    "target_fg": 1010,
                                    "target_og": 1056,
                                    "ebc": 17,
                                    "srm": 8.5,
                                    "ph": 4.4,
                                    "attenuation_level": 82.14,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 19,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": null
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Extra Pale",
                                                "amount": {
                                                    "value": 5.3,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Ahtanum",
                                                "amount": {
                                                    "value": 17.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Chinook",
                                                "amount": {
                                                    "value": 15,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Crystal",
                                                "amount": {
                                                    "value": 17.5,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Chinook",
                                                "amount": {
                                                    "value": 17.5,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Ahtanum",
                                                "amount": {
                                                    "value": 17.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Chinook",
                                                "amount": {
                                                    "value": 27.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Crystal",
                                                "amount": {
                                                    "value": 17.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Motueka",
                                                "amount": {
                                                    "value": 17.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Wyeast 1056 - American Ale™"
                                    },
                                    "food_pairing": [
                                        "Spicy carne asada with a pico de gallo sauce",
                                        "Shredded chicken tacos with a mango chilli lime salsa",
                                        "Cheesecake with a passion fruit swirl sauce"
                                    ],
                                    "brewers_tips": "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 95,
                                    "name": "Peroxide Punk",
                                    "tagline": "Zesty Pale Ale.",
                                    "first_brewed": "April 2007",
                                    "description": "A trashy blonde concession for those who felt that our original 6% Punk IPA recipe was too hard hitting. This was also the first time we experimented with dry hopping our beers, giving Peroxide Punk a depth of flavour that belies its modest ABV. Zesty, aromatic and thirst quenching.",
                                    "abv": 4,
                                    "ibu": 40,
                                    "target_fg": 1009,
                                    "target_og": 1039,
                                    "ebc": 18,
                                    "srm": 9,
                                    "ph": 4.4,
                                    "attenuation_level": 76.9,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 19,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": null
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Maris Otter",
                                                "amount": {
                                                    "value": 3.85,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Amarillo",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Simcoe",
                                                "amount": {
                                                    "value": 20,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Amarillo",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Crystal",
                                                "amount": {
                                                    "value": 20,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Liberty",
                                                "amount": {
                                                    "value": 20,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Simcoe",
                                                "amount": {
                                                    "value": 50,
                                                    "unit": "grams"
                                                },
                                                "add": "dry hop",
                                                "attribute": "aroma"
                                            },
                                            {
                                                "name": "Amarillo",
                                                "amount": {
                                                    "value": 50,
                                                    "unit": "grams"
                                                },
                                                "add": "dry hop",
                                                "attribute": "aroma"
                                            }
                                        ],
                                        "yeast": "Wyeast 1056 - American Ale™"
                                    },
                                    "food_pairing": [
                                        "Sashimi",
                                        "Pan roasted poussin with spring veg",
                                        "Lemon and thyme panna cotta"
                                    ],
                                    "brewers_tips": "During the mashing process, try to mix the malt without 'turning' or splashing too much. This will cause more oxygen to be dissolved in the mash - and result in a beer that will taste a little like a cardboard box.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 52,
                                    "name": "Paradox Islay",
                                    "tagline": "Ubiquitous Imperial Stout.",
                                    "first_brewed": "April 2007",
                                    "description": "In 2006 James and Martin hijacked a beer dinner run by Michael Jackson, the acclaimed beer and whisky writer, and convinced him to taste one of their home brews. This was a defining moment in BrewDog prehistory, and that beer was the first incarnation of the ubiquitous Paradox. Aged in a variety of casks over the years, Paradox is dark, decadent and encapsulating. Can be enjoyed fresh; phenomenal when aged.",
                                    "abv": 10,
                                    "ibu": 55,
                                    "target_fg": 1014,
                                    "target_og": 1090,
                                    "ebc": 300,
                                    "srm": 152,
                                    "ph": 4.4,
                                    "attenuation_level": 84.4,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 90
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 21,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": "Try ageing on oak chips, infusing with rum raisins, or vanilla pods"
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Extra Pale",
                                                "amount": {
                                                    "value": 4.5,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Caramalt",
                                                "amount": {
                                                    "value": 0.55,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Munich",
                                                "amount": {
                                                    "value": 0.33,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Flaked Oats",
                                                "amount": {
                                                    "value": 1.35,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Dark Crystal",
                                                "amount": {
                                                    "value": 0.55,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Carafa Special Malt Type 1",
                                                "amount": {
                                                    "value": 0.18,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Carafa Special Malt Type 3",
                                                "amount": {
                                                    "value": 0.33,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Columbus",
                                                "amount": {
                                                    "value": 75,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Columbus",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Saaz",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "First Gold",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Wyeast 1272 - American Ale II™"
                                    },
                                    "food_pairing": [
                                        "Ancho chilli beef taco",
                                        "Chocolate gateaux",
                                        "Rum poached pears with dark chocolate sauce"
                                    ],
                                    "brewers_tips": "The beauty of this beer is in how brilliantly it lends itself to infusing or ageing. Experiment with different additions when the beer is ageing, taste it regularly to gauge its progress, and make sure you package it at its peak.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 68,
                                    "name": "Hype",
                                    "tagline": "New Zealand Pale Ale.",
                                    "first_brewed": "August 2007",
                                    "description": "A perfect pale ale showcase for the tropical profile of New Zealand hops and the intense citrus of US hops.",
                                    "abv": 4.1,
                                    "ibu": 65,
                                    "target_fg": 1010,
                                    "target_og": 1042,
                                    "ebc": 17,
                                    "srm": 8.5,
                                    "ph": 4.4,
                                    "attenuation_level": 76.2,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 19,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": null
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Maris Otter Extra Pale",
                                                "amount": {
                                                    "value": 4.02,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Nelson Sauvin",
                                                "amount": {
                                                    "value": 2,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Nelson Sauvin",
                                                "amount": {
                                                    "value": 5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Amarillo",
                                                "amount": {
                                                    "value": 2.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Wyeast 1272 - American Ale II™"
                                    },
                                    "food_pairing": [
                                        "Quince cheese",
                                        "Shredded chicken and mango salsa taquitos",
                                        "Poached pear"
                                    ],
                                    "brewers_tips": "After the beer has fermented, leave it to rest for 2 – 3 days at the lowest temperature possible (ideally 0 – 2'C). This will allow the flavours to marry together, and will transform it into a balanced and amazing beer.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 1,
                                    "name": "Buzz",
                                    "tagline": "A Real Bitter Experience.",
                                    "first_brewed": "September 2007",
                                    "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
                                    "abv": 4.5,
                                    "ibu": 60,
                                    "target_fg": 1010,
                                    "target_og": 1044,
                                    "ebc": 20,
                                    "srm": 10,
                                    "ph": 4.4,
                                    "attenuation_level": 75,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 64,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 19,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": null
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Maris Otter Extra Pale",
                                                "amount": {
                                                    "value": 3.3,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Caramalt",
                                                "amount": {
                                                    "value": 0.2,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Munich",
                                                "amount": {
                                                    "value": 0.4,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Fuggles",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "First Gold",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Fuggles",
                                                "amount": {
                                                    "value": 37.5,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "First Gold",
                                                "amount": {
                                                    "value": 37.5,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Cascade",
                                                "amount": {
                                                    "value": 37.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Wyeast 1056 - Ameican Ale™"
                                    },
                                    "food_pairing": [
                                        "Spicy chicken tikka masala",
                                        "Grilled chicken quesadilla",
                                        "Caramel toffee cake"
                                    ],
                                    "brewers_tips": "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 157,
                                    "name": "Edge",
                                    "tagline": "Dark Full-Bodied Cask Ale",
                                    "first_brewed": "December 2007",
                                    "description": "Low ABV, high flavour, this beer was brewed to show that a beer can have all the flavour without the drunken affects. Also this beer is one of BrewDog's original brews that made a rare appearance in cask. Spicy, malty biscuit and super drinkable.",
                                    "abv": 2.7,
                                    "ibu": 36,
                                    "target_fg": 1010,
                                    "target_og": 1033,
                                    "ebc": 57,
                                    "srm": 29,
                                    "ph": 4.4,
                                    "attenuation_level": 70.8,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 19,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": null
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Extra Pale",
                                                "amount": {
                                                    "value": 2.16,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Wheat",
                                                "amount": {
                                                    "value": 0.63,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Crystal",
                                                "amount": {
                                                    "value": 0.31,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Roasted Barley",
                                                "amount": {
                                                    "value": 0.19,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "CaraAroma",
                                                "amount": {
                                                    "value": 0.13,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Pacific Hallertau",
                                                "amount": {
                                                    "value": 15.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Pacific Hallertau",
                                                "amount": {
                                                    "value": 10.2,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Motueka",
                                                "amount": {
                                                    "value": 6.1,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Pacific Hallertau",
                                                "amount": {
                                                    "value": 12.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Motueka",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Amarillo",
                                                "amount": {
                                                    "value": 12.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Wyeast 1056 - American Ale™"
                                    },
                                    "food_pairing": [
                                        "Lamb and root vegetable stew",
                                        "Warm goats cheese salad",
                                        "Raisin rum cake"
                                    ],
                                    "brewers_tips": "Don’t overcook the mash - 75 minutes only at 65°C to get the right amount of fermentable sugars. Leave it too long and the beer ends up really watery and unpleasant.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 23,
                                    "name": "Storm",
                                    "tagline": "Islay Whisky Aged IPA.",
                                    "first_brewed": "December 2007",
                                    "description": "Dark and powerful Islay magic infuses this tropical sensation of an IPA. Using the original Punk IPA as a base, we boosted the ABV to 8% giving it some extra backbone to stand up to the peated smoke imported directly from Islay.",
                                    "abv": 8,
                                    "ibu": 60,
                                    "target_fg": 1010,
                                    "target_og": 1082,
                                    "ebc": 12,
                                    "srm": 6,
                                    "ph": 4.4,
                                    "attenuation_level": 86,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 19,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": "Oak chips soaked in Islay whisky 50g"
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Extra Pale",
                                                "amount": {
                                                    "value": 5.8,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Ahtanum",
                                                "amount": {
                                                    "value": 17.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Chinook",
                                                "amount": {
                                                    "value": 15,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Crystal",
                                                "amount": {
                                                    "value": 17.5,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Chinook",
                                                "amount": {
                                                    "value": 17.5,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Ahtanum",
                                                "amount": {
                                                    "value": 17.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Chinook",
                                                "amount": {
                                                    "value": 27.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Crystal",
                                                "amount": {
                                                    "value": 17.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Motueka",
                                                "amount": {
                                                    "value": 17.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Wyeast 1056 American Ale™"
                                    },
                                    "food_pairing": [
                                        "Oysters",
                                        "Hickory smoked ham",
                                        "Rocky road"
                                    ],
                                    "brewers_tips": "After primary fermentation is complete, rack off into a secondary fermeter and add the oak chips to replicate the authentic Islay barrel experience.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 214,
                                    "name": "Cult Lager",
                                    "tagline": "US & New Zeland Hopped Lager",
                                    "first_brewed": "April 2008",
                                    "description": "A lager that actually tastes of something? You have to be kidding, right? Cult lager is made with 100% malt and whole leaf hops. Maybe we are crazy, so what? Taste our lager and we are pretty sure that you will agree that the fine line between insanity and genius has just become a little more blurred.",
                                    "abv": 5.4,
                                    "ibu": 50,
                                    "target_fg": 1049,
                                    "target_og": 1008,
                                    "ebc": 19,
                                    "srm": 8,
                                    "ph": 4.1,
                                    "attenuation_level": 83.7,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 10,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": null
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Lager",
                                                "amount": {
                                                    "value": 4.66,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Saaz",
                                                "amount": {
                                                    "value": 12.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Cascade",
                                                "amount": {
                                                    "value": 12.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Cascade",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Chinook",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Motueka",
                                                "amount": {
                                                    "value": 12.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Saflager S189"
                                    },
                                    "food_pairing": [
                                        "Arrabiata pasta with grilled prawns",
                                        "Mexican spiced chicken with hot sauce",
                                        "Orange marmalade thumb print cookie"
                                    ],
                                    "brewers_tips": "When the fermentation is nearly complete, allow the temperature of the beer to rise. This will scrub some of the undesirable flavours out.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 2,
                                    "name": "Trashy Blonde",
                                    "tagline": "You Know You Shouldn't",
                                    "first_brewed": "April 2008",
                                    "description": "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
                                    "abv": 4.1,
                                    "ibu": 41.5,
                                    "target_fg": 1010,
                                    "target_og": 1041.7,
                                    "ebc": 15,
                                    "srm": 15,
                                    "ph": 4.4,
                                    "attenuation_level": 76,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 69,
                                                    "unit": "celsius"
                                                },
                                                "duration": null
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 18,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": null
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Maris Otter Extra Pale",
                                                "amount": {
                                                    "value": 3.25,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Caramalt",
                                                "amount": {
                                                    "value": 0.2,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Munich",
                                                "amount": {
                                                    "value": 0.4,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Amarillo",
                                                "amount": {
                                                    "value": 13.8,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Simcoe",
                                                "amount": {
                                                    "value": 13.8,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Amarillo",
                                                "amount": {
                                                    "value": 26.3,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Motueka",
                                                "amount": {
                                                    "value": 18.8,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Wyeast 1056 - American Ale™"
                                    },
                                    "food_pairing": [
                                        "Fresh crab with lemon",
                                        "Garlic butter dipping sauce",
                                        "Goats cheese salad",
                                        "Creamy lemon bar doused in powdered sugar"
                                    ],
                                    "brewers_tips": "Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 86,
                                    "name": "Original Dogma (Née Speedball)",
                                    "tagline": "Strong Ale With Honey And Spices.",
                                    "first_brewed": "July 2008",
                                    "description": "A strong ale, brewed with guarana, Californian poppy, kola nut and Scottish heather honey. A conspiracy of trans-continental ingredients infused with some devastatingly BrewDog imaginative thinking.",
                                    "abv": 7.8,
                                    "ibu": 60,
                                    "target_fg": 1012,
                                    "target_og": 1071.3,
                                    "ebc": 31,
                                    "srm": 15.5,
                                    "ph": 4.3,
                                    "attenuation_level": 83.2,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 64,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 21,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": "Herb and honey addition"
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Extra Pale",
                                                "amount": {
                                                    "value": 4.5,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Munich",
                                                "amount": {
                                                    "value": 0.5,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Amber",
                                                "amount": {
                                                    "value": 0.05,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Dark Crystal",
                                                "amount": {
                                                    "value": 0.08,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Amarillo",
                                                "amount": {
                                                    "value": 30,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Amarillo",
                                                "amount": {
                                                    "value": 10,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Bobek",
                                                "amount": {
                                                    "value": 10,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Guarana Powder",
                                                "amount": {
                                                    "value": 6,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Kola Nut Powder",
                                                "amount": {
                                                    "value": 6,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Poppy Seed",
                                                "amount": {
                                                    "value": 6,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Heather Honey",
                                                "amount": {
                                                    "value": 100,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Safale US-05"
                                    },
                                    "food_pairing": [
                                        "Spicy seafood stew",
                                        "French onion soup",
                                        "Mexican wedding cake (cookies)"
                                    ],
                                    "brewers_tips": "Get really good quality heather honey, the more aromatic the better. Honey is 100% fermentable, but it does have a huge influence on the ester profile of the beer – in this case high floral esters.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 149,
                                    "name": "AB:03",
                                    "tagline": "Barrel-Aged Imperial Ale.",
                                    "first_brewed": "September 2008",
                                    "description": "This Abstrakt started life as a simple imperial Ale, but upon the addition of fresh Scottish raspberries and strawberries, and left to mature for 2 years in Invergordon whisky casks that had held whisky for over 40 years, this beer transcended into something new.",
                                    "abv": 10.5,
                                    "ibu": 14,
                                    "target_fg": 1013,
                                    "target_og": 1093,
                                    "ebc": null,
                                    "srm": null,
                                    "ph": 4.4,
                                    "attenuation_level": 80,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 90
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 19,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": "Strawberries: 1kg, Raspberries: 1kg, Oak Chips: 75g"
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Extra Pale",
                                                "amount": {
                                                    "value": 8,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Magnum",
                                                "amount": {
                                                    "value": 66.7,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Wyeast 1056 - American Ale™"
                                    },
                                    "food_pairing": [
                                        "Haggis spring rolls",
                                        "Honey glazed duck breast",
                                        "Cranachan"
                                    ],
                                    "brewers_tips": "Add your hops with five minutes of the boil left in a nod to the great lambic producers of Belgium.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 37,
                                    "name": "Zephyr",
                                    "tagline": "There’s A Storm Brewing.",
                                    "first_brewed": "October 2008",
                                    "description": "A 9.2% Double IPA aged for 21 months in a 1965 Invergordon cask with 30 kg of fresh highland strawberries. This beer is a riot of whisky, caramel and strawberry, all tempered by a toe curling bitterness enducing rapture in all who taste it. Who needs champagne?",
                                    "abv": 12.5,
                                    "ibu": 125,
                                    "target_fg": 1016,
                                    "target_og": 1087,
                                    "ebc": 40,
                                    "srm": 20,
                                    "ph": 4.4,
                                    "attenuation_level": 81.2,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 21,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": "Oak chips: 15g, Fresh strawberries: 3kg"
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Extra Pale",
                                                "amount": {
                                                    "value": 6.3,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Caramalt",
                                                "amount": {
                                                    "value": 0.38,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Crystal 150",
                                                "amount": {
                                                    "value": 0.29,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Columbus Extract",
                                                "amount": {
                                                    "value": 31,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Columbus",
                                                "amount": {
                                                    "value": 19.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Columbus",
                                                "amount": {
                                                    "value": 19.5,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Centennial",
                                                "amount": {
                                                    "value": 19.5,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Simcoe",
                                                "amount": {
                                                    "value": 19.5,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Columbus",
                                                "amount": {
                                                    "value": 19.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Centennial",
                                                "amount": {
                                                    "value": 19.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Centennial",
                                                "amount": {
                                                    "value": 115.5,
                                                    "unit": "grams"
                                                },
                                                "add": "dry hop",
                                                "attribute": "aroma"
                                            },
                                            {
                                                "name": "Columbus",
                                                "amount": {
                                                    "value": 96,
                                                    "unit": "grams"
                                                },
                                                "add": "dry hop",
                                                "attribute": "aroma"
                                            },
                                            {
                                                "name": "Simcoe",
                                                "amount": {
                                                    "value": 96,
                                                    "unit": "grams"
                                                },
                                                "add": "dry hop",
                                                "attribute": "aroma"
                                            },
                                            {
                                                "name": "Amarillo",
                                                "amount": {
                                                    "value": 77,
                                                    "unit": "grams"
                                                },
                                                "add": "dry hop",
                                                "attribute": "aroma"
                                            }
                                        ],
                                        "yeast": "Wyeast 1272 - American Ale II™"
                                    },
                                    "food_pairing": [
                                        "Poached eggs and smoked salmon",
                                        "Salt and pepper squid",
                                        "Key lime pie"
                                    ],
                                    "brewers_tips": "Rack into a secondary fermenter and add your strawberries. Use a blow-off rather than an airlock as the fermentation can get pretty wild as the yeast starts using the sugar from the strawberries.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 124,
                                    "name": "Chaos Theory",
                                    "tagline": "Predictably Random IPA.",
                                    "first_brewed": "October 2008",
                                    "description": "Chaos Theory is the most under- rated achievement of 20th Century science. This beer can only aspire to parallel to the mathematical use of the word chaos, which is at odds to the common parlance. The purest showcase of the magnificent hop that is Nelson Sauvin; grapefruit, pineapple and caramel sing above the chaos of life.",
                                    "abv": 7.1,
                                    "ibu": 90,
                                    "target_fg": 1013,
                                    "target_og": 1067,
                                    "ebc": 15,
                                    "srm": 7.5,
                                    "ph": 4.4,
                                    "attenuation_level": 80.6,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 19,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": null
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Pale Ale",
                                                "amount": {
                                                    "value": 5,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Caramalt",
                                                "amount": {
                                                    "value": 0.63,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Crystal 150",
                                                "amount": {
                                                    "value": 0.25,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Nelson Sauvin",
                                                "amount": {
                                                    "value": 12.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Nelson Sauvin",
                                                "amount": {
                                                    "value": 12.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Nelson Sauvin",
                                                "amount": {
                                                    "value": 12.5,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Nelson Sauvin",
                                                "amount": {
                                                    "value": 50,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Wyeast 1056 - American Ale™"
                                    },
                                    "food_pairing": [
                                        "Spicy mexican meatball stew",
                                        "Habenero and mango pulled pork tacos",
                                        "Spiced pumpkin pie with chocolate whipped cream"
                                    ],
                                    "brewers_tips": "Get to know the guys in your local homebrew shop. They can give you a heads up when rare brewing materials – like Nelson Sauvin – are coming in.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 25,
                                    "name": "Bad Pixie",
                                    "tagline": "Spiced Wheat Beer.",
                                    "first_brewed": "October 2008",
                                    "description": "2008 Prototype beer, a 4.7% wheat ale with crushed juniper berries and citrus peel.",
                                    "abv": 4.7,
                                    "ibu": 45,
                                    "target_fg": 1010,
                                    "target_og": 1047,
                                    "ebc": 8,
                                    "srm": 4,
                                    "ph": 4.4,
                                    "attenuation_level": 79,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 67,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 19,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": "Crushed juniper berries: 12.5g, Lemon peel: 18.8g"
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Wheat",
                                                "amount": {
                                                    "value": 2.5,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Extra Pale",
                                                "amount": {
                                                    "value": 2.06,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "First Gold",
                                                "amount": {
                                                    "value": 18.75,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "First Gold",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Sorachi Ace",
                                                "amount": {
                                                    "value": 16.25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Wyeast 1056 - American Ale™"
                                    },
                                    "food_pairing": [
                                        "Poached sole fillet with capers",
                                        "Summer fruit salad",
                                        "Banana split"
                                    ],
                                    "brewers_tips": "Make sure you have plenty of room in the fermenter. Beers containing wheat can often foam aggressively during fermentation.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 58,
                                    "name": "Coffee Imperial Stout",
                                    "tagline": "Beats a Cup of Joe.",
                                    "first_brewed": "November 2008",
                                    "description": "This beer was released as both as \"Danish Beerhouse Coffee Imperial Stout\" and \"BrewDog Coffee Imperial Stout\". Deep, dark, roasted flavours make this a perfect Sunday brunch beer.",
                                    "abv": 9,
                                    "ibu": 65,
                                    "target_fg": 1019,
                                    "target_og": 1080,
                                    "ebc": 97,
                                    "srm": 49,
                                    "ph": 4.4,
                                    "attenuation_level": 76,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 64,
                                                    "unit": "celsius"
                                                },
                                                "duration": 90
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 19,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": "Coffee added after boil. Aged on French oak chips., Dark muscovado sugar: 312.5g for 20mins"
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Extra Pale",
                                                "amount": {
                                                    "value": 7.5,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Dark Crystal",
                                                "amount": {
                                                    "value": 0.63,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Chocolate",
                                                "amount": {
                                                    "value": 0.31,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Roast Barley",
                                                "amount": {
                                                    "value": 0.31,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Chinook",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Galena",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Galena",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "First Gold",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Coffee",
                                                "amount": {
                                                    "value": 9.4,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Coffee",
                                                "amount": {
                                                    "value": 9.4,
                                                    "unit": "grams"
                                                },
                                                "add": "dry hop",
                                                "attribute": "aroma"
                                            }
                                        ],
                                        "yeast": "Wyeast 1056 - American Ale™"
                                    },
                                    "food_pairing": [
                                        "Gooey chocolate brownies",
                                        "Chicken fried steak with cheesy mash",
                                        "Spicy chicken empanadas"
                                    ],
                                    "brewers_tips": "Grind the coffee as if making an espresso to really get the most out of it.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 22,
                                    "name": "Devine Rebel (w/ Mikkeller)",
                                    "tagline": "Oak-aged Barley Wine.",
                                    "first_brewed": "December 2008",
                                    "description": "Two of Europe's most experimental, boundary-pushing brewers, BrewDog and Mikkeller, combined forces to produce a rebellious beer that combined their respective talents and brewing skills. The 12.5% Barley Wine fermented well, and the champagne yeast drew it ever closer to 12.5%. The beer was brewed with a single hop variety and was going to be partially aged in oak casks.",
                                    "abv": 12.5,
                                    "ibu": 100,
                                    "target_fg": 1030,
                                    "target_og": 1093,
                                    "ebc": 36,
                                    "srm": 18,
                                    "ph": 4.4,
                                    "attenuation_level": 68,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 90
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 19,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": "Part-aged in oak barrels, finished with champagne yeast"
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Extra Pale",
                                                "amount": {
                                                    "value": 10,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Caramalt",
                                                "amount": {
                                                    "value": 1.88,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Munich",
                                                "amount": {
                                                    "value": 1.25,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Amber",
                                                "amount": {
                                                    "value": 0.63,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Nelson Sauvin",
                                                "amount": {
                                                    "value": 100,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Nelson Sauvin",
                                                "amount": {
                                                    "value": 100,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Wyeast 1056 - American Ale™"
                                    },
                                    "food_pairing": [
                                        "Stilton on gingerbread biscuits",
                                        "Pot roasted artichokes",
                                        "Lamb chops with caramelised figs"
                                    ],
                                    "brewers_tips": "Rack off to a secondary fermenter before pitching in some champagne.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 119,
                                    "name": "Zeitgeist",
                                    "tagline": "Organic Black Lager.",
                                    "first_brewed": "December 2008",
                                    "description": "Zeitgeist is an idiosyncratic alternative black lager. Its inspiration is found more than 200 years ago. Zeitgeist takes an age old classic, a forgotten masterpiece, and gives it relevance and an avant-garde edge.",
                                    "abv": 4.9,
                                    "ibu": 32,
                                    "target_fg": 1010,
                                    "target_og": 1047.5,
                                    "ebc": 120,
                                    "srm": 60,
                                    "ph": 4.3,
                                    "attenuation_level": 79,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": null
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 15,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": null
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Organic Lager",
                                                "amount": {
                                                    "value": 1.13,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Organic Caramalt",
                                                "amount": {
                                                    "value": 0.28,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Organic Munich",
                                                "amount": {
                                                    "value": 2.7,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Organic Chocolate",
                                                "amount": {
                                                    "value": 0.23,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Cascade",
                                                "amount": {
                                                    "value": 27.2,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Cascade",
                                                "amount": {
                                                    "value": 27.2,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Saflager S189"
                                    },
                                    "food_pairing": [
                                        "Spicy cajun fried chicken",
                                        "Pork dumplings with rich soy sauce",
                                        "Cinnamon carrot cake with creamy cheese frosting"
                                    ],
                                    "brewers_tips": "Inspect the colour of the wort during boiling. If it is not quite dark enough, extend the boil by 10 - 15 mins and check again. The wort will darken during the boiling process.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 162,
                                    "name": "77 Lager",
                                    "tagline": "Artisan Rebel Pilsner.",
                                    "first_brewed": "December 2008",
                                    "description": "Think of everything you know about lagers. Then forget it all instantly. 77 will redefine the experience forever. A Lager that actually tastes of something? You have to be kidding, right? 77 lager is made with 100% malt and whole leaf hops. It contains no preservatives, additives, cheap substitutes or any other junk. Maybe we are crazy. So what? Taste 77 Lager and we are pretty sure you will agree that the fine line between genius and insanity has just become a little more blurred.",
                                    "abv": 4.9,
                                    "ibu": 30,
                                    "target_fg": 1009,
                                    "target_og": 1047,
                                    "ebc": 12,
                                    "srm": 6,
                                    "ph": 4.4,
                                    "attenuation_level": 80.7,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 10,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": null
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Extra Pale",
                                                "amount": {
                                                    "value": 3.63,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Caramalt",
                                                "amount": {
                                                    "value": 0.31,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Munich",
                                                "amount": {
                                                    "value": 0.31,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Hallertauer Mittelfrüh",
                                                "amount": {
                                                    "value": 37.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Hallertauer Mittelfrüh",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Tettnang",
                                                "amount": {
                                                    "value": 37.5,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Saaz",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Wyeast Pilsner Strain 2007™"
                                    },
                                    "food_pairing": [
                                        "Aromatic spicy red thai curry",
                                        "Sticky spicy barbecue ribs with a strong blue cheese dipping sauce",
                                        "Creamy warm baked goats cheese salad"
                                    ],
                                    "brewers_tips": "Watch out for collecting too much wort. Collecting too much liquid from run off (under 1008) may impart massive and undesired 'grainy' flavours into the beer",
                                    "contributed_by": "Mike Francis <mikeffrancis@gmail.com>"
                                },
                                {
                                    "id": 184,
                                    "name": "Atlantic IPA Ale",
                                    "tagline": "IPA Of Yesteryear.",
                                    "first_brewed": "December 2008",
                                    "description": "Like IPA historically would have been. Part of this beer was aged on a fishing boat in an oak cask and released as \"Atlantic IPA\".",
                                    "abv": 8,
                                    "ibu": 80,
                                    "target_fg": 1013,
                                    "target_og": 1074,
                                    "ebc": 55,
                                    "srm": 13,
                                    "ph": 4.4,
                                    "attenuation_level": 82,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 19,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": null
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Extra Pale",
                                                "amount": {
                                                    "value": 5.73,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Amber",
                                                "amount": {
                                                    "value": 0.52,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Crystal",
                                                "amount": {
                                                    "value": 0.52,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "First Gold",
                                                "amount": {
                                                    "value": 146,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "East Kent Goldings",
                                                "amount": {
                                                    "value": 47,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Fuggles",
                                                "amount": {
                                                    "value": 46,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Bramling Cross",
                                                "amount": {
                                                    "value": 62.5,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Goldings",
                                                "amount": {
                                                    "value": 62.5,
                                                    "unit": "grams"
                                                },
                                                "add": "dry hop",
                                                "attribute": "aroma"
                                            }
                                        ],
                                        "yeast": "Safale US-05"
                                    },
                                    "food_pairing": [
                                        "Smoked venison sausage",
                                        "Very mature cheddar",
                                        "Fettucine alfredo"
                                    ],
                                    "brewers_tips": "Ensure you aerate the wort to get a nice clean fermentation and really get the best out of the UK hops.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 179,
                                    "name": "How To Disappear Completely",
                                    "tagline": "Fake Fix Double IPA.",
                                    "first_brewed": "April 2009",
                                    "description": "Jam-packed with two of our favourite hops - Columbus and Centennial, it has 198 (yes one hundred and ninety eight) theoretical IBUs. We use a lot of caramalt, some amber malt and some chocolate malt to give the little beer as much body and mouthfeel as possible and the ability to handle all the hops we threw at it. We think this beer is the world’s first ever Imperial Mild. Imperial in terms of hop profile. An Imperially Hopped Mild. BrewDog’s Imperial Mild. How to Disappear Completely.",
                                    "abv": 3.5,
                                    "ibu": 198,
                                    "target_fg": 1010,
                                    "target_og": 1037,
                                    "ebc": 37,
                                    "srm": 19,
                                    "ph": 4.4,
                                    "attenuation_level": 73,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": 75
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 19,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": null
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Extra Pale",
                                                "amount": {
                                                    "value": 2,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Wheat Malt",
                                                "amount": {
                                                    "value": 0.31,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Munich",
                                                "amount": {
                                                    "value": 0.31,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Caramalt",
                                                "amount": {
                                                    "value": 0.63,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Pale Crystal 60",
                                                "amount": {
                                                    "value": 0.31,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Dark Crystal 350",
                                                "amount": {
                                                    "value": 0.081,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Amber",
                                                "amount": {
                                                    "value": 0.081,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Chocolate",
                                                "amount": {
                                                    "value": 0.081,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Centennial",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Centennial",
                                                "amount": {
                                                    "value": 37.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Centennial",
                                                "amount": {
                                                    "value": 12.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Columbus",
                                                "amount": {
                                                    "value": 50,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Centennial",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Columbus",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "middle",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Centennial",
                                                "amount": {
                                                    "value": 18.8,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Columbus",
                                                "amount": {
                                                    "value": 18.8,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Galena",
                                                "amount": {
                                                    "value": 18.8,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Simcoe",
                                                "amount": {
                                                    "value": 18.8,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "Wyeast 3522 - Belgian Ardennes™"
                                    },
                                    "food_pairing": [
                                        "Spicy pork sausages with red potato mash",
                                        "Turnip beef stew with crusty fresh baked bread",
                                        "Summer berry cheesecake"
                                    ],
                                    "brewers_tips": "Dry Hopping: Columbus 37.5g, Centennial 37.5g, Galena 37.5g, Horizon 37.5g",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 144,
                                    "name": "Tokyo*",
                                    "tagline": "Intergalactic Stout. Rich. Smoky. Fruity.",
                                    "first_brewed": "June 2009",
                                    "description": "Our most involved beer, Tokyo* is an Imperial Stout brewed with copious amounts of specialty malts, jasmine and cranberries, dry-hopped with a bucket-load of our favourite hops and then carefully aged on toasted French oak chips. It’s all about moderation. Everything in moderation, including moderation itself...",
                                    "abv": 16.2,
                                    "ibu": 85,
                                    "target_fg": 1028,
                                    "target_og": 1157,
                                    "ebc": 250,
                                    "srm": 127,
                                    "ph": 4.4,
                                    "attenuation_level": 82.2,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": null
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 21,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": "Cranberry: 25g at end, Jasmine: 25g at end, Muscovado sugar: 300g at middle, Oak chips: 15g at FV"
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Extra Pale",
                                                "amount": {
                                                    "value": 11.25,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Dark Crystal",
                                                "amount": {
                                                    "value": 1.75,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Chocolate",
                                                "amount": {
                                                    "value": 0.5,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Roasted Barley",
                                                "amount": {
                                                    "value": 0.5,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Chinook",
                                                "amount": {
                                                    "value": 37.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Galena",
                                                "amount": {
                                                    "value": 37.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Chinook",
                                                "amount": {
                                                    "value": 37.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Galena",
                                                "amount": {
                                                    "value": 37.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Galena",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "First Gold",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Chinook",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "WLP099 Super High Gravity Ale"
                                    },
                                    "food_pairing": [
                                        "Herbal roast beef with a cranberry jus",
                                        "Baked honey glazed ham with dark fruit sauce",
                                        "Dark fruit cake"
                                    ],
                                    "brewers_tips": "If in doubt, just split the malt bill in two and do a double mash. Mash and collect, clean out and mash and collect again. Don’t even bother sparging – you don’t want any more water in there. Keep the fermentation a little warmer than usual 21 - 23°C, and don’t panic if it takes a month to ferment...",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                },
                                {
                                    "id": 66,
                                    "name": "Tokyo Rising Sun - Lowland",
                                    "tagline": "A Beautiful Accident.",
                                    "first_brewed": "June 2009",
                                    "description": "A forgotten gem in the deepest, darkest corner of the warehouse. Aged in a Lowland whisky cask resulting in decadent chocolate, toasted vanilla, indulgent spiced fruit, a mesmerizingly hypnotic mouthfeel and new layers that emerge on every sip.",
                                    "abv": 13.2,
                                    "ibu": 85,
                                    "target_fg": 1023,
                                    "target_og": 1125,
                                    "ebc": 140,
                                    "srm": 71,
                                    "ph": 4.4,
                                    "attenuation_level": 82.17,
                                    "volume": {
                                        "value": 20,
                                        "unit": "liters"
                                    },
                                    "boil_volume": {
                                        "value": 25,
                                        "unit": "liters"
                                    },
                                    "method": {
                                        "mash_temp": [
                                            {
                                                "temp": {
                                                    "value": 65,
                                                    "unit": "celsius"
                                                },
                                                "duration": null
                                            }
                                        ],
                                        "fermentation": {
                                            "temp": {
                                                "value": 21,
                                                "unit": "celsius"
                                            }
                                        },
                                        "twist": "Cranberry: 25g at end, Jasmine: 25g at end, Muscovado sugar: 300g at start, Oak chips soaked in lowland whisky: 15g at dry hop"
                                    },
                                    "ingredients": {
                                        "malt": [
                                            {
                                                "name": "Extra Pale",
                                                "amount": {
                                                    "value": 7.6,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Dark Crystal",
                                                "amount": {
                                                    "value": 1.75,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Chocolate",
                                                "amount": {
                                                    "value": 0.5,
                                                    "unit": "kilograms"
                                                }
                                            },
                                            {
                                                "name": "Roasted Barley",
                                                "amount": {
                                                    "value": 0.5,
                                                    "unit": "kilograms"
                                                }
                                            }
                                        ],
                                        "hops": [
                                            {
                                                "name": "Chinook",
                                                "amount": {
                                                    "value": 37.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Galena",
                                                "amount": {
                                                    "value": 37.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Chinook",
                                                "amount": {
                                                    "value": 37.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Galena",
                                                "amount": {
                                                    "value": 37.5,
                                                    "unit": "grams"
                                                },
                                                "add": "start",
                                                "attribute": "bitter"
                                            },
                                            {
                                                "name": "Galena",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "First Gold",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            },
                                            {
                                                "name": "Chinook",
                                                "amount": {
                                                    "value": 25,
                                                    "unit": "grams"
                                                },
                                                "add": "end",
                                                "attribute": "flavour"
                                            }
                                        ],
                                        "yeast": "WLP099 Super High Gravity Ale"
                                    },
                                    "food_pairing": [
                                        "Duck liver paté",
                                        "Mutton stew",
                                        "Kirsch chocolate truffles"
                                    ],
                                    "brewers_tips": "Leave on wood for as long as you dare. If possible forget about it for four years.",
                                    "contributed_by": "Sam Mason <samjbmason>"
                                }
                            ]
                        });
                }
            }

        }]);

export default requestSrvModule;