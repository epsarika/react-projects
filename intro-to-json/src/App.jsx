import { useEffect, useState } from "react"
import Post from "./components/Post";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const loadPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  };
  useEffect(() => {
    loadPosts();
  }, ([]));

  if (loading) {
    return (
      <h2 className="text-center text-xl font-semibold">Loading...</h2>
    );
  }
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) =>
          <Post key={post.id} title={post.title} body={post.body} />
        )}
      </div>
    </div>
  );
}