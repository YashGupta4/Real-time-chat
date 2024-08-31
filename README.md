
# Real-time Chat Application

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Welcome to the **Real-time Chat Application**! This project is a web-based chat application that allows multiple users to join chat rooms, send and receive messages in real-time. The application is built using modern web technologies including Node.js, Express.js, and Socket.io.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Real-time Communication**: Messages are transmitted instantly between users in the same room.
- **Multiple Chat Rooms**: Users can create or join multiple chat rooms.
- **User Management**: Users can join or leave rooms, and the user list is dynamically updated.
- **Custom Notifications**: Receive notifications when a user joins or leaves the chat.
- **Responsive Design**: The app is fully responsive and works across all devices.

## Demo

Check out the live demo: [Real-time Chat App](https://your-demo-link.com)

[Chat App Screenshot]

![Img_1](https://github.com/user-attachments/assets/36ea2174-4d33-47e1-8077-19fd583b94f0)
![Img_3](https://github.com/user-attachments/assets/f32a7a67-d7a3-45f5-99e1-bf60871d79c0)
![Img_5](https://github.com/user-attachments/assets/20590dc8-47cc-4574-9aa9-666168ce507c)




## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later)

### Steps

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/YashGupta4/Real-time-chat.git
   cd Real-time-chat
   \`\`\`

2. Install the dependencies:

   \`\`\`bash
   npm install
   \`\`\`

3. Run the application:

   \`\`\`bash
   npm start
   \`\`\`

4. Open your browser and go to:

   \`\`\`
   http://localhost:3000
   \`\`\`

## Usage

1. On the homepage, enter your username and choose a chat room to join.
2. Once inside the chat room, you can start sending messages.
3. Messages will appear in the chat window, with your username and the timestamp.
4. You can leave the room by clicking the "Leave Room" button, which will redirect you to the homepage.

## File Structure

Here’s an overview of the key files and directories in this project:

\`\`\`bash
├── public
│   ├── css
│   │   └── style.css          # Custom styles for the chat app
│   ├── js
│   │   └── main.js            # Client-side JavaScript
│   └── index.html             # Entry point for the app
│
├── utils
│   ├── messages.js            # Utility functions for message formatting
│   └── users.js               # Utility functions for user management
│
├── server.js                  # Main server file
├── package.json               # Project dependencies and scripts
└── README.md                  # You are here
\`\`\`

### Key Files:

- **\`server.js\`**: Handles server-side logic, including user connections and message broadcasting.
- **\`main.js\`**: Contains client-side JavaScript to handle user interactions and real-time updates.
- **\`messages.js\`**: Utility functions for formatting messages with usernames and timestamps.
- **\`users.js\`**: Functions for managing users in chat rooms (join, leave, etc.).

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for building the server.
- **Socket.io**: Library for real-time web applications.
- **HTML/CSS/JavaScript**: Core technologies for building the front-end.
- **Moment.js**: Library for formatting dates and times.
- **Qs**: Library for parsing URL query strings.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature/your-feature-name\`).
3. Make your changes and commit them (\`git commit -m 'Add some feature'\`).
4. Push to the branch (\`git push origin feature/your-feature-name\`).
5. Open a pull request.

Please ensure your code adheres to the coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, feel free to reach out:

- **Yash Gupta**
- GitHub: [YashGupta4](https://github.com/YashGupta4)
- Email: your-email@example.com
