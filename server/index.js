const express = require("express");
const axios = require("axios");
require('dotenv').config()

const path = require("path");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

const NbaAPI = require("./utils/nba");
const WeatherAPI = require("./utils/weather");

const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = express();

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

  // Answer API requests.
  app.get("/api", (req, res) => {
    res.set("Content-Type", "application/json");
    res.send('Hello from the custom server!');
  });

  //axios call to get the nba data
  app.get("/api/nba", (req, res) => {
    NbaAPI.getNbaData().then(data => {
      res.set("Content-Type", "application/json");
      res.send(data);
    });
  });

  //axios call to get the weather data
  app.get("/api/weather", (req, res) => {
    console.log("weather api called");
    WeatherAPI.getWeatherData(req.query).then(data => {
      res.set("Content-Type", "application/json");
      res.send(data);
    });
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get("*", (request, response) => {
    response.sendFile(
      path.resolve(__dirname, "../react-ui/build", "index.html")
    );
  });

  app.listen(PORT, () => {
    console.error(
      `Node ${
        isDev ? "dev server" : `cluster worker ${process.pid}`
      }: listening on port ${PORT}`
    );
  });
}