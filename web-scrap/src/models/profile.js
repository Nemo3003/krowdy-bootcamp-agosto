import mongoose from 'mongoose';

/**
 * Here we are defining the schemas for our searchs, this will help us organize the information and
 * retrieve it correctly.
 */

const Experience = new mongoose.Schema(
    {
        title: String,
        company: String,
        location: String,
        date: String
    }
)
const Education = new mongoose.Schema({
    school: String,
    degree: String,
    date: String
})

const GeneralSchema = new mongoose.Schema({
    keywords: String,
    data:[
        {
            contact : [String],
            experience: [Experience],
            education: [Education]
        }
    ]
})

export const Perfiles = mongoose.model('Perfiles', GeneralSchema);