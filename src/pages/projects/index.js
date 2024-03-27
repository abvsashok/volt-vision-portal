import React from "react";
import ProjectCard from "./ProjectCard";
import { Box, Grid } from "../../../node_modules/@mui/material/index";
import MainCard from "components/MainCard";


const Projects = () => {

    return <>
        <MainCard title="Projects">
            <Grid container spacing={2}>
                {Array.from({ length: 3 })?.map((_, i) => {
                    return <Grid item xs={4}><ProjectCard item={{
                        title: `Project ${i + 1}`
                    }} /></Grid>
                })}
            </Grid>
        </MainCard>
    </>
}

export default Projects;