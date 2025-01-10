<script setup>
import { useFeladatStore } from '@/stores/feladatok';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()
const route = useRoute()
const feladatStore = useFeladatStore()
const feladat = ref(feladatStore.feladatok.find(f => f.id == route.params.id))
const vissza = () =>{router.push('/')}
</script>
<template>
    <div class="container">
      <h2>Feladat módosítása</h2>
  <label for="nev">Neve&nbsp;</label>
    <input type="text" name="nev" id="nev" v-model="feladat.title" class="mt-3 fit-content">
    <br>
    <label for="desc" >Leírás&nbsp;</label>
    <input type="text" name="desc" id="desc" v-model="feladat.desc" class="mt-3 fit-content">
    <br>
    <label for="deadline">Határidő&nbsp;</label>
    <input type="date" name="deadline" id="deadline" v-model="feladat.deadline" class="mt-3 fit-content">
    <br>
    <a class="btn btn-primary mt-3" v-on:click="vissza()">Kész</a>
  </div>
</template>

<style scoped>
</style>