import data from './mock/data';

//------------------------------------TASK_1----------------------------------------------//

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

// data.forEach(function(item, index, data) {
//   console.log('=================')

//   Object.keys(data[index]).forEach(function(element) {
//   	var _val = data[index][element];
//   	console.log( element + ' = ' + _val )
//   })    
// });

////////////////////////////////////////////////////////////////////////////////////////////

// data.map(function(item, i, data) {
// 	console.log ('=================');
//   		Object.keys(data[i]).map(function(prop) {
//   			var _value = data[i][prop];
//   			console.log (prop + ' = ' + _value);
// 	})
// });

///////////////////////////////////////////////////////////////////////////////////////////

// _.map(data, function(value, key, ) {
// 	var _dataKey = '===== '+ key +' ====='; 
// 	console.log (_dataKey);
//     	_.map(data[key], function(val, k) {
//     	var _dataKeyKVal = k + " = " + val; 
//   		console.log ( _dataKeyKVal );
// 	});
// });

//------------------------------------TASK_2----------------------------------------------//

// var any_string = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>';  

///////////////////////////////////////////////////////////////////////////////////////////

// document.write(any_string);

///////////////////////////////////////////////////////////////////////////////////////////

// document.body.innerHTML = any_string;

///////////////////////////////////////////////////////////////////////////////////////////

 // root.outerHTML = any_string;

//------------------------------------TASK_3----------------------------------------------//

	// _.map(data, function(value, key, ) {
	// 	var _dataKey = "<h3>" + '===== '+ key +' =====' + "</h3>"; 
	// 	document.write( '<div>' );
	// 	document.write( _dataKey );
	//     	_.map(data[key], function(val, k) {
	//     	var _dataKeyKVal = "<p>" + k + " = " + "<span>" + val + "</span>" + " </p>" ; 
	//   		document.write( _dataKeyKVal );
	// 	});
	//     document.write( '</div>' );
	// });

///////////////////////////////////////////////////////////////////////////////////////////

	_.map(data, function(value, key, ) {
		var div = document.createElement("div");
		div.innerHTML = `<h3> ===== ${key} ===== </h3>`;
		
	    	_.map(data[key], function(val, k) {
		  		var p = document.createElement("p");
		  		p.innerHTML = ` ${k} = <span> ${val} </span> `;
		  		div.appendChild(p);
		  		
			});
		document.body.appendChild(div);
	});



///////////////////////////////////////////////////////////////////////////////////////////




