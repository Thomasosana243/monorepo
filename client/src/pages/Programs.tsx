import React, { useEffect, useState } from "react";

const Programs = () => {
  const [programs, setPrograms] = useState<any[]>([]);

  useEffect(() => {
    // Fetch des programmes depuis le serveur
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.error("Error fetching programs:", error));
  }, []);

  return (
    <div>
      <h1>Liste des Séries</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            {program.title} ({program.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Programs;
