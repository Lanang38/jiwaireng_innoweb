import React, { useState } from "react";
import NavbarPelajar from "../components/NavbarPelajar"

function Pelajar() {
  const [activePage, setActivePage] = useState("Forum");

  return (
    <div>
      <NavbarPelajar activePage={activePage} setActivePage={setActivePage} />
      <div className="container mx-auto mt-4">
        <div className="mt-4">
          {activePage === "Forum" && <p>Ini adalah konten Forum.</p>}
          {activePage === "Tugas" && <p>Ini adalah konten Tugas.</p>}
          {activePage === "Quiz" && <p>Ini adalah konten Quiz.</p>}
        </div>
      </div>
    </div>
  );
}

export default Pelajar;
