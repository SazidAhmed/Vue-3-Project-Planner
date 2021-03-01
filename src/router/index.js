import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/website/Home.vue'
import AddProject from '../views/project/AddProject.vue'
import EditProject from '../views/project/EditProject.vue'
import Project  from '../views/project/Project.vue'
import Adminpanel  from '../views/project/Adminpanel.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project',
    name: 'Adminpanel',
    component: Adminpanel,

    children:[
      {
        path: '',
        name: 'Project',
        component: Project
      },
      {
        path: '/add',
        name: 'AddProject',
        component: AddProject
      },
      {
        path: '/projects/:id',
        name: 'EditProject',
        component: EditProject,
        props: true
      },
    ]
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
