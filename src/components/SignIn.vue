<template>
  <v-form>
    <v-container wrap>
      <v-row
      justify="end"
      >
        <v-col
          cols="12"
          sx="12"
          md="2"
          
        >
             <v-text-field
              v-model="username"
              :counter="10"
              :error-messages="errors"
              label="Username"
              required
            ></v-text-field>
        </v-col>
        <v-col
            md="2"
        >
            <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Enter your Password"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data () {
      return {
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
  }
</script>