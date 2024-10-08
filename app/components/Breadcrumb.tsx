"use client";

import React, { useMemo } from 'react';
import Link from 'next/link';

interface BreadcrumbsProps {
  path: `/${string}`;
  lastItemLabel?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ path, lastItemLabel }) => {
  const breadcrumbItems = useMemo(() => {
    const pathParts = path.split('/').filter(Boolean);
    
    return pathParts.map((part, index) => {
      const href = `/${pathParts.slice(0, index + 1).join('/')}`;
      const isLast = index === pathParts.length - 1;

      let label = part;
      if (part === 'seo-services') {
        label = 'SEO Services';
      } else if (isLast && lastItemLabel) {
        label = lastItemLabel;
      }

      return {
        key: part,
        href,
        label,
        isLast
      };
    });
  }, [path, lastItemLabel]);

  return (
    <nav aria-label="Breadcrumb" className="text-sm" >
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-blue-600 hover:text-gray-700 text-sm">
            Home
          </Link>
        </li>
        {breadcrumbItems.map(({ key, href, label, isLast }) => (
          <li key={key}>
            <span className="text-gray-500 mx-2 text-sm">/</span>
            {isLast ? (
              <span 
                className="text-gray-900 text-sm"
                aria-current="page"
              >
                {label}
              </span>
            ) : (
              <Link href={href} className="text-blue-600 hover:text-gray-70 text-sm">
                {label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;