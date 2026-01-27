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
} from "react-icons/md";
import {
  GiArtificialIntelligence,
  GiRobotLeg,
  GiVendingMachine,
} from "react-icons/gi";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaAppStoreIos } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";

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
  email: "pc.pranaconsultants@gmail.com",
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
    question: "How do we identify the right AI strategy?",
    answer:
      "We begin with a data readiness assessment. Our experts analyze your existing infrastructure to map out high-impact AI opportunities, ensuring your investment yields measurable operational improvements.",
  },
  {
    id: 2,
    question: "Is my data secure with your AI models?",
    answer:
      "Absolutely. We adhere to privacy-by-design principles. All our machine learning pipelines are encrypted, and we can deploy models on-premise or in your private cloud to ensure your data never leaves your control.",
  },
  {
    id: 3,
    question: "What is the timeline for an AI prototype?",
    answer:
      "Speed to value is key. We typically deliver a proof-of-concept (POC) within 4 to 8 weeks, allowing you to validate the model's performance on your real-world data before scaling up.",
  },
  {
    id: 4,
    question: "Can you integrate AI with our legacy systems?",
    answer:
      "Yes. Our specialize in 'AI bridging'. We build custom API layers that allow modern predictive models to communicate seamlessly with your older ERP or CRM systems without requiring a full overhaul.",
  },
  {
    id: 5,
    question: "What specific neural networks do you use?",
    answer:
      "We select the architecture based on the problem. We utilize Convolutional Neural Networks (CNNs) for vision, Transformers (like BERT/GPT) for NLP, and Recurrent Neural Networks (RNNs) for time-series forecasting.",
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

// all services - Filtered for AI Services only
export const allServices = [
  {
    id: 2,
    img: <GiArtificialIntelligence className="w-6 h-6" />,
    title: "Custom AI Architectures",
    desc: "Harness the transformative power of Artificial Intelligence. We design and deploy custom AI models that automate complex tasks, predict market trends, and uncover hidden value within your data.",
    detailContent:
      "Artificial Intelligence is no longer a luxury; it's a competitive necessity. Our Custom AI Architectures service is designed to demystify AI and make it a tangible driver of value for your business. We start by analyzing your unique operational challenges and data landscape. From there, we develop bespoke machine learning models tailored to your specific objectives—whether that's automating customer service, optimizing supply chains, or predicting equipment failures. Our team utilizes state-of-the-art libraries like TensorFlow and PyTorch to build models that are not only accurate but also explainable and ethical. We ensure seamless integration with your existing IT infrastructure, so you can start reaping the benefits of AI without disrupting your current workflow.",
  },
  {
    id: 3,
    img: <HiChatBubbleBottomCenterText className="w-6 h-6" />,
    title: "Intelligent Conversational Agents",
    desc: "Redefine customer support with next-gen chatbots. Our NLP-driven agents provide instant, accurate responses 24/7, resolving inquiries and guiding users with a human-like touch.",
    detailContent:
      "Customer expectations for speed and availability are at an all-time high. Our Intelligent Conversational Agents are designed to meet this demand without exhausting your human resources. Unlike simple rule-based bots, our agents utilize advanced Natural Language Processing (NLP) to understand context, sentiment, and intent. This allows them to handle complex queries, execute transactions, and even provide personalized product recommendations. We build these bots to live where your customers are—on your website, WhatsApp, Slack, or Messenger. By automating routine interactions, we free up your support team to focus on high-value, sensitive issues, transforming your customer service from a cost center into a loyalty engine.",
  },
  {
    id: 4,
    img: <BsFillClipboard2DataFill className="w-6 h-6" />,
    title: "Strategic Data Intelligence",
    desc: "Move from raw data to revenue-generating insights. Our analytics solutions aggregate, visualize, and interpret your business data, empowering you to make decisions with absolute confidence.",
    detailContent:
      "Data is abundant, but insight is rare. Our Strategic Data Intelligence service bridges that gap. We implement comprehensive data pipelines that collect information from siloed sources, cleaning and structuring it for analysis. Using advanced BI tools and custom dashboards, we visualize real-time performance metrics that matter most to your bottom line. Beyond descriptive analytics, we employ predictive models to forecast future trends, helping you play offense rather than defense. Whether you need to optimize pricing strategies, identify churn risks, or streamline operations, our data solutions provide the empirical evidence you need to act specifically and effectively.",
  },
  {
    id: 7,
    img: <GiVendingMachine className="w-6 h-6" />,
    title: "Advanced Machine Learning",
    desc: "Automate the inexplicable. Our ML engineers build algorithms that learn from your historical data to solve non-linear problems, from fraud detection to demand forecasting.",
    detailContent:
      "Machine Learning allows systems to improve without explicit programming. Our Advanced ML service is focused on solving problems that are too complex for traditional rule-based software. We handle the entire ML pipeline: data labeling, feature engineering, model training, and deployment. We build recommendation systems that boost sales, computer vision models for quality control in manufacturing, and anomaly detection systems for cybersecurity. We utilize the latest techniques in Deep Learning and Reinforcement Learning to ensure your models achieve state-of-the-art accuracy. By continuously retraining on new data, our solutions adapt to changing environments, keeping your business resilient and efficient.",
  },
  {
    id: 9,
    img: <GiRobotLeg className="w-6 h-6" />,
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
    title: "Cognitive Strategy",
    desc: "We don't just write code; we architect intelligence. We align deep learning capabilities with your business KPIs to unlock new revenue streams.",
  },
  {
    img: <BiRocket className="w-6 h-6" />,
    title: "Predictive Power",
    desc: "Move from reactive to proactive. Our predictive models allow you to anticipate market shifts and customer needs before they happen.",
  },
  {
    img: <BiBulb className="w-6 h-6" />,
    title: "Algorithm Agnostic",
    desc: "We pick the best model for the job. Whether it's Random Forests or Deep Neural Networks, we focus on accuracy and efficiency over hype.",
  },
  {
    img: <GoGraph className="w-6 h-6" />,
    title: "Data-Driven ROI",
    desc: "We quantify the intangible. Our analytics dashboards provide clear, real-time visibility into how AI is optimizing your bottom line.",
  },
  {
    img: <SlBadge className="w-6 h-6" />,
    title: "Ethical AI",
    desc: "Trust is paramount. We build transparent, bias-aware systems that ensure your AI operates fairly and within regulatory compliance.",
  },
];

export const reviews = [
  {
    id: 1,
    profileImg: profileImg2,
    name: "Vikram S.",
    role: "Director of AI, OmniStream",
    desc: "“PRANA CONSULTANTS didn't just build a model; they built a prediction engine. Their forecasting algorithms reduced our inventory waste by 30%. The accuracy of their neural networks is simply world-class.”",
  },
  {
    id: 2,
    profileImg: profileImg1,
    name: "Sarah Jenkins",
    role: "Head of Data, MedTech Aligned",
    desc: "“The computer vision system they deployed for our quality control is faster and more accurate than human inspectors. They successfully automated a critical bottleneck in our manufacturing line.”",
  },
  {
    id: 3,
    profileImg: profileImg2,
    name: "Rahul M.",
    role: "Founder, QuickServe AI",
    desc: "“We needed a chatbot that could handle complex context, not just FAQs. Their NLP engine provides responses so natural that our customers often can't tell they are talking to an AI.”",
  },
  {
    id: 4,
    profileImg: profileImg1,
    name: "Elena R.",
    role: "VP of Analytics, TrendSetters",
    desc: "“Their data engineers turned our messy data swamp into a clean, actionable data lake. We are now training models on data we didn't even know we had. A complete transformation of our data culture.”",
  },
  {
    id: 5,
    profileImg: profileImg2,
    name: "David K.",
    role: "Lead Architect, PixelForge",
    desc: "“Integrating AI into our game logic seemed impossible until Prana Consultants stepped in. Their reinforcement learning agents have made our NPCs smarter and our gameplay infinitely more engaging.”",
  },
  {
    id: 6,
    profileImg: profileImg1,
    name: "Anita B.",
    role: "CEO, ChainTrust",
    desc: "“They helped us implement a decentralized identity system using blockchain privacy proofs. Their understanding of cryptographic security and smart contract logic is top-tier.”",
  },
  {
    id: 7,
    profileImg: profileImg2,
    name: "Michael T.",
    role: "COO, LogiFlow",
    desc: "“The route optimization algorithms they developed saved us 40% on fuel costs in the first quarter. It’s amazing to see advanced mathematics translate so directly into operational savings.”",
  },
  {
    id: 8,
    profileImg: profileImg1,
    name: "Priya D.",
    role: "CTO, SkyHigh Corp",
    desc: "“Our transition to an MLOps-driven workflow was seamless. They set up automated retraining pipelines that keep our models fresh without manual intervention. True engineering excellence.”",
  },
  {
    id: 9,
    profileImg: profileImg2,
    name: "Tom H.",
    role: "Director, Efficient Biz",
    desc: "“Their RPA bots didn't just automate clicks; they used OCR to read our invoices. We've automated 95% of our accounts payable process thanks to their intelligent automation solutions.”",
  },
  {
    id: 10,
    profileImg: profileImg1,
    name: "Jessica W.",
    role: "Founder, EduTech Pro",
    desc: "“The personalized learning algorithms they built allow our platform to adapt to each student's pace. It's the holy grail of education tech, and Prana Consultants made it a reality.”",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web-development/5ghomes.webp"),
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: require("./assets/images/web-development/cold-creekcap.webp"),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require("./assets/images/web-development/think-reality.webp"),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require("./assets/images/web-development/akash-mega-mart.webp"),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require("./assets/images/web-development/midwam.webp"),
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

export const webPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/web-development/5ghomes.webp"),
    title: "5g Homes",
    description:
      "A lightning-fast connectivity platform designed to revolutionize home internet access with next-gen 5G infrastructure.",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: require("./assets/images/web-development/cold-creekcap.webp"),
    title: "Cold Creekcap",
    description:
      "A sophisticated financial investment portal offering tailored capital solutions and real-time market insights for discerning investors.",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require("./assets/images/web-development/think-reality.webp"),
    title: "Think Reality",
    description:
      "An immersive real estate showcase platform leveraging digital innovation to transform how properties are viewed and experienced globally.",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require("./assets/images/web-development/akash-mega-mart.webp"),
    title: "Akash Mega Mart",
    description:
      "A comprehensive E-commerce ecosystem providing a seamless shopping experience with robust inventory management and user-centric design.",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require("./assets/images/web-development/midwam.webp"),
    title: "Midwam",
    description:
      "An award-winning immersive experience design interface that blends physical and digital worlds to create captivating interactive environments.",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app-development/akash_mega_mart-app.webp"),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require("./assets/images/app-development/feelit_app.webp"),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require("./assets/images/app-development/klikomics.webp"),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require("./assets/images/app-development/autosnap-app.webp"),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require("./assets/images/app-development/rentop.webp"),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const appPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/app-development/akash_mega_mart-app.webp"),
    title: "Akash Mega Mart Mobile App",
    description:
      "A feature-rich mobile commerce application delivering rapid grocery delivery and a personalized shopping experience right to your fingertips.",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require("./assets/images/app-development/feelit_app.webp"),
    title: "FeelIt Mobile App",
    description:
      "An emotional intelligence platform fostering connection and mental wellness through intuitive mood tracking and community support.",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require("./assets/images/app-development/klikomics.webp"),
    title: "Klikomics Mobile App",
    description:
      "A next-gen digital comics reader offering an immersive storytelling experience with interactive panels and a vast library of graphic novels.",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require("./assets/images/app-development/autosnap-app.webp"),
    title: "AutoSnap Mobile App",
    description:
      "A cutting-edge automotive utility app streamlining vehicle diagnostics and service execution for mechanics and car owners alike.",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require("./assets/images/app-development/rentop.webp"),
    title: "Rentop Bike and Car",
    description:
      "A seamless vehicle rental marketplace connecting travelers with trusted local hosts for reliable bike and car rentals.",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const aboutUsItems = [
  {
    title: "AI-First DNA",
    description:
      "Artificial Intelligence isn't an add-on; it's our core operating system. We consistently explore the bleeding edge of machine learning to bring you solutions that are years ahead of the market.",
    image: aboutone,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Client-Centric Intelligence",
    description:
      "Your data, your success. We don't just train models; we build partnerships. We immerse ourselves in your strategic goals to ensure our AI solutions drive real-world business value.",
    image: abouttwo,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Algorithmic Excellence",
    description:
      "We believe that 'good enough' is failure. Our commitment to mathematical precision is absolute, ensuring that every model we deploy is validated, robust, and optimized for performance.",
    image: aboutthree,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Ethical & Responsible AI",
    description:
      "Technology must be a force for good. We design transparent, fair systems that eliminate bias and respect user privacy, ensuring your AI initiatives are sustainable and compliant.",
    image: aboutfour,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "End-to-End MLOps",
    description:
      "We offer the complete lifecycle. From raw data ingestion to model deployment and continuous monitoring, we manage your entire AI pipeline so you can focus on innovation.",
    image: aboutfive,
    gradient: "from-primary/60 to-primary/80",
  },
];
