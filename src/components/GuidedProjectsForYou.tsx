import React from 'react';
import ProductCardCollection, {
  type ProductCardItem,
} from './ProductCardCollection';

const items: ProductCardItem[] = [
  {
    id: 'introduction-microsoft-excel',
    title: 'Getting Started with Microsoft Excel',
    partner: 'Coursera',
    partnerInitials: 'C',
    partnerColor: '#0056D2',
    type: 'Guided Project',
    imageUrl:
      'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/cb/6c52dc75e84cc582692c273678dea9/c1_Coursera-Originals_-Data-Science-Essentials-Toolkit_CertCard.png?auto=format%2C%20compress%2C%20enhance&dpr=1&w=640&h=400&fit=crop&q=50',
    href: '/projects/introduction-microsoft-excel',
  },
  {
    id: 'business-analysis-process-management',
    title: 'Business Analysis & Process Management',
    partner: 'Coursera',
    partnerInitials: 'C',
    partnerColor: '#0056D2',
    type: 'Guided Project',
    imageUrl:
      'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/59/630408b17e41429a019ada61f22bc8/Courses-Project-images-06.png?auto=format%2C%20compress%2C%20enhance&dpr=1&w=640&h=400&fit=crop&q=50',
    href: '/projects/business-analysis-process-management',
  },
  {
    id: 'business-barcodes-spreadsheet-automation',
    title: 'Business Barcodes Using Spreadsheet Automation',
    partner: 'EDUCBA',
    partnerInitials: 'E',
    partnerColor: '#E11D48',
    type: 'Course',
    imageUrl:
      'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/e0/326ce9e71e4c14a7c6573384e30904/654.1.png?auto=format%2C%20compress%2C%20enhance&dpr=1&w=640&h=400&fit=crop&q=50',
    href: '/learn/business-barcodes-spreadsheet-automation',
    isNew: true,
  },
  {
    id: 'introduction-data-analysis-microsoft-excel',
    title: 'Introduction to Data Analysis using Microsoft Excel',
    partner: 'Coursera',
    partnerInitials: 'C',
    partnerColor: '#0056D2',
    type: 'Guided Project',
    imageUrl:
      'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/4b/969ad9a2cb4fc19857e54006bf26b5/c5_Coursera-Originals_-Data-Science-Essentials-Toolkit_CertCard.png?auto=format%2C%20compress%2C%20enhance&dpr=1&w=640&h=400&fit=crop&q=50',
    href: '/projects/introduction-data-analysis-microsoft-excel',
  },
];

export default function GuidedProjectsForYou() {
  return (
    <ProductCardCollection
      title="Guided Projects for You"
      items={items}
      showMoreCount={8}
    />
  );
}