var express = require("express");
var app = express();
app.listen(3000);

var mysql = require("mysql");
var conn = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    database: "demo"
})
conn.connect(function (err) {
    // console.log(err);
});

///全部資料
app.get('/getViewData', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    conn.query(
        "select * from viewdata",
        [],
        function (err, data) {
            res.set('Access-Control-Allow-Origin', '*');
            res.send(JSON.stringify(data));
        }
    )
})


///getViewData/地區
app.get('/getViewData/:Area', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    conn.query(
        "select * from viewdata where Area = ?",
        [req.params.Area],
        function (err, data) {
            console.log(err);
            res.send(JSON.stringify(data));
        }
    )
})

///getViewData/地區/類別
app.get('/getViewData/:Area/:Tag', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    conn.query(
        "select * from viewdata where Area = ? and ViewTag = ?",
        [req.params.Area,req.params.Tag],
        function (err, data) {
            console.log(err);
            res.send(JSON.stringify(data));
        }
    )
})


///getViewDataByTag/類別
app.get('/getViewDataByTag/:Tag', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    conn.query(
        "select * from viewdata where ViewTag = ?",
        [req.params.Tag],
        function (err, data) {
            console.log(err);
            res.send(JSON.stringify(data));
        }
    )
})


//取得會員收藏的景點資料
///getMemberCollectViewData/會員名稱
app.get('/getMemberCollectViewData/:name', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    conn.query(
        "SELECT * FROM (`users` as u INNER JOIN memberview_details as mb on u.id = mb.UserID) INNER JOIN viewdata as v on v.ViewID = mb.ViewDataID where name = ?",
        [req.params.name],
        function (err, data) {
            console.log(err);
            res.send(JSON.stringify(data));
        }
    )
})


//取得會員收藏的景點TAG
///getMemberCollectViewData/會員名稱
app.get('/getMemberCollectViewDataTag/:name', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    conn.query(
        "SELECT DISTINCT ViewTag FROM (`users` as u INNER JOIN memberview_details as mb on u.id = mb.UserID) INNER JOIN viewdata as v on v.ViewID = mb.ViewDataID where name = ?",
        [req.params.name],
        function (err, data) {
            console.log(err);
            res.send(JSON.stringify(data));
        }
    )
})


//依照會員選擇景點TAG篩選資料
///getMemberCollectViewData/會員名稱/TAG
app.get('/getMemberCollectViewDataTag/:name/:Tag', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    conn.query(
        "SELECT * FROM (`users` as u INNER JOIN memberview_details as mb on u.id = mb.UserID) INNER JOIN viewdata as v on v.ViewID = mb.ViewDataID where name = ? and ViewTag = ?",
        [req.params.name,req.params.Tag],
        function (err, data) {
            console.log(err);
            res.send(JSON.stringify(data));
        }
    )
})



///全部資料
app.get('/getSpecialViewData', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    conn.query(
        "select * from special_viewdata",
        [],
        function (err, data) {
            res.set('Access-Control-Allow-Origin', '*');
            res.send(JSON.stringify(data));
        }
    )
})

