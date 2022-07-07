let data = [
    {
        router:"/area",
        img: "a0002019_main東京.jpeg",
        title: "東京都中心"
    },
    {
        router:"/shibuya",
        img: "a0003501_main澀谷.jpeg",
        title: "東京西部"
    },
    {
        router:"/northern",
        img: "練馬區.jpeg",
        title: "東京北部"
    },
    {
        router:"/south",
        img: "板橋區.jpeg",
        title: "東京南部"
    },
    {
        router:"/east",
        img: "目黑區.jpeg",
        title: "東京東部"
    },
    {
        router:"/waterpage",
        img: "caption杉並.jpeg",
        title: "水域風光"
    }
];
let playdata = [
    {
        img:"moroccan-flower-dark .webp",
        title:"文化"
    },
    {
        img:"circle-blues.webp",
        title:"食物"
    },
    {
        img:"full-bloom.webp",
        title:"購物"
    },
    {
        img:"intersection.webp",
        title:"風景"
    },
    {
        img:"oriental.webp",
        title:"藝術"
    },
    {
        img:"trees.webp",
        title:"夜店與夜生活"
    },
    {
        img:"wheat.webp",
        title:"溫泉與公共澡堂"
    },
    {
        img:"wormz.webp",
        title:"景點"
    }
];
let slider1data = [
    {
        img: "april_2.jpeg",
        month: "1"
    },
    {
        img: "august_1.jpeg",
        month: "2"
    },
    {
        img: "december_1.jpeg",
        month: "3"
    },
    {
        img: "feb_1.jpeg",
        month: "4"
    },
    {
        img: "january_1.jpeg",
        month: "5"
    },
    {
        img: "july_1.jpeg",
        month: "6"
    }
];
let slider2data = [
    {
        img: "june_1.jpeg",
        month: "7"
    },
    {
        img: "march_1.jpeg",
        month: "8"
    },
    {
        img: "may_2.jpeg",
        month: "9"
    },
    {
        img: "november_1.jpeg",
        month: "10"
    },
    {
        img: "october_1.jpeg",
        month: "11"
    },
    {
        img: "september_1.jpeg",
        month: "12"
    }
];


const silder1 = document.querySelector('.slider1');
let str1 = "";
slider1data.forEach(function (item, index) {
    let content = ` <div class="pic">
    <a href="/monthThree"><img src="../public/images/index/month/${item.img}" class="d-block" alt="">
        <div class="mask"><h1>${item.month}月</h1></div>
    </a>
</div>`
    str1 += content;
})
silder1.innerHTML = str1;

const silder2 = document.querySelector('.slider2');
console.log(silder2)
let slider2str = "";
slider2data.forEach(function (item, index) {
    let content = `<div class="pic">
    <a href="/monthThree"><img src="../public/images/index/month/${item.img}" class="d-block" alt="">
        <div class="mask"><h1>${item.month}月</h1></div>
    </a>
</div>`
    slider2str += content
})
silder2.innerHTML = slider2str



//地區劃分
const list = document.querySelector('.list');
let str = "";
console.log(list)
data.forEach(function (item, index) {
   let content = ` <li>
   <a href=${item.router}>
       <div class="area-pic">
           <img src="../public/images/index/Area/${item.img}" alt="">
           <div class="mask">
               <h1>${item.title}</h1>
           </div>
       </div>
   </a>
</li>`
str+=content;
})
list.innerHTML= str;


//玩樂東京
const playlist = document.querySelector('.play-list');
let listStr = "";
playdata.forEach(function(item,index){
    let content = `<li>
    <a href="">
        <div class="area-pic">
            <img src="../public/images/index/bg/${item.img}" alt="">
            <div class="mask">
            </div>
            <div class="list-title">
                <h1>${item.title}</h1>
            </div>
        </div>
    </a>
</li>`
listStr+=content
})
playlist.innerHTML = listStr