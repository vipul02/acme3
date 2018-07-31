<template>
  <v-layout row>
    <v-flex xs12>
      <v-card
        :color="colors[color]"
        class="custom-ripple elevate"
        ripple
        height="250"
        @click.native="color = (color + 1) % colors.length"
      >
        <v-card-title class="title justify-center align-center white--text" primary-title>{{ title }}</v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        color: 0,
        colors: [
          'indigo',
          'red',
          'pink',
          'purple',
          'deep-purple',
          'blue',
          'light-blue',
          'cyan',
          'teal',
          'green',
          'light-green',
          'lime',
          'yellow',
          'amber',
          'orange',
          'deep-orange',
          'brown',
          'blue-grey',
          'grey'
        ]
      }
    },
    props: [
      'title'
    ]
  }
</script>

<style lang="less" scoped>

.title {
  position: absolute;
}

.elevate {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: elevation 1s cubic-bezier(1.0, 0.4, 0.5, 1.0) 2s infinite alternate;
}

@keyframes elevation {
  0% {
    box-shadow: 0px 0px 20px black, 0px 0px 20px black;
  }
  100% {
    box-shadow: -5px 0px 20px black, 10px 10px 20px black;
  }
}

</style>

<style lang="stylus">
  .custom-ripple
    user-select: none
</style>