import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        // 过滤掉标题为"你好世界"或指定日期的文章
        const filtered = data.filter(
          (post) =>
            post.title !== '你好世界' &&
            post.date !== '2025-07-25T00:00:00.000Z'
        );
        setPosts(filtered);
      });
  }, []);

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">
        There is no free lunch in the world, thank you for browsing
      </h1>
      {posts.map((post) => (
        <Link key={post.slug} href={`/posts/${post.slug}`}>
          <a className="block mb-4 p-4 rounded-xl shadow hover:bg-gray-50">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.date}</p>
          </a>
        </Link>
      ))}
    </main>
  );
}
