// type  status = working | closed |under-development | otherThanJatSamaj | NotKnown
//TODO : type: male | female | coEd

const trustData = {
    "barmer": [
      {
        "id": 1,
        "title": "श्री जाट चेरिटेबल ट्रस्ट, बाड़मेर",
        "description": "Barmer",
        "imgSrc": '/assets/hostel/jat-charitable-barmer.jpg',  //missing
        "data": '/assets/hostel/jat-charitable-barmer.pdf', //missing
        // "href": "jat-charitable-barmer",
        "href": "default",
      },
      {
        "id": 2,
        "title": "युवा चोपाल ट्रस्ट, बाडमेर",
        "description": "Barmer",
        "imgSrc": '/assets/hostel/yuva-choupal-barmer.jpg',  //missing
        "data": '/assets/hostel/yuva-choupal-barmer.pdf', //missing
        "href": "yuva-choupal-barmer",
      },
      {
        "id": 3,
        "title": "सेठ रामलाल सऊ चौथी देवी ट्रस्ट, बाडमेर",
        "description": "Barmer",
        "imgSrc": '/assets/hostel/seth-ramlal-barmer.jpg',  //missing
        "data": '/assets/hostel/seth-ramlal-barmer.pdf', //missing
        // "href": "seth-ramlal-barmer",
        "href": "default",
      }],

     "nagaur": [
        {
          "id": 1,
          "title": "ग्रामोत्थान विद्या पीठ संस्थान, डीडवाना",
          "description": "Nagore",
          "imgSrc": '/assets/hostel/kuchagramothan-didwana-nagore.jpg',  //missing
          "data": '/assets/hostel/kuchagramothan-didwana-nagore.pdf', //missing
          "href": "kuchagramothan-didwana-nagore",
          "status":  "working"
        },
        {
          "id": 2,
          "title": "वीर तेजा महिला शिक्षण शोध संस्थान तेजस्थली मारवाड़ मूडना",
          "description": "Nagore",
          "imgSrc": '/assets/hostel/mudna-nagore.jpg',  //missing
          "data": '/assets/hostel/mudna-nagore.pdf', //missing
          "href": "mudna-nagore",
          "status":  "working"
        }
      ],
  }
  
  export default trustData
  