<script setup>
import { useFeladatStore } from '@/stores/feladatok';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const newtitle = ref()
const newdesc = ref()
const newdeadline = ref()

const feladatStore = useFeladatStore()
var ID = feladatStore.feladatok.length
if(feladatStore.feladatok.length == 0)
{
  ID = 1
}

var ujfeladat = {
  id: ID,
  title: newtitle,
  desc: newdesc,
  isFinished: false,
  deadline: newdeadline
}

const vissza = () =>{router.push('/')}
</script>
<template>
    <div class="container">
      <h2>Feladat hozzáadása</h2><br>
  <label for="nev">Neve</label>
    <input type="text" name="nev" id="nev" v-model="newtitle">
    <label for="desc">Leírás</label>
    <input type="text" name="desc" id="desc" v-model="newdesc">
    <label for="deadline">Határidő</label>
    <input type="date" name="deadline" id="deadline" v-model="newdeadline">
    <a class="btn btn-primary m-3" v-on:click="feladatStore.feladatHozzaadas(ujfeladat), vissza()" >Hozzáadás</a>
  </div>
</template>