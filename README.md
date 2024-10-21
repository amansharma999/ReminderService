# Reminder Service

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tools and Technologies](#tools-and-technologies)
3. [Setup Instructions](#setup-instructions)
4. [Endpoints](#endpoints)
    - [Create Ticket](#create-ticket)
5. [Database Design](#database-design)
    - [Associations](#associations)
6. [Acknowledgements](#acknowledgements)
7. [Contributing](#contributing)

## Project Overview
This microservice is designed to handle ticket creation and email notifications. It uses Express.js for the server, Sequelize for ORM, and RabbitMQ for message queuing.

## Tools and Technologies
- Node.js
- Express.js
- Sequelize
- RabbitMQ
- Body-parser
- dotenv

## Setup Instructions
1. Clone the repository:
    ```sh
    git clone https://github.com/amansharma999/ReminderService.git
    ```
2. Navigate to the project directory:
    ```sh
    cd ReminderService
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Set up environment variables:
    - Create a .env file in the root directory.
    - Add the following variables:
        ```
        PORT=3004
        EMAIL_ID= <your email id>
        EMAIL_PASS= <your email password> 
        MESSAGE_BROKER_URL='amqp://localhost'
        EXCHANGE_NAME=AIRLINE_BOOKING
        REMINDER_BINDING_KEY=REMINDER_SERVICE
        ```
5. Start the server:
    ```sh
    npm start
    ```

## Endpoints
### Create Ticket
- **URL:** `/api/v1/tickets`
- **Method:** POST
- **Params:**
  - **Body:**
    - `title` (string, required): Title of the ticket.
    - `description` (string, required): Description of the ticket.
    - `email` (string, required): Email address for notification.
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```json
    {
      "message": "Ticket created successfully",
      "ticket": {
        "id": 1,
        "title": "Sample Ticket",
        "description": "This is a sample ticket",
        "email": "example@example.com",
        "createdAt": "2023-10-01T00:00:00.000Z",
        "updatedAt": "2023-10-01T00:00:00.000Z"
      }
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```json
    {
      "message": "Validation error",
      "errors": [
        "Title is required",
        "Description is required",
        "Email is required"
      ]
    }
    ```

## Database Design
### Associations
- A `NotificationTicket` belongs to a `User`.
- A `User` has many `NotificationTickets`.

## Acknowledgements

This project was developed as part of the backend course by Sanket Sir. Special thanks to Sanket Sir for his invaluable guidance and support throughout the course.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top right of this page to create a copy of this repository in your GitHub account.

2. **Clone your fork**: Clone your forked repository to your local machine using the following command:

   ```sh
   git clone https://github.com/your-username/ReminderService.git
   ```

3. **Create a new branch**: Create a new branch for your feature or bugfix:

   ```sh
   git checkout -b feature-or-bugfix-name

   ```

4. **Make your changes**: Make your changes to the codebase.

5. **Commit your changes**: Commit your changes with a descriptive commit message:

   ```sh
   git commit -m "Description of the feature or bugfix"
   ```

6. **Push to your fork**: Push your changes to your forked repository:

   ```sh
   git push origin feature-or-bugfix-name
   ```

7. **Create a Pull Request**: Go to the original repository and create a pull request from your forked repository. Provide a clear description of your changes and why they should be merged.

I will review your pull request and provide feedback. Once approved, your changes will be merged into the main branch.

Thank you for your contributions!