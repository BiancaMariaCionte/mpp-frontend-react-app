import { styled } from "@mui/system";  

const MyComponentButton = styled('div')({ //It returns a new component that renders as a <div> but with the specified styles
    '&:hover': {
        color: 'black', // Change text color on hover
        border: '2px solid lightblue',
    },
  });



export default MyComponentButton