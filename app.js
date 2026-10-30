// ==============================================================================
// VALIDIFY.AI — CLIENT APPLICATION JAVASCRIPT
// Interactive Engine: Slides, Quiz, Review Miner, Checklist & Calculator
// ==============================================================================

// --- NAVIGATION & TAB SWITCHING ---
function switchTab(tabId) {
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active'));

    const targetPane = document.getElementById(tabId);
    const targetBtn = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);

    if (targetPane) targetPane.classList.add('active');
    if (targetBtn) targetBtn.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        switchTab(tabId);
    });
});

// --- INTERACTIVE TAM / SAM / SOM CALCULATOR ---
function updateTamCalculator() {
    const campuses = parseFloat(document.getElementById('inputCampusTarget')?.value) || 25;
    const studentsPerCampus = parseFloat(document.getElementById('inputStudentsPerCampus')?.value) || 120;
    const arpu = parseFloat(document.getElementById('inputMonthlyArpu')?.value) || 6.99;
    const conversionPct = parseFloat(document.getElementById('inputConversionRate')?.value) || 4.5;

    const totalCollegiateAudience = campuses * studentsPerCampus; // e.g. 3,000
    const payingStudents = totalCollegiateAudience * (conversionPct / 100);
    const studentAnnualRev = payingStudents * arpu * 12;

    const b2bRev = campuses * 1200; // $1,200/yr campus incubator license
    const totalRev = studentAnnualRev + b2bRev;

    const somElem = document.getElementById('calcSomResult');
    const b2bElem = document.getElementById('calcB2bResult');
    const totalElem = document.getElementById('calcTotalResult');

    if (somElem) somElem.innerText = `$${Math.round(studentAnnualRev).toLocaleString()} / yr`;
    if (b2bElem) b2bElem.innerText = `$${Math.round(b2bRev).toLocaleString()} / yr`;
    if (totalElem) totalElem.innerText = `$${Math.round(totalRev).toLocaleString()} / yr`;
}

['inputCampusTarget', 'inputStudentsPerCampus', 'inputMonthlyArpu', 'inputConversionRate'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', updateTamCalculator);
});

// --- 7-SLIDE DECK ENGINE ---
const SLIDES_DATA = [
    {
        tag: "SLIDE 1 OF 7 • THE EXECUTIVE HOOK",
        title: "VALIDIFY: De-risking Mobile Apps Before Code",
        bullets: [
            "The Marginal Cost of Code has dropped to near zero; building the wrong thing has never been more expensive.",
            "90%+ of student software ventures fail within 6 months, led by premature coding without customer discovery.",
            "Validify is a 7-day validation sprint powered by free AI tools, replacing polite praise with empirical App Store and campus demand signals.",
            "Built specifically for university incubators, collegiate hackathons, and software capstone dev teams."
        ],
        metric: "90% Reduction",
        metricLabel: "in early venture mortality by validating before writing code",
        notes: "Good evening judges and fellow builders. Over the last 18 months, AI coding assistants have made code effortless. Today, any sophomore can build a full-stack mobile app over a weekend. Yet, over 90% of student startups fail before their first 100 users. Why? Because they spend three months building products nobody actually wants. Today, we are presenting Validify: a 7-day, AI-orchestrated validation sprint that replaces intuition with empirical market and competitor intelligence before writing a single line of code."
    },
    {
        tag: "SLIDE 2 OF 7 • THE PROBLEM",
        title: "The $80B App Graveyard & Coding Bias",
        bullets: [
            "42% of startups die from 'No Market Need' (CB Insights #1 mortuary factor).",
            "The Polite Feedback Delusion: Founders ask roommates and parents who give false affirmations (The Mom Test).",
            "The Enterprise Intelligence Paywall: Sensor Tower and PitchBook cost $15,000–$50,000/yr, locking out student builders.",
            "Qualitative Review Paralysis: Manually analyzing 1,000 competitor reviews takes 50+ hours—so students skip it."
        ],
        metric: "42%",
        metricLabel: "of startup deaths caused directly by building without market demand",
        notes: "When a student team gets an idea, their immediate instinct is to open VS Code and start building authentication and database schemas. When they do ask for feedback, they ask their roommates: 'Would you use an app that does X?' Naturally, their friends say yes to be polite. By the time they launch on the App Store 14 weeks later, they hear crickets. They have no commercial research budget, no access to enterprise intelligence, and no structured discovery framework."
    },
    {
        tag: "SLIDE 3 OF 7 • TARGET AUDIENCE",
        title: "Target Audience: Student Founders & Dev Teams",
        bullets: [
            "Primary Segment: University student entrepreneurs in campus incubators, venture labs, and pitch competitions.",
            "Secondary Segment: Collegiate app-dev teams (2–5 members) building capstones or hackathon prototypes.",
            "Audience Profile: High technical competency, $0 discretionary budget, high academic time constraints.",
            "Key Vulnerability: Premature optimization—rewarded for code complexity rather than problem-solution fit."
        ],
        metric: "150,000+",
        metricLabel: "collegiate tech prototypes and apps conceputalized annually",
        notes: "Our target audience is tightly defined: the 20 million college students in the U.S. and over 150,000 collegiate tech projects started annually. These students are brilliant coders, but novice venture builders. They have zero budget, high academic pressure, and a 48-hour hackathon or 12-week semester deadline. They need a system that fits their $0 budget and delivers hard data they can present to professors, incubator directors, and seed judges."
    },
    {
        tag: "SLIDE 4 OF 7 • MARKET SIZE SIGNALS",
        title: "Market Size Signals: TAM / SAM / SOM Triangulation",
        bullets: [
            "TAM ($252.89 Billion): Global Mobile App Economy growing at 14.3% CAGR through 2030 (Grand View Research).",
            "SAM ($5.60 Billion): Global Developer Tooling, Early Usability Testing & Idea Discovery Software Market.",
            "SOM ($142.50 Million): 3,200+ University Incubators and collegiate hackathon dev squads over 5 years.",
            "Bottom-Up Unit Economics: $6.99/mo Pro Student Pass + $1,200/yr B2B University Venture Lab license."
        ],
        metric: "$5.60 Billion",
        metricLabel: "Serviceable Addressable Market (SAM) expanding at 16.8% CAGR",
        notes: "Is this a venture-scale market? Absolutely. The global mobile app ecosystem stands at $252 billion today, on track to surpass half a trillion dollars by 2030. Within developer tools, early-stage product discovery represents a $5.6 billion serviceable market. By targeting university entrepreneurship centers and collegiate hackathons, our realistic initial obtainable market is $142.5 million—growing as universities aggressively invest in campus venture creation."
    },
    {
        tag: "SLIDE 5 OF 7 • COMPETITOR MATRIX",
        title: "Competitive Landscape: The Unmet White-Space",
        bullets: [
            "Incumbents fall into two extremes: generic AI text wrappers vs. enterprise human testing suites.",
            "ValidatorAI & DimeADozen ($0–$39): High hallucination risk, no app store mining, generic SWOT fluff.",
            "Maze & UserTesting ($500+/mo): Prohibitive pricing; requires already-built prototypes, useless for raw ideas.",
            "The Validify Moat: $0 student AI stack, empirical store review mining, and Consensus-backed behavioral science."
        ],
        metric: "$0 Stack",
        metricLabel: "vs $500+/mo enterprise paywalls, with zero hallucinated data",
        notes: "When you look at the competitive map, existing tools fall into two unhelpful extremes. On the bottom left, you have cheap AI prompt wrappers that generate generic SWOT analyses with made-up numbers. On the top right, you have enterprise user-testing tools like Maze that cost thousands of dollars and require a working app. Validify captures the unserved high-ground: providing empirical, store-grounded competitor intelligence and structured user interviews for free to student founders."
    },
    {
        tag: "SLIDE 6 OF 7 • PRODUCT SOLUTION",
        title: "Product Solution & 9-Block Lean Canvas",
        bullets: [
            "Automated Store Review Thematic Miner: Ingests 50+ competitor reviews, clustering top bugs and missing features.",
            "'The Mom Test' Discovery Suite: Generates unbiased past-behavior interview scripts, scoring real pain intensity.",
            "Triangulated Lean Canvas: Calculates verified unit economics, key metrics, and 3 Gherkin-specified user stories.",
            "Anti-Hallucination Gate: Flags unverified numbers, ensuring academic and investor pitch integrity."
        ],
        metric: "7 Days",
        metricLabel: "from raw concept to validated Go / Pivot / No-Go milestone",
        notes: "Validify operationalizes lean startup validation through three automated pillars. First, our review engine parses hundreds of public competitor reviews from the App Store and Google Play, giving student teams an exact list of incumbent bugs and missing features. Second, our interview generator enforces The Mom Test, guiding founders to ask about real past behaviors rather than hypothetical praise. Third, we produce a 1-page Lean Canvas with triangulated unit economics and verified sources."
    },
    {
        tag: "SLIDE 7 OF 7 • VALIDATION ROADMAP",
        title: "7-Day Validation Sprint & Decision Gate",
        bullets: [
            "Days 1–2 (Desk Discovery): TAM triangulation via Perplexity; behavioral psychology via Consensus/Elicit.",
            "Days 3–4 (Competitor Mining): Automated parsing of top 5 competitors to uncover unmet feature gaps.",
            "Days 5–6 (Campus Field Interviews): 10 'Mom Test' student interviews logged and scored in NotebookLM.",
            "Day 7 (Decision Gate): Score ≥75/100 to GO (build MVP); 50–74 to PIVOT; <50 to KILL idea gracefully."
        ],
        metric: "≥ 75 / 100",
        metricLabel: "Validation Readiness Score required to approve MVP code development",
        notes: "We believe the best validation tool doesn't just encourage building—it has the courage to tell a team when to pivot or walk away. By enforcing our Day-7 Go/No-Go gate, student teams either walk into a hackathon or capstone with bulletproof evidence of market demand, or they kill a flawed concept early—saving hundreds of hours of heartbreak. With Validify, students build software the world is actually waiting for. Thank you."
    }
];

let currentSlideIndex = 0;

function renderSlide(index) {
    const slide = SLIDES_DATA[index];
    const container = document.getElementById('slideViewer');
    const counter = document.getElementById('deckCounter');
    const notesBody = document.getElementById('presenterNotesText');

    if (!container || !slide) return;

    container.innerHTML = `
    <div class="slide-tag">${slide.tag}</div>
    <h2 class="slide-heading">${slide.title}</h2>
    <ul class="slide-bullets">
      ${slide.bullets.map(b => `<li>${b}</li>`).join('')}
    </ul>
    <div class="slide-metric-callout">
      <strong>${slide.metric}</strong>
      <span>${slide.metricLabel}</span>
    </div>
  `;

    if (counter) counter.innerText = `Slide ${index + 1} of ${SLIDES_DATA.length}`;
    if (notesBody) notesBody.innerText = `"${slide.notes}"`;

    // Update dots
    const dotsContainer = document.getElementById('deckIndicators');
    if (dotsContainer) {
        dotsContainer.innerHTML = SLIDES_DATA.map((_, i) => `
      <div class="indicator-dot ${i === index ? 'active' : ''}" onclick="goToSlide(${i})"></div>
    `).join('');
    }
}

function nextSlide() {
    if (currentSlideIndex < SLIDES_DATA.length - 1) {
        currentSlideIndex++;
        renderSlide(currentSlideIndex);
    }
}

function prevSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        renderSlide(currentSlideIndex);
    }
}

function goToSlide(i) {
    currentSlideIndex = i;
    renderSlide(currentSlideIndex);
}

document.getElementById('deckNextBtn')?.addEventListener('click', nextSlide);
document.getElementById('deckPrevBtn')?.addEventListener('click', prevSlide);

document.getElementById('btnToggleNotes')?.addEventListener('click', () => {
    const drawer = document.getElementById('presenterNotesDrawer');
    drawer?.classList.toggle('open');
});

document.getElementById('btnFullscreenDeck')?.addEventListener('click', () => {
    const stage = document.getElementById('deckStage');
    if (!document.fullscreenElement) {
        stage?.requestFullscreen().catch(err => alert(`Fullscreen error: ${err.message}`));
    } else {
        document.exitFullscreen();
    }
});

// Arrow key navigation
window.addEventListener('keydown', (e) => {
    const deckTab = document.getElementById('tab-deck');
    if (deckTab && deckTab.classList.contains('active')) {
        if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    }
});

// --- 10-QUESTION VALIDATION CONCEPTS QUIZ ---
const QUIZ_QUESTIONS = [
    {
        topic: "The Mom Test & Confirmation Bias",
        question: "You are validating a mobile app for campus roommate chore-tracking. Which of the following interview questions adheres strictly to The Mom Test framework to eliminate confirmation bias?",
        options: [
            "Would you be willing to pay $2.99 a month for an app that automatically assigns dishwashing chores to your roommates?",
            "Do you think an AI-powered chore tracking app is a great idea for college dorms?",
            "Tell me about the last time you had a dispute with your roommate over chores. What did you do to resolve it, and what tools did you use?",
            "If we built a chore app with streak rewards and notifications, would you download it on the App Store?"
        ],
        correctIndex: 2,
        explanation: "The Mom Test establishes that people lie when asked about hypothetical futures or their opinion of your idea. Honest validation comes exclusively from asking about specific past behaviors, how they currently solve the problem, and what costs/friction they actually incurred.",
        takeaway: "Key Rule: Never ask if someone 'would' like or pay for your app; ask how they already handle the problem today."
    },
    {
        topic: "Market Sizing (TAM / SAM / SOM)",
        question: "A student team is pitching a mobile study-session coordination app for U.S. college undergraduates. Which of the following best defines their Serviceable Obtainable Market (SOM)?",
        options: [
            "The global mobile app economy of $252.89 Billion.",
            "The total U.S. postsecondary student population of 20 million students.",
            "The estimated $5.6 Billion global student productivity and collaboration software sector.",
            "The 15,000 active students across 3 local university campuses the team can realistically acquire during Year 1 through campus ambassador networks."
        ],
        correctIndex: 3,
        explanation: "TAM is the entire universal market; SAM is the segment theoretically reachable with the specific product type; SOM is the realistic, near-term share of the market that the startup can capture with its current resources, channels, and team capacity.",
        takeaway: "Key Rule: Pitch judges discount student pitches that claim 'just 1% of the $250B market.' Always ground your SOM in operational reality."
    },
    {
        topic: "Competitor App Store Sentiment Mining",
        question: "When parsing 200 public 1-star and 2-star reviews of a leading competitor app, which user grievance represents the highest-priority strategic opportunity for a new market entrant?",
        options: [
            "I dropped my phone in water and the app stopped working. 1 star!",
            "The app forces a $49/year auto-renewing subscription after a 3-day trial without allowing me to export my project notes to CSV.",
            "I wish the app icon was purple instead of blue.",
            "The app has too many features and I don't use 80% of them, but it's okay."
        ],
        correctIndex: 1,
        explanation: "This review highlights an acute combination of economic friction (predatory subscription pricing) and an unmet workflow need (data lock-in / missing CSV export). This reveals high willingness-to-switch if a competitor offers transparent pricing and data portability.",
        takeaway: "Key Rule: Look for negative reviews that express feelings of betrayal, high price gouging, or specific missing workflow integrations."
    },
    {
        topic: "Detecting AI Hallucinations in Research",
        question: "A student uses an LLM to research market size and receives this response: 'According to the 2025 Global Mobile EduTech Report by McKinsey & Company, collegiate peer-study apps are projected to reach $18.4 billion with an 84% user adoption rate.' How should the team verify this output?",
        options: [
            "Accept the statistic immediately because McKinsey is a prestigious consulting firm.",
            "Ask the same LLM: 'Are you sure this McKinsey report is real?'",
            "Execute the Triangulation Rule: Search primary sources (McKinsey website, Statista, Google Scholar) to verify the report title, author, and statistics exist; if unverified, reject the figure.",
            "Use the statistic in the pitch deck, but add a disclaimer that AI wrote the report."
        ],
        correctIndex: 2,
        explanation: "LLMs frequently invent authoritative-sounding reports, authors, and numbers. Asking the LLM to verify itself frequently results in recursive hallucination. The Triangulation Rule requires independent primary source verification before any metric is accepted.",
        takeaway: "Key Rule: If you cannot find the primary PDF or web page for a cited report via a direct web search, the statistic is likely an AI hallucination."
    },
    {
        topic: "Vanity vs. Actionable Metrics",
        question: "Which of the following metrics provides the most reliable evidence of real product-market validation for a pre-revenue mobile app?",
        options: [
            "10,000 landing page impressions from a viral TikTok video.",
            "500 Instagram followers on the app's official concept account.",
            "45 students who deposited a refundable $1 commitment fee to secure priority access to the private beta.",
            "25 classmates who verbally promised they would try the app when it launches."
        ],
        correctIndex: 2,
        explanation: "Passive views, followers, and verbal promises are vanity metrics—they require zero sacrifice of capital or sustained attention. A financial deposit or irreversible commitment (even $1) requires overcoming the 'action threshold' and proves authentic willingness to pay.",
        takeaway: "Key Rule: 10 users who give you $1 or 1 hour of their time are worth 10,000 passive social media impressions."
    },
    {
        topic: "Legal & Ethical Competitor Mining",
        question: "A student developer wants to analyze competitor app performance. Which method violates Apple/Google Developer Terms of Service and ethical research standards?",
        options: [
            "Reading public app store reviews through sanctioned RSS feeds and developer APIs.",
            "Writing a headless browser script that bypasses Cloudflare security to scrape competitor user account profiles, email addresses, and private data.",
            "Manually tabulating 100 public user reviews from the Play Store into a spreadsheet.",
            "Analyzing public release notes and version update frequencies published on the App Store."
        ],
        correctIndex: 1,
        explanation: "Automated bypassing of security barriers to scrape personally identifiable information (PII) or private user profiles directly violates store terms of service (Section 5.3 Apple DPLA, Section 4 Google DDA), CFAA regulations, and data privacy legislation (GDPR/FERPA).",
        takeaway: "Key Rule: Only mine public, anonymized review text; never scrape private user profiles or attempt to bypass authentication barriers."
    },
    {
        topic: "Academic Grounding via Consensus / Elicit",
        question: "Why is querying academic research engines (Consensus or Elicit) valuable when designing an early-stage mobile app's retention mechanics?",
        options: [
            "They write the app's backend SQL database code automatically.",
            "They provide peer-reviewed psychological and behavioral evidence regarding habit formation, cognitive load, and churn triggers rather than marketing hype.",
            "They provide free copyright licenses to copy competitor source code.",
            "They guarantee that venture capitalists will invest in the company."
        ],
        correctIndex: 1,
        explanation: "Consensus and Elicit query peer-reviewed scientific literature. By reviewing empirical studies in Human-Computer Interaction (HCI) and behavioral economics, founders can ground their product mechanics (e.g., streak fatigue, notification desensitization) in validated human behavioral science.",
        takeaway: "Key Rule: Validate your behavioral assumptions against scientific literature before writing algorithms that assume users will change their daily habits."
    },
    {
        topic: "The 'Smoke Test' Validation Gate",
        question: "A student team builds a 1-page pre-launch landing page describing their mobile app concept with a 'Join Private Campus Beta' call-to-action button. Which conversion rate threshold generally indicates strong initial problem-solution resonance among targeted campus visitors?",
        options: [
            "Exactly 0.5% conversion rate.",
            "1% to 2% conversion rate.",
            "15% to 25%+ email conversion rate from targeted, qualified traffic.",
            "100% conversion rate."
        ],
        correctIndex: 2,
        explanation: "For a free beta waitlist from warm, qualified traffic (e.g., student flyers or targeted club channels), a conversion rate between 15% and 25% demonstrates strong resonance. Sub-5% indicates weak value proposition or lack of perceived urgency.",
        takeaway: "Key Rule: If your targeted campus landing page converts under 10% for a free waitlist, the value proposition is not compelling enough to warrant building the app."
    },
    {
        topic: "Lean Canvas Unit Economics (CAC to LTV)",
        question: "If a student mobile app expects an Average Lifetime Value (LTV) of $15 per student user under a freemium model, what is the maximum plausible Customer Acquisition Cost (CAC) the startup should target to maintain healthy unit economics?",
        options: [
            "$45 (3x LTV)",
            "$15 (1x LTV)",
            "$5 or less (Target LTV:CAC ≥ 3:1)",
            "$0.00 (Customer acquisition must never cost money)"
        ],
        correctIndex: 2,
        explanation: "Standard venture and startup unit economics dictate an LTV : CAC ratio of at least 3:1 to cover operational expenses, churn, and server overhead. If LTV is $15, CAC must remain under $5.00 ($15 / 3).",
        takeaway: "Key Rule: If acquiring a student user costs more than one-third of what they will ever pay you, your business model is fundamentally underwater."
    },
    {
        topic: "The Go / Pivot / No-Go Decision Gate",
        question: "After 7 days of validation, a student team discovers: 1) Competitors have 4.8-star ratings with few complaints; 2) 8 out of 10 interviewed students say they are satisfied with their current free WhatsApp/Notion setup; 3) Landing page conversion is 3%. What is the rational Lean decision?",
        options: [
            "GO: Immediately hire a freelance developer to build the app faster.",
            "GO: Add 10 more features to the app concept to make it more appealing.",
            "PIVOT or NO-GO: Acknowledge that the problem lacks market urgency and incumbent friction is low; kill or pivot the idea before wasting 3 months coding.",
            "IGNORE DATA: Assume the students didn't understand the vision and launch anyway."
        ],
        correctIndex: 2,
        explanation: "The validation signals are conclusively negative: high incumbent satisfaction, no acute user pain with current free workarounds, and poor landing page conversion. Killing or pivoting early is a major entrepreneurial victory that saves months of wasted coding.",
        takeaway: "Key Rule: Killing an unviable idea in 7 days saves thousands of dollars and months of energy, freeing you to find an idea that users genuinely want."
    }
];

let quizCurrentIndex = 0;
let quizScore = 0;
let userAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);

function renderQuizQuestion(index) {
    const q = QUIZ_QUESTIONS[index];
    const qNum = document.getElementById('quizQNum');
    const qTopic = document.getElementById('quizQTopic');
    const qText = document.getElementById('quizQText');
    const optList = document.getElementById('quizOptionsList');
    const expBox = document.getElementById('quizExplanationBox');
    const nextBtn = document.getElementById('quizNextBtn');
    const progressBar = document.getElementById('quizProgressBar');

    if (!qText || !optList || !q) return;

    if (qNum) qNum.innerText = `Question ${index + 1} of ${QUIZ_QUESTIONS.length}`;
    if (qTopic) qTopic.innerText = q.topic;
    if (qText) qText.innerText = q.question;
    if (progressBar) progressBar.style.width = `${((index + 1) / QUIZ_QUESTIONS.length) * 100}%`;

    // Render options
    optList.innerHTML = q.options.map((opt, i) => {
        let classes = 'quiz-option-btn';
        const isAnswered = userAnswers[index] !== null;
        if (isAnswered) {
            if (i === q.correctIndex) classes += ' selected-correct';
            else if (i === userAnswers[index]) classes += ' selected-wrong';
        }
        return `
      <button class="${classes}" data-index="${i}" ${isAnswered ? 'disabled' : ''} onclick="handleQuizAnswer(${i})">
        <strong>${['A', 'B', 'C', 'D'][i]}.</strong> <span>${opt}</span>
      </button>
    `;
    }).join('');

    if (userAnswers[index] !== null) {
        showQuizExplanation(index);
        if (nextBtn) nextBtn.disabled = false;
    } else {
        expBox?.classList.add('hidden');
        if (nextBtn) nextBtn.disabled = true;
    }

    if (nextBtn) {
        nextBtn.innerText = index === QUIZ_QUESTIONS.length - 1 ? 'Finish Quiz & View Results →' : 'Next Question →';
    }
}

function handleQuizAnswer(selectedIndex) {
    if (userAnswers[quizCurrentIndex] !== null) return;

    userAnswers[quizCurrentIndex] = selectedIndex;
    const isCorrect = selectedIndex === QUIZ_QUESTIONS[quizCurrentIndex].correctIndex;
    if (isCorrect) quizScore++;

    const scoreDisplay = document.getElementById('currentScoreDisplay');
    if (scoreDisplay) scoreDisplay.innerText = quizScore;

    renderQuizQuestion(quizCurrentIndex);
}

function showQuizExplanation(index) {
    const q = QUIZ_QUESTIONS[index];
    const expBox = document.getElementById('quizExplanationBox');
    const expTitle = document.getElementById('quizExpTitle');
    const expText = document.getElementById('quizExpText');
    const expTakeaway = document.getElementById('quizExpTakeaway');

    const isCorrect = userAnswers[index] === q.correctIndex;

    if (expBox) {
        expBox.classList.remove('hidden');
        if (expTitle) expTitle.innerHTML = isCorrect ? '✅ Correct! High Validation Acumen' : '❌ Incorrect. Review the Core Concept:';
        if (expText) expText.innerText = q.explanation;
        if (expTakeaway) expTakeaway.innerText = q.takeaway;
    }
}

document.getElementById('quizNextBtn')?.addEventListener('click', () => {
    if (quizCurrentIndex < QUIZ_QUESTIONS.length - 1) {
        quizCurrentIndex++;
        renderQuizQuestion(quizCurrentIndex);
    } else {
        showQuizResults();
    }
});

function showQuizResults() {
    document.getElementById('quizCard')?.classList.add('hidden');
    const resCard = document.getElementById('quizResultsCard');
    if (!resCard) return;

    resCard.classList.remove('hidden');
    const scoreVal = document.getElementById('finalScoreVal');
    const badgeIcon = document.getElementById('resultBadgeIcon');
    const resultTitle = document.getElementById('resultTitle');
    const feedback = document.getElementById('resultFeedbackText');

    if (scoreVal) scoreVal.innerText = quizScore;

    if (quizScore >= 9) {
        if (badgeIcon) badgeIcon.innerText = '🏆';
        if (resultTitle) resultTitle.innerText = 'Master Venture Validator';
        if (feedback) feedback.innerText = 'Outstanding! You demonstrate exceptional mastery of The Mom Test, empirical market sizing, hallucination detection, and ethical discovery. You are ready to lead venture validation at any incubator or hackathon.';
    } else if (quizScore >= 7) {
        if (badgeIcon) badgeIcon.innerText = '🚀';
        if (resultTitle) resultTitle.innerText = 'Competent Lean Product Lead';
        if (feedback) feedback.innerText = 'Great job! You have a solid grasp of core validation principles. Keep sharpening your triangulation of AI-generated statistics and strict past-behavior questioning.';
    } else {
        if (badgeIcon) badgeIcon.innerText = '📚';
        if (resultTitle) resultTitle.innerText = 'Apprentice Builder — Review Needed';
        if (feedback) feedback.innerText = 'Good start, but be careful not to fall into the classic traps: asking hypothetical questions, believing unverified AI market numbers, or building before verifying real customer workarounds.';
    }
}

document.getElementById('btnRestartQuiz')?.addEventListener('click', () => {
    quizCurrentIndex = 0;
    quizScore = 0;
    userAnswers.fill(null);
    document.getElementById('quizResultsCard')?.classList.add('hidden');
    document.getElementById('quizCard')?.classList.remove('hidden');
    const scoreDisplay = document.getElementById('currentScoreDisplay');
    if (scoreDisplay) scoreDisplay.innerText = 0;
    renderQuizQuestion(0);
});

// --- 10-PHASE VALIDATION CHECKLIST ---
const CHECKLIST_DATA = [
    {
        phaseNum: 1,
        title: "Phase 1: Problem Space Definition & Target Persona Anchor",
        gate: "Gate: Pass Problem Test",
        tasks: [
            "Articulate Problem Statement in 2 sentences without mentioning apps, AI, or technology.",
            "Define specific collegiate early adopter persona (academic year, habits, existing tools).",
            "Identify existing customer workarounds (spreadsheets, group chats, paper notes)."
        ]
    },
    {
        phaseNum: 2,
        title: "Phase 2: Macro Market Signals & TAM Triangulation",
        gate: "Gate: ≥2 Real Citations",
        tasks: [
            "Query real-time retrieval AI (Perplexity / Gemini) for market size and CAGR.",
            "Triangulate numbers across Statista, Grand View Research, or U.S. BLS.",
            "Calculate conservative bottom-up TAM, SAM, and campus SOM arithmetic."
        ]
    },
    {
        phaseNum: 3,
        title: "Phase 3: Competitor Benchmark & Feature Matrix Audit",
        gate: "Gate: Clear Value Vector",
        tasks: [
            "Benchmark 5 direct and indirect competitors across 10 functional criteria.",
            "Identify incumbent vulnerabilities (predatory subscriptions, lack of student tier).",
            "Map distinct defensible value proposition ($0 stack, empirical review mining)."
        ]
    },
    {
        phaseNum: 4,
        title: "Phase 4: Play Store & App Store Review Thematic Mining",
        gate: "Gate: ≥50 Reviews Parsed",
        tasks: [
            "Collect 50+ public 1-star, 2-star, and 3-star reviews from competitor app store listings.",
            "Execute automated NLP thematic clustering to group complaints into technical, pricing, and feature gaps.",
            "Extract 5 verbatim 'Quotes of Anguish' articulating acute student friction."
        ]
    },
    {
        phaseNum: 5,
        title: "Phase 5: Academic & Behavioral Evidence via Consensus / Elicit",
        gate: "Gate: Peer-Reviewed Study",
        tasks: [
            "Query Consensus or Elicit for peer-reviewed studies on user habit retention.",
            "Verify empirical drop-off curves and cognitive fatigue factors.",
            "Align app notification and streak mechanics with HCI research findings."
        ]
    },
    {
        phaseNum: 6,
        title: "Phase 6: Unbiased Customer Discovery Interviews (The Mom Test)",
        gate: "Gate: ≥70% Had Workaround",
        tasks: [
            "Draft 5 past-behavior interview questions strictly following The Mom Test rules.",
            "Conduct 10 in-person campus discovery interviews outside friend/family circle.",
            "Upload notes to NotebookLM to score documented past friction and willingness to act."
        ]
    },
    {
        phaseNum: 7,
        title: "Phase 7: Hallucination & Fact-Check Verification Gate",
        gate: "Gate: 0 Unflagged AI Stats",
        tasks: [
            "Audit every market research URL to ensure it resolves to a real institutional domain.",
            "Execute adversarial 'Devil's Advocate' prompt to uncover platform policy risks.",
            "Watermark any AI-synthesized approximation with [UNVERIFIED AI PROJECTION]."
        ]
    },
    {
        phaseNum: 8,
        title: "Phase 8: Lean Canvas & Unit Economics Modeling",
        gate: "Gate: CAC < LTV / 3",
        tasks: [
            "Complete all 9 Ash Maurya Lean Canvas blocks.",
            "Verify unit economics: LTV:CAC ratio is at least 3:1.",
            "Specify 3 Agile Scrum user stories with GIVEN / WHEN / THEN acceptance criteria."
        ]
    },
    {
        phaseNum: 9,
        title: "Phase 9: Smoke Test & Pre-Launch Demand Signal",
        gate: "Gate: ≥15% Conversion",
        tasks: [
            "Deploy a $0 1-page landing page (Carrd/Vercel) with waitlist signup.",
            "Distribute flyers with QR codes across campus computer labs and student hubs.",
            "Measure qualified email conversion rate (target: 15%–25%)."
        ]
    },
    {
        phaseNum: 10,
        title: "Phase 10: Go / Pivot / No-Go Decision Gate",
        gate: "Gate: Score ≥ 75 / 100",
        tasks: [
            "Compute composite Validation Readiness Index across 5 dimensions.",
            "Conduct team sprint review: Vote GO (build MVP), PIVOT, or KILL idea gracefully.",
            "Present grounded validation dossier to incubator mentor or capstone professor."
        ]
    }
];

function renderChecklist() {
    const container = document.getElementById('checklistContainer');
    if (!container) return;

    const savedState = JSON.parse(localStorage.getItem('validify_checklist_state') || '{}');

    container.innerHTML = CHECKLIST_DATA.map(phase => {
        return `
      <div class="checklist-phase-card">
        <div class="phase-card-header">
          <div class="phase-title">${phase.title}</div>
          <span class="phase-gate-badge">${phase.gate}</span>
        </div>
        <div class="phase-tasks-list">
          ${phase.tasks.map((task, idx) => {
            const taskId = `task_${phase.phaseNum}_${idx}`;
            const isChecked = !!savedState[taskId];
            return `
              <label class="task-item ${isChecked ? 'checked' : ''}" id="label_${taskId}">
                <input type="checkbox" id="${taskId}" ${isChecked ? 'checked' : ''} onchange="toggleTask('${taskId}')">
                <span>${task}</span>
              </label>
            `;
        }).join('')}
        </div>
      </div>
    `;
    }).join('');

    updateChecklistProgress();
}

function toggleTask(taskId) {
    const checkbox = document.getElementById(taskId);
    const label = document.getElementById(`label_${taskId}`);
    const savedState = JSON.parse(localStorage.getItem('validify_checklist_state') || '{}');

    if (checkbox && label) {
        if (checkbox.checked) {
            label.classList.add('checked');
            savedState[taskId] = true;
        } else {
            label.classList.remove('checked');
            delete savedState[taskId];
        }
        localStorage.setItem('validify_checklist_state', JSON.stringify(savedState));
        updateChecklistProgress();
    }
}

function updateChecklistProgress() {
    const savedState = JSON.parse(localStorage.getItem('validify_checklist_state') || '{}');
    const totalTasks = CHECKLIST_DATA.reduce((acc, p) => acc + p.tasks.length, 0);
    const checkedTasks = Object.keys(savedState).length;
    const pct = Math.round((checkedTasks / totalTasks) * 100);

    const pctElem = document.getElementById('checklistPctText');
    if (pctElem) pctElem.innerText = `${pct}%`;
}

document.getElementById('btnResetChecklist')?.addEventListener('click', () => {
    if (confirm("Are you sure you want to reset all checklist progress?")) {
        localStorage.removeItem('validify_checklist_state');
        renderChecklist();
    }
});

// --- COMPETITOR REVIEW THEMATIC MINER (LIVE CLIENT-SIDE NLP TOOL) ---
const SAMPLE_REVIEWS_TEXT = `Misleading free trial: The app promised a free initial validation but immediately hit me with a $15 per month paywall before I could even read the first paragraph of feedback. Super predatory subscription model.
Generic answers: It just feels like a cheap wrapper around basic ChatGPT. Every time I submit a new mobile app idea it gives me the exact same generic advice about marketing on social media. No real competitor data at all.
Crashed and lost my project: Typed out a long description of my capstone app for 20 minutes and hit submit. The app crashed on mobile and completely wiped my input. No autosave feature whatsoever.
Okay for brainstorming but unverified: Gives you a quick SWOT analysis in 30 seconds which is neat, but the market size numbers it gave me were completely made up. It claimed my niche was a $12 billion market with zero citations.
No mobile app: Trying to use their web interface on an iPhone Safari browser is terrible. The layout overflows and you cannot tap the export button.
Extremely expensive for students: $40 per report is insane for college founders! I just wanted a quick competitor comparison and got charged immediately. Cannot recommend for anyone on a tight budget.
Too much text not enough action: The 30 page report looks pretty with fancy radar charts, but 90% of it is buzzword fluff. It doesn't tell our dev team what features to actually code first.
Subscription trap: Signed up for a 3-day trial and was billed $99 automatically without any warning email. Customer support took 2 weeks to respond and refused my refund.
Outdated data: It cited competitor apps that shut down two years ago as active market threats. Clearly relying on stale training data without live web verification.
Decent PDF layout: The PDF looks professional for sending to a professor, but lacks export to CSV or JSON for our agile backlog.
Fake audience feedback: They claim 100 real people reviewed my concept, but all the respondent comments sound like bot-generated LLM text. No real human feedback.
Steep price tag: Charged $49 for a one-time check. As a student hackathon team with $0 budget we had to split it four ways and the result was basically a single score number.
No team collaboration: Only one user can log in. I couldn't share the project with my co-founders without giving them my master password. Needs team workspace seats.
Irrelevant survey questions: The simulated questions asked nothing about mobile UX or app store distribution. Felt like a generic B2B consulting survey.
Interesting score: The validation readiness score was cool to look at, but without actionable steps to improve the score it leaves you hanging.
Hallucinated market statistics: The report cited a non-existent 2024 McKinsey survey with a fake author. When our business professor googled it, nothing came up. Embarrassing!
No mobile app store data: I wanted to know why people were leaving 1-star reviews on existing apps so we could fix those bugs, but the tool provides zero app store mining.
Horrible mobile responsive design: You cannot view the full 25-page report on a smartphone. Buttons overlap and tables are cut off on iOS Safari.
Way too expensive: $39 per report or $99/mo is completely out of reach for undergraduate founders. There is no student discount tier.
Good structure bad verification: The section headers are well-organized, but you have to fact-check every single number yourself anyway.
Auto renew nightmare: Billed my debit card twice. Had to call my bank to block transactions because their cancel subscription button leads to a 404 page.
Echo chamber praise: It told me my social app for campus dog walking was a guaranteed unicorn. It feels like it was programmed never to hurt my feelings. Where is the critical critique?
Offline mode broken: If your WiFi drops for 2 seconds while reading the report, the page refreshes and locks you out until you log in again.
Need customer interview tracking: Generating business reports is fine, but it doesn't give us any interview scripts or way to record real student user interviews on campus.
Zero citation links: Not a single URL in the entire 15-page dossier. How can I verify where any of these statistics came from?
Paywall lock-in: Generated a report but couldn't export it to PDF without upgrading to the highest $99 tier. Feels deceptive.
Way too expensive for students: Maze is amazing for user testing, but $99 to $500 a month is impossible for a college side-project. We need a free tier for student builders.
Requires existing prototype: You can only use Maze if you already spent 3 weeks building a Figma prototype. It doesn't help validate raw app ideas before designing.
No export options: You can't even download your project as a Markdown file or CSV for our GitHub repository. Everything is trapped in their web app.
Slow loading times: Generating one report took almost 8 minutes, and twice it timed out with an internal server error 504.
Biased student questions: The default questions encourage vanity metrics like 'would you download this'. It needs to follow The Mom Test rules.
Buggy login system: Magic link login fails on mobile browsers. Had to reset password three times just to view my saved report.
Missing competitor comparison: It mentioned only one competitor and it was completely unrelated to our actual mobile niche. Needs a real 5-competitor feature table.
Hidden fees: Advertised $19 special price, but at checkout added a mandatory $15 consulting fee. Very deceptive checkout flow.
Zero mobile responsiveness: Impossible to navigate on an iPad or mobile screen. Buttons fly off the screen.
Invented competitor names: It listed two competitor companies with fake URLs that don't exist. When I clicked the links they were dead 404 domains.
Complex onboarding: The learning curve is very steep. Took our capstone dev team 4 days just to figure out how to configure test blocks and video triggers.
No dark mode: White glaring screen causes serious eye strain when working late during overnight hackathons.
No Agile user stories: Gives you high level strategy but no user stories with Given/When/Then acceptance criteria for our Jira or Linear backlog.
Lack of academic citations: None of the claims cite peer-reviewed research or behavioral psychology studies from Consensus or Elicit.
Paywalled PDF download: Charged me $39 to generate and then demanded another $10 to download the PDF without a watermark.
Weak security: Doesn't offer two-factor authentication or SOC2 compliance. Not safe for proprietary university IP.
Stolen credit card charges: Saw two unauthorized monthly renewals after I explicitly clicked cancel in my dashboard settings.
Slow customer support: Sent three support tickets regarding missing survey results and waited 9 days for an automated boilerplate reply.
Confusing navigation: Too many nested menus. It is nearly impossible to find your past archived reports.
Flattering nonsense: Told me my app had no competitors when there are literally three 10-million download apps on the App Store doing the exact same thing.
No Slack or Discord integration: Our dev team lives in Discord. There is no webhook to notify teammates when a report is ready.
Deceptive marketing: Advertised as free for students on Product Hunt, but once you register it demands a credit card upfront.
Broken CSV export: Exported CSV was garbled with broken UTF-8 characters and mangled table cells. Unusable in Excel.
Overkill for initial idea: Great tool for mature products, but complete overkill when you just want to know if students care about a problem.`;

document.getElementById('btnLoadSampleReviews')?.addEventListener('click', () => {
    const textarea = document.getElementById('reviewInputArea');
    if (textarea) {
        textarea.value = SAMPLE_REVIEWS_TEXT;
        document.getElementById('reviewCountBadge').innerText = '50 Reviews Loaded';
    }
});

let lastExtractionData = null;

function runThematicExtraction() {
    const text = document.getElementById('reviewInputArea')?.value || '';
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 5);

    if (lines.length === 0) {
        alert("Please enter or load some reviews first!");
        return;
    }

    const clusters = {
        economic: { count: 0, keywords: ["paywall", "price", "expensive", "charged", "billed", "fee", "subscription", "money", "budget", "cost", "refund", "debit", "trap", "hidden"], quotes: [] },
        technical: { count: 0, keywords: ["crash", "crashed", "bug", "buggy", "slow", "broke", "broken", "timed out", "404", "504", "wipe", "wiped", "lost", "offline", "loading", "fail", "error", "garbled", "glaring"], quotes: [] },
        unmet: { count: 0, keywords: ["export", "csv", "json", "mobile", "interview", "mom test", "citation", "citations", "source", "competitor", "figma", "agile", "user stories", "discord", "slack", "team", "collab", "collaboration", "dark mode", "prototype"], quotes: [] }
    };

    lines.forEach(line => {
        const lower = line.toLowerCase();

        // Check economic
        if (clusters.economic.keywords.some(kw => new RegExp(`\\b${kw}\\b`, 'i').test(lower))) {
            clusters.economic.count++;
            if (clusters.economic.quotes.length < 2) clusters.economic.quotes.push(line);
        }
        // Check technical
        if (clusters.technical.keywords.some(kw => new RegExp(`\\b${kw}\\b`, 'i').test(lower))) {
            clusters.technical.count++;
            if (clusters.technical.quotes.length < 2) clusters.technical.quotes.push(line);
        }
        // Check unmet
        if (clusters.unmet.keywords.some(kw => new RegExp(`\\b${kw}\\b`, 'i').test(lower))) {
            clusters.unmet.count++;
            if (clusters.unmet.quotes.length < 2) clusters.unmet.quotes.push(line);
        }
    });

    const total = lines.length;
    const econPct = Math.round((clusters.economic.count / total) * 100);
    const techPct = Math.round((clusters.technical.count / total) * 100);
    const featPct = Math.round((clusters.unmet.count / total) * 100);

    // Update UI bars
    document.getElementById('valEconPct').innerText = `${econPct}% (${clusters.economic.count})`;
    document.getElementById('barEcon').style.width = `${econPct}%`;

    document.getElementById('valTechPct').innerText = `${techPct}% (${clusters.technical.count})`;
    document.getElementById('barTech').style.width = `${techPct}%`;

    document.getElementById('valFeatPct').innerText = `${featPct}% (${clusters.unmet.count})`;
    document.getElementById('barFeat').style.width = `${featPct}%`;

    // Render quotes
    const quotesList = document.getElementById('quotesVaultList');
    const allQuotes = [
        ...clusters.economic.quotes.map(q => ({ text: q, category: "Economic Friction" })),
        ...clusters.technical.quotes.map(q => ({ text: q, category: "Technical Flaws" })),
        ...clusters.unmet.quotes.map(q => ({ text: q, category: "Unmet Workflow Gap" }))
    ];

    if (quotesList) {
        quotesList.innerHTML = allQuotes.map(item => `
      <div class="quote-item">
        "${item.text}"
        <cite>— Identified in: ${item.category}</cite>
      </div>
    `).join('');
    }

    lastExtractionData = {
        total,
        clusters: [
            { name: "Economic Friction", count: clusters.economic.count, pct: `${econPct}%` },
            { name: "Technical Flaws", count: clusters.technical.count, pct: `${techPct}%` },
            { name: "Unmet Features & Workflow Gaps", count: clusters.unmet.count, pct: `${featPct}%` }
        ]
    };
}

document.getElementById('btnRunExtraction')?.addEventListener('click', runThematicExtraction);

document.getElementById('btnExportExtractedCsv')?.addEventListener('click', () => {
    if (!lastExtractionData) {
        alert("Please run thematic extraction first!");
        return;
    }

    let csvContent = "data:text/csv;charset=utf-8,Thematic_Cluster,Review_Count,Share_Percentage\n";
    lastExtractionData.clusters.forEach(c => {
        csvContent += `"${c.name}",${c.count},"${c.pct}"\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "competitor_review_themes_summary.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// --- PROMPT PLAYBOOK ACCORDION ---
const PROMPTS_DATA = [
    {
        title: "1. Triangulated Market Sizing & Signal Extraction",
        tool: "Perplexity AI / Google Gemini",
        phase: "Phase 2 (TAM/SAM/SOM Sizing)",
        promptText: `You are a conservative, empirical Market Research Analyst. Your objective is to estimate market sizing bounds without hyperbole. You must adhere to the Triangulation Rule: every numeric estimate (TAM, SAM, SOM, CAGR) must be linked to a recognized institutional source (Statista, Grand View Research, BLS, SEC). If a number cannot be verified, state "UNVERIFIED AI ESTIMATE".

Analyze the market opportunity for:
- App Category: [e.g. Peer Study Coordination & Habit Tracking]
- Target Demographic: [e.g. Undergraduate college students aged 18-24]
- Geographic Scope: [e.g. United States & Canada]

1. Macro Sector Metrics (Size, historical and projected CAGR with sources).
2. TAM, SAM, SOM Bottom-Up Arithmetic: (Target students) × (ARPU) × (Penetration rate).
3. Median App Store churn rates and day-30 retention benchmarks for this category.
4. List any numbers that are conservative vs. optimistic.`
    },
    {
        title: "2. Competitor Review Thematic Mining & Friction Audit",
        tool: "Claude 3.5 Sonnet / ChatGPT-4o",
        phase: "Phase 4 (Competitor Intelligence)",
        promptText: `You are a Principal Product Manager conducting an exhaustive competitor tear-down. Analyze the supplied batch of raw public 1-star, 2-star, and 3-star user reviews from competitor mobile apps.

INPUT REVIEWS:
"""
[PASTE COMPETITOR REVIEWS HERE]
"""

1. THEMATIC CLUSTERING MATRIX:
   Group complaints into:
   a) Technical Flaws & Reliability (crashes, sync latency, offline bugs)
   b) Economic & Monetization Friction (paywalls, subscription traps)
   c) Missing Workflows & Unmet Desires (features users repeatedly begged for)
2. Extract the 5 most emotionally intense verbatim user quotes.
3. Identify 2 features competitors built that users actively hate (Features to AVOID).
4. Formulate 3 concrete MVP features solving the #1, #2, and #3 most frequent user complaints.`
    },
    {
        title: "3. 'The Mom Test' Customer Discovery Script Generator",
        tool: "ChatGPT-4o / Claude 3.5",
        phase: "Phase 6 (Customer Discovery)",
        promptText: `You are a Customer Discovery Master Coach adhering strictly to the principles of "The Mom Test" by Rob Fitzpatrick.
RULES:
- NEVER mention the app idea, the solution, or any technology.
- NEVER ask about future behavior ("Would you use...", "How much would you pay...").
- ONLY ask about concrete past actions ("When was the last time you...", "What did you do...").
- Dig into money, time, and emotional energy already spent trying to solve the problem.

Problem Hypothesis: [e.g. Students struggle to coordinate group study times across messy chats]
Target Persona: [e.g. Undergraduate engineering students]

Generate:
1. 5 core past-behavior questions with green-flag positive signals and red-flag polite noises.
2. 3 drill-down prompts for vague answers ("What did that cost you in time/money?").
3. A commitment/sacrifice closing test asking for real time or reputation.`
    },
    {
        title: "4. Academic Behavioral Grounding Query (Consensus / Elicit)",
        tool: "Consensus AI / Elicit",
        phase: "Phase 5 (Scientific Rigor)",
        promptText: `SEARCH QUERY SYNTAX:
"What factors influence daily study habit adherence and social accountability among university students in mobile interventions?"

POST-RETRIEVAL SYNTHESIS PROMPT:
You are an HCI and Behavioral Economics researcher. Review peer-reviewed papers retrieved from Consensus and summarize:
1. Empirical consensus regarding 30-day user adherence drop-off curves.
2. Scientific evidence on whether social streaks/accountability improve or harm retention (citing authors and journals).
3. 3 evidence-grounded UX guidelines for our mobile app to prevent habit fatigue.`
    },
    {
        title: "5. Adversarial 'Devil's Advocate' Hallucination & Risk Audit",
        tool: "Claude 3.5 Sonnet / ChatGPT-4o",
        phase: "Phase 7 & 10 (Red-Teaming)",
        promptText: `You are a cynical, highly analytical Venture Capital Partner conducting ruthless due diligence. You reject 99% of pitches. Your job is NOT to encourage the founders. Your sole duty is to tear apart this mobile app concept, identify hidden assumptions, and test for hallucinated optimism.

PROPOSAL & CANVAS:
"""
[PASTE PROPOSAL AND LEAN CANVAS HERE]
"""

1. THE "NOBODY CARES" ATTACK: Why will students verbally praise this but refuse to pay $1 or download a separate app?
2. PLATFORM RISK: Examine Apple Guideline 3.1.1 (IAP 30% tax) and privacy rules. What triggers app store rejection?
3. INCUMBENT CRUSH: What happens when Notion or Apple Notes adds this as a minor feature?
4. Flag any wishful thinking or ungrounded statistics.
5. Assign a Plausibility Score (0-100). If <70, state the single required pivot.`
    },
    {
        title: "6. Lean Canvas & Unit Economics Synthesizer",
        tool: "Google Gemini Flash / ChatGPT-4o",
        phase: "Phase 8 (Business Model)",
        promptText: `You are a Lean Startup Master Architect. Using validated inputs from customer interviews, competitor review analysis, and market sizing, synthesize a complete 9-block Lean Canvas for a mobile app project.

INPUTS:
- Problem & Persona: [e.g. Student app dev teams coding without market demand]
- Competitor Gaps: [e.g. Paywalled tools, hallucinated data, lack of review mining]
- Customer Interviews: [e.g. 8/10 students experienced failed hackathon builds]

1. Output complete 9-block Lean Canvas (Ash Maurya format).
2. Calculate plausible CAC, ARPU, and LTV; verify LTV:CAC is >= 3:1.
3. Write 3 Agile User Stories with GIVEN / WHEN / THEN acceptance criteria and Fibonacci story points.`
    }
];

function renderPrompts() {
    const container = document.getElementById('promptsAccordion');
    if (!container) return;

    container.innerHTML = PROMPTS_DATA.map((p, i) => `
    <div class="prompt-card">
      <div class="prompt-card-header" onclick="togglePromptAccordion(${i})">
        <div class="prompt-title-group">
          <h4>${p.title}</h4>
          <div class="prompt-meta">Tool: <strong>${p.tool}</strong> • ${p.phase}</div>
        </div>
        <button class="btn-xs btn-outline">Toggle ▼</button>
      </div>
      <div class="prompt-body" id="promptBody_${i}" style="display: ${i === 0 ? 'block' : 'none'};">
        <pre class="prompt-text-block" id="promptText_${i}">${p.promptText}</pre>
        <div class="prompt-actions">
          <button class="btn-primary btn-xs" onclick="copyPromptText(${i})">📋 Copy Prompt Template</button>
        </div>
      </div>
    </div>
  `).join('');
}

function togglePromptAccordion(index) {
    const body = document.getElementById(`promptBody_${index}`);
    if (body) {
        body.style.display = body.style.display === 'none' ? 'block' : 'none';
    }
}

function copyPromptText(index) {
    const text = document.getElementById(`promptText_${index}`)?.innerText;
    if (text) {
        navigator.clipboard.writeText(text).then(() => {
            alert("Prompt copied to clipboard! Paste directly into Perplexity, Claude, ChatGPT, or Gemini.");
        }).catch(err => alert("Copy failed: " + err));
    }
}

function copyDocumentText(elemId) {
    const text = document.getElementById(elemId)?.innerText;
    if (text) {
        navigator.clipboard.writeText(text).then(() => {
            alert("Full market analysis report copied to clipboard!");
        }).catch(err => alert("Copy failed: " + err));
    }
}

// Export Full Dossier
document.getElementById('btnExportDossier')?.addEventListener('click', () => {
    window.print();
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    renderSlide(0);
    renderQuizQuestion(0);
    renderChecklist();
    renderPrompts();
    updateTamCalculator();
});
