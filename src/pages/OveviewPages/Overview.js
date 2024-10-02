import React from "react";
import { Link } from "react-router-dom";
import "./Overview.css";
import "../../App.css";

const Overview = () => {
  return (
    <main>
      <div className="container mx-auto p-6">
        <div className="card overview-background shadow-lg p-6">
          <div className="card-body text-center">
            <h1 className="text-4xl font-bold mb-2">OVERVIEW</h1>
          </div>
          <div className="card-body">
            <h2 className="text-2xl mb-1">
              Hai, nama saya Aqeela nirmala shera
            </h2>
            <p className="text-lg mb-6">
              Saya adalah siswi kelas 12 di SMK Muhammadiyah 04 Sukorejo,
              mengambil jurusan Pengembangan Perangkat Lunak dan Game (PPLG).
            </p>
            <p className="text-lg mb-6">
            Jurusan PPLG merupakan program pendidikan yang fokus pada 
            penguasaan keterampilan dalam bidang pemrograman komputer dan pengembangan aplikasi. 
            Siswa dilatih untuk memahami dan menggunakan berbagai bahasa pemrograman serta
             teknologi informasi untuk menciptakan solusi perangkat lunak yang efektif.
            </p>
            <p className="text-lg mb-6">
            Kompetensi yang Diajarkan

Pemrograman Dasar: 
Memahami konsep dasar pemrograman dan algoritma.
Bahasa Pemrograman: Menguasai berbagai bahasa pemrograman seperti Java, Python, C++, dan PHP.
Pengembangan Web: Mempelajari HTML, CSS, dan JavaScript untuk pengembangan aplikasi web.
Database Management: Pemahaman tentang sistem manajemen basis data (DBMS) dan SQL.
Desain dan Analisis Sistem: Mampu menganalisis kebutuhan sistem dan merancang solusi perangkat lunak.
            </p>
            <p className="text-lg mb-6">
              Selain kemampuan di bidang pemrograman, saya juga tertarik untuk
              belajar tentang bagaimana teknologi bisa dikombinasikan dengan
              desain untuk membuat tampilan aplikasi yang lebih menarik dan
              mudah digunakan.
            </p>
            
            <p className="text-lg mb-6">
              Di luar dunia teknologi, saya juga aktif dalam berbagai kegiatan
              sekolah dan organisasi. Saya percaya bahwa memiliki keseimbangan
              antara akademik dan aktivitas sosial adalah kunci untuk menjadi
              individu yang lengkap, dan saya senang terlibat dalam komunitas
              yang memberikan dampak positif bagi orang lain.
            </p>
            <p className="text-lg mb-6">
              Saya selalu terbuka untuk tantangan dan peluang baru yang dapat
              membantu saya tumbuh dan berkembang lebih jauh, baik sebagai
              seorang profesional maupun pribadi. Dengan semangat dan dedikasi,
              saya yakin perjalanan ini akan membawa saya menuju karier yang
              sukses di bidang teknologi.
            </p>
            <p className="text-lg font-semibold text-black"> {/* Ubah kelas CSS */}
              Terima kasih telah mengunjungi portofolio saya.
            </p>
            <Link to="/ContactMe">
              <button
                aria-label="Hubungi Saya"
                className="bg-pink-500 text-white px-6 py-2 mt-8 rounded-full shadow-lg hover:bg-pink-700"
              >
                Hubungi Saya
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Overview;