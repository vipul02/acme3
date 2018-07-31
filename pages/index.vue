<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6 class="sign">
        <v-container>
          <v-layout row>
            <v-flex>
              <v-card hover>
                <v-card-title class="secondary title justify-center white--text" primary-title>
                  Sign In
                </v-card-title>
                <v-card-text class="black--text">
                  <form @submit.prevent="onSignup">
                    <v-text-field
                    name="email"
                    placeholder="E-mail"
                    id="email"
                    v-model="email"
                    type="email"
                    class="black--text"
                    required
                    ></v-text-field>

                    <v-text-field
                    name="password"
                    placeholder="Password"
                    id="password"
                    v-model="password"
                    type="password"
                    class="black--text"
                    required
                    ></v-text-field>
                    
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn type="submit">Sign In</v-btn>    
                    </v-card-actions>    
                  </form>
                  <p>
                    Not a registered user?  <nuxt-link to="/user/signup" class="links--text">Sign Up</nuxt-link> 
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import loading from '@/components/loading.vue'

export default {
  data: () => ({
    email: undefined,
    password: undefined,
    signup: '/signup'
  }),
  components: {
    loading
  }
}
</script>

<style lang="less" scoped>
@widthico: 100px;
@widthcard: 400px;

.icon {
  width: @widthico;
}

.sign {
  width: @widthcard;
}
</style>
