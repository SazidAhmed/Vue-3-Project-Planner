<template>
  <form>
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error"></div>
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  
}
</script>

<style>

</style>