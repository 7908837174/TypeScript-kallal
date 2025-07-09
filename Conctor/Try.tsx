// const updateAge = (age:string) =>{
//     setProfile(prevProfile => ({ ...prevProfile , age: +age}));
// }

// const updateProfile = (email: string) =>{
//     setProfile(prevProfile => ({ ...prevProfile , email: +email })); 
// }



//  const From = () => {
//     const handleubmit = (event : FormEvent<HTMLFromElement> =>{
//         event.preventDefault() 
//         const nameValue = name.current!.value;
//         const emailValue = email.current!.value;
//         const passeordValue = password.current!.value;
//     })
//  }
//  setSubmittedData ({
//     name: nameValue;
//     email : email.value;
//     password : password.value;
//  })


// const handleFocus = () => {
//     inputRef.current?.focus();
// }

// const ContactFrom = () => {
//     const handleChange = (e: changeEvent<HTMLInputElement>) =>{
//         const {name, value} = e.tergat;
//         setFormData((prevState) => ({ ...prevState, [name]:value}));
//     };
//     const hendaleSubmit = (e: FromEvent<HTMLFromElement> =>{
//         e.perventDefault();
//         console.log("From Submitted" , formData);
//     });
//  }

// type stete = {count : number};
// type Action = { typr: :"Increment"} | {type: "Drecement"};




//  export type counterAction = IncermentAction | DricmentAction;
//  export const Reducer = (state: counterAction , action: counterAction) =>{
//     switch action.....
//  }


//  const MyComponent = () =>{
//     userEffect(() =>{
//         const fatchData = async fatch("jiowjfoiwjf9wfm//finfriu2rion");
//         const result = await response.json();
//         setData(result);
//     } catch(error){
//         console.log("This is The error",error );
//     })
//  }



// const [error, setError] = useState<string | null >(null);


// if (loading) return <h1>Loading...</h1>
//  if (error) return <h1>Error: {error}</h1>



// useEffect (() =>{
//     const fatchUsers = async ()  =>{
//         const repronse = await fetch(
//        "//rjoi3wnwww.wk3mkrmwne"
//         );
//         if(!repronse.ok)throw new Error ("Network repronce was not ok");
//         const data: User[] = await repronse.json();
//         setUsers(data); 
//     }catch (error){
//         setError(error instanceof Error ? error.message: "An Error occorred");
//     } finally {
//         setLoading(false);
//     };
// })


// const From = () =>{
//     <input 
//     type=" Password"
//     {...register("password", {
//         minLength: {
//             value: 8,
//             message: "Password must be at least * charecters",
//         },
//     })}
//     />
// }
 
// const filteredProjects = project.filter((project) =>{
//     searchQuery = "" || Object.values(project).some((value) =>{
//         value.toLowetrCase().includes(searchQuery.toLowerCase()) || 
// project.cuntry.toLowerCase().includes(filter.country.toLowerCase()) && filter.email = '' || project.email.toLowerCase(filter.email.toLowerCase()) && filter.project = "" || project.project.toLowerCase().
//     }) 
// })

