export default function Education({ data, setData, isEditing }) {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = data.map((exp, i) =>
      i === index ? { ...exp, [name]: value } : exp
    );
    setData(updated);
  };

  const handleAdd = () => {
    setData([...data, { school: "", degree: "", gradYear: "" }]);
  };

  const handleRemove = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
  };

  return (
    <section className="education-section">
      <h2>Education</h2>

      {isEditing ? (
        <form className="education-form" onSubmit={(e) => e.preventDefault()}>
          {data.map((edu, index) => (
            <div key={index} className="education-entry">
              <label>
                School:
                <input
                  type="text"
                  name="school"
                  value={edu.school}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Enter school or university"
                />
              </label>

              <label>
                Degree:
                <input
                  type="text"
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Enter your degree"
                />
              </label>

              <label>
                Graduation Year:
                <input
                  type="number"
                  name="gradYear"
                  min="1900"
                  max="2099"
                  value={edu.gradYear}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="e.g. 2025"
                />
              </label>

              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAdd}
            className="add-btn"
          >
            Add Education
          </button>
        </form>
      ) : (
        <div className="education-preview">
          {data.map((edu, index) => (
            <div key={index} className="education-entry">
              <p><strong>School:</strong> {edu.school}</p>
              <p><strong>Degree:</strong> {edu.degree}</p>
              <p><strong>Grad Year:</strong> {edu.gradYear}</p>
              </div>
            ))}
        </div>
      )}
    </section>
  );
}
