import axios, {AxiosResponse} from "axios";

interface Todo {
    userId : number;
    id : number;
    title : string;
    completed : boolean;
}

const fetchData = async () =>{
    try{
        const responce : AxiosResponse<Todo> = await axios.get(
            "https://app.outlier.ai/projects"
        );
        console.log("Todo", responce.data);
    }catch(error: any){
     if(axios.isAxiosError(error)){
       console.error("Axios Error", error.message);
       if(error.response){
        console.log("Status:-" , error.response.status);
        console.log("Data: " , error.response.data)
       }
     } else{
        console.error("Error", error.message)
     }
    }
};

fetchData();