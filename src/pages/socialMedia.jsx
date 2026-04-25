import {
  FiCheckCircle,
  FiXCircle,
  FiTrash2,
  FiUserCheck,
} from "react-icons/fi";

const posts = [
  {
    user: "Ravi Jain",
    type: "Image",
    sect: "Shwetambar",
    likes: 120,
    comments: 30,
    shares: 10,
    status: "Pending",
  },
  {
    user: "Neha Mehta",
    type: "Video",
    sect: "Digambar",
    likes: 300,
    comments: 50,
    shares: 20,
    status: "Approved",
  },
];

export default function socialMedia() {
  return (
    <div>
      {/* 🔥 Header */}
      <div style={{ marginBottom: 20 }}>
        <h1>Posts Management</h1>
        <p style={{ opacity: 0.7 }}>
          Moderate posts, manage creators & track engagement
        </p>
      </div>

      {/* 🔍 Filters */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <select className="btn">
            <option>All Sect</option>
            <option>Shwetambar</option>
            <option>Digambar</option>
          </select>

          <select className="btn">
            <option>All Regions</option>
            <option>Mumbai</option>
            <option>Delhi</option>
          </select>

          <select className="btn">
            <option>Time Period</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
      </div>

      {/* 📋 Posts Table */}
      <div className="card">
        <h2>All Posts</h2>

        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Type</th>
              <th>Sect</th>
              <th>Engagement</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post, i) => (
              <tr key={i}>
                <td>{post.user}</td>
                <td>{post.type}</td>

                <td>
                  <span className="role-badge">{post.sect}</span>
                </td>

                <td>
                  ❤️ {post.likes} | 💬 {post.comments} | 🔄 {post.shares}
                </td>

                <td>
                  <span
                    className={
                      post.status === "Approved"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {post.status}
                  </span>
                </td>

                <td>
                  <button className="icon-btn">
                    <FiCheckCircle />
                  </button>

                  <button className="icon-btn danger">
                    <FiXCircle />
                  </button>

                  <button className="icon-btn danger">
                    <FiTrash2 />
                  </button>

                  <button className="icon-btn">
                    <FiUserCheck />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}