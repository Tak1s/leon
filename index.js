import data from './mock/data';
import $ from 'jquery';
// import jR from 'jsrender';
// import handlebars from 'handlebars';
// import hogan from 'hogan.js';
import mustache from 'mustache';

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

