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
    "research-mentorship": []
  }
};
