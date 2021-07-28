import React from 'react';
import { Redirect } from "react-router-dom";

const MQDiscover = React.lazy(() => import("@/pages/discover"));
const MQFriend = React.lazy(() => import("@/pages/firend"));
const MQMine = React.lazy(() => import("@/pages/mine"));
const MQPlayer = React.lazy(() => import("@/pages/player"));

const MQRecmmend = React.lazy(() => import("@/pages/discover/c-pages/recommend"));
const MQRangking = React.lazy(() => import("@/pages/discover/c-pages/ranking"));
const MQSongs = React.lazy(() => import("@/pages/discover/c-pages/songs"));
const MQDjradio = React.lazy(() => import("@/pages/discover/c-pages/djradio"));
const MQArtist = React.lazy(() => import("@/pages/discover/c-pages/artist"));
const MQAlbum = React.lazy(() => import("@/pages/discover/c-pages/album"));

// import MQDiscover from '@/pages/discover'
// import MQFriend from '@/pages/firend'
// import MQMine from '@/pages/mine'
// import MQPlayer from '@/pages/player'

const routes = [
    {
        path:'/',
        exact:true,
        render: () => (
            <Redirect to="/discover" />
        )
    }, 
    {
        path:'/discover',
        component:MQDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                <Redirect to="/discover/recommend"/>
                )
            },
            {
                path: "/discover/recommend",
                component: MQRecmmend
            },
            {
                path: "/discover/ranking",
                component: MQRangking
            },
            {
                path: "/discover/songs",
                component: MQSongs
            },
            {
                path: "/discover/djradio",
                exact: true,
                component: MQDjradio
            },
            {
                path: "/discover/artist",
                component: MQArtist
            },
            {
                path: "/discover/album",
                component: MQAlbum
            }
        ]
    },
    {
        path:'/friend',
        exact:true,
        component:MQFriend
    },
    {
        path:'/mine',
        exact:true,
        component:MQMine
    },
    {
        path:'/player',
        exact:true,
        component:MQPlayer
    }
]

export default routes;