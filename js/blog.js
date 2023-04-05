const blogSection = document.querySelector('.blog-section');
const owlCarousel = document.querySelector('.owl-carousel')


const contents = [
  {
    contentImg: './assets/blog-img1.jpg',
    contentHeadline: 'เปิดตัว “The Caring Bear” ตัวแทนความอบอุ่นใส่ใจจาก SC Asset',
    contentPara: 'มอบความอบอุ่นจาก SC Asset ผ่าน “The Caring Bear” น้องหมีสุดน่ารัก เพราะเรารักจึงต้อง "ใส่ใจ" เป็นพิเศษ',
    linkBlog: './blog/content1.html'
  },
  {
    contentImg: './assets/blog-img2.jpg',
    contentHeadline: 'หมีเรื่องมาเล่า! พาชมความใส่ใจของ SC Asset ไปกับน้อง The Caring Bear',
    contentPara: 'The Caring Bear หมีเล่าเรื่อง ที่จะเล่าทุกเรื่องและพาทุกคนไปผจญภัยกับโลกความใส่ใจของ SC Asset',
    linkBlog: './blog/content2.html'
  },
  {
    contentImg: './assets/blog-img3.jpg',
    contentHeadline: 'One Project Design เป็นตัวเองได้เต็มที่! SC Asset ใส่ใจดีไซน์มาให้คุณแล้ว',
    contentPara: 'One Project Design กับ SC Asset สร้างสรรค์ที่พักของคุณให้พิเศษไม่ซ้ำใคร ดึงเอกลักษณ์ของคุณออกมาอย่างโดดเด่น ให้เป็นตัวเองในแบบของคุณ',
    linkBlog: './blog/content3.html'
  },
  // {
  //   contentImg: 'https://dummyimage.com/300x300/d4d4d4',
  //   contentHeadline: 'ไม่ได้มีดีแค่สวย! แต่ Privacy มาครบ พบที่ SC Asset',
  //   contentPara: 'SC Asset ใส่ใจคุณทุกเรื่อง ไม่ใช่แค่ความสวยงาม แต่ความ Privacy ก็ต้องมาคู่กัน',
  // },
  // {
  //   contentImg: 'https://dummyimage.com/300x300/d4d4d4',
  //   contentHeadline: 'Soft Floor ให้ทุกการล้มปลอดภัย สนุกได้อย่างหมดห่วง',
  //   contentPara: 'SC Asset คิดมาแล้ว Soft Floor ตัวช่วยสร้างความสุขในครอบครัว ให้ทุกการเล่นสนุกได้แบบหายห่วง จะล้มกี่ครั้งก็ยังปลอดภัย',
  // },
];


function createBlogCard(i) {
  const item = document.createElement('div')
  item.className = 'item'
  const blogGrid = document.createElement('div')
  blogGrid.className = 'blog-grid'
  const imgDate = document.createElement('div')
  imgDate.className = 'img-date'
  const img = document.createElement('img')
  img.src = contents[i].contentImg
  const discretionBlog = document.createElement('div')
  discretionBlog.className = 'discretion-blog'
  const h4 = document.createElement('h4')
  h4.innerText = contents[i].contentHeadline
  const p = document.createElement('p')
  p.innerText = contents[i].contentPara
  const divBtn = document.createElement('div')
  divBtn.className = 'btnControl'
  const alink = document.createElement('a')
  alink.href = contents[i].linkBlog
  const spanMore = document.createElement('span')
  spanMore.innerText = 'อ่านเพิ่มเติม >>'

  owlCarousel.appendChild(item)
  item.appendChild(blogGrid)
  blogGrid.appendChild(imgDate)
  imgDate.appendChild(img)
  blogGrid.appendChild(discretionBlog)
  discretionBlog.appendChild(h4)
  discretionBlog.appendChild(p)
  divBtn.appendChild(alink)
  alink.appendChild(spanMore)
  discretionBlog.appendChild(divBtn)
}

for(let i = 0; i < contents.length; i++){
  createBlogCard(i)
}