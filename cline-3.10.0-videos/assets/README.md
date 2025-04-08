# Video Assets Directory

This directory contains all the visual and audio assets needed for the Cline 3.10.0 video production.

## Directory Structure

### Common Assets

The `common` directory contains assets that are shared across all videos:

- **intro-outro/**: Intro and outro animations, including the Cline logo animation
- **text-overlays/**: Text overlay templates and motion graphics
- **transitions/**: Transition effects between scenes
- **audio/**: Background music and sound effects

### Feature-Specific Assets

Each feature has its own directory of specific assets:

- **chrome-debugging/**: Assets for the Chrome debugging video
- **chrome-agentic/**: Assets for the Chrome agentic tasks video
- **chrome-extraction/**: Assets for the Chrome content extraction video
- **drag-drop/**: Assets for the drag and drop feature video
- **yolo-mode/**: Assets for the YOLO mode feature video
- **mcp-modal/**: Assets for the MCP modal feature video
- **release-overview/**: Assets for the release overview video

## Asset Types

### Visual Assets

- **Animations**: Motion graphics, transitions, and animated elements
- **Icons**: Feature icons, UI elements, and symbols
- **Screenshots**: Static images of UI elements and features
- **Overlays**: Text overlays, callouts, and highlights
- **Backgrounds**: Background textures and gradients

### Audio Assets

- **Music**: Background music tracks for different video sections
- **Sound Effects**: UI sounds, transitions, and emphasis effects
- **Narration**: Voice-over recordings (if not using ElevenLabs)

## Asset Naming Convention

Assets follow a consistent naming convention:

```
[feature]-[type]-[description].[extension]
```

Examples:
- `common-intro-logo-animation.mp4`
- `chrome-debugging-screenshot-devtools.png`
- `yolo-mode-icon-warning.svg`
- `common-music-background-loop.mp3`

## Asset Specifications

### Video Assets

- **Resolution**: 1920x1080 (Full HD)
- **Frame Rate**: 30fps
- **Format**: MP4 (H.264)
- **Aspect Ratio**: 16:9

### Image Assets

- **Resolution**: Minimum 1920px on the longest side
- **Format**: PNG (with transparency where needed), JPG, or SVG
- **Color Space**: sRGB

### Audio Assets

- **Format**: WAV or MP3 (320kbps)
- **Sample Rate**: 48kHz
- **Channels**: Stereo

## Usage Guidelines

1. Always use assets from the common directory for shared elements
2. Maintain consistent styling across all videos
3. Use the color palette defined in the Premiere template
4. Ensure all text overlays follow the defined text styles
5. Keep animations consistent with the overall visual language

## Adding New Assets

When adding new assets:

1. Place them in the appropriate directory
2. Follow the naming convention
3. Ensure they meet the specifications
4. Update this README if adding a new asset type

## Third-Party Assets

All third-party assets (stock footage, music, etc.) are licensed for commercial use. License information is stored in the `licenses.md` file in each directory.
