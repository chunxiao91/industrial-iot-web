import Login from '@/pages/Login'
import NormalLayout from '@/layouts/normalLayout'
import MainLayout from '@/layouts/mainLayout'
import ProjectDetails from '@/pages/ProjectDetails'

let normalRoutes = [{
    path: '/login',
    component: Login,
}]

let mainRoutes = [
    {
        exact: true,
        path: '/',
        component: ProjectDetails,
    },
]


normalRoutes = normalRoutes.map((r: any) => ({ ...r, layout: NormalLayout }))
mainRoutes = mainRoutes.map((r: any) => ({ ...r, layout: MainLayout }))

export default {
    normalRoutes,
    mainRoutes,
    combineRoutes: [...normalRoutes, ...mainRoutes],
}
