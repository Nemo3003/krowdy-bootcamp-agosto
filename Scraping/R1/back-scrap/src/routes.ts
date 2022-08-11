import {Express, Request,Response} from 'express'

export default function(app: Express){
    app.get('/healthcheck', (req: Request, res: Response)=>res.sendStatus(200))

    //Register the user
    //POST/api/user

    //Login the user
    //POST/api/sessions

    //Get user's sessions
    //GET/api/sessions

    //Logout
    //DELETE/api/sessions

    //GET /api/posts /api/posts
}