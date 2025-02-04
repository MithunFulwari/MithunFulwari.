
const helpData = {
  Ujjain: {
    info: "उज्जैन में महिला एवं बाल सुरक्षा के लिए संपर्क करें  थाना प्रभारी: निरीक्षक श्रीमती मधुबाला राठौर मोबाइल नंबर: 75876 - 37058",
    img: " https://i.ibb.co/MDgP6XVS/indian-women-police-officer-illustration-661323-69.jpg" 
  },
  aagarmalva: {
    info: "आगर-मालवा में महिला एवं बाल सुरक्षा के लिए संपर्क करें: 9876543210",
    img: "https://via.placeholder.com/400x200?text=Aagar+Malwa"
  },
  Meerut: {
    info: "मेरठ में महिला एवं बाल सुरक्षा के लिए संपर्क करें: 1122334455",
    img: "https://via.placeholder.com/400x200?text=Meerut"
  },
  sazapur: {
    info: "शाजापुर में महिला एवं बाल सुरक्षा के लिए संपर्क करें: 5566778899",
    img: "https://via.placeholder.com/400x200?text=Shajapur" // Replace with actual image URL
  },
  Ratlam: {
    info: "बेबी रानी मौर्य सरकारी अधिकारी महिला कल्याण बाल विकास एवं पुष्टाहार, संपर्क: 9876543210",
    img: "https://via.placeholder.com/400x200?text=Ratlam" // Replace with actual image URL
  },
  Mandsor: {
    info: "सुनीता रानी सरकारी अधिकारी संपर्क: 9876543212",
    img: "https://via.placeholder.com/400x200?text=Mandsor" // Replace with actual image URL
  },
  Nimana: {
    info: "राहुल ठाकुर सामुदायिक सहायक, संपर्क: 9876543213",
    img: "https://via.placeholder.com/400x200?text=Nimana" // Replace with actual image URL
  },
  Nanoota: {
    info: "रचना पांडे सरकारी अधिकारी, संपर्क: 9876543214",
    img: "https://via.placeholder.com/400x200?text=Nanoota" // Replace with actual image URL
  },
  Devbandh: {
    info: "निधि टंडन महिला सुरक्षा अधिकारी, संपर्क: 9876543215",
    img: "https://via.placeholder.com/400x200?text=Devbandh" // Replace with actual image URL
  },
  Rampur: {
    info: "अरुणा ठाकुर महिला हेल्पलाइन संपर्क: 9876543216",
    img: "https://via.placeholder.com/400x200?text=Rampur" // Replace with actual image URL
  },
  Dewas: {
    info: "श्रीमती रेलम बघेल पद जिला कार्यक्रम अधिकारी मो. +91-72 72-250 117  2. सुश्री शीला शुक्ला पद जिला परियोजना अधिकारी मो. 91-72 72-252 549   देवास",
    img:"" },
  Dhar: {
    info:"1.सुश्री पल्लवी परमार पद परियोजना अधिकरी मो.9977050332 (2).सुभाष जैन पद जिला कार्यक्रम अधिकारी मो. 9752795255 ",
    img:""},
  Shyopur: {
    info:"(1).श्री ओ.पी. पाण्डेय पद सहायक संचालक मो. 9575551151 (2). श्री रिशु सुमन पद महिला सशक्तिकरण अधिकारी  मो. 7987207099",
    img:""},
  Riwa:{
    info:"श्रीमती प्रतिभा पाण्डेय पद जिला कार्यक्रम अधिकारी.मो.9425953220 ",
    img:""},
  Bhopal: {
    info:" अधिकारी: श्रीमती सीमा सिंह पदनाम: जिला कार्यक्रम अधिकारी फोन नंबर: 0755 - 1234567",
    img:""},
  Indore: {
    info:"अधिकारी: श्रीमती अर्चना वर्मा पदनाम: जिला कार्यक्रम अधिकारी फोन नंबर: 0731 - 1234567",
    img:""},
  Gawliyar: {
    info:"अधिकारी: श्रीमती रेखा मिश्रा पदनाम: जिला कार्यक्रम अधिकारी फोन नंबर: 0751 - 1234567",
    img:""},
};

// Dropdown element
const districtSelect = document.getElementById("districts");

// Details display area
const districtDetails = document.getElementById("districtDetails");

// Event listener for dropdown change
districtSelect.addEventListener("change", function() {
  const selectedDistrict = districtSelect.value;

  // Clear previous details
  districtDetails.innerHTML = "";

  // Check if a valid district is selected
  if (selectedDistrict && helpData[selectedDistrict]) {
    const districtInfo = helpData[selectedDistrict];

    // Create district details
    const infoText = document.createElement("p");
    infoText.textContent = districtInfo.info;

    const img = document.createElement("img");
    img.src = districtInfo.img;
    img.alt = `${selectedDistrict} Image`;

    // Append to the details section
    districtDetails.appendChild(infoText);
    districtDetails.appendChild(img);
  } else {
    districtDetails.textContent = "कृपया जिला चुनें।";
  }
});
