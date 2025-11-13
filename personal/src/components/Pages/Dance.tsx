import { useEffect, useState } from 'react';
// import dance1 from '@/assets/images/dance1.jpg';
// import dance2 from '@/assets/images/dance2.jpg';
// import dance3 from '@/assets/images/dance3.jpg';
// import dance4 from '@/assets/images/dance4.jpg';
// import dance5 from '@/assets/images/dance5.jpg';
// import dance6 from '@/assets/images/dance6.jpg';
// import dance7 from '@/assets/images/dance7.jpg';
// import dance8 from '@/assets/images/dance8.jpeg';
// import dance9 from '@/assets/images/dance9.jpeg';
// import dance10 from '@/assets/images/dance10.jpg';
// import dance11 from '@/assets/images/dance11.jpg';
// import dance12 from '@/assets/images/dance12.jpg';
// import dance13 from '@/assets/images/dance13.jpg';
// import dance14 from '@/assets/images/dance14.jpg';
// import dance15 from '@/assets/images/dance15.png';
// import dance16 from '@/assets/images/dance16.jpg';
// import dance17 from '@/assets/images/dance17.jpg';

const danceImages = [
  {
    id: 1,
    src: '/images/dance1.JPG',
    alt: 'dance1',
    className: 'md:col-span-2 row-span-2',
  },
  {
    id: 2,
    src: '/images/dance2.JPG',
    alt: 'dance2',
    className: 'row-span-2',
  },
  {
    id: 3,
    src: '/images/dance3.jpg',
    alt: 'dance3',
    className: 'md:col-span-1',
  },
  {
    id: 4,
    src: '/images/dance4.jpg',
    alt: 'dance4',
    className: 'md:col-span-1',
  },
  {
    id: 5,
    src: '/images/dance5.jpg',
    alt: 'dance5',
    className: 'md:col-span-1',
  },
  {
    id: 6,
    src: '/images/dance6.jpg',
    alt: 'dance6',
    className: 'row-span-1',
  },
  {
    id: 7,
    src: '/images/dance7.jpg',
    alt: 'dance7',
    className: 'md:col-span-2',
  },
  {
    id: 8,
    src: '/images/dance8.jpeg',
    alt: 'dance8',
    className: 'md:col-span-2',
  },
  {
    id: 9,
    src: '/images/dance9.jpeg',
    alt: 'dance9',
    className: 'row-span-1',
  },
  {
    id: 10,
    src: '/images/dance10.JPG',
    alt: 'dance10',
    className: 'row-span-2',
  },
  {
    id: 11,
    src: '/images/dance11.JPG',
    alt: 'dance11',
    className: 'row-span-1',
  },
  {
    id: 12,
    src: '/images/dance12.JPG',
    alt: 'dance12',
    className: 'md:col-span-2 row-span-2',
  },
  {
    id: 13,
    src: '/images/dance13.JPG',
    alt: 'dance13',
    className: 'row-span-1',
  },
  {
    id: 14,
    src: '/images/dance14.JPG',
    alt: 'dance14',
    className: 'row-span-1',
  },
  {
    id: 15,
    src: '/images/dance15.PNG',
    alt: 'dance15',
    className: 'col-span-2',
  },
  {
    id: 16,
    src: '/images/dance16.JPG',
    alt: 'dance16',
    className: 'row-span-2',
  },
  {
    id: 17,
    src: '/images/dance17.JPG',
    alt: 'dance17',
    className: 'row-span-1',
  },
];

export default function Dance() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen w-full"
    >
      <div className="container mx-auto px-4 py-16 sm:py-24">

        {/* --- Header --- */}
        <header className="mb-8 text-center">
          <h1 className={`
            text-4xl md:text-5xl font-bold text-center mb-4
            transition-all duration-1500 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
            <span className={`
              relative inline-block
              after:absolute after:bottom-2 md:after:bottom-3 after:left-0 after:h-4 md:after:h-6 after:w-full after:bg-[#ff746c]
              after:origin-left after:transition-transform after:duration-700 after:ease-out after:delay-200
              ${isVisible ? 'after:scale-x-100' : 'after:scale-x-0'}
            `}>
              <span className="relative z-10">my dancing journey</span>
            </span>
          </h1>
          <p className={`
            lg:text-lg md:text-sm text-muted-foreground max-w-3xl mx-auto
            transition-all duration-1200 ease-out delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
            A collection of moments from my college dancing career, with shots from performances and behind-the-scenes.
          </p>
        </header>

        {/* --- Masonry Grid Gallery --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[300px]">
          {danceImages.map((image) => (
            <div
              key={image.id}
              className={`
                group relative overflow-hidden rounded-xl shadow-lg transition-all duration-700 ease-out
                hover:shadow-2xl ${image.className} hover:ring-4 hover:ring-[#ff746c] 
                hover:ring-offset-2 hover:ring-offset-background
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{ transitionDelay: `500ms` }}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              
              {/* Hover Overlay Removed */}
            </div>
          ))}
        </div>
      </div>
      <footer className="text-center text-gray-400 p-2 text-sm">
        - big, bigger, biggest hit! -
      </footer>
    </div>
  );
}