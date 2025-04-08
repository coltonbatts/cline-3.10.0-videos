# Chrome Debugging Demo Environment

This folder contains a simple React application with intentional UI and network issues for demonstrating Cline's Chrome debugging capabilities.

## Setup Instructions

1. Ensure you have Node.js installed (v14+ recommended)
2. Open a terminal in this directory
3. Run `npm install` to install dependencies
4. Run `npm start` to start the development server
5. Open Chrome with remote debugging enabled:
   ```
   /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
   ```
6. Navigate to `http://localhost:3000` in Chrome
7. Open Cline and configure it to connect to Chrome

## Intentional Issues

The application has several intentional issues for demonstration:

### UI Issues
- Misaligned components in the dashboard
- Incorrect styling on the button components
- Overflow issues in the data table
- Missing responsive design elements

### Network Issues
- Failed API call to `/api/data` endpoint
- Incorrect authentication header in requests
- Malformed JSON in the response handling
- CORS configuration issues

## Demo Workflow

1. Show the application with visible UI issues
2. Ask Cline to inspect the page and identify UI problems
3. Show Cline's analysis of the DOM elements
4. Ask Cline to check for network-related issues
5. Show Cline identifying the failed API calls
6. Implement Cline's suggested fixes
7. Show the application working correctly after fixes

## Files

- `package.json` - Project dependencies and scripts
- `public/` - Static assets and HTML template
- `src/` - React application source code
  - `App.js` - Main application component with UI issues
  - `api.js` - API calls with intentional errors
  - `components/` - UI components with styling issues
  - `styles/` - CSS files with conflicting styles
