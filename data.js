// PSLE Past Year Questions Database
const psleQuestionsDB = [
    // Comprehension Questions
    {
        id: 1,
        year: "2023",
        topic: "comprehension",
        question: "Read the following passage:\n\n'The sun was setting behind the mountains, casting long shadows across the valley. Sarah watched as the golden light painted the sky in shades of orange and pink. She felt a sense of peace wash over her.'\n\nWhat does the phrase 'wash over her' mean in this context?",
        type: "multiple-choice",
        options: [
            "She got wet from the rain",
            "She felt the emotion strongly",
            "She took a bath",
            "She cleaned something"
        ],
        correctAnswer: 1,
        explanation: "The phrase 'wash over her' is an idiom that means to experience an emotion strongly and suddenly. In this context, Sarah is feeling peace very strongly. This is a figurative expression, not a literal reference to water or washing."
    },
    {
        id: 2,
        year: "2023",
        topic: "grammar",
        question: "Choose the correct word to complete the sentence:\n\nThe students _____ their homework before the teacher arrived.",
        type: "multiple-choice",
        options: [
            "has completed",
            "have completed",
            "had completed",
            "will complete"
        ],
        correctAnswer: 2,
        explanation: "The correct answer is 'had completed' because this action happened before another past action (the teacher arriving). This requires the past perfect tense to show the sequence of events. 'Had completed' indicates the homework was finished before the teacher's arrival."
    },
    {
        id: 3,
        year: "2022",
        topic: "comprehension",
        question: "What is the main purpose of a persuasive text?",
        type: "multiple-choice",
        options: [
            "To entertain the reader",
            "To inform the reader about facts",
            "To convince the reader to agree with a viewpoint",
            "To describe a person or place"
        ],
        correctAnswer: 2,
        explanation: "A persuasive text aims to convince the reader to agree with the writer's opinion or viewpoint. It uses arguments, evidence, and rhetorical techniques to persuade the audience. While it may inform or entertain, its primary purpose is persuasion."
    },
    {
        id: 4,
        year: "2022",
        topic: "grammar",
        question: "Identify the type of sentence:\n\n'Although it was raining heavily, we decided to go to the park.'",
        type: "multiple-choice",
        options: [
            "Simple sentence",
            "Compound sentence",
            "Complex sentence",
            "Compound-complex sentence"
        ],
        correctAnswer: 2,
        explanation: "This is a complex sentence because it contains one independent clause ('we decided to go to the park') and one dependent clause ('Although it was raining heavily'). The dependent clause begins with the subordinating conjunction 'although' and cannot stand alone as a complete sentence."
    },
    {
        id: 5,
        year: "2021",
        topic: "comprehension",
        question: "Read the sentence:\n\n'The diligent student burned the midnight oil before the examination.'\n\nWhat does 'burned the midnight oil' mean?",
        type: "multiple-choice",
        options: [
            "Stayed up late studying",
            "Used a lamp at night",
            "Wasted time",
            "Started a fire"
        ],
        correctAnswer: 0,
        explanation: "'Burned the midnight oil' is an idiom that means to stay up late working or studying. The phrase originates from the time when people used oil lamps for light, and working late into the night would require keeping the lamp burning. Today, it's commonly used to describe studying or working late at night."
    },
    {
        id: 6,
        year: "2021",
        topic: "grammar",
        question: "Which sentence uses the correct punctuation?",
        type: "multiple-choice",
        options: [
            "The teacher said 'be quiet.'",
            "The teacher said, 'Be quiet.'",
            "The teacher said; 'be quiet.'",
            "The teacher said be quiet."
        ],
        correctAnswer: 1,
        explanation: "The correct punctuation is 'The teacher said, Be quiet.' because: 1) A comma is needed before the quotation, 2) The first word inside the quotation marks should be capitalized, and 3) The period goes inside the closing quotation mark. This follows the standard rules for punctuating direct speech."
    },
    {
        id: 7,
        year: "2023",
        topic: "visual-text",
        question: "A poster shows a picture of a trash bin with the text 'Keep Our School Clean' in large letters. What is the main message?",
        type: "multiple-choice",
        options: [
            "Trash bins are important",
            "Students should not litter and should dispose of trash properly",
            "The school needs more trash bins",
            "Cleaning is difficult"
        ],
        correctAnswer: 1,
        explanation: "The main message of this visual text is to encourage students to dispose of trash properly and not litter. The combination of the trash bin image with the text 'Keep Our School Clean' is a call to action for students to maintain cleanliness by using trash bins appropriately."
    },
    {
        id: 8,
        year: "2020",
        topic: "grammar",
        question: "Choose the word that best completes the sentence:\n\nShe was _____ tired that she fell asleep immediately.",
        type: "multiple-choice",
        options: [
            "so",
            "very",
            "too",
            "much"
        ],
        correctAnswer: 0,
        explanation: "The correct answer is 'so' because this sentence uses the 'so...that' construction, which shows cause and effect. The structure 'so + adjective + that' indicates the degree of tiredness was enough to cause her to fall asleep immediately. This is different from 'very tired' (which doesn't show the result) or 'too tired' (which suggests something negative)."
    },
    {
        id: 9,
        year: "2022",
        topic: "comprehension",
        question: "In a story, the author writes: 'The wind whispered through the trees.' What literary device is being used?",
        type: "multiple-choice",
        options: [
            "Simile",
            "Metaphor",
            "Personification",
            "Alliteration"
        ],
        correctAnswer: 2,
        explanation: "This is personification, which gives human characteristics to non-human things. In this case, the wind is described as 'whispering,' which is a human action. Personification helps create vivid imagery and makes descriptions more engaging by attributing human qualities to objects or elements of nature."
    },
    {
        id: 10,
        year: "2021",
        topic: "grammar",
        question: "Which word is a conjunction in the following sentence?\n\n'I wanted to go swimming, but it started raining.'",
        type: "multiple-choice",
        options: [
            "to",
            "swimming",
            "but",
            "it"
        ],
        correctAnswer: 2,
        explanation: "'But' is the conjunction in this sentence. A conjunction is a word that connects clauses, sentences, or words. 'But' is a coordinating conjunction that connects two independent clauses and shows contrast between them. It indicates that despite wanting to swim, the rain prevented this activity."
    },
    {
        id: 11,
        year: "2023",
        topic: "composition",
        question: "Which opening sentence would be most effective for a story about a mysterious event?",
        type: "multiple-choice",
        options: [
            "It was a sunny day.",
            "The clock struck midnight as a strange shadow appeared at my window.",
            "I woke up in the morning.",
            "My name is John and this is my story."
        ],
        correctAnswer: 1,
        explanation: "The second option is most effective because it immediately creates suspense and mystery. It combines specific time ('midnight'), unusual elements ('strange shadow'), and personal perspective ('my window'). A good opening for a mystery should hook the reader immediately with intriguing details and atmosphere, rather than generic statements."
    },
    {
        id: 12,
        year: "2020",
        topic: "comprehension",
        question: "Read this sentence:\n\n'The news spread like wildfire through the school.'\n\nWhat does this comparison suggest?",
        type: "multiple-choice",
        options: [
            "There was a fire at school",
            "The news spread very quickly",
            "The news was about fire",
            "Students were excited about fire safety"
        ],
        correctAnswer: 1,
        explanation: "This is a simile comparing the spreading of news to wildfire. Wildfires spread extremely quickly and uncontrollably, so saying the news spread 'like wildfire' means it spread very rapidly throughout the school. This figurative language creates a vivid image of how fast information traveled among students."
    },
    {
        id: 13,
        year: "2022",
        topic: "visual-text",
        question: "A safety sign shows a person slipping with a red circle and line through it. What does this sign mean?",
        type: "multiple-choice",
        options: [
            "Dancing is not allowed",
            "Be careful of slippery floor",
            "Running is prohibited",
            "Watch your step"
        ],
        correctAnswer: 1,
        explanation: "The red circle with a line through an image of someone slipping is a standard warning sign for slippery floors. The red circle and line is the universal symbol for prohibition or warning, and when combined with the slipping figure, it warns people to be careful because the floor may be slippery and could cause falls."
    },
    {
        id: 14,
        year: "2021",
        topic: "grammar",
        question: "What is the subject in this sentence?\n\n'The small brown dog barked loudly at the stranger.'",
        type: "multiple-choice",
        options: [
            "small",
            "dog",
            "barked",
            "stranger"
        ],
        correctAnswer: 1,
        explanation: "The subject is 'dog' (or 'The small brown dog' as a complete noun phrase). The subject is the person, animal, or thing that performs the action in a sentence. While 'small' and 'brown' are adjectives describing the dog, and 'barked' is the verb, the core subject is 'dog' - the one doing the barking."
    },
    {
        id: 15,
        year: "2023",
        topic: "comprehension",
        question: "In a story, the author describes a character as having 'eyes like ice.' What does this suggest about the character?",
        type: "multiple-choice",
        options: [
            "The character has blue eyes",
            "The character is cold and unfriendly",
            "The character is from a cold country",
            "The character likes winter"
        ],
        correctAnswer: 1,
        explanation: "Describing someone's eyes as 'like ice' is a metaphor suggesting coldness in personality - unfriendly, emotionless, or hostile. While ice is physically cold and might be associated with blue color, in literature, comparing features to ice typically refers to emotional coldness rather than literal color. This figurative language helps readers understand the character's temperament."
    }
];

// Writing Prompts by Topic
const writingPrompts = {
    narrative: [
        "Write a story that begins with: 'I couldn't believe my eyes when I saw...'",
        "Write about a time when you learned an important lesson from a mistake.",
        "Describe an adventure you had with your best friend.",
        "Write a story about discovering something unexpected in your attic.",
        "Tell a story about a day when everything went wrong, but it turned out well in the end."
    ],
    descriptive: [
        "Describe your favorite place in vivid detail.",
        "Describe a market on a busy Saturday morning.",
        "Write about the most interesting person you have ever met.",
        "Describe a celebration or festival you attended.",
        "Paint a picture with words of a beautiful sunset you witnessed."
    ],
    reflective: [
        "Write about a moment that changed your perspective on something important.",
        "Reflect on a time when you had to make a difficult decision.",
        "Describe what friendship means to you, using examples from your life.",
        "Write about a time when you felt proud of yourself.",
        "Reflect on how you have grown as a person in the past year."
    ],
    persuasive: [
        "Write a letter persuading your school to have a longer recess time.",
        "Convince your readers that reading books is better than watching television.",
        "Persuade your parents to let you adopt a pet.",
        "Write an article persuading students to participate in sports activities.",
        "Convince your readers about the importance of protecting the environment."
    ]
};

// Sample custom questions storage key
const CUSTOM_QUESTIONS_KEY = 'genieiq_custom_questions';

// Assessment criteria and feedback templates
const assessmentCriteria = {
    content: {
        excellent: "Your composition shows excellent understanding of the topic with well-developed ideas and strong organization.",
        good: "Your composition has good content with clear ideas, though some points could be developed further.",
        fair: "Your composition addresses the topic but needs more detailed examples and better organization.",
        poor: "Your composition needs significant improvement in content development and structure."
    },
    language: {
        excellent: "You demonstrate excellent command of language with varied sentence structures and rich vocabulary.",
        good: "Your language use is good with appropriate vocabulary, though sentence variety could be improved.",
        fair: "Your language is adequate but would benefit from more varied vocabulary and sentence structures.",
        poor: "Your language needs improvement - focus on using more varied vocabulary and correct grammar."
    },
    creativity: {
        excellent: "Your writing shows exceptional creativity with original ideas and engaging descriptions.",
        good: "Your writing demonstrates good creativity with interesting ideas and some vivid descriptions.",
        fair: "Your writing shows some creativity but could benefit from more original ideas and vivid imagery.",
        poor: "Your writing needs more creative elements - try using more descriptive language and original ideas."
    }
};

// Helper function to get random element from array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Helper function to get random writing prompt
function getRandomPrompt(topic) {
    if (topic && writingPrompts[topic]) {
        return getRandomElement(writingPrompts[topic]);
    }
    // Get random topic if none specified
    const topics = Object.keys(writingPrompts);
    const randomTopic = getRandomElement(topics);
    return getRandomElement(writingPrompts[randomTopic]);
}

// Helper function to shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Get questions by filter
function getFilteredQuestions(filters = {}) {
    let filtered = [...psleQuestionsDB];
    
    if (filters.year && filters.year !== 'all') {
        filtered = filtered.filter(q => q.year === filters.year);
    }
    
    if (filters.topic && filters.topic !== 'all') {
        filtered = filtered.filter(q => q.topic === filters.topic);
    }
    
    return filtered;
}

// Get random questions for mock test
function getRandomQuestions(count, filters = {}) {
    const filtered = getFilteredQuestions(filters);
    const shuffled = shuffleArray(filtered);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Load custom questions from localStorage
function loadCustomQuestions() {
    try {
        const stored = localStorage.getItem(CUSTOM_QUESTIONS_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Error loading custom questions:', error);
        return [];
    }
}

// Save custom questions to localStorage
function saveCustomQuestions(questions) {
    try {
        localStorage.setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(questions));
        return true;
    } catch (error) {
        console.error('Error saving custom questions:', error);
        return false;
    }
}

// Add a custom question
function addCustomQuestion(questionData) {
    const questions = loadCustomQuestions();
    const newQuestion = {
        id: Date.now(),
        ...questionData,
        isCustom: true,
        dateAdded: new Date().toISOString()
    };
    questions.push(newQuestion);
    saveCustomQuestions(questions);
    return newQuestion;
}

// Delete a custom question
function deleteCustomQuestion(id) {
    const questions = loadCustomQuestions();
    const filtered = questions.filter(q => q.id !== id);
    saveCustomQuestions(filtered);
}

// Get all questions (both predefined and custom)
function getAllQuestions() {
    return [...psleQuestionsDB, ...loadCustomQuestions()];
}
