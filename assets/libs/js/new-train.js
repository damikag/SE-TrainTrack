var firebaseConfig = {
    apiKey: "AIzaSyDAfFxl5Bji_6o3w_IJzNs2rFyBPXMDvaA",
    authDomain: "itrack-23950.firebaseapp.com",
    databaseURL: "https://itrack-23950.firebaseio.com",
    projectId: "itrack-23950",
    storageBucket: "itrack-23950.appspot.com",
    messagingSenderId: "319243385322",
    appId: "1:319243385322:web:cf5bedc56b2c3ad1c0da93",
    measurementId: "G-V3G7LKYGMK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

var db = firebase.firestore();


function addDB(){
    
    

    try {
        db.collection("TrainJourney2").add({
            StartTime: $("#Start_Time").val(),
            EndTime: $("#End_Time").val(),
            StartStation: $("#Start_Station").val(),
            EndStation: $("#End_Station").val(),
            
            
        });
        alert("Added.");
      }
      catch(err) {
          console.log(err);
        alert("Failed."+err);
      }
}