# SuperHero Application
This project consists of two parts: a frontend built with Next.js and a backend built with NestJS. The frontend is responsible for displaying and adding superhero data, while the backend provides a RESTful API for managing superheroes.

Prerequisites
Ensure you have the following installed on your system:
---

Node.js (v16 or higher recommended)
NestJS (v9 or higher recommended)

# Getting Started
- Backend Setup (NestJS)
Navigate to the backend directory (superhero-api).

Install backend dependencies:

npm install
Run the backend in development mode:
npm run start:dev
This will start the NestJS server, and the API will be available at http://localhost:8080.

# Available API Endpoints:
Get All SuperHeros: GET http://localhost:8080/superhero
Create a New SuperHero: POST http://localhost:8080/superhero

- Frontend Setup (Next.js)
Navigate to the frontend directory (superhero-client).

Install frontend dependencies:

npm install
Build the frontend:
npm run build
Run the frontend development server:
npm run start
This will start the Next.js server, and you can access the frontend at http://localhost:3000.

Example Frontend Operation (Next.js SuperHero Component)
Once the frontend is running, you can interact with the API to:

View Superheroes: The frontend will display a list of superheroes by fetching data from the backend.
Add a New Superhero: The frontend allows adding new superheroes through a form, which sends data to the backend.
Notes
Frontend will be available at http://localhost:3000.
Backend will be available at http://localhost:8080.
The backend allows CORS requests from http://localhost:3000, enabling seamless communication between frontend and backend during development.
Future Improvements
Add user authentication and authorization for superhero management.
Implement pagination for the GET /superhero endpoint to handle large lists of superheroes.
Enhance validation and error handling in the backend API.
Feel free to contribute to the project or open issues for improvements. 🚀
