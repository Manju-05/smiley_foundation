import React from 'react';
import { Utensils, GraduationCap, Heart, Home, Users, ArrowRight, HomeIcon, LucideCalendarCheck, LucideAward, LucideCalendarCheck2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Programs: React.FC = () => {
  const { t } = useLanguage();

  const programs = [
    {
      icon: Utensils,
      title: t('programs.nutrition.title'),
      description: t('programs.nutrition.desc'),
      features: [
        "Hot meals served daily",
        "Nutritional supplements for children",
        // "Cooking skills training for families",
        // "Community gardens development"
      ],
      impact: "25,000+ meals served annually",
      image: "./assets/nutrition-program.jpg"
    },
    {
      icon: LucideCalendarCheck2,
      title: t('programs.education.title'),
      description: t('programs.education.desc'),
      features: [
        "Personalized event planning and decoration",
        "Cultural and traditional theme setups",
        "Birthday and wedding celebration ",
      ],
      impact: "500+ joyful events organized with purpose",
      image: "./assets/education-program.jpg"
    },
    {
      icon: LucideAward,
      title: t('programs.healthcare.title'),
      description: t('programs.healthcare.desc'),
      features: [
        // "Regular medical check-ups",
        // "Preventive healthcare education",
        // "Medicine distribution",
        "Thank you @cbth_foundation for giving the best NGO award for @smileyfoundation"
      ],
      impact: "Builds greater trust, and inspires us to serve even more communities with dedication",
      image: "./assets/gallery4.jpg"
    },
    {
      icon: LucideAward,
      title: t('programs.shelter.title'),
      description: t('programs.shelter.desc'),
      features: [
        // "Temporary shelter construction",
        // "Clean water access",
        // "Sanitation facilities",
        "Thank you #workfoundationday for honoring @smileyfoundation on your 37th workfoundationday"
      ],
      impact: "Builds greater trust, and inspires us to serve even more communities with dedication.",
      image: "./assets/shelter-program.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-white to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            {t('programs.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('programs.description')}
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <program.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">
                    {program.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4">
                      Program Features:
                    </h3>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <ArrowRight className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg">
                    <p className="font-heading font-semibold text-lg text-gray-900">
                      Impact: {program.impact}
                    </p>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="rounded-2xl shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* How We Work 
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures maximum impact and sustainable change in every community we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-4">
                1. Community Assessment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We begin by engaging with community leaders and families to understand their specific needs,
                challenges, and existing resources.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-4">
                2. Program Implementation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We develop customized programs that address immediate needs while building long-term capacity
                and sustainability within the community.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-4">
                3. Ongoing Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain long-term relationships with communities, providing ongoing support, monitoring
                progress, and adapting programs as needs evolve.
              </p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Success Stories 
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from the communities we serve, showcasing the transformative power of our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl">
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                "Thanks to the education program, my daughter is now the first in our family to complete
                high school. She dreams of becoming a teacher to help other children like herself."
              </blockquote>
              <div className="flex items-center">
                <img
                  src="./assets/testimonial1.jpg"
                  alt="Community member"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Sunita Devi</p>
                  <p className="text-gray-600">Mother of beneficiary, Delhi</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-8 rounded-xl">
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                "The nutrition program has made such a difference for our children. They're healthier,
                more energetic, and performing better in their studies."
              </blockquote>
              <div className="flex items-center">
                <img
                  src="./assets/testimonial2.jpg"
                  alt="Community member"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Ramesh Kumar</p>
                  <p className="text-gray-600">Community Leader, UP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default Programs;