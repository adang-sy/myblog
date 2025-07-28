import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">There is no free lunch in the world, thank you for browsing</h1>
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
