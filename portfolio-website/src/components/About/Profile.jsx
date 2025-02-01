// src/components/About/Profile.jsx
import React from 'react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <img
            src="/api/placeholder/400/400"
            alt="Profile"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
          <div className="flex gap-4 justify-center">
            {/* ソーシャルメディアリンク */}
            <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
              GitHub
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Chihiro TOKOYODA</h2>
            <p className="text-gray-600">Web Developer / Designer</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">About Me</h3>
            <p className="text-gray-700">
              ここに自己紹介文を入れます。経験やスキル、興味のある分野などについて
              記載します。
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'UI/UX Design'].map((skill) => (
                <span 
                  key={skill}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-gray-700">
              Email: example@email.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;