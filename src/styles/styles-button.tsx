import { styled } from "@mui/system";  

const MyButtonStyled = styled('button')({ //It returns a new component that renders as a <div> but with the specified styles
    color: 'white',
    backgroundColor: '#7e57c2',
    padding: 8,
    borderRadius: 4,
    transition: 'background-color 0.3s', // Add transition for smooth effect
    '&:hover': {
        backgroundColor: '#9575cd',},

  });



export default MyButtonStyled