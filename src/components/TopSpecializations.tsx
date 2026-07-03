import React from "react";
import ProductCardCollection, {
  type ProductCardItem,
} from "./ProductCardCollection";

const items: ProductCardItem[] = [
  {
    id: "ibm-data-science",
    title: "IBM Data Science Professional Certificate",
    partner: "IBM",
    partnerInitials: "IBM",
    partnerColor: "#1F70C1",
    type: "Professional Certificate",
    imageUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=640&h=400&auto=format&fit=crop",
    href: "/learn/ibm-data-science",
    rating: 4.8,
    reviewCount: 215000,
    duration: "6 months",
  },
  {
    id: "ui-ux-design-calarts",
    title: "UI/UX Design Specialization",
    partner: "CalArts",
    partnerInitials: "C",
    partnerColor: "#FF6B00",
    type: "Specialization",
    imageUrl:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/46/ef33d858af408d86e966298a1f480b/Teaching_AI_Fluency_promo.png?auto=format%2C%20compress%2C%20enhance&dpr=2&w=320&h=204&fit=crop&q=50",
    href: "/learn/ui-ux-design",
    rating: 4.7,
    reviewCount: 142000,
    duration: "4 months",
  },
  {
    id: "meta-front-end",
    title: "Meta Front-End Developer Certificate",
    partner: "Meta",
    partnerInitials: "M",
    partnerColor: "#1877F2",
    type: "Professional Certificate",
    imageUrl:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=640&h=400&auto=format&fit=crop",
    href: "/learn/meta-front-end",
    rating: 4.8,
    reviewCount: 178000,
    duration: "5 months",
  },
  {
    id: "aws-cloud-solutions",
    title: "AWS Cloud Solutions Architect",
    partner: "Amazon",
    partnerInitials: "A",
    partnerColor: "#FF9900",
    type: "Specialization",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=640&h=400&auto=format&fit=crop",
    href: "/learn/aws-cloud",
    rating: 4.9,
    reviewCount: 320000,
    duration: "6 months",
    isNew: true,
  },
];

export default function TopSpecializations() {
  return (
    <ProductCardCollection
      title="Top Specializations"
      items={items}
      showMoreCount={10}
    />
  );
}
