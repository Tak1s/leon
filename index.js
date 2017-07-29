import data from './mock/data';

for (var i = 0; data.length > i; i++){;
	console.log('=================');
	for (var key in data[i]){	
		console.log(key, '=', data[i][key]);
		
	}
}

