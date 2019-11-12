const { getAllProducts, getSingleProduct, deleteProduct, createProduct, updateProduct } = require("../controllers/products.controllers");

module.exports = function(router) {
	router.options("/products", function(req, res) {
		res.header("Allow", "OPTIONS, GET, POST");
		res.status(204);
		res.ens();
	});

	router.get("/products", getAllProducts);
	router.get("/products/:sku", getSingleProduct);
	router.delete("/products/:sku", deleteProduct);
	router.patch("/products/:sku", updateProduct);
	router.post("/products", createProduct);
};
