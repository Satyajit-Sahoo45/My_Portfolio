// xtLQ4geWJhU15JVq

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const alert = require("alert");

const app = express();

app.use(cors());
app.use(express.json());

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect(
        "mongodb+srv://portfolioUser:xtLQ4geWJhU15JVq@cluster0.ochnh.mongodb.net/responseDB"
    );
}

const responseSchema = {
    name:{
        type: String,
        require: true
    },
    contact: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
};


const Response = new mongoose.model("Response", responseSchema);

app.get("/portfolio/contactResponse", (req, res) => {
    Response.find((err, getData) => {
        if (!err) {
            res.send(getData);
        }
        else {
            res.send(err);
        }
    });
});

app.post("/portfolio/contactResponse", (req, res) => {
    if (
        !req.body.name ||
        !req.body.contact ||
        !req.body.email ||
        !req.body.subject ||
        !req.body.message
    ) {
        alert("please fill all the field!!!");
    }
    else {
        const data = req.body;
        // console.log(data);
        Response.create(data, (err) => {
          if (!err) {
            res.send(data);
          } else {
            res.send(err);
          }
        });
    }
});

app.listen(9000, function () {
    console.log("successfully running at 9000");
});