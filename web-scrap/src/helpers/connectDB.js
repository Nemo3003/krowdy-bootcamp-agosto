import mongoose from 'mongoose';
import { dataRetrieve } from '../services/database';

export const db = async()=>{
    const connect = await mongoose.connect(dataRetrieve)
    return connect.connection
}