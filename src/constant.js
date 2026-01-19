import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.jpg";
import appLandingAbout from "./assets/images/app-landing-about.jpg";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/aboutusbanner.jpg";
import contactusbanner from "./assets/images/contactusbanner1.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import profileImg1 from "./assets/images/profileimg-1.jpg";
import profileImg2 from "./assets/images/profileimg-2.jpg";
import serviceswebdevelopment from "./assets/images/services/serviceswebdevelopment.jpg";
import serviceaidevelopment from "./assets/images/services/serviceaidevelopment.jpg";
import chatbotdevelopment from "./assets/images/services/chatbotdevelopment.jpg";
import datadevelopment from "./assets/images/services/datadevelopment.jpg";
import gamedevelopment from "./assets/images/services/gamedevelopment.jpg";
import blockchaindevelopment from "./assets/images/services/blockchaindevelopment.jpg";
import machinelearning from "./assets/images/services/machinelearning.jpg";
import clouddevelopment from "./assets/images/services/clouddevelopment.jpg";
import rpa from "./assets/images/services/rpa.jpg";
import aboutone from "./assets/images/aboutone.jpg";
import abouttwo from "./assets/images/abouttwo.jpg";
import aboutthree from "./assets/images/aboutthree.jpg";
import aboutfour from "./assets/images/aboutfour.jpg";
import aboutfive from "./assets/images/aboutfive.jpg";
import aboutusintroone from "./assets/images/aboutusintroone.jpg";
import aboutusintrotwo from "./assets/images/aboutusintrotwo.jpg";
import allbgimage from "./assets/images/allbgimage.jpg";
import { lazy } from "react";
import { BiBrain, BiBulb, BiRocket } from "react-icons/bi";
import { GoFileMedia, GoGraph } from "react-icons/go";
import { SlBadge } from "react-icons/sl";
import {
  MdOutlineDashboardCustomize,
  MdOutlineDeveloperMode,
  MdPermMedia,
} from "react-icons/md";
import {
  GiArtificialIntelligence,
  GiRobotLeg,
  GiVendingMachine,
} from "react-icons/gi";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaAppStoreIos, FaGamepad } from "react-icons/fa";
import { SiFlutter, SiHiveBlockchain } from "react-icons/si";
import { IoLogoAndroid, IoMdCloudDone } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { RiCustomSize } from "react-icons/ri";
import { TbDeviceMobileCode } from "react-icons/tb";

const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  serviceswebdevelopment,
  serviceaidevelopment,
  chatbotdevelopment,
  datadevelopment,
  gamedevelopment,
  blockchaindevelopment,
  machinelearning,
  clouddevelopment,
  rpa,
  contactusbanner,
  aboutusintroone,
  aboutusintrotwo,
  allbgimage,
};

// company details
export const companyDetails = {
  phone: "+91-9834082924",
  whatsapp: "919834082924",
  whatsappbox: "919834082924",
  email: "abc@xya.com",
  address: "SHOP NO. BG-1, SUPREME PARK B, BEHIND POWER HOUSE, AQUEM-MARGAO",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "How do we begin the collaboration?",
    answer:
      "Initiating a partnership is straightforward. Schedule a complimentary strategy session with us, and we will map out a tailored roadmap to transform your innovative concepts into market-ready AI solutions.",
  },
  {
    id: 2,
    question: "Is technical expertise required on my end?",
    answer:
      "Not at all. We bridge the gap between business vision and technical execution. Our dedicated team of engineers will manage the complex development while you steer the strategic direction of your venture.",
  },
  {
    id: 3,
    question: "What is the typical development timeline?",
    answer:
      "Timelines depend on project complexity. Generally, we aim to deliver a robust Minimum Viable Product (MVP) within 3 to 6 months, ensuring a swift entry into the market without compromising quality.",
  },
  {
    id: 4,
    question: "How is the feasibility of my idea assessed?",
    answer:
      "We conduct a thorough feasibility analysis during our initial consultation. We assess technical viability, market demand, and ROI potential to provide honest, actionable feedback on your concept.",
  },
  {
    id: 5,
    question: "Which specific AI technologies do you specialize in?",
    answer:
      "Our expertise spans the entire AI spectrum, including Deep Learning, Natural Language Understanding (NLU), Computer Vision, and Predictive Analytics, ensuring we can build the exact solution your business requires.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "AI-Powered E-commerce",
    icon: require("./assets/images/icons/online-shopping.png"),
    img: <CgWebsite />,
    description:
      "Revolutionize your online store with intelligent E-commerce platforms. We integrate smart recommendation engines and automated customer support to drive sales and enhance user retention.",
  },
  {
    id: 2,
    title: "Social Engagement Platforms",
    img: <GoFileMedia />,
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Build vibrant communities with our custom social media solutions. We utilize algorithms to personalize content feeds and foster deeper connections among your user base.",
  },
  {
    id: 3,
    title: "High-Conversion Landing Pages",
    img: <TfiLayoutMediaRightAlt />,
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Capture leads effectively with data-driven landing pages. Our designs are optimized for conversion, utilizing A/B testing principles and persuasive aesthetics to maximize your marketing ROI.",
  },
  {
    id: 4,
    title: "Bespoke Web Solutions",
    img: <MdOutlineDashboardCustomize />,
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Get a web presence that fits your brand like a glove. We develop custom web applications from the ground up, ensuring every feature is aligned with your specific operational goals.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "Native iOS Applications",
    img: <FaAppStoreIos />,
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Deliver a premium experience on Apple devices. We craft high-performance iOS apps using Swift, focusing on smooth animations, security, and intuitive human interface guidelines.",
  },
  {
    id: 2,
    title: "Native Android Solutions",
    img: <IoLogoAndroid />,
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "Reach the widest audience with powerful Android apps. Our Kotlin-based development ensures your app runs flawlessly across the fragmented Android ecosystem.",
  },
  {
    id: 3,
    title: "Cross-Platform Flutter Apps",
    img: <SiFlutter />,

    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Optimize your budget without sacrificing quality. Our Flutter expertise allows us to deploy stunning, native-like apps to both iOS and Android from a single shared codebase.",
  },
  {
    id: 4,
    title: "Hybrid Mobile Development",
    img: <TbDeviceMobileCode />,
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Combine the flexibility of web tech with the power of mobile. We build hybrid applications that offer rapid deployment and easy maintenance for dynamic business environments.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    img: <MdOutlineDeveloperMode className="w-6 h-6" />,
    link: "/services/web-app-development",
    title: "Web & Mobile Engineering",
    desc: "Establish a dominant digital footprint with our end-to-end engineering services. We architect scalable mobile and web applications that serve as the backbone of your digital strategy, prioritized for performance and user engagement.",
    detailContent:
      "In today's digital-first world, your application is often the primary touchpoint for your customers. We go beyond basic coding to engineer robust digital ecosystems. Our Web & Mobile Engineering service encompasses the entire product lifecycle—from ideation and prototyping to deployment and scaling. We leverage modern frameworks like React, React Native, and Node.js to build responsive, lightning-fast applications. But we don't stop at functionality; we infuse our apps with AI-driven features such as personalized dashboards and intelligent search to keep your users engaged. Our agile methodology ensures transparency and adaptability, allowing us to pivot as market needs evolve. Partner with us to build digital assets that are secure, scalable, and ready to propel your business forward.",
  },
  {
    id: 2,
    img: <GiArtificialIntelligence className="w-6 h-6" />,
    link: "/services/ai-development",
    title: "Custom AI Architectures",
    desc: "Harness the transformative power of Artificial Intelligence. We design and deploy custom AI models that automate complex tasks, predict market trends, and uncover hidden value within your data.",
    detailContent:
      "Artificial Intelligence is no longer a luxury; it's a competitive necessity. Our Custom AI Architectures service is designed to demystify AI and make it a tangible driver of value for your business. We start by analyzing your unique operational challenges and data landscape. From there, we develop bespoke machine learning models tailored to your specific objectives—whether that's automating customer service, optimizing supply chains, or predicting equipment failures. Our team utilizes state-of-the-art libraries like TensorFlow and PyTorch to build models that are not only accurate but also explainable and ethical. We ensure seamless integration with your existing IT infrastructure, so you can start reaping the benefits of AI without disrupting your current workflow.",
  },
  {
    id: 3,
    img: <HiChatBubbleBottomCenterText className="w-6 h-6" />,
    link: "/services/chatbot-development",
    title: "Intelligent Conversational Agents",
    desc: "Redefine customer support with next-gen chatbots. Our NLP-driven agents provide instant, accurate responses 24/7, resolving inquiries and guiding users with a human-like touch.",
    detailContent:
      "Customer expectations for speed and availability are at an all-time high. Our Intelligent Conversational Agents are designed to meet this demand without exhausting your human resources. Unlike simple rule-based bots, our agents utilize advanced Natural Language Processing (NLP) to understand context, sentiment, and intent. This allows them to handle complex queries, execute transactions, and even provide personalized product recommendations. We build these bots to live where your customers are—on your website, WhatsApp, Slack, or Messenger. By automating routine interactions, we free up your support team to focus on high-value, sensitive issues, transforming your customer service from a cost center into a loyalty engine.",
  },
  {
    id: 4,
    img: <BsFillClipboard2DataFill className="w-6 h-6" />,
    link: "/services/data-analytics",
    title: "Strategic Data Intelligence",
    desc: "Move from raw data to revenue-generating insights. Our analytics solutions aggregate, visualize, and interpret your business data, empowering you to make decisions with absolute confidence.",
    detailContent:
      "Data is abundant, but insight is rare. Our Strategic Data Intelligence service bridges that gap. We implement comprehensive data pipelines that collect information from siloed sources, cleaning and structuring it for analysis. Using advanced BI tools and custom dashboards, we visualize real-time performance metrics that matter most to your bottom line. Beyond descriptive analytics, we employ predictive models to forecast future trends, helping you play offense rather than defense. Whether you need to optimize pricing strategies, identify churn risks, or streamline operations, our data solutions provide the empirical evidence you need to act specifically and effectively.",
  },
  {
    id: 5,
    img: <FaGamepad className="w-6 h-6" />,
    link: "/services/game-development",
    title: "Immersive Game Engineering",
    desc: "Create captivating virtual worlds. We combine creative artistry with technical prowess to develop cross-platform games that offer deep engagement and high retention rates through AI-enhanced gameplay.",
    detailContent:
      "Gaming is the ultimate test of user engagement. Our Immersive Game Engineering service blends high-fidelity graphics with fluid mechanics to create unforgettable player experiences. We specialize in Unity and Unreal Engine development, targeting mobile, PC, and console platforms. What sets us apart is our integration of AI into game design—creating smarter NPCs, adaptive difficulty curves, and procedural content generation that keeps the gameplay fresh. We also assist with monetization strategies, including in-app purchases and ad integration, ensuring your creative vision is also a commercial success. From concept art to finalQA, we bring your game world to life.",
  },
  {
    id: 6,
    img: <SiHiveBlockchain className="w-6 h-6" />,
    link: "/services/blockchain-development",
    title: "Decentralized Ledger Solutions",
    desc: "Trust is the new currency. We build secure, transparent blockchain applications, including smart contracts and dApps, that eliminate intermediaries and enhance the integrity of your digital transactions.",
    detailContent:
      "Blockchain is redefining the architecture of trust. Our Decentralized Ledger Solutions help you navigate this complex landscape. We develop secure Smart Contracts that automate agreements with immutable code, ensuring transparency and reducing legal overhead. Our expertise extends to building decentralized applications (dApps), private permissioned blockchains for enterprise supply chains, and tokenization platforms for digital assets. We prioritize security audits and gas optimization to ensure your blockchain solutions are not only safe but also economically viable. Whether you are disrupting finance with DeFi or ensuring provenance in logistics, we provide the technical foundation for decentralized innovation.",
  },
  {
    id: 7,
    img: <GiVendingMachine className="w-6 h-6" />,
    link: "/services/machine-learning",
    title: "Advanced Machine Learning",
    desc: "Automate the inexplicable. Our ML engineers build algorithms that learn from your historical data to solve non-linear problems, from fraud detection to demand forecasting.",
    detailContent:
      "Machine Learning allows systems to improve without explicit programming. Our Advanced ML service is focused on solving problems that are too complex for traditional rule-based software. We handle the entire ML pipeline: data labeling, feature engineering, model training, and deployment. We build recommendation systems that boost sales, computer vision models for quality control in manufacturing, and anomaly detection systems for cybersecurity. We utilize the latest techniques in Deep Learning and Reinforcement Learning to ensure your models achieve state-of-the-art accuracy. By continuously retraining on new data, our solutions adapt to changing environments, keeping your business resilient and efficient.",
  },
  {
    id: 8,
    img: <IoMdCloudDone className="w-6 h-6" />,
    link: "/services/cloud-computing",
    title: "Cloud Infrastructure & DevOps",
    desc: "Scale indefinitely with a cloud-native approach. We design resilient, auto-scaling cloud architectures on AWS and Azure, ensuring your applications are always available and cost-optimized.",
    detailContent:
      "The cloud is the engine of modern agility. Our Cloud Infrastructure & DevOps service ensures you harness its full potential. We move beyond simple 'lift and shift' migrations to design cloud-native architectures that utilize microservices, serverless computing, and containerization (Docker/Kubernetes). This approach maximizes scalability and fault tolerance. We also implement CI/CD pipelines to automate your software delivery process, enabling you to release features faster and with fewer bugs. Our focus on FinOps ensures you only pay for the resources you use, optimizing your cloud spend without compromising on performance or security.",
  },
  {
    id: 9,
    img: <GiRobotLeg className="w-6 h-6" />,
    link: "/services/rpa",
    title: "Robotic Process Automation",
    desc: "Eliminate the mundane. We deploy intelligent software bots to handle repetitive, rule-based tasks across your legacy systems, drastically reducing error rates and operational costs.",
    detailContent:
      "Your human talent is too valuable to be spent on repetitive data entry. Our Robotic Process Automation (RPA) service employs software bots to mimic human interactions with digital systems. We automate workflows such as invoice processing, employee onboarding, and report generation. Unlike standard automation, our bots are infused with AI (Cognitive RPA), allowing them to process unstructured data like scanned documents and emails. We ensure seamless integration with your legacy ERP and CRM systems without the need for expensive API development. The result is a dramatic increase in operational speed and accuracy, freeing your workforce to focus on strategic, creative initiatives.",
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    img: <BiBrain className="w-6 h-6" />,
    title: "Visionary Strategy",
    desc: "We don't just build; we strategize. We align every technological implementation with your long-term business goals to ensure sustainable growth.",
  },
  {
    img: <BiRocket className="w-6 h-6" />,
    title: "Future-Proof Tech",
    desc: "We stay ahead of the curve so you don't have to. Our solutions utilize the latest stable technologies to ensure longevity and adaptability.",
  },
  {
    img: <BiBulb className="w-6 h-6" />,
    title: "Creative Problem Solving",
    desc: "We thrive on complexity. Our team approaches challenges with lateral thinking to find innovative solutions where others see dead ends.",
  },
  {
    img: <GoGraph className="w-6 h-6" />,
    title: "Measurable Impact",
    desc: "We focus on ROI. We provide clear metrics and analytics so you can see exactly how our solutions are improving your bottom line.",
  },
  {
    img: <SlBadge className="w-6 h-6" />,
    title: "Uncompromising Quality",
    desc: "Excellence is our standard. From clean code to pixel-perfect design, we maintain rigorous quality assurance protocols in every project.",
  },
];

export const reviews = [
  {
    id: 1,
    profileImg: profileImg2,
    name: "Vikram S.",
    role: "Director at OmniStream",
    desc: "“Prana Consultants didn't just build an app; they built a business engine for us. Their strategic input on the user journey was invaluable. The final product is robust, beautiful, and strictly aligned with our operational needs.”",
  },
  {
    id: 2,
    profileImg: profileImg1,
    name: "Sarah Jenkins",
    role: "CTO of MedTech Aligned",
    desc: "“The expertise they brought to our data infrastructure project was top-tier. They automated our entire reporting workflow, saving us hundreds of man-hours monthly. A truly professional and capable team.”",
  },
  {
    id: 3,
    profileImg: profileImg2,
    name: "Rahul M.",
    role: "Founder, QuickServe",
    desc: "“We needed a support bot that actually worked, and they delivered. The natural language understanding is impressive—our customers rarely feel the need to escalate to a human agent anymore. Highly recommended.”",
  },
  {
    id: 4,
    profileImg: profileImg1,
    name: "Elena R.",
    role: "VP of Marketing, TrendSetters",
    desc: "“Their data analytics overhaul gave us clarity involving our customer segments that we never had before. We're now making marketing decisions based on hard data rather than gut feeling, and the results speak for themselves.”",
  },
  {
    id: 5,
    profileImg: profileImg2,
    name: "David K.",
    role: "Lead Designer, PixelForge",
    desc: "“As a game studio, we are picky about performance. Prana Consultants delivered a Unity module that was optimized to perfection. Smooth, bug-free, and exactly what our architecture needed.”",
  },
  {
    id: 6,
    profileImg: profileImg1,
    name: "Anita B.",
    role: "CEO, ChainTrust",
    desc: "“Blockchain is complex, but working with them was simple. They guided us through the tokenization process with expertise and transparency. The smart contracts they wrote are secure and efficient.”",
  },
  {
    id: 7,
    profileImg: profileImg2,
    name: "Michael T.",
    role: "Head of Operations, LogiFlow",
    desc: "“The Machine Learning model they developed for our supply chain prediction has reduced our stockouts by 40%. It’s amazing to see technology have such a direct impact on efficiency.”",
  },
  {
    id: 8,
    profileImg: profileImg1,
    name: "Priya D.",
    role: "IT Manager, SkyHigh Corp",
    desc: "“Our migration to the cloud was seamless thanks to their DevOps team. They handled the legacy transfer without any downtime and set us up with a scalable architecture that grows with us.”",
  },
  {
    id: 9,
    profileImg: profileImg2,
    name: "Tom H.",
    role: "Director, Efficient Biz",
    desc: "“RPA has been a revelation. We automated our invoicing process, and the error rate dropped to zero. Prana Consultants made the integration process smooth and painless.”",
  },
  {
    id: 10,
    profileImg: profileImg1,
    name: "Jessica W.",
    role: "Founder, EduTech Pro",
    desc: "“Their team built a learning platform that is intuitive and engaging. The feedback from our students has been overwhelmingly positive. They truly understand how to build for the end-user.”",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

export const webPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
    description:
      "A robust fintech ecosystem simplifying asset management and investment tracking for modern investors.",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
    description:
      "A global mobility platform providing seamless accommodation and relocation services for international students.",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
    description:
      "An exclusive professional network designed to foster peer-to-peer collaboration among industry executives.",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
    description:
      "A dynamic talent marketplace bridging the gap between freelance experts and enterprises needing specialized skills.",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
    description:
      "A comprehensive corporate financial portal designed to optimize business capital and strategic growth.",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
    description:
      "Next-generation communication infrastructure enabling real-time collaboration and secure team messaging.",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Glowsy",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
  },
];

export const appPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
    description:
      "A streamlined marketplace for automotive parts, facilitating rapid exchanges and inventory management.",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
    description:
      "On-demand transportation logistics app, connecting users with verified chauffeurs for reliable travel.",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Glowsy",
    description:
      "Personalized beauty commerce app utilizing AI to recommend products based on user skin profiles.",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
    description:
      "Service aggregation platform connecting homeowners with vetted local professionals for maintenance tasks.",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
    description:
      "A digital sanctuary application providing curated spiritual content and community engagement features.",
  },
];

export const aboutUsItems = [
  {
    title: "Innovation First",
    description:
      "Innovation isn't just a buzzword for us; it's our operating system. We consistently explore the bleeding edge of tech to bring you solutions that are years ahead of the market.",
    image: aboutone,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Client-Centric DNA",
    description:
      "Your success is our metric. We don't just deliver code; we build partnerships. We immerse ourselves in your business goals to ensure our digital solutions drive real-world value.",
    image: abouttwo,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Standard of Excellence",
    description:
      "We believe that 'good enough' is failure. Our commitment to quality is absolute, ensuring that every line of code and every pixel is crafted with precision and purpose.",
    image: aboutthree,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Purpose-Driven Tech",
    description:
      "Technology is a tool for empowerment. Our mission is to build digital products that solve genuine problems, streamline complex operations, and enhance the human experience.",
    image: aboutfour,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Holistic Solutions",
    description:
      "We offer the complete package. From the first whiteboard sketch to the final deployment and ongoing maintenance, we support your digital journey at every single step.",
    image: aboutfive,
    gradient: "from-primary/60 to-primary/80",
  },
];
