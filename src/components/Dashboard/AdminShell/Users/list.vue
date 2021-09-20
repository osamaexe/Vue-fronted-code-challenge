<template>
  <div>
    <v-container>
      <v-row>
        <!-- Influencing The Influencer -->
        <v-col
        class="cursor-pointer"
          md="4"
          sm="6"
          cols="12"
          v-for="(user, index) in users"
          :key="index"
          @click="getDetail(user,index)"
        >
          <v-card>
            <v-img
              :src="require(`@/assets/images/card/${user.thumbnail}`)"
              height="250"
              gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.1)"
            />
            <img src="@/assets/images/video-icon.png" height="30" class="position-absolute" />
            <v-card-title> {{ user.title }} </v-card-title>
            <v-card-text>
              {{ user.description.substring(0,150)+".."}}
              <div class="d-flex justify-space-between align-center mt-8">
                <span class="text--primary font-weight-medium">
                  {{ user.user_name }}
                </span>

                <v-avatar size="40">
                  <v-img :src="require(`@/assets/images/avatar/${user.user_icons}`)"></v-img>
                </v-avatar>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Apple iPhone 11 Pro -->
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Users from "@/types/Users";
import UsersService from "@/services/usersDataService";
import Vue from "vue";
export default Vue.extend({
  name: "Users",
  data() {
    return {
      users: [] as Users[],
    };
  },
  methods: {
    retrieveUsers() {
      UsersService.getAll()
        .then((response: any) => {
          this.users = response.data;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    getDetail(user:any,i:number) {
      this.$router.push({path:`/detail/${user.id}`})
    },
  },
  mounted() {
    this.retrieveUsers();
  },
});
</script>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.position-absolute {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>