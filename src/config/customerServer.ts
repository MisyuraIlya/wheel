import apiProvider from '@/services/apiProvider';
const entrypoint = process.env.NEXT_PUBLIC_API_ENDPOINT!

const customerServer = {
  fetch: async <T>(path: string, options?: RequestInit, query?: object, token?: string, disableClient?: boolean): Promise<T> => {
    const headers = new Headers({
      'Content-Type': 'application/json',
      ...(options?.headers || {})
    });
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return await apiProvider.fetchClientData({
      entrypoint,
      path,
      query,
      options: {
        next: { revalidate: 2000 },
        ...options,
        headers
      },
      disableClient
    })
  }
}

export default customerServer;