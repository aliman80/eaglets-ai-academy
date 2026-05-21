export const siteData = {
  academyName: "Eaglets AI Academy",
  tagline: "Online Learning, AI Training, Research Mentoring, and Career Guidance",
  subtitle: "Personalized academic support, research guidance, professional mentoring, and selected Islamic short courses for students, researchers, and lifelong learners.",
  contact: {
    email: "aliman8@gmail.com",
    whatsapp: "03219595531",
    linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN",
    location: "Pakistan / Online Worldwide"
  },
  about: {
    name: "Dr. Muhammad Ali",
    title: "Founder & Lead Instructor",
    credentials: "PhD in Machine Learning and Computer Vision, MBZUAI",
    bio: [
      "Welcome to my academy! I am Dr. Muhammad Ali, a passionate AI researcher and educator with a PhD from the prestigious Mohamed bin Zayed University of Artificial Intelligence (MBZUAI).",
      "My research primarily focuses on computer vision, medical image segmentation, Vision-Language Models (VLMs), and deep learning methodologies. Over the years, I have published multiple research papers in top-tier journals and conferences.",
      "I built this academy to bridge the gap between academic theory and practical industry application. My goal is to equip students, professionals, and researchers with the exact coding skills and research techniques needed to excel in the rapidly evolving world of Artificial Intelligence."
    ]
  },
  pricing: {
    group: "PKR 10,000 per student (minimum group of 5 students)",
    individual: "PKR 10,000 per student",
    mentoring: "PKR 10,000 per student",
    research: "PKR 15,000",
    international: "Price to be confirmed depending on topic, expert, and duration"
  },
  courses: [
    {
      id: "python-beginners",
      category: "Programming and AI",
      title: "Python for Beginners",
      shortDescription: "Learn Python basics, variables, loops, functions, files, and simple problem-solving.",
      overview: "Get a solid foundation in Python, the most popular language for data science and AI. This course takes you from absolute scratch to writing robust scripts, solving computational problems, and working with data files.",
      duration: "4 Weeks",
      level: "Beginner",
      mode: "Online Live",
      whoShouldJoin: "Absolute beginners, students, professionals looking to automate tasks, or anyone starting their AI journey.",
      syllabus: [
        "Variables, Data Types, and Operators",
        "Control Flow: Conditionals and Loops",
        "Functions, Modules, and Error Handling",
        "File I/O and Introduction to NumPy/Pandas"
      ],
      outcomes: [
        "Write modular, clean Python code from scratch.",
        "Read, write, and manipulate data files dynamically.",
        "Understand core programming concepts like variables, loops, and logic.",
        "Build a foundation for advanced data analysis and machine learning."
      ],
      tools: ["Python", "VS Code", "Jupyter Notebook"],
      fee: "PKR 10,000"
    },
    {
      id: "ml-foundations",
      category: "Programming and AI",
      title: "Machine Learning Foundations",
      shortDescription: "Learn supervised learning, classification, regression, model evaluation, and practical ML workflows.",
      overview: "Understand how machines learn from data. Dive deep into supervised learning techniques, learn how to prepare datasets, train classification and regression models, and rigorously evaluate their performance.",
      duration: "6 Weeks",
      level: "Intermediate",
      mode: "Online Live",
      whoShouldJoin: "Aspiring data scientists, software engineers transitioning to AI, and students with basic Python knowledge.",
      syllabus: [
        "Introduction to Machine Learning & Data Preprocessing",
        "Regression Models: Linear and Logistic Regression",
        "Classification: Decision Trees and Random Forests",
        "Model Evaluation, Validation, and Hyperparameter Tuning"
      ],
      outcomes: [
        "Clean, preprocess, and prepare raw data for training.",
        "Implement regression and classification models.",
        "Use Scikit-Learn to build and deploy ML pipelines.",
        "Evaluate models using precision, recall, and ROC-AUC metrics."
      ],
      tools: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
      fee: "PKR 10,000"
    },
    {
      id: "dl-pytorch",
      category: "Programming and AI",
      title: "Deep Learning with PyTorch",
      shortDescription: "Learn neural networks, loss functions, training loops, CNNs, and practical PyTorch implementation.",
      overview: "Master the leading framework for deep learning research and industry. Build, train, and debug neural networks, write custom training loops, implement Convolutional Neural Networks (CNNs) for vision tasks, and deploy models.",
      duration: "8 Weeks",
      level: "Advanced",
      mode: "Online Live",
      whoShouldJoin: "Developers, researchers, and advanced students who want to build custom deep learning architectures.",
      syllabus: [
        "Tensors & PyTorch Autograd Fundamentals",
        "Building Neural Networks: Linear Layers and Activation Functions",
        "Optimizers, Loss Functions, and Custom Training Loops",
        "Convolutional Neural Networks (CNNs) for Computer Vision"
      ],
      outcomes: [
        "Manipulate high-dimensional PyTorch tensors efficiently.",
        "Write custom training, validation, and evaluation loops.",
        "Build feedforward neural networks and CNNs in PyTorch.",
        "Debug and optimize model gradients and training performance."
      ],
      tools: ["Python", "PyTorch", "Google Colab", "Jupyter"],
      fee: "PKR 10,000"
    },
    {
      id: "agentic-ai-llm",
      category: "Programming and AI",
      title: "Agentic AI and LLM Applications",
      shortDescription: "Learn how to use LLMs, tools, agents, RAG, and automation for real-world AI applications.",
      overview: "Step into the cutting edge of AI. Learn how to build intelligent agents that use Large Language Models, leverage external tools, execute complex workflows, perform Retrieval-Augmented Generation (RAG), and automate enterprise tasks.",
      duration: "6 Weeks",
      level: "All Levels",
      mode: "Online Live",
      whoShouldJoin: "Developers, product managers, and AI enthusiasts wanting to build production-grade LLM applications.",
      syllabus: [
        "Introduction to LLMs, API Integrations, and Prompt Engineering",
        "Retrieval-Augmented Generation (RAG) and Vector Databases",
        "Building LLM Agents: ReAct Framework and Tool Use",
        "Multi-Agent Orchestration and Production Workflows"
      ],
      outcomes: [
        "Integrate state-of-the-art LLMs (OpenAI, Anthropic, Gemini) via APIs.",
        "Build RAG pipelines with semantic search and vector stores.",
        "Create autonomous AI agents capable of reasoning and tool execution.",
        "Deploy multi-agent workflows for complex task automation."
      ],
      tools: ["Python", "LangChain / LangGraph", "OpenAI API", "ChromaDB", "CrewAI"],
      fee: "PKR 10,000"
    },
    {
      id: "data-analytics",
      category: "Programming and AI",
      title: "Data Analytics and Dashboards",
      shortDescription: "Learn Excel/CSV analysis, Python pandas, visualization, and dashboard-building concepts.",
      overview: "Turn raw data into actionable business insights. Learn how to parse CSV/Excel files, perform data cleaning and aggregation in Pandas, create stunning visualizations, and build interactive dashboards.",
      duration: "4 Weeks",
      level: "Beginner",
      mode: "Online Live",
      whoShouldJoin: "Business analysts, marketers, students, and anyone looking to learn data aggregation and presentation.",
      syllabus: [
        "Data Wrangling: Reading Excel/CSV with Pandas",
        "Data Cleaning, Filtering, and GroupBy Aggregations",
        "Data Visualization with Seaborn and Plotly",
        "Building Interactive Dashboards with Streamlit"
      ],
      outcomes: [
        "Clean and parse noisy, real-world spreadsheet data.",
        "Perform complex aggregations and queries in Pandas.",
        "Generate publication-quality charts and graphs.",
        "Build and host an interactive, web-based data dashboard."
      ],
      tools: ["Python", "Pandas", "Seaborn", "Plotly", "Streamlit"],
      fee: "PKR 10,000"
    },
    {
      id: "cv-basics",
      category: "Programming and AI",
      title: "Computer Vision Basics",
      shortDescription: "Learn image classification, object detection, segmentation basics, and real-world CV applications.",
      overview: "Learn how computers see. Study the foundational principles of image processing, feature extraction, and leverage pre-trained deep learning models for classification, detection, and segmentation.",
      duration: "6 Weeks",
      level: "Beginner",
      mode: "Online Live",
      whoShouldJoin: "Aspiring computer vision engineers, robotics enthusiasts, and software developers.",
      syllabus: [
        "Image Processing Fundamentals with OpenCV",
        "Image Classification using Pre-trained CNNs",
        "Object Detection with YOLO",
        "Image Segmentation and Real-World Applications"
      ],
      outcomes: [
        "Perform image manipulations and pixel transformations in OpenCV.",
        "Deploy state-of-the-art YOLO models for real-time object detection.",
        "Implement pre-trained CNNs for classification tasks.",
        "Understand the workflow of modern commercial vision systems."
      ],
      tools: ["Python", "OpenCV", "YOLO", "PyTorch", "Hugging Face"],
      fee: "PKR 10,000"
    },
    {
      id: "research-mentorship",
      category: "Research and Mentoring",
      title: "Research Mentorship",
      shortDescription: "One-to-one guidance for research direction, paper reading, experiment planning, academic writing, and publication preparation.",
      overview: "Work one-on-one with Dr. Ali to navigate your MS/PhD research or professional publication journey. This highly personalized mentorship provides strategic guidance across literature review, methodology selection, experiment planning, academic paper writing, LaTeX formatting, and navigating peer review.",
      duration: "Flexible",
      level: "All Levels",
      mode: "Mentoring",
      whoShouldJoin: "MS/PhD scholars, undergraduate thesis students, and professionals pursuing research publications.",
      syllabus: [
        "Research Gap Identification & Topic Selection",
        "Literature Synthesis & Research Methodology Formulation",
        "Experimental Setup, Validation, and Metric Selection",
        "Academic Writing, LaTeX Formatting & Submission Strategy"
      ],
      outcomes: [
        "Formulate a novel and publishable research topic.",
        "Synthesize existing research to write a bulletproof literature review.",
        "Design rigorous, reproducible, and verifiable experiment setups.",
        "Draft, format, and structure academic papers for high-impact venues."
      ],
      tools: ["LaTeX", "Mendeley / Zotero", "Overleaf", "Google Scholar"],
      fee: "PKR 15,000"
    },
    {
      id: "math-9-10",
      category: "School and College Academic Courses",
      title: "Mathematics for Grade 9 and 10",
      shortDescription: "Concept-based preparation for Grade 9 and 10 mathematics, including problem-solving, exam practice, and board-style questions.",
      overview: "Get concept-based, step-by-step preparation for Grade 9 and 10 Mathematics. This course covers everything from algebraic foundations to geometry and trigonometry, ensuring a thorough understanding of concepts and ample exam practice with board-style questions.",
      duration: "Ongoing / Flexible",
      level: "Grade 9 & 10",
      mode: "Online Live",
      whoShouldJoin: "Students in Grade 9 and 10 aiming to build strong mathematical foundations and score exceptionally well in board exams.",
      syllabus: [
        "Algebra, Matrices, and Determinants",
        "Logarithms, Sets, and Functions",
        "Geometry, Theorems, and Practical Geometry",
        "Trigonometry and Exam-Style Question Practice"
      ],
      outcomes: [
        "Solve complex algebraic and geometric problems systematically.",
        "Apply mathematical formulas and theorems with clear understanding.",
        "Tackle board-style exam papers under timed conditions.",
        "Establish a rock-solid mathematical base for future studies."
      ],
      tools: ["Whiteboard Lectures", "Concept Notes", "Past Papers"],
      fee: "PKR 10,000"
    },
    {
      id: "physics-9-10",
      category: "School and College Academic Courses",
      title: "Physics for Grade 9 and 10",
      shortDescription: "Clear explanation of core physics concepts, numerical practice, diagrams, and exam-oriented preparation for Grade 9 and 10.",
      overview: "Master the foundations of physics. This course offers clear explanations of physical laws, rigorous numerical problem-solving practice, diagram construction, and exam-oriented preparation tailored for Grade 9 and 10 students.",
      duration: "Ongoing / Flexible",
      level: "Grade 9 & 10",
      mode: "Online Live",
      whoShouldJoin: "9th and 10th grade students seeking to demystify physics concepts and excel in theoretical and numerical board examinations.",
      syllabus: [
        "Physical Quantities, Measurement, and Kinematics",
        "Dynamics, Forces, and Gravitation",
        "Work, Energy, and Properties of Matter",
        "Waves, Electromagnetism, and Atomic Physics"
      ],
      outcomes: [
        "Explain physical laws, principles, and concepts clearly.",
        "Solve numerical calculations and application-based questions.",
        "Draw clean, well-labeled physics diagrams for exam marks.",
        "Apply physical theories to real-world observations."
      ],
      tools: ["Interactive Simulations", "Physics Notes", "Past Papers"],
      fee: "PKR 10,000"
    },
    {
      id: "physics-11-12",
      category: "School and College Academic Courses",
      title: "Physics for Grade 11 and 12",
      shortDescription: "Intermediate-level physics covering concepts, derivations, numerical problems, and exam-focused preparation for Grade 11 and 12.",
      overview: "Bridge the gap between introductory physics and advanced university science. This intermediate-level course deep-dives into mathematical derivations, multi-step numerical calculations, advanced theoretical physics, and exam-focused preparations for Grade 11 and 12 (FSc / A-Level).",
      duration: "Ongoing / Flexible",
      level: "Grade 11 & 12",
      mode: "Online Live",
      whoShouldJoin: "Students in Grade 11 and 12 (FSc Pre-Engineering/Pre-Medical or A-Levels) preparing for board and entry test (MDCAT/ECAT) examinations.",
      syllabus: [
        "Vectors, Equilibrium, Motion, and Work",
        "Rotational Dynamics, Fluid Mechanics, and Thermodynamics",
        "Electrostatics, Current Electricity, and Electromagnetism",
        "Modern Physics, Electronics, and Nuclear Physics"
      ],
      outcomes: [
        "Master complex physical derivations and mathematical proofs.",
        "Solve advanced college-level physics numerical problems.",
        "Gain strong foundations for university engineering and medical entrance tests.",
        "Analyze modern physics concepts with deep critical thinking."
      ],
      tools: ["Concept Slides", "Numerical Workbooks", "Board Past Papers"],
      fee: "PKR 10,000"
    },
    {
      id: "biology-9-10",
      category: "School and College Academic Courses",
      title: "Biology for Grade 9 and 10",
      shortDescription: "Foundation-level biology with clear explanations, diagrams, short questions, long questions, and board exam preparation.",
      overview: "Develop a deep fascination with life sciences. This course provides comprehensive foundation-level biology instruction, using descriptive visual materials, diagram drawing guides, and strategic practice of short and long-form board exam questions.",
      duration: "Ongoing / Flexible",
      level: "Grade 9 & 10",
      mode: "Online Live",
      whoShouldJoin: "9th and 10th grade students aiming to score full marks in descriptive board biology exams.",
      syllabus: [
        "Introduction to Biology & Cell Structures",
        "Biodiversity and Enzymes",
        "Bioenergetics and Human Nutrition",
        "Gaseous Exchange, Transport, and Mock Exams"
      ],
      outcomes: [
        "Draw and label biological diagrams accurately and efficiently.",
        "Write comprehensive, high-scoring answers to board-style questions.",
        "Understand cellular mechanisms, physiology, and ecosystems.",
        "Establish a solid base for advanced pre-medical intermediate studies."
      ],
      tools: ["Biological Models", "Visual Slides", "Exam Worksheets"],
      fee: "PKR 10,000"
    },
    {
      id: "biology-11-12",
      category: "School and College Academic Courses",
      title: "Biology for Grade 11 and 12",
      shortDescription: "Intermediate biology support covering core concepts, diagrams, important topics, and exam preparation for Grade 11 and 12.",
      overview: "Prepare for a career in medicine. This advanced biology support course covers the complex biological mechanisms, molecular genetics, evolutionary biology, and detailed physiology required for intermediate college board exams and medical college admission tests (MDCAT).",
      duration: "Ongoing / Flexible",
      level: "Grade 11 & 12",
      mode: "Online Live",
      whoShouldJoin: "Pre-medical students in Grade 11 and 12 looking to secure top marks in college boards and competitive university entry tests.",
      syllabus: [
        "Cell Structure, Biological Molecules, and Enzymes",
        "Bioenergetics and Kingdom Diversity",
        "Human Physiology: Digestion, Circulation, and Immunity",
        "Coordination, Genetics, Biotechnology, and Evolution"
      ],
      outcomes: [
        "Explain complex biochemical and physiological pathways.",
        "Label and explain highly detailed biological diagrams.",
        "Demonstrate deep knowledge in cellular biology, genetics, and ecology.",
        "Confidently answer advanced analytical and MDCAT-level biology questions."
      ],
      tools: ["Interactive Models", "Conceptual Slide Decks", "MDCAT Practice Papers"],
      fee: "PKR 10,000"
    },
    {
      id: "islamic-tarbiah",
      category: "Islamic Short Courses",
      title: "Islamic Tarbiah",
      shortDescription: "Character building, Islamic manners, daily duas, basic Islamic values, and practical guidance for children and young learners.",
      overview: "Nurture strong moral and spiritual foundations. This interactive Tarbiah class focuses on moral development, beautiful Islamic manners (Adaab), memorization of essential daily Duas, and understanding core faith-driven values through storytelling and practical daily guidance.",
      duration: "Ongoing / Flexible",
      level: "Beginner",
      mode: "Online Live",
      whoShouldJoin: "Children, youth, and young learners seeking basic character-building and practical Islamic ethics.",
      syllabus: [
        "Adaab (Manners) of Daily Life: Parents, Elders, and Friends",
        "Essential Daily Duas and Sunnah Practices",
        "Pillars of Islam and Stories of the Prophets",
        "Practical Character Building and Moral Values"
      ],
      outcomes: [
        "Integrate basic Islamic etiquette (Adaab) into daily behavior.",
        "Recite and apply crucial daily Duas and Sunnah practices.",
        "Articulate foundational values of honesty, kindness, and respect.",
        "Foster a deep personal love and connection with Islamic teachings."
      ],
      tools: ["Moral Storybooks", "Dua Audio Packs", "Interactive Worksheets"],
      fee: "PKR 10,000"
    },
    {
      id: "basic-arabic",
      category: "Islamic Short Courses",
      title: "Basic Arabic",
      shortDescription: "Beginner-friendly Arabic reading, vocabulary, pronunciation, simple sentences, and foundational understanding.",
      overview: "Unlock the language of the Quran. This beginner-friendly course teaches correct Arabic pronunciation (Tajweed foundations), alphabet recognition, reading fluidly, building a fundamental vocabulary, and constructing simple conversational sentences.",
      duration: "4 Weeks",
      level: "Beginner",
      mode: "Online Live",
      whoShouldJoin: "Students, adults, and anyone starting from absolute scratch wishing to read, pronounce, and understand basic Arabic.",
      syllabus: [
        "Arabic Alphabet Recognition & Pronunciation (Makharij)",
        "Joining Letters, Vowels, and Reading Simple Words",
        "Essential Daily Vocabulary and Noun-Verb Basics",
        "Constructing Simple Sentences and Common Phrases"
      ],
      outcomes: [
        "Identify, write, and pronounce all Arabic letters correctly.",
        "Read simple classical and conversational Arabic texts.",
        "Use basic everyday vocabulary and greet others in Arabic.",
        "Understand the syntactic structure of basic Quranic phrases."
      ],
      tools: ["Interactive Qaida", "Vocabulary Flashcards", "Pronunciation Guides"],
      fee: "PKR 10,000"
    },
    {
      id: "hadith-lessons",
      category: "Islamic Short Courses",
      title: "Hadith Lessons",
      shortDescription: "Simple and practical lessons from selected Hadith with explanation, manners, daily life application, and moral learning.",
      overview: "Learn from the timeless wisdom of Prophet Muhammad (PBUH). Explore selected authentic Ahadith, focusing on their historical contexts, practical daily applications, character refinement, and life-changing moral teachings.",
      duration: "4 Weeks",
      level: "Beginner",
      mode: "Online Live",
      whoShouldJoin: "Learners of all ages seeking practical ethical guidance and wisdom from the Sunnah.",
      syllabus: [
        "Introduction to Hadith and the Importance of Sunnah",
        "Hadith on Intentions, Honesty, and Good Character",
        "Hadith on Kindness, Brotherhood, and Rights of Neighbors",
        "Hadith on Seeking Knowledge and Daily Life Refinement"
      ],
      outcomes: [
        "Explain the moral lessons and contexts of selected Ahadith.",
        "Implement prophetic teachings directly into daily family and social life.",
        "Understand the basic methodology of Hadith compilation and authenticity.",
        "Improve personal character, mindfulness, and community service."
      ],
      tools: ["Hadith Translations", "Life Application Sheets", "Discussion Prompts"],
      fee: "PKR 10,000"
    },
    {
      id: "fcps-mentoring",
      category: "Medical Career Counselling and Professional Guidance",
      title: "FCPS Mentoring",
      shortDescription: "Guidance for FCPS preparation, study planning, exam strategy, topic prioritization, and career direction.",
      overview: "Succeed in your post-graduate medical exams. Get personalized, structured guidance for FCPS Part 1 or Part 2 preparation, including customized study planning, time-saving exam strategies, smart topic prioritization, and specialty-wise career direction.",
      duration: "Flexible",
      level: "Professional",
      mode: "Mentoring",
      whoShouldJoin: "Doctors preparing for their FCPS examinations and residency planning.",
      syllabus: [
        "FCPS Syllabus Analysis & Core Material Selection",
        "Study Timeline & High-Yield Topic Prioritization",
        "Paper Attempting Techniques & MCQ Strategy",
        "Specialty Alignment & Career Progression Planning"
      ],
      outcomes: [
        "Formulate a customized, daily and weekly study roadmap.",
        "Focus study time on proven high-yield exam sections.",
        "Master specific MCQ solving and time-management techniques.",
        "Align PG training pathways for career progression."
      ],
      tools: ["High-Yield Subject Maps", "Exam Dashboards", "One-to-One Strategy Calls"],
      fee: "PKR 15,000"
    },
    {
      id: "mcps-mentoring",
      category: "Medical Career Counselling and Professional Guidance",
      title: "MCPS Mentoring",
      shortDescription: "Structured mentoring for MCPS candidates, including preparation strategy, topic guidance, and exam planning.",
      overview: "Navigate your MCPS exam pathway with expert insight. Get structured, customized mentoring for MCPS candidacy, covering optimized preparation schedules, high-yield topic definitions, clinical case discussion frameworks, and comprehensive exam planning.",
      duration: "Flexible",
      level: "Professional",
      mode: "Mentoring",
      whoShouldJoin: "Postgraduate medical diploma candidates aiming to streamline their MCPS exam preparation.",
      syllabus: [
        "MCPS Exam Layout and Eligibility Review",
        "Targeted Resource Recommendation and Study Schedule",
        "Clinical Practice Guidelines and Case Study Reviews",
        "OSCE and Written Exam Preparation Strategies"
      ],
      outcomes: [
        "Develop an efficient study timeline fitting busy work shifts.",
        "Master clinical guidelines and case-solving methodologies.",
        "Perform confidently in OSCE clinical stations.",
        "Mitigate exam stress through simulated planning."
      ],
      tools: ["Study Schedules", "OSCE Prep Checklists", "Case Discussion Handouts"],
      fee: "PKR 15,000"
    },
    {
      id: "mrcp-mentoring",
      category: "Medical Career Counselling and Professional Guidance",
      title: "MRCP Mentoring",
      shortDescription: "Mentoring for MRCP preparation, study schedule, exam approach, resources, and career guidance.",
      overview: "Fast-track your UK medical license and international qualifications. Receive professional mentoring for MRCP Part 1, Part 2, or PACES, covering complete study schedules, exam structures, high-yield digital question banks, PACES station frameworks, and general UK NHS career pathway guidance.",
      duration: "Flexible",
      level: "Professional",
      mode: "Mentoring",
      whoShouldJoin: "International Medical Graduates (IMGs) and junior doctors preparing for MRCP exams to build a career in the UK/abroad.",
      syllabus: [
        "MRCP Exam Structure & UK NHS Pathways Overview",
        "High-Yield Question Bank Selection & Study Routines",
        "PACES Strategy: Communication, History, and Clinical Stations",
        "PLAB vs MRCP Strategy & CV Building for the NHS"
      ],
      outcomes: [
        "Understand the complete MRCP examination pathway and timeline.",
        "Practice high-yield clinical reasoning used in MRCP questions.",
        "Master the clinical and communication skills required for PACES.",
        "Plan the NHS career pathways (residency, fellowship) efficiently."
      ],
      tools: ["NHS Pathway Map", "PACES Mock Templates", "IMG Resources List"],
      fee: "PKR 15,000"
    },
    {
      id: "medical-career-mentorship",
      category: "Medical Career Counselling and Professional Guidance",
      title: "Medical Career Mentorship",
      shortDescription: "General mentoring for doctors and medical students regarding exams, career planning, research direction, and professional development.",
      overview: "Map out a meaningful and successful medical career. Receive comprehensive one-on-one professional mentorship covering local and international exam options (USMLE, PLAB, MRCP, FCPS), customized clinical CV building, identifying medical research opportunities, and maintaining work-life balance during residency.",
      duration: "Flexible",
      level: "All Levels",
      mode: "Mentoring",
      whoShouldJoin: "Medical students, fresh MBBS graduates, and junior house officers seeking long-term career planning.",
      syllabus: [
        "Global Medical Career Pathways: Comparative Analysis",
        "Clinical CV Building and Research Methodology",
        "House Job Navigation and Specialty Selection",
        "Work-Life Balance, Burnout Prevention, and Career Longevity"
      ],
      outcomes: [
        "Choose the right local or international postgraduate pathway confidently.",
        "Construct a professional and standout clinical and research CV.",
        "Identify and initiate medical research papers and case reports.",
        "Navigate medical careers with reduced burnout and clear benchmarks."
      ],
      tools: ["Career Planning Worksheets", "CV Templates", "Research Starter Guide"],
      fee: "PKR 15,000"
    }
  ],
  services: [
    { title: "MS/PhD Research Guidance", desc: "One-on-one mentorship to navigate your degree successfully." },
    { title: "Research Topic Selection", desc: "Help finding novel, impactful, and feasible research gaps." },
    { title: "Literature Review Support", desc: "Strategies for efficient reading and synthesizing existing work." },
    { title: "Paper Writing Guidance", desc: "Detailed feedback on paper structure, flow, and academic tone." },
    { title: "Experiment Planning", desc: "Designing robust, reproducible experimental setups." }
  ],
  testimonials: [
    { id: 1, name: "Ahmed S.", role: "MS Student", text: "Dr. Ali's deep learning course was a game-changer. He explained complex math concepts with incredible simplicity." },
    { id: 2, name: "Sarah K.", role: "Data Analyst", text: "I transitioned into AI thanks to the Practical ML course. The focus on real-world projects helped me crack my first tech interview." }
  ],
  lectures: {
    "python-beginners": [],
    "ml-foundations": [],
    "dl-pytorch": [],
    "agentic-ai-llm": [],
    "data-analytics": [],
    "cv-basics": [],
    "research-mentorship": [],
    "math-9-10": [],
    "physics-9-10": [],
    "physics-11-12": [],
    "biology-9-10": [],
    "biology-11-12": [],
    "islamic-tarbiah": [],
    "basic-arabic": [],
    "hadith-lessons": [],
    "fcps-mentoring": [],
    "mcps-mentoring": [],
    "mrcp-mentoring": [],
    "medical-career-mentorship": []
  }
};

