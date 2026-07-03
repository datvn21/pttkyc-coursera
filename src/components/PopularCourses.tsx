import React from "react";
import ProductCardCollection, {
  type ProductCardItem,
} from "./ProductCardCollection";

const items: ProductCardItem[] = [
  {
    id: "python-for-everybody",
    title: "Python for Everybody Specialization",
    partner: "University of Michigan",
    partnerInitials: "M",
    partnerColor: "#FFCB05",
    type: "Specialization",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3mm1ijwFrkELTmsmOgfb3uGDb02LaM4lVWLy-x3iSQ&s=10",
    href: "/learn/python-for-everybody",
    rating: 4.8,
    reviewCount: 289000,
    duration: "6 months",
    isNew: true,
  },
  {
    id: "machine-learning-stanford",
    title: "Machine Learning",
    partner: "Stanford University",
    partnerInitials: "S",
    partnerColor: "#8C1515",
    type: "Course",
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=640&h=400&auto=format&fit=crop",
    href: "/learn/machine-learning",
    rating: 4.9,
    reviewCount: 168000,
    duration: "4 weeks",
    isNew: false,
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Certificate",
    partner: "Google",
    partnerInitials: "G",
    partnerColor: "#4285F4",
    type: "Professional Certificate",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=640&h=400&auto=format&fit=crop",
    href: "/learn/google-data-analytics",
    rating: 4.7,
    reviewCount: 420000,
    duration: "6 months",
    isNew: false,
  },
  {
    id: "deep-learning-ai",
    title: "Deep Learning Specialization",
    partner: "DeepLearning.AI",
    partnerInitials: "D",
    partnerColor: "#0B0B0B",
    type: "Specialization",
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=640&h=400&auto=format&fit=crop",
    href: "/learn/deep-learning",
    rating: 4.8,
    reviewCount: 134000,
    duration: "3 months",
    isNew: true,
  },
];

export default function PopularCourses() {
  return (
    <ProductCardCollection
      title="Popular Courses"
      items={items}
      showMoreCount={12}
    />
  );
}
