# Rightly Dividing - Step-by-Step Tutorial

This tutorial will guide you through using the Rightly Dividing KJV Bible Analysis Tool with practical examples. By the end, you'll be able to effectively search for verses, understand their categorization, and utilize all the tool's features.

## Tutorial Overview

We'll cover:
1. Getting Started
2. Your First Search
3. Analyzing Search Results
4. Working with Korean Translations
5. Uploading Your Own Data
6. Advanced Search Techniques

## 1. Getting Started

### Launching the Application

**If using the web server:**
1. Open your terminal or command prompt
2. Navigate to the rightly-dividing directory
3. Run the command: `node server.js`
4. Open your browser and go to http://localhost:3000

**If using direct HTML access:**
1. Navigate to the rightly-dividing directory
2. Open the `public/index.html` file in your browser

### Exploring the Interface

Take a moment to familiarize yourself with the interface:

![Application Interface Description]

- The top section contains the title and introduction
- Below that is the Upload section for loading KJV data
- The Search section contains the input field and search button
- The Results area (initially hidden) will display your search results

## 2. Your First Search

Let's perform a basic search to see how the tool works:

### Example: Searching for "Gospel"

1. In the search box, type the word `gospel`
2. Click the "Search" button (or press Enter)
3. Wait for the results to appear

**What You Should See:**
- A summary showing the total number of verses containing "gospel"
- The number of verses categorized as Kingdom Gospel and Grace Gospel
- Two tabs: "Kingdom Gospel" and "Grace Gospel"
- Several verse cards under each tab containing your search term

For example, under the Kingdom Gospel tab, you might see Matthew 4:23:
> "And Jesus went about all Galilee, teaching in their synagogues, and preaching the **gospel** of the kingdom, and healing all manner of sickness and all manner of disease among the people."

Notice that the word "gospel" is highlighted in the text.

## 3. Analyzing Search Results

Now that you have search results, let's understand what you're seeing:

### Understanding the Categorization

The results are divided into two categories:

**Kingdom Gospel Verses:**
- These verses relate to the gospel that Jesus preached to Israel
- They often mention "the kingdom of heaven" or "the kingdom of God"
- Many are found in the Gospels (particularly Matthew) and early Acts

**Grace Gospel Verses:**
- These verses relate to the gospel revealed to Paul for the Gentiles
- They emphasize salvation by grace through faith
- Many are found in Paul's epistles (Romans, Galatians, Ephesians, etc.)

### Example: Comparing Gospel Types

1. With your "gospel" search results still displayed, click between the "Kingdom Gospel" and "Grace Gospel" tabs
2. Notice the differences in how the gospel is described in each category
3. Pay attention to the different contexts and audiences

**Kingdom Gospel Example (Matthew 9:35):**
> "And Jesus went about all the cities and villages, teaching in their synagogues, and preaching the **gospel** of the kingdom, and healing every sickness and every disease among the people."

**Grace Gospel Example (Galatians 2:7):**
> "But contrariwise, when they saw that the **gospel** of the uncircumcision was committed unto me, as the **gospel** of the circumcision was unto Peter;"

## 4. Working with Korean Translations

Each verse card includes a Korean translation that you can toggle:

### Viewing Korean Translations

1. Find a verse from your search results
2. Look for the "Show Korean" checkbox below the verse text
3. Click the checkbox to display the Korean translation
4. Click again to hide it

This feature is particularly useful for:
- Korean speakers
- Language students
- Comparative study of translations

## 5. Uploading Your Own Data

You can use your own categorized KJV Bible data:

### Preparing Your Data File

Create a JSON file with the following structure:

```json
{
  "verses": [
    {
      "reference": "John 3:16",
      "text": "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
      "koreanText": "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 저를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이니라.",
      "category": "grace"
    },
    {
      "reference": "Matthew 4:17",
      "text": "From that time Jesus began to preach, and to say, Repent: for the kingdom of heaven is at hand.",
      "koreanText": "이때부터 예수께서 비로소 전파하여 가라사대 회개하라 천국이 가까왔느니라 하시더라.",
      "category": "kingdom"
    }
    // Add more verses as needed
  ]
}
```

### Uploading Your File

1. Click the "Upload" button in the Upload KJV File section
2. Select your JSON file from your computer
3. Wait for the confirmation message
4. Try searching with your custom data

## 6. Advanced Search Techniques

To get more from the tool, try these advanced search techniques:

### Searching for Phrases

Try searching for phrases to find specific concepts:
- `kingdom of heaven`
- `grace of God`
- `faith of Christ`

### Reference Searches

You can search for specific Bible references:
- `Romans 3`
- `Matthew 4:23`
- `Ephesians 2:8-9`

### Concept Searches

Try searching for theological concepts to compare how they appear in different gospel contexts:
- `faith`
- `repent`
- `believe`
- `law`
- `salvation`

### Example Analysis: "Faith" Across Gospel Types

1. Search for `faith`
2. Compare how "faith" is discussed in Kingdom Gospel verses vs. Grace Gospel verses
3. Note any differences in context, requirements, or promises

## Practical Exercise: Contrasting Salvation Messages

To truly understand the differences between the Kingdom and Grace gospels, try this exercise:

1. Search for `saved` or `salvation`
2. For each verse, ask:
   - Who is being saved?
   - What are they being saved from?
   - What conditions are given for salvation?
   - What is the timeframe for this salvation?
3. Create a simple table comparing your findings from each gospel category

## Conclusion

You've now learned how to use the Rightly Dividing tool to study the differences between the Kingdom Gospel and Grace Gospel in the KJV Bible. Continue exploring different search terms and verses to deepen your understanding of these distinctions.

Remember the key verse that inspired this tool:

> "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth." - 2 Timothy 2:15 (KJV)

Happy studying! 