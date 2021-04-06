const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/home", function (req, res) {
  const hData = [
    {
      Player: "Messi",
      Club: "Barcelona",
      Number: "10",
    },
    {
      Player: "Ronaldo",
      Club: "Juventus",
      Number: "7",
    },
    {
      Player: "Hazard",
      Club: "Real Mardrid",
      Number: "7",
    },
    {
      Player: "Neymar",
      Club: "PSG",
      Number: "11",
    },
  ];
  res.send(hData);
});

app.get("/about", function (req, res) {
  const aData = [
    {
      Name: "Stif",
      Age: "34",
      job: "developer",
    },
    {
      Name: "Yonas",
      Age: "40",
      job: "Teacher",
    },
    {
      Name: "Fitsum",
      Age: "30",
      job: "Doctor",
    },
    {
      Name: "Tedros",
      Age: "50",
      job: "Enginer",
    },
  ];
  res.send(aData);
});

app.listen("3001", function () {
  console.log("running");
});
