const productRef = require("../models/product.model");

exports.createProduct = function (req, res){//Hardcoder databasen. Henter createProduct fra home.rute.js filen.
	//Opret data.
	req.fields.price = parseFloat(req.fields.price);//Skrives kun ved price og weight fordi de er numbers og ikke strings.
	req.fields.weight = parseFloat(req.fields.weight);
	productRef.add({ ...req.fields })//det samme som man skriver obejkter med værdier. altså .... name: "Bjarne", price: 100 osv....
		.then(ref => {//Udskriver json - data'en.
			console.log("hej")
			ref.get()
				.then(doc => res.status(201).json(doc.data()))
				.catch(err => console.log(err))
		})
		.catch(error => res.json(error));//Hvis der sker en fejl skriver den fejlen ud stedenfor json - data'en.
};

exports.getAllProducts = function(req, res){
	productRef.get().then(docs => {
		const result = []; //Laver et tomt array til at putte documenterne i.
		docs.forEach(doc => result.push(doc.data()))
		res.json(result);
	});
};

exports.getSingleProduct = function (req, res){
	productRef.where("sku", "=", req.params.sku).get()
		.then(docs => {
			docs.forEach(doc => res.json(doc.data()))
		});
};
 
exports.updateProduct = function (req, res){
	if (req.fields.price){
		req.fields.price = parseFloat(req.fields.price)
	}
	if (req.fields.weight){
		req.fields.weight = parseFloat(req.fields.weight)
	}

	productRef.where("sku", "=", req.params.sku).get()
		.then(docs => {
			docs.forEach(doc => doc.ref.update({ ...req.fields }).get()
				.then(doc => res.json(doc.data()))
			);
		})
};

exports.deleteProduct = function (req, res){
	productRef.where("sku", "=", req.params.sku).get() //Leder efter et sku er lig det det sku, der er.
		.then(docs => {//så tager man sku'en
			docs.forEach(doc => doc.delete());//For hvert document som der er sletter man.
		})
		.catch(error => res.status(5000).json({message: error}));//Hvis der sker en fejl skriver den fejlen ud stedenfor json - data'en.
	res.status(204).end();//Skriver den - "Alt er iorden, men der er ikke noget document" at vise, fordi det lige er blevet slettet.
};

