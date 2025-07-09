import React from 'react';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

const Slider = () => {
  return (
    <div>
      <aside className="sidebar fixed top-0 left-0 h-screen w-20 bg-[#1A1C1E] text-white">
        <ul className="p-4 flex flex-col justify-between items-center h-full">
          <div className="top">
            <li className="mb-2">
              <div className="flex items-center">
                <FaHome className="mr-2" size={18} />
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center">
                <FaSearch className="mr-2" size={18} />
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center">
                {/* Note: FaProfile does not exist in react-icons, assuming you meant FaUser */}
                <FaUser className="mr-2" size={18} />
              </div>
            </li>
          </div>
          <div className="bottom">
            <li className="flex flex-col items-center">
              <IoMdSettings size={18} />
              <FaUser className="mt-5" size={18} />
            </li>
          </div>
        </ul>
      </aside>
    </div>
  )
}

export default Slider;