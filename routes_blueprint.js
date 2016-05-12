{
  'GET /zip/:zip': {
    'desc': 'returns an array of restaurant objects within a given zip code',
    'response': '200 application/json',
    'data': [{}, {}, {}, {}]
  },
  'GET /restaurant/:id': {
    'desc': 'returns a restaurant onject with a given facility id',
    'response': '200 application/json',
    'data': {}
  },
  'GET /street/:street': {
    'desc': 'returns an array of restaurant objects with a given street name in the address',
    'response': '200 application/json',
    'data': [{}, {}, {}, {}]
  }
}