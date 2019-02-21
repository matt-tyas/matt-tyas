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
            <img 
              v-if="link.workImg" 
              :src="`${link.workImg}`" 
              alt="A poor quality illustration of Matt Tyas with a laptop head"
              :class="`${link.workcssImgClass}`"
            >
            <img 
              v-if="link.sketchImg" 
              :src="`${link.sketchImg}`" 
              alt="A poor quality illustration of Matt Tyas as a pencil"
              :class="`${link.sketchcssImgClass}`"
            >
            <p class="mt-about-link">{{link.profileLink}}</p>
            <div v-if="link.profileImg" class="mt-intro__image-group"></div>
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
