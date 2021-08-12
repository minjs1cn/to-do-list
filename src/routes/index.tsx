import List from '../pages/List'
import Detail from '../pages/Detail'
import { RouteProps } from 'react-router-dom'

const routes: RouteProps[] = [
    {
        path: '/',
        component: List
    },
    {
        path: '/detail',
        component: Detail
    }
]

export default routes