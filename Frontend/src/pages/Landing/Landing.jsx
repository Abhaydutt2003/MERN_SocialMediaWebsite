import { ResGrid } from "./style";
import { Grow, Container, Grid } from "@mui/material";
import {Posts} from '../../components2'

const Landing = () => {
  return (
    <Grow in>
      <Container>
        <ResGrid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
            <Grid item xs = {12} sm = {7}>
                <Posts></Posts>
            </Grid>
            <Grid item xs = {12} sm = {5}>
                Form
            </Grid>
        </ResGrid>
      </Container>
    </Grow>
  );
};

export default Landing;
