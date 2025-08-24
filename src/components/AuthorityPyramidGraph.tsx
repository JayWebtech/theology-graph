'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { authorityPyramid, AuthoritySource } from '../data/authorityPyramid';
import { X, Info, BookOpen, Search, Filter, Award, Layers, Book } from 'lucide-react';

interface ModalProps {
  authority: AuthoritySource | null;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ authority, isOpen, onClose }) => {
  if (!isOpen || !authority) return null;

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-gray-100 text-gray-800';
      case 1: return 'bg-yellow-100 text-yellow-800';
      case 2: return 'bg-orange-100 text-orange-800';
      case 3: return 'bg-red-100 text-red-800';
      case 4: return 'bg-purple-100 text-purple-800';
      case 5: return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4 transition-all duration-300 ease-in-out">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-in-out scale-100">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{authority.name}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className={`px-3 py-1 rounded-full font-medium ${getLevelColor(authority.level)}`}>
                  {authority.level === 0 ? 'God' : `Level ${authority.level}`}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                  {authority.category}
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
                <p className="text-gray-700 leading-relaxed text-md">{authority.description}</p>
              </div>

              {/* Historical Context */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-black">
                  <BookOpen size={20} />
                  Historical Context
                </h3>
                <p className="text-gray-700 leading-relaxed text-md">{authority.historicalContext}</p>
              </div>

              {/* Significance */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-black">
                  <Award size={20} />
                  Significance
                </h3>
                <p className="text-gray-700 leading-relaxed text-md">{authority.significance}</p>
              </div>

              {/* Examples */}
              {authority.examples.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-black">Examples</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {authority.examples.map((example, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg text-sm">
                        <span className="text-blue-500 font-bold text-md">•</span>
                        <span className="text-gray-700">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Level Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                  <Layers size={16} />
                  Authority Level: {authority.level === 0 ? 'God' : authority.level}
                </h4>
                <p className="text-sm text-gray-700">
                  {authority.level === 0 && 'The source of all truth and ultimate authority.'}
                  {authority.level === 1 && 'The inspired and infallible Word of God.'}
                  {authority.level === 2 && 'Universal creeds accepted across all major Christian traditions.'}
                  {authority.level === 3 && 'Reformed confessional standards that bind church leaders.'}
                  {authority.level === 4 && 'Reformed pastors and theologians with moral authority.'}
                  {authority.level === 5 && 'Laypeople with no formal teaching authority.'}
                </p>
              </div>

              {/* Category Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                  <Book size={16} />
                  Category: {authority.category}
                </h4>
                <p className="text-sm text-gray-700">
                  {authority.category === 'God' && 'The source of all truth and ultimate authority.'}
                  {authority.category === 'Scripture' && 'The inspired and infallible Word of God.'}
                  {authority.category === 'Ecumenical' && 'Accepted across all major Christian traditions.'}
                  {authority.category === 'Reformed' && 'Reformed confessional documents and standards.'}
                  {authority.category === 'Pastors' && 'Reformed pastors, theologians, and church leaders.'}
                  {authority.category === 'Laypeople' && 'Ordinary church members and lay leaders.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthorityPyramidGraph: React.FC = () => {
  const [selectedAuthority, setSelectedAuthority] = useState<AuthoritySource | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredData, setFilteredData] = useState(authorityPyramid);

  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(authorityPyramid.map(d => d.category)))];
    return cats;
  }, []);

  // Filter data based on search and category
  useEffect(() => {
    let filtered = authorityPyramid;
    
    if (searchTerm) {
      filtered = filtered.filter(d => 
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.examples.some(example => example.toLowerCase().includes(searchTerm.toLowerCase()))
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
        <h1 className="text-2xl font-bold text-gray-900 mb-3">The Pyramid of Authority</h1>
        <p className="text-lg font-semibold text-gray-700 mb-2">(For Reformed Christians)</p>
        <p className="text-gray-600 text-md max-w-3xl">
          Explore the hierarchical structure of theological authority in Reformed Christianity, from God as the source of all truth 
          down to laypeople. This pyramid shows how Reformed Christians understand and organize theological authority.
        </p>
      </div>

      {/* Pyramid */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center space-y-4">
          {/* God Level */}
          {filteredData.find(d => d.level === 0) && (
            <div className="text-center">
              <div 
                className="w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-lg cursor-pointer transform hover:scale-105 transition-transform"
                style={{ backgroundColor: filteredData.find(d => d.level === 0)?.color }}
                onClick={() => {
                  setSelectedAuthority(filteredData.find(d => d.level === 0) || null);
                  setIsModalOpen(true);
                }}
              >
                GOD
              </div>
              <p className="text-sm text-gray-600 mt-2">The source of all truth</p>
            </div>
          )}

          {/* Scripture Level */}
          {filteredData.find(d => d.level === 1) && (
            <div className="text-center">
              <div 
                className="w-40 h-16 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transform hover:scale-105 transition-transform"
                style={{ backgroundColor: filteredData.find(d => d.level === 1)?.color }}
                onClick={() => {
                  setSelectedAuthority(filteredData.find(d => d.level === 1) || null);
                  setIsModalOpen(true);
                }}
              >
                Scripture
              </div>
              <p className="text-sm text-gray-600 mt-2">Bible (66 books)</p>
              <p className="text-xs text-gray-500">Infallible because it's God's Word</p>
            </div>
          )}

          {/* Ecumenical Creeds Level */}
          {filteredData.find(d => d.level === 2) && (
            <div className="text-center">
              <div 
                className="w-48 h-16 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transform hover:scale-105 transition-transform"
                style={{ backgroundColor: filteredData.find(d => d.level === 2)?.color }}
                onClick={() => {
                  setSelectedAuthority(filteredData.find(d => d.level === 2) || null);
                  setIsModalOpen(true);
                }}
              >
                Ecumenical Creeds
              </div>
              <p className="text-sm text-gray-600 mt-2">Nicene Creed, Apostle's Creed, Athanasian Creed</p>
              <p className="text-xs text-gray-500">Not infallible but 100% true since they represent the universal Church</p>
            </div>
          )}

          {/* Reformed Confessions Level */}
          {filteredData.find(d => d.level === 3) && (
            <div className="text-center">
              <div 
                className="w-56 h-16 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transform hover:scale-105 transition-transform"
                style={{ backgroundColor: filteredData.find(d => d.level === 3)?.color }}
                onClick={() => {
                  setSelectedAuthority(filteredData.find(d => d.level === 3) || null);
                  setIsModalOpen(true);
                }}
              >
                Reformed Confessions
              </div>
              <p className="text-sm text-gray-600 mt-2">Westminster Standards, Scots Confession, Canons of Dort, Barmen, 2nd Helvetic Confession</p>
              <p className="text-xs text-gray-500">The standard authority of our churches that our leaders are bound to</p>
            </div>
          )}

          {/* Reformed Pastors/Theologians Level */}
          {filteredData.find(d => d.level === 4) && (
            <div className="text-center">
              <div 
                className="w-64 h-16 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transform hover:scale-105 transition-transform"
                style={{ backgroundColor: filteredData.find(d => d.level === 4)?.color }}
                onClick={() => {
                  setSelectedAuthority(filteredData.find(d => d.level === 4) || null);
                  setIsModalOpen(true);
                }}
              >
                Ref. Pastors/Theologians
              </div>
              <p className="text-sm text-gray-600 mt-2">elders, pastor, presbytery, Calvin, Knox, Rutherford, Augustine, Nevin, Lewis</p>
              <p className="text-xs text-gray-500">Moral authority, but subject to correction</p>
            </div>
          )}

          {/* Laypeople Level */}
          {filteredData.find(d => d.level === 5) && (
            <div className="text-center">
              <div 
                className="w-72 h-16 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transform hover:scale-105 transition-transform"
                style={{ backgroundColor: filteredData.find(d => d.level === 5)?.color }}
                onClick={() => {
                  setSelectedAuthority(filteredData.find(d => d.level === 5) || null);
                  setIsModalOpen(true);
                }}
              >
                Laypeople
              </div>
              <p className="text-sm text-gray-600 mt-2">mentors, Reformed instagram pages, You, probably, Me</p>
              <p className="text-xs text-gray-500">No real authority</p>
            </div>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="mt-4 text-sm text-gray-600">
        Showing {filteredData.length} of {authorityPyramid.length} authority levels
      </div>

      <Modal
        authority={selectedAuthority}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default AuthorityPyramidGraph;
