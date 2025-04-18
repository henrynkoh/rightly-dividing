<<<<<<< HEAD
# Rightly Dividing - KJV Bible Analysis Tool

![Rightly Dividing](https://img.shields.io/badge/Bible-KJV-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)

A web-based tool for studying and analyzing King James Version Bible verses, specifically focused on distinguishing between Kingdom Gospel and Grace Gospel teachings.

## 🌟 Features

- **Search KJV Bible**: Search for specific words or phrases across the entire KJV Bible
- **Categorized Results**: View results categorized by Kingdom Gospel and Grace Gospel
- **Highlight Search Terms**: Automatically highlights search terms in verse text
- **Korean Translations**: Toggle to view Korean translations of verses
- **Upload Custom Data**: Upload your own JSON data file with categorized verses
- **Simple Interface**: Clean, responsive design that works on all devices

## 📋 Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [Data Format](#data-format)
- [Features](#detailed-features)
- [Development](#development)
- [License](#license)

## 🔧 Installation

### Option 1: Run with Node.js

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/rightly-dividing.git
   cd rightly-dividing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

### Option 2: Direct Access

Simply open `public/index.html` in your web browser to use the tool without a server (limited functionality).

## 🚀 Quick Start

1. **Search**: Enter a term like "gospel", "kingdom", or "grace" in the search box and click "Search"
2. **View Results**: Results will be displayed in two tabs - Kingdom Gospel and Grace Gospel
3. **Korean Translation**: Check the "Show Korean" box under each verse to view Korean translations

## 💻 Usage

### Searching

Enter any word or phrase in the search box to find verses containing that term. The tool will:
- Highlight all occurrences of the search term
- Show total number of matches
- Categorize verses by gospel type
- Display references for easy lookup

### Uploading Data

You can upload your own KJV Bible data in JSON format:

1. Click the "Upload" button in the Upload KJV File section
2. Select a JSON file that follows the [required format](#data-format)
3. After successful upload, your data will be used for subsequent searches

## 📄 Data Format

The JSON file for uploading should have the following structure:

```json
{
  "verses": [
    {
      "reference": "Matthew 4:23",
      "text": "And Jesus went about all Galilee, teaching in their synagogues, and preaching the gospel of the kingdom, and healing all manner of sickness and all manner of disease among the people.",
      "koreanText": "예수께서 온 갈릴리에 두루 다니시며 그들의 회당에서 가르치시고 왕국의 복음을 선포하시며 백성 가운데서 모든 질병과 모든 연약함을 고치시니",
      "category": "kingdom"
    },
    {
      "reference": "Romans 3:24",
      "text": "Being justified freely by his grace through the redemption that is in Christ Jesus:",
      "koreanText": "그리스도 예수님 안에 있는 구속을 통해 하나님의 은혜로 값없이 의롭게 되었느니라.",
      "category": "grace"
    }
    // Additional verses...
  ]
}
```

Each verse object must have:
- `reference`: Book, chapter, and verse(s)
- `text`: The KJV text of the verse
- `category`: Either "kingdom" or "grace"
- `koreanText` (optional): Korean translation of the verse

## 🔍 Detailed Features

### Search Functionality
- Case-insensitive search
- Search by words, phrases, or references
- Counts occurrences within each verse

### Categorization
Verses are categorized into two main gospel types:

1. **Kingdom Gospel**
   - Associated with Israel's covenant
   - Focused on earthly kingdom promises
   - Found primarily in Matthew through early Acts

2. **Grace Gospel**
   - Revealed to and through Apostle Paul
   - Focused on heavenly position in Christ
   - Found primarily in Paul's epistles

### Interface
- Responsive design works on desktop and mobile
- Clean, intuitive layout
- Color-coded highlighting
- Error handling for searches and uploads

## 🛠️ Development

### Project Structure

```
rightly-dividing/
├── public/
│   ├── index.html      # Main application HTML
│   └── ... 
├── data/               # Directory for data storage
├── server.js           # Express server implementation
├── package.json        # Project dependencies
└── README.md           # This documentation
```

### Technologies Used

- HTML5, CSS3, JavaScript (ES6+)
- Express.js (for server functionality)
- Node.js (server runtime)

### Future Enhancements

- More detailed categorization of verses
- Advanced search options
- Downloadable results
- User accounts for saved searches

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

> "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth." - 2 Timothy 2:15 (KJV)
=======
# rightly-dividing
>>>>>>> e13688df444570cb01aaee81261cc6207877864d
