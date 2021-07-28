import React, { memo , Suspense} from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from './router'

import MQAppHeader from '@/components/app-header'
import MQAppFooter from '@/components/app-footer'


export default memo(function App() {
    return (
        <HashRouter>
            <MQAppHeader/>
            <Suspense fallback={<div>page loading</div>}>
                {renderRoutes(routes)}
            </Suspense>
            <MQAppFooter/>
        </HashRouter>
    )
})
