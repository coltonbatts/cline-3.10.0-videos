# Screen Recordings Directory

This directory is for storing all raw screen recordings used in the Cline 3.10.0 videos. Proper organization and naming of recordings is essential for an efficient editing workflow.

## Recording Organization

Organize recordings in subdirectories by feature:

```
recordings/
├── chrome-debugging/
├── chrome-agentic/
├── chrome-extraction/
├── drag-drop/
├── yolo-mode/
├── mcp-modal/
└── release-overview/
```

## Recording Guidelines

### Technical Specifications

- **Resolution**: 1920x1080 (Full HD)
- **Frame Rate**: 30fps (consistent across all recordings)
- **Format**: MP4 (H.264)
- **Audio**: Include system audio where relevant (e.g., UI sounds)
- **Cursor**: Enable cursor highlighting for better visibility
- **Aspect Ratio**: 16:9 (widescreen)

### Recording Software

- **Recommended**: OBS Studio
- **Alternative**: ScreenFlow (Mac) or Camtasia (Windows)
- **Settings**: Use the OBS profile in the assets directory for consistent quality

### OBS Profile Settings

- **Video Bitrate**: 20,000 Kbps (or higher for complex UI)
- **Audio Bitrate**: 320 Kbps
- **Keyframe Interval**: 2 seconds
- **CPU Usage Preset**: Quality
- **Color Format**: NV12
- **Color Space**: sRGB
- **Color Range**: Full

## Recording Workflow

1. **Prepare the environment**:
   - Clean desktop with minimal distractions
   - Close unnecessary applications
   - Use the demo environments provided for each feature
   - Ensure consistent UI theme (dark mode recommended)

2. **Test before recording**:
   - Practice the workflow to ensure smooth demonstration
   - Check audio levels if recording system sounds
   - Verify screen resolution and window positioning

3. **During recording**:
   - Move mouse deliberately and smoothly
   - Pause briefly when highlighting important elements
   - Maintain a consistent pace
   - Avoid unnecessary scrolling or window resizing

4. **After recording**:
   - Review for quality and completeness
   - Trim start/end if necessary
   - Save with proper naming convention

## Naming Convention

Use the following format for recording files:

```
[feature]-[sequence]-[take]-[date].mp4
```

Examples:
- `chrome-debugging-inspect-elements-take1-20250408.mp4`
- `yolo-mode-refactoring-take2-20250408.mp4`
- `drag-drop-folder-demo-take1-20250408.mp4`

## Recording Checklist

For each feature, ensure you capture:

- [ ] Complete workflow from start to finish
- [ ] Close-ups of important UI elements
- [ ] Before and after states (where applicable)
- [ ] Any error states or edge cases to highlight
- [ ] Transitions between different parts of the workflow

## Special Considerations

### Chrome Integration Videos
- Ensure Chrome is running with remote debugging enabled
- Capture the connection process between Cline and Chrome
- Show split-screen of Cline and Chrome side by side

### YOLO Mode Video
- Capture side-by-side comparison of manual vs. YOLO mode
- Include timer overlay to demonstrate time savings
- Show Git status before and after for safety demonstration

### Drag and Drop Video
- Ensure file explorer and Cline are both visible
- Capture the entire drag motion from source to destination
- Show Cline's response after files are dropped

### MCP Modal Video
- Capture the modal opening and closing animations
- Show toggling multiple servers on and off
- Demonstrate the immediate effect of enabling/disabling servers
