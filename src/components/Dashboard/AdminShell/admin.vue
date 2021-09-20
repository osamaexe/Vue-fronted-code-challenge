<template>
  <v-app>
      <navbar></navbar>

    <v-main class="mt-10 mb-10">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">

import Vue from "vue";
import Navbar from "@/components/Layout/navbar.vue"
export default Vue.extend({
  name: "AdminShell",
  components:{
    Navbar
  },

});
</script>