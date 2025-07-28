import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">
        There is no free lunch in the world, thank you for browsing
      </h1>
    </main>
  );
}
