import React from 'react';

export default function NavbarPengajar({ activePage, setActivePage }) {
    return (
        <nav className="bg-transparent px-1">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex space-x-10 w-full relative text-xl px-6 py-2">
                    <button
                        onClick={() => setActivePage('Forum')}
                        className={`font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                            activePage === 'Forum'
                                ? 'bg-blue-400 text-white'
                                : 'bg-gray-100 text-blue-500 hover:bg-blue-400 hover:text-white'
                        }`}
                    >
                        Forum
                    </button>
                    <button
                        onClick={() => setActivePage('Tugas')}
                        className={`font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                            activePage === 'Tugas'
                                ? 'bg-blue-400 text-white'
                                : 'bg-gray-100 text-blue-500 hover:bg-blue-400 hover:text-white'
                        }`}
                    >
                        Tugas
                    </button>
                    <button
                        onClick={() => setActivePage('Nilai')}
                        className={`font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                            activePage === 'Nilai'
                                ? 'bg-blue-400 text-white'
                                : 'bg-gray-100 text-blue-500 hover:bg-blue-400 hover:text-white'
                        }`}
                    >
                        Nilai
                    </button>
                    <button
                        onClick={() => setActivePage('Quiz')}
                        className={`font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                            activePage === 'Quiz'
                                ? 'bg-blue-400 text-white'
                                : 'bg-gray-100 text-blue-500 hover:bg-blue-400 hover:text-white'
                        }`}
                    >
                        Quiz
                    </button>
                </div>
            </div>
            {/* Garis lurus panjang */}
            <div className="w-full h-[3px] bg-blue-400 "></div>
        </nav>
    );
}
