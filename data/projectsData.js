// type  status = working | closed |under-development | otherThanJatSamaj | NotKnown
//TODO : type: male | female | coEd

const projectsData = {
  "ajmer": [
    {
      "id": 1,
      "title": "श्री वीर तेजा जाट छात्रावास, ब्यावर",
      "description": "Ajmer",
      "imgSrc": '/assets/hostel/ajmer/sri-veer-teja-jat-hostel-byaver.jpg', //missing
      "data": '/assets/hostel/ajmer/ajmer-sri-veer-teja-jat-hostel-byaver.pdf', 
      "href": "ajmer-sri-veer-teja-jat-hostel-byaver.pdf",
      "status":  "working"
    },
    {
      "id": 2,
      "title": "श्री किसान छात्रावास समिति, केकड़ी",
      "description": "Ajmer",
      "imgSrc": '/assets/hostel/ajmer/sri-kisan-hostel-kekri.jpg', //missing
      "data": '/assets/hostel/ajmer/ajmer-sri-kisan-hostel-kekri.pdf', 
      "href": "ajmer-sri-kisan-hostel-kekri.pdf",
      "status":  "working"
    },
    {
      "id": 3,
      "title": "जाट छात्रावास, विजयनगर",
      "description": "Ajmer",
      "imgSrc": '/assets/hostel/ajmer/vijaynagar.jpg',//missing
      "data": '/assets/hostel/ajmer/ajmer-vijay-nagar.pdf',  
      "href": "ajmer-vijay-nagar.pdf",
      "status":  "working"
    },
    {
      "id": 4,
      "title": "श्री वीर तेजा किसान छात्रावास, अजमेर",
      "description": "Ajmer",
      "imgSrc": '/assets/hostel/ajmer/ajmer.jpg',  //missing
      "data": '/assets/hostel/ajmer/ajmer.pdf', 
      "href": "ajmer.pdf",
      "status":  "working"
    },
    {
      "id": 5,
      "title": "जाट छात्रावास, किशनगढ़",
      "description": "Ajmer",
      "imgSrc": '/assets/hostel/ajmer/kishangarh.jpg', //missing
      "data": '/assets/hostel/ajmer/ajmer-kishangarh.pdf', 
      "href": "ajmer-kishangarh.pdf",
      "status":  "working"
    },
    {
      "id": 6,
      "title": "जाट छात्रावास सुरसरा, अजमेर",
      "description": "Ajmer",
      "imgSrc": '/assets/hostel/ajmer/sursara-ajmer.jpg', //missing
      "data": '/assets/hostel/ajmer/ajmer-sursara-ajmer.pdf', 
      "href": "ajmer-sursara-ajmer.pdf",
      "status":  "working"
    },
  ],
  
  "alwar": [
    {
      "id": 1,
      "title": "श्री जाट छात्रावास, लक्ष्मणगढ़",
      "description": "Alwar",
      "imgSrc": '/assets/hostel/alwar/laxmangarh-alwar.jpg', //missing
      "data": '/assets/hostel/alwar/alwar-laxmangarh-alwar.pdf', 
      "href": "alwar-laxmangarh-alwar.pdf",
      "status":  "working"
    },
    {
      "id": 2,
      "title": "महाराजा सुरजमल छात्रावास समिति, बानसूर, अलवर",
      "description": "Alwar",
      "imgSrc": '/assets/hostel/alwar/bansur-alwar.jpg', //missing
      "data": '/assets/hostel/alwar/alwar-bansur-alwar.pdf', 
      "href": "alwar-bansur-alwar.pdf",
      "status":  "working"
    },
    {
      "id": 3,
      "title": "जाट छात्रावास, अलवर",
      "description": "Alwar",
      "imgSrc": '/assets/hostel/alwar/jat-hostel-boys-alwar.jpg',//missing
      "data": '/assets/hostel/alwar/alwar-jat-hostel-boys-alwar.pdf',  
      "href": "alwar-jat-hostel-boys-alwar.pdf",
      "status":  "working"
    },
    {
      "id": 4,
      "title": "बालिका जाट छात्रावास, अलवर",
      "description": "Alwar",
      "imgSrc": '/assets/hostel/alwar/balika-alwar.jpg',  //missing
      "data": '/assets/hostel/alwar/balika-alwar.pdf',  //missing
      "href": "balika-alwar.pdf",
      "status":  "working"
    }
  ],

  "barmer": [
    {
      "id": 1,
      "title": "किसान कन्या छात्रावास बलदेव नगर, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/kisan-kanya-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/barmer-kisan-kanya-barmer.pdf',  //missing
      "href": "barmer-kisan-girls-barmer.pdf",
      "status":  "working"
    },
    {
      "id": 2,
      "title": "श्री बलदेव राम मिर्धा किसान छात्रावास, चौहटन",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/Baldev-ram-chohtan-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/Baldev-ram-chohtan-barmer.pdf',  //missing
      "href": "baldev-ram-mirdha-chohtan-barmer.pdf",
      "status":  "working"
    },
    {
      "id": 3,
      "title": "श्री किसान बालिका छात्रावास, चौहटन",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/kisan-girls-chohtan-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/Baldev-ram-chohtan-barmer.pdf',  //missing
      "href": "kisan-girls-chohtan-barmer.pdf",
      "status":  "working"
    },
    {
      "id": 4,
      "title": "वीर तेजाजी बालक छात्रावास, बालोतरा",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/tejaji-boys-balotara-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/tejaji-boys-balotara-barmer.pdf',  //missing
      "href": "tejaji-boys-balotara-barmer.pdf",
      "status":  "working"
    },
    {
      "id": 5,
      "title": "वीर तेजाजी बालिका छात्रावास, न्यू बस स्टैण्ड, बालोतरा",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/tejaji-girls-balotara-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/barmer-tejaji-girls-balotara-barmer.pdf',  
      "href": "barmer-tejaji-girls-balotara-barmer.pdf",
      "status":  "working"
    },
    {
      "id": 6,
      "title": "किसान छात्रावास संस्थान, धोरीमन्ना",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/kisan-hostel-dhorimanna-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/kisan-hostel-dhorimanna-barmer.pdf',   //missing
      "href": "kisan-hostel-dhorimanna-barmer.pdf",
      "status":  "working"
    },
    {
      "id": 7,
      "title": "चौधरी चरण सिंह किसान छात्रावास, सिणधरी",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/charan-singh-sindhari-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/barmer-charan-singh-sindhari-barmer.pdf',   
      "href": "barmer-charan-singh-sindhari-barmer.pdf",
      "status":  "working"
    },
    {
      "id": 8,
      "title": "श्री हरलाल जाट छात्रावास विकास संस्थान, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/harlal-hostel-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/barmer-harlal-hostel-barmer.pdf',   
      "href": "barmer-harlal-hostel-barmer.pdf",
      "status":  "working"
    },
    {
      "id": 9,
      "title": "श्री बलदेव राम मिर्धा शिक्षण संस्थान कल्याणपुर, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/baldev-ram-kalyanpur-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/barmer-baldev-ram-kalyanpur-barmer.pdf',   
      "href": "barmer-baldev-ram-kalyanpur-barmer.pdf",
      "status":  "working"
    },
    {
      "id": 10,
      "title": "श्री बलदेव राम मिर्धा कन्या शिक्षण संस्थान कल्याणपुर, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/baldev-ram-girls-kalyanpur-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/barmer-baldev-ram-girls-kalyanpur-barmer.pdf',   
      "href": "barmer-baldev-ram-girls-kalyanpur-barmer.pdf",
      "status":  "working"
    },
    {
      "id": 11,
      "title": "श्री चौधरी रामदान शिक्षण संस्थान, रामसर, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/ramdan-hostel-ramsar-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/barmer-ramdan-hostel-ramsar-barmer.pdf',   
      "href": "barmer-ramdan-hostel-ramsar-barmer.pdf",
      "status":  "working"
    },
    {
      "id": 12,
      "title": "किसान बोर्डिंग हॉउस संस्थान, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/kisan-boarding-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/barmer-kisan-boarding-barmer.pdf',   
      "href": "barmer-kisan-boarding-barmer.pdf",
      "status":  "working"
    },
    {
      "id": 13,
      "title": "श्री जगदीश सिंह मेमोरियल छात्रावास, बायतु",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/baytu.jpg',  //missing
      "data": '/assets/hostel/barmer/baytu.pdf',    //missing
      "href": "baytu.pdf",
      "status":  "under-development"
    },
    {
      "id": 14,
      "title": "जाट समाज विकास एवं छात्रावास , गुढामालानी",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/gudamalani.jpg',  //missing
      "data": '/assets/hostel/barmer/gudamalani.pdf',    //missing
      "href": "gudamalani.pdf",
    },
    ,
    {
      "id": 15,
      "title": "जाट समाज विकास एवं छात्रावास, गुढामालानी",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/gudamalani.jpg',  //missing
      "data": '/assets/hostel/barmer/gudamalani.pdf',    //missing
      "href": "gudamalani.pdf",
    }
    ,
    {
      "id": 16,
      "title": "श्री बलदेव राम मिर्धा किसान छात्रावास, शिव",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/sheo.jpg',  //missing
      "data": '/assets/hostel/barmer/barmer-sheo.pdf',   
      "href": "barmer-sheo.pdf",
    },
    {
      "id": 17,
      "title": "श्री बलदेव राम मिर्धा किसान छात्रावास, धनाऊ",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/dhanau.jpg',  //missing
      "data": '/assets/hostel/barmer/barmer-dhanau.pdf',    //missing
      "href": "barmer-dhanau.pdf",
    },
    {
      "id": 18,
      "title": "श्री नाथूराम मिर्धा बालिका छात्रावास , सिणधरी",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/sindhari-girls.jpg',  //missing
      "data": '/assets/hostel/barmer/barmer-sindhari-girls.pdf', 
      "href": "barmer-sindhari-girls.pdf",
    },
    {
      "id": 18,
      "title": "डॉ. वीरेन्द्र मेंमोरियल छात्रावास, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/virendra-memorial-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/virendra-memorial-barmer.pdf',  //missing
      "href": "virendra-memorial-barmer.pdf",
      "status":  "under construction"
    },
    {
      "id": 19,
      "title": "बलदेव राम मिर्धा छात्रावास, जोधपुर रोड़, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/baldev-ram-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/barmer-baldev-ram-barmer.pdf', 
      "href": "barmer-baldev-ram-barmer.pdf",
    },
    {
      "id": 20,
      "title": "जाट समाज शैक्षणिक एवं विकास संस्थान, सेड़वा",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/sedwa.jpg',  //missing
      "data": '/assets/hostel/barmer/sedwa.pdf', //missing
      "href": "sedwa.pdf",
    },
    {
      "id": 21,
      "title": "चौधरी रामदान किसान छात्रावास, भीमडा",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/bhimda.jpg',  //missing
      "data": '/assets/hostel/barmer/barmer-bhimda.pdf', 
      "href": "barmer-bhimda.pdf",
    },
    {
      "id": 22,
      "title": "श्री जाट चेरिटेबल ट्रस्ट, बाड़मेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/jat-charitable-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/jat-charitable-barmer.pdf', //missing
      "href": "jat-charitable-barmer.pdf",
    },
    {
      "id": 23,
      "title": "युवा चोपाल ट्रस्ट, बाडमेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/yuva-choupal-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/yuva-choupal-barmer.pdf', //missing
      "href": "yuva-choupal-barmer.pdf",
    },
    {
      "id": 24,
      "title": "सेठ रामलाल सऊ चौथी देवी ट्रस्ट, बाडमेर",
      "description": "Barmer",
      "imgSrc": '/assets/hostel/barmer/seth-ramlal-barmer.jpg',  //missing
      "data": '/assets/hostel/barmer/seth-ramlal-barmer.pdf', //missing
      "href": "seth-ramlal-barmer.pdf",
    }
  ]
,
  "bhilwara": [
    {
      "id": 1,
      "title": "श्री शिव जाट छात्रावास समिति, शाहपुरा",
      "description": "Bhilwara",
      "imgSrc": '/assets/hostel/bhilwara/shahpura-bhilwara.jpg',  //missing
      "data": '/assets/hostel/bhilwara/bhilwara-shahpura-bhilwara.pdf',  
      "href": "bhilwara-shahpura-bhilwara.pdf",
      "status":  "working"
    },
    {
      "id": 2,
      "title": "वीर तेजा जाट छात्रावास, भीलवाड़ा",
      "description": "Bhilwara",
      "imgSrc": '/assets/hostel/bhilwara/teja-jat-bhilwara.jpg',  //missing
      "data": '/assets/hostel/bhilwara/bhilwara-teja-jat-bhilwara.pdf',  
      "href": "bhilwara-teja-jat-bhilwara.pdf",
      "status":  "working"
    },
    {
      "id": 3,
      "title": "बदनोर जाट समाज छात्रावास, गुलाबपुरा, भीलवाड़ा",
      "description": "Bhilwara",
      "imgSrc": '/assets/hostel/bhilwara/gulabpura-bhilwara.jpg',  //missing
      "data": '/assets/hostel/bhilwara/bhilwara-gulabpura-bhilwara.pdf',  
      "href": "bhilwara-gulabpura-bhilwara.pdf",
      "status":  "working"
    },
    {
      "id": 4,
      "title": "जाट छात्रावास, गंगापुर, भीलवाड़ा",
      "description": "Bhilwara",
      "imgSrc": '/assets/hostel/bhilwara/gangapur-bhilwara.jpg',  //missing
      "data": '/assets/hostel/bhilwara/bhilwara-gangapur-bhilwara.pdf',   //missing
      "href": "bhilwara-gangapur-bhilwara.pdf",
      "status":  "working"
    },
    {
      "id": 5,
      "title": "कन्या छात्रावास, भीलवाड़ा",
      "description": "Bhilwara",
      "imgSrc": '/assets/hostel/bhilwara/girls-bhilwara.jpg',  //missing
      "data": '/assets/hostel/bhilwara/bhilwara-girls-bhilwara.pdf',   //missing
      "href": "bhilwara-girls-bhilwara.pdf",
      "status":  "working"
    }
  ],
"bikaner": [
  {
    "id": 1,
    "title": "जाट छात्रावास जयपुर रोड़, बीकानेर",
    "description": "Bikaner",
    "imgSrc": '/assets/hostel/bikaner/jat-hostel-bikaner.jpg',  //missing
    "data": '/assets/hostel/bikaner/bikaner-jat-hostel-bikaner.pdf',  
    "href": "bikaner-jat-hostel-bikaner.pdf",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "श्री वीर तेजा छात्रावास रोडा रोड़, नोखा",
    "description": "Bikaner",
    "imgSrc": '/assets/hostel/bikaner/nokha-bikaner.jpg',  //missing
    "data": '/assets/hostel/bikaner/nokha-bikaner.pdf',  //missing
    "href": "nokha-bikaner.pdf",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "भीमसेन चौधरी किसान छात्रावास, लूणकरणसर",
    "description": "Bikaner",
    "imgSrc": '/assets/hostel/bikaner/lunkaransar-bikaner.jpg',  //missing
    "data": '/assets/hostel/bikaner/lunkaransar-bikaner.pdf',  
    "href": "lunkaransar-bikaner.pdf",
    "status":  "working"
  },
  {
    "id": 4,
    "title": "महर्षि दयानन्द जाट छात्रावास, श्रीडूंगरगढ़",
    "description": "Bikaner",
    "imgSrc": '/assets/hostel/bikaner/sridungargarh-bikaner.jpg',  //missing
    "data": '/assets/hostel/bikaner/bikaner-sridungargarh-bikaner.pdf',  
    "href": "bikaner-sridungargarh-bikaner.pdf",
    "status":  "working"
  },
  {
    "id": 5,
    "title": "किसान छात्रावास रानी बाजार, बीकानेर",
    "description": "Bikaner",
    "imgSrc": '/assets/hostel/bikaner/rani-bazaar-bikaner.jpg',  //missing
    "data": '/assets/hostel/bikaner/bikaner-rani-bazaar-bikaner.pdf',  
    "href": "bikaner-rani-bazaar-bikaner.pdf",
    "status":  "working"
  },
  {
    "id": 6,
    "title": "चौधरी चरण सिंह बालिका छात्रावास, बीकानेर",
    "description": "Bikaner",
    "imgSrc": '/assets/hostel/bikaner/girls-bikaner.jpg',  //missing
    "data": '/assets/hostel/bikaner/girls-bikaner.pdf',   //missing
    "href": "girls-bikaner.pdf",
  }
],
"chittorgarh": [
  {
    "id": 1,
    "title": "श्री वीर तेजा जाट छात्रावास, चित्तौड़गढ़",
    "description": "Chittorgarh",
    "imgSrc": '/assets/hostel/chittorgarh/teja-boys-chittorgarh.jpg',  //missing
    "data": '/assets/hostel/chittorgarh/chittorgarh-teja-boys-chittorgarh.pdf',  
    "href": "chittorgarh-teja-boys-chittorgarh.pdf",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "श्री वीर तेजा जाट बालिका छात्रावास, चित्तौड़गढ़",
    "description": "Chittorgarh",
    "imgSrc": '/assets/hostel/chittorgarh/teja-girls-chittorgarh.jpg',  //missing
    "data": '/assets/hostel/chittorgarh/chittorgarh-teja-girls-chittorgarh.pdf',  
    "href": "chittorgarh-teja-girls-chittorgarh.pdf",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "जाट छात्रावास विकास संस्थान, कपासन",
    "description": "Chittorgarh",
    "imgSrc": '/assets/hostel/chittorgarh/kapasan-boys-chittorgarh.jpg',  //missing
    "data": '/assets/hostel/chittorgarh/chittorgarh-kapasan-boys-chittorgarh.pdf',  
    "href": "chittorgarh-kapasan-boys-chittorgarh.pdf",
  },
  {
    "id": 4,
    "title": "जाट बालिका छात्रावास, कपासन",
    "description": "Chittorgarh",
    "imgSrc": '/assets/hostel/chittorgarh/kapasan-girls-chittorgarh.jpg',  //missing
    "data": '/assets/hostel/chittorgarh/chittorgarh-kapasan-girls-chittorgarh.pdf',  
    "href": "chittorgarh-kapasan-girls-chittorgarh.pdf",
  }
],
"churu": [
  {
    "id": 1,
    "title": "वैदिक कन्या छात्रावास प्रबंध समिति, तारानगर",
    "description": "Churu",
    "imgSrc": '/assets/hostel/churu/taranagar-churu.jpg',  //missing
    "data": '/assets/hostel/churu/churu-taranagar-churu.pdf',  
    "href": "churu-taranagar-churu.pdf",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "ग्रामीण किसान छात्रावास संस्थान रेलवे फाटक के पास सालासर बाईपास रोड़, रतनगढ़",
    "description": "Churu",
    "imgSrc": '/assets/hostel/churu/ratangarh-boys-churu.jpg',  //missing
    "data": '/assets/hostel/churu/ratangarh-boys-churu.pdf',   //missing
    "href": "ratangarh-boys-churu.pdf",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "जाट छात्रावास, सुजानगढ़",
    "description": "Churu",
    "imgSrc": '/assets/hostel/churu/sujangarh-boys-churu.jpg',  //missing
    "data": '/assets/hostel/churu/sujangarh-boys-churu.pdf',   //missing
    "href": "sujangarh-boys-churu.pdf",
    "status":  "working"
  },
  {
    "id": 4,
    "title": "विद्यार्थी आश्रम, राजगढ़",
    "description": "Churu",
    "imgSrc": '/assets/hostel/churu/rajgarh-churu.jpg',  //missing
    "data": '/assets/hostel/churu/churu-rajgarh-churu.pdf',  
    "href": "churu-rajgarh-churu.pdf",
    "status":  "working"
  },
  {
    "id": 5,
    "title": "किसान छात्रावास, सरदारशहर",
    "description": "Churu",
    "imgSrc": '/assets/hostel/churu/sardarshahar-boys-churu.jpg',  //missing
    "data": '/assets/hostel/churu/sardarshahar-boys-churu.pdf',   //missing
    "href": "sardarshahar-boys-churu.pdf",
    "status":  "working"
  },
  {
    "id": 6,
    "title": "आदर्श कन्या छात्रावास, सरदारशहर",
    "description": "Churu",
    "imgSrc": '/assets/hostel/churu/sardarshahar-girls-churu.jpg',  //missing
    "data": '/assets/hostel/churu/sardarshahar-girls-churu.pdf',   //missing
    "href": "sardarshahar-girls-churu.pdf",
    "status":  "working"
  }
],
"hanumangarh": [
  {
    "id": 1,
    "title": "जाट कन्या छात्रावास, हनुमानगढ़",
    "description": "Hanumangarh",
    "imgSrc": '/assets/hostel/hanumangarh/jat-girls-hanumangarh.jpg',  //missing
    "data": '/assets/hostel/hanumangarh/jat-girls-hanumangarh.pdf',   //missing
    "href": "jat-girls-hanumangarh.pdf",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "महारानी किशोरी देवी छात्रावास, रावतसर",
    "description": "Hanumangarh",
    "imgSrc": '/assets/hostel/hanumangarh/ravatsar-hanumangarh.jpg',  //missing
    "data": '/assets/hostel/hanumangarh/ravatsar-hanumangarh.pdf',   //missing
    "href": "ravatsar-hanumangarh.pdf",
    "status":  "working"
  }
],
"jaisalmer": [
  {
    "id": 1,
    "title": "श्री महादेव जाट विकास व शोध संस्थान, फतेहगढ़",
    "description": "Jaisalmer",
    "imgSrc": '/assets/hostel/jaisalmer/mahadev-jaisalmer.jpg',  //missing
    "data": '/assets/hostel/jaisalmer/mahadev-jaisalmer.pdf',   //missing
    "href": "mahadev-jaisalmer.pdf",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "किसान छात्रावास, भणियाणा",
    "description": "Jaisalmer",
    "imgSrc": '/assets/hostel/jaisalmer/bhaniayana-jaisalmer.jpg',  //missing
    "data": '/assets/hostel/jaisalmer/bhaniayana-jaisalmer.pdf',   //missing
    "href": "bhaniayana-jaisalmer.pdf",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "कन्या छात्रावास, जैसलमेर",
    "description": "Jaisalmer",
    "imgSrc": '/assets/hostel/jaisalmer/girls-jaisalmer.jpg',  //missing
    "data": '/assets/hostel/jaisalmer/girls-jaisalmer.pdf',   //missing
    "href": "girls-jaisalmer.pdf",
  }
],
"jaipur": [
  {
    "id": 1,
    "title": "सवाई जवाहर सिंह जाट छात्रावास जयपुर",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/jaipur/sawai-jawahar-jat-hostel-jaipur.jpg',  //missing
    "data": '/assets/hostel/jaipur/sawai-jawahar-jat-hostel-jaipur.pdf',   //missing
    "href": "sawai-jawahar-jat-hostel-jaipur.pdf",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "स्वाधीन जाट छात्रावास, जयपुर",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/jaipur/swadhin-jat-jaipur.jpg',  //missing
    "data": '/assets/hostel/jaipur/swadhin-jat-jaipur.pdf',   //missing
    "href": "swadhin-jat-jaipur.pdf",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "राजस्थान किसान छात्रावास, जयपुर",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/jaipur/rajasthan-kisaan-jaipur.jpg',  //missing
    "data": '/assets/hostel/jaipur/rajasthan-kisaan-jaipur.pdf',   //missing
    "href": "rajasthan-kisaan-jaipur.pdf",
    "status":  "working"
  },
  {
    "id": 4,
    "title": "ग्रामीण महिला छात्रावास, मुरलीपुरा, जयपुर",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/jaipur/murlipura-jaipur.jpg',  //missing
    "data": '/assets/hostel/jaipur/murlipura-jaipur.pdf',   //missing
    "href": "murlipura-jaipur.pdf",
    "status":  "working"
  },
  {
    "id": 5,
    "title": "महाराजा सूरजमल छात्रावास, कोटपूतली, जयपुर",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/jaipur/kotputli-jaipur.jpg',  //missing
    "data": '/assets/hostel/jaipur/kotputli-jaipur.pdf',   //missing
    "href": "kotputli-jaipur.pdf",
    "status":  "working"
  },
  {
    "id": 6,
    "title": "वीर तेजाजी बालिका छात्रावास, चाकसू, जयपुर",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/jaipur/chaksu-jaipur.jpg',  //missing
    "data": '/assets/hostel/jaipur/chaksu-jaipur.pdf',   //missing
    "href": "chaksu-jaipur.pdf",
    "status":  "working"
  },
  {
    "id": 7,
    "title": "श्री वीर तेजा जाट समाज संस्थान, फुलेरा, जयपुर",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/jaipur/fulera-jaipur.jpg',  //missing
    "data": '/assets/hostel/jaipur/fulera-jaipur.pdf',   //missing
    "href": "fulera-jaipur.pdf",
    "status":  "working"
  },
  {
    "id": 8,
    "title": "जाट छात्रावास (जाट विकास समिति) दुधु, जयपुर",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/jaipur/dudhu-jaipur.jpg',  //missing
    "data": '/assets/hostel/jaipur/dudhu-jaipur.pdf',   //missing
    "href": "dudhu-jaipur.pdf",
    "status":  "working"
  },
  {
    "id": 9,
    "title": "किसान सेवा समिति, फागी",
    "description": "Jaipur",
    "imgSrc": '/assets/hostel/jaipur/fagi-jaipur.jpg',  //missing
    "data": '/assets/hostel/jaipur/fagi-jaipur.pdf',   //missing
    "href": "fagi-jaipur.pdf",
    "status":  "working"
  }
],
"jalore": [
  {
    "id": 1,
    "title": "श्री बलदेव राम मिर्धा जाट समाज सेवा संस्थान, सांचौर",
    "description": "Jalore",
    "imgSrc": '/assets/hostel/jalore/sanchore-jalore.jpg',  //missing
    "data": '/assets/hostel/jalore/jalore-sanchore-jalore.pdf', 
    "href": "jalore-sanchore-jalore.pdf",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "जाट समाज शिक्षण संस्थान, भीनमाल",
    "description": "Jalore",
    "imgSrc": '/assets/hostel/jalore/bhinmal-jalore.jpg',  //missing
    "data": '/assets/hostel/jaijaloresalmer/bhinmal-jalore.pdf', //missing
    "href": "bhinmal-jalore.pdf",
    "status":  "working"
  }
],
"jodhpur": [
  {
    "id": 1,
    "title": "किसान तेजा रामगढ़ी शिक्षण संस्थान, कागा जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur/kaga-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur/kaga-jodhpur.pdf',  //missing
    "href": "kaga-jodhpur.pdf",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "वीर तेजा छात्रावास शिप हाउस रोड़ पावटा, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur/paota-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur/paota-jodhpur.pdf', //missing
    "href": "paota-jodhpur.pdf",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "श्री बलदेव राम शिक्षण सेवा संस्थान, पीपाड़, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur/pipar-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur/pipar-jodhpur.pdf', //missing
    "href": "pipar-jodhpur.pdf",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "श्री रामनारायण चौधरी छात्रावास, भगत की कोठी, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur/zinda-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur/zinda-jodhpur.pdf', //missing
    "href": "zinda-jodhpur.pdf",
    "status":  "working"
  },
  {
    "id": 4,
    "title": "किसान छात्रावास, बावड़ी",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur/baori-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur/baori-jodhpur.pdf', //missing
    "href": "baori-jodhpur.pdf",
    "status":  "working"
  },
  {
    "id": 5,
    "title": "वीर एस.पी. ताराचंद जाट छात्रावास, बिलाड़ा, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur/bilara-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur/bilara-jodhpur.pdf', //missing
    "href": "bilara-jodhpur.pdf",
    "status":  "working"
  },
  {
    "id": 6,
    "title": "श्री वीर तेजाजी किसान छात्रावास, ओसियां, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur/osiya-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur/osiya-jodhpur.pdf', //missing
    "href": "osiya-jodhpur.pdf",
    "status":  "working"
  },
  {
    "id": 7,
    "title": "किसान छात्रावास, पीपाड़ शहर, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur/pipar-girls-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur/pipar-girls-jodhpur.pdf', //missing
    "href": "pipar-girls-jodhpur.pdf",
    "status":  "working"
  },
  {
    "id": 8,
    "title": "किसान छात्रावास, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur/kisan-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur/kisan-jodhpur.pdf', //missing
    "href": "kisan-jodhpur.pdf",
    "status":  "working"
  },
  {
    "id": 9,
    "title": "किसान छात्रावास, लोहावट",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur/lohavat-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur/lohavat-jodhpur.pdf', //missing
    "href": "lohavat-jodhpur.pdf",
    "status":  "working"
  },
  {
    "id": 10,
    "title": "वीर तेजा छात्रावास शिप हाउस रोड़ पावटा, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur/teja-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur/teja-jodhpur.pdf', //missing
    "href": "teja-jodhpur.pdf",
    "status":  "working"
  },
  {
    "id": 11,
    "title": "वीर तेजा मंदिर जाट संस्थान, भोपालगढ़",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur/bhopalgarh-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur/bhopalgarh-jodhpur.pdf', //missing
    "href": "bhopalgarh-jodhpur.pdf",
    "status":  "working"
  },
  {
    "id": 12,
    "title": "कर्म बाई शिक्षण संस्थान, ओसिया, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur/karma-bai-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur/karma-bai-jodhpur.pdf', //missing
    "href": "karma-bai-jodhpur.pdf",
    "status":  "working"
  },
  {
    "id": 13,
    "title": "श्री वीर तेजाजी सेवा समिति, तिंवरी, जोधपुर",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur/tinwari-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur/tinwari-jodhpur.pdf', //missing
    "href": "tinwari-jodhpur.pdf",
    "status":  "working"
  },
  {
    "id": 14,
    "title": "किसान छात्रावास शेरगढ़",
    "description": "Jodhpur",
    "imgSrc": '/assets/hostel/jodhpur/shergarh-jodhpur.jpg',  //missing
    "data": '/assets/hostel/jodhpur/shergarh-jodhpur.pdf', //missing
    "href": "shergarh-jodhpur.pdf",
    "status":  "working"
  }
],
"kota": [
  {
    "id": 1,
    "title": "श्री तेजा मंदिर ट्रस्ट गर्ल्स हॉस्टल, कोटा",
    "description": "Kota",
    "imgSrc": '/assets/hostel/kota/kota.jpg',  //missing
    "data": '/assets/hostel/kota/kota.pdf', //missing
    "href": "kota.pdf",
    "status":  "working"
  }
],
"bundi": [
  {
    "id": 1,
    "title": "श्री वीर तेजा किसान जाट छात्रावास, तालेड़ा, बूंदी",
    "description": "Bundi",
    "imgSrc": '/assets/hostel/bundi/bundi.jpg',  //missing
    "data": '/assets/hostel/bundi/bundi.pdf', //missing
    "href": "bundi.pdf",
    "status":  "working"
  }
],
"udaipur": [
  {
    "id": 1,
    "title": "किसान छात्रावास दिल्ली पब्लिक स्कूल के पास, भुवाणा उदयपुर",
    "description": "Udaipur",
    "imgSrc": '/assets/hostel/udaipur/udaipur.jpg',  //missing
    "data": '/assets/hostel/udaipur/udaipur.pdf', //missing
    "href": "udaipur.pdf",
    "status":  "working"
  }
],
"tonk": [
  {
    "id": 1,
    "title": "श्री वीर तेजाजी जाट छात्रावास, सवाईमाधोपुर चौराहा, टोंक",
    "description": "Tonk",
    "imgSrc": '/assets/hostel/tonk/tonk.jpg',  //missing
    "data": '/assets/hostel/tonk/tonk.pdf', //missing
    "href": "tonk.pdf",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "ग्रामीण बालिका छात्रावास, दूदू रोड़, मालपुरा, टोंक",
    "description": "Tonk",
    "imgSrc": '/assets/hostel/tonk/malpura-tonk.jpg',  //missing
    "data": '/assets/hostel/tonk/malpura-tonk.pdf', //missing
    "href": "malpura-tonk.pdf",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "श्री किसान बालिका जाट छात्रावास, टोडारायसिंह, टोंक",
    "description": "Tonk",
    "imgSrc": '/assets/hostel/tonk/todaraisingh-tonk.jpg',  //missing
    "data": '/assets/hostel/tonk/todaraisingh-tonk.pdf', //missing
    "href": "todaraisingh-tonk.pdf",
    "status":  "working"
  }
],
"sawaimadhopur": [
  {
    "id": 1,
    "title": "वीर तेजाजी संस्थान राज नगर, सवाई माधोपुर",
    "description": "Sawaimadhopur",
    "imgSrc": '/assets/hostel/sawaimadhopur/sawaimadhopur.jpg',  //missing
    "data": '/assets/hostel/sawaimadhopur/sawaimadhopur.pdf', //missing
    "href": "sawaimadhopur.pdf",
    "status":  "working"
  }
],
"ganaganagar": [
  {
    "id": 1,
    "title": "वीर तेजा जाट कन्या छात्रावास, इंट्रा सर्किल, सूरतगढ़",
    "description": "Ganaganagar",
    "imgSrc": '/assets/hostel/ganaganagar/ganaganagar.jpg',  //missing
    "data": '/assets/hostel/ganaganagar/ganaganagar.pdf', //missing
    "href": "ganaganagar.pdf",
    "status":  "working"
  }
],
"sikar": [
  {
    "id": 1,
    "title": "वीर तेजा जी शिक्षण संस्थान जाट छात्रावास, नीम का थाना, सीकर",
    "description": "Sikar",
    "imgSrc": '/assets/hostel/sikar/neem-ka-thana-sikar.jpg',  //missing
    "data": '/assets/hostel/sikar/neem-ka-thana-sikar.pdf', //missing
    "href": "neem-ka-thana-sikar.pdf",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "जाट बोर्डिंग हाउस संस्थान, सीकर",
    "description": "Sikar",
    "imgSrc": '/assets/hostel/sikar/jat-boarding-sikar.jpg',  //missing
    "data": '/assets/hostel/sikar/jat-boarding-sikar.pdf', //missing
    "href": "jat-boarding-sikar.pdf",
    "status":  "working"
  }
],
"pali": [
  {
    "id": 1,
    "title": "वीर तेजाजी जाट किसान छात्रावास, पाली",
    "description": "Pali",
    "imgSrc": '/assets/hostel/pali/tejaji-jat-pali.jpg',  //missing
    "data": '/assets/hostel/pali/tejaji-jat-pali.pdf', //missing
    "href": "tejaji-jat-pali.pdf",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "महादेव जाट समाज 21 खेड़ा विकास, जैतारण पाली",
    "description": "Pali",
    "imgSrc": '/assets/hostel/pali/jaitaran-pali.jpg',  //missing
    "data": '/assets/hostel/pali/jaitaran-pali.pdf', //missing
    "href": "jaitaran-pali.pdf",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "जाट समाज छात्रावास तथा सामाजिक न्याति नोहरा, सोजत",
    "description": "Pali",
    "imgSrc": '/assets/hostel/pali/sojat-pali.jpg',  //missing
    "data": '/assets/hostel/pali/sojat-pali.pdf', //missing
    "href": "sojat-pali.pdf",
    "status":  "working"
  },
  {
    "id": 4,
    "title": "वीर तेजाजी गोडवार जाट समाज छात्रावास, सादरी पाली",
    "description": "Pali",
    "imgSrc": '/assets/hostel/pali/sadri-pali.jpg',  //missing
    "data": '/assets/hostel/pali/sadri-pali.pdf', //missing
    "href": "pali.pdf",
    "status":  "working"
  },
  {
    "id": 5,
    "title": "वीर तेजाजी विकास समिति, पाली",
    "description": "Pali",
    "imgSrc": '/assets/hostel/pali/vikas-samiti-pali.jpg',  //missing
    "data": '/assets/hostel/pali/vikas-samiti-pali.pdf', //missing
    "href": "vikas-samiti-pali.pdf",
    "status":  "working"
  }
],
"karouli": [
  {
    "id": 1,
    "title": "महाराजा सूरजमल जाट छात्रावास, हिडोन सिटी, करौली",
    "description": "Karouli",
    "imgSrc": '/assets/hostel/karouli/karouli.jpg',  //missing
    "data": '/assets/hostel/karouli/karouli.pdf', //missing
    "href": "karouli.pdf",
    "status":  "working"
  }
],
"nagore": [
  {
    "id": 1,
    "title": "श्री नाथू राम मिर्धा जाट छात्रावास, नागौर",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/nathu-ram-mirdha-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/nathu-ram-mirdha-nagore.pdf', //missing
    "href": "nathu-ram-mirdha-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 2,
    "title": "वीर तेजा जाट छात्रावास डेगाना, नागौर",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/degana-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/degana-nagore.pdf', //missing
    "href": "degana-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 3,
    "title": "श्री किसान जाट छात्रावास, बलदेव मिर्धा मार्ग, मेड़ता सिटी",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/merta-city-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/merta-city-nagore.pdf', //missing
    "href": "merta-city-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 4,
    "title": "किसान छात्रावास, डीडवाना",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/didwana-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/didwana-nagore.pdf', //missing
    "href": "didwana-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 5,
    "title": "वीर तेजा किसान जाट छात्रावास संस्थान, रेलवे स्टेशन के पास परबतसर",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/parbatsar-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/parbatsar-nagore.pdf', //missing
    "href": "parbatsar-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 6,
    "title": "किसान छात्रावास, बख्तसागर के पास नागौर",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/kisan-hostel-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/kisan-hostel-nagore.pdf', //missing
    "href": "kisan-hostel-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 7,
    "title": "जाट किसान छात्रावास अजमेर रोड़, कुचेरा",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/kuchera-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/kuchera-nagore.pdf', //missing
    "href": "kuchera-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 8,
    "title": "किसान छात्रावास मारोठ (नांवा)",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/nawa-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/nawa-nagore.pdf', //missing
    "href": "nawa-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 9,
    "title": "पोकरराम स्मृति किसान छात्रावास, सुजला (लाडनू)",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/ladnu-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/ladnu-nagore.pdf', //missing
    "href": "ladnu-nagor.pdfe",
    "status":  "working"
  },
   {
    "id": 10,
    "title": "किसान छात्रावास, खींवसर",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/khimsar-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/khimsar-nagore.pdf', //missing
    "href": "khimsar-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 11,
    "title": "किसान छात्रावास, कोलिया",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/koliya-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/koliya-nagore.pdf', //missing
    "href": "koliya-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 12,
    "title": "वीर तेजाजी बालिका छात्रावास, नावां",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/nawa-girls-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/nawa-girls-nagore.pdf', //missing
    "href": "nawa-girls-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 13,
    "title": "श्री वीर तेजा महिला शिक्षण संस्थान, कुचामन सिटी नागौर",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/kuchaman-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/kuchaman-nagore.pdf', //missing
    "href": "kuchaman-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 14,
    "title": "जाट समाज छात्रावास, रिया बाड़ी",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/riya-bari-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/riya-bari-nagore.pdf', //missing
    "href": "riya-bari-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 15,
    "title": "वीर समाज किसान जाट छात्रावास संस्थान, सदर बाजार, परबतसर",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/kisan-jat-parbatsar-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/kisan-jat-parbatsar-nagore-nagore.pdf', //missing
    "href": "kuchaman-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 16,
    "title": "तेजा सेवा समिति, तोशिना, डीडवाना",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/toshina-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/toshina-nagore.pdf', //missing
    "href": "toshina-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 17,
    "title": "ग्रामोत्थान विद्या पीठ लाडनू",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/gramothan-ladnu-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/gramothan-ladnu-nagore.pdf', //missing
    "href": "gramothan-ladnu-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 18,
    "title": "ग्रामोत्थान विद्या पीठ संस्थान, डीडवाना",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/kuchagramothan-didwana-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/kuchagramothan-didwana-nagore.pdf', //missing
    "href": "kuchagramothan-didwana-nagore.pdf",
    "status":  "working"
  },
  {
    "id": 19,
    "title": "वीर तेजा महिला शिक्षण शोध संस्थान तेजस्थली मारवाड़ मूडना",
    "description": "Nagore",
    "imgSrc": '/assets/hostel/nagore/mudna-nagore.jpg',  //missing
    "data": '/assets/hostel/nagore/mudna-nagore.pdf', //missing
    "href": "mudna-nagore.pdf",
    "status":  "working"
  }
],
}

export default projectsData
