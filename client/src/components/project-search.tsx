import { Form } from "react-router-dom";

export function ProjectSearch() {
    return(
        <div className="ProjectSearch">
            <Form className="SearchForm">  
                <input className="SearchField" type="text"/>
                <button className="SearchButton">Search</button>
            </Form>
        </div>
    )
}