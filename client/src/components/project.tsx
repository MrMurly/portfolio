import { isContentEditable } from "@testing-library/user-event/dist/utils"
import { useEffect, useState } from "react"
import { Techniques } from "./techinques"

interface ProjectProps {
    id: string
}

interface IProject {
    _id: string,
    projectname: string,
    startdate: Date,
    enddate: Date,
    coursecode: string,
    coursename: string,
    techniques: [string],
    shortdescription: string,
    longdescription: string,
    smallimage: string,
    largeimage: string,
    groupsize: number,
    link: string
}
export function Project({id} : ProjectProps) {
    const [content, setContent] = useState<IProject | null>()

    useEffect(() => {
        fetch(`/project/search?id=${id}`).then((res: Response) => 
            res.json().then((data: IProject) => {
                setContent(data);
        }))
    }, [])
    
    return (
        <div className="Project">
            <div className="project__content">
                <h3 className="projectName">{content?.projectname}</h3>
                <p className="projectDescription">{content?.longdescription}</p>
                <p className="projectGroup">Group size: {content?.groupsize}</p>
                <p className="projectDate">{content?.startdate.toString()}</p>
                <a className="projectLink" href={content?.link}>Project page</a>
                <Techniques techniques={content?.techniques}/>
            </div>
            <img src={content?.largeimage} className="projectImage"/>
        </div>    
)}