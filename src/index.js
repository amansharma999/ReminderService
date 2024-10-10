const express = require("express");
const { PORT, REMINDER_BINDING_KEY } = require("./config/serverConfig");
const { createChannel, subscribeMessage } = require("./utils/messageQueue");

const bodyParser = require("body-parser");

const jobs = require("./utils/job");
const TicketController = require("./controllers/ticket-controller");
const EmailService = require("./services/email-service");

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const channel = await createChannel();
  subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);
  app.post("/api/v1/tickets", TicketController.create);

  app.listen(PORT, () => {
    // jobs();
    console.log(`Server is running on port ${PORT}`);
  });
};

setupAndStartServer();
