import React, { useState, useEffect } from "react";
import NavbarPelajar from "../components/NavbarPelajar";

function Pelajar() {
  const [activePage, setActivePage] = useState("Forum");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    {
      id: 1,
      name: "Fotografi",
      description: "Belajar dasar-dasar fotografi.",
      image: "https://via.placeholder.com/300x200?text=Fotografi",
    },
    {
      id: 2,
      name: "Pemrograman",
      description: "Dasar-dasar coding dan algoritma.",
      image: "https://via.placeholder.com/300x200?text=Pemrograman",
    },
    {
      id: 3,
      name: "Desain Grafis",
      description: "Belajar tools desain modern.",
      image: "https://via.placeholder.com/300x200?text=Desain+Grafis",
    },
  ];

  const courseDetails = {
    1: {
      comments: [
        { user: "Ali", content: "Apakah ada tugas tambahan minggu ini?" },
        { user: "Budi", content: "Siapa yang punya tips memotret di malam hari?" },
      ],
      assignments: [
        { id: 1, title: "Tugas Fotografi Lanskap", deadline: "2024-12-01" },
      ],
    },
    2: {
      comments: [
        { user: "Siti", content: "Bagaimana cara menggunakan loop di Python?" },
      ],
      assignments: [
        { id: 2, title: "Tugas Array dan String", deadline: "2024-12-05" },
      ],
    },
    3: {
      comments: [
        { user: "Rina", content: "Adakah tips desain yang mudah untuk pemula?" },
      ],
      assignments: [
        { id: 3, title: "Desain Poster Acara", deadline: "2024-12-10" },
      ],
    },
  };

  // Data Quiz
  const quizzes = [
    {
      id: 1,
      title: "React Basics",
      description: "Test your knowledge of React fundamentals.",
      image: "https://via.placeholder.com/300x200?text=React",
      questions: [
        {
          question: "What is JSX?",
          options: ["A JavaScript library", "A syntax extension for JavaScript", "A React hook", "None of the above"],
        },
        {
          question: "What is React used for?",
          options: ["Building UI components", "Building back-end services", "Building mobile apps", "None of the above"],
        },
      ],
    },
  ];

  const constForum = [
    {
      kelas: "Fotografi",
      matkul: "Pengantar Fotografi",
      tanggal: "15 Nov 2024",
      peserta: "5/10",
      deskripsi: "Kursus ini mengajarkan dasar-dasar fotografi dan komposisi gambar.",
    },
    {
      kelas: "Fotografi",
      matkul: "Teknik Pencahayaan",
      tanggal: "22 Nov 2024",
      peserta: "3/10",
      deskripsi: "Kursus ini membahas teknik pencahayaan yang penting dalam fotografi.",
    },
    {
      kelas: "Fotografi",
      matkul: "Komposisi dalam Fotografi",
      tanggal: "29 Nov 2024",
      peserta: "7/10",
      deskripsi: "Kursus ini mengajarkan cara komposisi yang baik dalam fotografi.",
    },
    {
      kelas: "Pemrograman",
      matkul: "Pengenalan JavaScript",
      tanggal: "18 Nov 2024",
      peserta: "4/8",
      deskripsi: "Kursus ini memberikan pengenalan tentang dasar-dasar JavaScript.",
    },
    {
      kelas: "Pemrograman",
      matkul: "Pengenalan ReactJS",
      tanggal: "25 Nov 2024",
      peserta: "6/8",
      deskripsi: "Kursus ini mengajarkan dasar-dasar penggunaan ReactJS untuk membangun aplikasi.",
    },
  ];
  

  useEffect(() => {
    setSelectedCourse(null);
    setSelectedQuiz(null);
  }, [activePage]);

  const handleCourseClick = (courseId) => {
    setSelectedCourse(courseId);
  };

  const handleQuizClick = (quizId) => {
    setSelectedQuiz(quizId);
  };

  const handleKumpulTugasClick = () => {
    setIsSubmitting(true); // Enable submission form
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Tugas berhasil dikumpulkan!");
    setIsSubmitting(false); // Reset after submission
  };

  const handleSubmitQuiz = () => {
    // Handle quiz submission logic here
    alert("Quiz submitted!");
    setSelectedQuiz(null); // Reset after submission
  };

  return (
    <div>
      <NavbarPelajar activePage={activePage} setActivePage={setActivePage} />
      <div className="container mx-auto mt-4">
          {activePage === "Forum" && (
            <div>
              {!selectedCourse ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
                      onClick={() => handleCourseClick(course.id)}
                    >
                      <img
                        src={course.image}
                        alt={course.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-lg font-bold text-blue-600">{course.name}</h2>
                        <p className="text-gray-700 text-sm">{course.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex justify-center items-center">
                  <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
                    <button
                      className="mb-4 px-6 py-3 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-all"
                      onClick={() => setSelectedCourse(null)}
                    >
                      Kembali
                    </button>

                    {/* Menampilkan gambar sesuai dengan kursus yang dipilih */}
                    <div className="mb-6">
                      <img
                        src={courses.find((course) => course.id === selectedCourse)?.image}
                        alt="Course"
                        className="w-full h-56 object-cover rounded-lg"
                      />
                    </div>

                    <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
                      {courses.find((c) => c.id === selectedCourse)?.name}
                    </h2>

                    {/* Komentar */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Komentar</h3>
                      {courseDetails[selectedCourse]?.comments.length === 0 ? (
                        <p className="text-gray-500">Tidak ada komentar.</p>
                      ) : (
                        courseDetails[selectedCourse]?.comments.map((comment, idx) => (
                          <div key={idx} className="border-b py-4">
                            <p>
                              <strong className="text-blue-600">{comment.user}:</strong> {comment.content}
                            </p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        {activePage === "Tugas" && (
          <div>
            {!selectedCourse ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
                    onClick={() => handleCourseClick(course.id)}
                  >
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-bold text-blue-600">{course.name}</h2>
                      <p className="text-gray-700 text-sm">{course.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
                  <button
                    className="mb-4 px-6 py-3 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-all"
                    onClick={() => setSelectedCourse(null)}
                  >
                    Kembali
                  </button>

                  {/* Menampilkan gambar sesuai dengan kursus yang dipilih */}
                  <div className="mb-6">
                    <img
                      src={courses.find((course) => course.id === selectedCourse)?.image}
                      alt="Course"
                      className="w-full h-56 object-cover rounded-lg"
                    />
                  </div>

                  <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
                    {courses.find((c) => c.id === selectedCourse)?.name}
                  </h2>

                  {/* Tugas */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Tugas</h3>
                    {courseDetails[selectedCourse]?.assignments.map((assignment) => (
                      <div key={assignment.id} className="border-b py-4">
                        <p className="font-bold text-gray-900">{assignment.title}</p>
                        <p className="text-sm text-gray-600">
                          Deadline: {assignment.deadline}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Button to collect assignment */}
                  <button
                    onClick={handleKumpulTugasClick}
                    className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                  >
                    Kumpulkan Tugas
                  </button>

                  {isSubmitting && (
                    <form onSubmit={handleFormSubmit} className="mt-4">
                      <textarea
                        placeholder="Deskripsi Tugas"
                        className="w-full h-32 p-4 border border-gray-300 rounded-md"
                        required
                      />
                      <button
                        type="submit"
                        className="mt-4 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
                      >
                        Kirim
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {activePage === "Quiz" && (
          <div>
            {!selectedQuiz ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quizzes.map((quiz) => (
                  <div
                    key={quiz.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
                    onClick={() => handleQuizClick(quiz.id)} // Navigate to quiz details
                  >
                    <img
                      src={quiz.image}
                      alt={quiz.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-bold text-blue-600">{quiz.title}</h2>
                      <p className="text-gray-700 text-sm">{quiz.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
                  <button
                    className="mb-4 px-6 py-3 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-all"
                    onClick={() => setSelectedQuiz(null)} // Go back to the list of quizzes
                  >
                    Kembali
                  </button>

                  {/* Display the selected quiz */}
                  <div className="mb-6">
                    <img
                      src={quizzes.find((quiz) => quiz.id === selectedQuiz)?.image}
                      alt="Quiz"
                      className="w-full h-56 object-cover rounded-lg"
                    />
                  </div>

                  <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
                    {quizzes.find((quiz) => quiz.id === selectedQuiz)?.title}
                  </h2>

                  {/* Quiz content and questions */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Soal</h3>
                    {quizzes.find((quiz) => quiz.id === selectedQuiz)?.questions.map((question, index) => (
                      <div key={index} className="border-b py-4">
                        <p className="font-bold text-gray-900">{question.question}</p>
                        <ul className="text-sm text-gray-600">
                          {question.options.map((option, i) => (
                            <li key={i}>
                              <label>
                                <input
                                  type="radio"
                                  name={`question-${index}`}
                                  value={option}
                                  className="mr-2"
                                />
                                {option}
                              </label>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Submit button for quiz */}
                  <button
                    onClick={handleSubmitQuiz}
                    className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
                  >
                    Kirim Jawaban
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Pelajar;