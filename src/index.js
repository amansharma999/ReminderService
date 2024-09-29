const express = require("express");
const { PORT } = require("./config/serverConfig");

const bodyParser = require("body-parser");
// const { sendBasicEmail } = require("./services/email-service");
const jobs = require("./utils/job");
const TicketController = require("./controllers/ticket-controller");

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.create);

  app.listen(PORT, () => {
    jobs();
    console.log(`Server is running on port ${PORT}`);
  });
};

setupAndStartServer();
