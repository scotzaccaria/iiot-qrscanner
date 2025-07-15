<template>
  <div>Logging in...</div>
</template>

<script setup>
import { onMounted } from 'vue';
import { userManager } from '../auth';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(async () => {
  try {
    await userManager.signinRedirectCallback();    
    router.push('/home');
  } catch (err) {
    console.error('Login callback error:', err);
  }
});
</script>
