//the only proper way to use styled mui components is by using styled utility
//will write all the styled components in this file
import styled from "@emotion/styled";
import { Grid } from "@mui/material";


export const ResGrid = styled(Grid)(() => ({
    '@media (max-width:600px)': {
        flexDirection:"column-reverse"
    },
}))