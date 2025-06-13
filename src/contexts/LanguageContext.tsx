import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'te' | 'zh' | 'fr' | 'es';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const languages: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' }
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language);
  };

  // Initialize language from localStorage
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && languages.find(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translation object
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.programs': 'Programs',
    'nav.contact': 'Contact',
    'header.foundation': 'Smiley Foundation',
    
    // Home Page
    'home.hero.title': 'Food for Thought,',
    'home.hero.subtitle': 'Smiles for Life',
    'home.hero.description': 'Transforming lives through nutrition and sustainable development—empowering roadside communities and spreading hope, one smile at a time',
    'home.hero.volunteer': 'Volunteer',
    'home.stats.title': 'Our Impact in Numbers',
    'home.stats.description': 'Together, we\'re making a real difference in the lives of roadside communities.',
    'home.stats.people': 'People Served',
    'home.stats.meals': 'Meals Provided',
    'home.stats.children': 'Events Conducted',
    'home.stats.volunteers': 'Active Volunteers',
    'home.mission.title': 'Our Mission',
    'home.mission.description1': 'With compassion at our core, we work tirelessly to provide daily essentials such as nutritious food, clothing, and other critical supplies to those in need. Our mission goes beyond aid—we aim to restore hope, dignity, and a sense of belonging to those often overlooked. Through continuous outreach and a strong spirit of service, we strive to spark meaningful change and bring lasting smiles to the lives we touch',
    'home.mission.description2': 'Through our comprehensive approach, we work directly with communities to identify their needs and implement long-term solutions that create lasting positive change.',
    'home.mission.learn': 'Learn More About Us',
    'home.gallery.title': 'See Our Work in Action',
    'home.gallery.description': 'Witness the impact of our programs through these moments captured in communities we serve.',
    'home.cta.title': 'Ready to Make a Difference?',
    'home.cta.description': 'Join thousands of supporters who are helping us create positive change in roadside communities. Every contribution, no matter the size, makes a meaningful impact.',
    'home.cta.involved': 'Get Involved',
    
    // About Page
    'about.title': 'About Smiley Foundation',
    'about.description': 'Founded with a vision to create lasting change in underserved communities, we\'ve been dedicated to improving lives through comprehensive support programs.',
    'about.story.title': 'Our Story',
    'about.story.p1': 'The Smiley Foundation is a compassionate organization dedicated to serving roadside communities in need. Our primary objective is to provide daily essentials such as food, clothing, and other vital necessities to those struggling on the streets. Through our relentless efforts, we aim to bring hope, dignity, and smiles to the lives of the underprivileged. By fostering a spirit of social service, we strive to create a positive impact and make a tangible difference in the lives of those we serve.',
    'about.story.p2': 'Today, we operate multiple programs designed to address root causes of poverty and inequality, not just symptoms. Our holistic approach ensures that the changes we create today will benefit generations to come.',
    'about.values.title': 'Our Core Values',
    'about.values.description': 'These principles guide every decision we make and every action we take in service of our communities.',
    'about.values.compassion': 'Compassion',
    'about.values.compassion.desc': 'We approach every interaction with empathy and understanding, recognizing the dignity in every person we serve.',
    'about.values.community': 'Community',
    'about.values.community.desc': 'We believe in the power of community-driven solutions and work alongside local leaders to create sustainable change.',
    'about.values.impact': 'Impact',
    'about.values.impact.desc': 'Every program and initiative is designed with measurable outcomes to ensure we\'re making a real difference.',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'We strive for the highest standards in all our work, continuously improving our services and approach.',
    
    // Programs Page
    'programs.title': 'Our Programs',
    'programs.description': 'Comprehensive support programs designed to address immediate needs while building long-term sustainability in roadside communities.',
    'programs.nutrition.title': 'Food Distribution',
    'programs.nutrition.desc': 'Daily meal distribution and nutrition for roadside families and children.',
    'programs.education.title': 'Smiley_Events@Foundation',
    'programs.education.desc': 'Providing quality education and skill development opportunities for children and adults.',
    'programs.healthcare.title': 'Honorable moment',
    'programs.healthcare.desc': 'Best NGO Award for @smileyfoundation.',
    'programs.shelter.title': 'Moment of Pride',
    'programs.shelter.desc': '#workfoundationday',
    
    // Contact Page
    'contact.title': 'Get in Touch',
    'contact.description': 'Have questions about our programs? We\'d love to hear from you and discuss !',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number (Optional)',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    
    // Footer
    'footer.mission': 'Dedicated to serving roadside communities with food, education, and hope. Together, we\'re building a world where every person has access to basic necessities and opportunities to thrive.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.copyright': '© 2024 Smiley Foundation. All rights reserved. | Registered Nonprofit Organization'
  },
  
  hi: {
    // Header
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.programs': 'कार्यक्रम',
    'nav.contact': 'संपर्क',
    'header.foundation': 'स्माइली फाउंडेशन',
    
    // Home Page
    'home.hero.title': 'विचार के लिए भोजन,',
    'home.hero.subtitle': 'जीवन के लिए मुस्कान',
    'home.hero.description': 'पोषण, शिक्षा और सतत विकास के माध्यम से सड़क किनारे के समुदायों को सशक्त बनाना। एक समय में एक मुस्कान के साथ स्थायी परिवर्तन लाने में हमारे साथ जुड़ें।',
    'home.hero.volunteer': 'स्वयंसेवक',
    'home.stats.title': 'संख्याओं में हमारा प्रभाव',
    'home.stats.description': 'मिलकर, हम भारत भर के सड़क किनारे के समुदायों के जीवन में वास्तविक बदलाव ला रहे हैं।',
    'home.stats.people': 'लोगों की सेवा',
    'home.stats.meals': 'भोजन प्रदान किया',
    'home.stats.children': 'बच्चों को शिक्षा',
    'home.stats.volunteers': 'सक्रिय स्वयंसेवक',
    'home.mission.title': 'हमारा मिशन',
    'home.mission.description1': 'स्माइली फाउंडेशन आवश्यक सेवाएं, शैक्षिक अवसर और सतत विकास कार्यक्रम प्रदान करके सड़क किनारे के समुदायों के उत्थान के लिए समर्पित है। हमारा मानना है कि हर व्यक्ति को पौष्टिक भोजन, गुणवत्तापूर्ण शिक्षा और बेहतर भविष्य बनाने का अवसर मिलना चाहिए।',
    'home.mission.description2': 'अपने व्यापक दृष्टिकोण के माध्यम से, हम समुदायों के साथ सीधे काम करते हैं ताकि उनकी जरूरतों को पहचान सकें और दीर्घकालिक समाधान लागू कर सकें जो स्थायी सकारात्मक परिवर्तन लाते हैं।',
    'home.mission.learn': 'हमारे बारे में और जानें',
    'home.gallery.title': 'हमारे काम को देखें',
    'home.gallery.description': 'हमारे कार्यक्रमों के प्रभाव को उन समुदायों में कैद किए गए इन क्षणों के माध्यम से देखें जिनकी हम सेवा करते हैं।',
    'home.cta.title': 'बदलाव लाने के लिए तैयार हैं?',
    'home.cta.description': 'हजारों समर्थकों के साथ जुड़ें जो सड़क किनारे के समुदायों में सकारात्मक बदलाव लाने में हमारी मदद कर रहे हैं। हर योगदान, चाहे वह कितना भी छोटा हो, एक सार्थक प्रभाव डालता है।',
    'home.cta.involved': 'शामिल हों',
    
    // About Page
    'about.title': 'स्माइली फाउंडेशन के बारे में',
    'about.description': 'वंचित समुदायों में स्थायी परिवर्तन लाने के दृष्टिकोण के साथ स्थापित, हम व्यापक सहायता कार्यक्रमों के माध्यम से जीवन में सुधार लाने के लिए समर्पित हैं।',
    'about.story.title': 'हमारी कहानी',
    'about.story.p1': 'स्माइली फाउंडेशन एक सरल अवलोकन से जन्मा: भारत के राजमार्गों के किनारे रहने वाले अनगिनत परिवारों के पास पौष्टिक भोजन, गुणवत्तापूर्ण शिक्षा और स्वास्थ्य सेवाओं जैसी बुनियादी आवश्यकताओं तक पहुंच नहीं है। जो भोजन वितरित करने वाले स्वयंसेवकों के एक छोटे समूह के रूप में शुरू हुआ, वह हजारों की सेवा करने वाले एक व्यापक संगठन में विकसित हो गया है।',
    'about.story.p2': 'आज, हम कई कार्यक्रम चलाते हैं जो केवल लक्षणों को नहीं बल्कि गरीबी और असमानता के मूल कारणों को संबोधित करने के लिए डिज़ाइन किए गए हैं। हमारा समग्र दृष्टिकोण यह सुनिश्चित करता है कि आज हम जो परिवर्तन लाते हैं वे आने वाली पीढ़ियों को लाभान्वित करेंगे।',
    'about.values.title': 'हमारे मूल मूल्य',
    'about.values.description': 'ये सिद्धांत हमारे समुदायों की सेवा में हमारे द्वारा लिए जाने वाले हर निर्णय और हर कार्य का मार्गदर्शन करते हैं।',
    'about.values.compassion': 'करुणा',
    'about.values.compassion.desc': 'हम हर बातचीत को सहानुभूति और समझ के साथ करते हैं, हमारी सेवा करने वाले हर व्यक्ति की गरिमा को पहचानते हैं।',
    'about.values.community': 'समुदाय',
    'about.values.community.desc': 'हम समुदाय-संचालित समाधानों की शक्ति में विश्वास करते हैं और स्थायी परिवर्तन लाने के लिए स्थानीय नेताओं के साथ काम करते हैं।',
    'about.values.impact': 'प्रभाव',
    'about.values.impact.desc': 'हर कार्यक्रम और पहल को मापने योग्य परिणामों के साथ डिज़ाइन किया गया है ताकि यह सुनिश्चित हो सके कि हम वास्तविक बदलाव ला रहे हैं।',
    'about.values.excellence': 'उत्कृष्टता',
    'about.values.excellence.desc': 'हम अपने सभी कार्यों में उच्चतम मानकों के लिए प्रयास करते हैं, लगातार अपनी सेवाओं और दृष्टिकोण में सुधार करते हैं।',
    
    // Programs Page
    'programs.title': 'हमारे कार्यक्रम',
    'programs.description': 'व्यापक सहायता कार्यक्रम जो तत्काल आवश्यकताओं को पूरा करने के साथ-साथ सड़क किनारे के समुदायों में दीर्घकालिक स्थिरता का निर्माण करने के लिए डिज़ाइन किए गए हैं।',
    'programs.nutrition.title': 'पोषण कार्यक्रम',
    'programs.nutrition.desc': 'सड़क किनारे के परिवारों और बच्चों के लिए दैनिक भोजन वितरण और पोषण शिक्षा।',
    'programs.education.title': 'शिक्षा पहल',
    'programs.education.desc': 'बच्चों और वयस्कों के लिए गुणवत्तापूर्ण शिक्षा और कौशल विकास के अवसर प्रदान करना।',
    'programs.healthcare.title': 'स्वास्थ्य सेवा पहुंच',
    'programs.healthcare.desc': 'वंचित समुदायों के लिए मोबाइल मेडिकल क्लिनिक और स्वास्थ्य जागरूकता कार्यक्रम।',
    'programs.shelter.title': 'आश्रय सहायता',
    'programs.shelter.desc': 'आश्रय उन्नयन और बुनियादी ढांचे के विकास के माध्यम से रहने की स्थिति में सुधार।',
    
    // Contact Page
    'contact.title': 'संपर्क में रहें',
    'contact.description': 'हमारे कार्यक्रमों के बारे में प्रश्न हैं? स्वयंसेवक बनना चाहते हैं या दान करना चाहते हैं? हम आपसे सुनना पसंद करेंगे और चर्चा करेंगे कि आप कैसे शामिल हो सकते हैं।',
    'contact.form.title': 'हमें संदेश भेजें',
    'contact.form.name': 'पूरा नाम',
    'contact.form.email': 'ईमेल पता',
    'contact.form.phone': 'फोन नंबर (वैकल्पिक)',
    'contact.form.subject': 'विषय',
    'contact.form.message': 'संदेश',
    'contact.form.send': 'संदेश भेजें',
    'contact.info.title': 'संपर्क जानकारी',
    
    // Footer
    'footer.mission': 'भोजन, शिक्षा और आशा के साथ सड़क किनारे के समुदायों की सेवा करने के लिए समर्पित। मिलकर, हम एक ऐसी दुनिया का निर्माण कर रहे हैं जहां हर व्यक्ति को बुनियादी आवश्यकताओं और फलने-फूलने के अवसरों तक पहुंच हो।',
    'footer.links': 'त्वरित लिंक',
    'footer.contact': 'संपर्क जानकारी',
    'footer.copyright': '© 2024 स्माइली फाउंडेशन। सभी अधिकार सुरक्षित। | पंजीकृत गैर-लाभकारी संगठन'
  },
  
  te: {
    // Header
    'nav.home': 'హోమ్',
    'nav.about': 'మా గురించి',
    'nav.programs': 'కార్యక్రమాలు',
    'nav.contact': 'సంప్రదించండి',
    'header.foundation': 'స్మైలీ ఫౌండేషన్',
    
    // Home Page
    'home.hero.title': 'ఆలోచనకు ఆహారం,',
    'home.hero.subtitle': 'జీవితానికి చిరునవ్వులు',
    'home.hero.description': 'పోషణ, విద్య మరియు స్థిరమైన అభివృద్ధి ద్వారా రోడ్‌సైడ్ కమ్యూనిటీలను శక్తివంతం చేయడం. ఒక సమయంలో ఒక చిరునవ్వుతో శాశ్వత మార్పును సృష్టించడంలో మాతో చేరండి.',
    'home.hero.volunteer': 'వాలంటీర్',
    'home.stats.title': 'సంఖ్యలలో మా ప్రభావం',
    'home.stats.description': 'కలిసి, మేము భారతదేశం అంతటా రోడ్‌సైడ్ కమ్యూనిటీల జీవితాలలో నిజమైన మార్పును తీసుకువస్తున్నాము.',
    'home.stats.people': 'ప్రజలకు సేవ',
    'home.stats.meals': 'భోజనం అందించబడింది',
    'home.stats.children': 'పిల్లలకు విద్య',
    'home.stats.volunteers': 'క్రియాశీల వాలంటీర్లు',
    'home.mission.title': 'మా మిషన్',
    'home.mission.description1': 'స్మైలీ ఫౌండేషన్ అవసరమైన సేవలు, విద్యా అవకాశాలు మరియు స్థిరమైన అభివృద్ధి కార్యక్రమాలను అందించడం ద్వారా రోడ్‌సైడ్ కమ్యూనిటీలను ఉద్ధరించడానికి అంకితం చేయబడింది. ప్రతి వ్యక్తికి పోషకాహారం, నాణ్యమైన విద్య మరియు మెరుగైన భవిష్యత్తును నిర్మించే అవకాశం ఉండాలని మేము నమ్ముతున్నాము.',
    'home.mission.description2': 'మా సమగ్ర విధానం ద్వారా, మేము కమ్యూనిటీలతో నేరుగా పని చేస్తాము వారి అవసరాలను గుర్తించడానికి మరియు శాశ్వత సానుకూల మార్పును సృష్టించే దీర్ఘకాలిక పరిష్కారాలను అమలు చేయడానికి.',
    'home.mission.learn': 'మా గురించి మరింత తెలుసుకోండి',
    'home.gallery.title': 'మా పనిని చర్యలో చూడండి',
    'home.gallery.description': 'మేము సేవ చేసే కమ్యూనిటీలలో బంధించబడిన ఈ క్షణాల ద్వారా మా కార్యక్రమాల ప్రభావాన్ని చూడండి.',
    'home.cta.title': 'మార్పు తీసుకురావడానికి సిద్ధంగా ఉన్నారా?',
    'home.cta.description': 'రోడ్‌సైడ్ కమ్యూనిటీలలో సానుకూల మార్పును సృష్టించడంలో మాకు సహాయం చేస్తున్న వేలాది మంది మద్దతుదారులతో చేరండి. ప్రతి సహకారం, ఎంత చిన్నదైనా, అర్థవంతమైన ప్రభావాన్ని చూపుతుంది.',
    'home.cta.involved': 'పాల్గొనండి',
    
    // About Page
    'about.title': 'స్మైలీ ఫౌండేషన్ గురించి',
    'about.description': 'అణగారిన కమ్యూనిటీలలో శాశ్వత మార్పును సృష్టించే దృష్టితో స్థాపించబడింది, మేము సమగ్ర మద్దతు కార్యక్రమాల ద్వారా జీవితాలను మెరుగుపరచడానికి అంకితం చేయబడ్డాము.',
    'about.story.title': 'మా కథ',
    'about.story.p1': 'స్మైలీ ఫౌండేషన్ ఒక సాధారణ పరిశీలన నుండి జన్మించింది: భారతదేశ రహదారుల వెంబడి నివసించే లెక్కలేనన్ని కుటుంబాలకు పోషకాహారం, నాణ్యమైన విద్య మరియు ఆరోగ్య సేవలు వంటి ప్రాథమిక అవసరాలకు ప్రాప్యత లేదు. భోజనం పంపిణీ చేసే చిన్న వాలంటీర్ల గుంపుగా మొదలైనది వేలాది మందికి సేవ చేసే సమగ్ర సంస్థగా అభివృద్ధి చెందింది.',
    'about.story.p2': 'నేడు, మేము కేవలం లక్షణాలను కాకుండా పేదరికం మరియు అసమానత యొక్క మూల కారణాలను పరిష్కరించడానికి రూపొందించబడిన బహుళ కార్యక్రమాలను నిర్వహిస్తున్నాము. మా సమగ్ర విధానం నేడు మేము సృష్టించే మార్పులు రాబోయే తరాలకు ప్రయోజనం చేకూరుస్తాయని నిర్ధారిస్తుంది.',
    'about.values.title': 'మా ప్రధాన విలువలు',
    'about.values.description': 'ఈ సూత్రాలు మా కమ్యూనిటీల సేవలో మేము తీసుకునే ప్రతి నిర్ణయం మరియు ప్రతి చర్యకు మార్గదర్శకత్వం అందిస్తాయి.',
    'about.values.compassion': 'కరుణ',
    'about.values.compassion.desc': 'మేము ప్రతి పరస్పర చర్యను సానుభూతి మరియు అవగాహనతో చేరుకుంటాము, మేము సేవ చేసే ప్రతి వ్యక్తిలో గౌరవాన్ని గుర్తిస్తాము.',
    'about.values.community': 'కమ్యూనిటీ',
    'about.values.community.desc': 'మేము కమ్యూనిటీ-నడిచే పరిష్కారాల శక్తిని నమ్ముతున్నాము మరియు స్థిరమైన మార్పును సృష్టించడానికి స్థానిక నాయకులతో కలిసి పని చేస్తాము.',
    'about.values.impact': 'ప్రభావం',
    'about.values.impact.desc': 'ప్రతి కార్యక్రమం మరియు చొరవ మేము నిజమైన మార్పును తీసుకువస్తున్నామని నిర్ధారించడానికి కొలవగల ఫలితాలతో రూపొందించబడింది.',
    'about.values.excellence': 'శ్రేష్ఠత',
    'about.values.excellence.desc': 'మేము మా అన్ని పనులలో అత్యున్నత ప్రమాణాల కోసం ప్రయత్నిస్తాము, మా సేవలు మరియు విధానాన్ని నిరంతరం మెరుగుపరుస్తాము.',
    
    // Programs Page
    'programs.title': 'మా కార్యక్రమాలు',
    'programs.description': 'రోడ్‌సైడ్ కమ్యూనిటీలలో దీర్ఘకాలిక స్థిరత్వాన్ని నిర్మించేటప్పుడు తక్షణ అవసరాలను పరిష్కరించడానికి రూపొందించబడిన సమగ్ర మద్దతు కార్యక్రమాలు.',
    'programs.nutrition.title': 'పోషణ కార్యక్రమం',
    'programs.nutrition.desc': 'రోడ్‌సైడ్ కుటుంబాలు మరియు పిల్లలకు రోజువారీ భోజన పంపిణీ మరియు పోషణ విద్య.',
    'programs.education.title': 'విద్యా చొరవ',
    'programs.education.desc': 'పిల్లలు మరియు పెద్దలకు నాణ్యమైన విద్య మరియు నైపుణ్య అభివృద్ధి అవకాశాలను అందించడం.',
    'programs.healthcare.title': 'ఆరోగ్య సంరక్షణ ప్రాప్యత',
    'programs.healthcare.desc': 'అణగారిన కమ్యూనిటీల కోసం మొబైల్ మెడికల్ క్లినిక్‌లు మరియు ఆరోగ్య అవగాహన కార్యక్రమాలు.',
    'programs.shelter.title': 'ఆశ్రయ మద్దతు',
    'programs.shelter.desc': 'ఆశ్రయ అప్‌గ్రేడ్‌లు మరియు ప్రాథమిక మౌలిక సదుపాయాల అభివృద్ధి ద్వారా జీవన పరిస్థితులను మెరుగుపరచడం.',
    
    // Contact Page
    'contact.title': 'సంప్రదించండి',
    'contact.description': 'మా కార్యక్రమాల గురించి ప్రశ్నలు ఉన్నాయా? వాలంటీర్ కావాలని లేదా విరాళం ఇవ్వాలని అనుకుంటున్నారా? మేము మీ నుండి వినాలని అనుకుంటున్నాము మరియు మీరు ఎలా పాల్గొనవచ్చో చర్చించాలని అనుకుంటున్నాము.',
    'contact.form.title': 'మాకు సందేశం పంపండి',
    'contact.form.name': 'పూర్తి పేరు',
    'contact.form.email': 'ఇమెయిల్ చిరునామా',
    'contact.form.phone': 'ఫోన్ నంబర్ (ఐచ్ఛికం)',
    'contact.form.subject': 'విషయం',
    'contact.form.message': 'సందేశం',
    'contact.form.send': 'సందేశం పంపండి',
    'contact.info.title': 'సంప్రదింపు సమాచారం',
    
    // Footer
    'footer.mission': 'ఆహారం, విద్య మరియు ఆశతో రోడ్‌సైడ్ కమ్యూనిటీలకు సేవ చేయడానికి అంకితం చేయబడింది. కలిసి, మేము ప్రతి వ్యక్తికి ప్రాథమిక అవసరాలు మరియు అభివృద్ధి చెందే అవకాశాలకు ప్రాప్యత ఉన్న ప్రపంచాన్ని నిర్మిస్తున్నాము.',
    'footer.links': 'త్వరిత లింకులు',
    'footer.contact': 'సంప్రదింపు సమాచారం',
    'footer.copyright': '© 2024 స్మైలీ ఫౌండేషన్. అన్ని హక్కులు రక్షించబడ్డాయి. | నమోదిత లాభాపేక్షలేని సంస్థ'
  },
  
  zh: {
    // Header
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.programs': '项目',
    'nav.contact': '联系我们',
    'header.foundation': '微笑基金会',
    
    // Home Page
    'home.hero.title': '思想的食粮，',
    'home.hero.subtitle': '生活的微笑',
    'home.hero.description': '通过营养、教育和可持续发展赋能路边社区。与我们一起创造持久的改变，一次一个微笑。',
    'home.hero.volunteer': '志愿者',
    'home.stats.title': '我们的影响数字',
    'home.stats.description': '我们共同在印度各地路边社区的生活中产生真正的影响。',
    'home.stats.people': '服务人数',
    'home.stats.meals': '提供餐食',
    'home.stats.children': '教育儿童',
    'home.stats.volunteers': '活跃志愿者',
    'home.mission.title': '我们的使命',
    'home.mission.description1': '微笑基金会致力于通过提供基本服务、教育机会和可持续发展项目来提升路边社区。我们相信每个人都应该获得营养食品、优质教育和建设更美好未来的机会。',
    'home.mission.description2': '通过我们的综合方法，我们直接与社区合作，识别他们的需求并实施创造持久积极变化的长期解决方案。',
    'home.mission.learn': '了解更多关于我们',
    'home.gallery.title': '看我们的工作实践',
    'home.gallery.description': '通过在我们服务的社区中捕获的这些时刻见证我们项目的影响。',
    'home.cta.title': '准备好产生影响了吗？',
    'home.cta.description': '加入成千上万的支持者，他们正在帮助我们在路边社区创造积极变化。每一份贡献，无论大小，都会产生有意义的影响。',
    'home.cta.involved': '参与其中',
    
    // About Page
    'about.title': '关于微笑基金会',
    'about.description': '以在服务不足的社区创造持久变化的愿景而成立，我们致力于通过综合支持项目改善生活。',
    'about.story.title': '我们的故事',
    'about.story.p1': '微笑基金会诞生于一个简单的观察：沿着印度高速公路生活的无数家庭缺乏获得营养食品、优质教育和医疗服务等基本必需品的机会。从分发餐食的小志愿者团体开始，已发展成为服务数千人的综合组织。',
    'about.story.p2': '今天，我们运营多个项目，旨在解决贫困和不平等的根本原因，而不仅仅是症状。我们的整体方法确保我们今天创造的变化将使后代受益。',
    'about.values.title': '我们的核心价值观',
    'about.values.description': '这些原则指导我们在服务社区时做出的每一个决定和采取的每一个行动。',
    'about.values.compassion': '同情心',
    'about.values.compassion.desc': '我们以同理心和理解的态度对待每一次互动，认识到我们服务的每个人的尊严。',
    'about.values.community': '社区',
    'about.values.community.desc': '我们相信社区驱动解决方案的力量，与当地领导者合作创造可持续的变化。',
    'about.values.impact': '影响',
    'about.values.impact.desc': '每个项目和倡议都设计有可衡量的结果，以确保我们正在产生真正的影响。',
    'about.values.excellence': '卓越',
    'about.values.excellence.desc': '我们在所有工作中追求最高标准，不断改进我们的服务和方法。',
    
    // Programs Page
    'programs.title': '我们的项目',
    'programs.description': '综合支持项目，旨在解决即时需求，同时在路边社区建立长期可持续性。',
    'programs.nutrition.title': '营养项目',
    'programs.nutrition.desc': '为路边家庭和儿童提供日常餐食分发和营养教育。',
    'programs.education.title': '教育倡议',
    'programs.education.desc': '为儿童和成人提供优质教育和技能发展机会。',
    'programs.healthcare.title': '医疗保健服务',
    'programs.healthcare.desc': '为服务不足的社区提供移动医疗诊所和健康意识项目。',
    'programs.shelter.title': '住所支持',
    'programs.shelter.desc': '通过住所升级和基础设施发展改善生活条件。',
    
    // Contact Page
    'contact.title': '联系我们',
    'contact.description': '对我们的项目有疑问吗？想要志愿服务或捐款吗？我们很乐意听到您的声音并讨论您如何参与。',
    'contact.form.title': '给我们发消息',
    'contact.form.name': '全名',
    'contact.form.email': '电子邮件地址',
    'contact.form.phone': '电话号码（可选）',
    'contact.form.subject': '主题',
    'contact.form.message': '消息',
    'contact.form.send': '发送消息',
    'contact.info.title': '联系信息',
    
    // Footer
    'footer.mission': '致力于为路边社区提供食物、教育和希望。我们共同建设一个每个人都能获得基本必需品和发展机会的世界。',
    'footer.links': '快速链接',
    'footer.contact': '联系信息',
    'footer.copyright': '© 2024 微笑基金会。保留所有权利。| 注册非营利组织'
  },
  
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.programs': 'Programmes',
    'nav.contact': 'Contact',
    'header.foundation': 'Fondation Smiley',
    
    // Home Page
    'home.hero.title': 'Nourriture pour la pensée,',
    'home.hero.subtitle': 'Sourires pour la vie',
    'home.hero.description': 'Autonomiser les communautés routières grâce à la nutrition, l\'éducation et le développement durable. Rejoignez-nous pour créer un changement durable, un sourire à la fois.',
    'home.hero.volunteer': 'Bénévole',
    'home.stats.title': 'Notre impact en chiffres',
    'home.stats.description': 'Ensemble, nous faisons une vraie différence dans la vie des communautés routières à travers l\'Inde.',
    'home.stats.people': 'Personnes servies',
    'home.stats.meals': 'Repas fournis',
    'home.stats.children': 'Enfants éduqués',
    'home.stats.volunteers': 'Bénévoles actifs',
    'home.mission.title': 'Notre mission',
    'home.mission.description1': 'La Fondation Smiley se consacre à l\'élévation des communautés routières en fournissant des services essentiels, des opportunités éducatives et des programmes de développement durable. Nous croyons que chaque personne mérite l\'accès à une nourriture nutritive, une éducation de qualité et la chance de construire un avenir meilleur.',
    'home.mission.description2': 'Grâce à notre approche globale, nous travaillons directement avec les communautés pour identifier leurs besoins et mettre en œuvre des solutions à long terme qui créent un changement positif durable.',
    'home.mission.learn': 'En savoir plus sur nous',
    'home.gallery.title': 'Voir notre travail en action',
    'home.gallery.description': 'Témoignez de l\'impact de nos programmes à travers ces moments capturés dans les communautés que nous servons.',
    'home.cta.title': 'Prêt à faire la différence ?',
    'home.cta.description': 'Rejoignez des milliers de supporters qui nous aident à créer un changement positif dans les communautés routières. Chaque contribution, quelle que soit sa taille, a un impact significatif.',
    'home.cta.involved': 'S\'impliquer',
    
    // About Page
    'about.title': 'À propos de la Fondation Smiley',
    'about.description': 'Fondée avec une vision de créer un changement durable dans les communautés mal desservies, nous nous consacrons à améliorer les vies grâce à des programmes de soutien complets.',
    'about.story.title': 'Notre histoire',
    'about.story.p1': 'La Fondation Smiley est née d\'une observation simple : d\'innombrables familles vivant le long des autoroutes de l\'Inde manquent d\'accès aux nécessités de base comme la nourriture nutritive, l\'éducation de qualité et les services de santé. Ce qui a commencé comme un petit groupe de bénévoles distribuant des repas s\'est développé en une organisation complète servant des milliers de personnes.',
    'about.story.p2': 'Aujourd\'hui, nous opérons plusieurs programmes conçus pour s\'attaquer aux causes profondes de la pauvreté et de l\'inégalité, pas seulement aux symptômes. Notre approche holistique garantit que les changements que nous créons aujourd\'hui bénéficieront aux générations futures.',
    'about.values.title': 'Nos valeurs fondamentales',
    'about.values.description': 'Ces principes guident chaque décision que nous prenons et chaque action que nous entreprenons au service de nos communautés.',
    'about.values.compassion': 'Compassion',
    'about.values.compassion.desc': 'Nous abordons chaque interaction avec empathie et compréhension, reconnaissant la dignité de chaque personne que nous servons.',
    'about.values.community': 'Communauté',
    'about.values.community.desc': 'Nous croyons au pouvoir des solutions communautaires et travaillons aux côtés des dirigeants locaux pour créer un changement durable.',
    'about.values.impact': 'Impact',
    'about.values.impact.desc': 'Chaque programme et initiative est conçu avec des résultats mesurables pour s\'assurer que nous faisons une vraie différence.',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'Nous visons les plus hauts standards dans tout notre travail, améliorant continuellement nos services et notre approche.',
    
    // Programs Page
    'programs.title': 'Nos programmes',
    'programs.description': 'Programmes de soutien complets conçus pour répondre aux besoins immédiats tout en construisant la durabilité à long terme dans les communautés routières.',
    'programs.nutrition.title': 'Programme de nutrition',
    'programs.nutrition.desc': 'Distribution quotidienne de repas et éducation nutritionnelle pour les familles et enfants routiers.',
    'programs.education.title': 'Initiative éducative',
    'programs.education.desc': 'Fournir une éducation de qualité et des opportunités de développement des compétences pour les enfants et adultes.',
    'programs.healthcare.title': 'Accès aux soins de santé',
    'programs.healthcare.desc': 'Cliniques médicales mobiles et programmes de sensibilisation à la santé pour les communautés mal desservies.',
    'programs.shelter.title': 'Soutien au logement',
    'programs.shelter.desc': 'Améliorer les conditions de vie grâce aux améliorations de logement et au développement d\'infrastructures de base.',
    
    // Contact Page
    'contact.title': 'Contactez-nous',
    'contact.description': 'Vous avez des questions sur nos programmes ? Vous voulez faire du bénévolat ou faire un don ? Nous aimerions avoir de vos nouvelles et discuter de la façon dont vous pouvez vous impliquer.',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Adresse e-mail',
    'contact.form.phone': 'Numéro de téléphone (optionnel)',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le message',
    'contact.info.title': 'Informations de contact',
    
    // Footer
    'footer.mission': 'Dédiée à servir les communautés routières avec nourriture, éducation et espoir. Ensemble, nous construisons un monde où chaque personne a accès aux nécessités de base et aux opportunités de prospérer.',
    'footer.links': 'Liens rapides',
    'footer.contact': 'Informations de contact',
    'footer.copyright': '© 2024 Fondation Smiley. Tous droits réservés. | Organisation à but non lucratif enregistrée'
  },
  
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.programs': 'Programas',
    'nav.contact': 'Contacto',
    'header.foundation': 'Fundación Smiley',
    
    // Home Page
    'home.hero.title': 'Alimento para el pensamiento,',
    'home.hero.subtitle': 'Sonrisas para la vida',
    'home.hero.description': 'Empoderando comunidades de carretera a través de nutrición, educación y desarrollo sostenible. Únete a nosotros para crear un cambio duradero, una sonrisa a la vez.',
    'home.hero.volunteer': 'Voluntario',
    'home.stats.title': 'Nuestro impacto en números',
    'home.stats.description': 'Juntos, estamos haciendo una diferencia real en las vidas de las comunidades de carretera en toda India.',
    'home.stats.people': 'Personas servidas',
    'home.stats.meals': 'Comidas proporcionadas',
    'home.stats.children': 'Niños educados',
    'home.stats.volunteers': 'Voluntarios activos',
    'home.mission.title': 'Nuestra misión',
    'home.mission.description1': 'La Fundación Smiley se dedica a elevar las comunidades de carretera proporcionando servicios esenciales, oportunidades educativas y programas de desarrollo sostenible. Creemos que cada persona merece acceso a alimentos nutritivos, educación de calidad y la oportunidad de construir un futuro mejor.',
    'home.mission.description2': 'A través de nuestro enfoque integral, trabajamos directamente con las comunidades para identificar sus necesidades e implementar soluciones a largo plazo que crean un cambio positivo duradero.',
    'home.mission.learn': 'Aprende más sobre nosotros',
    'home.gallery.title': 'Ve nuestro trabajo en acción',
    'home.gallery.description': 'Presencia el impacto de nuestros programas a través de estos momentos capturados en las comunidades que servimos.',
    'home.cta.title': '¿Listo para hacer la diferencia?',
    'home.cta.description': 'Únete a miles de partidarios que nos están ayudando a crear un cambio positivo en las comunidades de carretera. Cada contribución, sin importar el tamaño, hace un impacto significativo.',
    'home.cta.involved': 'Involúcrate',
    
    // About Page
    'about.title': 'Acerca de la Fundación Smiley',
    'about.description': 'Fundada con una visión de crear un cambio duradero en comunidades desatendidas, hemos estado dedicados a mejorar vidas a través de programas de apoyo integral.',
    'about.story.title': 'Nuestra historia',
    'about.story.p1': 'La Fundación Smiley nació de una observación simple: innumerables familias que viven a lo largo de las carreteras de India carecen de acceso a necesidades básicas como alimentos nutritivos, educación de calidad y servicios de salud. Lo que comenzó como un pequeño grupo de voluntarios distribuyendo comidas ha crecido hasta convertirse en una organización integral que sirve a miles.',
    'about.story.p2': 'Hoy, operamos múltiples programas diseñados para abordar las causas raíz de la pobreza y la desigualdad, no solo los síntomas. Nuestro enfoque holístico asegura que los cambios que creamos hoy beneficiarán a las generaciones futuras.',
    'about.values.title': 'Nuestros valores fundamentales',
    'about.values.description': 'Estos principios guían cada decisión que tomamos y cada acción que emprendemos al servicio de nuestras comunidades.',
    'about.values.compassion': 'Compasión',
    'about.values.compassion.desc': 'Abordamos cada interacción con empatía y comprensión, reconociendo la dignidad en cada persona que servimos.',
    'about.values.community': 'Comunidad',
    'about.values.community.desc': 'Creemos en el poder de las soluciones impulsadas por la comunidad y trabajamos junto a líderes locales para crear un cambio sostenible.',
    'about.values.impact': 'Impacto',
    'about.values.impact.desc': 'Cada programa e iniciativa está diseñado con resultados medibles para asegurar que estamos haciendo una diferencia real.',
    'about.values.excellence': 'Excelencia',
    'about.values.excellence.desc': 'Nos esforzamos por los más altos estándares en todo nuestro trabajo, mejorando continuamente nuestros servicios y enfoque.',
    
    // Programs Page
    'programs.title': 'Nuestros programas',
    'programs.description': 'Programas de apoyo integral diseñados para abordar necesidades inmediatas mientras construyen sostenibilidad a largo plazo en comunidades de carretera.',
    'programs.nutrition.title': 'Programa de nutrición',
    'programs.nutrition.desc': 'Distribución diaria de comidas y educación nutricional para familias y niños de carretera.',
    'programs.education.title': 'Iniciativa educativa',
    'programs.education.desc': 'Proporcionando educación de calidad y oportunidades de desarrollo de habilidades para niños y adultos.',
    'programs.healthcare.title': 'Acceso a atención médica',
    'programs.healthcare.desc': 'Clínicas médicas móviles y programas de concienciación sobre salud para comunidades desatendidas.',
    'programs.shelter.title': 'Apoyo de refugio',
    'programs.shelter.desc': 'Mejorando las condiciones de vida a través de mejoras de refugio y desarrollo de infraestructura básica.',
    
    // Contact Page
    'contact.title': 'Ponte en contacto',
    'contact.description': '¿Tienes preguntas sobre nuestros programas? ¿Quieres ser voluntario o hacer una donación? Nos encantaría saber de ti y discutir cómo puedes involucrarte.',
    'contact.form.title': 'Envíanos un mensaje',
    'contact.form.name': 'Nombre completo',
    'contact.form.email': 'Dirección de correo electrónico',
    'contact.form.phone': 'Número de teléfono (opcional)',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar mensaje',
    'contact.info.title': 'Información de contacto',
    
    // Footer
    'footer.mission': 'Dedicada a servir a las comunidades de carretera con comida, educación y esperanza. Juntos, estamos construyendo un mundo donde cada persona tiene acceso a necesidades básicas y oportunidades para prosperar.',
    'footer.links': 'Enlaces rápidos',
    'footer.contact': 'Información de contacto',
    'footer.copyright': '© 2024 Fundación Smiley. Todos los derechos reservados. | Organización sin fines de lucro registrada'
  }
};