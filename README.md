

# Portfolio Building Project

This project is a personal portfolio website showcasing stories, insights, and visual galleries. The goal is to create an engaging platform for presenting architectural insights, personal stories, and other content in a visually appealing manner.


## Features

- **Home Page**: An introduction to the site, displaying the latest stories and highlights.
- **Story Page**: Each story is detailed with an image, title, content, location, and date of publication.
- **Gallery Page**: A visual gallery showcasing various images related to the stories.
- **About Page**: Information about the site and its creator.

## Technologies Used

- **Frontend**: 
  - React
  - CSS for styling
- **Backend**:
  - Node.js
  - Express
  - MongoDB for database
- **Other Tools**:
  - Axios for making HTTP requests
  - File handling libraries

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Steps

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd portfolio-project
    ```

2. **Install dependencies**:
    ```bash
    npm install
    cd client
    npm install
    cd ..
    ```

3. **Start the backend server**:
    ```bash
    npm start
    ```

4. **Start the frontend development server**:
    ```bash
    cd client
    npm start
    ```

## Usage

- Navigate to `http://localhost:3000` to view the website.
- The homepage features the latest stories.
- Click on a story to view its detailed page.
- Use the gallery and about links to navigate to those sections.

## File Structure

```
portfolio-project/
├── client/                   # Frontend React app
│   ├── public/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── ...
├── models/                   # Mongoose models
│   ├── datas.model.js
│   └── ...
├── routes/                   # Express routes
│   ├── postingDB.js
│   ├── storyRoutes.js
│   └── ...
├── uploads/                  # Directory for uploaded images
├── server.js                 # Express server setup
├── package.json
└── ...
```

## API Endpoints

- **GET /stories**: Fetch all stories
- **POST /localstory**: Add a new story
- **DELETE /stories/:id**: Delete a story by ID


