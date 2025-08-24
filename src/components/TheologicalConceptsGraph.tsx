'use client';

import { useState, useMemo } from 'react';
import { theologicalConcepts, TheologicalConcept } from '../data/theologicalConcepts';
import { X, Info, BookOpen, Search, Filter, Award, Star, Book, Zap, Heart, Users, Shield } from 'lucide-react';

interface ModalProps {
  concept: TheologicalConcept | null;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ concept, isOpen, onClose }) => {
  if (!isOpen || !concept) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Doctrine': return <Book size={20} />;
      case 'Sacrament': return <Heart size={20} />;
      case 'Practice': return <Zap size={20} />;
      case 'Philosophy': return <Award size={20} />;
      case 'History': return <BookOpen size={20} />;
      case 'Ethics': return <Shield size={20} />;
      default: return <Info size={20} />;
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'Essential': return 'bg-red-100 text-red-800';
      case 'Important': return 'bg-yellow-100 text-yellow-800';
      case 'Secondary': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4 transition-all duration-300 ease-in-out">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-in-out scale-100">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{concept.name}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                  {concept.category}
                </span>
                <span className={`px-3 py-1 rounded-full font-medium ${getImportanceColor(concept.importance)}`}>
                  {concept.importance}
                </span>
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
                <p className="text-gray-700 leading-relaxed text-md">{concept.description}</p>
              </div>

              {/* Historical Development */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-black">
                  <BookOpen size={20} />
                  Historical Development
                </h3>
                <p className="text-gray-700 leading-relaxed text-md">{concept.historicalDevelopment}</p>
              </div>

              {/* Biblical Basis */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">Biblical Basis</h3>
                <div className="space-y-3">
                  {concept.biblicalBasis.map((verse, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg text-sm">
                      <span className="text-green-500 font-bold text-md">•</span>
                      <span className="text-gray-700 font-mono">{verse}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Denominational Views */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">Denominational Views</h3>
                <div className="space-y-3">
                  {concept.denominationalViews.map((view, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg text-sm">
                      <span className="text-blue-500 font-bold text-md">•</span>
                      <span className="text-gray-700">{view}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Category Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                  {getCategoryIcon(concept.category)}
                  Category: {concept.category}
                </h4>
                <p className="text-sm text-gray-700">
                  {concept.category === 'Doctrine' && 'Core theological beliefs and teachings of Christianity.'}
                  {concept.category === 'Sacrament' && 'Sacred rituals and ceremonies of the church.'}
                  {concept.category === 'Practice' && 'Religious practices and spiritual disciplines.'}
                  {concept.category === 'Philosophy' && 'Theological and philosophical concepts.'}
                  {concept.category === 'History' && 'Historical developments and events in theology.'}
                  {concept.category === 'Ethics' && 'Moral and ethical teachings and principles.'}
                </p>
              </div>

              {/* Importance */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                  <Star size={16} />
                  Importance: {concept.importance}
                </h4>
                <p className="text-sm text-gray-700">
                  {concept.importance === 'Essential' && 'Core concept that every Christian should understand.'}
                  {concept.importance === 'Important' && 'Significant concept for deeper theological understanding.'}
                  {concept.importance === 'Secondary' && 'Specialized concept for advanced theological study.'}
                </p>
              </div>

              {/* Related Terms */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Related Terms</h4>
                <div className="flex flex-wrap gap-2">
                  {concept.relatedTerms.map((term, index) => (
                    <span key={index} className="px-2 py-1 bg-white text-sm text-gray-700 rounded border">
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TheologicalConceptsGraph: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<TheologicalConcept | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImportance, setSelectedImportance] = useState<string>('All');
  const [filteredData, setFilteredData] = useState(theologicalConcepts);

  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(theologicalConcepts.map(d => d.category)))];
    return cats;
  }, []);

  const importanceLevels = useMemo(() => {
    const levels = ['All', ...Array.from(new Set(theologicalConcepts.map(d => d.importance)))];
    return levels;
  }, []);

  // Filter data based on search and filters
  useMemo(() => {
    let filtered = theologicalConcepts;
    
    if (searchTerm) {
      filtered = filtered.filter(d => 
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.biblicalBasis.some(verse => verse.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(d => d.category === selectedCategory);
    }

    if (selectedImportance !== 'All') {
      filtered = filtered.filter(d => d.importance === selectedImportance);
    }
    
    setFilteredData(filtered);
  }, [searchTerm, selectedCategory, selectedImportance]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Doctrine': return <Book size={20} />;
      case 'Sacrament': return <Heart size={20} />;
      case 'Practice': return <Zap size={20} />;
      case 'Philosophy': return <Award size={20} />;
      case 'History': return <BookOpen size={20} />;
      case 'Ethics': return <Shield size={20} />;
      default: return <Info size={20} />;
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'Essential': return 'border-red-200 bg-red-50';
      case 'Important': return 'border-yellow-200 bg-yellow-50';
      case 'Secondary': return 'border-gray-200 bg-gray-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="w-full h-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Theological Concepts & Terms</h1>
        <p className="text-gray-600 text-md max-w-3xl">
          Explore essential theological concepts, doctrines, and terms that every student of Christianity should understand. 
          Click on any concept to learn about its biblical basis, historical development, and denominational perspectives.
        </p>
      </div>


      {/* Legend */}
      <div className="mb-4 p-4 bg-white rounded-lg border border-gray-200">
        <h3 className="font-semibold mb-3 text-black">Categories & Importance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2 text-black">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {categories.slice(1).map(category => (
                <span key={category} className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-black">Importance Levels</h4>
            <div className="flex flex-wrap gap-2">
              {importanceLevels.slice(1).map(level => (
                <span key={level} className={`px-2 py-1 text-sm rounded ${
                  level === 'Essential' ? 'bg-red-100 text-red-800' :
                  level === 'Important' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {level}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Concepts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((concept) => (
          <div
            key={concept.id}
            className={`p-6 rounded-lg border-2 cursor-pointer transition-all hover:shadow-lg ${getImportanceColor(concept.importance)}`}
            onClick={() => {
              setSelectedConcept(concept);
              setIsModalOpen(true);
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2 text-black">
                {getCategoryIcon(concept.category)}
                <span className="text-sm font-medium">{concept.category}</span>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                concept.importance === 'Essential' ? 'bg-red-200 text-red-800' :
                concept.importance === 'Important' ? 'bg-yellow-200 text-yellow-800' :
                'bg-gray-200 text-gray-800'
              }`}>
                {concept.importance}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">{concept.name}</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {concept.description.length > 150 
                ? `${concept.description.substring(0, 150)}...` 
                : concept.description
              }
            </p>
            
            <div className="flex flex-wrap gap-1">
              {concept.relatedTerms.slice(0, 3).map((term, index) => (
                <span key={index} className="px-2 py-1 bg-white text-xs text-gray-600 rounded border">
                  {term}
                </span>
              ))}
              {concept.relatedTerms.length > 3 && (
                <span className="px-2 py-1 bg-white text-xs text-gray-500 rounded border">
                  +{concept.relatedTerms.length - 3} more
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Results count */}
      <div className="mt-8 text-sm text-gray-600">
        Showing {filteredData.length} of {theologicalConcepts.length} theological concepts
      </div>

      <Modal
        concept={selectedConcept}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default TheologicalConceptsGraph;
