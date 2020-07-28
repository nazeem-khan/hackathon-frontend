 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCiT9vk2YkKZLtudj6iFI6WH_Ir-ewheWE",
    authDomain: "hackathonform-f6fd8.firebaseapp.com",
    databaseURL: "https://hackathonform-f6fd8.firebaseio.com",
    projectId: "hackathonform-f6fd8",
    storageBucket: "hackathonform-f6fd8.appspot.com",
    messagingSenderId: "226222870135",
    appId: "1:226222870135:web:6ee79c45f378d24a8d8072"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('queries');



document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

   var name=getInputVal('name');
   var email=getInputVal('email');
   var message=getInputVal('message');

   saveMessage(name,email,message);

   document.querySelector('.alert').style.display='block';
 
   setTimeout(function(){
     document.querySelector('.alert').style.display='none';
   },3000);

   document.getElementById('contactForm').reset();
   
}


function getInputVal(id){
    return document.getElementById(id).value;
}


function saveMessage(name, email, message){
    var newMessageRef= messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        message:message
    });
}