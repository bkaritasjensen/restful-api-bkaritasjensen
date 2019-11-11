const productRef = require("../models/product.model");

exports.createProduct = function (req, res){//Hardcoder databasen.
	//Opret data.
	productRef.add({
		sku: "jshaljbsk6",
		name: "Gouda",
		price: 200,
		description: "Lorem...",
		weight: 100
	})
		.then(doc => res.json(doc)); //Udskriver json - data'en.
		.catch(error => res.json(error));//Hvis der sker en fejl skriver den fejlen ud stedenfor json - data'en.
};

exports.getAllProducts = function(req, res){
	productRef.get().then(docs => {
		const result = [];
		docs.forEach(docs => result.push(doc.data()))
		res.json(result);
	});
};

exports.getSinglePtoduct = function (req, res){
	const result = products.find(product => product.sku = rew.params.sku);
	res.json(result);
};

