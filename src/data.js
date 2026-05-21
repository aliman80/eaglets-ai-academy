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
    // --- AI, Research, and Technical Courses ---
    {
      id: "ai-ml",
      category: "AI, Research, and Technical Courses",
      title: "Artificial Intelligence and Machine Learning",
      shortDescription: "Build real-world ML models and understand the math behind them.",
      overview: "Step into the world of predictive modeling. We cover regression, classification, clustering, and model evaluation techniques using real-world datasets.",
      duration: "6 Weeks",
      level: "All Levels",
      mode: "Online Live",
      whoShouldJoin: "Anyone looking to transition into data science.",
      syllabus: [
        "Intro to ML & Supervised Learning",
        "Linear & Logistic Regression",
        "Decision Trees & Random Forests",
        "Model Evaluation & Hyperparameter Tuning"
      ]
    },
    {
      id: "cv-vlm",
      category: "AI, Research, and Technical Courses",
      title: "Computer Vision & Vision-Language Models",
      shortDescription: "Learn image processing, object detection, and state-of-the-art VLMs.",
      overview: "Dive deep into deep learning for vision tasks, covering advanced CNN architectures, image segmentation, and modern Vision-Language Models.",
      duration: "8 Weeks",
      level: "Intermediate/Advanced",
      mode: "Online Live",
      whoShouldJoin: "Enthusiasts wanting to build advanced vision systems.",
      syllabus: [
        "Image Processing with OpenCV",
        "Advanced CNN Architectures",
        "Object Detection and Segmentation",
        "Introduction to Vision-Language Models"
      ]
    },
    {
      id: "python-basics",
      category: "AI, Research, and Technical Courses",
      title: "Python Programming for Beginners",
      shortDescription: "Master Python programming from scratch with a focus on data science.",
      overview: "This course covers everything from basic syntax to advanced libraries like NumPy and Pandas. Perfect for absolute beginners.",
      duration: "4 Weeks",
      level: "Beginner",
      mode: "Online Live",
      whoShouldJoin: "Beginners, university students, and non-tech professionals.",
      syllabus: [
        "Python Basics & Data Structures",
        "Functions, OOP, and Error Handling",
        "Data Analysis with Pandas & NumPy",
        "Data Visualization"
      ]
    },
    {
      id: "ai-tools",
      category: "AI, Research, and Technical Courses",
      title: "AI Tools for Students and Researchers",
      shortDescription: "Leverage Large Language Models (LLMs) and Prompt Engineering.",
      overview: "Understand how models like ChatGPT and Claude work. Learn to responsibly use AI tools for literature review, drafting, and productivity.",
      duration: "4 Weeks",
      level: "All Levels",
      mode: "Online Live",
      whoShouldJoin: "Students and professionals looking to automate workflows.",
      syllabus: [
        "Intro to Generative AI & Prompt Engineering",
        "AI Tools for Literature Review",
        "Responsible AI usage in academia",
        "Building custom GPT assistants"
      ]
    },
    {
      id: "research-writing",
      category: "AI, Research, and Technical Courses",
      title: "Research Paper Writing & Thesis Guidance",
      shortDescription: "A complete guide to formulating research ideas and publishing.",
      overview: "Learn the strategies used by PhD scholars to read literature, write methodology sections, format with LaTeX, and navigate peer-review.",
      duration: "4 Weeks",
      level: "Intermediate",
      mode: "Online Live",
      whoShouldJoin: "MS/PhD students and early-career researchers.",
      syllabus: [
        "Literature Review & Finding a Gap",
        "Structuring the Research Paper or Thesis",
        "Academic Writing & LaTeX Basics",
        "The Peer Review & Publication Process"
      ]
    },
    
    // --- School and College Academic Courses ---
    {
      id: "physics-o-level", category: "School and College Academic Courses",
      title: "Physics for O Level & A Level",
      shortDescription: "Comprehensive Physics curriculum covering core concepts and exam preparation.",
      overview: "Designed for O/A Level students to build a strong foundational understanding of physics principles, problem-solving, and practical applications.",
      duration: "Ongoing", level: "High School", mode: "Online Live",
      whoShouldJoin: "O Level and A Level students.",
      syllabus: ["Mechanics and Kinematics", "Waves and Optics", "Electricity and Magnetism", "Past Paper Practice"]
    },
    {
      id: "physics-9-10", category: "School and College Academic Courses",
      title: "Physics for 9th & 10th Class",
      shortDescription: "Board-focused physics lessons simplifying complex concepts.",
      overview: "Interactive sessions to help matriculation students understand theoretical physics and ace their board exams.",
      duration: "Ongoing", level: "High School", mode: "Online Live",
      whoShouldJoin: "9th and 10th Class students.",
      syllabus: ["Physical Quantities", "Dynamics", "Thermal Properties", "Electromagnetism"]
    },
    {
      id: "math-9-10", category: "School and College Academic Courses",
      title: "Mathematics for 9th & 10th Class",
      shortDescription: "Step-by-step mathematical problem solving and board prep.",
      overview: "Clear, structured math lessons covering algebra, geometry, and trigonometry to ensure high grades.",
      duration: "Ongoing", level: "High School", mode: "Online Live",
      whoShouldJoin: "9th and 10th Class students.",
      syllabus: ["Algebraic Expressions", "Geometry and Theorems", "Trigonometry Basics", "Mock Exams"]
    },
    {
      id: "biology-9-10", category: "School and College Academic Courses",
      title: "Biology for 9th & 10th Class",
      shortDescription: "Engaging biology lessons focusing on core life sciences.",
      overview: "Detailed study of cells, human physiology, and ecosystems tailored for board exams.",
      duration: "Ongoing", level: "High School", mode: "Online Live",
      whoShouldJoin: "9th and 10th Class students.",
      syllabus: ["Cell Biology", "Human Physiology", "Genetics", "Ecology"]
    },
    {
      id: "biology-fsc", category: "School and College Academic Courses",
      title: "Biology for First & Second Year",
      shortDescription: "Advanced biology covering the intermediate curriculum.",
      overview: "In-depth preparation for FSc pre-medical students focusing on botany, zoology, and MDCAT foundations.",
      duration: "Ongoing", level: "College", mode: "Online Live",
      whoShouldJoin: "FSc Pre-Medical students.",
      syllabus: ["Homeostasis", "Support and Movement", "Coordination and Control", "Evolution and Genetics"]
    },

    // --- Medical Career Counselling and Professional Guidance ---
    {
      id: "mbbs-counselling", category: "Medical Career Counselling and Professional Guidance",
      title: "MBBS Admission Counselling & Career Guidance",
      shortDescription: "Expert advice on securing medical admissions and career planning.",
      overview: "Personalized guidance for pre-medical students on choosing the right medical colleges and understanding the admission process.",
      duration: "Flexible", level: "All Levels", mode: "Mentoring",
      whoShouldJoin: "Pre-medical students and parents.",
      syllabus: ["MDCAT Strategy", "College Selection", "Interview Prep", "Alternative Medical Careers"]
    },
    {
      id: "medical-exams", category: "Medical Career Counselling and Professional Guidance",
      title: "Guidance for MRCP, FRCP, MCPS & FRCS",
      shortDescription: "Strategic planning for postgraduate medical examinations.",
      overview: "Targeted mentoring for doctors pursuing international and local professional exams (MRCP, FRCP, MCPS, FRCS Ireland/England).",
      duration: "Flexible", level: "Professional", mode: "Mentoring",
      whoShouldJoin: "Doctors preparing for professional exams.",
      syllabus: ["Exam Pathways & Eligibility", "Study Strategy & Resource Selection", "Time Management", "Clinical Station Preparation"]
    },
    {
      id: "medical-planning", category: "Medical Career Counselling and Professional Guidance",
      title: "General Medical Career Planning & Study Strategy",
      shortDescription: "Long-term career mapping for medical professionals.",
      overview: "Advice on building a strong medical CV, choosing a specialty, and planning a successful career trajectory.",
      duration: "Flexible", level: "Professional", mode: "Mentoring",
      whoShouldJoin: "Medical students and junior doctors.",
      syllabus: ["CV Building", "Specialty Selection", "Research in Medicine", "Work-Life Balance"]
    },

    // --- Islamic Short Courses ---
    {
      id: "hadith-tafseer", category: "Islamic Short Courses",
      title: "Hadith & Tafseer Short Course",
      shortDescription: "A respectful and simple introduction to Quranic exegesis and Prophetic traditions.",
      overview: "Understand the context and meanings of selected Surahs and Ahadith to apply their wisdom in daily life.",
      duration: "4 Weeks", level: "Beginner", mode: "Online Live",
      whoShouldJoin: "Learners interested in Islamic short courses.",
      syllabus: ["Introduction to Tafseer", "Selected Short Surahs", "Introduction to Hadith Terminology", "Key Prophetic Traditions"]
    },
    {
      id: "tarbiyah", category: "Islamic Short Courses",
      title: "Tarbiyah Islamia & Character Building",
      shortDescription: "Basic Islamic character-building and family learning sessions.",
      overview: "Focuses on moral development, family ethics, and building a strong, faith-driven character in the modern world.",
      duration: "4 Weeks", level: "Beginner", mode: "Online Live",
      whoShouldJoin: "Families, youth, and all learners.",
      syllabus: ["Islamic Morals and Ethics", "Family Rights and Duties", "Spiritual Purification", "Navigating Modern Challenges"]
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
  ]
};
