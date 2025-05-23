const Projects = [
    {
        id: 1,
        title: "Full Stack Airbnb Clone",
        description: "A full-featured Airbnb clone that allows users to list, discover, and book rental properties seamlessly. Built with a modern tech stack, it includes user authentication, property listings and reviews. The platform offers an intuitive UI and a smooth booking experience.",
        image_path: "https://res.cloudinary.com/dis2wlryh/image/upload/v1747329173/airbnbLanding_iaf3yj.png",
        technologies: ["EJS","JavaScript", "Express.js", "Node.js", "MongoDB", "Mapbox", "Cloudinary", "JOI", "Passport"],
        type: "Full Stack Project",
        links: {
            "live": "https://delta-project-piji.onrender.com/listings",
            "github": "https://github.com/JiveeteshMourya/Delta-Project"
        },
        date: "2024-11-25",
        featured: false,
        filter: ["Project", "Full Stack"]
    },
    {
        id: 2,
        title: "Full Stack Zerodha Clone",
        description: "A leading stock trading platform, designed to provide a seamless and intuitive trading experience. It includes real-time market data, user authentication, portfolio management, and order execution features.",
        image_path: "https://res.cloudinary.com/dis2wlryh/image/upload/v1747329168/zerodhaLanding_kcyu4h.png",
        technologies: ["MERN","Chart.js", "Bcrypt.js", "Cors", "Passport", "JSON Web Token", "Material-UI", "Web Vitals"],
        type: "Full Stack Project",
        links: {
            "live": "https://frontendzerodhaclone.onrender.com/",
            "github": "https://github.com/JiveeteshMourya/Stock-Trading-Platform"
        },
        date: "2024-12-22",
        featured: true,
        filter: ["Project", "React", "MERN", "Full Stack"]
    },
    {
        id: 3,
        title: "Converge - Video Conferencing App",
        description: "High-performance, real-time video conferencing application designed for seamless virtual collaboration. It enables HD video and audio calls, interactive screen sharing and live chat, making it an ideal solution for remote teams, businesses, and online communities. Built with scalability and efficiency in mind, Converge ensures low latency, adaptive streaming, and secure communication, offering a smooth meeting experience across all devices.",
        image_path: "https://res.cloudinary.com/dis2wlryh/image/upload/v1747329170/convergeLanding_qxyfnr.png",
        technologies: ["MERN", "WebRTC", "Socket.io", "STUN Server", "Bcrypt", "Material-UI", "Cors"],
        type: "Full Stack Project",
        links: {
            "live": "https://frontendconverge.onrender.com/",
            "github": "https://github.com/JiveeteshMourya/Converge-Video_Conferencing_App"
        },
        date: "2025-01-20",
        featured: true,
        filter: ["Project", "React", "MERN", "Full Stack"]
    },
    {
        id: 4,
        title: "Churn Prediction App",
        description: "It's developed in Python, leverages Jupyter Notebook for prototyping and Streamlit for an interactive UI. It employs Pandas for data manipulation, scikit-learn's Logistic Regression for churn prediction, and evaluates models using train-test split and performance metrics. Visualizations via Matplotlib and Seaborn, with joblib for model persistence, enhance insights.",
        image_path: "https://res.cloudinary.com/dis2wlryh/image/upload/v1747328841/My%20Brand/JCodeLogo_kwsosi.png",
        technologies: ["Python", "Jupyter Notebook", "Streamlit", "Pandas", "Scikit-learn", "Joblib", "Matplotlib", "Seaborn"],
        type: "Project",
        links: {
            "live": "",
            "github": "https://github.com/JiveeteshMourya/Churn_Prediction_App"
        },
        date: "2025-01-11",
        featured: false,
        filter: ["Project", "AI/ML", "Python"]
    },
    {
        id: 5,
        title: "URL Shortener",
        description: "It's developed in Python and uses its Pyshorteners library to shorten URLs. The app takes a long URL as input and generates a short URL, which can be used to redirect to the original link. It's a simple yet effective tool for sharing links and tracking user engagement.",
        image_path: "https://res.cloudinary.com/dis2wlryh/image/upload/v1747328841/My%20Brand/JCodeLogo_kwsosi.png",
        technologies: ["Python", "Pyshorteners"],
        type: "Project",
        links: {
            "live": "",
            "github": "https://github.com/JiveeteshMourya/Python_Applications/tree/main/urlShortener"
        },
        date: "2025-01-15",
        featured: false,
        filter: ["Project", "Python"]
    },
    {
        id: 6,
        title: "Infinite Loop Graphic",
        description: "It's developed in Python and uses Turtle Graphics to create mesmerizing visual patterns. The app generates intricate designs by drawing shapes and patterns in a loop, creating a hypnotic effect. It was a fun project to explore the creative potential of programming.",
        image_path: "https://res.cloudinary.com/dis2wlryh/image/upload/v1747328841/My%20Brand/JCodeLogo_kwsosi.png",
        technologies: ["Python", "Turtle Graphics"],
        type: "Project",
        links: {
            "live": "",
            "github": "https://github.com/JiveeteshMourya/Python_Applications/tree/main/InfiniteLoopGraphic"
        },
        date: "2025-01-17",
        featured: false,
        filter: ["Project", "Python"]
    },
    {
        id: 7,
        title: "Basic Chat-Bot",
        description: "It's developed in Python, uses its time and tkinter libraries to create a simple chatbot. The app responds to user queries with predefined messages, providing information on the current time and date. It was a beginner-friendly project to learn about chatbot development and GUI programming.",
        image_path: "https://res.cloudinary.com/dis2wlryh/image/upload/v1747328841/My%20Brand/JCodeLogo_kwsosi.png",
        technologies: ["Python", "Tkinter"],
        type: "Project",
        links: {
            "live": "",
            "github": "https://github.com/JiveeteshMourya/Python_Applications/tree/main/ChatApp"
        },
        date: "2025-01-18",
        featured: false,
        filter: ["Project", "Python"]
    },
    {
        id: 8,
        title: "Spotify Clone",
        description: "Frontend Spotify Clone, which is dynamic and responsive. If follows the same color schem and layout as the original Spotify website.",
        image_path: "https://res.cloudinary.com/dis2wlryh/image/upload/v1747328841/My%20Brand/JCodeLogo_kwsosi.png",
        technologies: ["HTML", "CSS"],
        type: "Project",
        links: {
            "live": "",
            "github": "https://github.com/JiveeteshMourya/Spotify-Clone"
        },
        date: "2024-06-23",
        featured: false,
        filter: ["Project"]
    },
    {
        id: 99,
        title: "Example Title",
        description: "A personal portfolio website showcasing my projects, achievements, and skills.",
        image_path: "https://res.cloudinary.com/dis2wlryh/image/upload/v1747328841/My%20Brand/JCodeLogo_kwsosi.png",
        technologies: ["React", "Tailwind", "Framer Motion", "JavaScript"],
        type: "Achievement",
        links: {
            "live": "http:/asd;lhfasdf",
            "github": "https://github.com/JiveeteshMourya/Portfolio"
        },
        date: "2025-01-05",
        featured: false,
        filter: []
    }
]

export default Projects;