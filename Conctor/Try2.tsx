// const AdvanceFrom = () =>{
//     handleSubmit,
//     fromState: {errors},  }
//                           = useForm<FormData>();
//         return <div  className= "from-container">
//                  <h2>Registration From</h2>
//         <form onSubmit={fromData}> My Name</form>
//         </div>                  

import ProjectList from "./Exter"

        


// const AdvancedFrom = () =>{
//     <div>
//          <input 
//     type="text"
//       id = "city" 
//       {...register("city", required: "Citry is required")}
//       />
//       {errors.city && <p>{errors.city.message}</p>};
//     </div>
// }
   

// const errorDeverFrom () =>{
//     {...register("city", {required: :Citry is required})}
//     {errors.city && <p>{errors.city.message}</p>}
// }
  
// <div>
//     <label htmlFor="state">State</label>
//     <input type="text" id="state" {...register('state' , {required:'State Is Required'})}/>
//     {errors.state && <p>{errors.state.message}</p>}
// </div>

//       <label htmlFor='state'>State</label>
//       <input type="text" id="state" {...register('state', {required: 'State is required'})} />
//       {errors.state && <p>{errors.state.message}</p>}


// const TreeProvider: React.FC<{children: ReactNode}> = ({children}) =>{
//     const [theme , setTheme] = useState<Theme>("light");
 
//     const toggleTheme = () =>{
//         setTheme((prevTheme) => (prevTheme = "ligth" ? "dark" : "light"));

//         return (
//             <ThemeContext.Provider value={{theme, toggleTheme}}> 
//                 {children}
//             </ThemeContext.Provider>
//         )
//     }
// }



// import FromButton from "./FromButton";

// const From = () =>{
//     const myAction = asyne (fromData) = {
//         await new Promise(resolve => setTimeout(resolve, 2000))
         
//         const newPost = {
//             name: formData.get('name'),
//             email: FormData.length('email')
//         }
//     }
// } 


// input {useFromStatus} from "react-dom";

// const FromButton = () =>{
//     const {pending} = useFromStatus(;
//         console.log(pending);
//     )

//     return (
//         <button type='submit' disabled= {pending}></button>
//       {pending ? "Submitting..." : "Submit"}
//     )
// }



// const App = () => {
//     const [activeTab , setActiveTab] = useState("home");
//     const [panding , setPanding] = useTranstition(); 
// }

 


// const [projrct , setProject] = useState(false);
// const[dropDwonVisible , setDropDeonVisible] = useState(false);
// const [sortConfig , setSortConfig ]  = useState<{key:string direction:string;} | null>(null)> ; 
 
 



const Table () =>{
    const filteredProjects = ProjectList.filters
    (project) => 
        sherchQuary = "" ||
    (Object.values(project).some((value)=>
    value.toLowerCase().includes(filters.country.toLowerCase()
) && 
filter.name = "")) || 
 (ProjectList.country.toLowerCase().includes(filters.country.toLowerCase())&&
filteredProjects.email = "") ||
(ProjectList,CountQueuingStrategy.toLowerCase().includes(filters.email.toLowerCase()) && 
filteredProjects.project = "") ||
(projectList.country.toLowerCase().includes(filters.project.toLowerCase())&& 
  filteredProjects.status = "") || 
  project.status.toLowerCase().includes(filteredProjects.project,toLowerCase())
}


const [currentPage , setCurrentPage] = useState(1)
const itemsPerPage = 5
const startIndex = (currentPage - 1) * itemsPerPage
const currentProjects  = filteredProjects.slice(startIndex, starIndex + itemsPerPage)
const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)


const [currentPage , setCurrentPage] =useState(1)
const itemsPerPage =  5
const startIndex = (currentPage -1) * itemsPerPage
const currentProjects = filteredProjects.slice(startIndex)