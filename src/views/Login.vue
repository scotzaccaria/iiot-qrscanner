<template>
  <div class="login-page">
    <h1>Login</h1>
    <LoginForm @login-success="handleLoginSuccess" />
  </div>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleLoginSuccess() {
    console.log('Login successful')
  router.push('/home')
}
</script>
