<template>
  <div>
    <v-toolbar dark>
      <span>
        <v-app-bar-nav-icon @click="sidebar = !sidebar"> </v-app-bar-nav-icon>
      </span>
      <v-spacer />
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <v-img contain src="@/assets/logo.png" height="30" />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer absolute temporary v-model="sidebar">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="@/assets/images/avatar/10.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Demopw</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title @click="logout">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  data() {
    return {
      appTitle: "Awesome App",
      sidebar: false,
      items: [
        { title: "Logout", icon: "mdi-logout" }
      ],
    };
  },
  methods : {
      logout() {
          localStorage.removeItem('user');
          this.$router.push({path:'/login'})
      }
  }
});
</script>

