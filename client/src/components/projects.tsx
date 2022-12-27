import { useEffect, useState } from "react"
import { Card } from "./card"
interface IProject {
    _id: string;
    projectname: string,
    shortdescription: string,
    smallimage: string,
}

export function Projects() {
    const [contents, setContents] = useState<IProject[] | null>([]);

    useEffect(() => {
        fetch('/project').then((res: Response) => res.json().then((data: any) => {
            if(!data) return;

            setContents(data);
        }))
    }, [])

    return (
        <div className="projectList">
            {contents?.map((content) => <Card
                id={content._id}
                projectname={content.projectname}
                shortdescription={content.shortdescription}
                smallimage={content.smallimage}
            />)}

        </div>
    )
}