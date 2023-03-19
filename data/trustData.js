// type  status = working | closed |under-development | otherThanJatSamaj | NotKnown
//TODO : type: male | female | coEd

const trustData = {
    "barmer": [
      {
        "id": 1,
        "title": "श्री जाट चेरिटेबल ट्रस्ट, बाड़मेर",
        "description": "Barmer",
        // "imgSrc": '/assets/hostel/jat-charitable.jpeg',  //missing
        "imgSrc": '',  //missing
        "data": '/assets/hostel/default.pdf', //missing
        // "href": "jat-charitable-barmer",
        "href": "default",
      },
      {
        "id": 2,
        "title": "युवा चोपाल ट्रस्ट, बाडमेर",
        "description": "Barmer",
        // "imgSrc": '/assets/hostel/white.jpeg',  //missing
        "imgSrc": '',
        "data": '/assets/hostel/yuva-choupal-barmer.pdf', //missing
        "href": "yuva-choupal-barmer",
      },
      {
        "id": 3,
        "title": "सेठ रामलाल सऊ चौथी देवी ट्रस्ट, बाडमेर",
        "description": "Barmer",
        "imgSrc": '',  //missing
        "data": '/assets/hostel/default.pdf', //missing
        // "href": "seth-ramlal-barmer",
        "href": "default",
      }],

     "nagaur": [
        {
          "id": 1,
          "title": "ग्रामोत्थान विद्या पीठ संस्थान, डीडवाना",
          "description": "Nagore",
          "imgSrc": '',  //missing
          "data": '/assets/hostel/default.pdf', //missing
          "href": "default",
          "status":  "working"
        },
        {
          "id": 2,
          "title": "वीर तेजा महिला शिक्षण शोध संस्थान तेजस्थली मारवाड़ मूडना",
          "description": "Nagore",
         "imgSrc": '',  //missing
          "data": '/assets/hostel/default.pdf', //missing
          "href": "default",
          "status":  "working"
        }
      ],
  }
  
  export default trustData
  