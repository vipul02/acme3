<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6 class="sign">
        <v-container>
          <v-layout row>
            <v-flex>
              <v-card hover>
                <v-card-title class="secondary title justify-center white--text" primary-title>
                  Sign Up
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
                    
                    <v-text-field 
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    type="password"
                    class="black--text"
                    :rules=[comparePasswords]
                    ></v-text-field>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn type="submit">Sign Up</v-btn>  
                    </v-card-actions>
                  </form>
                    <p>
                    Already a registered user?  <nuxt-link to="/" class="links--text">Sign In</nuxt-link> 
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
export default {
  data: () => ({
    agreement: false,
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    password: undefined,
    confirmPassword: undefined,
    phone: undefined,
    rules: {
      email: v => (v || "").match(/@/) || "Please enter a valid email",
      length: len => v =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      password: v =>
        (v || "").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        "Password must contain an upper case letter, a numeric character, and a special character",
      required: v => !!v || "This field is required"
    }
  }),
  computed: {
      comparePasswords () {
          return this.password != this.confirmPassword ? 'Passwords do not match' : ''
      },
      user() {
          return this.$store.getters.user
      }
  },
  watch:{
      user (value) {
          if (value != null && value != undefined) {
              this.$router.push('/')
          }
      }
  },
  methods: {
      onSignup() {
          this.$store.dispatch('signUserUp', {email: this.email, password: this.password}) 
      }
  }
};
</script>

<style lang="less" scoped>
@widthcard: 400px;

.sign {
  width: @widthcard;
}
</style>
