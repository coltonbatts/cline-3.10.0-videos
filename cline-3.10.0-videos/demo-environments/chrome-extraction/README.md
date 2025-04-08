# Chrome Private Content Extraction Demo Environment

This folder contains a demo environment for showcasing Cline's ability to access and process information behind logins or paywalls using the user's existing authenticated Chrome session.

## Setup Instructions

1. Ensure you have Chrome installed
2. Open Chrome with remote debugging enabled:
   ```
   /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
   ```
3. Log in to a premium content site and/or analytics dashboard in Chrome
4. Open Cline and configure it to connect to Chrome

## Demo Workflow

### Premium Content Extraction Demo

1. Show that you're logged into a premium content site in Chrome (e.g., a news site with a paywall)
2. Ask Cline to summarize an article from behind the paywall
3. Show Cline accessing the full content using your existing subscription
4. Show Cline generating a comprehensive summary of the premium content
5. Highlight how this eliminates the need for manual copying and pasting

### Analytics Dashboard Demo

1. Log in to an analytics dashboard or data visualization tool
2. Ask Cline to extract key insights from the dashboard
3. Show Cline analyzing the complex dashboard with charts and data
4. Show Cline generating a report with key insights
5. Highlight how this streamlines data analysis workflows

## Demo Script Outline

1. **Introduction**
   - Explain the limitation of accessing private content with AI assistants
   - Introduce the new Chrome integration feature

2. **Setup Demonstration**
   - Show Chrome running with remote debugging
   - Show logged-in state in premium content site
   - Configure Cline to connect to Chrome

3. **Content Extraction**
   - Ask Cline to summarize a premium article
   - Show Cline accessing the content behind the paywall
   - Review the comprehensive summary

4. **Dashboard Analysis**
   - Show a complex analytics dashboard
   - Ask Cline to extract insights
   - Review the generated report

5. **Benefits Explanation**
   - Highlight time savings
   - Explain how it maintains security (using your existing session)
   - Mention other potential use cases

6. **Conclusion**
   - Summarize the feature's capabilities
   - Encourage viewers to update to Cline 3.10.0

## Required Assets

- Chrome browser logged into premium content site
- Chrome browser logged into analytics dashboard
- Sample premium article to summarize
- Sample dashboard to analyze
- Cline configured to connect to Chrome

## Mock Sites (If Needed)

If you don't have access to actual premium sites or dashboards, this folder contains mock HTML files that simulate:

1. A premium news site with a paywall
2. An analytics dashboard with charts and data

These can be opened locally in Chrome for demonstration purposes.
