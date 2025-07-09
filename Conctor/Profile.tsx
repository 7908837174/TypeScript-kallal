import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

const Profile = () => {
    const [profileUrl, setProfileUrl] = useState("https://www.youtube.com/watch?v=M9O5AjEFzKw");
    const [activeTab, setActiveTab] = useState(null);
 

    const tabs = [
        { id: 1, icon: <FaCamera />, label: 'Tab 1' },
        { id: 2, icon: <FaCamera />, label: 'Tab 2' },
        { id: 3, icon: <FaCamera />, label: 'Tab 3' }
    ];

    const handleProfileUpload = () => { 
        console.log('Profile upload clicked');
    };

    const renderTabs = () => {
        return tabs.map((tab) => (
            <button 
                key={tab.id}
                className={`flex-1 text-center py-2 px-4 text-sm ${activeTab === tab.id ? 'border-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
                onClick={() => setActiveTab(tab.id)}
            >
                <div className="flex items-center justify-center space-x-2">
                    {tab.icon}
                    <span>{tab.label}</span>
                </div>
            </button>
        ));
    };


    return (
        <div className="relative w-[94%] ml-[5rem]">
            <div className="relative">
                <img src="https://via.placeholder.com/150" alt="This is the Profile Image" className="w-full h-64 object-cover" />
                <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600" onClick={handleProfileUpload}>
                    <label htmlFor="banner-upload" className="cursor-pointer">
                        <FaCamera size={24} />
                    </label>
                </button>
                <input type="file" id="banner-upload" className="hidden" />
            </div>
            <div className="flex items-center ml-4 mt-[-2rem]">
                <img src={profileUrl} alt="Profile" className="w-40 h-40 object-cover rounded-full border-4 border-white" />
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                {renderTabs()}
            </div>
        </div>
    );
} 

export default Profile;