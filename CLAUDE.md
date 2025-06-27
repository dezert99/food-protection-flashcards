# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a NYC Food Protection Certificate flashcard study application designed to help users prepare for the NYC Food Protection Certificate exam. The application contains 75+ flashcards covering complete NYC Food Protection material including food safety, temperature control, sanitation, and regulatory compliance.

## Architecture

The application consists of:

- **index.html**: Main HTML file with embedded React application using CDN libraries (React 18, Tailwind CSS, Babel)
- **remixed-0e6f226e.tsx**: React component source code with TypeScript JSX
- **start_server.py**: Python HTTP server for local development and mobile access
- **start.sh**: Bash script wrapper for starting the Python server

## Key Technical Details

### Frontend Architecture
- **Single-page React application** with embedded JavaScript in HTML
- **3D CSS animations** for card flipping using CSS transforms and perspective
- **Mobile-first responsive design** with touch-friendly interface
- **Keyboard navigation** support (arrow keys for navigation, up/down for flipping)
- **Internationalization** support with TRANSLATIONS object (currently English/Spanish)

### Data Structure
- **FLASHCARD_DATA**: Array of 75+ flashcard objects with "front" and "back" properties
- **Content focus**: NYC Food Protection Certificate exam topics including:
  - Temperature danger zones and food safety temperatures
  - HACCP principles and critical control points
  - Sanitation and cleaning procedures
  - Regulatory requirements and violations
  - Pest control and food storage

### Server Configuration
- **Python HTTP server** on port 8000
- **Local network access** for mobile device testing
- **Automatic IP detection** for cross-device access
- **Static file serving** from current directory

## Development Commands

### Starting the Application
```bash
# Method 1: Use the provided start script
./start.sh

# Method 2: Direct Python execution
python3 start_server.py

# Method 3: Manual server start
python3 -m http.server 8000
```

### File Structure Requirements
- **index.html must exist** in the root directory for the server to start
- **Server serves static files** from the current working directory
- **Mobile access** requires same Wi-Fi network connection

## Navigation Controls

### Keyboard Shortcuts
- **Left/Right arrows**: Navigate between flashcards
- **Up/Down arrows**: Flip current flashcard
- **Click card**: Alternative method to flip

### Mobile Interface
- **Touch-friendly buttons** for navigation
- **Tap card**: Flip functionality
- **Responsive design** adapts to mobile screens

## Content Management

### Flashcard Format
```javascript
{
  "front": "Term or concept (concise)",
  "back": "Definition or explanation (detailed)"
}
```

### Temperature References
- **Danger Zone**: 41°F - 140°F
- **Cold Storage**: ≤41°F (smoked fish ≤38°F)
- **Hot Holding**: ≥140°F
- **Cooking Temperatures**: Vary by food type (140°F-165°F range)

### Critical Food Safety Topics
- **HACCP**: 7-principle system for food safety control
- **Cross-contamination**: Prevention through proper storage and handling
- **Sanitation**: Chemical concentrations and cleaning procedures
- **Regulatory compliance**: NYC Health Code requirements

## Multi-language Support

The application includes translation infrastructure:
- **TRANSLATIONS object** with locale-specific strings
- **Automatic locale detection** from browser settings
- **Fallback to English** for unsupported languages
- **Current support**: English (en-US), Spanish (es-ES)

## Mobile Development

### Testing Setup
1. **Start server** using provided scripts
2. **Connect mobile device** to same Wi-Fi network
3. **Access via IP address** (displayed in server output)
4. **Test touch interactions** and responsive layout

### Cross-device Compatibility
- **Modern browser requirement** for CSS transforms and React
- **Touch event handling** for mobile interactions
- **Responsive breakpoints** for various screen sizes