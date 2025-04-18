# Rightly Dividing - Quickstart Guide

Get up and running with the Rightly Dividing KJV Bible Analysis Tool in just a few minutes.

## 📋 What is Rightly Dividing?

A tool for studying and analyzing KJV Bible verses by distinguishing between Kingdom Gospel and Grace Gospel teachings. Inspired by 2 Timothy 2:15 - "rightly dividing the word of truth."

## 🚀 30-Second Start

1. **Open the application**:
   - Run `node server.js` in the rightly-dividing directory, OR
   - Open `public/index.html` directly in your browser

2. **Search for a term**:
   - Type a word like "gospel" or "grace" in the search box
   - Click "Search"

3. **View results**:
   - See verses categorized by Kingdom Gospel and Grace Gospel
   - Click tabs to switch between categories

That's it! You're now using Rightly Dividing.

## 💻 5-Minute Setup Guide

### Option 1: Server Mode (Full Features)

1. **Prerequisites**: 
   - Node.js installed on your computer

2. **Installation**:
   ```bash
   git clone https://github.com/yourusername/rightly-dividing.git
   cd rightly-dividing
   npm install
   ```

3. **Start the server**:
   ```bash
   node server.js
   ```

4. **Access the application**:
   - Open your browser and go to http://localhost:3000

### Option 2: Direct HTML Access (Basic Features)

1. **Download the code**:
   - Download or clone the repository

2. **Open the HTML file**:
   - Navigate to the `public` folder
   - Open `index.html` in any modern browser

## 🔍 Essential Features

### Basic Search

1. Enter a search term in the input box
2. Click "Search" or press Enter
3. View categorized results with highlighted search terms

### Toggle Korean Translation

1. Find the "Show Korean" checkbox under any verse
2. Click to toggle Korean translation display

### Upload Custom Data

1. Prepare a JSON file with your verse classifications
2. Click "Upload" in the Upload KJV File section
3. Select your file and confirm upload

## 📊 Sample Searches to Try

- `gospel` - Find verses about the different gospels
- `kingdom` - See verses about the kingdom
- `grace` - Discover grace-related verses
- `faith` - Compare faith in different contexts

## 🔄 Quick Reference: Categories

**Kingdom Gospel**:
- Jesus' ministry to Israel
- Focused on the kingdom of heaven/God
- Found primarily in Gospels and early Acts

**Grace Gospel**:
- Paul's ministry to Gentiles
- Emphasizes salvation by grace through faith
- Found primarily in Paul's epistles

## 📱 Mobile Usage

The interface is fully responsive. When using on mobile:
- Scroll horizontally to see verse text if needed
- Tap tabs to switch categories
- Turn your device to landscape for a better reading experience

## ❓ Quick Troubleshooting

- **No search results?** Try a different term or check your data file
- **Upload failed?** Ensure your JSON format matches requirements
- **Server won't start?** Check that port 3000 is available

---

Ready for more detailed instructions? See the full [User Manual](MANUAL.md) or [Tutorial](TUTORIAL.md). 