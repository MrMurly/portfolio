interface TechniquesProps {
    techniques?: [string]
}

export function Techniques({techniques}: TechniquesProps) {
    return (
        <div className="projectCardTechniques">
                {techniques?.map((data: string) => 
                <div className="technique">{data}</div>
                )}
        </div>       
    )
}