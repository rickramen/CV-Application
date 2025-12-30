export default function Contact({ data, setData, isEditing }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <section className="section-main">
      <h2>General Information</h2>

      {isEditing ? (
        <form className="section-form" onSubmit={(e) => e.preventDefault()}>
          <div className="section-entry">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </label>

            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </label>
          </div>
        </form>
      ) : (
        <div className="preview-cv">
          <div className="preview-container">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
          </div>
        </div>
      )}
    </section>
  );
}
