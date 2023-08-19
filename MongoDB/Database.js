import  Express  from "express";
import mongoose from "mongoose";
const app = Express();

const connectionParams = {

    useNewUrlParser: true,
    useUnifiedTopology: true
}

const database = ({connectionParams}) => {

    try {
        mongoose.connect('mongodb+srv://Ajayr:RQrVvn5JHae7w9G1@cluster0.e0eteu3.mongodb.net/mongodb?retryWrites=true&w=majority', connectionParams);
        console.log("Database connected successfully");
    }
    catch(error)
    {
        console.log(error)
    }
}

database(connectionParams);

app.listen(8000, ()=> {
    console.log("Running on 8000")
}
)