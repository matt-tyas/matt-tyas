<template>
    <main>
      <section>
        <nuxt-link to="/about" class="mt-box mt-box--about mt-box--link">
          <h1 class="mt-title">
            Matt Tyas
          </h1>
          <h2 class="mt-subtitle">
            Principal designer at Co-op digital. Director at Manchester's Finest.<br> A cartoon of a human.
          </h2>
          <img src="~/assets/matt.svg" alt="" class="mt-portrait">
        </nuxt-link>
      </section>
      <section>
        <nuxt-link to="/week-sketches" class="mt-box mt-box--sketches mt-box--link">
          <h2 class="mt-section-title mt--inverse">
              Week sketches
          </h2>
        </nuxt-link>
      </section>
      <section>
        <nuxt-link to="/writing" class="mt-box mt-box--writing mt-box--link">
          <h2 class="mt-section-title mt--inverse">
              Writing
          </h2>
        </nuxt-link>
      </section>
      <transition name="page-leave" mode="out-in">
        <section>
          <nuxt-link to="/work" class="mt-box mt-box--work mt-box--link">
            <h2 class="mt-section-title mt--inverse">
                What I do
            </h2>
          </nuxt-link>
        </section>
      </transition>
      <section>
        <nuxt-link to="/contact" class="mt-box mt-box--contact mt-box--link">
          <h2 class="mt-section-title mt--inverse">
              Contact me
          </h2>
        </nuxt-link>
      </section>
    </main>
</template>

<style>




</style>
