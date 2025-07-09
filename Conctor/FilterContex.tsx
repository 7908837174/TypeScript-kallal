import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    FC,
    ChangeEvent,
  } from "react";
  
  // 1. Define the shape of your context
  interface FilterContextType {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    minPrice: number | undefined;
    setMinPrice: (price: number | undefined) => void;
    maxPrice: number | undefined;
    setMaxPrice: (price: number | undefined) => void;
    keyword: string;
    setKeyword: (keyword: string) => void;
  }
  
  // 2. Create the context
  const FilterContext = createContext<FilterContextType | undefined>(undefined);
  
  // 3. Provider component
  export const FilterProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
    const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
    const [keyword, setKeyword] = useState<string>("");
  
    return (
      <FilterContext.Provider
        value={{
          searchQuery,
          setSearchQuery,
          selectedCategory,
          setSelectedCategory,
          minPrice,
          setMinPrice,
          maxPrice,
          setMaxPrice,
          keyword,
          setKeyword,
        }}
      >
        {children}
      </FilterContext.Provider>
    );
  };
  
  // 4. Custom hook to use the filter context
  export const useFilter = () => {
    const context = useContext(FilterContext);
    if (context === undefined) {
      throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
  };
  
  // 5. Optional: Helper hook for handlers (can be used in components)
  export const useFilterHandlers = () => {
    const {
      setMinPrice,
      setMaxPrice,
      setSearchQuery,
      setSelectedCategory,
      setKeyword,
    } = useFilter();
  
    const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setMinPrice(value ? parseFloat(value) : undefined);
    };
  
    const handleKeywordClick = (keyword: string) => {
      setKeyword(keyword);
    };
  
    const handleResetFilters = () => {
      setSearchQuery("");
      setSelectedCategory("");
      setMinPrice(undefined);
      setMaxPrice(undefined);
      setKeyword("");
    };
  
    return {
      handleMinPriceChange,
      handleKeywordClick,
      handleResetFilters,
    };
  };
  
  // 6. Example usage component
  export const FilterControls = () => {
    const { keyword, minPrice } = useFilter();
    const {
      handleMinPriceChange,
      handleKeywordClick,
      handleResetFilters,
    } = useFilterHandlers();
  
    return (
      <div className="p-4 bg-gray-100 rounded">
        <input
          type="number"
          placeholder="Min Price"
          onChange={handleMinPriceChange}
          value={minPrice ?? ""}
          className="mb-2 block p-2 border rounded w-full"
        />
        <button
          onClick={() => handleKeywordClick("apple")}
          className="mb-2 block w-full bg-blue-500 text-white py-2 rounded"
        >
          Set Keyword: Apple
        </button>
        <button
          onClick={handleResetFilters}
          className="block w-full bg-red-500 text-white py-2 rounded"
        >
          Reset Filters
        </button>
        <p className="mt-2">Selected Keyword: <strong>{keyword}</strong></p>
      </div>
    );
  };

  

//   import React from "react";
// import { FilterProvider, FilterControls } from "./FilterContext";

// function App() {
//   return (
//     <FilterProvider>
//       <div className="max-w-md mx-auto mt-10">
//         <h1 className="text-2xl font-bold mb-4">Product Filter</h1>
//         <FilterControls />
//       </div>
//     </FilterProvider>
//   );
// }

// export default App;


