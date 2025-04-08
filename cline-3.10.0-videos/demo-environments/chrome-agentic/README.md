# Chrome Agentic Tasks Demo Environment

This folder contains a demo environment for showcasing Cline's ability to leverage existing logged-in sessions in Chrome to automate tasks like writing tweets or updating project boards.

## Setup Instructions

1. Ensure you have Chrome installed
2. Open Chrome with remote debugging enabled:
   ```
   /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
   ```
3. Log in to Twitter (or another social media platform) in Chrome
4. Open Cline and configure it to connect to Chrome

## Demo Workflow

### Twitter Automation Demo

1. Show that you're logged into Twitter in Chrome
2. Ask Cline to help draft a tweet about a new feature
3. Show Cline accessing the tweet composition interface
4. Ask Cline to draft a professional tweet with appropriate hashtags
5. Show the completed tweet ready for posting
6. Optionally, post the tweet (or discard it after the demo)

### Project Management Demo (Alternative)

1. Log in to a project management tool (Jira, Trello, etc.)
2. Ask Cline to help create a new task or update an existing one
3. Show Cline navigating the interface and filling in details
4. Complete the task creation/update

## Demo Script Outline

1. **Introduction**
   - Explain the limitation of sessionless browsing
   - Introduce the new Chrome integration feature

2. **Setup Demonstration**
   - Show Chrome running with remote debugging
   - Show logged-in state in Twitter
   - Configure Cline to connect to Chrome

3. **Task Automation**
   - Ask Cline to draft a tweet about Cline 3.10.0
   - Show Cline accessing the tweet composer
   - Review the drafted tweet

4. **Benefits Explanation**
   - Highlight how this saves time
   - Explain how it maintains security (using your existing session)
   - Mention other potential use cases

5. **Conclusion**
   - Summarize the feature's capabilities
   - Encourage viewers to update to Cline 3.10.0

## Required Assets

- Chrome browser logged into Twitter
- Sample tweet content requirements
- List of alternative web applications for demonstration
- Cline configured to connect to Chrome
