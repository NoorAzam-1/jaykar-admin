import { FiUpload, FiBook, FiVideo } from "react-icons/fi";

const content = [
  {
    title: "Pravachan by Acharya",
    type: "Video",
    category: "Shwetambar",
  },
  {
    title: "Jain Philosophy Basics",
    type: "Article",
    category: "Knowledge",
  },
];

export default function ContentLibrary() {
  return (
    <div>
      {/* 🔥 Header */}
      <div style={{ marginBottom: 20 }}>
        <h1>Content Library</h1>
        <p style={{ opacity: 0.7 }}>
          Manage religious content, pravachans & articles
        </p>
      </div>

      {/* 📤 Upload */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>Upload Content</h2>

        <button className="btn">
          <FiUpload /> Upload File
        </button>
      </div>

      {/* 📋 Content Table */}
      <div className="card">
        <h2>All Content</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            {content.map((c, i) => (
              <tr key={i}>
                <td>
                  {c.type === "Video" ? <FiVideo /> : <FiBook />}{" "}
                  {c.title}
                </td>

                <td>{c.type}</td>
                <td>{c.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🏷️ Categories */}
      <div className="card" style={{ marginTop: 20 }}>
        <h2>Categories</h2>

        <div className="settings-row">
          <span>Shwetambar</span>
        </div>

        <div className="settings-row">
          <span>Digambar</span>
        </div>

        <div className="settings-row">
          <span>Philosophy</span>
        </div>
      </div>
    </div>
  );
}