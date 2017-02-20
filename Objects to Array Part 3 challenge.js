var obj = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};

//[['name', 'Holly'], ['age', 35], ['role', 'producer']]

function convertObjectToList(obj) {
  var array = [];
  for (var key in obj) {
       array.push([key, obj[key]]);
  }
  return array;
}

convertObjectToList(obj);

