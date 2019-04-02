/**
 * http://usejsdoc.org/
 */
function isWeekDay(){
	const todayDate = new Date();
	const day = todayDate.getDay();
	return ['weekend','weekday','weekday','weekday','weekday','weekday','weekend'][day];
}

console.log(isWeekDay());