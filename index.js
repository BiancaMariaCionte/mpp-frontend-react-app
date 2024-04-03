import express from 'express';
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req,res) =>{
    res.send("Hi");
} );

const start = async() =>{
    try{
        app.listen(PORT, () =>{
           console.log( "${PORT} Yes I am");
        }); 

    }catch(error)
    {
        console.log(error);
    }
};
