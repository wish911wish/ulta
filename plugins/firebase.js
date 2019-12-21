import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import config from '~/firebase.config'

firebase.initializeApp(config)

export const authProviders = {
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  Facebook: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  Twitter: firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  Email: firebase.auth.EmailAuthProvider.PROVIDER_ID
}

export const auth = firebase.auth()
