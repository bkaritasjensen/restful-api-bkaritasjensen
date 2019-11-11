const { getAllProducts, getSingleProduct, deleteProduct } = require("../controllers/products.controllers");

module.exports = function(router) {
	router.options("/products", function(req, res) {
		res.header("Allow", "OPTIONS, GET, POST");
		res.status(204);
		res.ens();
	});

	router.get("/products", getAllProducts);

	router.get("/products/:sku", getSingleProduct);

	router.delete("/products/:sku", deleteProduct);

	router.patch("/products/:sku", function (req, res){
		//Opdater data'en.
	});

	router.post("/products", function (req,res){
		//Opret data.
	});
};
