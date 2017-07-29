import data from './mock/data';

for (var i = 0; data.length > i; i++){
	console.log('=================');
	for (var key in data[i]){
		var _key = key;
		var _val = data[i][key];
		console.log(_key, '=', _val);
	}
}

