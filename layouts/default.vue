<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
          <v-list-item-title>Top</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon>
              fas fa-user-alt
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Mypage</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon>
              fas fa-sign-out-alt
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Sign out</v-list-item-title>
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
