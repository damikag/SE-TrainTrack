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

var tblData="";

console.log("Test");
db.collection("TrainJourney2")
.get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());

        var val=doc.data();
        console.log(val.TrainID);

        $("#journeyTBL").append(`<tr>
        <td><a href="Intermediate-stations.html" >${val.TrainID} </td></a>
        <td>${val.StartTime}</td>
        <td>${val.StartStation}</td>
        <td>${val.EndTime}</td>
        <td>${val.EndStation}</td>
        <td>${val.JourneyID}</td>
        <td><a href="Intermediate-stations.html?docID=${doc.id}" ><button type="button" class="btn btn-dark">Inspect</button></a></td>
        <td><a href="update-train-journey.html?docID=${doc.id}" ><button type="button" class="btn btn-dark">Edit</button></a></td>
    </tr>`);
    });
})
.catch(function(error) {
    console.log("Error getting documents: ", error);
});