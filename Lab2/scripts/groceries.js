	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "$1.30 Trail Mix",
		LactoseFree: true,
		NutFree: false,
		Organic: true,
		price: 1.30
		
	},
	{
		name: "$1.99 Brocoli",
		LactoseFree: true,
		NutFree: true,
		Organic: true,
		price: 1.99
	},
	{
		name: "$2.00 Candy Bar",
		LactoseFree: false,
		NutFree: false,
		Organic: false,
		price: 2.00
	},
	{
		name: "$2.35 Bread",
		LactoseFree: true,
		NutFree: true,
		Organic: false,
		price: 2.35
	},
	{
		name: "$2.50 Peanut Butter",
		LactoseFree: true,
		NutFree: false,
		Organic: false,
		price: 2.50

		
	},
	{
		name: "$2.60 Nutella",
		LactoseFree: false,
		NutFree: false,
		Organic: false,
		price: 2.60
	},
	{
		name: "$3.00 Tofu",
		LactoseFree: true,
		NutFree: true,
		Organic: true,
		price: 3.00

	},
	{
		name: "$3.05 Milk",
		LactoseFree: false,
		NutFree: true,
		Organic: true,
		price: 3.05
		
	},
	{
		name: "$4.00 Yogurt",
		LactoseFree: false,
		NutFree: true,
		Organic: true,
		price: 4.00
		
	},
	{
		name: "$10.00 Salmon",
		LactoseFree: true,
		NutFree: true,
		Organic: true,
		price: 10.00
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	console.log("list1");
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseFree") && (prods[i].LactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutFree") && (prods[i].NutFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// this function was made to test filtering based on if the user selected organic or not. It does not function properly and is never called.
function Organic(productList, show){
	let returnList = [];
	console.log("list2");
	for (let i=0; i<productList.length; i+=1) {
		if ((show == "Organic") && (prods[i].Organic == true)){
			returnList.push(productList[i].name);
		}
		else if ((show == "nonOrganic") && (prods[i].Organic == false)){
			returnList.push(productList[i].name);
		}
	}
	return returnList;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
