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
  </v-app>
</template>

<script>
export default {
    data () {
        return {
            drawer: false,
            links: [
                {title: 'Login', icon: 'mdi-lock', url: '/login'},
                {title: 'Registration', icon: 'face', url: '/Registration'},
                {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
                {title: 'New ad', icon: 'note_add', url: '/new'},
                {title: 'My ads', icon: 'list', url: '/list'}
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
