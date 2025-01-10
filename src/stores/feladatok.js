import { ref} from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useFeladatStore = defineStore('feladat', () =>{
    const feladatok = ref([
        {
            id:"1",
            title: 'Mosogatás',
            desc: "El kell mosogatni a piszkos konyhani eszközöket",
            isFinished: false,
            deadline: "2025-01-10"
        },
        {
            id:"2",
            title: 'Szabó házának megvécépapírozása',
            desc: "Vécépapírt dobálni Szabó házára",
            isFinished: false,
            deadline: "2025-01-18"
        },
        {
            id:"3",
            title: 'Vécépapír vásárlás',
            desc: "Eldobálódott az összes vécépapír",
            isFinished: false,
            deadline: "2025-01-19"
        }
    ])
    const feladatHozzaadas = (feladat) =>{
        feladatok.value.push(feladat)
    }

    const feladatKesz = (feladat) =>{
        const index = feladatok.value.indexOf(feladat);
            if (index > -1) {
                feladatok.value.splice(index, 1);
            }
    }
    return {feladatok, feladatHozzaadas, feladatKesz}
})