import styled from "@emotion/styled";
import {Paper } from "@mui/material";


export const MyPaper = styled(Paper)(()=>{
    return{
        marginTop: "64px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: "16px",
    }
})

