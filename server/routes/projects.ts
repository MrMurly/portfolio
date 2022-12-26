// External Dependencies
import express, { Request, Response } from "express";
import { collections } from "../db/services";
import Project, { IProject } from "../db/models/project";
import { ObjectID } from "bson";

// Global Config
export const projectRoute = express.Router();

projectRoute.use(express.json());

// GET

projectRoute
.get("/", async (_req: Request, res: Response) => {
    try {
        const projects = await(Project.find({}));
        
        res.status(200).send(projects);
    } catch (error: any) {
        res.status(500).send(error.message);
    }   
})
.get("/:id", async (req: Request, res: Response) => {
    const id = req?.query?.id;
    try {
        const project = await Project.findById(id) as IProject;

        if (project) {
            res.status(200).send(project);  
        }
    } catch (error: any) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
})
.get("/:name", async (req: Request, res: Response) => {
    const name = req?.query?.name;

    try {
        const projects = await Project.find({projectname: { $regex : `/${name}/i` }});

        res.status(200).send(projects);
    } catch ( error: any ) {
        res.status(500).send(error.message);
    }
})
// POST
.post("/", async (req: Request, res: Response) => {
    try {
        const newProject = new Project(req.body);   
        const result = await newProject.save();
        result
            ? res.status(201).send(`Successfully created a new game with id ${result._id}`)
            : res.status(500).send("Failed to create a new game.");
    } catch (error: any) {
        console.error(error);
        res.status(400).send(error.message);
    }
})
// PUT
.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedGame: IProject = req.body as IProject;
        const query = { _id: new ObjectID(id) };
      
        const result = await Project.updateOne(query, { $set: updatedGame });

        result
            ? res.status(200).send(`Successfully updated Project with id ${id}`)
            : res.status(304).send(`Project with id: ${id} not updated`);
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
})
// DELETE
.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectID(id) };
        const result = await Project.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed project with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove project with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Project with id ${id} does not exist`);
        }
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});