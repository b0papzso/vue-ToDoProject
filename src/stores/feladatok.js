import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useFeladatStore = defineStore('feladat', () =>{
    'madar', () =>{
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

    return feladatok
}})