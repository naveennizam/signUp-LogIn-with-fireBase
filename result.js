firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }
    else{
        
        document.querySelector("#result").innerHTML = ` <h1>Hello!     ${user.email} \u{1F4BB}</h1>  `
    }
}) 