//makeStyle is no longer supported and is deprecated
import styled from "@emotion/styled";
import { Typography,AppBar } from "@mui/material";


export const stAppBar = styled(AppBar)(() => ({
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const stHeading = styled(Typography)(()=>({
    color:'rgba(0,183,255, 1)',
}));

export const stImage = styled('img')(()=>({
    marginLeft:'15px'
}));







