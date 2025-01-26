import React, { useState } from 'react';
import { Mic, Play, Save, Music, RefreshCw, HelpCircle } from 'lucide-react';

function App() {
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedNotes, setGeneratedNotes] = useState<string[]>([]);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedNotes(['C4', 'E4', 'G4', 'A4', 'G4', 'E4']);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Music className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Melodia AI</h1>
          </div>
          <p className="text-lg text-purple-200">Your AI-powered music composition assistant</p>
        </header>

        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Describe your music</label>
            <div className="flex gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="E.g., Create a peaceful piano melody in C major..."
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-300/30 focus:border-purple-400 focus:ring focus:ring-purple-400/20 focus:outline-none text-white placeholder-purple-200/50"
                rows={3}
              />
            </div>
          </div>

          <div className="flex gap-3 mb-8">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {isGenerating ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
              {isGenerating ? 'Generating...' : 'Generate'}
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors">
              <Mic className="w-5 h-5" />
              Voice Input
            </button>
          </div>

          {generatedNotes.length > 0 && (
            <div className="bg-white/5 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium mb-4">Generated Melody</h3>
              <div className="flex gap-2 flex-wrap mb-4">
                {generatedNotes.map((note, index) => (
                  <div key={index} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
                    {note}
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium transition-colors">
                <Save className="w-4 h-4" />
                Save Melody
              </button>
            </div>
          )}

          <div className="mt-8 p-4 bg-white/5 rounded-lg">
            <div className="flex items-center gap-2 text-sm text-purple-200">
              <HelpCircle className="w-4 h-4" />
              <p>Try prompts like "Create a happy jazz progression" or "Generate a sad melody in A minor"</p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-12 text-sm text-purple-200">
          <p>Powered by advanced music generation AI</p>
          <p className="mt-1">Use responsibly and respect copyright laws</p>
        </footer>
      </div>
    </div>
  );
}

export default App;