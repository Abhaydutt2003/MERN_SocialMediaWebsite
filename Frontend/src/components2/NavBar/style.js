import { AppBar,Typography } from "@mui/material";
import styled from "@emotion/styled";



export const MyAppBar = styled(AppBar)(() => ({
    borderRadius:"15px",
    margin:'30px 0',
    display:'flex',
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"10px 50px"
}));

//Two ways to write the same code
export const MyTypography = styled(Typography)(()=>{
    return{
        color:'rgba(0,183,255,1)',
        textDecoration:'none'
    }
});





