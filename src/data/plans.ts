import type { Plan } from "@/components/PricingCard";

export const plans: Plan[] = [
  {
    name: "Basic Website",
    tagline: "Launch a clean, professional presence.",
    price: "₹39,999",
    features: [
      "Domain Setup",
      "Hosting Setup",
      "Responsive UI",
      "Contact Form",
      "Mobile Friendly Layout",
    ],
  },
  {
    name: "Standard 2D Website",
    tagline: "Grow with admin tools and analytics.",
    price: "₹74,999",
    popular: true,
    features: [
      "Everything in Basic",
      "Admin Panel",
      "Inventory System",
      "Analytics Dashboard",
      "Maintenance Included",
      "Better Custom Layout",
    ],
  },
  {
    name: "Ultra Luxury UI/UX",
    tagline: "An award-winning, conversion-focused build.",
    price: "₹99,999",
    features: [
      "Everything in Standard",
      "Ultra Luxury UI/UX",
      "Premium Animations",
      "High-end Visual Design",
      "AI-ready Sections",
      "Conversion-focused Layout",
    ],
  },
];
