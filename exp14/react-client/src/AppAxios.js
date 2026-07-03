import { useEffect, useState } from "react";
import axios from "axios";

function AppAxios() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/students").then((response) => {
      setStudents(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h2>Student List</h2>
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

export default AppAxios;