export default function Experience({ data, setData, isEditing }) {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = data.map((exp, i) =>
      i === index ? { ...exp, [name]: value } : exp
    );
    setData(updated);
  };

  const handleAdd = () => {
    setData([
      ...data,
      {
        companyName: "",
        position: "",
        jobTasks: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleRemove = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
  };

  return (
    <section className="experience-section">
      <h2>Experience</h2>

      {isEditing ? (
        <>
          {data.map((exp, index) => (
            <form
              key={index}
              className="experience-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <label>
                Company Name:
                <input
                  type="text"
                  name="companyName"
                  value={exp.companyName}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Enter company name"
                />
              </label>

              <label>
                Position:
                <input
                  type="text"
                  name="position"
                  value={exp.position}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Enter your job title"
                />
              </label>

              <label>
                Job Tasks:
                <input
                  type="text"
                  name="jobTasks"
                  value={exp.jobTasks}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Describe your tasks"
                />
              </label>

              <label>
                Start Date:
                <input
                  type="month"
                  name="startDate"
                  value={exp.startDate}
                  onChange={(e) => handleChange(index, e)}
                />
              </label>

              <label>
                End Date:
                <input
                  type="month"
                  name="endDate"
                  value={exp.endDate}
                  onChange={(e) => handleChange(index, e)}
                />
              </label>

              <button type="button" onClick={() => handleRemove(index)}>
                Remove
              </button>
            </form>
          ))}

          <button type="button" onClick={handleAdd}>
            Add Experience
          </button>
        </>
      ) : (
        <div className="experience-preview">
          {data.map((exp, index) => (
            <div key={index} className="experience-entry">
              <p>
                <strong>Company:</strong> {exp.companyName}
              </p>
              <p>
                <strong>Position:</strong> {exp.position}
              </p>
              <p>
                <strong>Tasks:</strong> {exp.jobTasks}
              </p>
              <p>
                <strong>Start:</strong> {exp.startDate}
              </p>
              <p>
                <strong>End:</strong> {exp.endDate}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
