<template>
  <div>
    <app-navigation />
    <nuxt />
  </div>
</template>

<script>
import appNavigation from '~/components/appNavigation.vue'

export default {
  components: {
    appNavigation
  }
}
</script>
