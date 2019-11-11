const db = require("../config/database"); //Henter data'en fra filen database.js i mappen config.

const ProductRef = db.firebase().collection("products");//referance til den collection i firebase som hedder products.

module.exports = ProductRef;//Eksportere den collection jeg referancere til.