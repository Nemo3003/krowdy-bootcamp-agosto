import mongoose from 'mongoose'
import {connectDBProcess } from '../../databases/mongo'

const {Schema} = mongoose

// typeVideo => mp4, webm, avi, mov

const VideoSourcesSchema = new Schema({
    storage:  {type: String, required: true},
    bucket:  {type: String, lowercase: true, required: true},
    urlStorage:  {type: String, required: true, unique: true},
    typeVideo: {type: String, enum: ['mp4', 'webm', 'avi', 'mov']},
    urlStorageMp4: {type: String},
    status: { type: String, enum: ['pending', 'error', 'finished'], required: true},
    oldStatus: { type: String, enum: ['pending', 'error', 'finished']},
    outputPath: {type: String}
}, {
    timestamps: true
})

export default connectDBProcess.model('VideoSources', VideoSourcesSchema)