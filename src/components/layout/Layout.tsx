
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./Layout.css";
import { Container } from "@mui/material";

export function Layout({ children }: any) {
  return (
      <Container maxWidth="lg">                         
    <div className="layout-container"
         data-testid='layout-test-id'>
      <Header moveClasses={[]} />

      {children}

      <Footer />
    </div>
    </Container>
  );
}


//                 <MyComponent>
//                     
//                         
//                         <Typography variant="h5" align="center" color="textSecondary" paragraph>
//                             Hello everyone! This is a my dance app aplication that allows you to watch youtube videos that teach you dances.
//                         </Typography>
//                         <div>
//                             <Grid container spacing={2} justifyContent="center">
//                                 <Grid item>
//                                     <Button variant="contained" color="primary">
//                                         See my photos
//                                     </Button>

//                                 </Grid>
//                                 <Grid item>
//                                 <Button variant="outlined" color="primary">
//                                         Secondary action
//                                     </Button>
//                                 </Grid>
//                                 {/* <Grid item>
//                                 <MyButtonStyled>
//                                         My Button
//                                     </MyButtonStyled>
//                                 </Grid> */}

//                             </Grid>
//                         </div>

//                     </Container>
//                 </MyComponent>
//                 {/* <Container maxWidth="md">
//                     <Grid container spacing={4}>
//                         <Grid item>
//                             <Card >
//                                 <CardMedia  image="https://source.unsplash.com/random"
//                                 title="Image title"/>
//                                 <CardContent >
//                                     <Typography gutterBottom variant="h5">
//                                         Heading
//                                     </Typography>
//                                     <Typography>
//                                         This is a media card. You can use this section to describe the content.
//                                     </Typography>
//                                 </CardContent>
//                                 <CardActions>
//                                     <Button size="small" color="primary" > View</Button> 
//                                     <Button size="small" color="primary" > Edit</Button> 
//                                 </CardActions>
//                             </Card>

//                         </Grid>
//                     </Grid>
//                 </Container> */}
//             </main> */}