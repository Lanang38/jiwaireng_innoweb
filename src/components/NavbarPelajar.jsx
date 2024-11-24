import React from 'react';

export default function NavbarPelajar({ activePage, setActivePage }) {
    return (
        <div className="w-full bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-4">
                <nav className="w-full">
                    <div className="flex items-center justify-start text-3xl px-4">
                        <button
                            onClick={() => setActivePage('Forum')}
                            className={`font-semibold px-4 py-2 transition-all duration-300 ${
                                activePage === 'Forum'
                                    ? 'bg-blue-400 text-white'
                                    : 'bg-gray-100 text-blue-500 hover:bg-blue-400 hover:text-white'
                            }`}
                        >
                            Forum
                        </button>
                        <button
                            onClick={() => setActivePage('Tugas')}
                            className={`font-semibold px-4 py-2 transition-all duration-300 ${
                                activePage === 'Tugas'
                                    ? 'bg-blue-400 text-white'
                                    : 'bg-gray-100 text-blue-500 hover:bg-blue-400 hover:text-white'
                            }`}
                        >
                            Tugas
                        </button>
                        <button
                            onClick={() => setActivePage('Quiz')}
                            className={`font-semibold px-4 py-2 transition-all duration-300 ${
                                activePage === 'Quiz'
                                    ? 'bg-blue-400 text-white'
                                    : 'bg-gray-100 text-blue-500 hover:bg-blue-400 hover:text-white'
                            }`}
                        >
                            Quiz
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
}