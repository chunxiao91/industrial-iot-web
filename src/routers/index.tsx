import React from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'
import routes from '@/config/routes'
import RouteWidthLayout from './routeWithLayout'

const Roots = () => {
    return (
        <Router>
            <Switch>
                {routes.combineRoutes.map((props: any, i: number) => (<RouteWidthLayout key={i} {...props} />))}
            </Switch>
        </Router>
    )
}

export default Roots