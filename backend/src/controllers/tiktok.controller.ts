class TikTokController{
    async getVideoByLink(link: string){
        try {
            const response = await fetch(link);
            const data = await response.json();
            return data;
        } catch (error) {
            throw error
        }
    }
    async getMultipleVideosByLinks(links: string[]){
        try {
            //get videos using links
            const videos = await this.getVideoByLink('')
            return videos
            
        } catch (error) {
            throw error
        }
    }
    async getAllVideos(arrVideos: any[]){
        try {
            //get all videos
            let videos = arrVideos.map(video => {
                return {
                    id: video.id,
                    title: video.title,
                    link: video.link
                }
            })
        }
        catch (error) {
            throw error
            }
    }
    async createVideoDocument(video: any): Promise<any> {
        try {
            //create video document
            const document = await this.getVideoByLink(video.link)
            return document
    }catch(e){
        throw e
    }}
    async convertVideoWebmToMp4(video: any): Promise<any> {
        try {
            //convert video webm to mp4
            const mp4 = await this.getVideoByLink(video.link)
            return mp4

            } catch (e) {
                throw e
                }
    }
}

export default new TikTokController