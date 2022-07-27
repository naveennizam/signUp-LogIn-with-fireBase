document.querySelector('button').addEventListener("click", (event) => {
    event.preventDefault()
})
let register = () => {
    let email = document.querySelector('#email')
    console.log(email.value)
    let fname = document.querySelector('#fname')
    let sname = document.querySelector('#sname')

    let password = document.querySelector('#password')
    console.log(password.value);
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            let user = {  //user is inbuilt by search by user uid
                firstName: fname.value,
                surName: sname.value,
                email: email.value,
                password: password.value

            }
            //users is authentication factor
            firebase.database().ref(`users${res.user.uid}`).set(user).then(() => {
                alert(`you are registered`)
                window.location = './login.html'
            })
        })

        .catch((err) => {
            alert(err)
            console.log("err=>", err)
        })

}

let loged = () => {

    let email = document.querySelector('#email')
    let password = document.querySelector('#password')

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)

        .then((res) => {
            firebase.database().ref(`users/${res.user.uid}`).on('value', () => {

                alert("successfully logged in")
                window.location = './result.html'
            })
        })
        .catch((err) => {

            alert(err)
            console.log('err', err)
        })

}