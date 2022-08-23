import mongoose from 'mongoose'

const connectDBProcess = mongoose.createConnection(null)

export {
    connectDBProcess
}
