import React from 'react';
import { isExternal } from '../lib/utils';
import Link from 'next/link';

const renderLink = (pages, page) => {
  if (isExternal(pages[page])) {
    return (
      <a href={`${pages[page]}`}>
        {page}
      </a>
    )
  }
  return (
    <Link
      prefetch={true}
      href={`${pages[page]}`}
    >
      <a>{page}</a>
    </Link>
  )
}

export default renderLink;
