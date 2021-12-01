<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="'list' + i"
          :to="item.to"
          router
          exact
          @click="setMenuName(item.title)"
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
          :key="'menus-' + index"
          :value="false"
          :prepend-icon="item.icon"
          no-action>

          <template v-slot:activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="(subItem, subIndex) in item.children"
            :key="'submenus-' + subIndex"
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
        <v-app-bar absolute>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
          <v-app-bar-title>
            {{ 'Amoled_Project' }}
          </v-app-bar-title>
        </v-app-bar>
      </v-container>
      <v-container :fluid="true" class="main-container">
        <nuxt />
      </v-container>
    </v-main>
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
  name: 'MainLayout',
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      // darkYn: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Amoled_Project',
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
              to: ''
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
              to: ''
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
      title: 'NUXT'
    }
  },
  computed: {
  },
  mounted () {
    this.$vuetify.theme.dark = this.$store.state.darkYn
    this.menuName = this.$store.getters.menuName
    this.darkMode = this.$store.state.darkYn
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/nav.scss';
</style>
