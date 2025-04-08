# Final Videos Directory

This directory is for storing the final rendered videos for the Cline 3.10.0 release. Each video should be exported in multiple formats for different distribution channels.

## Video Organization

Organize final videos in subdirectories by feature and format:

```
final-videos/
├── chrome-debugging/
│   ├── youtube/
│   ├── twitter/
│   └── website/
├── chrome-agentic/
│   ├── youtube/
│   ├── twitter/
│   └── website/
├── chrome-extraction/
│   ├── youtube/
│   ├── twitter/
│   └── website/
├── drag-drop/
│   ├── youtube/
│   ├── twitter/
│   └── website/
├── yolo-mode/
│   ├── youtube/
│   ├── twitter/
│   └── website/
├── mcp-modal/
│   ├── youtube/
│   ├── twitter/
│   └── website/
└── release-overview/
    ├── youtube/
    ├── twitter/
    └── website/
```

## Export Specifications

### YouTube Format
- **Resolution**: 1920x1080 (Full HD)
- **Frame Rate**: 30fps
- **Format**: MP4 (H.264)
- **Video Bitrate**: 16 Mbps
- **Audio**: AAC, 320 Kbps, 48 kHz, Stereo
- **Color**: Rec. 709
- **Aspect Ratio**: 16:9

### Twitter Format
- **Resolution**: 1280x720 (HD)
- **Frame Rate**: 30fps
- **Format**: MP4 (H.264)
- **Video Bitrate**: 8 Mbps
- **Audio**: AAC, 256 Kbps, 48 kHz, Stereo
- **Maximum Duration**: 2 minutes 20 seconds
- **File Size Limit**: 512 MB

### Website Format
- **Resolution**: 1920x1080 (Full HD)
- **Frame Rate**: 30fps
- **Format**: MP4 (H.264)
- **Video Bitrate**: 8 Mbps (optimized for web streaming)
- **Audio**: AAC, 256 Kbps, 48 kHz, Stereo
- **Optimized For**: Web playback performance

## Naming Convention

Use the following format for final video files:

```
cline-3.10.0-[feature]-[platform]-[date].[extension]
```

Examples:
- `cline-3.10.0-chrome-debugging-youtube-20250408.mp4`
- `cline-3.10.0-yolo-mode-twitter-20250408.mp4`
- `cline-3.10.0-release-overview-website-20250408.mp4`

## Export Checklist

Before finalizing each video, ensure:

- [ ] Correct aspect ratio and resolution
- [ ] Proper color grading applied
- [ ] Audio levels normalized (-14 LUFS for dialogue)
- [ ] Captions/subtitles added where needed
- [ ] Intro and outro included
- [ ] All text elements are legible
- [ ] No unintended artifacts or compression issues
- [ ] File size is appropriate for the platform

## Platform-Specific Considerations

### YouTube
- Include end screens for the last 20 seconds
- Add cards to link to related videos
- Include timestamps in the description for key sections
- Optimize title, description, and tags for SEO

### Twitter
- Keep videos concise (ideally under 2 minutes)
- Ensure text is large enough to read on mobile devices
- Front-load the most important content in the first 10 seconds
- Consider adding burned-in captions for viewers watching without sound

### Website
- Include a poster frame for the video player
- Provide a transcript alongside the video
- Consider adding chapter markers for longer videos
- Ensure videos are responsive and work on all device sizes

## Quality Control Process

1. **Initial Review**: Check the video for technical quality and content accuracy
2. **Peer Review**: Have another team member review the video
3. **Platform Testing**: Test the video on the actual platform where it will be published
4. **Final Approval**: Get final sign-off before public release

## Delivery Schedule

All videos should be finalized and ready for distribution by [DEADLINE DATE].

| Video | Target Completion | Review Date | Release Date |
|-------|-------------------|-------------|--------------|
| Chrome Debugging | [DATE] | [DATE] | [DATE] |
| Chrome Agentic Tasks | [DATE] | [DATE] | [DATE] |
| Chrome Content Extraction | [DATE] | [DATE] | [DATE] |
| Drag and Drop | [DATE] | [DATE] | [DATE] |
| YOLO Mode | [DATE] | [DATE] | [DATE] |
| MCP Modal | [DATE] | [DATE] | [DATE] |
| Release Overview | [DATE] | [DATE] | [DATE] |
