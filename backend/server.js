const express = require("express");
const app = express();
const cors = require('cors');

const CompanyWiseQuestion = require('C:/Users/user/Documents/capstone-model/Capstone-model/backend/controller/companyWiseQuestionsRouter.js');


const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

app.use(cors());

app.use(express.json());
mongoose.connect('mongodb+srv://bhumireddysahithi:Lhni2O8IE17l5KTh@cluster0.7vqwofp.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

//const interviewQuestionsRouter = require("./controller/interviewQuestionsRouter");
//const jobBoardRouter = require("./controller/jobBoardRouter");
//const companyWiseQuestionRouter = require("./controller/companyWiseQuestionsRouter");


//app.use("/interviewQuestion", interviewQuestionsRouter);
//app.use("/jobBoard",jobBoardRouter);
//app.use("/companyWiseQuestion",companyWiseQuestionRouter);

app.get('/companyWiseQuestion', async(req, res) => {
    const companyWiseQuestion = await CompanyWiseQuestion.find();
    res.json(companyWiseQuestion);
});



app.listen(3000,async()=>{
    try {
        //await mongoose.connect(process.env.MONGO)
        console.log("Server running on port 3000");
    } catch (error) {
        console.log("Error",error)
    }
});