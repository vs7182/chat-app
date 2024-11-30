import express from"express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import bodyParser from "body-parser";


//routes
import authRoutes from "./routes/AuthRoutes.js";
import contactRoutes from "./routes/ContactRoutes.js";
import messageRoutes from "./routes/MessagesRoutes.js";
import channelRoutes from "./routes/ChannelRoutes.js";
import setupSocket from "./socket.js";





dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const databaseURL = process.env.DATABASE_URL;

app.use(cors({
    origin:[process.env.ORIGIN],
    methods:["GET","POST","PUT","PATCH","DELETE"],
    credentials: true,
})
);

app.use("/uploads/profiles",express.static("uploads/profiles"));
app.use("/uploads/files",express.static("uploads/files"));

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/contacts",contactRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/channel",channelRoutes);

const server = app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});

setupSocket(server);


mongoose.connect(databaseURL).then(()=>console.log("Db connection Success full")).catch((err)=>console.log(err.message));
