'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import { independentChurches, IndependentChurch } from '../data/independentChurches';
import { X, Info, Users, MapPin, Calendar, BookOpen, Search, Filter, Award, Clock, User } from 'lucide-react';

interface ModalProps {
  church: IndependentChurch | null;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ church, isOpen, onClose }) => {
  if (!isOpen || !church) return null;

  return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4 transition-all duration-300 ease-in-out">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-in-out scale-100">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{church.name}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-medium">
                  {church.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {church.year} AD
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
                <p className="text-gray-700 leading-relaxed text-md">{church.description}</p>
              </div>

              {/* Historical Context */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-black">
                  <BookOpen size={20} />
                  Historical Context
                </h3>
                <p className="text-gray-700 leading-relaxed text-md">{church.historicalContext}</p>
              </div>

              {/* Key Beliefs */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">Key Beliefs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {church.keyBeliefs.map((belief, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg text-sm">
                      <span className="text-blue-500 font-bold text-md">•</span>
                      <span className="text-gray-700">{belief}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unique Practices */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-600">Unique Practices</h3>
                <div className="space-y-3">
                  {church.uniquePractices.map((practice, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg text-sm">
                      <span className="text-purple-500 font-bold text-md">•</span>
                      <span className="text-gray-700">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                <h4 className="font-semibold text-black">Quick Facts</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-700"><strong>Origin:</strong> {church.geographicOrigin}</span>
                  </div>
                  
                  {church.currentFollowers && (
                    <div className="flex items-center gap-2 text-sm">
                      <Users size={16} className="text-gray-500" />
                      <span className="text-gray-700"><strong>Followers:</strong> {church.currentFollowers}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-gray-700"><strong>Founded:</strong> {church.year} AD</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <User size={16} className="text-gray-500" />
                    <span className="text-gray-700"><strong>Founder:</strong> {church.founder}</span>
                  </div>
                </div>
              </div>

              {/* Category Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Category: {church.category}</h4>
                <p className="text-sm text-gray-700">
                  {church.category === 'Adventist' && 'Groups emphasizing the second coming of Christ and end-time prophecies.'}
                  {church.category === 'Restorationist' && 'Movements seeking to restore the early church or biblical Christianity.'}
                  {church.category === 'New Religious Movement' && 'Modern religious movements with unique beliefs and practices.'}
                  {church.category === 'Christian Science' && 'Religious movements emphasizing spiritual healing and metaphysical concepts.'}
                  {church.category === 'Unification' && 'Movements with unique messianic or unification themes.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const IndependentChurchesGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedChurch, setSelectedChurch] = useState<IndependentChurch | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredData, setFilteredData] = useState(independentChurches);

  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(independentChurches.map(d => d.category)))];
    return cats;
  }, []);

  // Filter data based on search and category
  useEffect(() => {
    let filtered = independentChurches;
    
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
    const height = 600;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };

    // Create central node and links
    const centralNode = { id: "independent-churches", name: "Independent Churches", x: width / 2, y: height / 2, size: 60, color: "#9b59b6" };
    const nodes = [centralNode, ...filteredData];
    
    // Create links from central node to all churches
    const links = filteredData.map(church => ({
      source: centralNode.id,
      target: church.id
    }));

    // Create force simulation
    const simulation = d3.forceSimulation(nodes as any)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(150))
      .force("charge", d3.forceManyBody().strength(-1000))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius((d: any) => d.size / 2 + 20));

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
    const linkElements = container.selectAll(".link")
      .data(links)
      .enter()
      .append("line")
      .attr("class", "link")
      .attr("stroke", "#999")
      .attr("stroke-width", 2)
      .attr("opacity", 0.6);

    // Create nodes
    const nodeElements = container.selectAll(".node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .style("cursor", "pointer");

    // Add circles for nodes
    nodeElements.append("circle")
      .attr("r", (d: any) => d.size / 2)
      .attr("fill", (d: any) => d.color)
      .attr("stroke", "#fff")
      .attr("stroke-width", 3)
      .on("mouseover", function(event, d: any) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", (d.size / 2) + 5)
          .attr("stroke-width", 4);
      })
      .on("mouseout", function(event, d: any) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", d.size / 2)
          .attr("stroke-width", 3);
      })
      .on("click", (event, d: any) => {
        if (d.id !== "independent-churches") {
          setSelectedChurch(d);
          setIsModalOpen(true);
        }
      });

    // Add labels
    nodeElements.append("text")
      .attr("dy", (d: any) => d.size / 2 + 20)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "#333")
      .text((d: any) => d.name)
      .style("pointer-events", "none");

    // Add year labels for churches (not central node)
    nodeElements.filter((d: any) => d.id !== "independent-churches")
      .append("text")
      .attr("dy", (d: any) => d.size / 2 + 35)
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("fill", "#666")
      .text((d: any) => `${d.year} AD`)
      .style("pointer-events", "none");

    // Update positions on simulation tick
    simulation.on("tick", () => {
      linkElements
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      nodeElements.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

  }, [filteredData]);

  return (
    <div className="w-full h-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Independent Churches & Religious Movements</h1>
        <p className="text-gray-600 text-md max-w-3xl">
          Explore churches and religious movements that don't trace their origins to traditional church history. 
          These groups often have unique beliefs, practices, and historical contexts.
        </p>
      </div>

      {/* Legend */}
      <div className="mb-4 p-4 bg-white rounded-lg border border-gray-200">
        <h3 className="font-semibold mb-3 text-black">Categories</h3>
        <div className="flex flex-wrap gap-4">
          {categories.slice(1).map(category => {
            const sampleChurch = independentChurches.find(d => d.category === category);
            return (
              <div key={category} className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: sampleChurch?.color }}
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
          height="600"
          style={{ minHeight: '600px' }}
        />
      </div>

      {/* Results count */}
      <div className="mt-4 text-sm text-gray-600">
        Showing {filteredData.length} of {independentChurches.length} churches/movements
      </div>

      <Modal
        church={selectedChurch}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default IndependentChurchesGraph;
