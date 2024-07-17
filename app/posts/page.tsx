import Link from "next/link";
import { getPosts } from "./data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default async function Home() {
  const posts = await getPosts();
  return (
<>
  <h1 className="text-xl font-bold mb-6">記事一覧</h1>
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
  {posts.map((post) => (
    <Card key={post.id} className="relative">
      <CardHeader>
        <CardTitle>
        <Link href={`/posts/${post.id}`}>{post.title.rendered}
        <span className="absolute inset-0"></span>
        </Link>
        </CardTitle>
        <p className="text-muted-foreground">{format(new Date(post.date), 'yyyy年MM月dd')}</p>
      </CardHeader>
      <CardContent>
        <p className={cn(post.jetpack_featured_media_url ? "line-clamp-3" : "line-clamp-6")} dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        {post.jetpack_featured_media_url && 
        <Image 
        alt='' src={post.jetpack_featured_media_url} 
        width={800}
        height={400}
        className="aspect-video object-cover object-center bg-muted rounded-md mt-6"></Image>}
      </CardContent>

    </Card>
  ))}
  </div>
  <div className="flex justify-between mt-6">
  <Button asChild size='icon' variant='outline'>
    <Link href="/">
      <ChevronLeft size={20}/>
      <span className="sr-only">戻る</span>
    </Link>
  </Button>
  <Button asChild size='icon' variant='outline'>
    <Link href="/">
      <ChevronRight size={20}/>
      <span className="sr-only">進む</span>
    </Link>
  </Button>
  </div>
</>
  );
}
