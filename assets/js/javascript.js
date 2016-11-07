// Initialize Firebase
var config = {
apiKey: "AIzaSyAYY9MBbqC5TNakRIVBriGH-lqh_i5_PAM",
authDomain: "employee-data-management-d1e35.firebaseapp.com",
databaseURL: "https://employee-data-management-d1e35.firebaseio.com",
storageBucket: "employee-data-management-d1e35.appspot.com",
messagingSenderId: "623502402640"
};

firebase.initializeApp(config);

	var database = firebase.database();

	$('#submit').on('click', function(){
			
			// grab text from input field place into var
		  	var employeeName = $('#employeeName').val().trim();
		  	var role = $('#role').val().trim();
		  	var startDate = $('#startDate').val().trim();
		  	var monthlyRate = $('#monthlyRate').val().trim();

		  	// pushing object data to firebase
		  	database.ref().push({
		  		dateAdded: firebase.database.ServerValue.TIMESTAMP,
		  		employeeName : employeeName,
		  		role: role,
				startDate: startDate,
				monthlyRate: monthlyRate
		  	});



		  		//debugger;
		  		 database.ref().on('child_added', function(childsnapshot){
				 	console.log(childsnapshot.val());
					console.log(childsnapshot.val().employeeName);
					console.log(childsnapshot.val().role);
					console.log(childsnapshot.val().startDate);
					console.log(childsnapshot.val().monthlyRate);
				 });



				 // full list of items to the well
				$('#blah').append("<h1>" + 
					// "<div class='well'><span id='name'> "+childSnapshot.val().employeeName+ " </span><span id='role'> "+childSnapshot.val().role+" </span><span id='startDate'> "+childSnapshot.val().startDate+" </span><span id='monthlyRate'> "+childSnapshot.val().monthlyRate+" </span></div>");

				 childsnapshot.val().employeeName + "</h1>");





	return false; 
	}); // End #submit click function


