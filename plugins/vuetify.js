import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.lightBlue.lighten4, // a color that is not in the material colors palette
    accent: colors.brown.lighten5,
    secondary: colors.red.accent4,
    info: colors.teal.lighten1,
    warning: colors.brown.darken1,
    error: colors.deepOrange.accent4,
    success: colors.indigo.darken4,
    links: colors.indigo.accent4,
    bg: colors.grey.darken3
  }
});

