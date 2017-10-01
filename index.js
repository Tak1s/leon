import data from './mock/data';
import $ from 'jquery';
import mustache from 'mustache';
// import jR from 'jsrender';
// import handlebars from 'handlebars';
import tumblr from 'tumblr.js';

/////-----tumbler
var client = tumblr.createClient({
  consumer_key: 'Y1D72WCSyyKAe5owRcr7n0j5WAVhITMOCqrW2phNLWzKZfcHCZ',
  consumer_secret: 'Ey25jfEaEa18Uvzpr74TX1uhPWLCmjB0L8qq8NjRfO9DLa0SmG',
  token: 'LN7ySxEthypGmcuMEpixksHwJJOsCpNOexdlzAYyb5OEX8cKtz',
  token_secret: 'Ea55kvKy7GyAktmCZcDN3c9bDBxgiW8hdcP04kK2ITr51QQH5V'
});

/////-crimea
client.blogPosts('pasajero-0.tumblr.com', function (err, data) {
	data.posts.forEach(function(posts){
		posts.tags.forEach(function(tags){ 
			var tag = "crimea";
			if (tags === tag) {
    			console.log("+");
    			posts.photos.forEach(function(photos){	
				var span = document.createElement( "span" );
  				$( span ).append('<img src="'+photos.original_size.url+'" width="540" height="360">');	  		  		
   				$('#root').append(span);
				});
			};
  		});
		
	});  
});
/////-ships
client.blogPosts('pasajero-0.tumblr.com', function (err, data) {
	data.posts.forEach(function(posts){
		posts.tags.forEach(function(tags){ 
			var tag = "ships";
			if (tags === tag) {
    			console.log("+");
    			posts.photos.forEach(function(photos){	
				var span = document.createElement( "span" );
  				$( span ).append('<img src="'+photos.original_size.url+'" width="540" height="360">');	  		  		
   				$('#root').append(span);
				});
			};
  		});
	});  
});
/////-starwars
client.blogPosts('pasajero-0.tumblr.com', function (err, data) {
	data.posts.forEach(function(posts){
		posts.tags.forEach(function(tags){ 
			var tag = "starwars";
			if (tags === tag) {
    			console.log("+");
    			posts.photos.forEach(function(photos){	
				var span = document.createElement( "span" );
  				$( span ).append('<img src="'+photos.original_size.url+'" width="540" height="360">');	  		  		
   				$('#root').append(span);
				});
			};
  		});
	});
	console.log(data);  
});















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

// _.map(data, function(value, key) {
// 	var _dataKey = '===== '+ key +' ====='; 
// 	console.log (_dataKey);
//     	_.map(value, function(val, k) {
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

	// _.map(data, function(value, key) {
	// 	var _dataKey = "<h3>" + '===== '+ key +' =====' + "</h3>"; 
	// 	document.write( '<div>' );
	// 	document.write( _dataKey );
	//     	_.map(value, function(val, k) {
	//     	var _dataKeyKVal = "<p>" + k + " = " + "<span>" + val + "</span>" + " </p>" ; 
	//   		document.write( _dataKeyKVal );
	// 	});
	//     document.write( '</div>' );
	// });

///////////////////////////////////////////////////////////////////////////////////////////

	// _.map(data, function(value, key) {
	// 	var div = document.createElement("div");
	// 	div.innerHTML = `<h3> ===== ${key} ===== </h3>`;

	//     	_.map(value, function(val, k) {
	// 	  		var p = document.createElement("p");
	// 	  		p.innerHTML = ` ${k} = <span> ${val} </span> `;
	// 	  		div.appendChild(p);
	// 		});
	// 	document.body.appendChild(div);
	// });

///////////////////////////////////////////////////////////////////////////////////////////

	// _.map(data, function(value, key) {
	// 	var div = document.getElementById('root');
	// 	var h3 = document.createElement("h3");
	// 	h3.innerHTML = ` ===== ${key} ===== `;
	// 	div.appendChild(h3);

	//     	_.map(value, function(val, k) {
	// 	  		var p = document.createElement("p");
	// 	  		p.innerHTML = ` ${k} = <span> ${val} </span> `;
	// 	  		div.appendChild(p);
	// 		});
	// });

///////////////////////////////////////////////////////////////////////////////////////////
	
	// _.map(data, function(value, key) {
	// 	var div = document.querySelector("#root");
	// 	var h3 = document.createElement("h3");
	// 	h3.innerHTML = ` ===== ${key} ===== `;
	// 	div.appendChild(h3);

	//     	_.map(value, function(val, k) {
	// 	  		var p = document.createElement("p");
	// 	  		p.innerHTML = ` ${k} = <span> ${val} </span> `;
	// 	  		div.appendChild(p);
	// 		});
	// });


//------------------------------------TASK_4----------------------------------------------//

// _.map(data, function(value, key) {
//  		$( "#root" ).append( "<h3> =====| " + key + " |===== </h3>" );  
//  	    	_.map(value, function(val, k) {
//   		  		var p = document.createElement( "p" );
//   		  		$( p ).append( k + "=" + "<span>" + val + "</span>");	  		  		
//   		  		$('#root').append(p);	  		  				
//   			});
//  	    });

///////////////////////////////////////////////////////////////////////////////////////////

// _.map(data, function(value, key) {
//  		var hat = {'title': "===== " + key + " ====="}
//  		var tmpl_1 = document.getElementById("template_1").innerHTML;
// 		var output_title = mustache.to_html(tmpl_1, hat);
// 		$('#root').append(output_title);

//  	    	_.map(value, function(val, k) {
//   		  		var _value = {
//   		  			'keyWord': k ,
//   		  			'value_': val 
//   		  		}
//   		  		var tmpl_2 = document.getElementById("template_2").innerHTML;
//   		  		var output_value = mustache.to_html(tmpl_2, _value);
//   		  		$('#root').append(output_value);		  				
//   			});
//  	    });

///////////////////////////////////////////////////////////////////////////////////////////