const { getAllProducts, getSingleProduct } = require("../controllers/products.controller");

module.exports = function(router) {
	router.options("/products", function(req, res) {
		res.header("Allow", "OPTIONS, GET, POST");
		res.status(204);
		res.ens();
	});

	router.get("/products", getAllProducts;

	router.get("/products/:sku", getSingleProduct);

	router.delete("/products/:sku", function (req,res){
		//Slet data.
	});

	router.patch("/products/:sku", function (req, res){
		//Opdater lortet
	});

	router.post("/products", function (req,res){
		//Opret data.
	});
};
