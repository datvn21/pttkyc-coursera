import React from 'react';

export type ProductCardItem = {
  id: string;
  title: string;
  partner: string;
  partnerInitials?: string;
  partnerColor?: string;
  type: 'Guided Project' | 'Course' | 'Specialization' | 'Professional Certificate' | 'Project';
  imageUrl: string;
  href: string;
  isNew?: boolean;
  rating?: number;
  reviewCount?: number;
  duration?: string;
};

type ProductCardCollectionProps = {
  title: string;
  items: ProductCardItem[];
  showMoreLabel?: string;
  showMoreCount?: number;
};

export default function ProductCardCollection({
  title,
  items,
  showMoreLabel = 'Show more',
  showMoreCount = 8,
}: ProductCardCollectionProps) {
  return (
    <section
      className="bg-white py-12 border-t border-gray-200"
      aria-label={`${title} Collection`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="group flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full"
                aria-label={`${item.title}, offered by ${item.partner}, ${item.type.toUpperCase()}`}
              >
                <div className="relative aspect-16/10 bg-gray-100 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.isNew && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-gray-900 text-white text-[11px] font-bold uppercase tracking-wider rounded shadow-sm">
                        New
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2 text-xs text-gray-600">
                    <div
                      className="w-5 h-5 rounded-sm text-white flex items-center justify-center font-bold text-[9px] shrink-0"
                      style={{ backgroundColor: item.partnerColor || '#0056D2' }}
                    >
                      {item.partnerInitials || item.partner.charAt(0)}
                    </div>
                    <span className="truncate">{item.partner}</span>
                  </div>

                  <h3 className="font-bold text-base text-gray-900 leading-snug mb-3 line-clamp-2 group-hover:text-coursera-blue transition-colors">
                    {item.title}
                  </h3>

                  {item.rating != null && (
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="flex items-center gap-0.5 text-yellow-500">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-3.5 h-3.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.285-3.957z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs font-medium text-gray-900">
                        {item.rating.toFixed(1)}
                      </span>
                      {item.reviewCount != null && (
                        <span className="text-xs text-gray-500">
                          ({item.reviewCount.toLocaleString()})
                        </span>
                      )}
                    </div>
                  )}

                  <p className="text-xs text-gray-600 mb-4 line-clamp-2">{item.duration}</p>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs text-gray-600">{item.partner}</span>
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:bg-gray-50 transition"
                      aria-label={`Learn more about ${item.title}`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="border border-coursera-blue text-coursera-blue font-medium px-5 py-2.5 rounded-xl hover:bg-blue-50 transition text-sm bg-white"
            aria-label={`Show ${showMoreCount} more, ${title}`}
          >
            {showMoreLabel === 'Show more'
              ? `Show ${showMoreCount} more`
              : showMoreLabel}
          </button>
        </div>
      </div>
    </section>
  );
}