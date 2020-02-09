<template>
  <v-app id="inspire">
    <v-navigation-drawer
            app
            temporary
            v-model="drawer"
    >
        <v-list>
            <v-list-item
                    v-for="link of links"
                    :key="link.title"
                    :to="link.url"
            >
                <v-icon left>{{link.icon}}</v-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="link.title"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item
                    @click="onLogout"
                    v-if="isUserLoggedIn"
            >
                <v-icon left>exit_to_app</v-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="'logout'"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            color="primary"
            dark
    >
        <v-app-bar-nav-icon
                @click="drawer = !drawer"
                class="hidden-md-and-up"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
            <router-link to="/" tag="span" class="pointer">Ad application</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
                    text
                    v-for="link in links"
                    :key="link.title"
                    :to="link.url"
            >
                <v-icon left>{{link.icon}}</v-icon>
                {{link.title}}
            </v-btn>
            <v-btn
                    @click="onLogout"
                    text
                    v-if="isUserLoggedIn"
            >
                <v-icon left>exit_to_app</v-icon>
                Logout
            </v-btn>
        </v-toolbar-items>

    </v-app-bar>

    <v-content>
      <v-container
              class="fill-height align-start"
              fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>

      <template v-if="error">
          <v-snackbar
                  :color="error"
                  :multi-line="true"
                  :timeout="5000"
                  @input="closeError"
                  :value="true"
          >
              {{error}}
              <v-btn
                      dark
                      text
                      @click="closeError"
              >
                  Close
              </v-btn>
          </v-snackbar>
      </template>

  </v-app>
</template>

<script>
export default {
    data () {
        return {
            drawer: false,
        }
    },
    methods: {
        closeError () {
            this.$store.dispatch('clearError')
        },
        onLogout () {
            this.$store.dispatch('logoutUser')
            this.$router.push('/')
        }
    },
    computed: {
        error () {
            return this.$store.getters.error
        },
        isUserLoggedIn () {
            return this.$store.getters.isUserLoggedIn
        },
        links () {
            if (this.isUserLoggedIn) {
                return [
                    {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
                    {title: 'New ad', icon: 'note_add', url: '/new'},
                    {title: 'My ads', icon: 'list', url: '/list'}
                ]
            }

            return [
                {title: 'Login', icon: 'mdi-lock', url: '/login'},
                {title: 'Registration', icon: 'face', url: '/Registration'},
            ]
        }
    }
};
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>
