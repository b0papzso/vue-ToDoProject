import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Tasks',
      component: () => import('@/views/TasksView.vue')
    },
    {
      path: '/newtask',
      name: 'New Task',
      component: () => import('@/views/NewTaskView.vue'),
    },
    {
      path: '/edittask/:id',
      name: 'Edit Task',
      component: () => import('@/views/EditTaskView.vue'),
    },
  ],
})

export default router
