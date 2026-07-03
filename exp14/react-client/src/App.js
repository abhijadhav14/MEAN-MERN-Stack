import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  const loadWithAxios = () => {
    axios.get("http://localhost:3000/students").then((response) => {
      setStudents(response.data);
    });
  };

  return (
    <div className="App">
      <h2>Student List</h2>
      <button type="button" onClick={loadWithAxios}>
        Reload with Axios
      </button>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.id} - {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
