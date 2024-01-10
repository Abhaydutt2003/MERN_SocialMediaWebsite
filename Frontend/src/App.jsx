import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import someImage from "./images/SomeImage.png";
import { Form, Posts } from "./components/index";
import "./appTheme.css";
import { useEffect, useState } from "react";
import { setAllPostsAction } from "./actions/postActions";
import { store } from "./store";
const App = () => {
  const [currentId,setCurrentId] = useState(null);
  useEffect(() => {
    (async () => {
      await setAllPostsAction(store)();
    })();
  }, []);

  return (
    <Container maxWidth="lg">
      <AppBar
        sx={{ display: "flex", flexDirection: "row" }}
        className="appBar"
        position="static"
        color="inherit"
      >
        <Typography className="heading" variant="h2" align="center">
          Memories
        </Typography>
        <img className="image" src={someImage} alt="memories" height="50"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId = {setCurrentId}></Posts>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Form currentId = {currentId} setCurrentId = {setCurrentId}></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
