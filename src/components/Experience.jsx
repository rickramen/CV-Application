export default function Experience({ data, setData, isEditing }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <section className="experience-section">
      <h2>Experience</h2>

      {isEditing ? (
        <form className="experience-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={data.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
            />
          </label>

          <label>
            Position:
            <input
              type="text"
              name="position"
              value={data.position}
              onChange={handleChange}
              placeholder="Enter your job title"
            />
          </label>

          <label>
            Job Tasks:
            <input
              type="text"
              name="jobTasks"
              value={data.jobTasks}
              onChange={handleChange}
              placeholder="Describe your tasks"
            />
          </label>

          <label>
            Start Date:
            <input
              type="text"
              name="startDate"
              value={data.startDate}
              onChange={handleChange}
              placeholder="e.g. June 2025"
            />
          </label>

          <label>
            End Date:
            <input
              type="text"
              name="endDate"
              value={data.endDate}
              onChange={handleChange}
              placeholder="e.g. August 2025"
            />
          </label>
        </form>
      ) : (
        <div className="experience-preview">
          <p><strong>Company:</strong> {data.companyName}</p>
          <p><strong>Position:</strong> {data.position}</p>
          <p><strong>Tasks:</strong> {data.jobTasks}</p>
          <p><strong>Start:</strong> {data.startDate}</p>
          <p><strong>End:</strong> {data.endDate}</p>
        </div>
      )}
    </section>
  );
}
