# Student Management System – Backend

A backend application developed using **Node.js, Express.js, and MongoDB** to manage student records through RESTful APIs.

## Project Overview

The Student Management System provides APIs to perform CRUD (Create, Read, Update, Delete) operations on student records.

It allows users to add new students, retrieve student information, update existing records, and delete student details.

## Technologies Used

- Node.js – JavaScript runtime environment
- Express.js – Backend web framework
- MongoDB Atlas – Cloud database
- Mongoose – MongoDB object modeling
- dotenv – Environment variable management
- CORS – Cross-Origin Resource Sharing
- Postman – API testing
- Git and GitHub – Version control

## Project Structure

```text
Student-Management-System/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── studentController.js
│
├── models/
│   └── Student.js
│
├── routes/
│   └── studentRoutes.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/yugankparashar25cse-byte/Student-Management-System.git
```

### 2. Navigate to the project directory

```bash
cd Student-Management-System
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory.

Add the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Replace the MongoDB connection string with your own MongoDB Atlas connection string.

### 5. Start the server

For development:

```bash
npm run dev
```

For normal execution:

```bash
npm start
```

The backend server runs at:

`http://localhost:5000`

## API Endpoints

Base URL: `http://localhost:5000/api/students`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/` | Add a new student |
| GET | `/` | Retrieve all students |
| GET | `/:id` | Retrieve a student by ID |
| PUT | `/:id` | Update student details |
| DELETE | `/:id` | Delete a student |

## Student Data Fields

- Name
- Roll Number
- Email
- Phone
- Course
- Department
- Year

## API Testing

All API endpoints were tested using the Postman desktop application.

The following operations were tested:

- Creating a student record
- Retrieving all student records
- Retrieving an individual student by ID
- Updating student information
- Deleting a student record

## Database

MongoDB Atlas is used to store student records.

Mongoose schemas define the structure and validation rules for student documents.

## Security

- MongoDB credentials are stored in environment variables.
- The `.env` file is excluded from Git using `.gitignore`.
- The `node_modules` directory is excluded from version control.

## Author

**Yugank Parashar**

B.Tech – Computer Science and Engineering

BML Munjal University

## Repository

https://github.com/yugankparashar25cse-byte/Student-Management-System