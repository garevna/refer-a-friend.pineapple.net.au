<template>
  <v-app class="homefone">
    <v-container fluid class="homefone">
      <AppHeader :page.sync="page"/>
      <v-sheet
        width="100%"
        max-width="1440"
        color="homefone"
        tile
        class="mx-auto"
      >
        <Top :page.sync="page" />
      </v-sheet>

      <!-- ============================= USER CONTACT ============================= -->

      <section id="contact" style="width: 100%">
        <div class="base-title">
          <a href="#contact" class="core-goto"></a>

          <v-sheet
              width="100%"
              max-width="1440"
              color="homefone"
              tile
              class="mx-auto"
          >
            <v-row align="center" justify="center" class="pa-0 my-12">
              <v-col cols="12" md="6" class="aside-col">
                <Aside />
              </v-col>
              <v-col cols="12" md="6" class="mx-0 px-0">
                <v-card
                      flat
                      class="user-contact transparent mx-auto pa-0"
                      style="margin-bottom: 80px"
                >
                  <UserContact />
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </div>
      </section>

      <!-- ============================= HOW TO CONNECT ============================= -->
      <v-row width="100%">
        <section id="how-to-connect" style="width: 100%">
          <div class="base-title">
            <a href="#how-to-connect" class="core-goto"></a>
            <HowToConnect :page.sync="page" />
          </div>
        </section>
      </v-row>
      <!-- ============================= INTERNET PLANS ============================= -->
      <v-row width="100%" justify="center">
        <section id="plans">
          <div class="base-title">
            <a href="#plans" class="core-goto"></a>
            <InternetPlans :page.sync="page"/>
          </div>
        </section>
      </v-row>
      <!-- ============================= TESTIMONIALS ============================= -->
      <v-row width="100%">
        <section id="testimonials" style="width: 100%">
          <div class="base-title">
            <a href="#testimonials" class="core-goto"></a>
            <Testimonials :page.sync="page"/>
          </div>
        </section>
      </v-row>
      <!-- ============================= FAQ ============================= -->
      <v-row width="100%">
        <section id="faq" style="width: 100%">
          <div class="base-title">
            <a href="#faq" class="core-goto"></a>
            <FAQ :page.sync="page"/>
          </div>
        </section>
      </v-row>
      <!-- ============================= FOOTER ============================= -->
      <section id="footer" class="homefone">
        <div class="base-title">
          <a href="#footer" class="core-goto"></a>
            <v-row width="100%">
              <Footer :page.sync="page" :user.sync="user" />
            </v-row>
        </div>
      </section>
    </v-container>
  </v-app>
</template>

<style lang="scss">

html, body {
  width: 100%;
  max-width: 100%;
  font-family: Gilroy;
}

.container,
.container--fluid,
.container.fill-height {
  padding: 0!important;
}
.container.fill-height > .row {
  max-width: 100%!important;
}

h1, h2, h3, h4, h5 {
  white-space: normal;
  word-break: normal;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #000;
  font-family: Gilroy;
}
h1 {
  font-size: 46px;
}
h2 {
  font-size: 32px;
  text-align: center;
  width: 150%;
}
h3 {
  font-size: 28px;
}
h4 {
  font-size: 24px;
}
h5 {
  font-size: 20px;
}
h4, h5 {
  font-weight: 600;
}

p {
  font-size: 16px;
  font-weight: normal;
  line-height: 180%;
  letter-spacing: 0.02em;
}

.row {
  margin-left: 0!important;
  margin-right: 0!important;
}

svg.defs-only {
  display: block;
  position: absolute;
  height: 0;
  width: 0;
  margin: 0;
  padding: 0;
  border: none;
  overflow: hidden;
}

.user-contact {
  width: 640px;
}
.submit-button {
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 16px!important;
  line-height: 100%;
  text-transform: uppercase;
  width: 340px;
}

@media (max-width: 600px), (max-height: 600px) {
  h1 { font-size: 28px; }
  h2 { font-size: 24px; }
  h3 { font-size: 20px; }
  h4, h5 {
    font-size: 18px;
  }
  p { font-size: 16px; }
  .user-contact {
    width: 480px;
  }
  .submit-button {
    font-size: 14px!important;
  }
}

@media (max-width: 400px), (max-height: 400px) {
  h1 { font-size: 26px; }
  h2 { font-size: 24px; }
  h3 { font-size: 20px; }
  h4, h5 {
    font-size: 16px;
  }
  p {
    font-size: 14px!important;
    width: 100%!important;
  }
  .user-contact {
    width: 300px;
  }
  .submit-button {
    font-size: 13px!important;
    width: 100%!important;
    border-radius: 8px!important;
  }
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #20731C;
}
::-webkit-scrollbar-thumb {
  background: #4CAF50;
}
::-webkit-scrollbar-thumb:hover {
  background: #72BF44;
}

</style>

<script>

import { mapState } from 'vuex'

import AppHeader from '@/components/AppHeader.vue'
import Top from '@/components/Top.vue'
import Aside from '@/components/Aside.vue'
import UserContact from '@/components/UserContact.vue'
import HowToConnect from '@/components/HowToConnect.vue'
import Testimonials from '@/components/Testimonials.vue'
import InternetPlans from '@/components/InternetPlans.vue'
import FAQ from '@/components/FAQ.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    Top,
    Aside,
    UserContact,
    HowToConnect,
    Testimonials,
    InternetPlans,
    FAQ,
    Footer
  },
  data () {
    return {
      page: null,
      user: {
        name: '',
        email: '',
        phone: ''
      },
      plans: false
    }
  },
  computed: {
    ...mapState(['viewport', 'viewportWidth', 'pages', 'selectors'])
  },
  watch: {
    page (val) {
      if (!val) return
      this.$vuetify.goTo(val, {
        duration: 500,
        offset: 20,
        easing: 'easeInOutCubic'
      })
      this.page = undefined
    }
  },
  methods: {
    onResize () {
      this.$store.commit('CHANGE_VIEWPORT')
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  }
}
</script>
