import React from "react";
import ProductCardCollection, {
  type ProductCardItem,
} from "./ProductCardCollection";

const items: ProductCardItem[] = [
  {
    id: "generative-ai-intro",
    title: "Introduction to Generative AI",
    partner: "Google Cloud",
    partnerInitials: "G",
    partnerColor: "#4285F4",
    type: "Course",
    imageUrl:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/f6/29a18ac78c48dc9b4d3ad46c20c6f4/GCC-Coursera-thumbnail-PM-agile-PM-sue.png?auto=format%2C%20compress%2C%20enhance&dpr=2&w=320&h=180&fit=crop&q=50&crop=faces",
    href: "/learn/generative-ai",
    rating: 4.6,
    reviewCount: 12400,
    duration: "2 weeks",
    isNew: true,
  },
  {
    id: "prompt-engineering-vanderbilt",
    title: "Prompt Engineering Specialization",
    partner: "Vanderbilt University",
    partnerInitials: "V",
    partnerColor: "#866D4B",
    type: "Specialization",
    imageUrl:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=640&h=400&auto=format&fit=crop",
    href: "/learn/prompt-engineering",
    rating: 4.7,
    reviewCount: 18700,
    duration: "1 month",
    isNew: true,
  },
  {
    id: "chatgpt-advanced",
    title: "ChatGPT Advanced Data Analysis",
    partner: "Coursera",
    partnerInitials: "C",
    partnerColor: "#0056D2",
    type: "Guided Project",
    imageUrl:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/f6/29a18ac78c48dc9b4d3ad46c20c6f4/GCC-Coursera-thumbnail-PM-agile-PM-sue.png?auto=format%2C%20compress%2C%20enhance&dpr=2&w=320&h=180&fit=crop&q=50&crop=faces",
    href: "/learn/chatgpt-advanced",
    rating: 4.5,
    reviewCount: 9300,
    duration: "3 weeks",
    isNew: true,
  },
  {
    id: "ai-ethics",
    title: "AI Ethics and Governance",
    partner: "University of Helsinki",
    partnerInitials: "H",
    partnerColor: "#0072C6",
    type: "Course",
    imageUrl:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=640&h=400&auto=format&fit=crop",
    href: "/learn/ai-ethics",
    rating: 4.4,
    reviewCount: 7600,
    duration: "4 weeks",
    isNew: true,
  },
];

export default function NewReleases() {
  return (
    <ProductCardCollection
      title="New Releases"
      items={items}
      showMoreCount={6}
    />
  );
}
