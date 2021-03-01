<template>
  <form >
    <input type="text" required placeholder="display name" v-model="displayName">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error"></div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  
}
</script>

<style>

</style>