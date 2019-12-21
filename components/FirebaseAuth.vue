<template>
  <div id='firebaseui-auth-container'>
  </div>
</template>

<script>
import * as firebaseui from 'firebaseui'
import { auth, authProviders } from '~/plugins/firebase'

export default {
  name: 'FirebaseAuth',
  mounted () {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)

        const config = {
          signInOptions: [
            authProviders.Google,
            authProviders.Facebook,
            authProviders.Twitter,
            authProviders.Email
          ],
          callbacks: {
            signInSuccessWithAuthResult: (authResult) => {
              window.location.href = '/'
              return false
            }
          },
          signInSuccessUrl: '/events',
          signInFlow: 'popup'
        }
        ui.start('#firebaseui-auth-container', config)
      }
    })
  }
}

</script>

<style scoped>
h1 {
  color: var(--v-primary-base);
}
</style>
