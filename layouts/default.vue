<template>
  <v-app light>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon>
              fas fa-home
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>
            <nuxt-link to="/" >
              Top
            </nuxt-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>
              fas fa-user-alt
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>
            <nuxt-link to="/user/new" >My page</nuxt-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>
              fas fa-sign-out-alt
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Sign out</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>
              fas fa-user-alt
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>
            <nuxt-link to="/user/new" >User New</nuxt-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>
              fas fa-user-alt
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>
            <nuxt-link to="/user/edit" >User Edit</nuxt-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      absolute
      app
      color="primary"
    >
      <span class="white--text">&copy; 2019-2020 Nozomi Kawakami</span>
    </v-footer>
    <v-btn
      @click.stop="rightDrawer = !rightDrawer"
      fixed
      light
      fab
      bottom
      right
      color="primary"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/styles.scss';

</style>
