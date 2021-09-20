<template>
  <div v-if="user !== null">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <video playsinline controls muted>
              <source src="@/assets/videos/video.mp4" type="video/mp4" />
            </video>

            <v-card-title> {{ user.title }} </v-card-title>
            <v-card-text>
              <div class="d-flex align-center">
                <v-avatar size="40">
                  <v-img :src="getIconPath(user.user_icons)"></v-img>
                </v-avatar>
                <span class="text--primary font-weight-medium ml-3 font-italic">
                  {{ user.user_name }}
                </span>
              </div>
            </v-card-text>

            <v-card-text class="pl-15 pr-15">
              {{ user.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Users from "@/types/Users";
import UsersService from "@/services/usersDataService";
import Vue from "vue";
export default Vue.extend({
  name: "UserDetail",
  data() {
    return {
      user: {} as Users,
    };
  },
  methods: {
    retrieveUsers() {
      UsersService.getAll()
        .then((response: any) => {
          const userId = +this.$route.params.id;
          let users = response.data;
          this.user = users.find((e: Users) => e.id === userId);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    getIconPath(iconName: any) {
      return iconName ? require(`@/assets/images/avatar/${iconName}`) : "";
    },
  },
  mounted() {
    this.retrieveUsers();
  },
});
</script>
<style scoped>
video {
  width: 100%;
}
.v-card {
  max-width: 1100px;
  margin: 0 auto;
}
</style>