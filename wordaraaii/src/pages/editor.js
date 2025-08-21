// src/pages/editor.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// This is the new editor page component.
export default function EditorPage() {
    // We'll use React state to manage the UI's dynamic parts.
    const [documentTitle, setDocumentTitle] = useState('ISRO Project Report');
    const [chatMessages, setChatMessages] = useState([
        { from: 'ai', text: "Hello! How can I help you create your document today? I have loaded the context from 'Report_Prachi.docx'." },
        { from: 'user', text: 'Based on the uploaded report, create a title page and an abstract section.' }
    ]);
    const [contextFiles, setContextFiles] = useState([
        { name: 'Report_Prachi.docx', type: 'file' },
        { name: 'github.com/typst/typst', type: 'repo' }
    ]);

    // This function would handle sending a message to the AI.
    const handleSendMessage = () => {
        // AI logic would go here.
        console.log("Sending message...");
    };

    // This function would handle file uploads.
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        setContextFiles(prevFiles => [...prevFiles, { name: file.name, type: 'file' }]);
        // Backend upload/processing logic would be triggered here.
    };

    return (
        <>
            <Head>
                <title>Wordara V2 - AI Editor</title>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 flex flex-col h-screen">
                {/* Header */}
                <header className="bg-gray-900/70 backdrop-blur-sm border-b border-gray-700 w-full flex items-center justify-between p-3 shadow-lg z-10">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-2xl font-bold text-white">Wordara</h1>
                        <div className="h-6 w-px bg-gray-600"></div>
                        <input 
                            type="text" 
                            value={documentTitle}
                            onChange={(e) => setDocumentTitle(e.target.value)}
                            className="bg-gray-700 text-white rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-md transition-colors">Share</button>
                        <button className="text-sm bg-purple-600 hover:bg-purple-700 text-white font-semibold px-3 py-1.5 rounded-md transition-colors shadow-purple-500/20 shadow-lg">Export PDF</button>
                        <img src="https://placehold.co/32x32/7e22ce/ffffff?text=PA" alt="User Avatar" className="w-8 h-8 rounded-full" />
                    </div>
                </header>

                {/* Main Content Area - 3 Column Layout */}
                <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 overflow-hidden">
                    
                    {/* Left Column: Context & Chat */}
                    <div className="lg:col-span-3 flex flex-col gap-4 overflow-hidden">
                        {/* Context Panel */}
                        <div className="bg-gray-800/50 rounded-lg p-4 flex flex-col h-1/2 border border-gray-700 shadow-xl">
                            <h2 className="text-lg font-semibold mb-3 flex items-center text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-purple-400"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                                Context Sources
                            </h2>
                            <div className="space-y-3 mb-3 flex-1 overflow-y-auto pr-2">
                                {contextFiles.map((file, index) => (
                                    <div key={index} className="bg-gray-700/80 p-2 rounded-md flex items-center justify-between text-sm hover:bg-gray-700 transition-colors">
                                        <span className="flex items-center truncate">
                                            {file.type === 'file' ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2 flex-shrink-0 text-gray-400"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2 flex-shrink-0 text-gray-400"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                            )}
                                            <span className="truncate">{file.name}</span>
                                        </span>
                                        <button className="text-gray-500 hover:text-white ml-2 flex-shrink-0">&times;</button>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-2 text-sm">
                                <label htmlFor="file-upload" className="cursor-pointer w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-3 rounded-md transition-all duration-300 transform hover:scale-105">
                                    Upload File
                                </label>
                                <input id="file-upload" type="file" className="hidden" onChange={handleFileUpload} />
                            </div>
                        </div>

                        {/* AI Chat Panel */}
                        <div className="bg-gray-800/50 rounded-lg p-4 flex flex-col h-1/2 border border-gray-700 shadow-xl">
                             <h2 className="text-lg font-semibold mb-3 flex items-center text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-purple-400"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>
                                AI Assistant
                            </h2>
                            <div className="flex-1 space-y-4 overflow-y-auto pr-2 text-sm">
                                {chatMessages.map((msg, index) => (
                                    <div key={index} className={`flex items-start gap-2.5 ${msg.from === 'user' ? 'justify-end' : ''}`}>
                                        {msg.from === 'ai' && <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center font-bold text-white flex-shrink-0">A</div>}
                                        <div className="flex flex-col gap-1 w-full max-w-xs">
                                            <div className={`flex items-center space-x-2 ${msg.from === 'user' ? 'justify-end' : ''}`}>
                                                <span className="text-sm font-semibold text-gray-100">{msg.from === 'ai' ? 'Wordara AI' : 'You'}</span>
                                            </div>
                                            <div className={`leading-1.5 p-3 border-gray-700 ${msg.from === 'ai' ? 'bg-gray-700 rounded-e-xl rounded-es-xl' : 'bg-purple-600 rounded-s-xl rounded-ee-xl'}`}>
                                                <p className="text-sm font-normal text-white">{msg.text}</p>
                                            </div>
                                        </div>
                                        {msg.from === 'user' && <img src="https://placehold.co/32x32/7e22ce/ffffff?text=PA" alt="User Avatar" className="w-8 h-8 rounded-full flex-shrink-0" />}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 flex items-center">
                                <input type="text" placeholder="Chat with AI..." className="w-full bg-gray-700 text-white rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300" />
                                <button onClick={handleSendMessage} className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-r-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column: Typst Code Editor */}
                    <div className="lg:col-span-5 bg-gray-800/50 rounded-lg p-4 flex flex-col overflow-hidden border border-gray-700 shadow-xl">
                        <h2 className="text-lg font-semibold mb-3 flex items-center text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-purple-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                            Typst Code
                        </h2>
                        <textarea className="flex-1 w-full bg-gray-900 text-gray-300 font-mono text-sm p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none" spellCheck="false" defaultValue={`#set document(author: "Prachi Agarwal", title: "Intelligent Ground Truth Data Processing")
#set text(font: "Linux Libertine", lang: "en")

#show heading.where(level: 1): set text(weight: "bold", size: 1.5em)

#align(center)[
  #block(text(1.8em, weight: "bold", "Intelligent Ground Truth Data Processing"))
  #v(1em)
  _Analytics and Deployment of Instrument Data_
  #v(2em)
  Prachi Agarwal
  #v(0.5em)
  21BCON532
]

#pagebreak()

= Abstract

Ground-based atmospheric measurements are indispensable for climate research...
`}></textarea>
                    </div>

                    {/* Right Column: Live Preview */}
                    <div className="lg:col-span-4 bg-white rounded-lg p-1 flex flex-col overflow-hidden shadow-xl">
                        <div className="bg-gray-100 p-3 rounded-t-md">
                             <h2 className="text-lg font-semibold flex items-center text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-purple-600"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                Live Preview
                            </h2>
                        </div>
                        <div className="flex-1 overflow-y-auto p-6 text-black bg-white rounded-b-md">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold mb-2">Intelligent Ground Truth Data Processing</h1>
                                <p className="text-lg italic text-gray-700 mb-8">Analytics and Deployment of Instrument Data</p>
                                <p className="text-xl">Prachi Agarwal</p>
                                <p className="text-md text-gray-600">21BCON532</p>
                            </div>
                            <hr className="my-12 border-gray-300" />
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Abstract</h2>
                                <p className="text-base text-gray-800 leading-relaxed">
                                    Ground-based atmospheric measurements are indispensable for climate research, satellite calibration/validation (Cal/Val), and environmental monitoring. This project addresses the challenges associated with managing and processing diverse datasets...
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
