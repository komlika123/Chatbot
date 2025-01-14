
# CDP Support Chatbot

## Overview

The **CDP Support Chatbot** is a web-based tool designed to assist users in navigating and troubleshooting various Customer Data Platforms (CDPs) such as Segment, mParticle, Lytics, and Zeotap. It provides an intuitive interface for asking questions and receiving guided support.

## Features

- **Platform Selection:** Choose a specific CDP to get tailored responses.
- **Dynamic Chat Interface:** Real-time interaction with a chatbot that processes user input and provides relevant answers.
- **How-to Guidance:** Step-by-step instructions for common CDP-related tasks.
- **Comparison Functionality:** Highlights differences and similarities between CDPs.

## File Structure

### 1. `index.html`
- Defines the structure of the application.
- Contains elements for the header, platform selector, chat interface, and input container.

### 2. `script.js`
- Handles chatbot logic and user interactions.
- Key functionalities:
  - Platform selection handling.
  - User input processing.
  - Dynamic message addition to the chatbox.
  - Response generation for how-to guides and platform comparisons.

### 3. `style.css`
- Provides the visual styling for the application.
- Key styles:
  - Layout and colors for the header, platform selector, and chat interface.
  - Differentiated message bubbles for users and the bot.
  - Responsive and user-friendly design.

## How to Use

1. **Open the Application:**
   - Open the `index.html` file in a web browser.

2. **Select a Platform:**
   - Use the buttons at the top to filter responses for a specific CDP or choose "All CDPs."

3. **Ask Questions:**
   - Type your query into the input field and press "Send" or hit "Enter."
   - Examples:
     - "How to set up a new source?"
     - "What’s the difference between Segment and Lytics?"

4. **View Responses:**
   - The chatbot will display the relevant answers in the chatbox.

## Technical Details

- **Frontend:** HTML, CSS, JavaScript
- **Chatbot Logic:**
  - Simulates API responses with keyword-based logic.
  - Includes functionality for generating detailed steps and comparisons.

## Future Enhancements

- Add API integration for dynamic and more personalized responses.
- Expand support to additional CDPs.
- Implement user authentication and persistent chat history.

