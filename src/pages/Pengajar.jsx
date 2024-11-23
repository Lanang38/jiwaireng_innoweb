import React, { useState } from "react";
import NavbarPengajar from "../components/NavbarPengajar";

function Pengajar() {
  const [activePage, setActivePage] = useState("Forum");

  return (
    <div>
      <NavbarPengajar activePage={activePage} setActivePage={setActivePage} />
      <div className="container mx-auto mt-4">
        <div className="mt-4">
          {activePage === "Forum" && <p>Ini adalah konten Forum.</p>}
          {activePage === "Tugas" && <p>Ini adalah konten Tugas.</p>}
          {activePage === "Nilai" && <p>Ini adalah konten Nilai.</p>}
          {activePage === "Quiz" && <p>Ini adalah konten Quiz.</p>}
        </div>
      </div>
    </div>
  );
}

export default Pengajar;
