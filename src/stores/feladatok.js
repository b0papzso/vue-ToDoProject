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
            deadline: new Date('January 9, 2025 13:24:00')
        },
        {
            id:"2",
            title: 'Mosogatás',
            desc: "El kell mosogatni a piszkos konyhani eszközöket",
            isFinished: false,
            deadline: new Date('January 9, 2025 13:24:00')
        },
        {
            id:"3",
            title: 'Mosogatás',
            desc: "El kell mosogatni a piszkos konyhani eszközöket",
            isFinished: false,
            deadline: new Date('January 9, 2025 11:24:00')
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