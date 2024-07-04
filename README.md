# ETH News Aggregator

## Overview

ETH News Aggregator is a web application that aggregates news related to Ethiopia from various sources. It provides categorized news updates and allows users to explore and stay informed about current events in Ethiopia.

The project is built using React for the frontend, Tailwind CSS for styling, and Node.js for the backend.

### Directories

- **front/**: Contains the frontend codebase built with React and Tailwind CSS.
- **back/**: Contains the backend codebase built with Node.js.

## Features

- **News Aggregation**: Fetches news articles from various sources focusing on Ethiopia.
- **Categorization**: Categorizes news by topics such as politics, economy, culture, etc.
- **User Interaction**: Allows users to view, search, and filter news articles.
- **Submit News**: Provides a feature for users to submit news tips or stories.
- **Responsive Design**: Ensures the application is responsive and works well on different devices.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas account (or local MongoDB instance) for backend data storage.

### Backend Setup

1. Navigate to the `back/` directory:
   ```bash
   cd back
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file based on `.env.example` and configure your MongoDB URI and RAPID API google news and other necessary environment variables.

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `front/` directory:
   ```bash
   cd front
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

- Access the application in your browser at `http://localhost:3000/`.
- Explore news categories, read articles, and interact with the news aggregator features.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
