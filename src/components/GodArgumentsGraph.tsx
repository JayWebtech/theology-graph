'use client';

import { useState, useMemo } from 'react';
import { godArguments, GodArgument } from '../data/godArguments';
import { X, Info, BookOpen, Search, Filter, Award, Users, MessageSquare } from 'lucide-react';

interface ModalProps {
  argument: GodArgument | null;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ argument, isOpen, onClose }) => {
  if (!isOpen || !argument) return null;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Classical': return 'bg-blue-100 text-blue-800';
      case 'Modern': return 'bg-green-100 text-green-800';
      case 'Personal': return 'bg-purple-100 text-purple-800';
      case 'Philosophical': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4 transition-all duration-300 ease-in-out">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-in-out scale-100">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl"
                  style={{ backgroundColor: argument.color }}
                >
                  {argument.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{argument.name}</h2>
                  <span className={`px-3 py-1 rounded-full font-medium text-sm ${getCategoryColor(argument.category)}`}>
                    {argument.category}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-black">
                  <Info size={20} />
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed text-md">{argument.description}</p>
              </div>

              {/* Key Points */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">Key Points</h3>
                <div className="space-y-3">
                  {argument.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg text-sm">
                      <span className="text-blue-500 font-bold text-md">{index + 1}.</span>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Examples */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">Concrete Examples</h3>
                <div className="space-y-3">
                  {argument.examples.map((example, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg text-sm">
                      <span className="text-green-500 font-bold text-md">•</span>
                      <span className="text-gray-700">{example}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Historical Context */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-black">
                  <BookOpen size={20} />
                  Historical Context
                </h3>
                <p className="text-gray-700 leading-relaxed text-md">{argument.historicalContext}</p>
              </div>

              {/* Significance */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-black">
                  <Award size={20} />
                  Significance
                </h3>
                <p className="text-gray-700 leading-relaxed text-md">{argument.significance}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Proponents */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                  <Users size={16} />
                  Key Proponents
                </h4>
                <div className="space-y-2">
                  {argument.proponents.map((proponent, index) => (
                    <div key={index} className="text-sm text-gray-700 bg-white p-2 rounded">
                      {proponent}
                    </div>
                  ))}
                </div>
              </div>

              {/* Criticisms */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                  <MessageSquare size={16} />
                  Common Criticisms
                </h4>
                <div className="space-y-2">
                  {argument.criticisms.map((criticism, index) => (
                    <div key={index} className="text-sm text-gray-700 bg-white p-2 rounded border-l-4 border-red-300">
                      {criticism}
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-black mb-3">Category: {argument.category}</h4>
                <p className="text-sm text-gray-700">
                  {argument.category === 'Classical' && 'Traditional arguments developed by historical philosophers and theologians.'}
                  {argument.category === 'Modern' && 'Contemporary arguments that engage with modern science and philosophy.'}
                  {argument.category === 'Personal' && 'Arguments based on individual experience and subjective evidence.'}
                  {argument.category === 'Philosophical' && 'Abstract philosophical arguments that rely on logic and reason.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GodArgumentsGraph: React.FC = () => {
  const [selectedArgument, setSelectedArgument] = useState<GodArgument | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredData, setFilteredData] = useState(godArguments);

  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(godArguments.map(d => d.category)))];
    return cats;
  }, []);

  // Filter data based on search and category
  useMemo(() => {
    let filtered = godArguments;
    
    if (searchTerm) {
      filtered = filtered.filter(d => 
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.proponents.some(proponent => proponent.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(d => d.category === selectedCategory);
    }
    
    setFilteredData(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="w-full h-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Arguments that God is Real</h1>
        <p className="text-gray-600 text-md max-w-3xl">
          Explore the major philosophical and theological arguments for God's existence from the past 2500 years. 
          Each argument presents different evidence and reasoning for the existence of a divine being.
        </p>
      </div>

     
      {/* Legend */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
        <h3 className="font-semibold mb-3 text-black">Argument Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Classical', 'Modern', 'Personal', 'Philosophical'].map(category => (
            <div key={category} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded"
                style={{ 
                  backgroundColor: category === 'Classical' ? '#3b82f6' :
                  category === 'Modern' ? '#10b981' :
                  category === 'Personal' ? '#8b5cf6' :
                  '#f97316'
                }}
              />
              <span className="text-sm text-black">{category}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 text-sm text-black">
          <strong>Note:</strong> Click on any argument to see detailed information, key points, proponents, and criticisms.
        </div>
      </div>

      {/* Arguments Grid */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredData.map((argument) => (
            <div
              key={argument.id}
              className="text-center cursor-pointer transform hover:scale-105 transition-transform"
              onClick={() => {
                setSelectedArgument(argument);
                setIsModalOpen(true);
              }}
            >
              <div 
                className="w-20 h-20 mx-auto rounded-lg flex items-center justify-center text-3xl mb-3 shadow-md"
                style={{ backgroundColor: argument.color }}
              >
                {argument.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{argument.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                argument.category === 'Classical' ? 'bg-blue-100 text-blue-800' :
                argument.category === 'Modern' ? 'bg-green-100 text-green-800' :
                argument.category === 'Personal' ? 'bg-purple-100 text-purple-800' :
                'bg-orange-100 text-orange-800'
              }`}>
                {argument.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="mt-4 text-sm text-gray-600">
        Showing {filteredData.length} of {godArguments.length} arguments
      </div>

      <Modal
        argument={selectedArgument}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default GodArgumentsGraph;
