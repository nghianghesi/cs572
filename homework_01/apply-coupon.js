/**
 * http://usejsdoc.org/
 */
const item = {
		"name":"Avocado",
		"type":"Fruit",
		"category":"Food",
		"price":200
}

function applyCoupon(item){
	return function(rate){
		return 1.0 * item.price * (100-rate) / 100;
	}
}

applyCoupon(item)(10)===180;
console.log(applyCoupon(item)(10)===180);