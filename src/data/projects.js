const projects = [
    {
        id: "stocklot-marketplace",
        name: "Stocklot B2B Marketplace",
        tagline: "Optimizing multi-warehouse supply chains with real-time financial synchronization.",
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
        ctaText: "View Case Study",
        design: {
            accent: "#6366F1", // Indigo
            animation: "lift"
        }
    },
    {
        id: "notification-engine",
        name: "Intelligent Notification Engine",
        tagline: "Accelerating B2B deal closures through real-time push communication.",
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
        ctaText: "View Case Study",
        design: {
            accent: "#8B5CF6", // Purple
            animation: "fade"
        }
    },
    {
        id: "social-auth",
        name: "Social Identity Management",
        tagline: "High-conversion onboarding with secure, manual social identity synchronization.",
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
        ctaText: "Explore Security",
        design: {
            accent: "#6366F1",
            animation: "lift"
        }
    },
    {
        id: "cloud-media",
        name: "Scalable Cloud Media Infrastructure",
        tagline: "High-performance, secure media storage for large-scale product inventories.",
        problem: "Physical storage bottlenecks and latency when serving high-resolution product media globally.",
        challenge: "Transitioning to cloud storage without production downtime while maintaining commercial privacy.",
        approach: "Architected a hybrid S3-compatible layer using MinIO with direct-to-cloud presigned URL uploads.",
        result: "Reduced server bandwidth usage by 60% and improved image load speeds by 65%.",
        features: [
            "MinIO S3-Compatible Infrastructure",
            "Secure Presigned URL Handshake",
            "Backend Media Optimization Pipeline",
            "Global CDN Delivery Logic"
        ],
        techStack: ["MinIO", "FastAPI", "S3 API", "React"],
        ctaText: "View Architecture",
        design: {
            accent: "#6366F1",
            animation: "lift"
        }
    },
    {
        id: "bi-dashboard",
        name: "Unified BI Dashboard",
        tagline: "Real-time KPI tracking by merging GA4 analytics with operational database insights.",
        problem: "Fragmented business intelligence causing slow and inaccurate strategic pivots for leadership.",
        challenge: "Aggregating external behavioral data with internal transactional databases in sub-second responses.",
        approach: "Developed a cached aggregation layer with high-performance MongoDB pipelines and unified REST endpoint.",
        result: "Increased quarterly revenue by 12% through data-driven inventory shifts.",
        features: [
            "Hybrid Analytics API (GA4 + MongoDB)",
            "Real-time Revenue Trend Tracking",
            "High-Performance Aggregation Pipelines",
            "Interactive Multi-Metric Visualizations"
        ],
        techStack: ["GA4 API", "MongoDB", "Python", "RTK Query"],
        ctaText: "View Analytics Dashboard",
        design: {
            accent: "#3B82F6", // Blue
            animation: "fade"
        }
    }
];

export default projects;
