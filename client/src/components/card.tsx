interface CardProps {
    id: string
    projectname: string,
    shortdescription: string,
    smallimage: string,
}

export function Card( {id, projectname, shortdescription, smallimage} : CardProps) {
    return (
        <div id={id} className="projectCard">
            <img src={smallimage} className="projectImage"/>

            <div className="projectCard__content">
                <h3 className="projectName">{projectname}</h3>
                <div className="projectDescription">{shortdescription}</div>
            </div>
        </div>
    )
}