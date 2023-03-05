// type  status = working | closed |under-development | otherThanJatSamaj | NotKnown
//TODO : type: male | female | coEd

const projectsData = {
  "ajmer": [
    {
      "id": 1,
      "title": "श्री वीर तेजा जाट छात्रावास, ब्यावर",
      "description": "Ajmer",
      "imgSrc": '/assets/hostel/sri-veer-teja-jat-hostel-byaver.jpg', //missing
      "data": '/assets/hostel/ajmer-sri-veer-teja-jat-hostel-byaver.pdf', 
      "href": "ajmer-sri-veer-teja-jat-hostel-byaver",
      "status":  "working"
    },
    {
      "id": 2,
      "title": "श्री किसान छात्रावास समिति, केकड़ी",
      "description": "Ajmer",
      "imgSrc": '/assets/hostel/sri-kisan-hostel-kekri.jpg', //missing
      "data": '/assets/hostel/ajmer-sri-kisan-hostel-kekri.pdf', 
      "href": "ajmer-sri-kisan-hostel-kekri",
      "status":  "working"
    },
    {
      "id": 3,
      "title": "जाट छात्रावास, विजयनगर",
      "description": "Ajmer",
      "imgSrc": '/assets/hostel/ajmer-vijaynagar.jpg',
      "data": '/assets/hostel/ajmer-vijay-nagar.pdf',  
      "href": "ajmer-vijay-nagar",
      "status":  "working"
    },
    {
      "id": 4,
      "title": "श्री वीर तेजा किसान छात्रावास, अजमेर",
      "description": "Ajmer",
      "imgSrc": '/assets/hostel/ajmer.jpg',  //missing
      "data": '/assets/hostel/ajmer.pdf', 
      "href": "ajmer",
      "status":  "working"
    },
    {
      "id": 5,
      "title": "जाट छात्रावास, किशनगढ़",
      "description": "Ajmer",
      "imgSrc": '/assets/hostel/kishangarh.jpg', //missing
      "data": '/assets/hostel/ajmer-kishangarh.pdf', 
      "href": "ajmer-kishangarh",
      "status":  "working"
    },
    {
      "id": 6,
      "title": "जाट छात्रावास सुरसरा, अजमेर",
      "description": "Ajmer",
      "imgSrc": '/assets/hostel/ajmer-sursara.jpeg',
      "data": '/assets/hostel/ajmer-sursara-ajmer.pdf', 
      "href": "ajmer-sursara-ajmer",
      "status":  "working"
    },
  ],
  
  "alwar": [
    {
      "id": 1,
      "title": "श्री जाट छात्रावास, लक्ष्मणगढ़",
      "description": "Alwar",
      "imgSrc": '/assets/hostel/laxmangarh-alwar.jpg', //missing
      "data": '/assets/hostel/alwar-laxmangarh-alwar.pdf', 
      "href": "alwar-laxmangarh-alwar",
      "status":  "working"
    },
    {
      "id": 2,
      "title": "महाराजा सुरजमल छात्रावास समिति, बानसूर, अलवर",
      "description": "Alwar",
      "imgSrc": '/assets/hostel/bansur-alwar.jpg', //missing
      "data": '/assets/hostel/alwar-bansur-alwar.pdf', 
      "href": "alwar-bansur-alwar",
      "status":  "working"
    },
    {
      "id": 3,
      "title": "जाट छात्रावास, अलवर",
      "description": "Alwar",
      "imgSrc": '/assets/hostel/alwar-jat-hostel-boys-alwar.jpeg',
      "data": '/assets/hostel/alwar-jat-hostel-boys-alwar.pdf',  
      "href": "alwar-jat-hostel-boys-alwar",
      "status":  "working"
    },
    {
      "id": 4,
      "title": "बालिका जाट छात्रावास, अलवर",
      "description": "Alwar",
      "imgSrc": '/assets/hostel/balika-alwar.jpg',  //missing
      "data": '/assets/hostel/alwar-balika-alwar.pdf',  //missing
      "href": "alwar-balika-alwar",
      "status":  "working"
    }
  ],

  "barmer": [
    {
      "id": 1,
      "title": "किसान कन्या छात्रावास बलदेव नगर, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer-kisan-kanya-barmer.jpeg',  
      "data": '/assets/hostel/barmer-kisan-kanya-barmer.pdf',  //missing
      "href": "barmer-kisan-kanya-barmer",
      "status":  "working"
    },
    {
      "id": 2,
      "title": "श्री बलदेव राम मिर्धा किसान छात्रावास, चौहटन",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer-baldev-ram-chohtan-barmer.jpeg', 
      "data": '/assets/hostel/barmer-baldev-ram-chohtan-barmer.pdf',  //missing
      "href": "barmer-baldev-ram-chohtan-barmer",
      "status":  "working"
    },
    {
      "id": 3,
      "title": "श्री किसान बालिका छात्रावास, चौहटन",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/kisan-girls-chohtan-barmer.jpg',
      "data": '/assets/hostel/kisan-girls-chohtan-barmer.pdf',  //missing
      "href": "kisan-girls-chohtan-barmer",
      "status":  "working"
    },
    {
      "id": 4,
      "title": "वीर तेजाजी बालक छात्रावास, बालोतरा",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer-tejaji-boys-balotara-barmer.jpeg', 
      "data": '/assets/hostel/barmer-tejaji-boys-balotara-barmer.pdf',  //missing
      "href": "barmer-tejaji-boys-balotara-barmer",
      "status":  "working"
    },
    {
      "id": 5,
      "title": "वीर तेजाजी बालिका छात्रावास, न्यू बस स्टैण्ड, बालोतरा",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer-tejaji-girls-balotara-barmer.jpg',  
      "data": '/assets/hostel/barmer-tejaji-girls-balotara-barmer.pdf',  
      "href": "barmer-tejaji-girls-balotara-barmer",
      "status":  "working"
    },
    {
      "id": 6,
      "title": "किसान छात्रावास संस्थान, धोरीमन्ना",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/kisan-hostel-dhorimanna-barmer.jpg',  //missing
      "data": '/assets/hostel/kisan-hostel-dhorimanna-barmer.pdf',   //missing
      "href": "kisan-hostel-dhorimanna-barmer",
      "status":  "working"
    },
    {
      "id": 7,
      "title": "चौधरी चरण सिंह किसान छात्रावास, सिणधरी",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer-charan-singh-sindhari-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer-charan-singh-sindhari-barmer.pdf',   
      "href": "barmer-charan-singh-sindhari-barmer",
      "status":  "working"
    },
    {
      "id": 8,
      "title": "श्री हरलाल जाट छात्रावास विकास संस्थान, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/harlal-hostel-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer-harlal-hostel-barmer.pdf',   
      "href": "barmer-harlal-hostel-barmer",
      "status":  "working"
    },
    {
      "id": 9,
      "title": "श्री बलदेव राम मिर्धा शिक्षण संस्थान कल्याणपुर, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/baldev-ram-kalyanpur-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer-baldev-ram-kalyanpur-barmer.pdf',   
      "href": "barmer-baldev-ram-kalyanpur-barmer",
      "status":  "working"
    },
    {
      "id": 10,
      "title": "श्री बलदेव राम मिर्धा कन्या शिक्षण संस्थान कल्याणपुर, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/baldev-ram-girls-kalyanpur-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer-baldev-ram-girls-kalyanpur-barmer.pdf',   
      "href": "barmer-baldev-ram-girls-kalyanpur-barmer",
      "status":  "working"
    },
    {
      "id": 11,
      "title": "श्री चौधरी रामदान शिक्षण संस्थान, रामसर, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer-ramdan-hostel-ramsar-barmer.jpeg',  //missing
      "data": '/assets/hostel/barmer-ramdan-hostel-ramsar-barmer.pdf',   
      "href": "barmer-ramdan-hostel-ramsar-barmer",
      "status":  "working"
    },
    {
      "id": 12,
      "title": "किसान बोर्डिंग हॉउस संस्थान, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/kisan-boarding-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer-kisan-boarding-barmer.pdf',   
      "href": "barmer-kisan-boarding-barmer",
      "status":  "working"
    },
    {
      "id": 13,
      "title": "श्री जगदीश सिंह मेमोरियल छात्रावास, बायतु",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/baytu.jpg',  //missing
      "data": '/assets/hostel/barmer-baytu.pdf',    //missing
      "href": "barmer-baytu",
      "status":  "under-development"
    },
    {
      "id": 14,
      "title": "जाट समाज विकास एवं छात्रावास , गुढामालानी",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer-gudamalani.jpg',  //missing
      "data": '/assets/hostel/barmer-gudamalani.pdf',    //missing
      "href": "barmer-gudamalani",
    },
    ,
    {
      "id": 15,
      "title": "जाट समाज विकास एवं छात्रावास, गुढामालानी",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer-gudamalani.jpg',  //missing
      "data": '/assets/hostel/barmer-gudamalani.pdf',    //missing
      "href": "barmer-gudamalani",
    }
    ,
    {
      "id": 16,
      "title": "श्री बलदेव राम मिर्धा किसान छात्रावास, शिव",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/sheo.jpg',  //missing
      "data": '/assets/hostel/barmer-sheo.pdf',   
      "href": "barmer-sheo",
    },
    {
      "id": 17,
      "title": "श्री बलदेव राम मिर्धा किसान छात्रावास, धनाऊ",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/dhanau.jpg',  //missing
      "data": '/assets/hostel/barmer-dhanau.pdf',    //missing
      "href": "barmer-dhanau",
    },
    {
      "id": 18,
      "title": "श्री नाथूराम मिर्धा बालिका छात्रावास , सिणधरी",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/sindhari-girls.jpg',  //missing
      "data": '/assets/hostel/barmer-sindhari-girls.pdf', 
      "href": "barmer-sindhari-girls",
    },
    {
      "id": 18,
      "title": "डॉ. वीरेन्द्र मेंमोरियल छात्रावास, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/virendra-memorial-barmer.jpg',  //missing
      "data": '/assets/hostel/virendra-memorial-barmer.pdf',  //missing
      // "href": "virendra-memorial-barmer",
      "href": "default",
      "status":  "under construction"
    },
    {
      "id": 19,
      "title": "बलदेव राम मिर्धा छात्रावास, जोधपुर रोड़, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/baldev-ram-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer-baldev-ram-barmer.pdf', 
      "href": "barmer-baldev-ram-barmer",
    },
    {
      "id": 20,
      "title": "जाट समाज शैक्षणिक एवं विकास संस्थान, सेड़वा",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/sedwa.jpg',  //missing
      "data": '/assets/hostel/sedwa.pdf', //missing
      "href": "sedwa",
    },
    {
      "id": 21,
      "title": "चौधरी रामदान किसान छात्रावास, भीमडा",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/bhimda.jpg',  //missing
      "data": '/assets/hostel/barmer-bhimda.pdf', 
      "href": "barmer-bhimda",
    }
  ]
,
  "bhilwara": [
    {
      "id": 1,
      "title": "श्री शिव जाट छात्रावास समिति, शाहपुरा",
      "description": "Bhilwara",
      "imgSrc": '/assets/hostel/shahpura-bhilwara.jpg',  //missing
      "data": '/assets/hostel/bhilwara-shahpura-bhilwara.pdf',  
      "href": "bhilwara-shahpura-bhilwara",
      "status":  "working"
    },
    {
      "id": 2,
      "title": "वीर तेजा जाट छात्रावास, भीलवाड़ा",
      "description": "Bhilwara",
      "imgSrc": '/assets/hostel/teja-jat-bhilwara.jpg',  //missing
      "data": '/assets/hostel/bhilwara-teja-jat-bhilwara.pdf',  
      "href": "bhilwara-teja-jat-bhilwara",
      "status":  "working"
    },
    {
      "id": 3,
      "title": "बदनोर जाट समाज छात्रावास, गुलाबपुरा, भीलवाड़ा",
      "description": "Bhilwara",
      "imgSrc": '/assets/hostel/gulabpura-bhilwara.jpg',  //missing
      "data": '/assets/hostel/bhilwara-gulabpura-bhilwara.pdf',  
      "href": "bhilwara-gulabpura-bhilwara",
      "status":  "working"
    },
    {
      "id": 4,
      "title": "जाट छात्रावास, गंगापुर, भीलवाड़ा",
      "description": "Bhilwara",
      "imgSrc": '/assets/hostel/gangapur-bhilwara.jpg',  //missing
      "data": '/assets/hostel/bhilwara-gangapur-bhilwara.pdf',   //missing
      "href": "default",
      // "href": "bhilwara-gangapur-bhilwara",
      "status":  "working"
    },
    {
      "id": 5,
      "title": "कन्या छात्रावास, भीलवाड़ा",
      "description": "Bhilwara",
      "imgSrc": '/assets/hostel/girls-bhilwara.jpg',  //missing
      "data": '/assets/hostel/bhilwara-girls-bhilwara.pdf',   //missing
      // "href": "bhilwara-girls-bhilwara",
      "href": "default",
      "status":  "working"
    }
  ],
"bikaner": [
  {
    "id": 1,
    "title": "जाट छात्रावास जयपुर रोड़, बीकानेर",
    "description": "Bikaner",
    "imgSrc": '/assets/hostel/bikaner-jat-hostel-bikaner.jpg',  
    "data": '/assets/hostel/bikaner-jat-hostel-bikaner.pdf',  
    "href": "bikaner-jat-hostel-bikaner",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "श्री वीर तेजा छात्रावास रोडा रोड़, नोखा",
    "description": "Bikaner",
    "imgSrc": '/assets/hostel/bikaner-nokha-bikaner.jpeg', 
    "data": '/assets/hostel/nokha-bikaner.pdf',  //missing
    "href": "nokha-bikaner",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "भीमसेन चौधरी किसान छात्रावास, लूणकरणसर",
    "description": "Bikaner",
    "imgSrc": '/assets/hostel/bikaner-lunkaransar-bikaner.jpeg', 
    "data": '/assets/hostel/lunkaransar-bikaner.pdf',  
    // "href": "lunkaransar-bikaner",
    "href": "default",
    "status":  "working"
  },
  {
    "id": 4,
    "title": "महर्षि दयानन्द जाट छात्रावास, श्रीडूंगरगढ़",
    "description": "Bikaner",
    "imgSrc": '/assets/hostel/sridungargarh-bikaner.jpg',  //missing
    "data": '/assets/hostel/bikaner-sridungargarh-bikaner.pdf',  
    "href": "bikaner-sridungargarh-bikaner",
    "status":  "working"
  },
  {
    "id": 5,
    "title": "किसान छात्रावास रानी बाजार, बीकानेर",
    "description": "Bikaner",
    "imgSrc": '/assets/hostel/bikaner-rani-bazaar-bikaner.jpg',  
    "data": '/assets/hostel/bikaner-rani-bazaar-bikaner.pdf',  
    "href": "bikaner-rani-bazaar-bikaner",
    "status":  "working"
  },
  {
    "id": 6,
    "title": "चौधरी चरण सिंह बालिका छात्रावास, बीकानेर",
    "description": "Bikaner",
    "imgSrc": '/assets/hostel/bikaner-girls-bikaner.jpg', 
    "data": '/assets/hostel/girls-bikaner.pdf',   //missing
    // "href": "girls-bikaner",
    "href": "default",
  }
],
"chittorgarh": [
  {
    "id": 1,
    "title": "श्री वीर तेजा जाट छात्रावास, चित्तौड़गढ़",
    "description": "Chittorgarh",
    "imgSrc": '/assets/hostel/teja-boys-chittorgarh.jpg',  //missing
    "data": '/assets/hostel/chittorgarh-teja-boys-chittorgarh.pdf',  
    "href": "chittorgarh-teja-boys-chittorgarh",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "श्री वीर तेजा जाट बालिका छात्रावास, चित्तौड़गढ़",
    "description": "Chittorgarh",
    "imgSrc": '/assets/hostel/teja-girls-chittorgarh.jpg',  //missing
    "data": '/assets/hostel/chittorgarh-teja-girls-chittorgarh.pdf',  
    "href": "chittorgarh-teja-girls-chittorgarh",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "जाट छात्रावास विकास संस्थान, कपासन",
    "description": "Chittorgarh",
    "imgSrc": '/assets/hostel/kapasan-boys-chittorgarh.jpg',  //missing
    "data": '/assets/hostel/chittorgarh-kapasan-boys-chittorgarh.pdf',  
    "href": "chittorgarh-kapasan-boys-chittorgarh",
  },
  {
    "id": 4,
    "title": "जाट बालिका छात्रावास, कपासन",
    "description": "Chittorgarh",
    "imgSrc": '/assets/hostel/kapasan-girls-chittorgarh.jpg',  //missing
    "data": '/assets/hostel/chittorgarh-kapasan-girls-chittorgarh.pdf',  
    "href": "chittorgarh-kapasan-girls-chittorgarh",
  }
],
"churu": [
  {
    "id": 1,
    "title": "वैदिक कन्या छात्रावास प्रबंध समिति, तारानगर",
    "description": "Churu",
    "imgSrc": '/assets/hostel/churu-taranagar-churu.png',  
    "data": '/assets/hostel/churu-taranagar-churu.pdf',  
    "href": "churu-taranagar-churu",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "ग्रामीण किसान छात्रावास संस्थान रेलवे फाटक के पास सालासर बाईपास रोड़, रतनगढ़",
    "description": "Churu",
    "imgSrc": '/assets/hostel/churu-ratangarh-boys-churu.jpg',  //missing
    "data": '/assets/hostel/ratangarh-boys-churu.pdf',   //missing
    // "href": "ratangarh-boys-churu",
    "href": "default",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "जाट छात्रावास, सुजानगढ़",
    "description": "Churu",
    "imgSrc": '/assets/hostel/sujangarh-boys-churu.jpg',  //missing
    "data": '/assets/hostel/sujangarh-boys-churu.pdf',   //missing
    // "href": "sujangarh-boys-churu",
    "href": "default",
    "status":  "working"
  },
  {
    "id": 4,
    "title": "विद्यार्थी आश्रम, राजगढ़",
    "description": "Churu",
    "imgSrc": '/assets/hostel/rajgarh-churu.jpg',  //missing
    "data": '/assets/hostel/churu-rajgarh-churu.pdf',  
    "href": "churu-rajgarh-churu",
    "status":  "working"
  },
  {
    "id": 5,
    "title": "किसान छात्रावास, सरदारशहर",
    "description": "Churu",
    "imgSrc": '/assets/hostel/sardarshahar-boys-churu.jpg',  //missing
    "data": '/assets/hostel/sardarshahar-boys-churu.pdf',   //missing
    // "href": "sardarshahar-boys-churu",
    "href": "default",
    "status":  "working"
  },
  {
    "id": 6,
    "title": "आदर्श कन्या छात्रावास, सरदारशहर",
    "description": "Churu",
    "imgSrc": '/assets/hostel/sardarshahar-girls-churu.jpg',  //missing
    "data": '/assets/hostel/sardarshahar-girls-churu.pdf',   //missing
    // "href": "sardarshahar-girls-churu",
    "href": "default",
    "status":  "working"
  }
],
"hanumangarh": [
  {
    "id": 1,
    "title": "जाट कन्या छात्रावास, हनुमानगढ़",
    "description": "Hanumangarh",
    "imgSrc": '/assets/hostel/hanumangarh-jat-girls-hanumangarh.jpeg',  //missing
    "data": '/assets/hostel/jat-girls-hanumangarh.pdf',   //missing
    // "href": "jat-girls-hanumangarh",
    "href": "default",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "महारानी किशोरी देवी छात्रावास, रावतसर",
    "description": "Hanumangarh",
    "imgSrc": '/assets/hostel/hanumangarh-ravatsar-hanumangarh.jpeg',  //missing
    "data": '/assets/hostel/ravatsar-hanumangarh.pdf',   //missing
    "href": "ravatsar-hanumangarh",
    "status":  "working"
  }
],
"jaisalmer": [
  {
    "id": 1,
    "title": "श्री महादेव जाट विकास व शोध संस्थान, फतेहगढ़",
    "description": "Jaisalmer",
    "imgSrc": '/assets/hostel/jaisalmer-fatehgarh.jpg',  //missing
    "data": '/assets/hostel/mahadev-jaisalmer.pdf',   //missing
    "href": "mahadev-jaisalmer",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "किसान छात्रावास, भणियाणा",
    "description": "Jaisalmer",
    "imgSrc": '/assets/hostel/jaisalmer-bhaniayana-jaisalmer.jpg',  //missing
    "data": '/assets/hostel/jaisalmer-bhaniayana-jaisalmer.pdf',   //missing
    "href": "jaisalmer-bhaniayana-jaisalmer",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "कन्या छात्रावास, जैसलमेर",
    "description": "Jaisalmer",
    "imgSrc": '/assets/hostel/girls-jaisalmer.jpg',  //missing
    "data": '/assets/hostel/girls-jaisalmer.pdf',   //missing
    // "href": "girls-jaisalmer",
    "href": "default",
  }
],
"jaipur": [
  {
    "id": 1,
    "title": "सवाई जवाहर सिंह जाट छात्रावास जयपुर",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/sawai-jawahar-jat-hostel-jaipur.jpg',  //missing
    "data": '/assets/hostel/sawai-jawahar-jat-hostel-jaipur.pdf',   //missing
    "href": "sawai-jawahar-jat-hostel-jaipur",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "स्वाधीन जाट छात्रावास, जयपुर",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/swadhin-jat-jaipur.jpg',  //missing
    "data": '/assets/hostel/swadhin-jat-jaipur.pdf',   //missing
    "href": "swadhin-jat-jaipur",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "राजस्थान किसान छात्रावास, जयपुर",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/rajasthan-kisaan-jaipur.jpg',  //missing
    "data": '/assets/hostel/rajasthan-kisaan-jaipur.pdf',   //missing
    "href": "rajasthan-kisaan-jaipur",
    "status":  "working"
  },
  {
    "id": 4,
    "title": "ग्रामीण महिला छात्रावास, मुरलीपुरा, जयपुर",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/murlipura-jaipur.jpg',  //missing
    "data": '/assets/hostel/murlipura-jaipur.pdf',   //missing
    "href": "murlipura-jaipur",
    "status":  "working"
  },
  {
    "id": 5,
    "title": "महाराजा सूरजमल छात्रावास, कोटपूतली, जयपुर",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/kotputli-jaipur.jpg',  //missing
    "data": '/assets/hostel/kotputli-jaipur.pdf',   //missing
    // "href": "kotputli-jaipur",
    "href": "default",
    "status":  "working"
  },
  {
    "id": 6,
    "title": "वीर तेजाजी बालिका छात्रावास, चाकसू, जयपुर",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/chaksu-jaipur.jpg',  //missing
    "data": '/assets/hostel/chaksu-jaipur.pdf',   //missing
    // "href": "chaksu-jaipur",
    "href": "default",
    "status":  "working"
  },
  {
    "id": 7,
    "title": "श्री वीर तेजा जाट समाज संस्थान, फुलेरा, जयपुर",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/fulera-jaipur.jpg',  //missing
    "data": '/assets/hostel/fulera-jaipur.pdf',   //missing
    // "href": "fulera-jaipur",
    "href": "default",
    "status":  "working"
  },
  {
    "id": 8,
    "title": "जाट छात्रावास (जाट विकास समिति) दुधु, जयपुर",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/dudhu-jaipur.jpg',  //missing
    "data": '/assets/hostel/dudhu-jaipur.pdf',   //missing
    // "href": "dudhu-jaipur",
    "href": "default",
    "status":  "working"
  },
  {
    "id": 9,
    "title": "किसान सेवा समिति, फागी",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/jaipur-fagi-jaipur.jpg',  //missing
    "data": '/assets/hostel/jaipur-fagi-jaipur.pdf',   //missing
    "href": "jaipur-fagi-jaipur",
    "status":  "working"
  }
],
"jalore": [
  {
    "id": 1,
    "title": "श्री बलदेव राम मिर्धा जाट समाज सेवा संस्थान, सांचौर",
    "description": "Jalore",
    "imgSrc": '/assets/hostel/sanchore-jalore.jpg',  //missing
    "data": '/assets/hostel/jalore-sanchore-jalore.pdf', 
    "href": "jalore-sanchore-jalore",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "जाट समाज शिक्षण संस्थान, भीनमाल",
    "description": "Jalore",
    "imgSrc": '/assets/hostel/jalore-bhinmal-jalore.jpeg', 
    "data": '/assets/hostel/bhinmal-jalore.pdf', //missing
    // "href": "bhinmal-jalore",
    "href": "default",
    "status":  "working"
  }
],
"jodhpur": [
  {
    "id": 1,
    "title": "किसान तेजा रामगढ़ी शिक्षण संस्थान, कागा जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur-ramhgarhi.jpg',  //missing
    "data": '/assets/hostel/kaga-jodhpur.pdf',  //missing
    "href": "kaga-jodhpur",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "वीर तेजा छात्रावास शिप हाउस रोड़ पावटा, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur-paota-jodhpur.jpeg',  
    "data": '/assets/hostel/paota-jodhpur.pdf', //missing
    "href": "paota-jodhpur",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "श्री बलदेव राम शिक्षण सेवा संस्थान, पीपाड़, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur-pipar-jodhpur.jpeg',  //missing
    "data": '/assets/hostel/pipar-jodhpur.pdf', //missing
    "href": "pipar-jodhpur",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "श्री रामनारायण चौधरी छात्रावास, भगत की कोठी, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/zinda-jodhpur.jpg',  //missing
    "data": '/assets/hostel/zinda-jodhpur.pdf', //missing
    "href": "zinda-jodhpur",
    "status":  "working"
  },
  {
    "id": 4,
    "title": "किसान छात्रावास, बावड़ी",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/baori-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur-baori-jodhpur.pdf', //missing
    "href": "jodhpur-baori-jodhpur",
    "status":  "working"
  },
  {
    "id": 5,
    "title": "वीर एस.पी. ताराचंद जाट छात्रावास, बिलाड़ा, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur-bilara-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur-bilara-jodhpur.pdf', //missing
    "href": "jodhpur-bilara-jodhpur",
    "status":  "working"
  },
  {
    "id": 6,
    "title": "श्री वीर तेजाजी किसान छात्रावास, ओसियां, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur-osiya-jodhpur.jpeg',  //missing
    "data": '/assets/hostel/osiya-jodhpur.pdf', //missing
    "href": "osiya-jodhpur",
    "status":  "working"
  },
  {
    "id": 7,
    "title": "किसान छात्रावास, पीपाड़ शहर, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/pipar-girls-jodhpur.jpg',  //missing
    "data": '/assets/hostel/pipar-girls-jodhpur.pdf', //missing
    // "href": "pipar-girls-jodhpur",
    "href": "default",
    "status":  "working"
  },
  {
    "id": 8,
    "title": "किसान छात्रावास, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/kisan-jodhpur.jpg',  //missing
    "data": '/assets/hostel/kisan-jodhpur.pdf', //missing
    "href": "kisan-jodhpur",
    "status":  "working"
  },
  {
    "id": 9,
    "title": "किसान छात्रावास, लोहावट",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/lohavat-jodhpur.jpg',  //missing
    "data": '/assets/hostel/lohavat-jodhpur.pdf', //missing
    "href": "lohavat-jodhpur",
    "status":  "working"
  },
  {
    "id": 10,
    "title": "वीर तेजा छात्रावास शिप हाउस रोड़ पावटा, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/teja-jodhpur.jpg',  //missing
    "data": '/assets/hostel/teja-jodhpur.pdf', //missing
    "href": "teja-jodhpur",
    "status":  "working"
  },
  {
    "id": 11,
    "title": "वीर तेजा मंदिर जाट संस्थान, भोपालगढ़",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur/jodhpur-bhopalgarh-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur/jodhpur-bhopalgarh-jodhpur.pdf', //missing
    "href": "jodhpur-bhopalgarh-jodhpur",
    "status":  "working"
  },
  {
    "id": 12,
    "title": "कर्म बाई शिक्षण संस्थान, ओसिया, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/karma-bai-jodhpur.jpg',  //missing
    "data": '/assets/hostel/karma-bai-jodhpur.pdf', //missing
    "href": "karma-bai-jodhpur",
    "status":  "working"
  },
  {
    "id": 13,
    "title": "श्री वीर तेजाजी सेवा समिति, तिंवरी, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/tinwari-jodhpur.jpg',  //missing
    "data": '/assets/hostel/tinwari-jodhpur.pdf', //missing
    // "href": "tinwari-jodhpur",
    "href": "default",
    "status":  "working"
  },
  {
    "id": 14,
    "title": "किसान छात्रावास शेरगढ़",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/shergarh-jodhpur.jpg',  //missing
    "data": '/assets/hostel/shergarh-jodhpur.pdf', //missing
    // "href": "shergarh-jodhpur",
    "href": "default",
    "status":  "working"
  }
],
"kota": [
  {
    "id": 1,
    "title": "श्री तेजा मंदिर ट्रस्ट गर्ल्स हॉस्टल, कोटा",
    "description": "Kota",
    "imgSrc": '/assets/hostel/kota.jpg',  
    "data": '/assets/hostel/kota.pdf', //missing
    "href": "kota",
    "status":  "working"
  }
],
"bundi": [
  {
    "id": 1,
    "title": "श्री वीर तेजा किसान जाट छात्रावास, तालेड़ा, बूंदी",
    "description": "Bundi",
    "imgSrc": '/assets/hostel/bundi.jpg',  //missing
    "data": '/assets/hostel/bundi.pdf', //missing
    // "href": "bundi",
    "href": "default",
    "status":  "working"
  }
],
"udaipur": [
  {
    "id": 1,
    "title": "किसान छात्रावास दिल्ली पब्लिक स्कूल के पास, भुवाणा उदयपुर",
    "description": "Udaipur",
    "imgSrc": '/assets/hostel/udaipur.jpg',  //missing
    "data": '/assets/hostel/udaipur.pdf', //missing
    "href": "udaipur",
    "status":  "working"
  }
],
"tonk": [
  {
    "id": 1,
    "title": "श्री वीर तेजाजी जाट छात्रावास, सवाईमाधोपुर चौराहा, टोंक",
    "description": "Tonk",
    "imgSrc": '/assets/hostel/tonk-veer-teajaji.jpeg',  
    "data": '/assets/hostel/tonk.pdf', //missing
    "href": "tonk",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "ग्रामीण बालिका छात्रावास, दूदू रोड़, मालपुरा, टोंक",
    "description": "Tonk",
    "imgSrc": '/assets/hostel/malpura-tonk.jpg',  //missing
    "data": '/assets/hostel/malpura-tonk.pdf', //missing
    "href": "malpura-tonk",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "श्री किसान बालिका जाट छात्रावास, टोडारायसिंह, टोंक",
    "description": "Tonk",
    "imgSrc": '/assets/hostel/tonk-todaraisingh-tonk.jpeg',  
    "data": '/assets/hostel/todaraisingh-tonk.pdf', //missing
    "href": "todaraisingh-tonk",
    "status":  "working"
  }
],
"sawaimadhopur": [
  {
    "id": 1,
    "title": "वीर तेजाजी संस्थान राज नगर, सवाई माधोपुर",
    "description": "Sawaimadhopur",
    "imgSrc": '/assets/hostel/sawaimadhopur.jpg',  //missing
    "data": '/assets/hostel/sawaimadhopur.pdf', //missing
    "href": "sawaimadhopur",
    "status":  "working"
  }
],
"sriganaganagar": [
  {
    "id": 1,
    "title": "वीर तेजा जाट कन्या छात्रावास, इंट्रा सर्किल, सूरतगढ़",
    "description": "Sriganaganagar",
    "imgSrc": '/assets/hostel/sriganaganagar.jpeg',  
    "data": '/assets/hostel/ganaganagar.pdf', //missing
    "href": "ganaganagar",
    "status":  "working"
  }
],
"sikar": [
  {
    "id": 1,
    "title": "वीर तेजा जी शिक्षण संस्थान जाट छात्रावास, नीम का थाना, सीकर",
    "description": "Sikar",
    "imgSrc": '/assets/hostel/sikar-neem-ka-thana-sikar.jpeg',  //missing
    "data": '/assets/hostel/neem-ka-thana-sikar.pdf', //missing
    "href": "neem-ka-thana-sikar",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "जाट बोर्डिंग हाउस संस्थान, सीकर",
    "description": "Sikar",
    "imgSrc": '/assets/hostel/jat-boarding-sikar.jpg',  //missing
    "data": '/assets/hostel/jat-boarding-sikar.pdf', //missing
    "href": "jat-boarding-sikar",
    "status":  "working"
  }
],
"pali": [
  {
    "id": 1,
    "title": "वीर तेजाजी जाट किसान छात्रावास, पाली",
    "description": "Pali",
    "imgSrc": '/assets/hostel/tejaji-jat-pali.jpg',  //missing
    "data": '/assets/hostel/tejaji-jat-pali.pdf', //missing
    // "href": "tejaji-jat-pali",
    "href": "default",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "महादेव जाट समाज 21 खेड़ा विकास, जैतारण पाली",
    "description": "Pali",
    "imgSrc": '/assets/hostel/jaitaran-pali.jpg',  //missing
    "data": '/assets/hostel/jaitaran-pali.pdf', //missing
    "href": "jaitaran-pali",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "जाट समाज छात्रावास तथा सामाजिक न्याति नोहरा, सोजत",
    "description": "Pali",
    "imgSrc": '/assets/hostel/sojat-pali.jpg',  //missing
    "data": '/assets/hostel/sojat-pali.pdf', //missing
    "href": "sojat-pali",
    "status":  "working"
  },
  {
    "id": 4,
    "title": "वीर तेजाजी गोडवार जाट समाज छात्रावास, सादरी पाली",
    "description": "Pali",
    "imgSrc": '/assets/hostel/sadri-pali.jpg',  //missing
    "data": '/assets/hostel/sadri-pali.pdf', //missing
    // "href": "pali",
    "href": "default",
    "status":  "working"
  },
  {
    "id": 5,
    "title": "वीर तेजाजी विकास समिति, पाली",
    "description": "Pali",
    "imgSrc": '/assets/hostel//vikas-samiti-pali.jpg',  //missing
    "data": '/assets/hostel//vikas-samiti-pali.pdf', //missing
    // "href": "vikas-samiti-pali",
    "href": "default",
    "status":  "working"
  }
],
"karauli": [
  {
    "id": 1,
    "title": "महाराजा सूरजमल जाट छात्रावास, हिडोन सिटी, करौली",
    "description": "Karouli",
    "imgSrc": '/assets/hostel/karouli.jpeg', 
    "data": '/assets/hostel/karouli.pdf', //missing
    // "href": "karouli",
    "href": "default",
    "status":  "working"
  }
],
"nagaur": [
  {
    "id": 1,
    "title": "श्री नाथू राम मिर्धा जाट छात्रावास, नागौर",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore-nathu-ram-mirdha-nagore.jpg',  //missing
    "data": '/assets/hostel/nathu-ram-mirdha-nagore.pdf', //missing
    "href": "nathu-ram-mirdha-nagore",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "वीर तेजा जाट छात्रावास डेगाना, नागौर",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore-degana-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore-degana-nagore.pdf', //missing
    "href": "nagore-degana-nagore",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "श्री किसान जाट छात्रावास, बलदेव मिर्धा मार्ग, मेड़ता सिटी",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/merta-city-nagore.jpg',  //missing
    "data": '/assets/hostel/merta-city-nagore.pdf', //missing
    "href": "merta-city-nagore",
    "status":  "working"
  },
  {
    "id": 4,
    "title": "किसान छात्रावास, डीडवाना",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore-didwana-nagore.jpg',  
    "data": '/assets/hostel/nagore-didwana-nagore.pdf', //missing
    "href": "nagore-didwana-nagore",
    "status":  "working"
  },
  {
    "id": 5,
    "title": "वीर तेजा किसान जाट छात्रावास संस्थान, रेलवे स्टेशन के पास परबतसर",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore-parbatsar-nagore.jpg',  
    "data": '/assets/hostel/parbatsar-nagore.pdf', //missing
    "href": "parbatsar-nagore",
    "status":  "working"
  },
  {
    "id": 6,
    "title": "किसान छात्रावास, बख्तसागर के पास नागौर",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore-bakhtsagar-kisan-hostel-nagore.jpg', 
    "data": '/assets/hostel/kisan-hostel-nagore.pdf', //missing
    "href": "kisan-hostel-nagore",
    "status":  "working"
  },
  {
    "id": 7,
    "title": "जाट किसान छात्रावास अजमेर रोड़, कुचेरा",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore-kuchera-nagore.jpeg',  
    "data": '/assets/hostel/kuchera-nagore.pdf', //missing
    "href": "kuchera-nagore",
    "status":  "working"
  },
  {
    "id": 8,
    "title": "किसान छात्रावास मारोठ (नांवा)",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nawa-nagore.jpg',  //missing
    "data": '/assets/hostel/nawa-nagore.pdf', //missing
    "href": "nawa-nagore",
    "status":  "working"
  },
  {
    "id": 9,
    "title": "पोकरराम स्मृति किसान छात्रावास, सुजला (लाडनू)",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/ladnu-nagore.jpg',  //missing
    "data": '/assets/hostel/ladnu-nagore.pdf', //missing
    "href": "ladnu-nagor",
    "status":  "working"
  },
   {
    "id": 10,
    "title": "किसान छात्रावास, खींवसर",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore-khimsar-nagore.jpg',  //missing
    "data": '/assets/hostel/khimsar-nagore.pdf', //missing
    "href": "khimsar-nagore",
    "status":  "working"
  },
  {
    "id": 11,
    "title": "किसान छात्रावास, कोलिया",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/koliya-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/koliya-nagore.pdf', //missing
    // "href": "koliya-nagore",
    "href": "default",
    "status":  "working"
  },
  {
    "id": 12,
    "title": "वीर तेजाजी बालिका छात्रावास, नावां",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nawa-girls-nagore.jpg',  //missing
    "data": '/assets/hostel/nawa-girls-nagore.pdf', //missing
    // "href": "nawa-girls-nagore",
    "href": "default",
    "status":  "working"
  },
  {
    "id": 13,
    "title": "श्री वीर तेजा महिला शिक्षण संस्थान, कुचामन सिटी नागौर",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/kuchaman-nagore.jpg',  //missing
    "data": '/assets/hostel/kuchaman-nagore.pdf', //missing
    "href": "kuchaman-nagore",
    "status":  "working"
  },
  {
    "id": 14,
    "title": "जाट समाज छात्रावास, रिया बाड़ी",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/riya-bari-nagore.jpg',  //missing
    "data": '/assets/hostel/riya-bari-nagore.pdf', //missing
    "href": "riya-bari-nagore",
    "status":  "working"
  },
  {
    "id": 15,
    "title": "वीर समाज किसान जाट छात्रावास संस्थान, सदर बाजार, परबतसर",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore-kisan-jat-parbatsar-nagore.jpg',  //missing
    "data": '/assets/hostel/kisan-jat-parbatsar-nagore-nagore.pdf', //missing
    "href": "kuchaman-nagore",
    "status":  "working"
  },
  {
    "id": 16,
    "title": "तेजा सेवा समिति, तोशिना, डीडवाना",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/toshina-nagore.jpg',  //missing
    "data": '/assets/hostel/toshina-nagore.pdf', //missing
    "href": "toshina-nagore",
    "status":  "working"
  },
  {
    "id": 17,
    "title": "ग्रामोत्थान विद्या पीठ लाडनू",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore-gramothan-ladnu-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore-gramothan-ladnu-nagore.pdf', //missing
    "href": "nagore-gramothan-ladnu-nagore",
    "status":  "working"
  }
],
}

export default projectsData
