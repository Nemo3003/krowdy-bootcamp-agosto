import {Router} from 'restify-router'
import TikTokController from '../controllers/tiktok.controller'

export const VideoRouter = new Router()
VideoRouter.get('/list', async(req:any, res:any)=> {
    try {
        let data = await TikTokController.getAllVideos(null);
        return res.json({
            apiPath: data
        })

    } catch (error) {
        console.error(error);
    }
})

VideoRouter.post('/save', async(req:any, res:any)=> {
    try {
        let data = await TikTokController.createVideoDocument(req.body.originUrlVideo);
        return res.json({
            newVideo: data
        })
    } catch (error) {
        console.error(error);
    }
})

VideoRouter.post('/process/convert', async(req:any, res:any)=> {
    try {
        res.json({
            apiPath: 'process/convert'
        })
        TikTokController.convertVideoWebmToMp4(req.body?.originUrlVideo)
    } catch (error) {
        console.error(error);
    }
})
VideoRouter.get('/process/concat', async(req:any, res:any)=> {
    try {
        return res.json({
            apiPath: 'process/concat'
        })
    } catch (error) {
        console.error(error);
    }
})
VideoRouter.get('/process/merge', async(req:any, res:any)=> {
    try {
        return res.json({
            apiPath: 'process/merge'
        })
    } catch (error) {
        console.error(error);
    }
})
