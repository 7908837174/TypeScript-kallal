import React, { useState } from 'react';

const ProjectList = [ /* your project data here */ ];

const ProjectListApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ country: '', email: '', project: '' });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toUpperCase()); // Convert to uppercase
  };

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value.toUpperCase() }); // Convert to uppercase
  };

  const filteredProjects = ProjectList.filter((project) => {
    const searchMatch = searchQuery === "" || Object.values(project).some(
      (value) => String(value).toUpperCase().includes(searchQuery) // Use uppercase for comparison
    );

    const countryMatch = filters.country === "" || (project.country && project.country.toUpperCase().includes(filters.country)); // Use uppercase
    const emailMatch = filters.email === "" || (project.email && project.email.toUpperCase().includes(filters.email)); // Use uppercase
    const projectMatch = filters.project === "" || (project.project && project.project.toUpperCase().includes(filters.project)); // Use uppercase

    return searchMatch && countryMatch && emailMatch && projectMatch;
  });

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {/* Filter Inputs */}
      <input
        type="text"
        placeholder="Filter by country"
        value={filters.country}
        onChange={(e) => handleFilterChange('country', e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by email"
        value={filters.email}
        onChange={(e) => handleFilterChange('email', e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by project"
        value={filters.project}
        onChange={(e) => handleFilterChange('project', e.target.value)}
      />

      <div className="p-4 w-[93%] ml-[5rem]">
        {filteredProjects.map((project) => (
          <div key={project.id}>{/* Make sure each project has a unique ID */}
            {/* Display project details */}
            <h3>{project.name}</h3> {/* Or project.name.toUpperCase() if you want to display uppercase */}
            <p>{project.country}</p> {/* Or project.country.toUpperCase() */}
            {/* ... other project details */}
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <p>No projects found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectListApp;