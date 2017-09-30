import data from './mock/data';
import $ from 'jquery';
import mustache from 'mustache';
// import jR from 'jsrender';
// import handlebars from 'handlebars';
// import hogan from 'hogan.js';
import tumblr from 'tumblr.js';

////////////////////////////////////////////////////////////////////////////////////////////////////////

// _.map(data, function(value, key) {
//  		$( "#root" ).append( "<h3> =====| " + key + " |===== </h3>" );  
//  	    	_.map(value, function(val, k) {
//   		  		var p = document.createElement( "p" );
//   		  		$( p ).append( k + "=" + "<span>" + val + "</span>");	  		  		
//   		  		$('#root').append(p);	  		  				
//   			});
//  	    });

////////////////////////////////////////////////////////////////////////////////////////////////////////

_.map(data, function(value, key) {
 		var hat = {'title': "===== " + key + " ====="}
 		var tmpl_1 = document.getElementById("template_1").innerHTML;
		var output_title = mustache.to_html(tmpl_1, hat);
		$('#root').append(output_title);

 	    	_.map(value, function(val, k) {
  		  		var _value = {
  		  			'keyWord': k ,
  		  			'value_': val 
  		  		}
  		  		var tmpl_2 = document.getElementById("template_2").innerHTML;
  		  		var output_value = mustache.to_html(tmpl_2, _value);
  		  		$('#root').append(output_value);		  				
  			});
 	    });

////////////////////////////////////////////////////////////////////////////////////////////////////////

var client = tumblr.createClient({
  consumer_key: 'Y1D72WCSyyKAe5owRcr7n0j5WAVhITMOCqrW2phNLWzKZfcHCZ',
  consumer_secret: 'Ey25jfEaEa18Uvzpr74TX1uhPWLCmjB0L8qq8NjRfO9DLa0SmG',
  token: 'LN7ySxEthypGmcuMEpixksHwJJOsCpNOexdlzAYyb5OEX8cKtz',
  token_secret: 'Ea55kvKy7GyAktmCZcDN3c9bDBxgiW8hdcP04kK2ITr51QQH5V'
});

client.userInfo(function(err, data) {
  data.user.blogs.forEach(function(blog) {
    console.log(blog.name);
  });
});

client.posts('pasajero-0.tumblr.com', { type: 'photo', tag: '#ships' }, function (err, data) {
	var photo_plate = {'phPlate': "= " + data + " ="}
	var tmpl_tumblr = document.getElementById("template_tumblr").innerHTML;
	var output_tumblr = mustache.to_html(tmpl_tumblr, photo_plate);
	$('#root').append(output_tumblr);  
});

