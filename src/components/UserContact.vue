<template>
  <v-card class="user-info mx-auto pa-6 homefone" width="480">
    <v-card-title>
      <h4>{{ userForm.title }}</h4>
    </v-card-title>
    <v-card-text>
      <p>{{ userForm.text }}</p>
    </v-card-text>
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
    </v-card-text>
    <v-card-text class="ma-auto text-center" width="50%" height="10">
      <v-progress-linear
            color="#75BE00"
            buffer-value="0"
            stream
            v-if="progress"
      ></v-progress-linear>
    </v-card-text>
    <v-card-text class="ma-auto">
      <v-btn
            color="buttons"
            dark
            rounded
            width="100%"
            height="54"
            class="submit-button px-auto mx-auto"
            @click="sendUserRequest"
      >
        {{ userForm.button }}
      </v-btn>
    </v-card-text>
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
      // message: '',
      normalColor: '#656565',
      errorColor: '#FF0E00',
      popupOpened: false,
      items: {
        refererName: {
          value: '',
          placeholder: 'Your Name*',
          error: false,
          color: '',
          validationIcon: '',
          validator () { this.error = this.value.length < 2 }
        },
        refererEmail: {
          value: '',
          placeholder: 'Your Email*',
          error: false,
          color: '',
          validationIcon: '',
          validator () {
            this.error = !emailValidator.validate(this.value)
            this.validationIcon = this.error ? '$invalid' : '$valid'
            this.color = this.error ? '#FF0E00' : '#656565'
          }
        },
        referalName: {
          value: '',
          placeholder: 'Your Friend\'s Name*',
          error: false,
          color: '',
          validationIcon: '',
          validator () { this.error = this.value.length < 2 }
        },
        referalEmail: {
          value: '',
          placeholder: 'Your Friend\'s Email*',
          error: false,
          color: '',
          validationIcon: '',
          validator () {
            this.error = !emailValidator.validate(this.value)
            this.validationIcon = this.error ? '$invalid' : '$valid'
            this.color = this.error ? '#FF0E00' : '#656565'
          }
        }
      },
      progress: false
    }
  },
  computed: {
    ...mapState('content', ['userForm', 'emailSubject', 'emailText'])
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
      // this.message = ''
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
      this.progress = true
      this.sendEmail({
        subject: this.emailSubject,
        email: this.items.refererEmail.value,
        message: `
        <div style='width: 100%; height: 108px; background: #E5FDD7; text-align: center; padding-top:20px; border: solid 1px #0003;'>
          <img src="https://api.pineapple.net.au/icons/android-chrome-512x512.png" height="48" />
          <h3 style="color: #20731C; margin-top: -8px;">Pineapple NET</h3>
        </div>
        <p style="text-align: center">Pineapple is a surefire way to a long-lasting friendship and your friend just mentioned you needed some super fast fibre internet.</p>
        <hr>
        <h3>Your Name: ${this.items.refererName.value}</h3>
        <h4>Your Email: ${this.items.refererEmail.value}</h4>
        <h3>Your Friend's Name: ${this.items.referalName.value}</h3>
        <h4>Your Friend's Email: ${this.items.referalEmail.value}</h4>
        <hr>`
      })
      this.sendEmail({
        subject: 'Referral program',
        email: this.items.referalEmail.value,
        message: `
          <div style='width: 100%; height: 108px; background: #E5FDD7; text-align: center; padding-top:20px; border: solid 1px #0003;'>
            <a href="https://pineapple.net.au" target="_blank">
              <img src="https://api.pineapple.net.au/icons/android-chrome-512x512.png" height="48" />
            </a>
            <h3 style="color: #20731C; margin-top: -8px;">Pineapple NET</h3>
          </div>
          <div style="text-align: center;">
            <h3>${this.items.refererName.value} wants to give you 3 months of FREE internet!</h3>
            <p style="text-align: center">Pineapple is a surefire way to a long-lasting friendship and your friend just mentioned you needed some super fast fibre internet.</p>
          </div>
          <hr>

          <h3>Your Name: ${this.items.referalName.value}</h3>
          <h4>Your Email: ${this.items.referalEmail.value}</h4>
          <hr>
          <h3>Your Friend's Name: ${this.items.refererName.value}</h3>
          <h4>Your Friend's Email: ${this.items.refererEmail.value}</h4>
          <hr>
          <div style="text-align: center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdx5hO22iygUitr300KN6BiSn2-wcDhN3DyxFJNn4sH1Ru5Tg/viewform" target="_blank" style="text-decoration: none; font-size:16px; text-align: center;">
              <div style="width: 320px; padding: 12px 24px; background: #72BF44; color: #fff; border-radius: 48px; border: solid 1px #0003; text-align: center; letter-spacing: 0.04rem; font-weight: bold">
                Give me free internet!
              </div>
            </a>
          </div>
        `
      })
      this.progress = false
      this.popupOpened = true
      this.initFields()
    }
  },
  mounted () {
    this.initFields()
  }
}

</script>
