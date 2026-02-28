import adminDashboard from '../assets/projectPic/adminDashboard.PNG';
import buyerWishlist from '../assets/projectPic/buyerWishlist.PNG';
import marketPleace from '../assets/projectPic/marketPleace.PNG';

const projects = [
    {
        id: "stocklot-marketplace",
        name: "Stocklot B2B Marketplace",
        tagline: "Optimizing multi-warehouse supply chains with real-time financial synchronization.",
        description: "A sustainable shopping experience with high-performance product discovery and seamless checkout flow.",
        problem: "Data silos and financial discrepancies in high-volume B2B transactions due to client-side balance handling.",
        challenge: "Maintaining 100% ledger accuracy across 50+ global warehouses with sub-second responsiveness.",
        approach: "Re-engineered the state management layer to a 'Backend-as-the-Source' model with RTK Query synchronization.",
        result: "Eliminated 100% of calculation errors and improved reporting speed by 40%.",
        features: [
            "Centralized Ledger System for source of truth",
            "Dynamic Multi-Warehouse Reporting",
            "RTK Query Automated Synchronization",
            "Real-time Balance Adjustment Engine"
        ],
        techStack: ["React Native", "Redux Toolkit", "FastAPI", "MongoDB"],
        images: [
            marketPleace,
            adminDashboard,
            buyerWishlist
        ],
        link: "https://github.com/noyonkummerdas",
        ctaText: "View Case Study",
        design: {
            accent: "#6366F1",
            animation: "lift"
        }
    },
    {
        id: "notification-engine",
        name: "Intelligent Notification Engine",
        tagline: "Accelerating B2B deal closures through real-time push communication.",
        description: "Enterprise-grade dashboard for real-time stock tracking and predictive supply chain analytics.",
        problem: "15% drop in transaction completions due to delayed responses in high-value negotiations.",
        challenge: "Building a context-aware notification system with zero-latency delivery during negotiation state changes.",
        approach: "Designed an asynchronous state-machine based dispatcher in Python with WebSocket and FCM integration.",
        result: "Reduced average deal closure time from 4 days to 18 hours.",
        features: [
            "Automated Offer Lifecycle State Machine",
            "Python-based Real-time Dispatcher",
            "Deep-link Integration for conversion",
            "99.9% Message Delivery Reliability"
        ],
        techStack: ["Python", "FastAPI", "WebSockets", "FCM"],
        images: [
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
        ],
        link: "https://github.com/noyonkummerdas",
        ctaText: "View Case Study",
        design: {
            accent: "#8B5CF6",
            animation: "fade"
        }
    },
    {
        id: "social-auth",
        name: "Social Identity Management",
        tagline: "High-conversion onboarding with secure, manual social identity synchronization.",
        description: "High-conversion onboarding with secure, manual social identity synchronization for enterprise apps.",
        problem: "Security vulnerabilities and rigid UI constraints in standard social login wrappers.",
        challenge: "Developing a 'manual' handshake with official SDKs that remains enterprise-secure and role-adaptable.",
        approach: "Integrated official Facebook/Google SDKs with a secure backend 'debug_token' verification layer.",
        result: "Achieved 30% increase in sign-up conversions with zero security breaches.",
        features: [
            "Official SDK Hand-coded Integration",
            "Backend-Heavy Token Verification",
            "Automated Multi-Role Mapping",
            "JWT-based Secure Session Management"
        ],
        techStack: ["React", "OAuth 2.0", "JWT", "FastAPI Security"],
        images: [
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
        ],
        link: "https://github.com/noyonkummerdas",
        ctaText: "Explore Security",
        design: {
            accent: "#6366F1",
            animation: "lift"
        }
    }
];

export default projects;
