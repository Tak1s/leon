import data from './mock/data';
import $ from 'jquery';

// var source   = $("#entry-template").html();
// var template = handlebars.compile(source);

////////////////////////////////////////////////////////////////////////////////////////////////////////


_.map(data, function(value, key) {
 		$( "#root" ).append( "<h3> =====| " + key + " |===== </h3>" );  
 	    	_.map(value, function(val, k) {
  		  		var p = document.createElement( "p" );
  		  		$( p ).append( k + "=" + "<span>" + val + "</span>");	  		  		
  		  		$('#root').append(p);	  		  				
  			});
 	    });


////////////////////////////////////////////////////////////////////////////////////////////////////////

// var tumblr = require('tumblr.js');
// var client = tumblr.createClient({
//   consumer_key: 'Y1D72WCSyyKAe5owRcr7n0j5WAVhITMOCqrW2phNLWzKZfcHCZ',
//   consumer_secret: 'Ey25jfEaEa18Uvzpr74TX1uhPWLCmjB0L8qq8NjRfO9DLa0SmG',
//   token: 'B32lrmOWMJzJZqwulkUWi2tLva2CBn9sj7YT2ytA7eXPf2Rz2T',
//   token_secret: '5EWnDHW0YXffiT5kWRs8LOQhTkg4PteitM8TkbPlz2XnJob461'
// });
