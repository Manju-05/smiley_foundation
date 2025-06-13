import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Utensils, GraduationCap, HandHeart, X, LucideCalendarCheck2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const Home: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { t } = useLanguage();

  const galleryImages = [
    {
      url: "./assets/gallery1.jpg",
      // alt: "Community food distribution"
    },
    {
      url: "./assets/gallery2.jpg",
      // alt: "Educational programs for children"
    },
    {
      url: "./assets/gallery3.jpg",
      // alt: "Healthcare assistance"
    },
    {
      url: "./assets/gallery4.jpg",
      // alt: "Community outreach activities"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary/10 via-white to-primary/10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-gray-900 mb-6 leading-tight">
                {t('home.hero.title')}<br />
                <span className="text-primary">{t('home.hero.subtitle')}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('home.hero.description')}
              </p>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="./assets/hero-image.jpg"
                alt="Smiley Foundation helping communities"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-heading font-semibold text-2xl text-primary">10,000+</p>
                <p className="text-gray-600">{t('home.stats.people')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              {t('home.stats.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.stats.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-counter">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-3xl text-gray-900 mb-2">
                <Counter end={10000} duration={2000} suffix="+" />
              </h3>
              <p className="text-gray-600 font-medium">{t('home.stats.people')}</p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-counter">
              <Utensils className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-3xl text-gray-900 mb-2">
                <Counter end={25000} duration={2000} suffix="+" />
              </h3>
              <p className="text-gray-600 font-medium">{t('home.stats.meals')}</p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-counter">
              <LucideCalendarCheck2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-3xl text-gray-900 mb-2">
                <Counter end={100} duration={2000} suffix="+" />
              </h3>
              <p className="text-gray-600 font-medium">{t('home.stats.children')}</p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-counter">
              <HandHeart className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-3xl text-gray-900 mb-2">
                <Counter end={50} duration={2000} suffix="+" />
              </h3>
              <p className="text-gray-600 font-medium">{t('home.stats.volunteers')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="./assets/mission-image.jpg"
                alt="Community outreach program"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                {t('home.mission.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('home.mission.description1')}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('home.mission.description2')}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition-colors group"
              >
                {t('home.mission.learn')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              {t('home.gallery.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.gallery.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  // alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <p className="font-medium text-sm">{image.alt}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={galleryImages[selectedImage].url}
                // alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">
                {/* {galleryImages[selectedImage].alt} */}
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;