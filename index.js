import data from './mock/data';
import $ from "jquery";

////////////////////////////////////////////////////////////////////////////////////////////////////////

_.map(data, function(value, key) {
 		$( "#root" ).get();
 		$( "#root" ).append( "<h3> =====" + key + "===== </h3>" );
 
 	    	_.map(value, function(val, k) {
  		  		var p = document.createElement("p");
  		  		$( p ).append( k + "=" + "<span>" + val + "</span>");	  		  		
  		  		$( "#root" ).append( p );	  		  				
  			});
 	    });

////////////////////////////////////////////////////////////////////////////////////////////////////////