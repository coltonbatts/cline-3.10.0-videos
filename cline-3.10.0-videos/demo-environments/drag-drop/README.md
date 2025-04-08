# Drag and Drop Demo Environment

This folder contains a demo environment for showcasing Cline's ability to accept files and folders via drag and drop directly into the chat interface.

## Setup Instructions

1. Ensure you have the latest version of Cline 3.10.0 installed
2. Open Cline in your preferred environment (VSCode, desktop app, etc.)
3. Have this demo folder open and ready for the demonstration

## Demo Workflow

### Single File Drag and Drop Demo

1. Show the Cline chat interface
2. Explain that previously, adding file content required manual copying or using specific commands
3. Select a CSS file from the `sample-files` directory
4. Drag the file into the Cline chat interface
5. Show how the file content is immediately added to the chat
6. Ask Cline to optimize or analyze the CSS
7. Show Cline's response working with the dragged file content

### Folder Drag and Drop Demo

1. Show a more complex example with the `sample-component` folder
2. Drag the entire folder into the Cline chat
3. Show how Cline now has access to the entire folder structure and all files
4. Ask Cline to refactor or analyze the component
5. Show Cline's comprehensive response that considers all files in the component

### Multiple Files Demo

1. Select multiple unrelated files (e.g., a JavaScript file, a JSON config, and a README)
2. Drag all selected files into the chat at once
3. Show how Cline can work with all the files together
4. Ask Cline to analyze the files or suggest improvements
5. Show Cline's response that considers the relationships between the files

## Demo Script Outline

1. **Introduction**
   - Explain the previous limitations of adding file context to Cline
   - Introduce the new drag and drop feature

2. **Single File Demonstration**
   - Show dragging a CSS file
   - Demonstrate Cline working with the file

3. **Folder Demonstration**
   - Show dragging a component folder
   - Demonstrate Cline working with multiple related files

4. **Multiple Files Demonstration**
   - Show dragging multiple unrelated files
   - Demonstrate Cline understanding the context across files

5. **Benefits Explanation**
   - Highlight time savings
   - Explain how this improves context building
   - Mention support for various file types

6. **Conclusion**
   - Summarize the feature's capabilities
   - Encourage viewers to update to Cline 3.10.0

## Sample Files Included

The `sample-files` directory contains various file types for demonstration:

- CSS files with styling issues to optimize
- JavaScript files with potential improvements
- JSON configuration files
- Markdown documentation files
- HTML templates

The `sample-component` directory contains a complete React component with multiple files:

- Component JavaScript file
- Styling files
- Test files
- Documentation

These files are designed to showcase Cline's ability to work with different file types and understand the relationships between files in a component.
