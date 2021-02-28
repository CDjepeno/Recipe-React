import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCIlYKHIvP5xU5XmzQPUL_9gghTVebPdqU",
    authDomain: "recipe-react-41cd5.firebaseapp.com",
    databaseURL: "https://recipe-react-41cd5-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
