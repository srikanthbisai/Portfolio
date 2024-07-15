import { educationData } from "../lib/projectsData";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Button,
  CardActions,
} from "@mui/material";
import Container from "@mui/material/Container";

function Education() {
  return (
    <div className="projects_container min-h-screen">
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" style={{ marginTop: "100px" }}>
          Education
        </Typography>

        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          {educationData.map((result, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{ maxWidth: 320 }}
                style={{ padding: "10px", marginBottom: "10px" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140" // Adjust height as needed
                    width="100%" // Ensure full width
                    image={result.image}
                    alt="project image"
                    style={{ borderRadius: "5px" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {result.institution}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {result.degree}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {result.major}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {result.year}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Education;
