// Main Application Logic

// State management
let currentTest = null;
let testStartTime = null;
let timerInterval = null;
let currentComposition = null;

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializePracticeSection();
    initializeMockTestSection();
    initializePastQuestionsSection();
    initializeCustomQuestionsSection();
});

// Tab Navigation
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.dataset.tab;
            
            // Update active states
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });
}

// Practice Writing Section
function initializePracticeSection() {
    const topicSelect = document.getElementById('topic-select');
    const randomPromptBtn = document.getElementById('random-prompt-btn');
    const submitCompositionBtn = document.getElementById('submit-composition');
    const newPracticeBtn = document.getElementById('new-practice');
    const compositionText = document.getElementById('composition-text');

    topicSelect.addEventListener('change', handleTopicSelect);
    randomPromptBtn.addEventListener('click', handleRandomPrompt);
    submitCompositionBtn.addEventListener('click', handleSubmitComposition);
    newPracticeBtn.addEventListener('click', resetPracticeSection);
    compositionText.addEventListener('input', updateWordCount);
}

function handleTopicSelect() {
    const topic = document.getElementById('topic-select').value;
    if (topic) {
        displayWritingPrompt(topic);
    }
}

function handleRandomPrompt() {
    const allTopics = ['narrative', 'descriptive', 'reflective', 'persuasive'];
    const randomTopic = getRandomElement(allTopics);
    document.getElementById('topic-select').value = randomTopic;
    displayWritingPrompt(randomTopic);
}

function displayWritingPrompt(topic) {
    const prompt = getRandomPrompt(topic);
    const promptSection = document.getElementById('writing-prompt');
    const promptText = document.getElementById('prompt-text');
    const writingArea = document.getElementById('writing-area');
    
    promptText.textContent = prompt;
    promptSection.classList.remove('hidden');
    writingArea.classList.remove('hidden');
    
    // Reset composition text
    document.getElementById('composition-text').value = '';
    updateWordCount();
    
    currentComposition = { topic, prompt };
}

function updateWordCount() {
    const text = document.getElementById('composition-text').value;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = text.trim() === '' ? 0 : words.length;
    const charCount = text.length;
    
    document.getElementById('word-count').textContent = wordCount;
    document.getElementById('char-count').textContent = charCount;
}

function handleSubmitComposition() {
    const text = document.getElementById('composition-text').value;
    if (!text.trim()) {
        alert('Please write your composition before submitting.');
        return;
    }
    
    const assessment = assessComposition(text, currentComposition.topic);
    displayAssessment(assessment);
}

function assessComposition(text, topic) {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const avgWordsPerSentence = wordCount / sentences.length;
    
    // Simple assessment algorithm
    let contentScore = 'fair';
    let languageScore = 'fair';
    let creativityScore = 'fair';
    
    // Content scoring based on word count and structure
    if (wordCount >= 150 && wordCount <= 250 && sentences.length >= 8) {
        contentScore = wordCount >= 180 ? 'excellent' : 'good';
    } else if (wordCount < 100) {
        contentScore = 'poor';
    }
    
    // Language scoring based on sentence variety
    if (avgWordsPerSentence >= 10 && avgWordsPerSentence <= 20) {
        languageScore = avgWordsPerSentence >= 12 && avgWordsPerSentence <= 18 ? 'excellent' : 'good';
    } else if (avgWordsPerSentence < 8 || avgWordsPerSentence > 25) {
        languageScore = 'poor';
    }
    
    // Creativity scoring based on vocabulary variety
    const uniqueWords = new Set(words.map(w => w.toLowerCase()));
    const vocabularyRatio = uniqueWords.size / wordCount;
    if (vocabularyRatio >= 0.6) {
        creativityScore = 'excellent';
    } else if (vocabularyRatio >= 0.5) {
        creativityScore = 'good';
    } else if (vocabularyRatio < 0.4) {
        creativityScore = 'poor';
    }
    
    // Calculate overall score
    const scoreMap = { excellent: 4, good: 3, fair: 2, poor: 1 };
    const totalScore = scoreMap[contentScore] + scoreMap[languageScore] + scoreMap[creativityScore];
    const overallScore = Math.round((totalScore / 12) * 100);
    
    return {
        overallScore,
        contentScore,
        languageScore,
        creativityScore,
        wordCount,
        feedback: generateFeedback(contentScore, languageScore, creativityScore, wordCount),
        suggestions: generateSuggestions(contentScore, languageScore, creativityScore, wordCount)
    };
}

function generateFeedback(content, language, creativity, wordCount) {
    let feedback = [];
    
    feedback.push(assessmentCriteria.content[content]);
    feedback.push(assessmentCriteria.language[language]);
    feedback.push(assessmentCriteria.creativity[creativity]);
    
    if (wordCount < 150) {
        feedback.push("Your composition is shorter than the recommended length. Try to develop your ideas more fully.");
    } else if (wordCount > 250) {
        feedback.push("Your composition is longer than recommended. Practice being more concise while maintaining quality.");
    }
    
    return feedback.join(' ');
}

function generateSuggestions(content, language, creativity, wordCount) {
    const suggestions = [];
    
    if (content !== 'excellent') {
        suggestions.push("Develop your main ideas with more specific examples and details");
        suggestions.push("Use clear paragraphs to organize your thoughts");
    }
    
    if (language !== 'excellent') {
        suggestions.push("Vary your sentence structures - use a mix of simple, compound, and complex sentences");
        suggestions.push("Expand your vocabulary by using more descriptive and precise words");
    }
    
    if (creativity !== 'excellent') {
        suggestions.push("Use more vivid imagery and sensory details to make your writing come alive");
        suggestions.push("Try incorporating literary devices like similes, metaphors, or personification");
    }
    
    if (wordCount < 150) {
        suggestions.push("Add more details and examples to reach the recommended word count");
    }
    
    suggestions.push("Read your composition aloud to check for flow and clarity");
    suggestions.push("Always proofread for spelling and grammar errors before submitting");
    
    return suggestions;
}

function displayAssessment(assessment) {
    document.getElementById('overall-score').textContent = assessment.overallScore + '%';
    document.getElementById('content-score').textContent = assessment.contentScore.charAt(0).toUpperCase() + assessment.contentScore.slice(1);
    document.getElementById('language-score').textContent = assessment.languageScore.charAt(0).toUpperCase() + assessment.languageScore.slice(1);
    document.getElementById('creativity-score').textContent = assessment.creativityScore.charAt(0).toUpperCase() + assessment.creativityScore.slice(1);
    document.getElementById('feedback-text').textContent = assessment.feedback;
    
    const suggestionsList = document.getElementById('suggestions-list');
    suggestionsList.innerHTML = '';
    assessment.suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        suggestionsList.appendChild(li);
    });
    
    document.getElementById('writing-area').classList.add('hidden');
    document.getElementById('assessment-result').classList.remove('hidden');
}

function resetPracticeSection() {
    document.getElementById('topic-select').value = '';
    document.getElementById('writing-prompt').classList.add('hidden');
    document.getElementById('writing-area').classList.add('hidden');
    document.getElementById('assessment-result').classList.add('hidden');
    document.getElementById('composition-text').value = '';
    updateWordCount();
    currentComposition = null;
}

// Mock Test Section
function initializeMockTestSection() {
    const testTypeSelect = document.getElementById('test-type');
    const generateTestBtn = document.getElementById('generate-test');
    const submitTestBtn = document.getElementById('submit-test');
    const newTestBtn = document.getElementById('new-test');

    testTypeSelect.addEventListener('change', handleTestTypeChange);
    generateTestBtn.addEventListener('click', handleGenerateTest);
    submitTestBtn.addEventListener('click', handleSubmitTest);
    newTestBtn.addEventListener('click', resetMockTestSection);
}

function handleTestTypeChange() {
    const testType = document.getElementById('test-type').value;
    const topicGroup = document.getElementById('topic-group');
    const yearGroup = document.getElementById('year-group');
    
    topicGroup.style.display = testType === 'topic' ? 'block' : 'none';
    yearGroup.style.display = testType === 'year' ? 'block' : 'none';
}

function handleGenerateTest() {
    const testType = document.getElementById('test-type').value;
    const questionCount = parseInt(document.getElementById('question-count').value);
    
    let filters = {};
    if (testType === 'topic') {
        filters.topic = document.getElementById('mock-topic').value;
    } else if (testType === 'year') {
        filters.year = document.getElementById('exam-year').value;
    }
    
    const allQuestions = getAllQuestions();
    let questions = [];
    
    if (Object.keys(filters).length > 0) {
        questions = getRandomQuestions(questionCount, filters);
    } else {
        questions = getRandomQuestions(questionCount, {});
    }
    
    if (questions.length === 0) {
        alert('No questions available for the selected criteria. Please try different options.');
        return;
    }
    
    currentTest = {
        questions: questions,
        answers: new Array(questions.length).fill(null),
        startTime: Date.now()
    };
    
    displayMockTest();
    startTimer();
}

function displayMockTest() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    currentTest.questions.forEach((question, index) => {
        const questionCard = createQuestionCard(question, index);
        container.appendChild(questionCard);
    });
    
    document.querySelector('.mock-test-setup').classList.add('hidden');
    document.getElementById('test-container').classList.remove('hidden');
    
    const testTitle = document.getElementById('test-title');
    testTitle.textContent = `Mock Test - ${currentTest.questions.length} Questions`;
}

function createQuestionCard(question, index) {
    const card = document.createElement('div');
    card.className = 'question-card';
    
    const questionNumber = document.createElement('div');
    questionNumber.className = 'question-number';
    questionNumber.textContent = `Question ${index + 1}`;
    
    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.textContent = question.question;
    
    card.appendChild(questionNumber);
    card.appendChild(questionText);
    
    if (question.type === 'multiple-choice' && question.options) {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        
        question.options.forEach((option, optIndex) => {
            const label = document.createElement('label');
            label.className = 'option-label';
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${index}`;
            input.value = optIndex;
            input.addEventListener('change', () => {
                currentTest.answers[index] = optIndex;
            });
            
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            optionsDiv.appendChild(label);
        });
        
        card.appendChild(optionsDiv);
    } else {
        const input = document.createElement('textarea');
        input.className = 'answer-input';
        input.placeholder = 'Type your answer here...';
        input.rows = 3;
        input.addEventListener('input', (e) => {
            currentTest.answers[index] = e.target.value;
        });
        card.appendChild(input);
    }
    
    return card;
}

function startTimer() {
    testStartTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsed = Date.now() - testStartTime;
    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    return document.getElementById('timer').textContent;
}

function handleSubmitTest() {
    const unanswered = currentTest.answers.filter(a => a === null).length;
    
    if (unanswered > 0) {
        if (!confirm(`You have ${unanswered} unanswered question(s). Do you want to submit anyway?`)) {
            return;
        }
    }
    
    const timeTaken = stopTimer();
    const results = gradeTest();
    displayTestResults(results, timeTaken);
}

function gradeTest() {
    let correctCount = 0;
    const reviews = [];
    
    currentTest.questions.forEach((question, index) => {
        const userAnswer = currentTest.answers[index];
        const isCorrect = checkAnswer(question, userAnswer);
        
        if (isCorrect) {
            correctCount++;
        }
        
        reviews.push({
            question,
            userAnswer,
            isCorrect,
            questionNumber: index + 1
        });
    });
    
    return {
        correctCount,
        totalCount: currentTest.questions.length,
        percentage: Math.round((correctCount / currentTest.questions.length) * 100),
        reviews
    };
}

function checkAnswer(question, userAnswer) {
    if (question.type === 'multiple-choice') {
        return userAnswer === question.correctAnswer;
    }
    // For open-ended questions, we can't automatically grade
    // In a real system, this would need manual grading or AI assessment
    return null;
}

function displayTestResults(results, timeTaken) {
    document.getElementById('test-score').textContent = `${results.correctCount}/${results.totalCount}`;
    document.getElementById('test-percentage').textContent = `${results.percentage}%`;
    document.getElementById('time-taken').textContent = timeTaken;
    
    const reviewContainer = document.getElementById('answers-review');
    reviewContainer.innerHTML = '<h3>Answer Review</h3>';
    
    results.reviews.forEach(review => {
        const reviewCard = createAnswerReviewCard(review);
        reviewContainer.appendChild(reviewCard);
    });
    
    document.getElementById('test-container').classList.add('hidden');
    document.getElementById('test-results').classList.remove('hidden');
}

function createAnswerReviewCard(review) {
    const card = document.createElement('div');
    card.className = `answer-review-card ${review.isCorrect === true ? 'correct' : review.isCorrect === false ? 'incorrect' : ''}`;
    
    const questionNumber = document.createElement('div');
    questionNumber.className = 'question-number';
    questionNumber.textContent = `Question ${review.questionNumber}`;
    
    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.textContent = review.question.question;
    
    card.appendChild(questionNumber);
    card.appendChild(questionText);
    
    if (review.isCorrect !== null) {
        const status = document.createElement('div');
        status.className = `answer-status ${review.isCorrect ? 'correct' : 'incorrect'}`;
        status.textContent = review.isCorrect ? '✓ Correct' : '✗ Incorrect';
        card.appendChild(status);
        
        if (!review.isCorrect && review.question.type === 'multiple-choice') {
            const correctAnswer = document.createElement('div');
            correctAnswer.style.marginTop = '10px';
            correctAnswer.innerHTML = `<strong>Your answer:</strong> ${review.question.options[review.userAnswer] || 'No answer'}<br>`;
            correctAnswer.innerHTML += `<strong style="color: #28a745;">Correct answer:</strong> ${review.question.options[review.question.correctAnswer]}`;
            card.appendChild(correctAnswer);
        }
    } else {
        const status = document.createElement('div');
        status.textContent = 'Your answer: ' + (review.userAnswer || 'No answer provided');
        status.style.marginTop = '10px';
        card.appendChild(status);
    }
    
    if (review.question.explanation) {
        const explanation = document.createElement('div');
        explanation.className = 'explanation';
        
        const title = document.createElement('div');
        title.className = 'explanation-title';
        title.textContent = '💡 Explanation:';
        
        const text = document.createElement('div');
        text.className = 'explanation-text';
        text.textContent = review.question.explanation;
        
        explanation.appendChild(title);
        explanation.appendChild(text);
        card.appendChild(explanation);
    }
    
    return card;
}

function resetMockTestSection() {
    stopTimer();
    document.querySelector('.mock-test-setup').classList.remove('hidden');
    document.getElementById('test-container').classList.add('hidden');
    document.getElementById('test-results').classList.add('hidden');
    document.getElementById('timer').textContent = '00:00';
    currentTest = null;
}

// Past Questions Section
function initializePastQuestionsSection() {
    const applyFilterBtn = document.getElementById('apply-filter');
    applyFilterBtn.addEventListener('click', handleApplyFilter);
    
    // Display all questions initially
    displayPastQuestions(getAllQuestions());
}

function handleApplyFilter() {
    const year = document.getElementById('filter-year').value;
    const topic = document.getElementById('filter-topic').value;
    
    const filters = {};
    if (year !== 'all') filters.year = year;
    if (topic !== 'all') filters.topic = topic;
    
    const filtered = getFilteredQuestions(filters);
    const customQuestions = loadCustomQuestions();
    
    let allFiltered = [...filtered];
    if (Object.keys(filters).length > 0) {
        const customFiltered = customQuestions.filter(q => {
            if (filters.year && q.year !== filters.year) return false;
            if (filters.topic && q.topic !== filters.topic) return false;
            return true;
        });
        allFiltered = [...filtered, ...customFiltered];
    } else {
        allFiltered = [...filtered, ...customQuestions];
    }
    
    displayPastQuestions(allFiltered);
}

function displayPastQuestions(questions) {
    const container = document.getElementById('questions-list');
    container.innerHTML = '';
    
    if (questions.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; padding: 40px;">No questions found matching your criteria.</p>';
        return;
    }
    
    questions.forEach(question => {
        const questionItem = createQuestionItem(question);
        container.appendChild(questionItem);
    });
}

function createQuestionItem(question) {
    const item = document.createElement('div');
    item.className = 'question-item';
    
    const meta = document.createElement('div');
    meta.className = 'question-meta';
    
    const yearBadge = document.createElement('span');
    yearBadge.className = 'question-badge';
    yearBadge.textContent = question.year || 'Custom';
    
    const topicBadge = document.createElement('span');
    topicBadge.className = 'question-badge';
    topicBadge.style.background = '#764ba2';
    topicBadge.textContent = question.topic.replace('-', ' ').toUpperCase();
    
    meta.appendChild(yearBadge);
    meta.appendChild(topicBadge);
    
    const content = document.createElement('div');
    content.className = 'question-content';
    content.textContent = question.question;
    
    item.appendChild(meta);
    item.appendChild(content);
    
    if (question.type === 'multiple-choice' && question.options) {
        const optionsList = document.createElement('div');
        optionsList.style.marginTop = '10px';
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.style.padding = '5px 0';
            optionDiv.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
            optionsList.appendChild(optionDiv);
        });
        item.appendChild(optionsList);
    }
    
    const answerSection = document.createElement('div');
    answerSection.className = 'answer-section';
    
    const answerLabel = document.createElement('div');
    answerLabel.className = 'answer-label';
    answerLabel.textContent = 'Correct Answer:';
    
    const answerText = document.createElement('div');
    if (question.type === 'multiple-choice') {
        answerText.textContent = question.options[question.correctAnswer];
    } else {
        answerText.textContent = question.correctAnswer || 'See explanation';
    }
    
    answerSection.appendChild(answerLabel);
    answerSection.appendChild(answerText);
    
    if (question.explanation) {
        const explanation = document.createElement('div');
        explanation.className = 'explanation';
        explanation.style.marginTop = '10px';
        
        const expTitle = document.createElement('div');
        expTitle.className = 'explanation-title';
        expTitle.textContent = '💡 Explanation:';
        
        const expText = document.createElement('div');
        expText.className = 'explanation-text';
        expText.textContent = question.explanation;
        
        explanation.appendChild(expTitle);
        explanation.appendChild(expText);
        answerSection.appendChild(explanation);
    }
    
    item.appendChild(answerSection);
    
    return item;
}

// Custom Questions Section
function initializeCustomQuestionsSection() {
    const addQuestionBtn = document.getElementById('add-custom-question');
    addQuestionBtn.addEventListener('click', handleAddCustomQuestion);
    
    displayCustomQuestions();
}

function handleAddCustomQuestion() {
    const questionText = document.getElementById('custom-question-text').value.trim();
    const topic = document.getElementById('custom-topic').value;
    const answer = document.getElementById('custom-answer').value.trim();
    const explanation = document.getElementById('custom-explanation').value.trim();
    const year = document.getElementById('custom-year').value.trim();
    
    if (!questionText || !answer || !explanation) {
        alert('Please fill in all required fields (Question, Answer, and Explanation).');
        return;
    }
    
    const questionData = {
        question: questionText,
        topic: topic,
        correctAnswer: answer,
        explanation: explanation,
        year: year || 'Custom',
        type: 'open-ended'
    };
    
    addCustomQuestion(questionData);
    
    // Clear form
    document.getElementById('custom-question-text').value = '';
    document.getElementById('custom-answer').value = '';
    document.getElementById('custom-explanation').value = '';
    document.getElementById('custom-year').value = '';
    
    displayCustomQuestions();
    alert('Question added successfully!');
}

function displayCustomQuestions() {
    const container = document.getElementById('custom-questions-container');
    const questions = loadCustomQuestions();
    
    container.innerHTML = '';
    
    if (questions.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">No custom questions yet. Add your first question above!</p>';
        return;
    }
    
    questions.forEach(question => {
        const item = createCustomQuestionItem(question);
        container.appendChild(item);
    });
}

function createCustomQuestionItem(question) {
    const item = createQuestionItem(question);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this question?')) {
            deleteCustomQuestion(question.id);
            displayCustomQuestions();
        }
    });
    
    item.appendChild(deleteBtn);
    return item;
}
