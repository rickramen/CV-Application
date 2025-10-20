import { useState } from "react";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import { exampleContact, exampleEducation, exampleExperience } from "../data/exampleData";
import "../styles/CV.css";

export default function CV() {
  const [isEditing, setIsEditing] = useState(true); // global toggle
  const [contact, setContact] = useState({ 
    name: "", 
    email: "",
    phone: "" 
  });
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    gradYear: "",
  });
  const [experience, setExperience] = useState({
  companyName: "",
  position: "",
  jobTasks: "",
  startDate: "",
  endDate: "",
});

  const loadExample = () => {
    setContact(exampleContact);
    setEducation(exampleEducation);
    setExperience(exampleExperience);
  };

  const clearAll = () => {
  setContact({ name: "", email: "", phone: "" });
  setEducation({ school: "", degree: "", gradYear: "" });
  setExperience({ companyName: "", position: "", jobTasks: "", startDate: "", endDate: "" });
  setIsEditing(true);
};


  return (
    <main className="cv-container">
      <div className="cv-controls">
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => setIsEditing(false)}>Submit</button>
        <button onClick={loadExample}>Load Example</button>
        <button onClick={clearAll}>Clear All</button>
      </div>

      <Contact data={contact} setData={setContact} isEditing={isEditing} />
      <Education data={education} setData={setEducation} isEditing={isEditing} />
      <Experience data={experience} setData={setExperience} isEditing={isEditing} />
    </main>
  );
}