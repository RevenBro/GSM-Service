import React from 'react';
import SectionImg1 from '../assets/images/our-section-img1.jpg'
import SectionImg2 from '../assets/images/our-section-img2.jpg'
import SectionImg3 from '../assets/images/our-section-img3.jpg'
import SectionImg4 from '../assets/images/our-section-img4.jpg'

function Portfolio() {
  const items = [
    {
      id: 1,
      title: "Telefon tuzatish xizmatlari",
      description: "Telefoningizni tez va samarali tuzatamiz. Xizmatlarimiz sifatli va kafolatli.",
      image: SectionImg1,
      link: "#",
    },
    {
      id: 2,
      title: "Laptop ta'mirlash",
      description: "Laptopingizni yangidek ishlashi uchun professionallarimiz tomonidan ta'mirlab beramiz.",
      image: SectionImg2,
      link: "#",
    },
    {
      id: 3,
      title: "Qurilmalar uchun dasturiy ta'minot",
      description: "Eng so'nggi firmware va dasturlarni yuklab olish imkoniyati. Har qanday qurilma uchun dasturiy ta'minotlar mavjud.",
      image: SectionImg3,
      link: "#",
    },
    {
      id: 4,
      title: "Qurilmalar uchun dasturiy ta'minot",
      description: "Eng so'nggi firmware va dasturlarni yuklab olish imkoniyati. Har qanday qurilma uchun dasturiy ta'minotlar mavjud.",
      image: SectionImg4,
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white px-5">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} className="group relative rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 h-80" style={{ minHeight: '320px' }}>
              <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="self-start px-4 py-2 bg-teal-400 text-gray-900 font-semibold rounded hover:bg-teal-500 transition"
                >
                  Batafsil o'qish
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
