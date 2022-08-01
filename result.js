

firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("index.html")
    }

    else {

        firebase
            .database()
            .ref('memo/')
            .on('value', (data) => {
                var obj = data.val();
                console.log(obj)
                Object.keys(obj).forEach((key) => {
                    console.log('email: ' + obj[key].email);
                    console.log(`firstName:   ${obj[key].firstName} `);
                    console.log(`surName:   ${obj[key].surName} `);

                    document.querySelector("#result").innerHTML = ` <h1>Hello!   ${obj[key].firstName} ${obj[key].surName}    \u{1F4BB}</h1> <br> Your Email is ${user.email}  `
                });
            });

    }


})
let logout = () => {
    firebase.auth().signOut()
        .then(() => {
            console.log("ok")
        })
        .catch((err) => {
            alert(err)
        })
}
