<script setup>
import { useFeladatStore } from '@/stores/feladatok';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const feladatStore = useFeladatStore()
const modosit = (id) =>{router.push('/edittask/' + id)}
const ujfeladat = () =>{router.push('/newtask')}
</script>
<template>
    <div class="d-flex flex-wrap container justify-content-around"></div>
  <div v-for="feladat in feladatStore.feladatok" class="d-flex flex-wrap container justify-content-around">
    <div class="card mt-3 " style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">{{ feladat.title }}</h5>
    <p class="card-text" >Leírás: {{ feladat.desc}}</p>
    <p class="card-text">Állapot: {{ feladat.isFinished ? "Kész" : "Nincs kész" }}</p>
    <p class="card-text">Határidő: {{  feladat.deadline }}</p>
    <a class="btn btn-primary m-3" v-on:click="modosit(feladat.id)">Módosítás</a>
    <a class="btn btn-success m-3" v-on:click="feladatStore.feladatKesz(feladat)">Kész</a>
  </div>
</div>
  </div>
  <div class="hozzaad">
    <button v-on:click="ujfeladat()">+</button>
  </div>
</template>

<style scoped>
.hozzaad
{
  float: left;
}
</style>