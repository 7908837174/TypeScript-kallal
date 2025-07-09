import React, { useState } from 'react';

const ProjectList = [/* your project data here */];

const Table = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ country: '', email: '', project: '', status: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value.toLowerCase() });
  };

  const filteredProjects = ProjectList.filter((project) => {
    const searchMatch = searchQuery === "" || Object.values(project).some(
      (value) => String(value).toLowerCase().includes(searchQuery)
    );

    const countryMatch = filters.country === "" || (project.country && project.country.toLowerCase().includes(filters.country));
    const emailMatch = filters.email === "" || (project.email && project.email.toLowerCase().includes(filters.email));
    const projectMatch = filters.project === "" || (project.project && project.project.toLowerCase().includes(filters.project));
    const statusMatch = filters.status === "" || (project.status && project.status.toLowerCase().includes(filters.status));

    return searchMatch && countryMatch && emailMatch && projectMatch && statusMatch;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage; // Calculate endIndex correctly
  const currentProjects = filteredProjects.slice(startIndex, endIndex); // Use endIndex for slicing
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Search and Filter Inputs */}
      <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
      <input type="text" placeholder="Filter by country" value={filters.country} onChange={(e) => handleFilterChange('country', e.target.value)} />
      {/* ... other filter inputs ... */}

      {/* Table */}
      <table>
        <thead>
          <tr>
            {/* Table headers */}
            <th>Name</th>
            <th>Country</th>
            {/* ... other headers ... */}
          </tr>
        </thead>
        <tbody>
          {currentProjects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.country}</td>
              {/* ... other table cells ... */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} onClick={() => handlePageChange(i + 1)} disabled={currentPage === i + 1}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table; 