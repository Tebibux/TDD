function analyzeArray(arr){
	if (arr.length === 0) return;
	let obj = {
		average: 0,
		min: Infinity,
		max: 0,
		length: 0
	};
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		if(obj.max < arr[i]){
			obj.max = arr[i];
		}
		if(obj.min > arr[i]){
			obj.min = arr[i];
		}
		sum += arr[i];
	}
	obj.average = sum/arr.length
	obj.length = arr.length;

	return obj;
}
module.exports = analyzeArray