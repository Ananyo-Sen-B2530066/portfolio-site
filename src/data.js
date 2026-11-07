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
    caseStudy: {
      kind: 'research',
      tagline: 'Building Bessel theory from the differential equation to a solved boundary-value problem.',
      problem:
        "Bessel's equation appears whenever a physical problem has cylindrical symmetry — heat flowing through a rod, potential inside a cylinder, the vibration of a circular membrane. Its solutions are not elementary functions, so the tools needed to actually use them (recurrence relations, generating functions, orthogonality) have to be built from scratch before any boundary-value problem can be solved.",
      approach: [
        "Started from Bessel's equation of order n and constructed the solutions Jn(x) and Yn(x).",
        'Derived recurrence relations with integral methods, then built generating functions and trigonometric expansions.',
        'Established orthogonality and the norm of Bessel functions, leading to Fourier–Bessel series.',
        "Applied the series to Laplace's equation in cylindrical coordinates — steady-state heat flow and potential distribution.",
      ],
      metrics: [
        { value: '34', label: 'pages of derivations' },
        { value: '5', label: 'chapters, theory to application' },
        { value: '1', label: 'full boundary-value problem solved' },
      ],
      findings: [
        'Recurrence relations move between Bessel functions of different orders without recomputing the series.',
        'Orthogonality is what turns an infinite expansion into a usable tool: it gives the Fourier–Bessel coefficients directly.',
        'The method reproduces the expected steady-state temperature profile inside a cylinder, end to end.',
      ],
      discussion:
        'The main takeaway was how much of applied mathematics is about choosing a basis. Once orthogonality was established, the boundary-value problem stopped being a PDE exercise and became a projection problem — the same idea behind eigenfunction expansions and, in a different form, behind the basis decompositions used in machine learning. The scope was deliberately analytical: only Bessel functions of the first kind were covered, and the zeros were taken from theory rather than computed numerically. The natural next steps are the second kind and modified Bessel functions, numerical evaluation of the zeros, and the wave equation in non-cylindrical geometries.',
      role: 'Solo · supervised by Dr. Subhankar Roy',
    },
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
    caseStudy: {
      kind: 'research',
      tagline: 'Predicting global game sales from 16,000+ titles — and finding that boosting wins.',
      problem:
        'Developers and publishers need to estimate a game\'s sales before release to set budgets and marketing, but sales are shaped by interacting choices — genre, platform, publisher, release year, and where sales concentrate regionally. Raw metadata alone does not capture those interactions, so the task is to engineer features that can, then compare regression models fairly.',
      approach: [
        'Cleaned vgsales.csv (16,000+ titles): median-imputed missing years, grouped rare publishers as "Other".',
        'Engineered regional share features (NA/EU/JP/Other_Share, Max_Region_Share, Sales_Diversity) plus interaction features (Genre_Platform, Publisher_Platform, Is_Franchise).',
        'Target-encoded categoricals with 0.3 smoothing, log-transformed the skewed Global_Sales target.',
        'Split 70/20/10 train/validation/test and compared Linear, Ridge, Lasso, Random Forest, Gradient Boosting, and XGBoost on MAE, RMSE, and R².',
      ],
      metrics: [
        { value: '0.716', label: 'best test R² · Gradient Boosting' },
        { value: '0.118', label: 'best test MAE · log-scale' },
        { value: '6', label: 'regressors compared head-to-head' },
      ],
      findings: [
        'Boosting won: Gradient Boosting reached test R² 0.716 (MAE 0.118), ahead of XGBoost (0.674) and Random Forest (0.680).',
        'Linear models plateaued at R² ≈ 0.28–0.35 — the interactions they cannot model are most of the signal.',
        'Regional sales shares (especially Other_Share and JP_Share) were the most influential predictors.',
      ],
      discussion:
        'The gap between the linear baseline and the ensembles is the story here: once interaction and regional-share features exist, the relationship is almost entirely non-linear, so sequential correction (boosting) beats one-shot averaging (Random Forest) on both validation and test. Lasso\'s sparsity slightly underfit the subtle compound features, and XGBoost\'s extra sensitivity to learning rate and depth showed up as validation–test wobble. The implication for practice is narrow but real — if you want a credible pre-release sales estimate, model the interactions, not just the main effects. The open limitation is temporal: release-year trends and regional drift over time were only lightly captured, and that is the natural next feature family.',
      role: 'Solo',
    },
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
    caseStudy: {
      kind: 'research',
      tagline: 'A DQN agent that learns to hunt with only a 5×5 window into the world.',
      problem:
        'Most navigation benchmarks are fully observable, which hides the hard part of real sequential decision-making: sparse rewards, dynamic hazards, and never seeing the whole map. The challenge was to build a controllable treasure-hunt world — grid, moving traps, limited 5×5 vision, three difficulty levels — and test whether a Deep Q-Network can learn reliable policies without full state.',
      approach: [
        'Built a Gymnasium/PyGame grid-world: 34-dim state (5×5 local view, position, score, lives, treasures left, hint direction).',
        'Shaped rewards to teach the trade-offs: +50 per treasure, +2 per new cell explored, −10 to −20 for traps, adaptive wall penalties.',
        'Implemented Double DQN with experience replay, target networks, Huber loss, and level-specific architectures (up to 512-512-256-128-64).',
        'Tuned per level: learning rate 0.001 → 0.0002, batch 64 → 256, 1,500 → 5,000 episodes from easy to hard.',
      ],
      metrics: [
        { value: '100%', label: 'easy · success rate' },
        { value: '66.7%', label: 'medium · success rate' },
        { value: '33.3%', label: 'hard · success rate' },
      ],
      findings: [
        'Easy (10×10, 1 trap) solved completely — 100% success, agent cut steps from ~350 to ~200.',
        'Medium (16×16, 2 traps) reached 66.7% success after ~1,500 episodes of exploration.',
        'Hard (30×30, 4 predictive traps) reached 33.3% — the agent did learn avoidance, but 8 CPU hours was not enough to master it.',
      ],
      discussion:
        'Three things actually drove learning here. First, hints: 68–78% hint-following accuracy correlated with success at every level, which suggests guidance matters more than raw capacity under partial observability. Second, exploration became systematic — redundant visits dropped ~40% versus a random policy, so the agent learned where not to look. Third, difficulty behaved as expected: performance fell as the world grew, but the learning slope stayed positive, indicating the method scales rather than breaks. The honest limits are credit assignment (10–15 step reward gaps), hyperparameter sensitivity (~30% performance swings from small changes), and compute. The next lever the team identified is recurrent memory — LSTM/GRU layers to remember what was outside the 5×5 window — plus prioritized replay.',
      role: 'Group project · Team Gamma Force, CS 246',
    },
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
    caseStudy: {
      kind: 'web',
      tagline: 'An IPL-style cricket auction screen, built to run a real college-fest auction.',
      problem:
        'Idea: a straight out of the IPL live-auction broadcast — teams, players, and a running bid — but for a college fest. Instead of a slideshow or a spreadsheet, the auction deserves its own screen: big readouts, live team and player state, and a flow an auctioneer can drive at full speed.',
      approach: [
        'Built the interface in React with live bidding state covering team and player management.',
        'Designed a large-type, responsive layout so the current bid and player state read clearly during active bidding.',
        'Deployed on Vercel for instant public access during the fest.',
      ],
      metrics: [
        { value: 'Live', label: "used at Perceptron'26" },
        { value: 'Real-time', label: 'live bidding state' },
        { value: 'Vercel', label: 'deployed for the fest' },
      ],
      findings: [
        'Live bidding state keeps teams, players, and bids in sync as the auction runs.',
        'Big, glanceable readouts work on venue displays and phones alike.',
        'Shared via Vercel so anyone at the fest could open it instantly.',
      ],
      discussion:
        'Notes: this was about making a fun idea feel real under lights — clarity first, cleverness nowhere. The constraint that shaped everything was "an auctioneer will not slow down for the UI," so the design kept state big and glanceable. It ran live at Perceptron’26, and the main lesson was operational: event interfaces succeed on legibility and uptime, not feature count.',
      role: 'Front-end',
    },
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
    caseStudy: {
      kind: 'web',
      tagline: 'A timed quiz platform with performance tracking and anti-cheat built in.',
      problem:
        'Idea: a quiz that anyone can join from their phone, with a countdown, honest scoring, and a leaderboard that is actually reviewable afterwards. Quizzes are easy to imagine and annoyingly easy to cheat on — so the fun part was designing a fair attempt, not just question screens.',
      approach: [
        'Built a timed quiz flow with scoring and per-attempt performance tracking.',
        'Added anti-cheat measures during attempts plus server-side result handling.',
        'Deployed on Render so participants could join from their own devices.',
      ],
      metrics: [
        { value: 'Live', label: "used at Perceptron'26" },
        { value: 'Timed', label: 'scored quiz flow' },
        { value: 'Render', label: 'deployed for the fest' },
      ],
      findings: [
        'Timed attempts with scoring and per-attempt performance tracking.',
        'Anti-cheat measures constrained tab-switching and result tampering.',
        'Runs in the browser — participants just open a link.',
      ],
      discussion:
        'Notes: the interesting design tension is fairness versus friction — every anti-cheat step that interrupts a participant costs goodwill, so the measures were kept simple and predictable. The quiz also reinforced how much of a "quiz platform" is actually result handling — scoring, tracking, and review — rather than question rendering. Deployed on Render it cold-starts, so first load needs patience; that is the trade-off against a free tier. It ran live at Perceptron’26.',
      role: 'Solo build',
    },
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
    caseStudy: {
      kind: 'research',
      tagline: 'Turning sequential analytics into parallel Ray tasks that finish together.',
      problem:
        'Gaming analytics stalls when many players are analysed at once: a sequential pipeline pays T1 + T2 + … + Tn, so response time grows linearly with demand — the same failure mode, at smaller scale, as the Diablo III launch Error 37. The question was whether player statistics (kills, deaths, assists, ADR, KAST, K/D) could be split into independent tasks and processed simultaneously without breaking predictions.',
      approach: [
        'Built a 5-layer system: HTML frontend → Flask backend → Ray scheduling → worker nodes (Random Forest prediction + statistical analysis) → aggregated results.',
        'Converted each player into an independent @ray.remote task so workers execute concurrently instead of queuing.',
        'Applied three optimizations: lazy initialization, lightweight object sharing (dataset averages via ray.put), and local model loading per worker.',
        'Ran on 3 lab clusters (1 master + 3–4 workers each) and observed behaviour under simultaneous player requests.',
      ],
      metrics: [
        { value: '3', label: 'clusters · master + workers' },
        { value: 'max(Ti)', label: 'wall time vs sum of sequential tasks' },
        { value: 'RF', label: 'Random Forest model per worker' },
      ],
      findings: [
        'Multiple player tasks executed in parallel across workers, with dynamic task allocation and stable repeated runs.',
        'Total time shifted from the sum of individual tasks toward the slowest single task (max(Ti)), as expected from task-level parallelism.',
        'Local loading + shared averages cut serialization and network overhead versus shipping data/models per request.',
      ],
      discussion:
        'The point of this project was architecture, not a benchmark number — and the report is explicit that timing benchmarks were not collected, so the claims are qualitative: parallel execution happened, load spread across workers, and responses felt faster than the sequential baseline. That honesty matters, because the interesting result is conceptual: once each player is an independent task, scaling becomes "add workers" rather than "make each task faster." Ray won the comparison over Hadoop, Spark, and Dask because the workload is lightweight task parallelism in Python, not batch MapReduce or in-memory DAGs. My slice was the backend, Ray cluster setup, scheduling, and optimizations. Open next steps: cloud deployment, dynamic worker scaling, streaming, and GPU execution.',
      role: 'Group project · Ray cluster, Flask backend & optimizations',
    },
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
    caseStudy: {
      kind: 'research',
      tagline: 'Detecting events, modelling tactics, and scoring match tension from video.',
      problem:
        'Automated sports analysis needs more than action labels: it must know which events matter, how players interact tactically, and how intense the match feels over time. Two blockers stood in the way — there is no large-scale commentary-aligned dataset, and the available SoccerNet video is 500–600 GB, far too large for end-to-end training on a 12 GB GPU.',
      approach: [
        'Designed a modular 6-stage pipeline: feature extraction → event detection → GNN tactical analysis → tension estimation → commentary head.',
        'Cached offline features: segmented video into clips, extracted frame features once, reused them for all training.',
        'Built a dual-stream event detector — BiLSTM appearance stream + FC/LSTM motion stream with feature fusion.',
        'Modelled player interactions as graphs (GNN) and regressed a continuous match-tension score; staged training over 43 epochs with checkpointing.',
      ],
      metrics: [
        { value: '20', label: 'best epoch · val loss 1.440' },
        { value: '43', label: 'epochs trained, chunked' },
        { value: '600 GB', label: 'SoccerNet source · cached features' },
      ],
      findings: [
        'Training loss fell 1.972 → 0.887, but validation loss bottomed at epoch 20 (1.440) then rose — classic overfitting onset.',
        'Fusing appearance + motion improved event recognition, and the tension regressor learned match dynamics progressively.',
        'Feature extraction cost ~2 days per 100 videos; training on cached features was far cheaper by comparison.',
      ],
      discussion:
        'The most useful finding was negative: more epochs did not mean a better model. Validation loss rising after epoch 20 while the generalisation gap widened says early stopping is the single easiest win in this setup. Temperature scaling, logit adjustment, and temporal smoothing then cleaned up predictions at inference. The commentary head remains a scaffold — without aligned text data it produces embeddings, not sentences — which is why the framework is positioned as a foundation for language integration rather than a commentary system. The modular split (extract once, train many) is the real lesson for large video datasets under hardware constraints.',
      role: 'Solo · Team Gamma Force',
    },
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
    caseStudy: {
      kind: 'web',
      tagline: 'The Rotom-Dex from Pokémon Sun & Moon, rebuilt as a handheld web app.',
      problem:
        'Idea: the Rotom-Dex is one of the most charming devices in Pokémon — a handheld that talks back. The thought was simple: what if that exact device lived in a browser? No list app, no spreadsheet — the little screen, the buttons, the whole pocket-machine feel.',
      approach: [
        'Recreated the Rotom-Dex device interface as a responsive web layout.',
        'Built Pokémon data browsing with JavaScript and TypeScript.',
        'Deployed on Netlify for a shareable link.',
      ],
      metrics: [
        { value: 'Handheld', label: 'Rotom-Dex device UI' },
        { value: 'TS + JS', label: 'typed front-end' },
        { value: 'Netlify', label: 'deployed' },
      ],
      findings: [
        'Browsable Pokémon data inside a handheld-device shell.',
        'Device layout holds up responsively across screen sizes.',
        'TypeScript tightened the data handling for the dex entries.',
      ],
      discussion:
        'Notes: this was pure idea-to-screen. The fun was constraining the whole page to a device frame, so responsiveness had to be solved inside that frame rather than by rethinking the layout. TypeScript earned its place mostly at the data boundary — dex entries are irregular enough that types caught real mistakes early.',
      role: 'Solo build',
    },
    viewLink: 'https://rotom-dex-pokedex.netlify.app/',
    github: 'https://github.com/Ananyo-Sen-B2530066/pokedex.git', 
  },
]

export const skillCategories = [
  { id: 'all', name: 'All' },
  { id: 'ml', name: 'ML & Data' },
  { id: 'programming', name: 'Programming' },
  { id: 'math', name: 'Mathematics' },
  { id: 'tools', name: 'Tools & Platforms' },
]

export const skills = [
  {
    id: 'pandas',
    name: 'Pandas',
    icon: 'database',
    category: 'ml',
    level: 90,
    label: 'Advanced',
    blurb:
      'My everyday tool for loading, cleaning, and reshaping tabular data — handling missing values, merging datasets, and building the feature tables that model training actually runs on.',
    tags: ['Data Cleaning', 'GroupBy', 'Merging', 'Time Series'],
  },
  {
    id: 'numpy',
    name: 'NumPy',
    icon: 'activity',
    category: 'ml',
    level: 85,
    label: 'Proficient',
    blurb:
      'Arrays, broadcasting, and vectorised operations are how I turn data-cleaning steps into fast numerical pipelines instead of slow Python loops.',
    tags: ['Arrays', 'Broadcasting', 'Vectorization'],
  },
  {
    id: 'pytorch',
    name: 'Deep Learning · PyTorch',
    icon: 'flame',
    category: 'ml',
    level: 82,
    label: 'Proficient',
    blurb:
      'I build and train neural networks in PyTorch: CNNs for vision, sequence models for time-series and text, and transfer-learning experiments. Comfortable with datasets, training loops, and GPU runs.',
    tags: ['CNN', 'LSTM', 'Transfer Learning', 'CUDA'],
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision',
    icon: 'eye',
    category: 'ml',
    level: 78,
    label: 'Proficient',
    blurb:
      'I apply computer vision to video: detecting key events, extracting multi-modal features, and modelling interactions between players. I have built a deep-learning pipeline for automated sports analysis.',
    tags: ['CNNs', 'Video Understanding', 'Multi-Modal', 'GNNs'],
  },
  {
    id: 'llm-rag',
    name: 'LLMs & RAG',
    icon: 'sparkles',
    category: 'ml',
    level: 70,
    label: 'Familiar',
    blurb:
      'Currently exploring LLM systems — retrieval-augmented generation, chunking strategies, entity relationships, state machines, and jailbreak detection and defense.',
    tags: ['RAG', 'Chunking', 'Embeddings', 'Jailbreak Defense'],
  },
  {
    id: 'sklearn',
    name: 'Scikit-Learn',
    icon: 'activity',
    category: 'ml',
    level: 85,
    label: 'Proficient',
    blurb:
      'My go-to for classical ML — regression, classification, clustering, and model selection. I care about leakage-free pipelines, honest validation, and metrics that reflect real performance.',
    tags: ['Pipelines', 'Cross-Validation', 'Ensembles'],
  },
  {
    id: 'matplotlib',
    name: 'Data Visualization',
    icon: 'trending',
    category: 'ml',
    level: 88,
    label: 'Proficient',
    blurb:
      'I turn results into figures that explain themselves: exploratory plots, model diagnostics, and publication-style charts for reports and presentations.',
    tags: ['Matplotlib', 'Seaborn', 'Plotly'],
  },
  {
    id: 'streamlit',
    name: 'Streamlit',
    icon: 'dashboard',
    category: 'ml',
    level: 80,
    label: 'Proficient',
    blurb:
      'I ship small, usable data apps with Streamlit — dashboards, demos, and interactive tools that let people explore a model without touching code.',
    tags: ['Dashboards', 'Prototyping', 'Model Demos'],
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    icon: 'atom',
    category: 'ml',
    level: 70,
    label: 'Familiar',
    blurb:
      'Working knowledge of TensorFlow and Keras from coursework and side experiments. I reach for PyTorch first, but I can read, adapt, and debug TF code.',
    tags: ['Keras', 'Transfer Learning'],
  },
  {
    id: 'r-lang',
    name: 'R',
    icon: 'bar',
    category: 'ml',
    level: 78,
    label: 'Proficient',
    blurb:
      'Used R for statistical analysis and coursework — hypothesis testing, regression, and data exploration with a tidy, formula-driven approach.',
    tags: ['ggplot2', 'Regression', 'Hypothesis Testing'],
  },
  {
    id: 'python',
    name: 'Python',
    icon: 'code',
    category: 'programming',
    level: 92,
    label: 'Advanced',
    blurb:
      'My primary language for scripts, notebooks, automation, and backend logic. Python is where most of my ML work happens — data cleaning, feature engineering, model training, and evaluation. I write readable, modular Python and lean heavily on the scientific stack.',
    tags: ['Scripting', 'Automation', 'OOP', 'Jupyter'],
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: 'braces',
    category: 'programming',
    level: 78,
    label: 'Proficient',
    blurb:
      'Data structures and algorithms in C++ — the language that sharpened how I think about memory, complexity, and performance.',
    tags: ['STL', 'Algorithms', 'Memory'],
  },
  {
    id: 'js',
    name: 'JavaScript',
    icon: 'braces',
    category: 'programming',
    level: 80,
    label: 'Proficient',
    blurb:
      'Enough JavaScript to build and maintain this portfolio and interactive front-end experiments — DOM, fetch, and modern ES modules.',
    tags: ['ES Modules', 'DOM', 'Fetch API'],
  },
  {
    id: 'react',
    name: 'React',
    icon: 'atom',
    category: 'programming',
    level: 80,
    label: 'Proficient',
    blurb:
      'Component-driven UIs with React: state, props, hooks, and routing. I have built small apps and the interactive pieces of this site with it.',
    tags: ['Hooks', 'Components', 'Vite'],
  },
  {
    id: 'ts',
    name: 'TypeScript',
    icon: 'braces',
    category: 'programming',
    level: 68,
    label: 'Familiar',
    blurb:
      'Comfortable reading and writing typed JavaScript. TypeScript is part of my current learning path for larger front-end projects.',
    tags: ['Types', 'Tooling'],
  },
  {
    id: 'sql',
    name: 'SQL & PostgreSQL',
    icon: 'database',
    category: 'programming',
    level: 74,
    label: 'Proficient',
    blurb:
      'Relational modelling and queries in PostgreSQL — joins, aggregates, indexes, and normalization. Currently going deeper through DBMS coursework.',
    tags: ['Joins', 'Indexing', 'Normalization'],
  },
  {
    id: 'stats',
    name: 'Probability & Statistics',
    icon: 'bar',
    category: 'math',
    level: 92,
    label: 'Advanced',
    blurb:
      'The core of my degree: probability, inference, hypothesis testing, and regression. I use it to judge whether a result is real or just noise.',
    tags: ['Inference', 'Distributions', 'Regression'],
  },
  {
    id: 'linalg',
    name: 'Linear Algebra',
    icon: 'activity',
    category: 'math',
    level: 88,
    label: 'Advanced',
    blurb:
      'Vectors, matrices, eigenvalues, and decompositions — the language behind ML. I use it to reason about models instead of treating them as black boxes.',
    tags: ['Matrix Methods', 'SVD', 'Eigenvalues'],
  },
  {
    id: 'optim',
    name: 'Optimization',
    icon: 'trending',
    category: 'math',
    level: 80,
    label: 'Proficient',
    blurb:
      'Gradient-based optimization, loss surfaces, and regularization. Understanding why training converges — or does not — is a big part of my ML work.',
    tags: ['Gradient Descent', 'Regularization'],
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    icon: 'branch',
    category: 'tools',
    level: 86,
    label: 'Advanced',
    blurb:
      'Version control for every project: branching, pull requests, and a clean commit history. I use GitHub for collaboration and publishing work.',
    tags: ['Branching', 'Pull Requests', 'Actions'],
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: 'terminal',
    category: 'tools',
    level: 82,
    label: 'Proficient',
    blurb:
      'Comfortable in Linux for remote servers, ML environments, and the shell — files, permissions, processes, and package management.',
    tags: ['Bash', 'SSH', 'Package Management'],
  },
  {
    id: 'macos',
    name: 'macOS (Apple Silicon)',
    icon: 'apple',
    category: 'tools',
    level: 85,
    label: 'Proficient',
    blurb:
      'My daily development environment for the last five months. Terminal-first workflow on Apple Silicon, with Homebrew for package management and a Unix foundation for Python, ML, and web tooling.',
    tags: ['Homebrew', 'zsh', 'Apple Silicon', 'Terminal'],
  },
  {
    id: 'flask',
    name: 'Flask',
    icon: 'flame',
    category: 'tools',
    level: 75,
    label: 'Proficient',
    blurb:
      'Lightweight Python APIs and small web services. I have used Flask to expose models and glue together data pipelines.',
    tags: ['REST APIs', 'Routing', 'Deployment'],
  },
  {
    id: 'ray',
    name: 'Ray',
    icon: 'activity',
    category: 'tools',
    level: 65,
    label: 'Familiar',
    blurb:
      'Exploring distributed training and hyperparameter tuning with Ray — scaling experiments beyond a single process.',
    tags: ['Distributed Training', 'Tuning'],
  },
]

export const MARQUEE_TECH = [
  'Python', 'Pandas', 'NumPy', 'PyTorch', 'React', 'Scikit-Learn', 'TensorFlow', 'Ray',
  'Flask', 'R', 'C++', 'Git', 'Linux', 'Windows', 'macOS', 'Gymnasium', 'Streamlit', 'JavaScript', 'TypeScript',
  'Computer Vision', 'LLMs', 'RAG',
]

export const nowBuilding = [
  {
    topic: 'Multivariate Statistics',
    label: 'exploring',
    note: 'Extending the foundations of univariate statistics toward comprehensive multivariate analysis, with a focus on estimation, hypothesis testing, and regression modelling.',
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
  {
    name: 'NPTEL — Introduction to Large Language Models',
    issuer: 'NPTEL, Government of India',
    year: '2026',
    image: 'certificates/nptel-llm.png',
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
    name: 'TRACE: Temporal Regime Analysis and Changepoint Estimation',
    project: 'Econometrics',
    status: 'building',
    group: true,
    update: 'Practical Work of the project is done. Theoretical Part analysis and report building in progress.',
    date: 'Nov 2026',
    link: 'https://github.com/Ananyo-Sen-B2530066/econometrics-structural-breaks', 
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
