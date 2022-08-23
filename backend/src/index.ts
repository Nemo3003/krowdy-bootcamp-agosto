import 'dotenv/config'
import {server} from './service/server'
import {processVideo} from './service/process'

const [portFromArgument] = processVideo

server.listen(portFromArgument, ()=> {
    console.log('Server Available: ', server.name, server.url)
})
// ffmpeg -fflags +genpts -i inputvideo.webm -r 24 inputvideo.mp4
