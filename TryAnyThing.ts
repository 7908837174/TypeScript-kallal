// Example of a Computer interface and implementation
interface Computer {
    name: string;
    ram: number;
    processor?: string;
}

const computerExample: Computer = {
    name: "Gaming PC",
    ram: 16,
    processor: "Intel i7"
};

console.log(`Computer: ${computerExample.name}, RAM: ${computerExample.ram}GB`);

////////////////////////////////////////////

// Example of a Movie interface with optional properties
interface Movie {
    readonly name: string;
    ratings: number;
    genre?: string;
}

const exampleMovie: Movie = {
    name: "The Matrix",
    ratings: 8.7,
    genre: "Sci-Fi"
};

console.log(`Movie: ${exampleMovie.name}, Rating: ${exampleMovie.ratings}, Genre: ${exampleMovie.genre}`);