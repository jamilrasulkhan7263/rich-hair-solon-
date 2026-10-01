export interface ServiceItem {
  id: string;
  title: string;
  category: 'hair' | 'color' | 'spa' | 'grooming' | 'bridal' | 'makeup' | 'academy';
  description: string;
  iconName: string;
  confirmWithOwner?: boolean;
  featured?: boolean;
  duration?: string;
  highlights?: string[];
}

export interface TransformationItem {
  id: string;
  title: string;
  category: 'colour' | 'haircuts' | 'styling' | 'grooming' | 'bridal' | 'academy';
  categoryLabel: string;
  tag: string;
  description: string;
  imageUrl: string;
  altText: string;
  verifyBadge?: boolean;
  enquiryMessage: string;
}

export const SALON_INFO = {
  name: "Rich Hair",
  subName: "Salon & Academy",
  fullName: "Rich Hair Salon & Academy",
  hindiName: "रिच हेयर सैलून & अकादमी",
  city: "Akola",
  phone: "076208 06624",
  phoneRaw: "07620806624",
  whatsappNumber: "917620806624",
  address: "IT Square, Gorakshan Road, Kirti Nagar, Akola, Maharashtra 444004",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rich+Hair+Salon+%26+Academy%2C+IT+Square%2C+Gorakshan+Road%2C+Kirti+Nagar%2C+Akola%2C+Maharashtra+444004",
  rating: 4.7,
  reviewsCount: 235,
  hours: "9:30 AM – 9:00 PM (Daily)",
  hoursNote: "[Confirm with owner] • Prior appointment advised for bridal & weekend peak slots",
  badges: [
    "Women-Owned",
    "LGBTQ+ Friendly",
    "4.7★ Google Rated",
    "Govt. Certified Academy"
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "haircuts-styling",
    title: "Signature Haircuts & Styling",
    category: "hair",
    description: "Precision haircuts customized for face shape, hair density, and lifestyle. Includes attentive consultation, wash, blow-dry finish, and personalized everyday care advice.",
    iconName: "content_cut",
    highlights: ["Custom face mapping", "Relaxing scalp wash", "Blowout styling"]
  },
  {
    id: "hair-colour",
    title: "Hair Colour & Highlights",
    category: "color",
    description: "Global rich tones, soft balayage, caramel streaks, root touch-ups, and artistic color transformations using nourishing formulas designed for hair vibrancy and health.",
    iconName: "palette",
    highlights: ["Balayage & ombre", "Zero-ammonia formulas", "Gloss toning finish"]
  },
  {
    id: "hair-spa",
    title: "Hair Spa & Treatments",
    category: "spa",
    description: "Deep hydration scalp therapies, intensive keratin nourishment, anti-frizz solutions, and revitalizing treatments that restore natural shine and strength to hair.",
    iconName: "spa",
    highlights: ["Deep scalp detox", "Keratin hydration", "Frizz control therapy"]
  },
  {
    id: "beard-grooming",
    title: "Beard Grooming",
    category: "grooming",
    description: "Clean razor shaping, beard trimming, mustache detail, and soothing skin conditioning rituals crafted for the modern gentleman's everyday sharp appearance.",
    iconName: "face",
    confirmWithOwner: true,
    highlights: ["Straight-razor precision", "Beard oil treatment", "Hot towel finish"]
  },
  {
    id: "bridal-styling",
    title: "Bridal & Party Styling",
    category: "bridal",
    description: "Royal Indian bridal hairdos, floral plaits, romantic loose waves, reception updos, and festive party styling crafted for family celebrations and memorable occasions.",
    iconName: "crown",
    confirmWithOwner: true,
    highlights: ["Floral integration", "Long-lasting lock", "Trial consultations"]
  },
  {
    id: "makeup-styling",
    title: "Makeup & Occasion Styling",
    category: "makeup",
    description: "Occasion and party makeup consultations coordinated seamlessly with your hairstyle for festive celebrations, photo shoots, and special personal events.",
    iconName: "auto_fix_high",
    confirmWithOwner: true,
    highlights: ["Skin tone matching", "Camera-ready finish", "Event coordination"]
  },
  {
    id: "academy-training",
    title: "Academy Training Enquiries",
    category: "academy",
    featured: true,
    description: "Learn salon arts, haircutting foundations, and modern hair color techniques through personalized mentorship at our Akola studio. Dedicated to aspiring stylists and beauty enthusiasts looking to build real-world hair craft.",
    iconName: "school",
    confirmWithOwner: true,
    highlights: ["Hands-on practice", "Studio environment", "Certificate curriculum"]
  }
];

export const TRANSFORMATIONS_LIST: TransformationItem[] = [
  {
    id: "trans-1",
    title: "Hair Colour & Glow",
    category: "colour",
    categoryLabel: "Hair Colour",
    tag: "Rich Shade",
    description: "Seamless dimension, gloss toning, and tailored moisture seal for lasting vibrancy.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo7CMVqwmnZj97weWkQGNTzWkQR1BkjExqzadAA1Ee5LWJEj1aVZtS1mBktiUZGsVtJiluMK51FISk16QztUoTCBkgpJ-JZb_QjfSBu4Ry2obdm8XoDomRNAYtCZyxhld9MiPU-jWcJS1pMUvt4oIDQBcsauJ7YLqIAfFq2x7BI-bGhl50WO3zJAG1QR6rYf-C2ukf4Sdy8LH8Uglc-UO86ptyhE4Azvrq6wQBVRyxn3dGi4NNQxVdHw",
    altText: "Editorial close-up of glossy honey and mocha balayage hair flowing softly over shoulders in a luxury salon setting.",
    enquiryMessage: "Hello Rich Hair Salon, I am interested in the Hair Colour & Glow look from your Transformations gallery."
  },
  {
    id: "trans-2",
    title: "Textured Layers & Fresh Cut",
    category: "haircuts",
    categoryLabel: "Haircuts",
    tag: "Precision",
    description: "Feather-light movement sculpted specifically to flatter bone structure and natural flow.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYGlqU1RJRC_lDgAtJ9VIWXO8rj9iJG3nPFIEcfBSOgUlEFzeejQ92XuPQ9yqsy_jqVaaoShGJqaxLSII90m6LjxGHnm0P377nt7W598kEHE6ouT8ikBlwY3reF6ikkd38wNthoQnFb1MbkWTAiiVEKnap28CpscptAETeF1vaFTVwQKu_fchfg02japUWTtxSV14bNkrhBfmzn6EK68FamY45ArZW5Io9c5HxRuPAT2flrZ_eIvMYYg",
    altText: "Modern precision haircut showcasing face-framing butterfly layers with airy movement and healthy volume.",
    enquiryMessage: "Hello Rich Hair Salon, I am interested in the Textured Layers & Fresh Cut look from your Transformations gallery."
  },
  {
    id: "trans-3",
    title: "Modern Salon Style",
    category: "styling",
    categoryLabel: "Styling",
    tag: "Blowout",
    description: "Sculpted blowout styling for special evenings, events, or confident everyday polish.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnbYYzKGPU8iSj89uob9wCS_-8IA0d2HAJSt_E48p22TVI3mdBOzTYP85WP-v70c4FXHQVCFFbRgZBtS4p9wHlkV09nAFKK80aDGSdXxsQ53lWMh88bwOTCB8pL-OVzfkag1LK9_X4I2HVehbA-xUGiFvEmHVe_4FNuyyrzzzzqn6KxcVn9vCdIG3rwe5gJw3Ljflbe78wIOw38FVnkhVwgwd4wrJvGdk2mBerKEzBRHObn25X23PTog",
    altText: "Flawless salon blowout with graceful bouncy Hollywood waves, polished finish, gleaming highlights.",
    enquiryMessage: "Hello Rich Hair Salon, I am interested in the Modern Salon Style look from your Transformations gallery."
  },
  {
    id: "trans-4",
    title: "Premium Hair Finish",
    category: "grooming",
    categoryLabel: "Grooming",
    tag: "Unisex Cut",
    description: "Detailed barbering craftsmanship, clean line-ups, and weightless structural texture.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXyIlrgbfZADhINUr4uw0OpJeMSeCGFeJxnEwhLz0_8kTiVAtIdn5Tibq2UdUOFw8WoacnE5OMsxwdDkGaxM4CMI90Ylq8oC5wVRp4y_DLbqfH9hOOn7mBFta8a2J7tZVAI24ao2FBGCJnoGbe-Yl05FsX9VESuiP5SEE2vxVgLm23J9M9v4xdltkQA_A61292gtsYX2iGBhdlNnt9yNi7m-DtQg7t2fM9ZcMMg7UlrnRJDyLQfsoi_A",
    altText: "Editorial men's and unisex styling profile showing neat taper fade, crisp defined hairline, and textured finish.",
    enquiryMessage: "Hello Rich Hair Salon, I am interested in the Premium Hair Finish grooming look from your Transformations gallery."
  },
  {
    id: "trans-5",
    title: "Bridal Style Inspiration",
    category: "bridal",
    categoryLabel: "Bridal",
    tag: "Festive",
    verifyBadge: true,
    description: "Intricate up-dos, floral integration, and long-wear styling designed for celebrations.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN59y6bd3-NRfkava87S5QszfWbTFzMeQakkIyoMUYzi5A0GThTdpF3ukrUns9azG-CVhAAgKujESWuPC5oG6VtlRORtcAjjBcDSPyqqdOD1kYlh2H9Ne3wg3_TQKWgQ9DlwP0mA-aYyAUtVPPNiJEUKxiaLm6BAotAgO4AV5TWk-NR3xo6-x8Mcx_EJcFgG94sUSTyQhuJHjLc73w4QpppWtQFQaT-McAZl_uKRTI81F4L8W23TSWiA",
    altText: "Intricate Indian bridal hairstyle with ornate floral gajra arrangement, gentle braided texture, and elegant hair jewelry.",
    enquiryMessage: "Hello Rich Hair Salon, I want to consult about Bridal Styling options and rates."
  },
  {
    id: "trans-6",
    title: "Student Work Showcase",
    category: "academy",
    categoryLabel: "Academy",
    tag: "Training",
    verifyBadge: true,
    description: "Practicing professional techniques, sectioning mastery, and salon-ready finishing skills.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3AZ7AVORCAgEzvyA8ogV3NBf6nciO2gbZ_sVUMsf1CxAS9jDECzPzKLnJLfWpu0VLyZhJrSjAYtP17-R6uSkK_f7TTrdeKFeK0tVWl6lYncySeV94abRKtfyCfifBY7QqwT6gwl278s4OcBoJGIYWF3k7LcjqNq7VQhATJpRSv9-lOsvnK2w87XMnK_V5R092GF4VBz00C_9w0exEVN5rZTrV9RC1ZQzqIaSId8Cpjxvcs0TfdaiIvw",
    altText: "Hands-on hair academy session in Akola showing student and mentor refining sectioning techniques and precision blowout.",
    enquiryMessage: "Hello Rich Hair Salon & Academy, I want to know more about the Academy courses and student portfolio details."
  }
];

export const REVIEW_THEMES = [
  {
    icon: "sentiment_satisfied",
    title: "Friendly Experience",
    description: "Attentive consultation, genuine listening, gentle handling, and comfortable, pressure-free salon hospitality."
  },
  {
    icon: "content_cut",
    title: "Modern Styling",
    description: "Precision haircuts, bespoke dimensional hair colouring, softening treatments, and fresh occasion styling."
  },
  {
    icon: "verified",
    title: "Professional Service",
    description: "Meticulous hygiene protocols, vetted hair-safe formulation, skilled academy-grade technique, and upfront advice."
  },
  {
    icon: "diversity_1",
    title: "Welcoming Space",
    description: "Proudly women-owned, fully unisex, and an authentically safe LGBTQ+ friendly environment for every guest."
  }
];

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
