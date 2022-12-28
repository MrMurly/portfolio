import { NavBar } from "../components/Navigation";
import { ProjectSearch } from "../components/project-search";
import { Projects } from "../components/projects";

export default function Root() {
    return (
        <div className="root">
            <div className="parallax">
                <NavBar/>
                <div className="flexContainer">
                    <div>
                        <h1 className="Name">Gustav Melefors</h1>
                        <div className="introduction">
                            Hello! Welcome to my portfolio, feel free to look around however much you like!
                        </div>
                    </div>
                
                </div>
                <ProjectSearch/>
                <Projects/>
            </div>
        </div>
    )
}