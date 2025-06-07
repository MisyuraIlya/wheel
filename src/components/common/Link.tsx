'use client';

import { ComponentProps, forwardRef, useState } from 'react';
import { Link as NextLink } from '@/i18n/navigation';

function usePrefetchOnHover(prefetch?: boolean | 'onHover') {
  const [shouldPrefetch, setShouldPrefetch] = useState<false | undefined>(
    false
  );
  if (prefetch === 'onHover') {
    return {
      prefetch: shouldPrefetch,
      onMouseOver: () => setShouldPrefetch(undefined),
      onFocus: () => setShouldPrefetch(undefined),
    };
  }
  return { prefetch: prefetch ? undefined : prefetch };
}

const Link = forwardRef(
  (
    {
      prefetch = 'onHover',
      ...rest
    }: Omit<ComponentProps<typeof NextLink>, 'prefetch'> & {
      prefetch?: boolean | 'onHover';
    },
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    return <NextLink {...rest} {...usePrefetchOnHover(prefetch)} ref={ref} />;
  }
);

Link.displayName = 'Link';

export default Link;
