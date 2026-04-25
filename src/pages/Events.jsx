import {
  FiPlus,
  FiEdit,
  FiTrash2,
  FiCalendar,
  FiUsers,
  FiStar,
  FiCheckCircle,
} from "react-icons/fi";

const events = [
  {
    name: "Mahaveer Janmotsav",
    date: "10 Apr 2026",
    venue: "Shree Mahavir Temple",
    organizer: "Jain Trust",
    rsvp: 120,
    status: "Featured",
  },
  {
    name: "Paryushan Mahaparva",
    date: "20 Aug 2026",
    venue: "Parasnath Tirth",
    organizer: "Digambar Group",
    rsvp: 80,
    status: "Upcoming",
  },
];

export default function Events() {
  return (
    <div>
      {/* 🔥 Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <div>
          <h1>Events & Mahotsav</h1>
          <p style={{ opacity: 0.7 }}>
            Manage religious events, schedules & participation
          </p>
        </div>

        <button className="btn add-btn">
          <FiPlus /> Add Event
        </button>
      </div>

      {/* 📊 Stats */}
      <div className="dashboard-grid" style={{ marginBottom: 20 }}>
        <div className="card">
          <h2>Total Events</h2>
          <h1>45</h1>
        </div>

        <div className="card">
          <h2>Upcoming</h2>
          <h1>12</h1>
        </div>

        <div className="card">
          <h2>Featured</h2>
          <h1>6</h1>
        </div>

        <div className="card">
          <h2>Total RSVPs</h2>
          <h1>2.5K</h1>
        </div>
      </div>

      {/* 📋 Events Table */}
      <div className="card">
        <h2>Event Listings</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Venue</th>
              <th>Organizer</th>
              <th>RSVP</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {events.map((event, i) => (
              <tr key={i}>
                <td>
                  <FiCalendar style={{ marginRight: 6 }} />
                  {event.name}
                </td>

                <td>{event.date}</td>
                <td>{event.venue}</td>
                <td>{event.organizer}</td>

                <td>
                  <FiUsers style={{ marginRight: 6 }} />
                  {event.rsvp}
                </td>

                <td>
                  <span className="role-badge">
                    {event.status}
                  </span>
                </td>

                <td>
                  <button className="icon-btn">
                    <FiEdit />
                  </button>

                  <button className="icon-btn danger">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📅 Schedule Management */}
      <div className="card" style={{ marginTop: 20 }}>
        <h2>Event Schedule</h2>

        <div className="settings-row">
          <span>Morning Pravachan - 9:00 AM</span>
          <button className="btn">Edit</button>
        </div>

        <div className="settings-row">
          <span>Evening Aarti - 7:00 PM</span>
          <button className="btn">Edit</button>
        </div>
      </div>

      {/* 👥 Key Members */}
      <div className="card" style={{ marginTop: 20 }}>
        <h2>Key Members</h2>

        <div className="settings-row">
          <span>Organizer: Jain Trust Committee</span>
        </div>

        <div className="settings-row">
          <span>Speaker: Acharya Shri 108</span>
        </div>
      </div>

      {/* ⭐ Event Controls */}
      <div className="card" style={{ marginTop: 20 }}>
        <h2>Event Controls</h2>

        <div className="settings-row">
          <span>Mark as Featured</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="settings-row">
          <span>Mark as Popular</span>
          <input type="checkbox" />
        </div>

        <div className="settings-row">
          <span>Enable Reminder</span>
          <input type="checkbox" defaultChecked />
        </div>
      </div>

      {/* 📝 Description */}
      <div className="card" style={{ marginTop: 20 }}>
        <h2>Event Description</h2>

        <p style={{ opacity: 0.7 }}>
          Mahaveer Janmotsav celebrates the birth of Lord Mahavir with
          processions, prayers, and community gatherings.
        </p>

        <button className="btn" style={{ marginTop: 10 }}>
          Edit Description
        </button>
      </div>
    </div>
  );
}