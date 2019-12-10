const systemProduction = {
	system_id: 2,
	start_date: '2018-08-01',
	production: [
		0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
	]
};

  const arr = systemProduction.production;
  //Reverse Array to scope 000000
  var reversedArray = arr.reverse();
  // Total map is result
  var totalMap = new Map();
  
  // THIS MODULE WILL PRODUCE THE SAME RESULTS WITH OUT ESTIMATES - ASSUMING UNITS PER DAY IS 1 IF THEY ARE NOT
  // YOU CAN DIVIDE THE MONTH BY UNITS TO GET A AVERAGE OF DAILY AND INCREASE THE INCREMENT OF EACH MONTHS- DAY BY THAT AMOUNT 

  totalMap.set(2019, new Map()); // Setting the Starting Year in a new Map
  
  let july = 31;
  totalMap.get(2019).set(7, 0)
  // Start at July - June from the end of the array backwards.
  
  for (let i = 0 ; i < july; i++){
	  if (reversedArray[i] === 0 || reversedArray[i] === 1){
		  totalMap.get(2019).set(7, totalMap.get(2019).get(7) + 1)
	  } else if (reversedArray[i] > 0) {
  
	  }
  }
  
  
  let june = 31;
  totalMap.get(2019).set(6, 0)
  // June - July from the end of the array backwards.
  for (let i = july ; i < 62; i++){
	  if (reversedArray[i] === 0 || reversedArray[i] === 1){
		  totalMap.get(2019).set(6, totalMap.get(2019).get(6) + 1)
	  } else if (reversedArray[i] > 0) {
  
	  }
  }
  
  let may = 31;
  totalMap.get(2019).set(5, 0)
  
  for (let i = 62 ; i < 92 ; i++){
	  if (reversedArray[i] === 0 || reversedArray[i] === 1){
		  totalMap.get(2019).set(5, totalMap.get(2019).get(5) + 1)
	  } else if (reversedArray[i] > 0) {
  
	  }
  }
  
  let april = 30;
  totalMap.get(2019).set(4, 0)
  
  for (let i = 92 ; i < 123 ; i++){
	  if (reversedArray[i] === 0 || reversedArray[i] === 1){
		  totalMap.get(2019).set(4, totalMap.get(2019).get(4) + 1)
	  } else if (reversedArray[i] > 0) {
  
	  }
  }
  
  let march = 31;
  totalMap.get(2019).set(3, 0)
  
  for (let i = 122 ; i < 153 ; i++){
	  if (reversedArray[i] === 0 || reversedArray[i] === 1){
		  totalMap.get(2019).set(3, totalMap.get(2019).get(3) + 1)
	  } else if (reversedArray[i] > 0) {
  
	  }
  }
  
  let feb = 28;
  totalMap.get(2019).set(2, 0)
  
  for (let i = 150 ; i < 178 ; i++){
	  if (reversedArray[i] === 0 || reversedArray[i] === 1){
		  totalMap.get(2019).set(2, totalMap.get(2019).get(2) + 1)
	  } else if (reversedArray[i] > 0) {
  
	  }
  }
  
  let jan = 31;
  totalMap.get(2019).set(1, 0)
  
  for (let i = 178 ; i < 209 ; i++){
	  if (reversedArray[i] === 0 || reversedArray[i] === 1){
		  totalMap.get(2019).set(1, totalMap.get(2019).get(1) + 1)
	  } else if (reversedArray[i] > 0) {
  
	  }
  }
  
  // NEW YEAR REVERSE ARRAY  THIS COULD BE ANY YEAR FROM 6 MONTH INTERVALS

  totalMap.set(2018, new Map());
  
  let dec = 31;
  totalMap.get(2018).set(12, 0)
  
  for (let i = 191 ; i < 222 ; i++){
	  if (reversedArray[i] === 0 || reversedArray[i] === 1){
		  totalMap.get(2018).set(12, totalMap.get(2018).get(12) + 1)
	  } else if (reversedArray[i] > 0) {
  
	  }
  }

  let nov = 31; 
  totalMap.get(2018).set(11, 0)
  
  for (let i = 223 ; i < 253 ; i++){
	  if (reversedArray[i] === 0 || reversedArray[i] === 1){
		  totalMap.get(2018).set(11, totalMap.get(2018).get(11) + 1)
	  } else if (reversedArray[i] > 0) {
  
	  }
  }
  
  

  console.log(totalMap)