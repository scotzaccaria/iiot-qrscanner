<template>
  <div class="home-page">
    <h1>Benvenuto nella Home Page!</h1>
    <button id="signOut" @click="handleLogout">Sign Out</button>
  </div>
</template>

<script setup>
import { userManager } from '../auth';

async function handleLogout() {
  await userManager.signoutRedirect();
}

</script>
