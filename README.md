# Cline 3.10.0 Video Production Project

This project contains all the resources, scripts, demo environments, and templates needed to produce the 7 videos for the Cline 3.10.0 release.

## Project Structure

```
cline-3.10.0-videos/
├── assets/                  # Visual and audio assets
│   ├── common/              # Shared assets across all videos
│   └── feature-specific/    # Assets organized by feature
├── demo-environments/       # Demo setups for each feature
│   ├── chrome-debugging/    # Web app with debugging setup
│   ├── chrome-agentic/      # Demo for agentic tasks
│   ├── chrome-extraction/   # Demo for content extraction
│   ├── drag-drop/           # Demo for drag and drop feature
│   ├── yolo-mode/           # Demo for YOLO mode
│   ├── mcp-modal/           # Demo for MCP modal
│   └── release-overview/    # Compilation demo
├── premiere-templates/      # Premiere Pro project templates
│   ├── master-template.prproj  # Base template
│   └── feature-templates/   # Feature-specific variations
├── recordings/              # Raw screen recordings
├── scripts/                 # Narration scripts for each video
├── final-videos/            # Rendered output videos
└── project-overview.md      # This file
```

## Video Requirements

The following 7 videos need to be produced for the Cline 3.10.0 release:

1. **Chrome Use Case 1 - Debugging**: Show Cline inspecting elements/network logs in local Chrome.
2. **Chrome Use Case 2 - Agentic Tasks**: Show Cline writing a tweet using an active Twitter session.
3. **Chrome Use Case 3 - Private Content Extraction**: Show Cline scraping/summarizing from a logged-in site.
4. **Drag and Drop**: Show dragging a file/folder into Cline chat.
5. **YOLO Mode**: Show enabling and using the "Approve ALL" mode.
6. **MCP Modal**: Show opening the modal and enabling/disabling an MCP server.
7. **Release Overview**: Montage showcasing the key features of the release.

## Production Workflow

### 1. Pre-Production

- Review the scripts in the `scripts/` directory
- Set up the demo environments in the `demo-environments/` directory
- Prepare the assets needed for each video

### 2. Recording

- Follow the guidelines in `recordings/README.md`
- Use the demo environments to capture all necessary footage
- Organize recordings by feature in the `recordings/` directory

### 3. Editing

- Use the Premiere Pro templates in `premiere-templates/`
- Follow the style guide for consistent branding
- Add text overlays, animations, and transitions as needed
- Use assets from the `assets/` directory

### 4. Post-Production

- Apply color grading and audio normalization
- Add captions and subtitles
- Export in multiple formats as specified in `final-videos/README.md`
- Conduct quality control reviews

### 5. Distribution

- Upload to appropriate platforms (YouTube, Twitter, website)
- Add metadata, descriptions, and tags
- Schedule coordinated release

## Key Features to Highlight

### Chrome Integration

The headline feature of Cline 3.10.0 is the ability to connect directly to a local Chrome browser via remote debugging. This enables:

- Seamless debugging of web applications
- Automation of tasks using existing logged-in sessions
- Access to content behind logins or paywalls

### YOLO Mode

A new option to auto-approve ALL actions for maximum speed and efficiency when running complex tasks.

### Workflow Enhancements

- Drag and drop files/folders directly into the chat
- MCP modal for quick server management
- Under-the-hood improvements (prompt caching, reduced system prompt size)

## Style Guide

- **Color Palette**: See `premiere-templates/video-template-config.json`
- **Typography**: Montserrat for headings, Roboto for body text
- **Logo Usage**: Always use the latest Cline logo from `assets/common/`
- **Tone**: Professional but approachable, focusing on developer productivity
- **Pacing**: Keep videos concise and focused, ideally 2-3 minutes each

## Resources

- **Scripts**: Detailed narration scripts in the `scripts/` directory
- **Assets**: Visual and audio assets in the `assets/` directory
- **Templates**: Premiere Pro templates in the `premiere-templates/` directory
- **Demo Environments**: Working demos in the `demo-environments/` directory

## Timeline

- **Production Start**: April 8, 2025
- **Recording Deadline**: [DATE]
- **Editing Deadline**: [DATE]
- **Review Period**: [DATE RANGE]
- **Final Delivery**: [DATE]
- **Public Release**: [DATE]

## Team

- **Producer**: [NAME]
- **Script Writer**: [NAME]
- **Demo Developer**: [NAME]
- **Screen Recorder**: [NAME]
- **Video Editor**: [NAME]
- **Reviewer**: [NAME]

## Contact

For questions about this project, contact [EMAIL/NAME].
