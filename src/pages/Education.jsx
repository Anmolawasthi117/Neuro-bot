import React, { useState, useEffect } from 'react';
import ContentSection from '../components/ContentSection';
import SearchBar from '../components/SearchBar';
import Roadmap from '../components/Roadmap';
import GearList from '../components/GearList';
import educationContent from '../utils/educationContent.json';

const Education = () => {
  const [content, setContent] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setContent(educationContent.sections);
  }, []);

  const filteredSections = content.filter((section) =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.projects.some((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main className="max-w-4xl mx-auto p-4">
        <Roadmap steps={educationContent.roadmapSteps} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {filteredSections.length > 0 ? (
          filteredSections.map((section, index) => (
            <ContentSection key={index} {...section} />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-xl font-poppins text-gray-400">
              {searchQuery ? "No matches found—try something else!" : "Type to start searching!"}
            </p>
          </div>
        )}
        <GearList gear={educationContent.gear} />
      </main>
    </div>
  );
};

export default Education;