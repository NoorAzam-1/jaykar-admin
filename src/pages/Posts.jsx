import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FiSearch,
  FiHeart,
  FiMessageCircle,
  FiShare2,
  FiCheck,
  FiX,
  FiTrash2,
  FiUser,
} from "react-icons/fi";

// 🔥 Dummy posts
const generatePosts = () =>
  Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    user: `User ${i + 1}`,
    sect: i % 2 === 0 ? "Shwetambar" : "Digambar",
    region: ["Delhi", "Mumbai", "Ahmedabad"][i % 3],
    content: "Jain Festival Celebration 🎉",
    likes: Math.floor(Math.random() * 2000),
    comments: Math.floor(Math.random() * 500),
    shares: Math.floor(Math.random() * 200),
    type: ["text", "image", "video"][i % 3],
    status: i % 2 === 0 ? "Pending" : "Approved",
  }));

const Posts = () => {
  const [posts, setPosts] = useState(generatePosts());
  const [search, setSearch] = useState("");
  const [sectFilter, setSectFilter] = useState("All");

  // 🔍 Filter
  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchSearch = p.content
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchSect = sectFilter === "All" ? true : p.sect === sectFilter;

      return matchSearch && matchSect;
    });
  }, [posts, search, sectFilter]);

  // 🔥 Actions
  const updateStatus = (id, status) => {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)));
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      {/* 🔥 HEADER */}
      <h1 className="text-2xl font-bold mb-4">
        Social Media / Posts Management
      </h1>

      {/* 🔍 SEARCH + FILTER */}
      <div className="flex justify-between mb-4">
        <div className="flex items-center bg-white border px-4 py-2 rounded-xl w-96 shadow-sm">
          <FiSearch />
          <input
            placeholder="Search posts..."
            className="ml-2 w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="border px-3 py-2 rounded-lg"
          value={sectFilter}
          onChange={(e) => setSectFilter(e.target.value)}
        >
          <option>All</option>
          <option>Shwetambar</option>
          <option>Digambar</option>
        </select>
      </div>

      {/* 📊 POSTS GRID */}
      <div className="grid grid-cols-3 gap-4">
        {filtered.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 rounded-xl shadow"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <FiUser />
                <span className="font-medium text-sm">{p.user}</span>
              </div>

              <span className="text-xs text-gray-400">{p.region}</span>
            </div>

            {/* Content */}
            <p className="text-sm mb-2">{p.content}</p>

            {/* Media Preview */}
            {p.type === "image" && (
              <div className="h-24 bg-gray-100 rounded mb-2 flex items-center justify-center text-gray-400">
                Image Preview
              </div>
            )}

            {p.type === "video" && (
              <div className="h-24 bg-black rounded mb-2 flex items-center justify-center text-white">
                ▶ Video
              </div>
            )}

            {/* Engagement */}
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span className="flex items-center gap-1">
                <FiHeart /> {p.likes}
              </span>
              <span className="flex items-center gap-1">
                <FiMessageCircle /> {p.comments}
              </span>
              <span className="flex items-center gap-1">
                <FiShare2 /> {p.shares}
              </span>
            </div>

            {/* Status */}
            <div className="mt-3 flex justify-between items-center">
              <span
                className={`px-2 py-1 text-xs rounded ${
                  p.status === "Approved"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {p.status}
              </span>

              {/* Actions */}
              <div className="flex gap-2">
                <FiCheck
                  className="cursor-pointer text-green-600"
                  onClick={() => updateStatus(p.id, "Approved")}
                />
                <FiX
                  className="cursor-pointer text-red-500"
                  onClick={() => updateStatus(p.id, "Rejected")}
                />
                <FiTrash2
                  className="cursor-pointer text-gray-500"
                  onClick={() => deletePost(p.id)}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
