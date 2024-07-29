import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia, CardActions, Button } from "@mui/material";
import Container from '@mui/material/Container';

import { projectData } from '../lib/projectsData';

function Projects() {
  return (
    <div className='projects_container min-h-screen flex justify-center items-center'>
      <Container maxWidth="lg">
        <Typography variant='h4' align='center' style={{ marginTop: "100px" }}>
          PROJECTS
        </Typography>

        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          {projectData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 380 }} style={{ padding: "1px", marginBottom: "10px", background: "violet" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140" // Adjust height as needed
                    width="100%" // Ensure full width
                    image={project.image}
                    alt="project image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  {project.live_url && (
                    <Button variant="contained" size="medium" component="a" href={project.live_url} target="_blank">
                      Live
                    </Button>
                  )}
                  <Button variant="contained" size="medium" component="a" href={project.github_url} target="_blank">
                    Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default Projects;
