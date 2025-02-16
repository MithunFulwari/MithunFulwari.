document.addEventListener("DOMContentLoaded", function () {
  const helpData = {
    Ujjain: {
      info: "उज्जैन में महिला एवं बाल सुरक्षा के लिए संपर्क करें  थाना प्रभारी: निरीक्षक श्रीमती मधुबाला राठौर मोबाइल नंबर: 75876 - 37058", 
      img: "https://i.ibb.co/MDgP6XVS/indian-women-police-officer-illustration-661323-69.jpg" 
    },
    AagarMalwa: {
      info: "आगर मालवा जिले में महिला एवं बाल विकास विभाग से संबंधित जानकारी के लिए, आप निम्नलिखित अधिकारियों से संपर्क कर सकते हैं: जिला कार्यक्रम अधिकारी (DPO): श्रीमती रत्ना शर्मा मोबाइल नंबर: 9516559896", 
      img: "https://i.ibb.co/TDV7BH2W/Screenshot-20250216-125309-2.png"
    },
    Meerut: {
      info: "मेरठ जिले में महिला एवं बाल विकास से संबंधित अधिकारियों के संपर्क विवरण निम्नलिखित हैं: जिला प्रोबेशन अधिकारी (DPO): श्री अजय कुमार सिंह मोबाइल नंबर: 9450611460", 
      img: "https://i.ibb.co/BJTPzZS/Screenshot-20250216-132349-2.png"
    },
    Dewas: {
      info: "श्रीमती रेलम बघेल पद जिला कार्यक्रम अधिकारी मो. +91-72 72-250 117 2. सुश्री शीला शुक्ला पद जिला परियोजना अधिकारी मो. 7272-252549 देवास",
      img: "https://i.ibb.co/HH5NMHw/Screenshot-20250124-135741-2.png"
    }
  };

  const districtSelect = document.getElementById("districts");
  const districtDetails = document.getElementById("districtDetails");

  districtSelect.addEventListener("change", function () {
    const selectedDistrict = districtSelect.value;
    districtDetails.innerHTML = "";

    if (selectedDistrict && helpData[selectedDistrict]) {
      const districtInfo = helpData[selectedDistrict];

      const infoText = document.createElement("p");
      infoText.textContent = districtInfo.info;

      const img = document.createElement("img");
      img.src = districtInfo.img;
      img.alt = `${selectedDistrict} Image`;
      img.style.width = "100%";  
      img.style.borderRadius = "8px";
      img.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";

      districtDetails.appendChild(infoText);
      districtDetails.appendChild(img);
    } else {
      districtDetails.textContent = "कृपया जिला चुनें।";
    }
  });
});