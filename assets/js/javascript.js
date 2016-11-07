
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBtQ0s6D2BqAntMzT_bZlhV82wm6SxVZBA",
    authDomain: "train-time-73250.firebaseapp.com",
    databaseURL: "https://train-time-73250.firebaseio.com",
    storageBucket: "train-time-73250.appspot.com",
    messagingSenderId: "358539235836"
  };
  firebase.initializeApp(config);

	var database = firebase.database();

	// Create variables for form inputs. 
	var trainName = "";
	var destination = "";
	var firstTrainTime = "";
	var frequency = "";
	
	$('#submit').on('click', function(){
			
			// grab text from input field, grab value & trim blank spaces before and after 
		  	trainName = $('#trainName').val().trim();
		  	destination = $('#destination').val().trim();
		  	firstTrainTime = $('#firstTrainTime').val().trim();
		  	frequency = $('#frequency').val().trim();

		  	// pushing object data to firebase
		  	database.ref().set({
		  		name: firebase.database.ServerValue.TIMESTAMP,
		  		train: trainName,
		  		destination : destination,
		  		trainTime: firstTrainTime,
				frequency: frequency
		  	});

	return false; 
	}); // End #submit click function


