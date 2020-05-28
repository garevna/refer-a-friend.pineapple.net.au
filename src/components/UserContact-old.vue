<template>
  <v-card class="user-info mx-auto pa-6 homefone" width="480">
    <v-card-title>
      <h4>{{ userForm.title }}</h4>
    </v-card-title>
    <v-card-text class="mx-0 px-0" width="100%">
      <v-text-field
            v-for="(item, prop) in items"
            :key="prop"
            :placeholder="item.placeholder"
            outlined
            dense
            hide-details
            height="32"
            :color="item.color"
            v-model="item.value"
            class="user-inputs"
            :error="item.error"
            :append-icon="item.validationIcon"
            @input="validate(item)"
      ></v-text-field>
      <v-textarea
            :placeholder="userForm.messagePlaceholder"
            outlined
            color="#656565"
            auto-grow
            v-model="message"
            class="user-inputs"
      ></v-textarea>
    </v-card-text>
    <v-card-actions class="text-center">
      <v-btn
          color="buttons"
          dark
          rounded
          width="220"
          height="48"
          class="submit-button px-auto mx-auto"
          @click="sendUserRequest"
      >
        {{ userForm.button }}
      </v-btn>
    </v-card-actions>
    <Popup :opened.sync="popupOpened" />
  </v-card>
</template>

<style scoped>

.v-text-field.v-text-field--enclosed {
  margin-bottom: 4px!important;
}

.user-info {
  width: 640px;
  padding-left: 80px;
  border-radius: 15px!important;
}
h4 {
  width: 100%;
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;
}
.user-inputs {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #656565;
}

@media screen and (max-width: 600px) {
  .v-btn__content {
    font-size: 16px!important;
  }
  .user-info {
    width: 480px!important;
    padding-left: 40px;
  }
  .user-inputs {
    font-size: 14px;
  }
}
@media screen and (max-width: 320px) {
  .user-info {
    width: 300px!important;
    padding-left: 0px;
  }
  .user-inputs {
    font-size: 13px;
  }
}
</style>

<script>

import { mapState, mapActions } from 'vuex'

import Popup from '@/components/Popup.vue'

const emailValidator = require('email-validator')

export default {
  name: 'UserContact',
  components: {
    Popup
  },
  data () {
    return {
      message: '',
      normalColor: '#656565',
      errorColor: '#FF0E00',
      popupOpened: false,
      items: {
        name: {
          value: '',
          placeholder: 'Full name*',
          error: false,
          color: '',
          validationIcon: '',
          validator () { this.error = this.value.length < 2 }
        },
        email: {
          value: '',
          placeholder: 'Email*',
          error: false,
          color: '',
          validationIcon: '',
          validator () {
            this.error = !emailValidator.validate(this.value)
            this.validationIcon = this.error ? '$invalid' : '$valid'
            this.color = this.error ? '#FF0E00' : '#656565'
          }
        },
        //   address: {
        //     value: '',
        //     placeholder: 'Address*',
        //     error: false,
        //     color: '',
        //     validationIcon: '',
        //     validator () { this.error = this.value.length < 5 }
        //   },
        //   postcode: {
        //     value: '',
        //     placeholder: 'Postcode*',
        //     error: false,
        //     color: '',
        //     validationIcon: '',
        //     validator () {
        //       this.error = !Number(this.value) || Number(this.value) < 3000 || Number(this.value) > 9999
        //     }
        //   },
        //   state: {
        //     value: '',
        //     placeholder: 'State*',
        //     error: false,
        //     color: '',
        //     validationIcon: '',
        //     validator () { this.error = this.value.length < 5 }
        //   },
        phone: {
          value: '',
          placeholder: 'Phone',
          error: false,
          color: ''
        }
      }
    }
  },
  computed: {
    ...mapState('content', ['userForm', 'subject', 'textForUserMail'])
  },
  methods: {
    ...mapActions('contact', { sendEmail: 'SEND_EMAIL' }),
    initFields () {
      for (const item in this.items) {
        this.items[item].validationIcon = ''
        this.items[item].error = false
        this.items[item].color = this.normalColor
        this.items[item].value = ''
      }
      this.message = ''
    },
    validate (item) {
      if (!item.validator) return
      item.validator()
      item.validationIcon = item.error ? '$invalid' : '$valid'
      item.color = item.error ? this.errorColor : this.normalColor
    },

    findErrors () {
      let counter = 0
      for (const item in this.items) {
        this.validate(this.items[item])
        counter += this.items[item].error
      }
      return counter > 0
    },

    async sendUserRequest () {
      if (this.findErrors()) return
      this.popupOpened = true
      this.sendEmail({
        subject: this.subject,
        email: this.items.email.value,
        message: `${this.textForUserMail}
        <h3>Name: ${this.items.name.value}</h3>
        <h4>Email: ${this.items.email.value}</h4>
        <h4>Phone: ${this.items.phone.value}</h4>
        <h4>Message:</h4>
        <p>${this.message.split('\n').join('<br>')}</p>`
      })

      this.initFields()
    }
  },
  mounted () {
    this.initFields()
  }
}

</script>
