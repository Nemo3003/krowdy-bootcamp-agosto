import {Router} from 'restify-router'
import {VideoRouter} from './video.routes'


const routerInstance = new Router()
const listOfRoutes = new Router()

listOfRoutes.add('/video', VideoRouter)

routerInstance.add('/api/v1', listOfRoutes)



export default routerInstance