export interface NewsPost {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  author?: string;
  authorInitials?: string;
  readTime?: string;
  isFeatured?: boolean;
  body?: string;
}

const FEATURED: NewsPost = {
  id: "1",
  category: "Reports",
  title: "Unlocking Development Impact with Evidence-Based Research",
  description:
    "Evidence-based research is transforming how development initiatives are designed, implemented, and evaluated. This report explores how robust data and rigorous analysis can unlock greater impact across Tanzania and East Africa, drawing on Prime Expertise's work in research, data handling, and monitoring & evaluation.",
  image: "/about/1-1024x768.jpg",
  isFeatured: true,
};

const OTHER_FEATURED: NewsPost[] = [
  {
    id: "2",
    title: "Revolutionizing M&E through collaborative data systems",
    description:
      "How integrated data collection and management platforms are transforming monitoring and evaluation across development programs.",
    image: "/images/2-1-scaled.jpg",
    author: "Prime Expertise Team",
    authorInitials: "PE",
    readTime: "5 min read",
  },
  {
    id: "3",
    title: "Synergizing research and data for development outcomes",
    description:
      "Combining qualitative and quantitative research with robust data systems to drive measurable impact.",
    image: "/images/vi-agroforestry_1-scaled.webp",
    author: "Prime Expertise Team",
    authorInitials: "PE",
    readTime: "4 min read",
  },
  {
    id: "4",
    title: "Navigating development initiatives with robust M&E frameworks",
    description:
      "Best practices for designing monitoring and evaluation frameworks that support adaptive program management.",
    image: "/about/4-1024x768.jpg",
    author: "Prime Expertise Team",
    authorInitials: "PE",
    readTime: "6 min read",
  },
  {
    id: "5",
    title: "Sculpting impact – the art of evidence-based program design",
    description:
      "Using evidence from research and M&E to inform and refine development program design and delivery.",
    image: "/services/3-1024x884.jpg",
    author: "Prime Expertise Team",
    authorInitials: "PE",
    readTime: "5 min read",
  },
  {
    id: "6",
    title: "Transforming development platforms – a data and M&E odyssey",
    description:
      "Leveraging data analytics and evaluation findings to strengthen development initiatives across East Africa.",
    image: "/hero-fieldwork.png",
    author: "Prime Expertise Team",
    authorInitials: "PE",
    readTime: "6 min read",
  },
];

const RECENT: NewsPost[] = [
  {
    id: "7",
    title: "Mastering M&E Frameworks: A Practical Guide for Development Practitioners",
    description:
      "Learn how to design and implement robust monitoring and evaluation systems that drive program improvement and accountability.",
    image: "/images/14-scaled.jpg",
    author: "Prime Expertise Team",
    authorInitials: "PE",
    readTime: "5 min read",
  },
  {
    id: "8",
    title: "Crafting Seamless Data Collection: The Art of Intuitive Survey Design",
    description:
      "Best practices for developing data collection tools that yield high-quality, actionable insights for your development initiatives.",
    image: "/images/vi-agroforestry_2-scaled.webp",
    author: "Prime Expertise Team",
    authorInitials: "PE",
    readTime: "4 min read",
  },
  {
    id: "9",
    title: "Beyond Numbers: The Power of Qualitative Research in Development",
    description:
      "Explore how in-depth qualitative methods complement quantitative data to tell the full story of program impact.",
    image: "/services/2-1-scaled.jpg",
    author: "Prime Expertise Team",
    authorInitials: "PE",
    readTime: "6 min read",
  },
  {
    id: "10",
    title:
      "Supporting a collaborative programme of activity between the MECS Programme and the Ministry of Energy in Tanzania",
    description:
      "Prime Expertise is supporting a collaborative programme of activity between the MECS Programme and the Tanzania Ministry of Energy to further strengthen and scale modern, clean cooking solutions across Tanzania.",
    image: "/services/2-1-scaled.jpg",
    author: "Prime Expertise Team",
    authorInitials: "PE",
    readTime: "6 min read",
    body:
      "The MECS programme, an eight-year research and innovation initiative funded by the UKAid (FCDO), has supported various research and market-strengthening efforts in Tanzania, resulting in an increasingly favourable environment for modern, clean cooking solutions, including eCooking. Consequently, the Tanzania Ministry of Energy, FCDO, and MECS are delivering an ambitious programme of activities to further strengthen the market and scale up the availability and benefits of eCooking to the Tanzanian consumers.\n\nHaving worked with MECS from October 2022 to January 2023 on a ‘Learn to Cook’ study, which explored the changing dynamics of cooking skill acquisition in urban and peri-urban areas of Tanzania, we are excited to announce that we will be working with the MECS programme once again over the next 16 months. This time, we will be supporting a collaborative programme of activity between the MECS programme and the Tanzania Ministry of Energy.\n\nOur role, among others, will be centred on developing awareness of the programme’s activities and actively promoting stakeholder engagement across government ministries and other national bodies, as well as alongside partners and collaborates, working with them towards the delivery of high-quality activities. Consequently, we are looking forward to engaging with stakeholders to further scale up the benefits of eCooking across Tanzania.\n\nFor a brief overview of this activity, click here: https://bit.ly/3ztm3Ko. To learn more about the MECS programme, please visit: https://mecs.org.uk/.",
  },
];

export const FEATURED_POST = FEATURED;
export const OTHER_FEATURED_POSTS = OTHER_FEATURED;
export const RECENT_POSTS = RECENT;

export const ALL_NEWS_POSTS: NewsPost[] = [FEATURED, ...OTHER_FEATURED, ...RECENT];

export function getPostById(id: string): NewsPost | undefined {
  return ALL_NEWS_POSTS.find((p) => p.id === id);
}

export function getOtherPosts(currentId: string, limit = 3): NewsPost[] {
  return ALL_NEWS_POSTS.filter((p) => p.id !== currentId).slice(0, limit);
}
