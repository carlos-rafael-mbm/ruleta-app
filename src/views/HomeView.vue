<script setup>
import imagePath from '@/assets/casino-background.jpg'
</script>

<template>
  <v-parallax :src="imagePath" style="height: 100vh; width: 100vw;">
    <div id="home" class="vh-100 row justify-content-center align-items-center">
      <div class="col-12 text-center">
        <v-btn prepend-icon="mdi-poker-chip" class="button" rounded color="#679a50" size="x-large" @click="$router.push({'name': 'game-view'})">Jugar</v-btn>
      </div>
    </div>
  </v-parallax>
</template>

<style lang="scss" scoped>
#home {
  overflow-y: auto;
}
.button {
  border: 3px solid #E75D48;
}
</style>