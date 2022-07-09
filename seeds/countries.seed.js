const countrySchema = require("../models/Country.model");

const Countries = [{
    "_id": {
      "$oid": "62c936b2a92a38c19c455317"
    },
    "name": {
      "common": "Guam"
    },
    "cca3": "GUM",
    "capital": [
      "Hagåtña"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 168783,
    "timezones": [
      "UTC+10:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gu.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455318"
    },
    "name": {
      "common": "Bangladesh"
    },
    "cca3": "BGD",
    "capital": [
      "Dhaka"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 164689383,
    "timezones": [
      "UTC+06:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bd.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455319"
    },
    "name": {
      "common": "Cook Islands"
    },
    "cca3": "COK",
    "capital": [
      "Avarua"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 18100,
    "timezones": [
      "UTC-10:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ck.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45531a"
    },
    "name": {
      "common": "Nepal"
    },
    "cca3": "NPL",
    "capital": [
      "Kathmandu"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 29136808,
    "timezones": [
      "UTC+05:45"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/np.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45531b"
    },
    "name": {
      "common": "Monaco"
    },
    "cca3": "MCO",
    "capital": [
      "Monaco"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 39244,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mc.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45531c"
    },
    "name": {
      "common": "Turkey"
    },
    "cca3": "TUR",
    "capital": [
      "Ankara"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 84339067,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tr.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45531d"
    },
    "name": {
      "common": "Saint Barthélemy"
    },
    "cca3": "BLM",
    "capital": [
      "Gustavia"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 4255,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bl.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45531e"
    },
    "name": {
      "common": "Jamaica"
    },
    "cca3": "JAM",
    "capital": [
      "Kingston"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 2961161,
    "timezones": [
      "UTC-05:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/jm.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45531f"
    },
    "name": {
      "common": "Andorra"
    },
    "cca3": "AND",
    "capital": [
      "Andorra la Vella"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 77265,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ad.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455320"
    },
    "name": {
      "common": "Libya"
    },
    "cca3": "LBY",
    "capital": [
      "Tripoli"
    ],
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 6871287,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ly.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455321"
    },
    "name": {
      "common": "Jersey"
    },
    "cca3": "JEY",
    "capital": [
      "Saint Helier"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 100800,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/je.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455322"
    },
    "name": {
      "common": "Malta"
    },
    "cca3": "MLT",
    "capital": [
      "Valletta"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 525285,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mt.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455323"
    },
    "name": {
      "common": "Bolivia"
    },
    "cca3": "BOL",
    "capital": [
      "Sucre"
    ],
    "region": "Americas",
    "subregion": "South America",
    "population": 11673029,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "South America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bo.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455324"
    },
    "name": {
      "common": "Mauritius"
    },
    "cca3": "MUS",
    "capital": [
      "Port Louis"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 1265740,
    "timezones": [
      "UTC+04:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mu.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455325"
    },
    "name": {
      "common": "Puerto Rico"
    },
    "cca3": "PRI",
    "capital": [
      "San Juan"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 3194034,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pr.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455326"
    },
    "name": {
      "common": "France"
    },
    "cca3": "FRA",
    "capital": [
      "Paris"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 67391582,
    "timezones": [
      "UTC-10:00",
      "UTC-09:30",
      "UTC-09:00",
      "UTC-08:00",
      "UTC-04:00",
      "UTC-03:00",
      "UTC+01:00",
      "UTC+02:00",
      "UTC+03:00",
      "UTC+04:00",
      "UTC+05:00",
      "UTC+10:00",
      "UTC+11:00",
      "UTC+12:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/fr.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455327"
    },
    "name": {
      "common": "Luxembourg"
    },
    "cca3": "LUX",
    "capital": [
      "Luxembourg"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 632275,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/lu.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455328"
    },
    "name": {
      "common": "Kosovo"
    },
    "cca3": "UNK",
    "capital": [
      "Pristina"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "population": 1775378,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/xk.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455329"
    },
    "name": {
      "common": "Madagascar"
    },
    "cca3": "MDG",
    "capital": [
      "Antananarivo"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 27691019,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mg.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45532a"
    },
    "name": {
      "common": "Pakistan"
    },
    "cca3": "PAK",
    "capital": [
      "Islamabad"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 220892331,
    "timezones": [
      "UTC+05:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pk.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45532b"
    },
    "name": {
      "common": "Malawi"
    },
    "cca3": "MWI",
    "capital": [
      "Lilongwe"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 19129955,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mw.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45532c"
    },
    "name": {
      "common": "Slovenia"
    },
    "cca3": "SVN",
    "capital": [
      "Ljubljana"
    ],
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 2100126,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/si.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45532d"
    },
    "name": {
      "common": "Eswatini"
    },
    "cca3": "SWZ",
    "capital": [
      "Mbabane"
    ],
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 1160164,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sz.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45532e"
    },
    "name": {
      "common": "United States"
    },
    "cca3": "USA",
    "capital": [
      "Washington, D.C."
    ],
    "region": "Americas",
    "subregion": "North America",
    "population": 329484123,
    "timezones": [
      "UTC-12:00",
      "UTC-11:00",
      "UTC-10:00",
      "UTC-09:00",
      "UTC-08:00",
      "UTC-07:00",
      "UTC-06:00",
      "UTC-05:00",
      "UTC-04:00",
      "UTC+10:00",
      "UTC+12:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/us.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45532f"
    },
    "name": {
      "common": "Kiribati"
    },
    "cca3": "KIR",
    "capital": [
      "South Tarawa"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 119446,
    "timezones": [
      "UTC+12:00",
      "UTC+13:00",
      "UTC+14:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ki.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455330"
    },
    "name": {
      "common": "Azerbaijan"
    },
    "cca3": "AZE",
    "capital": [
      "Baku"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 10110116,
    "timezones": [
      "UTC+04:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/az.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455331"
    },
    "name": {
      "common": "Zambia"
    },
    "cca3": "ZMB",
    "capital": [
      "Lusaka"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 18383956,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/zm.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455332"
    },
    "name": {
      "common": "Kenya"
    },
    "cca3": "KEN",
    "capital": [
      "Nairobi"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 53771300,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ke.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455333"
    },
    "name": {
      "common": "Kuwait"
    },
    "cca3": "KWT",
    "capital": [
      "Kuwait City"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 4270563,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/kw.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455334"
    },
    "name": {
      "common": "Kazakhstan"
    },
    "cca3": "KAZ",
    "capital": [
      "Nur-Sultan"
    ],
    "region": "Asia",
    "subregion": "Central Asia",
    "population": 18754440,
    "timezones": [
      "UTC+05:00",
      "UTC+06:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/kz.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455335"
    },
    "name": {
      "common": "Latvia"
    },
    "cca3": "LVA",
    "capital": [
      "Riga"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 1901548,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/lv.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455336"
    },
    "name": {
      "common": "Sierra Leone"
    },
    "cca3": "SLE",
    "capital": [
      "Freetown"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 7976985,
    "timezones": [
      "UTC"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sl.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455337"
    },
    "name": {
      "common": "Saint Kitts and Nevis"
    },
    "cca3": "KNA",
    "capital": [
      "Basseterre"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 53192,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/kn.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455338"
    },
    "name": {
      "common": "Belize"
    },
    "cca3": "BLZ",
    "capital": [
      "Belmopan"
    ],
    "region": "Americas",
    "subregion": "Central America",
    "population": 397621,
    "timezones": [
      "UTC-06:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bz.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455339"
    },
    "name": {
      "common": "Martinique"
    },
    "cca3": "MTQ",
    "capital": [
      "Fort-de-France"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 378243,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mq.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45533a"
    },
    "name": {
      "common": "Romania"
    },
    "cca3": "ROU",
    "capital": [
      "Bucharest"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "population": 19286123,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ro.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45533b"
    },
    "name": {
      "common": "British Virgin Islands"
    },
    "cca3": "VGB",
    "capital": [
      "Road Town"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 30237,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/vg.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45533c"
    },
    "name": {
      "common": "New Zealand"
    },
    "cca3": "NZL",
    "capital": [
      "Wellington"
    ],
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "population": 5084300,
    "timezones": [
      "UTC-11:00",
      "UTC-10:00",
      "UTC+12:00",
      "UTC+12:45",
      "UTC+13:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/nz.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45533d"
    },
    "name": {
      "common": "Brazil"
    },
    "cca3": "BRA",
    "capital": [
      "Brasília"
    ],
    "region": "Americas",
    "subregion": "South America",
    "population": 212559409,
    "timezones": [
      "UTC-05:00",
      "UTC-04:00",
      "UTC-03:00",
      "UTC-02:00"
    ],
    "continents": [
      "South America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/br.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45533e"
    },
    "name": {
      "common": "Central African Republic"
    },
    "cca3": "CAF",
    "capital": [
      "Bangui"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 4829764,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cf.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45533f"
    },
    "name": {
      "common": "Marshall Islands"
    },
    "cca3": "MHL",
    "capital": [
      "Majuro"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 59194,
    "timezones": [
      "UTC+12:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mh.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455340"
    },
    "name": {
      "common": "French Southern and Antarctic Lands"
    },
    "cca3": "ATF",
    "capital": [
      "Port-aux-Français"
    ],
    "region": "Antarctic",
    "population": 400,
    "timezones": [
      "UTC+05:00"
    ],
    "continents": [
      "Antarctica"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tf.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455341"
    },
    "name": {
      "common": "Wallis and Futuna"
    },
    "cca3": "WLF",
    "capital": [
      "Mata-Utu"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 11750,
    "timezones": [
      "UTC+12:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/wf.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455342"
    },
    "name": {
      "common": "Russia"
    },
    "cca3": "RUS",
    "capital": [
      "Moscow"
    ],
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 144104080,
    "timezones": [
      "UTC+03:00",
      "UTC+04:00",
      "UTC+06:00",
      "UTC+07:00",
      "UTC+08:00",
      "UTC+09:00",
      "UTC+10:00",
      "UTC+11:00",
      "UTC+12:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ru.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455343"
    },
    "name": {
      "common": "Panama"
    },
    "cca3": "PAN",
    "capital": [
      "Panama City"
    ],
    "region": "Americas",
    "subregion": "Central America",
    "population": 4314768,
    "timezones": [
      "UTC-05:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pa.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455344"
    },
    "name": {
      "common": "Brunei"
    },
    "cca3": "BRN",
    "capital": [
      "Bandar Seri Begawan"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 437483,
    "timezones": [
      "UTC+08:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bn.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455345"
    },
    "name": {
      "common": "Gibraltar"
    },
    "cca3": "GIB",
    "capital": [
      "Gibraltar"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 33691,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gi.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455346"
    },
    "name": {
      "common": "Malaysia"
    },
    "cca3": "MYS",
    "capital": [
      "Kuala Lumpur"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 32365998,
    "timezones": [
      "UTC+08:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/my.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455347"
    },
    "name": {
      "common": "Ecuador"
    },
    "cca3": "ECU",
    "capital": [
      "Quito"
    ],
    "region": "Americas",
    "subregion": "South America",
    "population": 17643060,
    "timezones": [
      "UTC-06:00",
      "UTC-05:00"
    ],
    "continents": [
      "South America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ec.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455348"
    },
    "name": {
      "common": "Morocco"
    },
    "cca3": "MAR",
    "capital": [
      "Rabat"
    ],
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 36910558,
    "timezones": [
      "UTC"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ma.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455349"
    },
    "name": {
      "common": "Saint Vincent and the Grenadines"
    },
    "cca3": "VCT",
    "capital": [
      "Kingstown"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 110947,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/vc.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45534a"
    },
    "name": {
      "common": "Cuba"
    },
    "cca3": "CUB",
    "capital": [
      "Havana"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 11326616,
    "timezones": [
      "UTC-05:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cu.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45534b"
    },
    "name": {
      "common": "Liechtenstein"
    },
    "cca3": "LIE",
    "capital": [
      "Vaduz"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 38137,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/li.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45534c"
    },
    "name": {
      "common": "Bahamas"
    },
    "cca3": "BHS",
    "capital": [
      "Nassau"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 393248,
    "timezones": [
      "UTC-05:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bs.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45534d"
    },
    "name": {
      "common": "Canada"
    },
    "cca3": "CAN",
    "capital": [
      "Ottawa"
    ],
    "region": "Americas",
    "subregion": "North America",
    "population": 38005238,
    "timezones": [
      "UTC-08:00",
      "UTC-07:00",
      "UTC-06:00",
      "UTC-05:00",
      "UTC-04:00",
      "UTC-03:30"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ca.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45534e"
    },
    "name": {
      "common": "Fiji"
    },
    "cca3": "FJI",
    "capital": [
      "Suva"
    ],
    "region": "Oceania",
    "subregion": "Melanesia",
    "population": 896444,
    "timezones": [
      "UTC+12:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/fj.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45534f"
    },
    "name": {
      "common": "Saudi Arabia"
    },
    "cca3": "SAU",
    "capital": [
      "Riyadh"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 34813867,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sa.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455350"
    },
    "name": {
      "common": "Cayman Islands"
    },
    "cca3": "CYM",
    "capital": [
      "George Town"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 65720,
    "timezones": [
      "UTC-05:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ky.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455351"
    },
    "name": {
      "common": "Lithuania"
    },
    "cca3": "LTU",
    "capital": [
      "Vilnius"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 2794700,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/lt.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455352"
    },
    "name": {
      "common": "Caribbean Netherlands"
    },
    "cca3": "BES",
    "capital": [
      "Kralendijk"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 25987,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bq.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455353"
    },
    "name": {
      "common": "Ireland"
    },
    "cca3": "IRL",
    "capital": [
      "Dublin"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 4994724,
    "timezones": [
      "UTC"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ie.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455354"
    },
    "name": {
      "common": "Chile"
    },
    "cca3": "CHL",
    "capital": [
      "Santiago"
    ],
    "region": "Americas",
    "subregion": "South America",
    "population": 19116209,
    "timezones": [
      "UTC-06:00",
      "UTC-04:00"
    ],
    "continents": [
      "South America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cl.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455355"
    },
    "name": {
      "common": "Turkmenistan"
    },
    "cca3": "TKM",
    "capital": [
      "Ashgabat"
    ],
    "region": "Asia",
    "subregion": "Central Asia",
    "population": 6031187,
    "timezones": [
      "UTC+05:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tm.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455356"
    },
    "name": {
      "common": "Myanmar"
    },
    "cca3": "MMR",
    "capital": [
      "Naypyidaw"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 54409794,
    "timezones": [
      "UTC+06:30"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mm.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455357"
    },
    "name": {
      "common": "Yemen"
    },
    "cca3": "YEM",
    "capital": [
      "Sana'a"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 29825968,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ye.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455358"
    },
    "name": {
      "common": "Saint Helena, Ascension and Tristan da Cunha"
    },
    "cca3": "SHN",
    "capital": [
      "Jamestown"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 53192,
    "timezones": [
      "UTC+00:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sh.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455359"
    },
    "name": {
      "common": "São Tomé and Príncipe"
    },
    "cca3": "STP",
    "capital": [
      "São Tomé"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 219161,
    "timezones": [
      "UTC"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/st.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45535a"
    },
    "name": {
      "common": "Guatemala"
    },
    "cca3": "GTM",
    "capital": [
      "Guatemala City"
    ],
    "region": "Americas",
    "subregion": "Central America",
    "population": 16858333,
    "timezones": [
      "UTC-06:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gt.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45535b"
    },
    "name": {
      "common": "Singapore"
    },
    "cca3": "SGP",
    "capital": [
      "Singapore"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 5685807,
    "timezones": [
      "UTC+08:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sg.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45535c"
    },
    "name": {
      "common": "Venezuela"
    },
    "cca3": "VEN",
    "capital": [
      "Caracas"
    ],
    "region": "Americas",
    "subregion": "South America",
    "population": 28435943,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "South America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ve.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45535d"
    },
    "name": {
      "common": "Comoros"
    },
    "cca3": "COM",
    "capital": [
      "Moroni"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 869595,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/km.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45535e"
    },
    "name": {
      "common": "Western Sahara"
    },
    "cca3": "ESH",
    "capital": [
      "El Aaiún"
    ],
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 510713,
    "timezones": [
      "UTC+00:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/eh.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45535f"
    },
    "name": {
      "common": "Namibia"
    },
    "cca3": "NAM",
    "capital": [
      "Windhoek"
    ],
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 2540916,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/na.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455360"
    },
    "name": {
      "common": "Timor-Leste"
    },
    "cca3": "TLS",
    "capital": [
      "Dili"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 1318442,
    "timezones": [
      "UTC+09:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tl.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455361"
    },
    "name": {
      "common": "Bosnia and Herzegovina"
    },
    "cca3": "BIH",
    "capital": [
      "Sarajevo"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "population": 3280815,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ba.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455362"
    },
    "name": {
      "common": "Cape Verde"
    },
    "cca3": "CPV",
    "capital": [
      "Praia"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 555988,
    "timezones": [
      "UTC-01:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cv.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455363"
    },
    "name": {
      "common": "Hong Kong"
    },
    "cca3": "HKG",
    "capital": [
      "City of Victoria"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 7500700,
    "timezones": [
      "UTC+08:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/hk.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455364"
    },
    "name": {
      "common": "Moldova"
    },
    "cca3": "MDA",
    "capital": [
      "Chișinău"
    ],
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 2617820,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/md.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455365"
    },
    "name": {
      "common": "Philippines"
    },
    "cca3": "PHL",
    "capital": [
      "Manila"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 109581085,
    "timezones": [
      "UTC+08:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ph.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455366"
    },
    "name": {
      "common": "Guadeloupe"
    },
    "cca3": "GLP",
    "capital": [
      "Basse-Terre"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 400132,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gp.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455367"
    },
    "name": {
      "common": "Zimbabwe"
    },
    "cca3": "ZWE",
    "capital": [
      "Harare"
    ],
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 14862927,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/zw.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455368"
    },
    "name": {
      "common": "Grenada"
    },
    "cca3": "GRD",
    "capital": [
      "St. George's"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 112519,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gd.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455369"
    },
    "name": {
      "common": "Isle of Man"
    },
    "cca3": "IMN",
    "capital": [
      "Douglas"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 85032,
    "timezones": [
      "UTC+00:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/im.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45536a"
    },
    "name": {
      "common": "Tanzania"
    },
    "cca3": "TZA",
    "capital": [
      "Dodoma"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 59734213,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tz.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45536b"
    },
    "name": {
      "common": "Seychelles"
    },
    "cca3": "SYC",
    "capital": [
      "Victoria"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 98462,
    "timezones": [
      "UTC+04:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sc.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45536c"
    },
    "name": {
      "common": "Netherlands"
    },
    "cca3": "NLD",
    "capital": [
      "Amsterdam"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 16655799,
    "timezones": [
      "UTC-04:00",
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/nl.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45536d"
    },
    "name": {
      "common": "Paraguay"
    },
    "cca3": "PRY",
    "capital": [
      "Asunción"
    ],
    "region": "Americas",
    "subregion": "South America",
    "population": 7132530,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "South America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/py.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45536e"
    },
    "name": {
      "common": "San Marino"
    },
    "cca3": "SMR",
    "capital": [
      "City of San Marino"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 33938,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sm.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45536f"
    },
    "name": {
      "common": "Bulgaria"
    },
    "cca3": "BGR",
    "capital": [
      "Sofia"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "population": 6927288,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bg.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455370"
    },
    "name": {
      "common": "United States Virgin Islands"
    },
    "cca3": "VIR",
    "capital": [
      "Charlotte Amalie"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 106290,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/vi.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455371"
    },
    "name": {
      "common": "Tunisia"
    },
    "cca3": "TUN",
    "capital": [
      "Tunis"
    ],
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 11818618,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tn.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455372"
    },
    "name": {
      "common": "Iceland"
    },
    "cca3": "ISL",
    "capital": [
      "Reykjavik"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 366425,
    "timezones": [
      "UTC"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/is.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455373"
    },
    "name": {
      "common": "DR Congo"
    },
    "cca3": "COD",
    "capital": [
      "Kinshasa"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 108407721,
    "timezones": [
      "UTC+01:00",
      "UTC+02:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cd.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455374"
    },
    "name": {
      "common": "Aruba"
    },
    "cca3": "ABW",
    "capital": [
      "Oranjestad"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 106766,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/aw.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455375"
    },
    "name": {
      "common": "Indonesia"
    },
    "cca3": "IDN",
    "capital": [
      "Jakarta"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 273523621,
    "timezones": [
      "UTC+07:00",
      "UTC+08:00",
      "UTC+09:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/id.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455376"
    },
    "name": {
      "common": "El Salvador"
    },
    "cca3": "SLV",
    "capital": [
      "San Salvador"
    ],
    "region": "Americas",
    "subregion": "Central America",
    "population": 6486201,
    "timezones": [
      "UTC-06:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sv.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455377"
    },
    "name": {
      "common": "Slovakia"
    },
    "cca3": "SVK",
    "capital": [
      "Bratislava"
    ],
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 5458827,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sk.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455378"
    },
    "name": {
      "common": "Sweden"
    },
    "cca3": "SWE",
    "capital": [
      "Stockholm"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 10353442,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/se.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455379"
    },
    "name": {
      "common": "Laos"
    },
    "cca3": "LAO",
    "capital": [
      "Vientiane"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 7275556,
    "timezones": [
      "UTC+07:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/la.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45537a"
    },
    "name": {
      "common": "Gambia"
    },
    "cca3": "GMB",
    "capital": [
      "Banjul"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 2416664,
    "timezones": [
      "UTC+00:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gm.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45537b"
    },
    "name": {
      "common": "Israel"
    },
    "cca3": "ISR",
    "capital": [
      "Jerusalem"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 9216900,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/il.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45537c"
    },
    "name": {
      "common": "Svalbard and Jan Mayen"
    },
    "cca3": "SJM",
    "capital": [
      "Longyearbyen"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 2562,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sj.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45537d"
    },
    "name": {
      "common": "Montenegro"
    },
    "cca3": "MNE",
    "capital": [
      "Podgorica"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "population": 621718,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/me.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45537e"
    },
    "name": {
      "common": "Somalia"
    },
    "cca3": "SOM",
    "capital": [
      "Mogadishu"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 15893219,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/so.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45537f"
    },
    "name": {
      "common": "Réunion"
    },
    "cca3": "REU",
    "capital": [
      "Saint-Denis"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 840974,
    "timezones": [
      "UTC+04:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/re.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455380"
    },
    "name": {
      "common": "Sri Lanka"
    },
    "cca3": "LKA",
    "capital": [
      "Sri Jayawardenepura Kotte"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 21919000,
    "timezones": [
      "UTC+05:30"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/lk.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455381"
    },
    "name": {
      "common": "Germany"
    },
    "cca3": "DEU",
    "capital": [
      "Berlin"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 83240525,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/de.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455382"
    },
    "name": {
      "common": "Serbia"
    },
    "cca3": "SRB",
    "capital": [
      "Belgrade"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "population": 6908224,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/rs.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455383"
    },
    "name": {
      "common": "Macau"
    },
    "cca3": "MAC",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 649342,
    "timezones": [
      "UTC+08:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mo.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455384"
    },
    "name": {
      "common": "Guyana"
    },
    "cca3": "GUY",
    "capital": [
      "Georgetown"
    ],
    "region": "Americas",
    "subregion": "South America",
    "population": 786559,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "South America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gy.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455385"
    },
    "name": {
      "common": "Suriname"
    },
    "cca3": "SUR",
    "capital": [
      "Paramaribo"
    ],
    "region": "Americas",
    "subregion": "South America",
    "population": 586634,
    "timezones": [
      "UTC-03:00"
    ],
    "continents": [
      "South America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sr.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455386"
    },
    "name": {
      "common": "Lesotho"
    },
    "cca3": "LSO",
    "capital": [
      "Maseru"
    ],
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 2142252,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ls.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455387"
    },
    "name": {
      "common": "Faroe Islands"
    },
    "cca3": "FRO",
    "capital": [
      "Tórshavn"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 48865,
    "timezones": [
      "UTC+00:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/fo.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455388"
    },
    "name": {
      "common": "Honduras"
    },
    "cca3": "HND",
    "capital": [
      "Tegucigalpa"
    ],
    "region": "Americas",
    "subregion": "Central America",
    "population": 9904608,
    "timezones": [
      "UTC-06:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/hn.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455389"
    },
    "name": {
      "common": "Palestine"
    },
    "cca3": "PSE",
    "capital": [
      "Ramallah"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 4803269,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ps.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45538a"
    },
    "name": {
      "common": "Papua New Guinea"
    },
    "cca3": "PNG",
    "capital": [
      "Port Moresby"
    ],
    "region": "Oceania",
    "subregion": "Melanesia",
    "population": 8947027,
    "timezones": [
      "UTC+10:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pg.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45538b"
    },
    "name": {
      "common": "Egypt"
    },
    "cca3": "EGY",
    "capital": [
      "Cairo"
    ],
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 102334403,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/eg.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45538c"
    },
    "name": {
      "common": "Spain"
    },
    "cca3": "ESP",
    "capital": [
      "Madrid"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 47351567,
    "timezones": [
      "UTC",
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/es.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45538d"
    },
    "name": {
      "common": "Eritrea"
    },
    "cca3": "ERI",
    "capital": [
      "Asmara"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 5352000,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/er.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45538e"
    },
    "name": {
      "common": "Mozambique"
    },
    "cca3": "MOZ",
    "capital": [
      "Maputo"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 31255435,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mz.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45538f"
    },
    "name": {
      "common": "North Korea"
    },
    "cca3": "PRK",
    "capital": [
      "Pyongyang"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 25778815,
    "timezones": [
      "UTC+09:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/kp.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455390"
    },
    "name": {
      "common": "Senegal"
    },
    "cca3": "SEN",
    "capital": [
      "Dakar"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 16743930,
    "timezones": [
      "UTC"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sn.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455391"
    },
    "name": {
      "common": "Niue"
    },
    "cca3": "NIU",
    "capital": [
      "Alofi"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 1470,
    "timezones": [
      "UTC-11:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/nu.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455392"
    },
    "name": {
      "common": "Micronesia"
    },
    "cca3": "FSM",
    "capital": [
      "Palikir"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 115021,
    "timezones": [
      "UTC+10:00",
      "UTC+11:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/fm.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455393"
    },
    "name": {
      "common": "Cambodia"
    },
    "cca3": "KHM",
    "capital": [
      "Phnom Penh"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 16718971,
    "timezones": [
      "UTC+07:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/kh.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455394"
    },
    "name": {
      "common": "Djibouti"
    },
    "cca3": "DJI",
    "capital": [
      "Djibouti"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 988002,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/dj.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455395"
    },
    "name": {
      "common": "Ghana"
    },
    "cca3": "GHA",
    "capital": [
      "Accra"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 31072945,
    "timezones": [
      "UTC"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gh.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455396"
    },
    "name": {
      "common": "Bouvet Island"
    },
    "cca3": "BVT",
    "region": "Antarctic",
    "population": 0,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Antarctica"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bv.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455397"
    },
    "name": {
      "common": "Belarus"
    },
    "cca3": "BLR",
    "capital": [
      "Minsk"
    ],
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 9398861,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/by.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455398"
    },
    "name": {
      "common": "Benin"
    },
    "cca3": "BEN",
    "capital": [
      "Porto-Novo"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 12123198,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bj.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455399"
    },
    "name": {
      "common": "Cocos (Keeling) Islands"
    },
    "cca3": "CCK",
    "capital": [
      "West Island"
    ],
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "population": 544,
    "timezones": [
      "UTC+06:30"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cc.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45539a"
    },
    "name": {
      "common": "United Kingdom"
    },
    "cca3": "GBR",
    "capital": [
      "London"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 67215293,
    "timezones": [
      "UTC-08:00",
      "UTC-05:00",
      "UTC-04:00",
      "UTC-03:00",
      "UTC-02:00",
      "UTC",
      "UTC+01:00",
      "UTC+02:00",
      "UTC+06:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gb.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45539b"
    },
    "name": {
      "common": "Åland Islands"
    },
    "cca3": "ALA",
    "capital": [
      "Mariehamn"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 29458,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ax.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45539c"
    },
    "name": {
      "common": "Burkina Faso"
    },
    "cca3": "BFA",
    "capital": [
      "Ouagadougou"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 20903278,
    "timezones": [
      "UTC"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bf.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45539d"
    },
    "name": {
      "common": "Solomon Islands"
    },
    "cca3": "SLB",
    "capital": [
      "Honiara"
    ],
    "region": "Oceania",
    "subregion": "Melanesia",
    "population": 686878,
    "timezones": [
      "UTC+11:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sb.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45539e"
    },
    "name": {
      "common": "Falkland Islands"
    },
    "cca3": "FLK",
    "capital": [
      "Stanley"
    ],
    "region": "Americas",
    "subregion": "South America",
    "population": 2563,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "South America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/fk.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45539f"
    },
    "name": {
      "common": "Guernsey"
    },
    "cca3": "GGY",
    "capital": [
      "St. Peter Port"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 62999,
    "timezones": [
      "UTC+00:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gg.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553a0"
    },
    "name": {
      "common": "Costa Rica"
    },
    "cca3": "CRI",
    "capital": [
      "San José"
    ],
    "region": "Americas",
    "subregion": "Central America",
    "population": 5094114,
    "timezones": [
      "UTC-06:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cr.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553a1"
    },
    "name": {
      "common": "Albania"
    },
    "cca3": "ALB",
    "capital": [
      "Tirana"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "population": 2837743,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/al.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553a2"
    },
    "name": {
      "common": "Christmas Island"
    },
    "cca3": "CXR",
    "capital": [
      "Flying Fish Cove"
    ],
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "population": 2072,
    "timezones": [
      "UTC+07:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cx.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553a3"
    },
    "name": {
      "common": "Greece"
    },
    "cca3": "GRC",
    "capital": [
      "Athens"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 10715549,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gr.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553a4"
    },
    "name": {
      "common": "Ukraine"
    },
    "cca3": "UKR",
    "capital": [
      "Kyiv"
    ],
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 44134693,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ua.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553a5"
    },
    "name": {
      "common": "Greenland"
    },
    "cca3": "GRL",
    "capital": [
      "Nuuk"
    ],
    "region": "Americas",
    "subregion": "North America",
    "population": 56367,
    "timezones": [
      "UTC-04:00",
      "UTC-03:00",
      "UTC-01:00",
      "UTC+00:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gl.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553a6"
    },
    "name": {
      "common": "North Macedonia"
    },
    "cca3": "MKD",
    "capital": [
      "Skopje"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "population": 2077132,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mk.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553a7"
    },
    "name": {
      "common": "Ivory Coast"
    },
    "cca3": "CIV",
    "capital": [
      "Yamoussoukro"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 26378275,
    "timezones": [
      "UTC"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ci.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553a8"
    },
    "name": {
      "common": "Syria"
    },
    "cca3": "SYR",
    "capital": [
      "Damascus"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 17500657,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sy.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553a9"
    },
    "name": {
      "common": "Czechia"
    },
    "cca3": "CZE",
    "capital": [
      "Prague"
    ],
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 10698896,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cz.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553aa"
    },
    "name": {
      "common": "Botswana"
    },
    "cca3": "BWA",
    "capital": [
      "Gaborone"
    ],
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 2351625,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bw.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553ab"
    },
    "name": {
      "common": "American Samoa"
    },
    "cca3": "ASM",
    "capital": [
      "Pago Pago"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 55197,
    "timezones": [
      "UTC-11:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/as.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553ac"
    },
    "name": {
      "common": "Mexico"
    },
    "cca3": "MEX",
    "capital": [
      "Mexico City"
    ],
    "region": "Americas",
    "subregion": "North America",
    "population": 128932753,
    "timezones": [
      "UTC-08:00",
      "UTC-07:00",
      "UTC-06:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mx.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553ad"
    },
    "name": {
      "common": "Austria"
    },
    "cca3": "AUT",
    "capital": [
      "Vienna"
    ],
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 8917205,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/at.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553ae"
    },
    "name": {
      "common": "Bermuda"
    },
    "cca3": "BMU",
    "capital": [
      "Hamilton"
    ],
    "region": "Americas",
    "subregion": "North America",
    "population": 63903,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bm.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553af"
    },
    "name": {
      "common": "Bahrain"
    },
    "cca3": "BHR",
    "capital": [
      "Manama"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 1701583,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bh.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553b0"
    },
    "name": {
      "common": "Nauru"
    },
    "cca3": "NRU",
    "capital": [
      "Yaren"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 10834,
    "timezones": [
      "UTC+12:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/nr.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553b1"
    },
    "name": {
      "common": "Niger"
    },
    "cca3": "NER",
    "capital": [
      "Niamey"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 24206636,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ne.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553b2"
    },
    "name": {
      "common": "Angola"
    },
    "cca3": "AGO",
    "capital": [
      "Luanda"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 32866268,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ao.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553b3"
    },
    "name": {
      "common": "Antigua and Barbuda"
    },
    "cca3": "ATG",
    "capital": [
      "Saint John's"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 97928,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ag.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553b4"
    },
    "name": {
      "common": "Montserrat"
    },
    "cca3": "MSR",
    "capital": [
      "Plymouth"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 4922,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ms.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553b5"
    },
    "name": {
      "common": "South Korea"
    },
    "cca3": "KOR",
    "capital": [
      "Seoul"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 51780579,
    "timezones": [
      "UTC+09:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/kr.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553b6"
    },
    "name": {
      "common": "Taiwan"
    },
    "cca3": "TWN",
    "capital": [
      "Taipei"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 23503349,
    "timezones": [
      "UTC+08:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tw.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553b7"
    },
    "name": {
      "common": "Barbados"
    },
    "cca3": "BRB",
    "capital": [
      "Bridgetown"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 287371,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bb.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553b8"
    },
    "name": {
      "common": "Curaçao"
    },
    "cca3": "CUW",
    "capital": [
      "Willemstad"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 155014,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cw.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553b9"
    },
    "name": {
      "common": "Maldives"
    },
    "cca3": "MDV",
    "capital": [
      "Malé"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 540542,
    "timezones": [
      "UTC+05:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mv.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553ba"
    },
    "name": {
      "common": "Heard Island and McDonald Islands"
    },
    "cca3": "HMD",
    "region": "Antarctic",
    "population": 0,
    "timezones": [
      "UTC+05:00"
    ],
    "continents": [
      "Antarctica"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/hm.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553bb"
    },
    "name": {
      "common": "Dominica"
    },
    "cca3": "DMA",
    "capital": [
      "Roseau"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 71991,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/dm.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553bc"
    },
    "name": {
      "common": "Mauritania"
    },
    "cca3": "MRT",
    "capital": [
      "Nouakchott"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 4649660,
    "timezones": [
      "UTC"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mr.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553bd"
    },
    "name": {
      "common": "Georgia"
    },
    "cca3": "GEO",
    "capital": [
      "Tbilisi"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 3714000,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ge.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553be"
    },
    "name": {
      "common": "Guinea"
    },
    "cca3": "GIN",
    "capital": [
      "Conakry"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 13132792,
    "timezones": [
      "UTC"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gn.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553bf"
    },
    "name": {
      "common": "Liberia"
    },
    "cca3": "LBR",
    "capital": [
      "Monrovia"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 5057677,
    "timezones": [
      "UTC"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/lr.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553c0"
    },
    "name": {
      "common": "Guinea-Bissau"
    },
    "cca3": "GNB",
    "capital": [
      "Bissau"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 1967998,
    "timezones": [
      "UTC"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gw.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553c1"
    },
    "name": {
      "common": "Switzerland"
    },
    "cca3": "CHE",
    "capital": [
      "Bern"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 8654622,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ch.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553c2"
    },
    "name": {
      "common": "Cyprus"
    },
    "cca3": "CYP",
    "capital": [
      "Nicosia"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 1207361,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cy.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553c3"
    },
    "name": {
      "common": "British Indian Ocean Territory"
    },
    "cca3": "IOT",
    "capital": [
      "Diego Garcia"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 3000,
    "timezones": [
      "UTC+06:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/io.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553c4"
    },
    "name": {
      "common": "Finland"
    },
    "cca3": "FIN",
    "capital": [
      "Helsinki"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 5530719,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/fi.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553c5"
    },
    "name": {
      "common": "Belgium"
    },
    "cca3": "BEL",
    "capital": [
      "Brussels"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 11555997,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/be.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553c6"
    },
    "name": {
      "common": "United Arab Emirates"
    },
    "cca3": "ARE",
    "capital": [
      "Abu Dhabi"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 9890400,
    "timezones": [
      "UTC+04:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ae.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553c7"
    },
    "name": {
      "common": "Mali"
    },
    "cca3": "MLI",
    "capital": [
      "Bamako"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 20250834,
    "timezones": [
      "UTC"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ml.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553c8"
    },
    "name": {
      "common": "Chad"
    },
    "cca3": "TCD",
    "capital": [
      "N'Djamena"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 16425859,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/td.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553c9"
    },
    "name": {
      "common": "Equatorial Guinea"
    },
    "cca3": "GNQ",
    "capital": [
      "Malabo"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 1402985,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gq.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553ca"
    },
    "name": {
      "common": "Vatican City"
    },
    "cca3": "VAT",
    "capital": [
      "Vatican City"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 451,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/va.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553cb"
    },
    "name": {
      "common": "Iraq"
    },
    "cca3": "IRQ",
    "capital": [
      "Baghdad"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 40222503,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/iq.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553cc"
    },
    "name": {
      "common": "Tokelau"
    },
    "cca3": "TKL",
    "capital": [
      "Fakaofo"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 1411,
    "timezones": [
      "UTC+13:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tk.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553cd"
    },
    "name": {
      "common": "Tonga"
    },
    "cca3": "TON",
    "capital": [
      "Nuku'alofa"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 105697,
    "timezones": [
      "UTC+13:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/to.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553ce"
    },
    "name": {
      "common": "Northern Mariana Islands"
    },
    "cca3": "MNP",
    "capital": [
      "Saipan"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 57557,
    "timezones": [
      "UTC+10:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mp.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553cf"
    },
    "name": {
      "common": "Qatar"
    },
    "cca3": "QAT",
    "capital": [
      "Doha"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 2881060,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/qa.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553d0"
    },
    "name": {
      "common": "Uruguay"
    },
    "cca3": "URY",
    "capital": [
      "Montevideo"
    ],
    "region": "Americas",
    "subregion": "South America",
    "population": 3473727,
    "timezones": [
      "UTC-03:00"
    ],
    "continents": [
      "South America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/uy.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553d1"
    },
    "name": {
      "common": "India"
    },
    "cca3": "IND",
    "capital": [
      "New Delhi"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 1380004385,
    "timezones": [
      "UTC+05:30"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/in.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553d2"
    },
    "name": {
      "common": "Norfolk Island"
    },
    "cca3": "NFK",
    "capital": [
      "Kingston"
    ],
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "population": 2302,
    "timezones": [
      "UTC+11:30"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/nf.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553d3"
    },
    "name": {
      "common": "Oman"
    },
    "cca3": "OMN",
    "capital": [
      "Muscat"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 5106622,
    "timezones": [
      "UTC+04:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/om.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553d4"
    },
    "name": {
      "common": "Colombia"
    },
    "cca3": "COL",
    "capital": [
      "Bogotá"
    ],
    "region": "Americas",
    "subregion": "South America",
    "population": 50882884,
    "timezones": [
      "UTC-05:00"
    ],
    "continents": [
      "South America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/co.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553d5"
    },
    "name": {
      "common": "Cameroon"
    },
    "cca3": "CMR",
    "capital": [
      "Yaoundé"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 26545864,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cm.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553d6"
    },
    "name": {
      "common": "Ethiopia"
    },
    "cca3": "ETH",
    "capital": [
      "Addis Ababa"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 114963583,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/et.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553d7"
    },
    "name": {
      "common": "Sudan"
    },
    "cca3": "SDN",
    "capital": [
      "Khartoum"
    ],
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 43849269,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sd.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553d8"
    },
    "name": {
      "common": "Gabon"
    },
    "cca3": "GAB",
    "capital": [
      "Libreville"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 2225728,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ga.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553d9"
    },
    "name": {
      "common": "Argentina"
    },
    "cca3": "ARG",
    "capital": [
      "Buenos Aires"
    ],
    "region": "Americas",
    "subregion": "South America",
    "population": 45376763,
    "timezones": [
      "UTC-03:00"
    ],
    "continents": [
      "South America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ar.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553da"
    },
    "name": {
      "common": "Japan"
    },
    "cca3": "JPN",
    "capital": [
      "Tokyo"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 125836021,
    "timezones": [
      "UTC+09:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/jp.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553db"
    },
    "name": {
      "common": "Hungary"
    },
    "cca3": "HUN",
    "capital": [
      "Budapest"
    ],
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 9749763,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/hu.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553dc"
    },
    "name": {
      "common": "Croatia"
    },
    "cca3": "HRV",
    "capital": [
      "Zagreb"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "population": 4047200,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/hr.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553dd"
    },
    "name": {
      "common": "Kyrgyzstan"
    },
    "cca3": "KGZ",
    "capital": [
      "Bishkek"
    ],
    "region": "Asia",
    "subregion": "Central Asia",
    "population": 6591600,
    "timezones": [
      "UTC+06:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/kg.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553de"
    },
    "name": {
      "common": "Portugal"
    },
    "cca3": "PRT",
    "capital": [
      "Lisbon"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 10305564,
    "timezones": [
      "UTC-01:00",
      "UTC"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pt.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553df"
    },
    "name": {
      "common": "Vietnam"
    },
    "cca3": "VNM",
    "capital": [
      "Hanoi"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 97338583,
    "timezones": [
      "UTC+07:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/vn.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553e0"
    },
    "name": {
      "common": "Norway"
    },
    "cca3": "NOR",
    "capital": [
      "Oslo"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 5379475,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/no.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553e1"
    },
    "name": {
      "common": "Italy"
    },
    "cca3": "ITA",
    "capital": [
      "Rome"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 59554023,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/it.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553e2"
    },
    "name": {
      "common": "Sint Maarten"
    },
    "cca3": "SXM",
    "capital": [
      "Philipsburg"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 40812,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sx.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553e3"
    },
    "name": {
      "common": "Saint Martin"
    },
    "cca3": "MAF",
    "capital": [
      "Marigot"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 38659,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mf.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553e4"
    },
    "name": {
      "common": "Jordan"
    },
    "cca3": "JOR",
    "capital": [
      "Amman"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 10203140,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/jo.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553e5"
    },
    "name": {
      "common": "French Polynesia"
    },
    "cca3": "PYF",
    "capital": [
      "Papeetē"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 280904,
    "timezones": [
      "UTC-10:00",
      "UTC-09:30",
      "UTC-09:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pf.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553e6"
    },
    "name": {
      "common": "Rwanda"
    },
    "cca3": "RWA",
    "capital": [
      "Kigali"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 12952209,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/rw.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553e7"
    },
    "name": {
      "common": "Thailand"
    },
    "cca3": "THA",
    "capital": [
      "Bangkok"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 69799978,
    "timezones": [
      "UTC+07:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/th.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553e8"
    },
    "name": {
      "common": "Denmark"
    },
    "cca3": "DNK",
    "capital": [
      "Copenhagen"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 5831404,
    "timezones": [
      "UTC-04:00",
      "UTC-03:00",
      "UTC-01:00",
      "UTC",
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/dk.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553e9"
    },
    "name": {
      "common": "Tuvalu"
    },
    "cca3": "TUV",
    "capital": [
      "Funafuti"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 11792,
    "timezones": [
      "UTC+12:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tv.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553ea"
    },
    "name": {
      "common": "Pitcairn Islands"
    },
    "cca3": "PCN",
    "capital": [
      "Adamstown"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 56,
    "timezones": [
      "UTC-08:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pn.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553eb"
    },
    "name": {
      "common": "Uganda"
    },
    "cca3": "UGA",
    "capital": [
      "Kampala"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 45741000,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ug.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553ec"
    },
    "name": {
      "common": "Togo"
    },
    "cca3": "TGO",
    "capital": [
      "Lomé"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 8278737,
    "timezones": [
      "UTC"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tg.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553ed"
    },
    "name": {
      "common": "Tajikistan"
    },
    "cca3": "TJK",
    "capital": [
      "Dushanbe"
    ],
    "region": "Asia",
    "subregion": "Central Asia",
    "population": 9537642,
    "timezones": [
      "UTC+05:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tj.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553ee"
    },
    "name": {
      "common": "French Guiana"
    },
    "cca3": "GUF",
    "capital": [
      "Cayenne"
    ],
    "region": "Americas",
    "subregion": "South America",
    "population": 254541,
    "timezones": [
      "UTC-03:00"
    ],
    "continents": [
      "South America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gf.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553ef"
    },
    "name": {
      "common": "Saint Lucia"
    },
    "cca3": "LCA",
    "capital": [
      "Castries"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 183629,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/lc.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553f0"
    },
    "name": {
      "common": "South Africa"
    },
    "cca3": "ZAF",
    "capital": [
      "Pretoria",
      "Bloemfontein",
      "Cape Town"
    ],
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 59308690,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/za.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553f1"
    },
    "name": {
      "common": "Armenia"
    },
    "cca3": "ARM",
    "capital": [
      "Yerevan"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 2963234,
    "timezones": [
      "UTC+04:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/am.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553f2"
    },
    "name": {
      "common": "Nigeria"
    },
    "cca3": "NGA",
    "capital": [
      "Abuja"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 206139587,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ng.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553f3"
    },
    "name": {
      "common": "South Sudan"
    },
    "cca3": "SSD",
    "capital": [
      "Juba"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 11193729,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ss.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553f4"
    },
    "name": {
      "common": "Afghanistan"
    },
    "cca3": "AFG",
    "capital": [
      "Kabul"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 40218234,
    "timezones": [
      "UTC+04:30"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553f5"
    },
    "name": {
      "common": "Poland"
    },
    "cca3": "POL",
    "capital": [
      "Warsaw"
    ],
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 37950802,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pl.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553f6"
    },
    "name": {
      "common": "Antarctica"
    },
    "cca3": "ATA",
    "region": "Antarctic",
    "population": 1000,
    "timezones": [
      "UTC-03:00",
      "UTC+03:00",
      "UTC+05:00",
      "UTC+06:00",
      "UTC+07:00",
      "UTC+08:00",
      "UTC+10:00",
      "UTC+12:00"
    ],
    "continents": [
      "Antarctica"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/aq.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553f7"
    },
    "name": {
      "common": "Lebanon"
    },
    "cca3": "LBN",
    "capital": [
      "Beirut"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 6825442,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/lb.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553f8"
    },
    "name": {
      "common": "Palau"
    },
    "cca3": "PLW",
    "capital": [
      "Ngerulmud"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 18092,
    "timezones": [
      "UTC+09:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pw.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553f9"
    },
    "name": {
      "common": "New Caledonia"
    },
    "cca3": "NCL",
    "capital": [
      "Nouméa"
    ],
    "region": "Oceania",
    "subregion": "Melanesia",
    "population": 271960,
    "timezones": [
      "UTC+11:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/nc.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553fa"
    },
    "name": {
      "common": "Burundi"
    },
    "cca3": "BDI",
    "capital": [
      "Gitega"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 11890781,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bi.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553fb"
    },
    "name": {
      "common": "Algeria"
    },
    "cca3": "DZA",
    "capital": [
      "Algiers"
    ],
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 44700000,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/dz.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553fc"
    },
    "name": {
      "common": "United States Minor Outlying Islands"
    },
    "cca3": "UMI",
    "capital": [
      "Washington DC"
    ],
    "region": "Americas",
    "subregion": "North America",
    "population": 300,
    "timezones": [
      "UTC-11:00",
      "UTC-10:00",
      "UTC+12:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/um.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553fd"
    },
    "name": {
      "common": "Peru"
    },
    "cca3": "PER",
    "capital": [
      "Lima"
    ],
    "region": "Americas",
    "subregion": "South America",
    "population": 32971846,
    "timezones": [
      "UTC-05:00"
    ],
    "continents": [
      "South America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pe.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553fe"
    },
    "name": {
      "common": "Estonia"
    },
    "cca3": "EST",
    "capital": [
      "Tallinn"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 1331057,
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ee.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c4553ff"
    },
    "name": {
      "common": "South Georgia"
    },
    "cca3": "SGS",
    "capital": [
      "King Edward Point"
    ],
    "region": "Antarctic",
    "population": 30,
    "timezones": [
      "UTC-02:00"
    ],
    "continents": [
      "Antarctica"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gs.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455400"
    },
    "name": {
      "common": "Vanuatu"
    },
    "cca3": "VUT",
    "capital": [
      "Port Vila"
    ],
    "region": "Oceania",
    "subregion": "Melanesia",
    "population": 307150,
    "timezones": [
      "UTC+11:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/vu.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455401"
    },
    "name": {
      "common": "Iran"
    },
    "cca3": "IRN",
    "capital": [
      "Tehran"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 83992953,
    "timezones": [
      "UTC+03:30"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ir.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455402"
    },
    "name": {
      "common": "China"
    },
    "cca3": "CHN",
    "capital": [
      "Beijing"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 1402112000,
    "timezones": [
      "UTC+08:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cn.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455403"
    },
    "name": {
      "common": "Republic of the Congo"
    },
    "cca3": "COG",
    "capital": [
      "Brazzaville"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 5657000,
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cg.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455404"
    },
    "name": {
      "common": "Australia"
    },
    "cca3": "AUS",
    "capital": [
      "Canberra"
    ],
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "population": 25687041,
    "timezones": [
      "UTC+05:00",
      "UTC+06:30",
      "UTC+07:00",
      "UTC+08:00",
      "UTC+09:30",
      "UTC+10:00",
      "UTC+10:30",
      "UTC+11:30"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/au.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455405"
    },
    "name": {
      "common": "Turks and Caicos Islands"
    },
    "cca3": "TCA",
    "capital": [
      "Cockburn Town"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 38718,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tc.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455406"
    },
    "name": {
      "common": "Trinidad and Tobago"
    },
    "cca3": "TTO",
    "capital": [
      "Port of Spain"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 1399491,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tt.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455407"
    },
    "name": {
      "common": "Anguilla"
    },
    "cca3": "AIA",
    "capital": [
      "The Valley"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 13452,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ai.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455408"
    },
    "name": {
      "common": "Haiti"
    },
    "cca3": "HTI",
    "capital": [
      "Port-au-Prince"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 11402533,
    "timezones": [
      "UTC-05:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ht.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455409"
    },
    "name": {
      "common": "Uzbekistan"
    },
    "cca3": "UZB",
    "capital": [
      "Tashkent"
    ],
    "region": "Asia",
    "subregion": "Central Asia",
    "population": 34232050,
    "timezones": [
      "UTC+05:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/uz.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45540a"
    },
    "name": {
      "common": "Dominican Republic"
    },
    "cca3": "DOM",
    "capital": [
      "Santo Domingo"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 10847904,
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/do.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45540b"
    },
    "name": {
      "common": "Mayotte"
    },
    "cca3": "MYT",
    "capital": [
      "Mamoudzou"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 226915,
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Africa"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/yt.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45540c"
    },
    "name": {
      "common": "Mongolia"
    },
    "cca3": "MNG",
    "capital": [
      "Ulan Bator"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 3278292,
    "timezones": [
      "UTC+07:00",
      "UTC+08:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mn.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45540d"
    },
    "name": {
      "common": "Saint Pierre and Miquelon"
    },
    "cca3": "SPM",
    "capital": [
      "Saint-Pierre"
    ],
    "region": "Americas",
    "subregion": "North America",
    "population": 6069,
    "timezones": [
      "UTC-03:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pm.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45540e"
    },
    "name": {
      "common": "Samoa"
    },
    "cca3": "WSM",
    "capital": [
      "Apia"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 198410,
    "timezones": [
      "UTC+13:00"
    ],
    "continents": [
      "Oceania"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ws.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c45540f"
    },
    "name": {
      "common": "Nicaragua"
    },
    "cca3": "NIC",
    "capital": [
      "Managua"
    ],
    "region": "Americas",
    "subregion": "Central America",
    "population": 6624554,
    "timezones": [
      "UTC-06:00"
    ],
    "continents": [
      "North America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ni.png"
    }
  },{
    "_id": {
      "$oid": "62c936b3a92a38c19c455410"
    },
    "name": {
      "common": "Bhutan"
    },
    "cca3": "BTN",
    "capital": [
      "Thimphu"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 771612,
    "timezones": [
      "UTC+06:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bt.png"
    }
  }]

