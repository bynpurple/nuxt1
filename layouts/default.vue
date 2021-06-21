<template>
  <v-app dark>
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

        <v-list-group
          v-for="(item, index) in menus"
          :key="'menu_' + index"
          :value="false"
          :prepend-icon="item.icon"
          no-action>

          <template v-slot:activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="(subItem, subIndex) in item.children"
            :key="'submenu_' + subIndex"
            :to="item.to + subItem.to"
            router
            exact
            @click="setMenuName(subItem.title)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>

    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <v-switch
        v-model="darkYn"
        :label="`darkMode : ${darkYn ? 'On' : 'Off'}`"
        :change='changeDarkMode'>
      </v-switch> -->
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container :fluid="true">
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>
                {{ menuName }}
              </v-card-title>
              <v-card-subtitle>
                subtitle
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      // darkYn: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Main',
          to: '/',
          children: [

          ]
        }
      ],
      menus: [
        {
          icon: 'mdi-file-document-multiple-outline',
          title: '게시판',
          to: '/example-board',
          children: [
            {
              title: '게시판인덱스',
              to: '/index'
            }
          ]
        },
        {
          icon: 'mdi-content-save-edit-outline',
          title: 'Color',
          to: '/example-color',
          children: []
        },
        {
          icon: 'mdi-content-save-move-outline',
          title: 'Data',
          to: '/example-data',
          children: []
        },
        {
          icon: 'mdi-certificate',
          title: 'Layout',
          to: '/example-layout',
          children: []
        },
        {
          icon: 'mdi-certificate-outline',
          title: 'List',
          to: '/example-list',
          children: [
            {
              icon: 'mdi-certificate-outline',
              title: 'List-Main',
              to: '/index'
            }
          ]
        },
        {
          icon: 'mdi-calculator',
          title: 'EMain',
          to: '/example-main',
          children: []
        },
        {
          icon: 'mdi-account-settings-outline',
          title: 'Modal',
          to: '/example-modal',
          children: [

          ]
        },
        {
          icon: 'mdi-account-settings-outline',
          title: 'Setting',
          to: '/example-setting',
          children: [

          ]
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'LOS_TEST'
    }
  },
  computed: {
    darkMode () {
      return this.$vuetify.theme.dark
    },
    menuName () {
      return this.$vuetify.menuName
    }
  },
  created () {
    // this.darkYn = this.darkMode
  },
  methods: {
    changeDarkMode () {
      this.$vuetify.theme.dark = this.darkYn
    },
    setMenuName (titleName) {
      this.$vuetify.menuName = titleName
    }
  }
}
</script>
