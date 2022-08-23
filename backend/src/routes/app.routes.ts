//Rout the app


const app = () => {
    //declaring app routes
    const routes = [
        {
            path: '/',
            component: () => import('./pages/Home'),
        }
        ];
        
}

export default app
