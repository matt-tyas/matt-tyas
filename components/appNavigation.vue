<template>
    <nav :class="{
      'nav-about--is-active' : (page === 'about'),
      'nav-work--is-active' : (page === 'work'),
      'nav-sketches--is-active' : (page === 'week-sketches'),
      'nav-writing--is-active' : (page === 'writing'),
      'nav-contact--is-active' : (page === 'contact')
    }">
      <transition-group tag="ul" class="mt-nav-list">
        <li v-for="link in link" :key='link.id'>
          <nuxt-link :to="`/${link.url}`" :class="`mt-box ${link.cssClass}`">
            <h1 v-if="link.title" class="mt-title">
              {{link.title}}
            </h1>
            <h2 class="mt-subtitle">
              {{link.subtitle}} 
            </h2>
            <img 
              v-if="link.profileImg" 
              :src="`${link.profileImg}`" 
              alt="A poor quality illustration of Matt Tyas"
              :class="`${link.cssImgClass}`"
            >
            <p class="mt-about-link">{{link.profileLink}}</p>
            <div v-if="link.profileImg" class="mt-intro__image-group"></div>
            <!-- <figure v-if="link.coopImg" class="mt-job">
              <img 
                  v-if="link.coopImg"  
                  :src="`${link.coopImg}`" 
                  alt="Co-op logo" 
                  class="mt-job__logo mt-job__logo--coop"
                >
              <figcaption v-if="link.coopJob">
                {{link.coopJob}}
              </figcaption>
            </figure>
            <figure v-if="link.finestImg" class="mt-job">
              <img 
                  v-if="link.finestImg"  
                  :src="`${link.finestImg}`" 
                  alt="Manchester's Finest logo"
                  class="mt-job__logo mt-job__logo--finest"
                >
              <figcaption v-if="link.finestJob">
                {{link.finestJob}}
              </figcaption>
            </figure> -->

          </nuxt-link>
        </li>
      </transition-group>
    </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['page','link'])
}
</script>
