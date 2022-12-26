import mongoose, { Schema, Document, Date, ObjectId } from "mongoose";

// projektnamn, projekt-id-nummer, startdatum, slutdatum, kurskod, kursnamn, kurspoäng, använda tekniker, kort beskrivning, lång beskrivning, 
// liten och stor bild, gruppstorlek och en länk projektsida. Projektnamn och projekt-id är obligatoriska, övriga fält kan lämnas tomma.
 
export interface IProject {
    projectname: string,
    startdate: Date,
    enddate: Date,
    coursecode: string,
    coursename: string,
    techniques: [],
    shortdescription: string,
    longdescription: string,
    smallimage: string,
    largeimage: string,
    groupsize: number,
    link: string
}

const ProjectSchema = new Schema({
    projectname: { type: String, required: true },
    startdate: { type: Date },
    enddate: { type: Date },
    coursecode: { type: String },
    coursename: { type: String },
    techniques: [String],
    shortdescription: { type: String },
    longdescription: { type: String },
    smallimage: { type: String },
    largeimage: { type: String },
    groupsize: { type: Number },
    link: { type: String }
})

export default mongoose.model<IProject>('Project', ProjectSchema)