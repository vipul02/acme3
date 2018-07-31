<template>
  <v-app>
    <v-slide-x-reverse-transition>

    <v-navigation-drawer
      clipped
      v-model="drawer"
      app
      dark
    >
      <v-list>
        <v-list-tile
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <SideNav class="ma-0"></SideNav>
    </v-navigation-drawer>
    </v-slide-x-reverse-transition>
    
    <v-toolbar app :clipped-left="clipped" class="primary">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <Logo class="icon"/>
      <v-spacer class="spacer"></v-spacer>
      <v-text-field 
      box 
      prepend-icon="search" 
      placeholder="Search services right away ..." 
      class="search" 
      >  
      </v-text-field>
      <v-spacer></v-spacer>
      <v-flex d-inline-flex>
        <v-icon color="black">android</v-icon>
        <v-icon color="black">supervised_user_circle</v-icon>
      </v-flex>
    </v-toolbar>
    <v-content class="bg">
      <vue-particles
      class="bgimg"
      color="#2962FF"
      :particleOpacity="0.7"
      :particlesNumber="150"
      shapeType="edge"
      :particleSize="4"
      linesColor="#D50000"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="5"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      >
      </vue-particles>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import Footer from '~/components/footer.vue'
  import SideNav from '~/components/SideNav.vue'

  export default {
    components: {
      Logo,
      Footer,
      SideNav
    },
    data() {
      return {
        clipped: true,
        drawer: true,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'build', title: 'Services', to: '/services' },
          { icon: 'location_on', title: 'Reach Us', to: '/contact' },
          { icon: 'question_answer', title: 'Who Are We?', to: '/about' },
          { icon: 'battery_charging_full', title: 'Electrical AMC Services', to: '/amc' }
        ],
        title: 'Acme Electrical Services',
      }
    }
  }
</script>

<style lang="less" scoped>

@width: 40px;

#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.spacer {
  max-width: 20px;
}

.icon {
  margin: 20px;
  width: @width;
}

.search {
  max-width: 40%;
}

.bgimg {
  background-image: url('../static/bulb.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>
