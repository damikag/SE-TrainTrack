url=window.location.search;
// console.log(url);
docID=url.substring(7,url.length);
// console.log(String(docID));

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
console.log("run");
console.log(docID);
db.collection("TrainJourney2").doc(docID)
.get()
.then(function(doc) {
    // querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());

        var val=doc.data();
        // console.log(val.JourneyID);
        $("#journeyHeader").html(val.JourneyID);
        for(station in val.Arrival_Intermediate_Stations){
            // console.log(station);
            $("#intermediateList").append(`<li class="list-group-item">${station}</li>`);   
        }
    })

.catch(function(error) {
    console.log("Error getting documents: ", error);
});

