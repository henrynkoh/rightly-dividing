# Rightly Dividing - User Manual

This user manual provides detailed instructions for using the Rightly Dividing KJV Bible Analysis Tool. This tool is designed to help Bible students study the distinctions between Kingdom Gospel and Grace Gospel teachings in the King James Version Bible.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Search Functionality](#search-functionality)
3. [Understanding Results](#understanding-results)
4. [Korean Translation Feature](#korean-translation-feature)
5. [Uploading Custom Data](#uploading-custom-data)
6. [Troubleshooting](#troubleshooting)
7. [Keyboard Shortcuts](#keyboard-shortcuts)
8. [Additional Resources](#additional-resources)

## Getting Started

### System Requirements

- A modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Internet connection (for server-based features)

### Accessing the Tool

**Option 1: Web Server**
1. Navigate to the URL where the application is hosted, or
2. Run the local server using Node.js:
   ```
   node server.js
   ```
   Then open your browser to http://localhost:3000

**Option 2: Direct HTML Access**
1. Open the `public/index.html` file directly in your web browser
2. Note that some features (like server-based search) may be limited

### Interface Overview

The interface is divided into several main sections:
- **Header**: Title and introduction
- **Upload Section**: For uploading your KJV data file
- **Search Section**: For entering search terms
- **Results Area**: Displays search results in categorized tabs

## Search Functionality

### Basic Search

1. Enter a word, phrase, or reference in the search box
2. Click the "Search" button or press Enter
3. Results will appear below, categorized by gospel type

### Search Tips

- Searches are **case-insensitive** (e.g., "Grace" and "grace" will yield the same results)
- You can search for:
  - Single words: "kingdom", "grace", "gospel"
  - Phrases: "kingdom of heaven", "faith of Christ"
  - References: "Matthew 4:23", "Romans 3:24"
  - Partial words: "justif" will find "justify", "justified", etc.

### Example Searches

Try these example searches to see how the tool works:
- "gospel" - Find all verses about the gospel
- "kingdom" - See verses related to the kingdom
- "grace" - Locate verses mentioning grace
- "faith" - Find faith-related verses

## Understanding Results

### Results Summary

After a search, you'll see a summary statement showing:
- Total number of verses found
- Number of Kingdom Gospel verses
- Number of Grace Gospel verses

Example: `Found 5 verses containing "gospel" - 3 Kingdom Gospel verses and 2 Grace Gospel verses.`

### Tabbed Categories

Results are organized into two tabs:
1. **Kingdom Gospel**: Verses categorized as part of the Kingdom Gospel message
2. **Grace Gospel**: Verses categorized as part of the Grace Gospel message

Click on each tab to view the corresponding verses.

### Verse Display

Each verse is displayed in a card format showing:
- **Reference**: Book, chapter, and verse(s)
- **Text**: The verse content with search terms highlighted
- **Korean Toggle**: Option to show/hide Korean translation

### Highlighting

Search terms are automatically highlighted in the verse text using red coloring to make them easy to spot.

## Korean Translation Feature

Each verse includes an option to view its Korean translation:

1. Look for the "Show Korean" checkbox below each verse
2. Click the checkbox to display the Korean translation
3. Click again to hide the translation

This feature is useful for:
- Korean speakers
- Comparing translations
- Language study

## Uploading Custom Data

You can upload your own KJV Bible data file with custom categorizations:

### Upload Steps

1. Prepare a JSON file in the [required format](#file-format)
2. Click the "Upload" button in the Upload KJV File section
3. Select your file
4. Wait for confirmation of successful upload

### File Format

Your JSON file must follow this format:

```json
{
  "verses": [
    {
      "reference": "Book Chapter:Verse",
      "text": "KJV verse text...",
      "koreanText": "Korean translation...",
      "category": "kingdom" or "grace"
    },
    // More verses...
  ]
}
```

### Required Fields

Each verse object must include:
- `reference`: The Bible reference (e.g., "John 3:16")
- `text`: The KJV text of the verse
- `category`: Must be either "kingdom" or "grace"
- `koreanText`: (Optional) Korean translation of the verse

### Sample File

A sample data file is included with the application. You can download and modify it as a starting point for your own data file.

## Troubleshooting

### Common Issues

**Search Not Working**
- Check your internet connection
- Ensure the server is running (if using server mode)
- Try refreshing the page

**Upload Errors**
- Verify your JSON file follows the correct format
- Check for syntax errors in your JSON
- Ensure the file is not too large (limit: 10MB)

**Display Problems**
- Try a different browser
- Clear your browser cache
- Check that JavaScript is enabled

### Error Messages

The application displays specific error messages to help you identify issues:
- "Please enter a search term." - The search box is empty
- "Failed to fetch search results" - Server communication problem
- "Please select a file to upload." - No file selected for upload
- "Invalid data format." - The uploaded JSON doesn't match the required format

## Keyboard Shortcuts

For faster navigation, you can use these keyboard shortcuts:
- `Enter` (in search box): Execute search
- `Alt + K`: Switch to Kingdom Gospel tab
- `Alt + G`: Switch to Grace Gospel tab
- `Esc`: Clear current search results

## Additional Resources

For further study on the concept of "rightly dividing" the Bible:

- 2 Timothy 2:15 (KJV): "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth."
- Books on dispensational Bible study methods
- Online resources about Kingdom and Grace gospels

---

For technical support or feedback, please contact the application administrator.

Last updated: April 2025 