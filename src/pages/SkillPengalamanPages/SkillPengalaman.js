import React, { useState } from "react";
import "../../App.css";

const SkillPengalaman = () => {
  // State untuk nilai skill
  const [skills, setSkills] = useState({
    html: 70,
    css: 60,
    javascript: 40,
    react: 50,
  });

  const handleSkillChange = (skill, value) => {
    setSkills((prevSkills) => ({
      ...prevSkills,
      [skill]: value,
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="card overview-background shadow-lg p-6">
        <div className="text-white p-6 rounded-t-lg">
          <h1 className="text-4xl font-extrabold text-center">
            Skill dan Pengalaman Saya
          </h1>
        </div>
        <div className="p-8">
          {/* Tabel Skill dan Pengalaman */}
          <div className="overflow-x-auto">
            <table className="table w-full border border-gray-300 shadow-md rounded-lg">
              <thead>
                <tr>
                  <th className="bg-pink-400 text-[#333] text-left p-4">Skill</th>
                  <th className="bg-pink-400 text-[#333] text-left p-4">Pengalaman</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-100 border-b">
                  <td className="px-6 py-4 font-semibold text-left">1. HTML</td>
                  <td className="px-6 py-4 text-left">Baru mempelajari HTML</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-100 border-b">
                  <td className="px-6 py-4 font-semibold text-left">2. CSS</td>
                  <td className="px-6 py-4 text-left">Sedang berusaha memahami HTML dan CSS</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-100 border-b">
                  <td className="px-6 py-4 font-semibold text-left">3. JavaScript</td>
                  <td className="px-6 py-4 text-left">Sedang mendalami materi tentang JavaScript</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-100 border-b">
                  <td className="px-6 py-4 font-semibold text-left">4. React</td>
                  <td className="px-6 py-4 text-left">Sedang mengembangkan keterampilan membuat web menggunakan React</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Skill yang Dikuasai */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-black mb-6">Skill yang Saya Kuasai Saat Ini Adalah:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {Object.entries(skills).map(([skill, value]) => (
                  <div className="mb-6" key={skill}>
                    <p className="font-semibold">{skill.charAt(0).toUpperCase() + skill.slice(1)}: {value}%</p>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={value}
                      onChange={(e) => handleSkillChange(skill, Number(e.target.value))}
                      className={`range w-full`}
                    />
                  </div>
                ))}
              </div>

              {/* Pengalaman */}
              <div className="space-y-4">
                <h3 className="font-bold text-black text-lg">Pengalaman Saya:</h3>
                <ul className="list-disc list-inside text-gray-800">
                  <li>Magang di sekolah</li>
                  <li>Freelance di Nusantech</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPengalaman;
