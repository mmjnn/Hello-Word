const li = document.querySelectorAll('body .nav li')

for(let i=1;i<=9;i++){
    li[i].addEventListener('mouseenter',function(){
        li[i].style.overflow='visible'
    })
    li[i].addEventListener('mouseleave',function(){
        li[i].style.overflow='hidden'
    })
}

// 轮播图
const sliderData = [
    { url:'http://tzb.henu.edu.cn/__local/B/3D/49/64E6B7BAEAD7DB22DDD95DD9734_F4D9686D_D8CE.jpg',title:'九三学社社员王学路教授团队科研成果入选2021年度“中国高等学校十大科技进展',h2:'九三学社社员王学路教授团队科研成果入选2021年...'},
    { url:'http://tzb.henu.edu.cn/__local/6/EA/43/EDB486903BBC79C86D4E64D272D_10084479_6361.png',title:'王东伟莅临我校调研',h2:'王东伟莅临我校调研'},
    { url:'http://tzb.henu.edu.cn/__local/9/7E/8E/3F7E3EED07A2AA772C0A455177B_2A192A45_9485.png',title:'河南大学书画院迎春书画作品展开幕式暨河南大学书画院揭牌仪式举行',h2:'河南大学书画院迎春书画作品展开幕式暨河南大学...'},
    { url:'http://tzb.henu.edu.cn/__local/C/D7/49/5C33B6D6304383207CA24F407EE_2564EA44_B123.jpg',title:'市校合作再谱新篇章——“河南大学开封研究院”揭牌成立！',h2:'市校合作再谱新篇章——“河南大学开封研究院”...'},
    { url:'http://tzb.henu.edu.cn/__local/C/3B/82/0426447005DC3A2DACD34DEE258_09751A25_E51D.jpg',title:'我校组织统战工作专题学习培训',h2:'我校组织统战工作专题学习培训'}
]

const img = document.querySelector('#content1 .banner .text .carousel img')
const a = document.querySelector('#content1 .banner .text .carousel a #titl')

let i=0

for(let m = 1;m<=5;m++){
    document.querySelector(`#content1 .banner .text .carousel ul li:nth-child(${m}) `).addEventListener('click',function(){
    img.src = sliderData[m-1].url
    a.title = sliderData[m-1].title
    a.innerHTML = sliderData[m-1].h2
    
    document.querySelector('#content1 .banner .text .carousel ul .active').classList.remove('active')
    document.querySelector(`#content1 .banner .text .carousel ul li:nth-child(${m})`).classList.add('active')
    i=m-1
    })
}

setInterval(function(){
    i++
    if(i>=5){
        i=0
    }
    img.src = sliderData[i].url
    a.title = sliderData[i].title
    a.innerHTML = sliderData[i].h2
    
    document.querySelector('#content1 .banner .text .carousel ul .active').classList.remove('active')
    document.querySelector(`#content1 .banner .text .carousel ul li:nth-child(${i+1})`).classList.add('active')
},3000)


// for(int i=0;i<7;i++){
//     document.querySelector(`#content1 .banner .text #ultop ul1 li:nth-child(${i+1}) a`).addEventListener('mouseenter',
//     function(){
//         document.querySelector(`#content1 .banner .text #ultop ul1 li:nth-child(${i+1}) a`).color='#990000'
//     })   
// }

// const btnTop = document.querySelector('#btnTop')

