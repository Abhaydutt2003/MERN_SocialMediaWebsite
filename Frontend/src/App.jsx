import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import someImage from "./images/SomeImage.png";
import { Form, Posts } from "./components/index";
import "./appTheme.css";
import { useEffect } from "react";
import { setAllPostsAction } from "./actions/postActions";
import { store } from "./store";
const App = () => {
  useEffect(() => {
    (async () => {
      let func = setAllPostsAction(store);
      await func();
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
              <Posts></Posts>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
