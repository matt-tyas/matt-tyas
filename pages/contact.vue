<template>
  <main>
    <section class="mt-box mt-box--contact mt-box--full">
      <h1 class="mt-subtitle mt--inverse">
        Contact
      </h1>
      <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Your Role: <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
      <nuxt-link to="/" class="mt-close">
        <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.0145 1.1132c-8.749 0-15.8416 7.0926-15.8416 15.8416 0 8.749 7.0926 15.8415 15.8416 15.8415 8.749 0 15.8415-7.0926 15.8415-15.8415 0-8.749-7.0926-15.8416-15.8415-15.8416zm8.2068 20.097c1.0912 1.091 1.0912 2.8603 0 3.9518-.5455.5459-1.2606.8183-1.9754.8183-.7154 0-1.4308-.2724-1.976-.8183l-4.2554-4.2557-4.2554 4.2553c-.546.546-1.2607.8184-1.9758.8184-.7147 0-1.4302-.2725-1.9754-.8184-1.0915-1.0911-1.0915-2.8603 0-3.9518l4.255-4.255-4.2553-4.2557c-1.0915-1.0912-1.0915-2.8604 0-3.9516 1.0908-1.0914 2.86-1.0914 3.9515 0l4.2554 4.2554 4.2553-4.2554c1.0912-1.0914 2.8604-1.0914 3.9519 0 1.0911 1.0912 1.0911 2.8604 0 3.9516l-4.2557 4.2557 4.2553 4.2553z" fill="#FFF" fill-rule="nonzero" stroke="#FFF"/>
        </svg>
      </nuxt-link>
    </section>
  </main>
</template>

<style>

</style>
