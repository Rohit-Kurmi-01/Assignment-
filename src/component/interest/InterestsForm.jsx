import React, { useState } from 'react';
import Pagination from '../pagination/Pagination';

const InterestsForm = () => {
  const [interests, setInterests] = useState({
    shoes: true,
    menTshirts: false,
    makeup: true,
    jewellery: true,
    womenTshirts: false,
    furniture: true,
  });
  const [currentPage, setCurrentPage] = useState(1);



const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setInterests((prevInterests) => ({
        ...prevInterests,
        [name]: checked,
    }));
};

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-b border-black ">
        
          <h2 className="text-xl font-bold mb-4 text-center">Please mark your interests!</h2>
          <p className="text-black mb-4 text-center">We will keep you notified.</p>
          <p className="text-black mb-4 font-bold">My seved interests !</p>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="shoes"
                checked={interests.shoes}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Shoes</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="menTshirts"
                checked={interests.menTshirts}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Men T-shirts</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="makeup"
                checked={interests.makeup}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Makeup</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="jewellery"
                checked={interests.jewellery}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Jewellery</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="womenTshirts"
                checked={interests.womenTshirts}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Women T-shirts</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="furniture"
                checked={interests.furniture}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Furniture</span>
            </label>
          </div>
          <div className="flex justify-center items-center mt-4">
            <Pagination currentPage={currentPage} totalPages={100} onPageChange={() => setCurrentPage(currentPage + 1)} />
            </div>
          </div>
        </div>
     
    
  );
};

export default InterestsForm;
