An interactive web-based storytelling application that generates dynamic, AI-driven stories based on user prompts and choices. Built using the MERN stack with TypeScript, it integrates OpenAI's GPT-4 API to create engaging, branching narratives.

## Features

- AI-generated short stories and interactive adventure scenarios
- User choices influence the direction of the story
- MongoDB storage for saving and resuming story sessions
- RESTful API for managing story interactions
- React frontend

## Tech Stack

### Frontend
- React.js with TypeScript
- Axios for API communication

### Backend
- Node.js with Express.js (TypeScript)
- OpenAI API integration for AI-driven storytelling
- MongoDB with Mongoose for story storage

### Database
- MongoDB (local or cloud-based via MongoDB Atlas)

## Setup Instructions

### Prerequisites
- Node.js (LTS version)
- MongoDB (local installation or Atlas account)
- OpenAI API key

### Installation

1. **Clone the repository**
   ```
   git clone https://github.com/ernraff/storytelling-bot.git
   cd ai-storytelling-bot
   ```

2. **Install dependencies for the backend**
    ```
    cd backend
    npm install
    ```

3. **Set up environment variables**
Create a .env file in the backend directory with the following:
    ```
    OPENAI_API_KEY=your-api-key
    MONGO_URI=your-mongodb-uri
    PORT=5000
    ```

4. **Start the backend server**
    ```
    npm run dev
    ```

5. **Install dependencies for the frontend**
    ```
    cd ../frontend
    npm install
    ```

6. Start the frontend server
    ```
    npm start
    ```

The application should now be running at http://localhost:3000/ with the backend at http://localhost:5000/.

## API Endpoints
| Method | Endpoint |	Description |
|--------|----------|-------------|
|POST	| /api/story | Starts a new story |
|POST	| /api/choice	| Submits a user choice and continues the story |
|GET	| /api/story/:id | Retrieves a saved story |

## Future Enhancements
- User authentication for personalized story tracking
- Multiplayer storytelling with collaborative AI-driven narratives
- Text-to-speech functionality
- Customizable AI storytelling styles (fantasy, sci-fi, horror)
