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

data.forEach(function(item, index, array) {
  console.log('*****************')
  data[i].forEach(function(item, index, array) {
  console.log(item.key + ' = ' + item)	
  })    
});

