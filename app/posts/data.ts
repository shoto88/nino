import { POST_ENDPOINT_URL } from '@/lib/wp';
import { Post } from '@/types/post';
import 'server-only';

export const getPosts = async () => {
    const res = await fetch(POST_ENDPOINT_URL);
    return await res.json() as Post[];
}