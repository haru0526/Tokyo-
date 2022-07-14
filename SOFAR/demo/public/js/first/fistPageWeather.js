let Tokyo = null;
let api = "https://api.openweathermap.org/data/2.5/onecall?lat=37.917533140946865&lon=138.99889301744824&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw&exclude=minutely,hourly'";
let daytranslate = ["週日", "週一", "週二", "週三", "週四", "週五", "週六"];
let weatherImg = {
    Clouds: "../public/images/youyu/fistPageWeatherImages/icon/05.svg",
    Rain: "../public/images/youyu/fistPageWeatherImages/icon/11.svg",
    Mist: "../public/images/youyu/fistPageWeatherImages/icon/28.svg",
    Clear: "../public/images/youyu/fistPageWeatherImages/icon/01.svg",
    Snow: "../public/images/youyu/fistPageWeatherImages/icon/42.svg",
    Thunderstorm: "../public/images/youyu/fistPageWeatherImages/icon/18.svg"
}
console.log('ok')
axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=37.917533140946865&lon=138.99889301744824&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw&exclude=minutely,hourly')
    .then((res) => {
        let Tokyo = res.data
        $('.currentTemp').text(`${Tokyo.current.temp}`);
        $('#title').text(`日本東京都`);
        Tokyo.daily.shift();
        for (var i = 0; i < 7; i++) {
            // console.log(weatherImg[Tokyo.daily[i].weather[i].main]);
            $('.range' + (i + 1)).text(`${Math.floor(Tokyo.daily[i].temp.max)} ${Math.floor(Tokyo.daily[i].temp.min)}`);

            $('.week' + (i + 1)).text(`${daytranslate[new Date((Tokyo.daily[i].dt) * 1000).getDay()]}`);

            var temp = weatherImg[Tokyo.daily[i].weather[0].main];
            $(".weekImg" + (i + 1)).attr("src", temp);

        }
    })
// 東京
let Tokyosvg = document.getElementById('Tokoysvg');
Tokyosvg.addEventListener('click', function (e) {
    console.log('ok')
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=37.917533140946865&lon=138.99889301744824&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw&exclude=minutely,hourly')
        .then((res) => {
            let Tokyo = res.data
            $('.currentTemp').text(`${Tokyo.current.temp}`);
            $('#title').text(`日本東京都`);
            Tokyo.daily.shift();
            // $('.range1').text(`${Math.floor(Tokyo.daily[0].temp.max)} ${Math.floor(Tokyo.daily[0].temp.min)}`);
            // $('.range2').text(`${Math.floor(Tokyo.daily[1].temp.max)} ${Math.floor(Tokyo.daily[1].temp.min)}`);
            // $('.range3').text(`${Math.floor(Tokyo.daily[2].temp.max)} ${Math.floor(Tokyo.daily[2].temp.min)}`);
            // $('.range4').text(`${Math.floor(Tokyo.daily[3].temp.max)} ${Math.floor(Tokyo.daily[3].temp.min)}`);
            // $('.range5').text(`${Math.floor(Tokyo.daily[4].temp.max)} ${Math.floor(Tokyo.daily[4].temp.min)}`);
            // $('.range6').text(`${Math.floor(Tokyo.daily[5].temp.max)} ${Math.floor(Tokyo.daily[5].temp.min)}`);
            // $('.range7').text(`${Math.floor(Tokyo.daily[6].temp.max)} ${Math.floor(Tokyo.daily[6].temp.min)}`);

            // $('.week1').text(`${daytranslate[new Date((Tokyo.daily[0].dt)*1000).getDay()]}`);
            // $('.week2').text(`${daytranslate[new Date((Tokyo.daily[1].dt)*1000).getDay()]}`);
            // $('.week3').text(`${daytranslate[new Date((Tokyo.daily[2].dt)*1000).getDay()]}`);
            // $('.week4').text(`${daytranslate[new Date((Tokyo.daily[3].dt)*1000).getDay()]}`);
            // $('.week5').text(`${daytranslate[new Date((Tokyo.daily[4].dt)*1000).getDay()]}`);
            // $('.week6').text(`${daytranslate[new Date((Tokyo.daily[5].dt)*1000).getDay()]}`);
            // $('.week7').text(`${daytranslate[new Date((Tokyo.daily[6].dt)*1000).getDay()]}`);

            console.log(Tokyo.daily[6].weather[0].main);
            console.log(Tokyo);

            // weekImg
            // $(".weekImg1").attr("src","./images/icon/11.svg")
            // Tokyo.daily.forEach(function(item,index){
            //     console.log(item)
            // })
            for (var i = 0; i < 7; i++) {
                // console.log(weatherImg[Tokyo.daily[i].weather[i].main]);
                $('.range' + (i + 1)).text(`${Math.floor(Tokyo.daily[i].temp.max)} ${Math.floor(Tokyo.daily[i].temp.min)}`);

                $('.week' + (i + 1)).text(`${daytranslate[new Date((Tokyo.daily[i].dt) * 1000).getDay()]}`);

                var temp = weatherImg[Tokyo.daily[i].weather[0].main];
                $(".weekImg" + (i + 1)).attr("src", temp);

            }



            console.log()



            console.log(Tokyo);
            console.log(Tokyo.daily[0].temp.day);

        })

})

let Hokkaido = null;
// 北海道
let Hokkaidosvg = document.getElementById('Hokkaidosvg');
Hokkaidosvg.addEventListener('click', function (e) {
    console.log('ok')
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=43.23087856547972&lon=141.53236683506273&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw")
        .then((res) => {
            console.log(api, '北海道')
            Hokkaido = res.data
            console.log(Hokkaido.current.temp);
            $('.currentTemp').text(`${Hokkaido.current.temp}`);
            $('#title').text(`北海道`);
            // $('.currentTemp').append(`${Tokyo.current.temp}`);



            for (var i = 0; i < 7; i++) {
                // console.log(weatherImg[Tokyo.daily[i].weather[i].main]);
                $('.range' + (i + 1)).text(`${Math.floor(Hokkaido.daily[i].temp.max)} ${Math.floor(Hokkaido.daily[i].temp.min)}`);

                $('.week' + (i + 1)).text(`${daytranslate[new Date((Hokkaido.daily[i].dt) * 1000).getDay()]}`);

                var temp = weatherImg[Hokkaido.daily[i].weather[0].main];
                $(".weekImg" + (i + 1)).attr("src", temp);

            }
        })

})





https://api.openweathermap.org/data/2.5/onecall?lat=38.27111631434651&lon=140.90033522524502&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw
// 東北角
northeast.addEventListener('click', function (e) {
    console.log('ok')
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=38.27111631434651&lon=140.90033522524502&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw")
        .then((res) => {
            northeast = res.data
            console.log(northeast.current.temp);
            $('.currentTemp').text(`${northeast.current.temp}`);
            $('#title').text(`東北地區`);
            // $('.currentTemp').append(`${Tokyo.current.temp}`);



            for (var i = 0; i < 7; i++) {
                // console.log(weatherImg[Tokyo.daily[i].weather[i].main]);
                $('.range' + (i + 1)).text(`${Math.floor(northeast.daily[i].temp.max)} ${Math.floor(northeast.daily[i].temp.min)}`);

                $('.week' + (i + 1)).text(`${daytranslate[new Date((northeast.daily[i].dt) * 1000).getDay()]}`);

                var temp = weatherImg[northeast.daily[i].weather[0].main];
                $(".weekImg" + (i + 1)).attr("src", temp);

            }
        })

})
// 東海
https://api.openweathermap.org/data/2.5/onecall?lat=35.21636456074108&lon=136.90821007516791&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw
EastSea.addEventListener('click', function (e) {
    console.log('ok')
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=35.21636456074108&lon=136.90821007516791&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw")
        .then((res) => {
            EastSea = res.data
            console.log(EastSea.current.temp);
            $('.currentTemp').text(`${EastSea.current.temp}`);
            $('#title').text(`東海`);
            // $('.currentTemp').append(`${Tokyo.current.temp}`);
            for (var i = 0; i < 7; i++) {
                // console.log(weatherImg[Tokyo.daily[i].weather[i].main]);
                $('.range' + (i + 1)).text(`${Math.floor(EastSea.daily[i].temp.max)} ${Math.floor(EastSea.daily[i].temp.min)}`);

                $('.week' + (i + 1)).text(`${daytranslate[new Date((EastSea.daily[i].dt) * 1000).getDay()]}`);

                var temp = weatherImg[EastSea.daily[i].weather[0].main];
                $(".weekImg" + (i + 1)).attr("src", temp);

            }
        })

})
// // 關西 Kansai
// https://api.openweathermap.org/data/2.5/onecall?lat=34.76937490847536&lon=135.52832165834263&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw
Kansai.addEventListener('click', function (e) {
    console.log('ok')
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=34.76937490847536&lon=135.52832165834263&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw")
        .then((res) => {
            Kansai = res.data
            console.log(Kansai.current.temp);
            $('.currentTemp').text(`${Kansai.current.temp}`);
            $('#title').text(`關西`);
            // $('.currentTemp').append(`${Tokyo.current.temp}`);
            for (var i = 0; i < 7; i++) {
                // console.log(weatherImg[Tokyo.daily[i].weather[i].main]);
                $('.range' + (i + 1)).text(`${Math.floor(Kansai.daily[i].temp.max)} ${Math.floor(Kansai.daily[i].temp.min)}`);

                $('.week' + (i + 1)).text(`${daytranslate[new Date((Kansai.daily[i].dt) * 1000).getDay()]}`);

                var temp = weatherImg[Kansai.daily[i].weather[0].main];
                $(".weekImg" + (i + 1)).attr("src", temp);

            }
        })

})
// // 中國 Hiroshima
// https://api.openweathermap.org/data/2.5/onecall?lat=34.532620657158546&lon=132.4233793788746&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw
Hiroshima.addEventListener('click', function (e) {
    console.log('ok')
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=34.532620657158546&lon=132.4233793788746&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw")
        .then((res) => {
            Hiroshima = res.data
            console.log(Hiroshima.current.temp);
            $('.currentTemp').text(`${Hiroshima.current.temp}`);
            $('#title').text(`中國`);
            // $('.currentTemp').append(`${Tokyo.current.temp}`);
            for (var i = 0; i < 7; i++) {
                // console.log(weatherImg[Tokyo.daily[i].weather[i].main]);
                $('.range' + (i + 1)).text(`${Math.floor(Hiroshima.daily[i].temp.max)} ${Math.floor(Hiroshima.daily[i].temp.min)}`);

                $('.week' + (i + 1)).text(`${daytranslate[new Date((Hiroshima.daily[i].dt) * 1000).getDay()]}`);

                var temp = weatherImg[Hiroshima.daily[i].weather[0].main];
                $(".weekImg" + (i + 1)).attr("src", temp);

            }
        })

})
// // 四國 Kyushu
// https://api.openweathermap.org/data/2.5/onecall?lat=34.0515613973182&lon=133.66483442033453&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw
Shikoku.addEventListener('click', function (e) {
    console.log('ok')
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=34.0515613973182&lon=133.66483442033453&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw")
        .then((res) => {
            Shikoku = res.data
            console.log(Shikoku.current.temp);
            $('.currentTemp').text(`${Shikoku.current.temp}`);
            $('#title').text(`四國`);
            // $('.currentTemp').append(`${Tokyo.current.temp}`);
            for (var i = 0; i < 7; i++) {
                // console.log(weatherImg[Tokyo.daily[i].weather[i].main]);
                $('.range' + (i + 1)).text(`${Math.floor(Shikoku.daily[i].temp.max)} ${Math.floor(Shikoku.daily[i].temp.min)}`);

                $('.week' + (i + 1)).text(`${daytranslate[new Date((Shikoku.daily[i].dt) * 1000).getDay()]}`);

                var temp = weatherImg[Shikoku.daily[i].weather[0].main];
                $(".weekImg" + (i + 1)).attr("src", temp);

            }
        })

})
// // 九州 Kyushu
// https://api.openweathermap.org/data/2.5/onecall?lat=32.67082072212292&lon=130.8009095387993&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw
Kyushu.addEventListener('click', function (e) {
    console.log('ok')
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=32.67082072212292&lon=130.8009095387993&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw")
        .then((res) => {
            Kyushu = res.data
            console.log(Kyushu.current.temp);
            $('.currentTemp').text(`${Kyushu.current.temp}`);
            $('#title').text(`九州`);
            // $('.currentTemp').append(`${Tokyo.current.temp}`);
            for (var i = 0; i < 7; i++) {
                // console.log(weatherImg[Tokyo.daily[i].weather[i].main]);
                $('.range' + (i + 1)).text(`${Math.floor(Kyushu.daily[i].temp.max)} ${Math.floor(Kyushu.daily[i].temp.min)}`);

                $('.week' + (i + 1)).text(`${daytranslate[new Date((Kyushu.daily[i].dt) * 1000).getDay()]}`);

                var temp = weatherImg[Kyushu.daily[i].weather[0].main];
                $(".weekImg" + (i + 1)).attr("src", temp);

            }
        })

})
// // 北路信越 Nagano 
Nagano.addEventListener('click', function (e) {
    console.log('ok')
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=37.917533140946865&lon=138.99889301744824&units=metric&appid=5f2d120e67801aa941cd3433d83eef5c&lang=zh_Tw")
        .then((res) => {
            Nagano = res.data
            console.log(Nagano.current.temp);
            $('.currentTemp').text(`${Nagano.current.temp}`);
            $('#title').text(`北陸信越`);
            // $('.currentTemp').append(`${Tokyo.current.temp}`);
            for (var i = 0; i < 7; i++) {
                // console.log(weatherImg[Tokyo.daily[i].weather[i].main]);
                $('.range' + (i + 1)).text(`${Math.floor(Nagano.daily[i].temp.max)} ${Math.floor(Nagano.daily[i].temp.min)}`);

                $('.week' + (i + 1)).text(`${daytranslate[new Date((Nagano.daily[i].dt) * 1000).getDay()]}`);

                var temp = weatherImg[Nagano.daily[i].weather[0].main];
                $(".weekImg" + (i + 1)).attr("src", temp);

            }
        })

})