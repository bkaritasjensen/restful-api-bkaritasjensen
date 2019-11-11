const productRef = require("../models/product.model");

exports.createProduct = function (req, res){
	//Opret lortet.
};

exports.getAllProducts = function(req, res){
	productRef.get().then(docs => {
		docs.forEach(docs => console.log(doc.data()))
	});
};

exports.getSinglePtoduct = function (req, res){
	const result = products.find(product => product.sku = rew.params.sku);
	res.json(result);
};

