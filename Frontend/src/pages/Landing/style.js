import styled from "@emotion/styled";
import { Grid } from "@mui/material";


export const ResGrid = styled(Grid)(() => ({
    '@media (max-width:600px)': {
        flexDirection:"column-reverse"
    },
}))