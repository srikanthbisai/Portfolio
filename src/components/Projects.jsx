import {projectData} from '../lib/projectsData';
import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia, CardActions, Button } from "@mui/material";
import Container from '@mui/material/Container';

function Projects() {
  return (
    <div className='projects_container min-h-screen'>
      <Container maxWidth="lg">
        <Typography variant='h4' align='center' style={{ marginTop: "100px" }}>
          PROJECTS
        </Typography>

        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          {projectData.map((result, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 320 }} style={{padding:"10px", marginBottom:"10px", background:"gray"}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140" // Adjust height as needed
                    width="100%" // Ensure full width
                    image={result.image}
                    alt="project image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {result.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {result.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button variant="contained" size="medium">
                    Live 
                  </Button>
                  <Button variant="contained" size="medium">
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
