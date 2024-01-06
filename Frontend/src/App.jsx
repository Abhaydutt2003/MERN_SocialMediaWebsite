import {Container,AppBar,Typography,Grow,Grid} from "@mui/material";

import someImage from './images/SomeImage.png';

import {Form,Posts} from './components/index';

import {stAppBar,stHeading,stImage}from './style';

const App = ()=>{
  return(
    <Container maxWidth = "lg">
      {/* <AppBar position="static" color = "inherit">
        <Typography variant="h2" align="center">Memories</Typography>
        <img src = {someImage} alt = "memories" height = "350"></img>
      </AppBar> */}
      
      <Grow in>
        <Container>
          <Grid container justify = "space-between" alignItems = "stretch" spacing={3}>
            <Grid item xs={12} sm = {7}>
              <Posts></Posts>
            </Grid>
            <Grid item xs = {12} sm = {7}>
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;