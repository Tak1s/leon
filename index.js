import data from './mock/data';
console.log(data);

// for (var i = 0; data.length > i; i++){
// 	console.log('=================');
// 	for (var key in data[i]){
// 		var _key = key;
// 		var _val = data[i][key];
// 		console.log(_key, '=', _val);
// 	}
// }

////////////////////////////////////////////////////////////////////////////////////////////


// for (var i in data) {
//   console.log('=================');
// 	for (var key in data[i]) {
// 	  console.log(key + " = " + data[i][key]);
// 	}
// }

////////////////////////////////////////////////////////////////////////////////////////////

data.forEach(function(item, index, data) {
  console.log('*****************')

  Object.keys(data[index]).forEach(function( element) {
  	var _val = data[index][element];
  	console.log( element + ' = ' + _val )
  })    
});

////////////////////////////////////////////////////////////////////////////////////////////
