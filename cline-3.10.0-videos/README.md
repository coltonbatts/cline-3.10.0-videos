# Cline 3.10.0 Video Production Environment

This environment contains all the assets, templates, and demo setups needed to produce the 7 videos for the Cline 3.10.0 release.

## Directory Structure

- **assets/** - Visual and audio assets for the videos
  - **common/** - Shared assets across all videos
    - **intro-outro/** - Intro and outro animations
    - **text-overlays/** - Text styles, lower thirds, callouts
    - **transitions/** - Transition effects between scenes
    - **audio/** - Background music, sound effects
  - **feature-specific/** - Assets organized by feature
    - **chrome-debugging/** - Assets for Chrome debugging video
    - **chrome-agentic/** - Assets for Chrome agentic tasks video
    - **chrome-extraction/** - Assets for Chrome content extraction video
    - **drag-drop/** - Assets for drag and drop feature video
    - **yolo-mode/** - Assets for YOLO mode feature video
    - **mcp-modal/** - Assets for MCP modal feature video
    - **release-overview/** - Assets for the release overview video

- **premiere-templates/** - Premiere Pro project templates
  - **master-template.prproj** - Base template with common elements
  - **feature-templates/** - Feature-specific variations

- **demo-environments/** - Demo setups for each feature
  - **chrome-debugging/** - Web app with debugging setup
  - **chrome-agentic/** - Demo for agentic tasks
  - **chrome-extraction/** - Demo for content extraction
  - **drag-drop/** - Demo for drag and drop feature
  - **yolo-mode/** - Demo for YOLO mode
  - **mcp-modal/** - Demo for MCP modal
  - **release-overview/** - Compilation demo

- **scripts/** - Narration scripts for each video
- **recordings/** - Raw screen recordings
- **final-videos/** - Rendered output videos

## Video Requirements

- [ ] `[VIDEO: Chrome Use Case 1 - Debugging]` - Show Cline inspecting elements/network logs in local Chrome.
- [ ] `[VIDEO: Chrome Use Case 2 - Agentic Tasks]` - Show Cline writing a tweet using an active Twitter session.
- [ ] `[VIDEO: Chrome Use Case 3 - Private Content Extraction]` - Show Cline scraping/summarizing from a logged-in site.
- [ ] `[VIDEO: Drag and Drop]` - Show dragging a file/folder into Cline chat.
- [ ] `[VIDEO: YOLO Mode]` - Show enabling and using the "Approve ALL" mode.
- [ ] `[VIDEO: MCP Modal]` - Show opening the modal and enabling/disabling an MCP server.
- [ ] `[VIDEO: Release Overview]` - Montage showcasing the key features of the release.

## Usage Instructions

1. Set up the demo environments according to the instructions in each demo folder
2. Use the Premiere Pro templates as a starting point for each video
3. Record demos using the OBS profile in the assets folder
4. Edit videos in Premiere Pro using the provided templates
5. Render final videos to the final-videos directory
