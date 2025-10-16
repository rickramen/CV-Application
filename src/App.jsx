import Header from "./components/Header";
import CV from "./components/CV";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="cv-app">
        <CV />
      </div>
    </>
  );
}

export default App
