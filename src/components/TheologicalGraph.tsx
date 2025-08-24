'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import { theologicalHistory, Denomination } from '../data/theologicalHistory';
import { X, Info, Users, MapPin, Calendar, BookOpen, Search, Filter, Users as UsersIcon, Award, Clock } from 'lucide-react';

interface ModalProps {
  denomination: Denomination | null;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ denomination, isOpen, onClose }) => {
  if (!isOpen || !denomination) return null;

    return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4 transition-all duration-300 ease-in-out">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-in-out scale-100">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-black">{denomination.name}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                  {denomination.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {denomination.year} AD
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
                <p className="text-gray-700 leading-relaxed text-md">{denomination.description}</p>
              </div>

              {/* Historical Context */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-black">
                  <BookOpen size={20} />
                  Historical Context
                </h3>
                <p className="text-gray-700 leading-relaxed text-md">{denomination.historicalContext}</p>
              </div>

              {/* Key Beliefs */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">Key Beliefs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {denomination.keyBeliefs.map((belief, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg text-sm">
                      <span className="text-blue-500 font-bold text-lg">•</span>
                      <span className="text-gray-700">{belief}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reasons for Separation */}
              {denomination.reasonsForSeparation.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-red-600">Reasons for Separation</h3>
                  <div className="space-y-3">
                    {denomination.reasonsForSeparation.map((reason, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg text-sm">
                        <span className="text-red-500 font-bold text-lg">•</span>
                        <span className="text-gray-700">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                <h4 className="font-semibold text-black">Quick Facts</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-700"><strong>Origin:</strong> {denomination.geographicOrigin}</span>
                  </div>
                  
                  {denomination.currentFollowers && (
                    <div className="flex items-center gap-2 text-sm">
                      <Users size={16} className="text-gray-500" />
                      <span className="text-gray-700"><strong>Followers:</strong> {denomination.currentFollowers}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-gray-700"><strong>Founded:</strong> {denomination.year} AD</span>
                  </div>
                </div>
              </div>

              {/* Key Figures */}
              {denomination.keyFigures && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-black">
                    <Award size={16} />
                    Key Figures
                  </h4>
                  <div className="space-y-2">
                    {denomination.keyFigures.map((figure, index) => (
                      <div key={index} className="text-sm text-gray-700 bg-white p-2 rounded">
                        {figure}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notable Events */}
              {denomination.notableEvents && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-black">
                    <Clock size={16} />
                    Notable Events
                  </h4>
                  <div className="space-y-2">
                    {denomination.notableEvents.map((event, index) => (
                      <div key={index} className="text-sm text-gray-700 bg-white p-2 rounded">
                        {event}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TheologicalGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedDenomination, setSelectedDenomination] = useState<Denomination | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredData, setFilteredData] = useState(theologicalHistory);

  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(theologicalHistory.map(d => d.category)))];
    return cats;
  }, []);

  // Filter data based on search and category
  useEffect(() => {
    let filtered = theologicalHistory;
    
    if (searchTerm) {
      filtered = filtered.filter(d => 
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.keyBeliefs.some(belief => belief.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(d => d.category === selectedCategory);
    }
    
    setFilteredData(filtered);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current);
    const width = 1200;
    const height = 800;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };

    // Create hierarchical data structure from filtered data
    const createHierarchy = () => {
      const map = new Map();
      const roots: any[] = [];

      filteredData.forEach(d => {
        map.set(d.id, { ...d, children: [] });
      });

      filteredData.forEach(d => {
        const node = map.get(d.id);
        if (d.parentId && map.has(d.parentId)) {
          const parent = map.get(d.parentId);
          if (parent) {
            parent.children.push(node);
          }
        } else {
          roots.push(node);
        }
      });

      return roots[0] || filteredData[0]; // Return the root node or first item if no hierarchy
    };

    const root = createHierarchy();

    // Create tree layout
    const tree = d3.tree<typeof root>()
      .size([height - margin.top - margin.bottom, width - margin.left - margin.right])
      .separation((a, b) => (a.parent === b.parent ? 1 : 1.2));

    const hierarchy = d3.hierarchy(root);
    const treeData = tree(hierarchy);

    // Create zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 3])
      .on("zoom", (event) => {
        container.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Create container for the graph
    const container = svg.append("g");

    // Create links
    const links = container.selectAll(".link")
      .data(treeData.links())
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", (d: any) => {
        const linkGenerator = d3.linkHorizontal()
          .x((d: any) => d.y)
          .y((d: any) => d.x);
        return linkGenerator(d);
      })
      .attr("fill", "none")
      .attr("stroke", "#999")
      .attr("stroke-width", 2)
      .attr("opacity", 0.6);

    // Create nodes
    const nodes = container.selectAll(".node")
      .data(treeData.descendants())
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d: any) => `translate(${d.y},${d.x})`);

    // Add circles for nodes
    nodes.append("circle")
      .attr("r", (d: any) => d.data.size / 2)
      .attr("fill", (d: any) => d.data.color)
      .attr("stroke", "#fff")
      .attr("stroke-width", 3)
      .style("cursor", "pointer")
      .on("mouseover", function(event, d: any) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", (d.data.size / 2) + 5)
          .attr("stroke-width", 4);
      })
      .on("mouseout", function(event, d: any) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", d.data.size / 2)
          .attr("stroke-width", 3);
      })
      .on("click", (event, d: any) => {
        setSelectedDenomination(d.data);
        setIsModalOpen(true);
      });

    // Add labels
    nodes.append("text")
      .attr("dy", (d: any) => d.data.size / 2 + 20)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "#333")
      .text((d: any) => d.data.name)
      .style("pointer-events", "none");

    // Add year labels
    nodes.append("text")
      .attr("dy", (d: any) => d.data.size / 2 + 35)
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("fill", "#666")
      .text((d: any) => `${d.data.year} AD`)
      .style("pointer-events", "none");

  }, [filteredData]);

  return (
    <div className="w-full h-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Church History & Denominations</h1>
        <p className="text-gray-600 text-md max-w-3xl">
          Explore the rich history of Christianity through this interactive timeline. 
          Click on any denomination to learn about its beliefs, history, and reasons for separation.
        </p>
      </div>

      <div className="mb-4 p-4 border border-gray-200 bg-white rounded-lg">
        <h3 className="font-semibold mb-3 text-black">Categories</h3>
        <div className="flex flex-wrap gap-4">
          {categories.slice(1).map(category => {
            const sampleDenom = theologicalHistory.find(d => d.category === category);
            return (
              <div key={category} className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: sampleDenom?.color }}
                />
                <span className="text-sm text-gray-700">{category}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Graph */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <svg
          ref={svgRef}
          width="100%"
          height="800"
          style={{ minHeight: '800px' }}
        />
      </div>

      {/* Results count */}
      <div className="mt-4 text-sm text-gray-600">
        Showing {filteredData.length} of {theologicalHistory.length} denominations
      </div>

      <Modal
        denomination={selectedDenomination}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default TheologicalGraph;
