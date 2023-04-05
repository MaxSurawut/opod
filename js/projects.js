const allHighClass = document.querySelector(".all-highclass-section");
const allMidClass = document.querySelector(".all-midclass-section");
const allLowClass = document.querySelector(".all-lowclass-section");

const popUpBtn = document.querySelector(".popUp");
const consentText = document.querySelector("#consentText");
const popupConsent = document.querySelector(".popupConsent");
const closePopup = document.querySelector("#closePopup");
const filterLocation = document.querySelectorAll(".filter-location");

let projects = [];

const fetchProject = async () => {
  const response = await fetch("https://scapi.code-max.com/allprojects");
  const data = await response.json();
  return data;
};

filterLocation.forEach(item => {
  item.addEventListener("click", () => {
    filterLocation.forEach(items => {
      if (items !== item) {
        items.classList.remove("active");
      }
    });
    if (item.innerText === "ทั้งหมด") {
      renderProject()
    } else {
      filterProject(item.innerText);
    }
    item.classList.add("active");
  });
});

window.addEventListener("DOMContentLoaded", () => {
  fetchProject().then(data => {
    projects = data;
    renderProject()
  });
});

function renderProject() {
  renderSHProject();
  renderTHProject();
  renderCDProject();
}

const projRender = (projects, i) => {
  const projCard = document.createElement('div')
  projCard.className = 'proj-card'
  const imgThumbnail = document.createElement('img')
  imgThumbnail.src = projects[i].thumbnail
  const label = document.createElement('label')
  const input = document.createElement('input')
  input.type = 'radio'
  input.name = 'ProjectID'
  input.value = projects[i].projectId
  const span = document.createElement('span')
  span.className = 'checkmark'
  const p1 = document.createElement('p')
  p1.innerText = projects[i].selectedSubbrand
  const p2 = document.createElement('p')
  p2.className = 'proj-location'
  p2.innerText = projects[i].projectLocation
  const p3 = document.createElement('p')
  p3.className = 'proj-price'
  p3.innerText = `${(projects[i].projectMinPrice / 1000000).toFixed(2)} ${projects[i].projectMaxPrice !== '' ? ` - ${(projects[i].projectMaxPrice / 1000000).toFixed(2)}` : ''} ล้าน`

  projCard.appendChild(imgThumbnail)
  projCard.appendChild(label)
  label.appendChild(input)
  label.appendChild(span)
  label.appendChild(p1)
  label.appendChild(p2)
  label.appendChild(p3)

  return projCard
}

const renderSHProject = location => {
  allHighClass.innerHTML = "";
  projects.forEach((project, i) => {
    if (project.projectMinPrice > 20000001) {
     const projCard = projRender(projects, i)
     allHighClass.appendChild(projCard);
    }
  });
};

const renderTHProject = () => {
  allMidClass.innerHTML = "";
  projects.forEach((project, i) => {
    if (project.projectMinPrice > 10000001 && project.projectMinPrice < 20000000) {
      const projCard = projRender(projects, i)
      allMidClass.appendChild(projCard);
    }
  });
};

const renderCDProject = () => {
  allLowClass.innerHTML = "";
  projects.forEach((project, i) => {
    if (project.projectMinPrice < 10000000 ) {
      const projCard = projRender(projects, i)
      allLowClass.appendChild(projCard);
    }
  });
};

const filterProject = location => {
  allHighClass.innerHTML = "";
  allMidClass.innerHTML = "";
  allLowClass.innerHTML = "";
  projects.forEach((project, i) => {
    if (
      project.projectMinPrice > 20000001 &&
      project.selectedLocation === location
    ) {
      const projCard = projRender(projects, i)
     allHighClass.appendChild(projCard);
    } else if (
      project.projectMinPrice > 10000001 && 
      project.projectMinPrice < 20000000 &&
      project.selectedLocation === location
    ) {
      const projCard = projRender(projects, i)
      allMidClass.appendChild(projCard);
    } else if (
      project.projectMinPrice < 10000000  &&
      project.selectedLocation === location
    ) {
       const projCard = projRender(projects, i)
      allLowClass.appendChild(projCard);
    }
  });
};

consentText.addEventListener("click", () => {
  popUpBtn.classList.add("active");
  popupConsent.innerHTML = `
  <p>ความยินยอมในการเก็บรวบรวม ใช้หรือเปิดเผยข้อมูลส่วนบุคคล<br>
  <br>
  1) ผู้ลงทะเบียนคือเจ้าของข้อมูลผู้ให้ความยินยอม
  <br><br>
  2) ผู้ควบคุมข้อมูลส่วนบุคคล บริษัท เอสซี แอสเสท คอร์ปอเรชั่น จำกัด (มหาชน) (SC)
  สำนักงานเลขที่ 1010
  ถนนวิภาวดีรังสิต แขวงจตุจักร เขตจตุจักร กรุงเทพมหานคร 10900<br>
  <br>
  3) วัตถุประสงค์ของการเก็บรวบรวม ใช้หรือเปิดเผยข้อมูลส่วนบุคคล<br>
  เจ้าของข้อมูลส่วนบุคคลยินยอมให้ SC และบริษัทในเครือ สามารถเก็บรวบรวม ใช้
  หรือเปิดเผยข้อมูลส่วนบุคคลตามสำเนาบัตรประชาชนและทะเบียนบ้าน<br>
  <br>
  ของเจ้าของข้อมูลรวมถึงข้อมูลรายได้สถานที่ติดต่อหมายเลขโทรศัพท์ และ E-mail หรือ Line
  ID หรือข้อมูลอื่นใดที่เจ้าของข้อมูลส่วนบุคคลได้มอบ และแจ้งไว้ต่อ SC<br>
  <br>
  หรือบริษัทในเครือเพื่อประกอบข้อมูลในการซื้อบ้าน,ที่ดิน,ห้องชุด และผลิตภัณฑ์อื่นใด
  รวมถึงการใช้บริการต่างๆ ที่เกี่ยวข้อง กับธุรกิจและบริการของ SC หรือบริษัท ในเครือ
  รวมตลอดถึงข้อมูลชีวภาพ ชีวมิติ เช่น ภาพถ่าย ภาพเคลื่อนไหว เสียง
  ข้อมูลเกี่ยวกับเชื้อชาติ ความเชื่อส่วนบุคคล ศาสนาหรือปรัชญา พฤติกรรมทางเพศ
  ประวัติอาชญากรรม ข้อมูลสุขภาพ ความพิการ ข้อมูลสหภาพแรงงาน ข้อมูลพันธุกรรม
  หรือข้อมูลอื่นใดที่ SC<br>
  <br>
  หรือบริษัทในเครือได้รับมาในทุกรูปแบบหรือบันทึก จากการสัมภาษณ์ด้วยวาจา<br>
  <br>
  หรือเจ้าของข้อมูลได้ให้ข้อมูลไว้ในแบบสอบถาม หรือทางอิเล็คทรอนิกส์ให้สามารถเก็บรวบรวม
  ใช้หรือเปิดเผยข้อมูลส่วนบุคคลของ เจ้าของข้อมูลเพื่อประโยชน์
  ในการวิเคราะห์ประมวลผลพัฒนา และใช้ในธุรกิจและบริการของ SC
  หรือบริษัทในเครืออันอาจเป็นประโยชน์ต่อเจ้าของข้อมูลและ ผู้บริโภคได้ โดย SC
  จะไม่นำข้อมูลไปเปิดเผยให้ ต่อบุคคลอื่น<br>
  <br>
  เว้นแต่สถาบันการเงินที่เจ้าของข้อมูลประสงค์จะขอสินเชื่อหรือสถาบันการเงินอื่นใด<br>
  <br>
  เพื่อประโยชน์ต่อการขอสินเชื่อของเจ้าของข้อมูล และบริษัทคู่ค้าของ SC<br>
  <br>
  ที่ร่วมประกอบธุรกิจในการก่อสร้างตกแต่งหรือให้บริการใดๆ ร่วมในธุรกิจของ SC<br>
  <br>
  และบริษัทในเครือโดยยินยอมให้สถาบัน การเงินหรือบริษัทคู่ค้าของ SC<br>
  <br>
  สามารถติดต่อเจ้าของข้อมูลเพื่อการใดๆ ได้ตามวัตถุประสงค์ของสถาบันการเงิน
  และบริษัทคู่ค้าของ SC รวมถึง
  การเสนอการให้บริการและผลิตภัณฑ์ต่างๆของสถาบันการเงินและบริษัทคู่ค้าของ SC
  รวมถึงการวิเคราะห์<br>
  <br>
  วิจัยจัดทำข้อมูลทางสถิติเพื่อการปรับปรุงการพัฒนาผลิตภัณฑ์การบริการให้ดียิ่งขึ้น
  ทั้งนี้รวมถึงการส่งหรือโอนข้อมูลส่วนบุคคลไปยังประเทศปลายทาง
  เพื่อวัตถุประสงค์ที่กล่าวข้างต้นทั้งหมด หรือเป็นการเปิดเผย ตามอำนาจหมายศาล
  หรือที่กฎหมายกำหนดให้เปิดเผย<br>
  <br>
  4) ระยะเวลาในการเก็บรวบรวมข้อมูลส่วนบุคคล<br>
  SC และบริษัทในเครือจะจัดเก็บรวบรวม
  ใช้หรือเปิดเผยข้อมูลส่วนบุคคลตลอดระยะเวลาที่เจ้าของข้อมูล
  ยังคงเป็นสมาชิกผู้ซื้อบ้าน,ที่ดิน,ห้องชุด หรือผลิตภัณฑ์อื่นใด
  หรือใช้บริการในธุรกิจของ SC
  หรือบริษัทในเครืออยู่หรือในกรณีอื่นๆจนกว่าเจ้าของข้อมูลจะถอนความยินยอม<br>
  <br>
  5) การแจ้งเปลี่ยนแปลงข้อมูลหรือถอนความยินยอม<br>
  เจ้าของข้อมูลส่วนบุคคลสามารถแจ้งเปลี่ยนแปลงข้อมูลส่วนบุคคลให้ถูกต้อง
  หรือจะถอนความยินยอมเมื่อใดก็ได้โดยแจ้งเป็นลายลักษณ์อักษร
  ให้บริษัทรับทราบเป็นหนังสือหรือ<br>
  <br>
  E-mail: dataprivacy@scasset.com หรือโทรศัพท์แจ้งที่ Call Center เบอร์โทร. 1749
  โดยการถอนความยินยอมเจ้าของข้อมูล จะมีผลกระทบต่อการใช้บริการของ SC
  และบริษัทในเครือที่เกี่ยวข้องใน ทุกด้านที่เจ้าของข้อมูลส่วนบุคคลใช้บริการอยู่
  รวมถึงเจ้าของข้อมูลจะไม่ได้รับข้อมูลข่าวสารอันเป็นสิทธิและประโยชน์ส่วนบุคคลของ SC
  และบริษัทในเครือ รวมถึงบริษัทคู่ค้าของ SC<br>
  <br>
  6) ติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล<br>
  สำนักตรวจสอบภายใน สำนักงานเลขที่ 1010 ชั้น P13 ถนนวิภาวดีรังสิต แขวงจตุจักร
  เขตจตุจักร กรุงเทพมหานคร 10900<br>
  <br>
  Email: dataprivacy@scasset.com
</p>`;
});

closePopup.addEventListener("click", () => {
  popUpBtn.classList.remove("active");
});
