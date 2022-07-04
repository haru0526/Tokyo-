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
let loctiondata = [
    {
        router: "area.html",
        img: "a0002019_main東京.jpeg",
        title: "東京都中心"
    },
    {
        router: "shibuya.html",
        img: "a0003501_main澀谷.jpeg",
        title: "東京西部"
    },
    {
        router: "northern.html",
        img: "練馬區.jpeg",
        title: "東京北部"
    },
    {
        router: "south.html",
        img: "板橋區.jpeg",
        title: "東京南部"
    },
    {
        router: "east.html",
        img: "目黑區.jpeg",
        title: "東京東部"
    },
    {
        router: "waterpage.html",
        img: "caption杉並.jpeg",
        title: "水域風光"
    }
];
const silder1 = document.querySelector('.slider1');
let str = "";
slider1data.forEach(function (item, index) {
    let content = ` <div class="pic">
    <a href=""><img src="../public/images/index/month/${item.img}" class="d-block" alt="">
        <div class="mask"><h1>${item.month}月</h1></div>
    </a>
</div>`
    str += content;
})
silder1.innerHTML = str;

const silder2 = document.querySelector('.slider2');
console.log(silder2)
let slider2str = "";
slider2data.forEach(function (item, index) {
    let content = `<div class="pic">
    <a href=""><img src="../public/images/index/month/${item.img}" class="d-block" alt="">
        <div class="mask"><h1>${item.month}月</h1></div>
    </a>
</div>`
    slider2str += content
})
silder2.innerHTML = slider2str

const locationList = document.querySelector('.locationList');
console.log(locationList)
let locationstr = "";
loctiondata.forEach(function (item, index) {
    let content = `<li>
    <div class="card mx-auto" >
    <div class="location-pic">
    <img src="../public/images/index/Area/${item.img}" class="card-img-top " alt="...">
</div>
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text d-lg-block d-none">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href=${item.router} class="btn btn-primary">前往資訊</a>
        </div>
      </div>
</li>`
locationstr+=content
})
locationList.innerHTML = locationstr;