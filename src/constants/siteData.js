export const siteImages = {
  hero: "/images/dropati_devi_wide.jpg",
  story: "/images/moments/moment-6-grace.jpg",
  wellbeing:
    "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=85",
  skills:
    "https://images.unsplash.com/photo-1709109566523-c2f76375dc0b?auto=format&fit=crop&w=800&q=85",
  education:
    "https://images.unsplash.com/photo-1680759291020-79a92d38cdfd?auto=format&fit=crop&w=800&q=85",
  business:
    "https://images.unsplash.com/photo-1551731409-43eb3e517a1a?auto=format&fit=crop&w=800&q=85",
  community:
    "https://images.unsplash.com/photo-1533128361669-69c065857a13?auto=format&fit=crop&w=800&q=85",
};

export const navLinks = [
  { label: "Her story", href: "#story", testId: "nav-story-link" },
  { label: "Cherished moments", href: "#moments", testId: "nav-moments-link" },
  { label: "Our purpose", href: "#purpose", testId: "nav-purpose-link" },
  { label: "Programmes", href: "#programmes", testId: "nav-programmes-link" },
  { label: "Our values", href: "#values", testId: "nav-values-link" },
];

export const momentsList = [
  {
    id: 1,
    number: "01",
    title: "A Home Filled with Joy",
    category: "Celebration",
    categoryLabel: "Celebration & Family",
    tag: "Family Togetherness",
    image: "/images/moments/moment-1-celebration.jpg",
    originalFile: "WhatsApp Image 2026-10-12 at 1.21.26 PM (1).jpeg",
    alt: "Dropati Devi surrounded by joyful family singing and dancing",
    description:
      "Dropati Devi smiling brightly at the center of her family, surrounded by loved ones celebrating with hands raised in joyous rhythm, laughter, and song.",
    quote: "Her presence was the light that brought the whole family together in laughter.",
    orientation: "landscape",
    objectPosition: "object-center",
  },
  {
    id: 2,
    number: "02",
    title: "Quiet Strength & Wisdom",
    category: "Wisdom",
    categoryLabel: "Wisdom & Grace",
    tag: "Dignity & Reflection",
    image: "/images/moments/moment-2-wisdom.jpg",
    originalFile: "WhatsApp Image 2026-10-12 at 1.21.26 PM (2).jpeg",
    alt: "Dropati Devi seated peacefully in thoughtful contemplation",
    description:
      "A peaceful, contemplative moment capturing her calm dignity, profound patience, and the silent strength that weathered life's hardest storms.",
    quote: "Strength is not always loud. Often, it is quiet courage and enduring grace.",
    orientation: "portrait",
    objectPosition: "object-top",
  },
  {
    id: 3,
    number: "03",
    title: "Ageless Joy & Playful Spirit",
    category: "Joy",
    categoryLabel: "Joyful Spirit",
    tag: "Humour & Warmth",
    image: "/images/moments/moment-3-playful.jpg",
    originalFile: "WhatsApp Image 2026-10-12 at 1.21.26 PM (3).jpeg",
    alt: "Dropati Devi in a playful, affectionate selfie with a cat filter",
    description:
      "A spontaneous, heartwarming selfie showing her youthful warmth, delightful humor, and the loving bond she shared with the younger generation.",
    quote: "A youthful heart and a smile that could brighten anyone's hardest day.",
    orientation: "portrait",
    objectPosition: "object-top",
  },
  {
    id: 4,
    number: "04",
    title: "Sweet Milestones & Blessings",
    category: "Celebration",
    categoryLabel: "Celebration & Family",
    tag: "Birthday Memories",
    image: "/images/moments/moment-4-sweet-moments.jpg",
    originalFile: "WhatsApp Image 2026-10-12 at 1.21.26 PM (4).jpeg",
    alt: "Dropati Devi enjoying her birthday cake with family",
    description:
      "Cherishing birthday cake with family, celebrating life's precious milestones surrounded by the deep affection of her children and grandchildren.",
    quote: "Every milestone was a celebration of love, resilience, and gratitude.",
    orientation: "portrait",
    objectPosition: "object-center",
  },
  {
    id: 5,
    number: "05",
    title: "Together in Rhythm & Harmony",
    category: "Celebration",
    categoryLabel: "Celebration & Family",
    tag: "Songs & Togetherness",
    image: "/images/moments/moment-5-harmony.jpg",
    originalFile: "WhatsApp Image 2026-10-12 at 1.21.26 PM (5).jpeg",
    alt: "Dropati Devi clapping in rhythm surrounded by singing family",
    description:
      "Clapping hands and singing along in joyous unison, surrounded by loved ones celebrating traditions, unity, and shared happiness.",
    quote: "A home resounding with laughter, music, and eternal blessings.",
    orientation: "landscape",
    objectPosition: "object-center",
  },
  {
    id: 6,
    number: "06",
    title: "Grace and Matriarchal Dignity",
    category: "Wisdom",
    categoryLabel: "Wisdom & Grace",
    tag: "Pillar of Love",
    image: "/images/moments/moment-6-grace.jpg",
    originalFile: "WhatsApp Image 2026-10-12 at 1.21.26 PM.jpeg",
    alt: "Dropati Devi seated gracefully at her celebration table",
    description:
      "Dropati Devi seated with quiet poise at the center of the family gathering — the steadfast foundation whose hard work nurtured generations.",
    quote: "The matriarch whose unconditional love built a home of warmth.",
    orientation: "portrait",
    objectPosition: "object-center",
  },
];

export const purposePillars = [
  {
    number: "01",
    title: "Learn",
    text: "Make education and skills opportunities more accessible.",
    iconType: "leaf",
  },
  {
    number: "02",
    title: "Earn",
    text: "Encourage financial independence and entrepreneurship.",
    iconType: "sparkles",
  },
  {
    number: "03",
    title: "Thrive",
    text: "Promote confidence, personal development and wellbeing.",
    iconType: "heart",
  },
  {
    number: "04",
    title: "Belong",
    text: "Build a compassionate community where people feel supported and respected.",
    iconType: "quote",
  },
];

export const programmesList = [
  {
    number: "01",
    title: "Skills & Livelihoods",
    shortTitle: "Skills",
    buttonLabel: "Explore Skills",
    text: "Help women explore practical skills and pathways towards employment and income generation.",
    image: siteImages.skills,
  },
  {
    number: "02",
    title: "Girls' Education",
    shortTitle: "Education",
    buttonLabel: "Explore Education",
    text: "Encourage learning, educational guidance and access to relevant opportunities.",
    image: siteImages.education,
  },
  {
    number: "03",
    title: "Women in Business",
    shortTitle: "Entrepreneurship",
    buttonLabel: "Explore Entrepreneurship",
    text: "Help women explore entrepreneurship, digital skills and business development.",
    image: siteImages.business,
  },
  {
    number: "04",
    title: "Wellbeing & Mentoring",
    shortTitle: "Wellbeing",
    buttonLabel: "Explore Wellbeing",
    text: "Encourage confidence, personal growth and connections to appropriate support.",
    image: siteImages.wellbeing,
  },
  {
    number: "05",
    title: "Community Support",
    shortTitle: "Community Support",
    buttonLabel: "Explore Community Support",
    text: "Help connect women and families with relevant resources and support networks.",
    image: siteImages.community,
  },
];

export const valuesList = [
  {
    title: "Courage",
    text: "Facing difficult circumstances without giving up.",
  },
  {
    title: "Compassion",
    text: "Treating every person with kindness and respect.",
  },
  {
    title: "Independence",
    text: "Encouraging women to develop their abilities and make their own choices.",
  },
  {
    title: "Service",
    text: "Helping others with sincerity and without judgement.",
  },
  {
    title: "Family and Community",
    text: "Recognising the strength that comes from supporting one another.",
  },
  {
    title: "Integrity",
    text: "Acting responsibly, communicating honestly and using resources transparently.",
  },
];

export const involvedOptions = [
  {
    number: "01",
    title: "Volunteer With Us",
    testId: "volunteer-button",
  },
  {
    number: "02",
    title: "Explore Partnerships",
    testId: "partnership-button",
  },
  {
    number: "03",
    title: "Support Our Mission",
    testId: "support-button",
  },
];

export const contactDetails = {
  email: "hello@dropatidevifoundation.org",
  phone: "+91 98765 43210",
  copyright: "© 2026 Dropati Devi Foundation",
  footerTagline: "A Legacy of Strength.\nA Future of Possibilities.",
  subTagline:
    "Inspired by the life of Dropati Jethani, we aspire to empower women and girls through education, skills, livelihoods and compassionate community support.",
};
