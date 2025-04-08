# MCP Modal Demo Environment

This folder contains a demo environment for showcasing Cline's new MCP Modal feature, which allows users to easily view, enable, or disable connected MCP servers without digging through settings.

## Setup Instructions

1. Ensure you have the latest version of Cline 3.10.0 installed
2. Open Cline in your preferred environment (VSCode, desktop app, etc.)
3. Have several MCP servers configured (see the `mcp-servers` directory for examples)
4. Open Cline and be ready to demonstrate the modal

## Demo Workflow

### MCP Server Management Demo

1. Show the Cline chat interface
2. Explain that previously, managing MCP servers required navigating through settings files or configuration menus
3. Point out the new MCP icon in the chat input area
4. Click the icon to open the MCP modal
5. Show the list of configured MCP servers with their current status
6. Demonstrate toggling servers on and off
7. Show how the changes take effect immediately without restarting Cline
8. Demonstrate using different MCP tools based on which servers are enabled

### Practical Use Case Demo

1. Start with all MCP servers disabled
2. Enable only the code analysis server
3. Ask Cline to analyze some code
4. Then enable the weather server
5. Ask Cline about the weather
6. Show how you can quickly control which tools are available based on your current needs

## Demo Script Outline

1. **Introduction**
   - Explain what MCP servers are and why they're useful
   - Describe the previous process for managing MCP servers
   - Introduce the new MCP modal feature

2. **Modal Demonstration**
   - Show how to access the modal from the chat input area
   - Explain the information displayed in the modal
   - Demonstrate toggling servers on and off

3. **Workflow Improvement**
   - Show how the modal streamlines MCP server management
   - Demonstrate switching between different tool sets for different tasks
   - Highlight the time savings compared to the old method

4. **Benefits Explanation**
   - Discuss how this improves the user experience
   - Explain how it helps manage resource usage by enabling only needed servers
   - Show how it reduces clutter in the interface

5. **Conclusion**
   - Summarize the feature's capabilities
   - Encourage viewers to update to Cline 3.10.0

## Sample MCP Servers

The `mcp-servers` directory contains configuration files for several example MCP servers:

- **Weather Server**: Provides weather information for different locations
- **Code Analysis Server**: Analyzes code for potential issues and improvements
- **Database Connector**: Connects to various databases to execute queries
- **Translation Server**: Translates text between different languages
- **Image Analysis Server**: Analyzes and describes images

These servers are configured to demonstrate how the MCP modal allows you to quickly enable or disable specific functionality based on your current needs.

## Modal Features to Highlight

- Clean, intuitive interface
- Real-time status updates
- Immediate effect when toggling servers
- Server grouping by category
- Search functionality for finding specific servers
- Detailed server information on hover
