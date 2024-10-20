
# PACE in the Classroom

## High-Level Summary

Our project is an educational website designed to simplify and make NASA's PACE satellite data accessible for teachers and students. The website provides a chatbot that answers questions about the PACE mission, along with games, quizzes, and tools that allow easy access to PACE data. The website is structured to help students explore important topics such as ocean color, carbon dioxide exchange, and phytoplankton growth.

This project aims to simplify complex scientific concepts for all age groups, making it easier to learn about oceans and the environment. By presenting the data in an engaging way, we aim to spark interest and improve ocean literacy worldwide.

## Project Demo
https://pace-in-classroom.vercel.app/

## Final Project Repository
[PACE-IN-CLASSROOMs](https://github.com/mrskjha/PACE-IN-CLASSROOMs)

## Project Details

Our project is an interactive website that helps students and teachers learn about NASA's PACE satellite data through various engaging features:

- **AI Chatbot**: Answers questions using NASA's PACE website information, and if needed, integrates ChatGPT for additional help.
- **Puzzle Games**: Make learning fun with games like puzzles and matching pair games.
- **Teacher's Dashboard**: Allows teachers to upload study materials (photos, videos), track students' progress, and manage the learning process.
- **OCI Image Map**: Real-time satellite data from NASA’s Earthdata website, showing key ocean metrics like phytoplankton concentration.
- **AI-Generated Videos**: Explains complex topics through visual, AI-created content.

We’ve categorized the lessons into three groups:
1. **Grades 1-5**: Includes games like puzzles and matching pair games.
2. **Grades 6-8**: Learning lessons with AI-integrated videos, progress-tracking modules, and quizzes.
3. **Grades 9-12**: Advanced real-time images from the PACE satellite, showing data such as ocean currents, chlorophyll concentration, and cloud formations.

### Tech Stack

- **Frontend**: React.js, Three.js, Tailwind CSS
- **Backend**: Express.js, MongoDB, Botpress, Redux
- **AI/ML Tools**: ChatGPT integration, AI-generated videos
- **NASA Data**: NASA Earthdata API

## Use of Artificial Intelligence

Our project incorporates AI in several ways:
- **Chatbot**: Uses AI to answer questions related to NASA’s PACE dataset. If data is unavailable, it uses ChatGPT to find answers.
- **AI Videos**: We created AI-generated videos to explain complex topics, enhancing learning through visual aids.

## Space Agency Data

The website fetches and displays real-time data from the PACE satellite, focusing on ocean-related data:
- **PACE's OCI Image Maps Data**: Displays important environmental metrics.
- **NASA Earth Science Data**: Provides access to critical satellite data, helping students explore oceanic and atmospheric trends.

## References
- [NASA Earth Data](https://earthdata.nasa.gov/)
- [Ocean Explorer](https://oceanexplorer.noaa.gov/)

## Getting Started

To get started with the project, follow the steps below:

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the frontend:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the backend:
   ```bash
   npm run dev
   ```

### Login Credentials

To log in to the teacher's dashboard, you can use the following credentials:

- **Username**: sunny@gmail.com
- **Password**: 123456
