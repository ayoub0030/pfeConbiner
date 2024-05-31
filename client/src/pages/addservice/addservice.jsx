// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { jwtDecode } from "jwt-decode";
// import './AddService.css'; // Import your CSS file
// import { useNavigate } from 'react-router-dom';

// const AddService = () => {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [location, setLocation] = useState('');
//   const [yearsOfExperience, setYearsOfExperience] = useState('');
//   const [image, setImage] = useState(null);
//   const [images, setImages] = useState([]);
//   const [subcategories, setSubcategories] = useState([]);
//   const [selectedSubcategory, setSelectedSubcategory] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchSubcategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:3003/api/subcategories');
//         setSubcategories(response.data); // Assuming response.data is an array of subcategories
//       } catch (error) {
//         setError('Failed to fetch subcategories');
//       }
//     };

//     fetchSubcategories();
//   }, []);

 
//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const token = localStorage.getItem('token');
//       const decodedToken = jwtDecode(token);
//       const userId = decodedToken.id;

//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('description', description);
//       formData.append('location', location);
//       formData.append('yearsOfExperience', yearsOfExperience);
//       formData.append('image', image);
//       formData.append('SubcategoryId', selectedSubcategory);
//       formData.append('userId', userId);
//       images.forEach((images) => {
//       formData.append('images', images);
//     });
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`
//           }
//       };
//       const response = await axios.post('http://localhost:3003/api/services', formData, config);

//       console.log('Service created:', response.data);
//       navigate("/pro/service");
//     } catch (error) {
//       setError(error.response?.data?.error || 'Failed to create service');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2 className="form-heading primaryText">Créer un service</h2>
//       <form onSubmit={handleSubmit} encType='multipart/form-data' method='POST'>
//         <div>
//           <label className="form-label">Titre* :</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="form-input"
//           />
//         </div>
//         <div>
//           <label className="form-label">Description de votre service* :</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             className="form-input"
//           />
//         </div>
//         <div>
//           <label className="form-label">Votre adresse / Business address* :</label>
//           <input
//             type="text"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="form-input"
//           />
//         </div>
//         <div>
//           <label className="form-label">Vos années d'expérience* :</label>
//           <input
//             type="number"
//             value={yearsOfExperience}
//             onChange={(e) => setYearsOfExperience(e.target.value)}
//             className="form-input"
//           />
//         </div>
//         <div>
//           <label className="form-label">Photo* :</label>
//           <input
//             type="file"
//             name="image"
//             onChange={(e) => setImage(e.target.files[0])}
//             className="form-input"
//           />
//         </div>

//         <div>
//           <label className="form-label">Sélectionnez la catégorie de vos services* :</label>
//           <select value={selectedSubcategory} onChange={(e) => setSelectedSubcategory(e.target.value)} className="form-select">
//             <option value="">Catégorie</option>
//             {subcategories.map(subcategory => (
//               <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="form-label">Des photos sur votre service* :</label>
//           <input
//             type="file"
//             name="images"
//             multiple
//             onChange={handleFileChange}
//             className="form-input"
//           />
//         </div>
//         <button type="submit" className="button">Créer service</button>
//       </form>
//       {error && <div className="error-message">{error}</div>}
//     </div>
//   );
// };

// export default AddService;
//good hna ghankhdem b code dial assmaa
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { jwtDecode } from "jwt-decode";
// import './AddService.css'; // Import your CSS file
// import { useNavigate } from 'react-router-dom';

// const AddService = () => {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [location, setLocation] = useState('');
//   const [yearsOfExperience, setYearsOfExperience] = useState('');
//   const [image, setImage] = useState(null);
//   const [images, setImages] = useState([]);
//   const [subcategories, setSubcategories] = useState([]);
//   const [selectedSubcategory, setSelectedSubcategory] = useState('');
//   const [error, setError] = useState('');


//   useEffect(() => {
//     const fetchSubcategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:3003/api/subcategories');
//         setSubcategories(response.data); // Assuming response.data is an array of subcategories
//       } catch (error) {
//         setError('Failed to fetch subcategories');
//       }
//     };

//     fetchSubcategories();
//   }, []);

 
//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const token = localStorage.getItem('token');
//       const decodedToken = jwtDecode(token);
//       const userId = decodedToken.id;

//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('description', description);
//       formData.append('location', location);
//       formData.append('yearsOfExperience', yearsOfExperience);
//       formData.append('image', image);
//       formData.append('SubcategoryId', selectedSubcategory);
//       formData.append('userId', userId);
//       images.forEach((images) => {
//       formData.append('images', images);
//     });
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`
//           }
//       };
//       const response = await axios.post('http://localhost:3003/api/services', formData, config);

//       console.log('Service created:', response.data);
//       navigate("/pro/service");
//     } catch (error) {
//       setError(error.response.data.error || 'Failed to create service');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2 className="form-heading primaryText">Créer un service</h2>
//       <form onSubmit={handleSubmit} encType='multipart/form-data' method='POST'>
//         <div>
//           <label className="form-label">Titre* :</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="form-input"
//             placeholder="Enter the title of your service"
//           />
//         </div>
//         <div>
//           <label className="form-label">Description de votre service* :</label>
//           <textarea rows={6}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             className="form-input"
//             Placeholder= "Fournissez une description détaillée de votre service"
//           />
//         </div>
//         <div>
//           <label className="form-label">Votre adresse / Business address* :</label>
//           <input
//             type="text"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="form-input"
//             Placeholder= "Entrez votre adresse professionnelle"
//           />
//         </div>
//         <div>
//           <label className="form-label">Vos années d'expérience* :</label>
//           <input
//             type="number"
//             value={yearsOfExperience}
//             onChange={(e) => setYearsOfExperience(e.target.value)}
//             className="form-input"
//             placeholder="Entrez vos années d'expérience"
//           />
//         </div>

//         <div>
//           <label className="form-label">Sélectionnez la catégorie de vos services* :</label>
//           <select value={selectedSubcategory} onChange={(e) => setSelectedSubcategory(e.target.value)} className="form-select">
//             <option value="">Catégorie</option>
//             {subcategories.map(subcategory => (
//               <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
//             ))}
//           </select>
//         </div>

//          <div>
//           <label className="form-label">Photo* :</label>
//           <input
//             type="file"
//             name="image"
//             onChange={(e) => setImage(e.target.files[0])}
//             className="form-input"
//           />
//           {image && <img src={URL.createObjectURL(image)} alt="Selected" className="preview-image" />}
//         </div>

     

//         {/* File selection for multiple images */}
//         <div>
//           <label className="form-label">Des photos sur votre service* :</label>
//           <input
//             type="file"
//             name="images"
//             multiple
//             onChange={handleFileChange}
//             className="form-input"
          
//           />
//           {/* Display selected images */}
//           {images.length > 0 && (
//             <div className="selected-images-container">
//               {images.map((file, index) => (
//                 <img key={index} src={URL.createObjectURL(file)} alt={`Selected ${index}`} className="preview-image" />
//               ))}
//             </div>
//           )}
//         </div>
//         <button type="submit" className="button">Créer service</button>
//       </form>
//       {error && <div className="error-message">{error}</div>}
//     </div>
//   );
// };

// export default AddService;
//ghanzid image 3la lcode li lfo9import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import jwtDecode from 'jwt-decode';
import './AddService.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import illustration from "../../../public/hero-image.png"; // Add the path to your image file

const AddService = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/subcategories');
        setSubcategories(response.data); // Assuming response.data is an array of subcategories
      } catch (error) {
        setError('Failed to fetch subcategories');
      }
    };

    fetchSubcategories();
  }, []);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const token = localStorage.getItem('token');
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('location', location);
      formData.append('yearsOfExperience', yearsOfExperience);
      formData.append('image', image);
      formData.append('SubcategoryId', selectedSubcategory);
      formData.append('userId', userId);
      images.forEach((imageFile) => {
        formData.append('images', imageFile);
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const response = await axios.post('http://localhost:3003/api/services', formData, config);

      console.log('Service created:', response.data);
      navigate("/pro/service");
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to create service');
    }
  };

  return (
    <div className="container">
      <div className="image-section">
        <img src={illustration} alt="Professional Illustration" className="illustration-image" />
      </div>
      <div className="form-section">
        <h2 className="form-heading primaryText">Créer un service</h2>
        <form onSubmit={handleSubmit} encType='multipart/form-data' method='POST'>
          <div>
            <label className="form-label">Titre* :</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="form-input"
              placeholder="Entrez le titre de votre service"
            />
          </div>
          <div>
            <label className="form-label">Description de votre service* :</label>
            <textarea
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="form-input"
              placeholder="Fournissez une description détaillée de votre service"
            />
          </div>
          <div>
            <label className="form-label">Votre adresse / Business address* :</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-input"
              placeholder="Entrez votre adresse professionnelle"
            />
          </div>
          <div>
            <label className="form-label">Vos années d'expérience* :</label>
            <input
              type="number"
              value={yearsOfExperience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
              className="form-input"
              placeholder="Entrez vos années d'expérience"
            />
          </div>
          <div>
            <label className="form-label">Sélectionnez la catégorie de vos services* :</label>
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="form-select"
            >
              <option value="">Catégorie</option>
              {subcategories.map((subcategory) => (
                <option key={subcategory.id} value={subcategory.id}>
                  {subcategory.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="form-label">Photo* :</label>
            <input
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="form-input"
            />
            {image && <img src={URL.createObjectURL(image)} alt="Selected" className="preview-image" />}
          </div>
          <div>
            <label className="form-label">Des photos sur votre service* :</label>
            <input
              type="file"
              name="images"
              multiple
              onChange={handleFileChange}
              className="form-input"
            />
            {images.length > 0 && (
              <div className="selected-images-container">
                {images.map((file, index) => (
                  <img key={index} src={URL.createObjectURL(file)} alt={`Selected ${index}`} className="preview-image" />
                ))}
              </div>
            )}
          </div>
          <button type="submit" className="button">Créer service</button>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default AddService;
