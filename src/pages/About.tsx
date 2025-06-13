import React from 'react';
import { Heart, Users, Target, Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t('about.values.compassion'),
      description: t('about.values.compassion.desc')
    },
    {
      icon: Users,
      title: t('about.values.community'),
      description: t('about.values.community.desc')
    },
    {
      icon: Target,
      title: t('about.values.impact'),
      description: t('about.values.impact.desc')
    },
    {
      icon: Award,
      title: t('about.values.excellence'),
      description: t('about.values.excellence.desc')
    }
  ];

  const instagramPosts = [
    {
      image: "./assets/insta1.jpg",
      // alt: "Recent community outreach activity"
    },
    {
      image: "./assets/insta2.jpg",
      // alt: "Food distribution program"
    },
    {
      image: "./assets/insta3.jpg",
      // alt: "Educational initiative"
    },
    {
      image: "./assets/insta4.jpg",
      // alt: "Healthcare support program"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-white to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="./assets/about-hero.jpg"
                alt="Smiley Foundation team"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl text-gray-900 mb-6">
                {t('about.story.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.story.p1')}
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.story.p2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.values.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Follow Us on Instagram
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected with our latest activities and see the impact we're making in communities across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {instagramPosts.map((post, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={post.image}
                  // alt={post.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <p className="font-medium text-sm">{post.alt}</p> */}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.instagram.com/_smileyfoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 group"
            >
              View More on Instagram
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Changing Lives, One Smile at a Time</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                we've grown from a small group of passionate individuals into a recognized nonprofit organization committed to uplifting communities.
Our initiatives have evolved beyond providing immediate relief—we now focus on addressing the root causes of poverty and inequality, creating sustainable solutions that foster long-term transformation.


              </p>
              {/* <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We measure our success not just in numbers served, but in the lasting positive 
                changes we see in the communities we work with. From children who continue their 
                education to families who achieve greater stability, every story matters.
              </p> */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-primary/10 w-3 h-3 rounded-full mr-4"></div>
                  <span className="text-gray-700">10,000+ People Served</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-secondary/10 w-3 h-3 rounded-full mr-4"></div>
                  <span className="text-gray-700">25,000+ Meals Provided</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 w-3 h-3 rounded-full mr-4"></div>
                  <span className="text-gray-700">100+ Events Conducted</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="./assets/impact-image.jpg"
                alt="Community impact"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;