export default function Education({ data, setData, isEditing }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <section className="education-section">
      <h2>Education</h2>

      {isEditing ? (
        <form className="education-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            School:
            <input
              type="text"
              name="school"
              value={data.school}
              onChange={handleChange}
              placeholder="Enter school or university name"
            />
          </label>

          <label>
            Degree:
            <input
              type="text"
              name="degree"
              value={data.degree}
              onChange={handleChange}
              placeholder="Enter your degree"
            />
          </label>

          <label>
            Graduation Year:
            <input
              type="text"
              name="gradYear"
              value={data.gradYear}
              onChange={handleChange}
              placeholder="e.g. 2025"
            />
          </label>
        </form>
      ) : (
        <div className="education-preview">
          <p><strong>School:</strong> {data.school}</p>
          <p><strong>Degree:</strong> {data.degree}</p>
          <p><strong>Grad Year:</strong> {data.gradYear}</p>
        </div>
      )}
    </section>
  );
}
