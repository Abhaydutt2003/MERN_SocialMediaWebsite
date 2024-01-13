import { Container, Grow, Grid } from "@mui/material";
import { Form, Posts,NavBar } from "./components";
import "./appTheme.css";
import { useEffect, useState } from "react";
import { setAllPostsAction } from "./actions/postActions";
import { store } from "./store";

import {ResGrid} from './styledComp';

const App = () => {
  const [currentId,setCurrentId] = useState(null);
  useEffect(() => {
    (async () => {
      await setAllPostsAction(store)();
    })();
  }, []);

  return (
    <Container maxWidth="lg">
      <NavBar></NavBar>
      <Grow in>
        <Container>
          <ResGrid
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
          </ResGrid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
