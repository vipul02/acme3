<template>
  <v-container>
    <v-layout column justify-center align-center>
        <v-flex class="card">
            <v-card dark class="elevation-24">
                <v-card-title 
                    v-if="error.statusCode === 404" 
                    class="secondary title justify-center white--text" primary-title
                >
                    4O4 : Page Not Found
                </v-card-title>
                <v-card-title 
                    v-else
                    class="secondary title justify-center white--text" primary-title
                >
                    An error occurred
                </v-card-title>
                <v-card-text class="text-xs-center">
                    <v-btn>
                        <nuxt-link to="/">Home page</nuxt-link>
                    </v-btn>
                    <div class="mt-3">
                        <svg height="100" width="110">
                            <text fill="red" transform="rotate(-30 150,0)" style="font-size:30px;">OOOPS!</text>
                        </svg>
                    </div>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  props: ['error'],
}
</script>

<style lang="less" scoped>
.card {
    width: 300px;
    .v-card {
        height:300px;
    }
}

.icon {
  margin: 20px;
  width: 100px;
}


</style>
