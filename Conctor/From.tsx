// import React, { useState, ChangeEvent } from 'react';

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
//   file: File | null;
// }
 
// const FormWithFile: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     message: '',
//     file: null,
//   });
 
//   const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       setFormData({
//         ...formData,
//         file: event.target.files[0],  
//       });
//     }
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     // Log the form data, including the file
//     console.log(formData);


//     // Create a FormData object for sending data to the server
//     const serverFormData = new FormData();
//     for (const key in formData) {
//       if (formData.hasOwnProperty(key)) {
//         serverFormData.append(key, formData[key as keyof FormData]);
//       }
//     }

//     // Example of sending data using fetch:
//     fetch('/api/upload', { // Replace with your API endpoint
//       method: 'POST',
//       body: serverFormData,
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Success:', data);
//         // Reset the form after successful submission (optional)
//         setFormData({ name: '', email: '', message: '', file: null });
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//       </div>
//       <div>
//         <label htmlFor="message">Message:</label>
//         <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
//       </div>
//       <div>
//         <label htmlFor="file">File:</label>
//         <input type="file" id="file" name="file" onChange={handleFileChange} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };


// export default FormWithFile;

