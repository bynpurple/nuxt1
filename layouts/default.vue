<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <!-- <v-list-item
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
        </v-list-item> -->
        <v-list-item
          v-for="(item, i) in items"
          :key="'list' + i"
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
            exact>
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
      <v-container>
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
      darkYn: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
          children: [

          ]
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
          children: []
        }
      ],
      menus: [
        {
          icon: 'mdi-file-document-multiple-outline',
          title: '계약',
          to: '/contracts',
          children: [
            {
              title: '계약현황',
              to: '/list'
            }
          ]
        },
        {
          icon: 'mdi-content-save-edit-outline',
          title: '시제품승인',
          to: '/inspire',
          children: []
        },
        {
          icon: 'mdi-content-save-move-outline',
          title: '완제품승인',
          to: '/inspire',
          children: []
        },
        {
          icon: 'mdi-certificate',
          title: '증지',
          to: '/inspire',
          children: []
        },
        {
          icon: 'mdi-certificate-outlinee',
          title: '기타증지',
          to: '/inspire',
          children: []
        },
        {
          icon: 'mdi-calculator',
          title: '정산',
          to: '/inspire',
          children: []
        },
        {
          icon: 'mdi-account-settings-outline',
          title: '관리자 메뉴',
          to: '/inspire',
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
  created () {
  },
  methods: {
  }
}
</script>
