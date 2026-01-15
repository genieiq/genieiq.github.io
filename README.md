# GenieIQ English Composition Practice System

A comprehensive web-based English composition and creative writing practice system with built-in PSLE Paper 2 preparation and evaluation features.

## Features

### 1. **Practice Writing**
- Interactive composition practice with topic selection
- Random writing prompt generator
- Real-time word and character counting
- Automated assessment with detailed feedback
- Scoring across multiple criteria:
  - Content & Organization
  - Language Use
  - Creativity
- Personalized improvement suggestions

### 2. **Mock Test Generator**
- Generate mock tests with customizable parameters:
  - Random questions
  - Topic-based selection (Comprehension, Grammar, Composition, Visual Text)
  - Past year paper simulation (2020-2023)
- Built-in timer to track test duration
- Automatic grading with detailed answer review
- Comprehensive explanations for each question

### 3. **Past Questions Database**
- 15+ curated PSLE past-year questions across multiple topics
- Detailed explanations for correct answers
- Filter questions by:
  - Year (2020-2023)
  - Topic (Comprehension, Grammar & Vocabulary, Composition, Visual Text)
- Organized display with visual badges

### 4. **Custom Questions**
- Add your own questions to the database
- Support for open-ended and multiple-choice questions
- Requires:
  - Question text
  - Topic classification
  - Correct answer
  - Detailed explanation
  - Optional year tag
- LocalStorage persistence for custom questions
- Delete functionality for managing custom questions

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Storage**: Browser LocalStorage for custom questions
- **Design**: Responsive design with gradient styling
- **No dependencies**: Pure web technologies, works offline

## Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/genieiq/genieiq.github.io.git
   cd genieiq.github.io
   ```

2. Serve the files using any web server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

### GitHub Pages Deployment

The site is automatically deployed via GitHub Pages and accessible at:
```
https://genieiq.github.io
```

## File Structure

```
genieiq.github.io/
├── index.html          # Main HTML structure
├── styles.css          # Stylesheet with responsive design
├── data.js            # PSLE questions database and helper functions
├── app.js             # Main application logic
├── README.md          # Documentation
├── LICENSE            # License file
└── .gitignore         # Git ignore rules
```

## Usage Guide

### For Students

1. **Practice Writing**:
   - Select a topic or generate a random prompt
   - Write your composition in the text area
   - Submit for instant assessment and feedback
   - Review suggestions for improvement

2. **Take Mock Tests**:
   - Choose test type (random, topic-based, or past year)
   - Select number of questions (5-20)
   - Complete the test within your own time
   - Review answers with detailed explanations

3. **Browse Past Questions**:
   - Filter by year or topic to focus on specific areas
   - Study questions with complete explanations
   - Understand the reasoning behind correct answers

4. **Add Custom Questions**:
   - Create personalized practice questions
   - Share questions with classmates by exporting data
   - Build your own question bank

### For Teachers/Parents

1. **Monitor Progress**:
   - Review assessment results
   - Track improvement suggestions
   - Identify weak areas

2. **Customize Learning**:
   - Add targeted questions for specific topics
   - Create custom mock tests
   - Provide personalized explanations

## Assessment Algorithm

The composition assessment uses the following criteria:

- **Content Score**: Based on word count, structure, and idea development
- **Language Score**: Evaluates sentence variety and vocabulary richness
- **Creativity Score**: Measures vocabulary diversity and original expression
- **Overall Score**: Weighted average of all criteria (max 100%)

## Browser Compatibility

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## Privacy & Data

- All custom questions are stored locally in your browser
- No data is sent to external servers
- Past-year questions are embedded in the application
- Assessment is performed client-side

## Contributing

Contributions are welcome! To add more PSLE questions:

1. Fork the repository
2. Edit `data.js` to add questions to `psleQuestionsDB`
3. Follow the existing question format:
   ```javascript
   {
       id: number,
       year: "YYYY",
       topic: "comprehension|grammar|composition|visual-text",
       question: "Question text",
       type: "multiple-choice|open-ended",
       options: ["Option 1", "Option 2", ...], // for multiple-choice
       correctAnswer: index or text,
       explanation: "Detailed explanation"
   }
   ```
4. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues, questions, or suggestions:
- Open an issue on [GitHub](https://github.com/genieiq/genieiq.github.io/issues)
- Contact the development team

## Future Enhancements

- AI-powered composition feedback
- More comprehensive grammar checking
- Peer review features
- Progress tracking and analytics
- Export/import custom questions
- Printable mock test papers
- Audio pronunciation for vocabulary
- Mobile app version

---

**GenieIQ** - Empowering Students Through Interactive Learning
