import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { getLocale } from 'next-intl/server';
import queryString from 'query-string';
import { Protocol } from '@/config/ protocol';
import { redirect } from '@/i18n/navigation';
// import cookieStore from '@/provider/cookieStore';
import { getHost } from '@/config/config';

const getQuery = async (query: object) => {
//   const client = await cookieStore.getClient();
    const client = ''
  return { client: client, ...query };
};

const apiProvider = {
  fetchClientData: async <T = any>({
    entrypoint,
    path,
    query = {},
    options,
    disableClient,
  }: IFetchDataProps): Promise<T> => {
    let { protocol, domain } = await getHost();
    if ('development' === process.env.NODE_ENV) {
      protocol = Protocol.http;
      domain = 'localhost:3000';
    }
    const queryObj = disableClient ? query : await getQuery(query);
    const formatQuery = queryString.stringify(queryObj, {
      arrayFormat: 'bracket',
    });
    const url = `${protocol}${domain}${entrypoint}${path}?${formatQuery}`;
    const res = await fetch(url, options);
    const headersList = await headers();
    const activePath = headersList.get('x-invoke-path');
    if (!res.ok) {
      if (res.status === 401) {
        const locale = await getLocale();
        redirect({ href: `/signout?callbackUrl=${activePath}`, locale });
      }
      try {
        const data = await res.json().catch(() => {
          throw new Error(`Failed to fetch data - ${url}`);
        });
        if (data?.message) {
          throw data;
        }
      } catch (e) {
        const error = e as Error;
        if (error.message) {
          throw error;
        }
        throw new Error(`Failed to fetch data - ${url}`);
      }
    }
    if (res.status === 204) {
      return null as T;
    }

    return await res.json();
  },
};

export default apiProvider;
