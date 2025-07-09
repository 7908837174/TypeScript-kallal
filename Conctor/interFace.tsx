interface ThemeContextText {
    theme: Theme;
    toggleTheme: () => void;
}
export const ThemeContext = () => {
    // You might need to implement the context initialization here
};

const MainContent = () => {
    useEffect(() => {
        // Add your logic for side effects here
    }, [currentPage, keyword]);

    const getFilterProduct = () => {
        let filteredProducts = products;
        if (selectedCategory) {
            filteredProducts = filteredProducts.filter(
                (product) => product.category === selectedCategory // Fixed assignment to comparison
            );
            console.log(filteredProducts);
        }
        return filteredProducts; // Added return statement to ensure the filtered products are returned
    };

    // Search Query
    const getFilterProducts = () => {
        let filterProducts = getFilterProduct(); // Starting with filtered products
        if (searchQuery) { // Fixed spelling: searchQuary -> searchQuery
            filterProducts = filterProducts.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        switch (filter) {
            case "expensive":
                return filterProducts.sort((a, b) => b.price - a.price);
            case "cheap":
                return filterProducts.sort((a, b) => a.price - b.price);
            case "popular": // Fixed spelling: populer -> popular
                return filterProducts.sort((a, b) => b.rating - a.rating); // Assuming "popular" refers to rating or similar
            default:
                return filterProducts;
        }
    };
};
