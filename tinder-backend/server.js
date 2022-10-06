import express from "express";
import mongoose from "mongoose";
import cards from "./DbCards.js";
import Cors from 'cors';

// App aconfig
const app = express();  //creates an instance 
const port = process.env.PORT || 8001 /// Here our application is goin to listen 
const connection_url =`mongodb+srv://Harshal:Mongodb2002@cluster0.hko7sdd.mongodb.net/tinderdb?retryWrites=true&w=majority`;
const flag = 0;

//middlewares
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(connection_url); /////

//API endpoints
app.get('/',(req, res)=>res.status(200).send("Hello People !!"));

app.post('/tinder/cards', (req, res)=>{
    const dbCards = req.body;  //saves request body in a variable

    cards.create(dbCards, (err,data)=>{   ///// creates our database

        if(err){
            res.status(500).send(err) /// staus(500)-- internal server error
        }
        else{
            res.status(201).send(data) //// status(201) -- success
        }
    })
});

app.get('/tinder/cards', (req, res)=>{
    const dbCards = req.body;

    cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
});

//listener
app.listen(port, () => console.log(`listening on local host: ${port}`));