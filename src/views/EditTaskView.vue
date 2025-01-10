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
    <div class="d-flex flex-wrap container justify-content-around">
  <label for="nev">Neve</label>
    <input type="text" name="nev" id="nev" v-model="feladat.title">
    <label for="desc">Leírás</label>
    <input type="text" name="desc" id="desc" v-model="feladat.desc">
    <label for="deadline">Határidő</label>
    <input type="date" name="deadline" id="deadline" v-model="feladat.deadline">
    <a class="btn btn-primary m-3" v-on:click="vissza()">Kész</a>
  </div>
</template>