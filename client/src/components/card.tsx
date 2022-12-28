interface CardProps {
    id: string
    projectname: string,
    shortdescription: string,
    smallimage: string,
}

export function Card( {id, projectname, shortdescription, smallimage} : CardProps) {
    return (
        <div id={id} className="projectCard">
            <img src={smallimage} className="projectCardImage"/>

            <div className="projectCard__content">
                <h3 className="projectCardName">{projectname}</h3>
                <div className="projectCardDescription">{shortdescription}</div>
            </div>
        </div>
    )
}