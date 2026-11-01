// =============================================================
//  Portfolio content — edit everything here in one place.
//  Placeholder text is marked [EDIT] — replace with your real info.
// =============================================================

export const social = {
  github: 'https://github.com/Ananyo-Sen-B2530066',
  linkedin: 'https://www.linkedin.com/in/ananyo-sen-7884b1362',
  email: 'arka8868@gmail.com',
  phone: '+917029281649',
}

export const projects = [
  {
    id: 'ug-dissertation',
    image: 'projects/ug-dissertation.png',
    name: 'Properties of Bessel Functions',
    description: "Research on recurrence relations, generating functions, orthogonality, and Fourier-Bessel expansions, applied to solving Laplace's equation in cylindrical coordinates",
    tags: ['Mathematics', 'ODE', 'Bessel Functions'],
    gradient: 'from-blue-500/25 to-cyan-500/25',
    icon: '📚',
    period: 'Jan 2025 – Apr 2025',
    viewUrl: 'projects/ug_dissertation.pdf',
  },
  {
    id: 'video-game-analysis',
    image: 'projects/video-game-analysis.png',
    name: 'Prediction of Video Game Sales',
    description: 'Exploratory data analysis, feature engineering, and regression modeling to predict global video game sales',
    tags: ['Python', 'ML', 'Data Science'],
    gradient: 'from-emerald-500/25 to-teal-500/25',
    icon: '🎮',
    period: 'Sep 2025 – Nov 2025',
    viewUrl: 'projects/video_game_analysis.pdf',
    github: 'https://github.com/Ananyo-Sen-B2530066/ML-Sales-Prediction.git', 
  },
  {
    id: 'treasure-hunt',
    image: 'projects/treasure-hunt.png',
    name: 'Deep Q-Networks for Partially Observable Treasure Hunt',
    description: 'Custom RL environment with limited visibility, dynamic obstacles, and sparse rewards, built with Gymnasium to study efficient navigation under uncertainty',
    tags: ['RL', 'TensorFlow', 'PyTorch'],
    gradient: 'from-violet-500/30 to-pink-500/30',
    icon: '🎯',
    group: true,
    period: 'Oct 2025 – Dec 2025',
    viewUrl: 'projects/treasure_hunt.pdf',
    github: 'https://github.com/Ananyo-Sen-B2530066/TreasureHunt-RL.git', 
  },
  {
    id: 'auction-ui',
    image: 'projects/auction-ui.png',
    name: 'Cricket Auction UI',
    description: 'Interactive auction interface for college fest with real-time data',
    tags: ['React', 'JavaScript', 'UI'],
    gradient: 'from-orange-500/25 to-red-500/25',
    icon: '🏏',
    period: 'Personal Project',
    fest: "Built for & used live at Perceptron'26 college fest",
    viewLink: 'https://auction-perceptron-window.vercel.app/',
    github: 'https://github.com/Ananyo-Sen-B2530066/auction.git',
  },
  {
    id: 'quiz-ui',
    image: 'projects/quiz-ui.png',
    name: 'Custom Quiz Platform',
    description: 'Quiz platform with performance tracking and anti-cheat measures',
    tags: ['HTML', 'JavaScript', 'UI/UX'],
    gradient: 'from-yellow-500/25 to-amber-500/25',
    icon: '❓',
    period: 'Personal Project',
    fest: "Built for & used live at Perceptron'26 college fest",
    viewLink: 'https://quiz-platform-2gr0.onrender.com/',
    github: 'https://github.com/Ananyo-Sen-B2530066/quiz_platform.git', 
  },
  {
    id: 'distributed-gaming',
    image: 'projects/distributed-gaming.png',
    name: 'Distributed Gaming Analytics System Using Ray',
    description: 'Scalable gaming analytics platform using distributed computing with Ray, running a Random Forest regressor for prediction and statistical analysis, served through a Flask web app',
    tags: ['Python', 'Ray', 'Flask', 'ML', 'Distributed'],
    gradient: 'from-cyan-500/25 to-blue-500/25',
    icon: '🕹️',
    group: true,
    period: 'Feb 2026 – May 2026',
    viewUrl: 'projects/distributed_gaming_analytics.pdf',
    github: 'https://github.com/Ananyo-Sen-B2530066/distributed-gaming-analytics.git',
  },
  {
    id: 'sports-video-dl',
    image: 'projects/sports-video-dl.png',
    name: 'Event-Driven Multi-Modal Sports Video Understanding',
    description: 'Deep learning framework to detect key events, model tactical interactions via GNNs, and estimate match intensity for automated sports analysis',
    tags: ['PyTorch', 'Deep Learning', 'GNN', 'LSTM', 'Computer Vision'],
    gradient: 'from-rose-500/25 to-orange-500/25',
    icon: '⚽',
    period: 'Feb 2026 – Apr 2026',
    viewUrl: 'projects/sports_video_analysis.pdf',
    github: 'https://github.com/Ananyo-Sen-B2530066/DL-Video-Analysis.git',
  },
  {
    id: 'rotom-dex',
    image: 'projects/rotom-dex.png',
    name: 'Rotom-Dex Pokédex',
    description: 'A handheld-style Pokédex web app, built around the Rotom-Dex from Pokémon Sun & Moon.',
    tags: ['HTML', 'JavaScript', 'TypeScript'],
    gradient: 'from-yellow-500/25 to-amber-500/25',
    icon: '🔴',
    period: 'Personal Project',
    viewLink: 'https://rotom-dex-pokedex.netlify.app/',
    github: 'https://github.com/Ananyo-Sen-B2530066/pokedex.git', 
  },
]

export const techStack = [
  { icon: 'code', name: 'Python' },
  { icon: 'atom', name: 'React' },
  { icon: 'flame', name: 'PyTorch' },
  { icon: 'activity', name: 'Scikit-Learn' },
  { icon: 'trending', name: 'Matplotlib' },
  { icon: 'bar', name: 'R' },
  { icon: 'braces', name: 'C++' },
  { icon: 'dashboard', name: 'Streamlit' },
  { icon: 'branch', name: 'Git' },
  { icon: 'terminal', name: 'Linux' },
  { icon: 'monitor', name: 'Windows' },
  { icon: 'apple', name: 'macOS' },
]

export const MARQUEE_TECH = [
  'Python', 'PyTorch', 'React', 'Scikit-Learn', 'TensorFlow', 'Ray',
  'Flask', 'R', 'C++', 'Git', 'Linux', 'Windows', 'macOS', 'Gymnasium', 'Streamlit', 'JavaScript', 'TypeScript',
]

export const nowBuilding = [
  {
    topic: 'Multivariate Statistics',
    label: 'exploring',
    note: 'Extending the foundations of univariate statistics toward comprehensive multivariate analysis, with a focus on estimation, hypothesis testing, and regression modelling.',
  },
  {
    topic: 'LLM & Gen AI',
    label: 'learning',
    note: 'Currently exploring Large Language Models (LLMs) and Generative AI, with a focus on transformer architectures, prompt engineering, Retrieval-Augmented Generation (RAG), AI agents, and practical application development.',
  },
  {
    topic: 'DBMS',
    label: 'exploring',
    note: 'Currently exploring Database Management Systems (DBMS) and PostgreSQL, focusing on relational database design, advanced SQL, normalization, transactions, indexing, and building efficient database-driven applications.',
  },
  {
    topic: 'Econometrics',
    label: 'learning',
    note: 'Exploring the basics of Econometrics, focused on applying statistical and regression techniques to model economic relationships, test hypotheses, and derive data-driven insights.',
  },
  {
    topic: 'Finance',
    label: 'learning',
    note: 'Currently exploring Quantitative Finance, focusing on portfolio theory, no-arbitrage principles, stochastic processes, derivatives, option pricing models, implied volatility, and numerical pricing techniques.',
  },
  {
    topic: 'Advanced Deep Learning & Cyber Security',
    label: 'exploring',
    note: 'Currently exploring the world of LLMs and AI systems, extending my understanding of RAG, chunking, entity relationships, state machines/statecharts, and jailbreak detection and defense.',
  },
]

export const courses = [
  {
    id: 'ml',
    category: 'Machine Learning',
    courses: ['Random Forest', 'Regression', 'Boostings'],
  },
  {
    id: 'stats',
    category: 'Statistics & Probability',
    courses: ['Univariate Statistics', 'Time Series', 'Probability'],
  },
  {
    id: 'programming',
    category: 'Programming',
    courses: ['C++', 'R'],
  },
  {
    id: 'maths',
    category: 'Mathematics',
    courses: ['Linear Algebra', 'Number Theory', 'Real Analysis'],
  },
  {
    id: 'deep-learning',
    category: 'Deep Learning & NLP',
    courses: ['GNN', 'LSTM']
  },
  {
    id: 'ai',
    category: 'Artificial Intelligence',
    courses: ['Reinforcement Learning'],
  },
  {
    id: 'dsa',
    category: 'Data Structure & Analysis',
    courses: ['Array', 'Linked List', 'Sortings'],
  },
  {
    id: 'dc',
    category: 'Distributed Computing',
    courses: ['Hadoop', 'Ray', 'Dask'],
  },
]

export const certifications = [
  {
    name: 'NPTEL — Programming in Modern C++',
    issuer: 'NPTEL, Government of India',
    year: '2025',
    image: 'certificates/nptel-cpp.png',
  },
  {
    name: 'NPTEL — Generative AI for Computer Vision',
    issuer: 'NPTEL, Government of India',
    year: '2026',
    image: 'certificates/nptel-gen_ai-cv.png',
  },
]

// Current amount of work done on projects you're actively building.
// This section auto-hides when the array is empty.
//   name:    the project's actual name (title). Leave '' to show only `project`.
//   project: what the project is related to (shown below the title)
//   status:  'building' (green) | 'learning' (sky) | 'exploring' (violet)
//   group:   set true for group projects (renders a badge)
//.  update:  progress of the work related to this projects
//.  date:    last date of updating the update data
//   link:    optional — button only appears if you include it (set to '' to hide)
export const activeWork = [
  {
    name: 'Project EPIONE',
    project: 'Advanced Deep Learning',
    status: 'building',
    group: true,
    update: 'EDA in progress, then the main part of the project will begin',
    date: 'Oct 2026',
    link: 'https://github.com/Ananyo-Sen-B2530066/project-epione.git',
  },
{
    name: 'Brain Activity and Learning Improvement in Children with Learning Difficulties',
    project: 'M.Sc. Term Project',
    status: 'building',
    update: 'Studying the EEG data, EEG Features among the participants begin the comparison study',
    date: 'Oct 2026',
    link: 'https://github.com/Ananyo-Sen-B2530066/mental-health.git', 
  },
{
    name: 'Random Walk vs Brownian Motion vs Real Stock Markets',
    project: 'Finance',
    status: 'building',
    group: true,
    update: 'Dataset is collected to preprocess and clean.',
    date: 'Oct 2026',
    link: '', 
  },
{
    name: 'SHARP: Structural Heterogeneity Analysis and Regime Point-detection',
    project: 'Econometrics',
    status: 'building',
    group: true,
    update: 'Literature Review in Progress.',
    date: 'Oct 2026',
    link: '', 
  },
]

export const hobbies = [
  {
    name: 'Watching Sports',
    note: 'Love Cricket & Football.',
  },
  {
    name: 'Playing Games',
    note: 'Crazy for RPGs.',
  },
  {
    name: 'Reading Books',
    note: 'Enjoy a good thriller story.',
  },
]
