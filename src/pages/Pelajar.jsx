import React, { useState, useEffect } from "react";
import NavbarPelajar from "../components/NavbarPelajar";
import Fotografi from '../assets/fotografi.jpg';
import Pemrograman from '../assets/pemrograman.jpg';

function Pelajar() {
  const [activePage, setActivePage] = useState("Forum");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [taskDescription, setTaskDescription] = useState("");
  const [quizAnswers, setQuizAnswers] = useState({});
  const [newComment, setNewComment] = useState(""); 

  const courses = [
    {
      id: 1,
      name: "Fotografi",
      description: "Belajar dasar-dasar fotografi.",
      image: Fotografi,
    },
    {
      id: 2,
      name: "Pemrograman",
      description: "Dasar-dasar coding dan algoritma.",
      image: Pemrograman,
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
      materials: [
        { id: 1, title: "Panduan Pemotretan Landscape", link: "https://example.com/material1.pdf" },
        { id: 2, title: "Video Tutorial: Pemotretan Malam Hari", link: "https://example.com/material2.mp4" },
      ],
    },
    2: {
      comments: [
        { user: "Siti", content: "Bagaimana cara menggunakan loop di Python?" },
      ],
      assignments: [
        { id: 2, title: "Tugas Array dan String", deadline: "2024-12-05" },
      ],
      materials: [
        { id: 1, title: "Materi Dasar-dasar Python", link: "https://example.com/material3.pdf" },
        { id: 2, title: "Video Tutorial: Looping di Python", link: "https://example.com/material4.mp4" },
      ],
    },
  };

  const quizzes = [
    {
      id: 1,
      title: "Pemrograman Dasar",
      description: "Uji pengetahuan Anda tentang dasar-dasar pemrograman.",
      image: Pemrograman,
      questions: [
        {
          question: "1. Apa itu variabel dalam pemrograman?",
          options: [
            "Tempat untuk menyimpan data",
            "Tipe data",
            "Fungsi untuk memanipulasi data",
            "Semua di atas",
          ],
        },
        {
          question: "2. Apa yang dimaksud dengan loop?",
          options: [
            "Proses menghitung nilai variabel",
            "Instruksi yang dapat diulang beberapa kali",
            "Proses mengeksekusi sebuah fungsi",
            "Semua di atas",
          ],
        },
        {
          question: "3. Bahasa pemrograman mana yang paling populer saat ini?",
          options: [
            "Python",
            "JavaScript",
            "C++",
            "Java",
          ],
        },
        {
          question: "4. Apa itu algoritma?",
          options: [
            "Serangkaian langkah-langkah untuk menyelesaikan masalah",
            "Kumpulan data",
            "Sebuah jenis bahasa pemrograman",
            "Semua di atas",
          ],
        },
        {
          question: "5. Apa perbedaan antara '==' dan '===' dalam JavaScript?",
          options: [
            "'==' membandingkan nilai, '===' membandingkan nilai dan tipe data",
            "'==' membandingkan nilai dan tipe data, '===' membandingkan hanya nilai",
            "'==' dan '===' tidak ada bedanya",
            "Tidak ada operator seperti itu",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Fotografi Dasar",
      description: "Uji pengetahuan Anda tentang dasar-dasar fotografi.",
      image: Fotografi,
      questions: [
        {
          question: "1. Apa itu aperture dalam fotografi?",
          options: [
            "Ukuran lensa kamera",
            "Ukuran bukaan lensa untuk mengatur pencahayaan",
            "Kecepatan shutter kamera",
            "Semua di atas",
          ],
        },
        {
          question: "2. Apa fungsi ISO dalam fotografi?",
          options: [
            "Menentukan kecepatan rana",
            "Mengatur ketajaman gambar",
            "Menentukan sensitivitas sensor terhadap cahaya",
            "Semua di atas",
          ],
        },
        {
          question: "3. Apa yang dimaksud dengan depth of field?",
          options: [
            "Kedalaman gambar",
            "Kejernihan gambar di area tertentu dalam fokus",
            "Kecepatan rana",
            "Semua di atas",
          ],
        },
        {
          question: "4. Apa itu white balance?",
          options: [
            "Pengaturan untuk membuat gambar lebih terang",
            "Pengaturan untuk menyeimbangkan warna agar tampak natural",
            "Pengaturan kecepatan rana",
            "Semua di atas",
          ],
        },
        {
          question: "5. Apa itu rule of thirds dalam fotografi?",
          options: [
            "Teknik untuk membuat gambar lebih simetris",
            "Teknik pemotretan dengan membagi gambar menjadi 9 bagian",
            "Pengaturan lensa untuk objek jarak jauh",
            "Semua di atas",
          ],
        },
      ],
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
    setIsSubmitting(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Tugas berhasil dikumpulkan!");
    setIsSubmitting(false);
  };

  const handleQuizChange = (questionIndex, selectedOption) => {
    setQuizAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmitQuiz = () => {
    alert("Quiz submitted!");
    setSelectedQuiz(null);
  };

  const handlePostComment = () => {
    if (newComment.trim() === "") {
      alert("Komentar tidak boleh kosong!");
      return;
    }

    const updatedComments = [
      ...courseDetails[selectedCourse]?.comments,
      { user: "You", content: newComment }
    ];

    courseDetails[selectedCourse] = { ...courseDetails[selectedCourse], comments: updatedComments };
    
    setNewComment("");
    alert("Komentar berhasil diposting!");
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

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Materi</h3>
                    {courseDetails[selectedCourse]?.materials.length === 0 ? (
                      <p className="text-gray-500">Tidak ada materi.</p>
                    ) : (
                      courseDetails[selectedCourse]?.materials.map((material) => (
                        <div key={material.id} className="border-b py-4">
                          <a
                            href={material.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {material.title}
                          </a>
                        </div>
                      ))
                    )}
                  </div>

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
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full h-24 p-4 border border-gray-300 rounded-md"
                      placeholder="Tulis komentar..."
                    />
                    <button
                      onClick={handlePostComment}
                      className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                    >
                      Post Komentar
                    </button>
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

              <div className="mt-6">
                <div className="mb-4 text-center">
                  <p className="text-xl font-semibold text-gray-700">Upload Tugas Anda</p>
                  <p className="text-sm text-gray-500">Pilih file tugas yang ingin Anda kirimkan. Pastikan format file sesuai dengan instruksi!</p>
                </div>

                <div className="flex justify-start items-start border-2 border-dashed border-gray-400 rounded-md p-6 hover:bg-blue-50 transition-all">
                  <input
                    type="file"
                    onChange={(e) => setTaskDescription(e.target.files[0])}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-blue-600 font-medium hover:text-blue-700"
                  >
                    Klik disini untuk memilih file
                  </label>
                </div>

                {taskDescription && (
                  <p className="mt-2 text-sm text-gray-600">File yang dipilih: {taskDescription.name}</p>
                )}

                <button
                  onClick={handleFormSubmit}
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                >
                  Kirim Tugas
                </button>
              </div>
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
                    onClick={() => handleQuizClick(quiz.id)}
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
                    onClick={() => setSelectedQuiz(null)}
                  >
                    Kembali
                  </button>

                  <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">
                    {quizzes.find((q) => q.id === selectedQuiz)?.title}
                  </h2>

                  <div>
                    {quizzes.find((q) => q.id === selectedQuiz)?.questions.map((question, idx) => (
                      <div key={idx} className="mb-4">
                        <p className="font-semibold text-2xl">{question.question}</p>
                        <div>
                          {question.options.map((option, optionIdx) => (
                            <div key={optionIdx} className="flex items-center">
                              <input
                                type="radio"
                                id={`question-${idx}-option-${optionIdx}`}
                                name={`question-${idx}`}
                                value={option}
                                onChange={() => handleQuizChange(idx, option)}
                                checked={quizAnswers[idx] === option}
                                className="hidden"
                              />
                              <label
                                htmlFor={`question-${idx}-option-${optionIdx}`}
                                className="ml-2 my-2 text-xl flex items-center cursor-pointer"
                              >
                              <div className="w-5 h-5 mr-3 border-2 border-gray-500 rounded-full flex justify-center items-center">
                                {quizAnswers[idx] === option && (
                                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                                )}
                              </div>
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={handleSubmitQuiz}
                      className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                    >
                      Kirim Quiz
                    </button>
                  </div>
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