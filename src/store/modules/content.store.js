/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  browserTabTitle: 'Fast Fibre Internet',
  emailSubject: 'Melbourne’s Fastest Internet',
  emailText: 'Thank you for your interest in Pineapple NET! A member of our team will be in touch shortly.',
  mainNavButtons: ['FAQs', 'Get in Touch'],
  mainNavSectors: ['#faq', '#contact'],
  top: {
    header: 'Refer a Friend and Get a Month For Free',
    text: 'Tell your neighbours that there’s ultra-fast fibre right under their feet, and if your neighbour connects, we’ll thank you both with a month of free internet. All you need to do is promote something you already believe in.',
    button: 'Get Started',
    goto: '#contact'
  },
  info: {
    header: 'It Sounds Better Coming From You',
    text: 'We know our fibre sounds too good to be true. That’s why we’re calling on you. Someone who’s seen Pineapple fibre with their own eyes. Show your neighbours there is better out there, and you’ll enjoy those warm fuzzy feelings when your friends thank you for their new ultra-fast fibre. To sweeten the deal we’ll throw in:',
    offer: [
      {
        blackText: 'If your referral signs up - ',
        greenText: '1-month of free internet'
      }
    ]
  },
  userForm: {
    title: 'Enter your Details and we’ll take care of the rest',
    // messagePlaceholder: 'Enquiry*',
    button: 'Go Lightspeed'
  },
  howToConnect: {
    header: 'Internet You Can Throw Your Reputation Behind',
    text: 'Help Pineapple Net do for your neighbours what we did for you.',
    items: [
      {
        title: 'Bulletproof Reliability',
        text: '99.9% uptime. Our customers have enjoyed years without an outage, fault or hiccup.'
      },
      {
        title: '1000Mbps Speeds',
        text: 'Australia’s fastest residential internet. Based on speeds listed in the ACCC Broadband Performance Data Report'
      },
      {
        title: 'Affordable Prices',
        text: 'Cheaper than the NBN for comparable speeds and a great deal for speeds up to 1000Mbps.'
      }
    ]
  },
  testimonials: {
    header: 'The Social Proof That Melbourne Loves Our Fibre',
    button: 'Get Started',
    goto: '#contact'
  },
  faq: {
    header: 'FAQs About Our Pineapple Net’s Referral Promotion',
    button: 'Get in Touch',
    goto: '#contact',
    items: [
      {
        question: 'Will Connecting My Neighbours Congest The Network and Slow Down My Speeds?',
        answer: 'No.<br>Powered by DGtek fibre, we have enough bandwidth to cover your building or neighbourhood several times over. This technology was built for speeds up to 10Gbps. That’s 10x faster than our current fastest speeds. In short, there is no way that your neighbours joining will affect your speeds.<br>DGtek owns the infrastructure all the way back to Melbourne’s data centre. Unlike the NBN’s RSP, Pineapple Net doesn’t pay for a pool of artificially limited capacity that everyone shares.<br>We have full access to all the bandwidth on the network and because it is an end-to-end fibre network, that’s a massive excess of bandwidth. There is no congestion, ever.'
      },
      {
        question: 'What Counts As A Referral?',
        answer: 'We recommend referring your neighbours because the person you refer needs to be in our network coverage area for the referral to count.<br>If you’re in an apartment building,  then everyone in your building can get Pineapple fibre, however, suburbs are more complicated. DGtek is expanding its network quickly, but there will be locations where fibre is available at one end of the street but hasn’t yet crossed the road.'
      },
      {
        question: 'How Does The Month Of Free Internet Work?',
        answer: 'It’s easy - enter your details and leave us with your neighbour’s email, so Pineapple can email the offer to your neighbour letting them know that you’ve generously gifted them a month of FREE internet.<br>Then once they’re connected to any of our fibre internet plans, we’ll make sure their first month is free, and that your bill will be $0 for the next billing cycle.'
      }
    ]
  },
  footer: {
    topHead: 'READY TO GET STARTED?',
    topText: 'Leave your inquiry and we\'ll get back to you within 24 hours on business days'
  }
}

const getters = {
  editorEndpoint: (state, getters, rootState) => `${rootState.host}/content`
}

const mutations = {
  //
}

const actions = {
  async GET_DATA ({ getters, commit }) {
    return true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
