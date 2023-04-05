const contentBg = document.querySelector('.content-bg')

const createBackBtn = () => {
    const spanBtn = document.createElement('span')
    spanBtn.className = 'backBtn'
    const spanText = document.createElement('span')
    spanText.innerText = 'กลับไปหน้าหลัก'
    const alink = document.createElement('a')
    alink.href = '../index.html'
    const img = document.createElement('img')
    img.src = '../assets/back.png'

    contentBg.appendChild(spanBtn)
    spanBtn.appendChild(spanText)
    spanBtn.appendChild(alink)
    alink.appendChild(img)
}

window.addEventListener('DOMContentLoaded', () => {
    createBackBtn()
})