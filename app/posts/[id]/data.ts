import 'server-only';
import { POST_ENDPOINT_URL } from '@/lib/wp';
import { Post } from '@/types/post';

export const getPost = async (id: string) => {
  const res = await fetch(POST_ENDPOINT_URL + '/' + id, { cache: 'no-store' });
  return (await res.json()) as Post;
};