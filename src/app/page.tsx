"use client";

import { useState, useRef, useEffect } from "react";

// Define TypeScript interfaces for our data
interface Verse {
  reference: string;
  text: string;
  koreanText: string;
  category: string;
}

interface SearchResults {
  query: string;
  totalVerses: number;
  kingdomGospel: Verse[];
  graceGospel: Verse[];
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("kingdom");
  const resultRef = useRef<HTMLDivElement>(null);
  const [pdfModule, setPdfModule] = useState<any>(null);
  const [html2canvasModule, setHtml2canvasModule] = useState<any>(null);

  // Load PDF libraries on client-side only
  useEffect(() => {
    const loadModules = async () => {
      try {
        const jsPDFModule = await import('jspdf');
        const html2canvasModule = await import('html2canvas');
        setPdfModule(jsPDFModule.default);
        setHtml2canvasModule(html2canvasModule.default);
      } catch (err) {
        console.error('Failed to load PDF modules:', err);
      }
    };
    
    loadModules();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      setError("Please enter a search term");
      return;
    }
    
    setIsLoading(true);
    setError("");
    
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchQuery }),
      });
      
      if (!response.ok) {
        throw new Error('Search request failed');
      }
      
      const data = await response.json();
      setResults(data);

      // Set the active tab to the one with more results, or default to kingdom
      if (data.kingdomGospel.length === 0 && data.graceGospel.length > 0) {
        setActiveTab("grace");
      } else {
        setActiveTab("kingdom");
      }
    } catch (err) {
      setError("An error occurred while searching. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const highlightSearchTerm = (text: string, term: string): React.ReactNode => {
    if (!term) return <>{text}</>;
    
    const parts = text.split(new RegExp(`(${term})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === term.toLowerCase() 
            ? <span key={i} className="text-red-600">{part}</span> 
            : part
        )}
      </>
    );
  };

  const exportToPDF = async () => {
    if (!resultRef.current || !results || !pdfModule || !html2canvasModule) {
      alert('PDF export is not ready yet. Please try again in a moment.');
      return;
    }
    
    try {
      const canvas = await html2canvasModule(resultRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new pdfModule({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`rightly-dividing-${results.query}.pdf`);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share && results) {
      navigator.share({
        title: `Rightly Dividing: ${results.query}`,
        text: `Bible study results for "${results.query}" - Kingdom Gospel: ${results.kingdomGospel.length}, Grace Gospel: ${results.graceGospel.length}`,
        url: window.location.href,
      }).catch(err => {
        console.error('Failed to share:', err);
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      const url = window.location.href;
      navigator.clipboard.writeText(url)
        .then(() => alert('Link copied to clipboard!'))
        .catch(() => alert('Failed to copy link'));
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Rightly Dividing the Word of Truth</h1>
      <p className="mb-6">
        This tool helps you study KJV Bible verses that highlight the differences between Kingdom Gospel 
        (based on Moses' Law, taught by Jesus to the 12 disciples) and Grace Gospel (based on Paul's epistles).
      </p>

      <div className="mb-2">
        <span className="inline-block mr-4">📖 Displays only KJV verses without interpretation or commentary.</span>
      </div>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter a word or phrase (e.g., 'gospel', 'grace', 'law')"
            className="w-full px-4 py-2 mb-4 border rounded-lg bg-white text-black placeholder-gray-500 font-medium border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            disabled={isLoading}
          >
            {isLoading ? "Searching..." : "Search KJV Bible"}
          </button>
        </div>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>

      {results && (
        <div className="mb-8" ref={resultRef}>
          <h2 className="text-xl font-bold mb-4">Search Results: "{results.query}"</h2>

          <div className="flex justify-between mb-4">
            <button 
              onClick={exportToPDF} 
              className="px-4 py-2 rounded-lg border hover:bg-gray-100"
            >
              <span className="mr-2">📥</span> PDF
            </button>
            <button 
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg border hover:bg-gray-100"
            >
              <span className="mr-2">🖨️</span> Print
            </button>
            <button 
              onClick={handleShare}
              className="px-4 py-2 rounded-lg border hover:bg-gray-100"
            >
              <span className="mr-2">🔗</span> Share
            </button>
          </div>

          <table className="w-full mb-6 border-collapse">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-3 text-left text-white font-bold text-lg">Query</th>
                <th className="p-3 text-left text-white font-bold text-lg">Total Verses</th>
                <th className="p-3 text-left text-white font-bold text-lg">Kingdom Gospel</th>
                <th className="p-3 text-left text-white font-bold text-lg">Grace Gospel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b">{results.query}</td>
                <td className="p-2 border-b">{results.totalVerses}</td>
                <td className="p-2 border-b">{results.kingdomGospel.length}</td>
                <td className="p-2 border-b">{results.graceGospel.length}</td>
              </tr>
            </tbody>
          </table>

          <div className="mb-8">
            <ul className="flex border-b">
              <li className="mr-1">
                <button
                  onClick={() => setActiveTab("kingdom")}
                  className={`bg-white py-2 px-4 ${activeTab === "kingdom" 
                    ? "border-l border-t border-r rounded-t text-blue-700 font-semibold" 
                    : "text-blue-500 hover:text-blue-800"}`}
                >
                  Kingdom Gospel ({results.kingdomGospel.length})
                </button>
              </li>
              <li className="mr-1">
                <button
                  onClick={() => setActiveTab("grace")}
                  className={`bg-white py-2 px-4 ${activeTab === "grace" 
                    ? "border-l border-t border-r rounded-t text-blue-700 font-semibold" 
                    : "text-blue-500 hover:text-blue-800"}`}
                >
                  Grace Gospel ({results.graceGospel.length})
                </button>
              </li>
            </ul>

            <div style={{ display: activeTab === "kingdom" ? "block" : "none" }} className="py-4">
              {results.kingdomGospel.length > 0 ? (
                results.kingdomGospel.map((verse, index) => (
                  <div key={index} className="mb-6 border-b pb-4">
                    <div className="font-bold mb-2">{verse.reference}</div>
                    <div className="mb-2">
                      <strong>KJV:</strong> {highlightSearchTerm(verse.text, results.query)}
                    </div>
                    <div>
                      <strong>한글흠정역:</strong> {verse.koreanText}
                    </div>
                  </div>
                ))
              ) : (
                <p>No Kingdom Gospel verses found for this search term.</p>
              )}
            </div>

            <div style={{ display: activeTab === "grace" ? "block" : "none" }} className="py-4">
              {results.graceGospel.length > 0 ? (
                results.graceGospel.map((verse, index) => (
                  <div key={index} className="mb-6 border-b pb-4">
                    <div className="font-bold mb-2">{verse.reference}</div>
                    <div className="mb-2">
                      <strong>KJV:</strong> {highlightSearchTerm(verse.text, results.query)}
                    </div>
                    <div>
                      <strong>한글흠정역:</strong> {verse.koreanText}
                    </div>
                  </div>
                ))
              ) : (
                <p>No Grace Gospel verses found for this search term.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {!results && (
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Sample Key Verses</h3>
          
          <div className="mb-6 border-b pb-4">
            <div className="font-bold mb-2">Galatians 2:7 (Grace Gospel)</div>
            <div className="mb-2"><strong>KJV:</strong> {highlightSearchTerm("But contrariwise, when they saw that the gospel of the uncircumcision was committed unto me, as the gospel of the circumcision was unto Peter;", searchQuery)}</div>
            <div><strong>한글흠정역:</strong> 오히려 그들이 할례 없는 자의 복음이 내게 위임된 것 같이 할례 받은 자의 복음이 베드로에게 위임된 것을 보았느니라.</div>
          </div>
          
          <div className="mb-6 border-b pb-4">
            <div className="font-bold mb-2">Matthew 10:5-6 (Kingdom Gospel)</div>
            <div className="mb-2"><strong>KJV:</strong> {highlightSearchTerm("These twelve Jesus sent forth, and commanded them, saying, Go not into the way of the Gentiles, and into any city of the Samaritans enter ye not: But go rather to the lost sheep of the house of Israel.", searchQuery)}</div>
            <div><strong>한글흠정역:</strong> 예수께서 이 열둘을 보내시며 명하시되 이방인의 길로 가지 말고 사마리아인의 고을에도 들어가지 말며 오직 이스라엘 집의 잃은 양에게로 가라.</div>
          </div>
        </div>
      )}

      <footer className="text-center text-gray-600 text-sm border-t pt-4">
        <p>Focused exclusively on KJV Bible verses. No interpretations provided.</p>
        <p>© {new Date().getFullYear()} Rightly Dividing Tool</p>
      </footer>
    </div>
  );
}
