//CommonJS, Kaldes det jeg gør nedenunder. (eksportere/importere).

const firebase = require("firebase");

const firebaseConfig = {
	apiKey: "AIzaSyBvX_EU0LcP_aq6qQGCd2Isw1SlUoa1xyo",
	authDomain: "brians-oste-biks.firebaseapp.com",
	databaseURL: "https://brians-oste-biks.firebaseio.com",
	projectId: "brians-oste-biks",
	storageBucket: "brians-oste-biks.appspot.com",
	messagingSenderId: "963200491883",
	appId: "1:963200491883:web:c06b997b5b5d052beaac2e"
  };

  const db = firebase.initializeApp(firebaseConfig); 

  module.exports = db; //Eksportere db konstant.