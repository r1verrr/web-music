import MQDiscover from '@/pages/discover'
import MQFriend from '@/pages/firend'
import MQMine from '@/pages/mine'
import MQPlayer from '@/pages/player'

const routes = [
    {
        path:'/',
        exact:true,
        component:MQDiscover
    },
    {
        path:'/',
        exact:true,
        component:MQFriend
    },
    {
        path:'/',
        exact:true,
        component:MQMine
    },
    {
        path:'/',
        exact:true,
        component:MQPlayer
    }
]

export default routes;