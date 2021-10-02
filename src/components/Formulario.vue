<template>
  <v-container wrap>
    
    <v-row class="text-center font-weight-bold">
      <v-app-bar-title> 
        CREATE YOUR PROFILE
      </v-app-bar-title>
    </v-row>
    <v-row>
      <v-col cols="6">
        <validation-observer
          ref="observer"
          v-slot="{ invalid }"
        >
          <form @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|max:10"
            >
              <v-text-field
                v-model="name"
                :counter="10"
                :error-messages="errors"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="lastName"
                :counter="10"
                :error-messages="errors"
                label="Last Name"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="phoneNumber"
              :rules="{
                required: true,
                digits: 10,
              }"
            >
              <v-text-field
                v-model="phoneNumber"
                :counter="10"
                :error-messages="errors"
                label="Phone Number"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
                v-model="email"
                :error-messages="errors"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                v-model="username"
                :counter="10"
                :error-messages="errors"
                label="Username"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                :counter="10"
                :error-messages="errors"
                label="Password"
                required
              ></v-text-field>

            </validation-provider>

            <v-btn
              class="mr-4"
              type="submit"
              :disabled="invalid"
            >
              submit
            </v-btn>
            <v-btn @click="clear">
              clear
            </v-btn>
          </form>
        </validation-observer>
      </v-col>
      <v-col cols="6">
          <v-img 
          src="@/assets/user.jpg"
          height="500"
          ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { required, digits, email, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      name: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      username: '',
      password: '',
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = '',
        this.lastName = '',
        this.phoneNumber = '',
        this.email = '',
        this.username = '',
        this.password = '',
        this.$refs.observer.reset()
      },
    },
  }
</script>