const express = require("express");
const { PORT } = require("./config/serverConfig");

const bodyParser = require("body-parser");
const { sendBasicEmail } = require("./services/email-service");

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    // sendBasicEmail(
    //   "support@Xcruz.com",
    //   "aman.amansharmademo2000@gmail.com",
    //   "Hello from Xcruz",
    //   "Welcome to Xcruz! We are excited to have you on board."
    // );
    console.log(`Server is running on port ${PORT}`);
  });
};

setupAndStartServer();
