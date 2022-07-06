// var express = require("express");
// var router = express();
const express = require("express");
const router = require("express").Router();

// 允許跨域使用本服務
// var cors = require("cors");
// router.use(cors());

// router.listen(3001);

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

// 取得一般景點資料
///全部資料
router.get('/getViewData', function (req, res) {
    conn.query(
        "select * from viewdata",
        [],
        function (err, data) {
            res.set('Access-Control-Allow-Origin', '*');
            res.send(JSON.stringify(data));
        }
    )
})

///取得月曆資料
router.get('/getMonthData/:month', function (req, res) {
    conn.query(
        "select * from monthdata where month = ?",
        [req.params.month],
        function (err, data) {
            res.set('Access-Control-Allow-Origin', '*');
            res.send(JSON.stringify(data));
        }
    )
})

// 取得一般景點資料 地區篩選
///getViewData/地區
router.get('/getViewData/:Area', function (req, res) {
    conn.query(
        "select * from viewdata where Area = ?",
        [req.params.Area],
        function (err, data) {
            console.log(err);
            res.send(JSON.stringify(data));
        }
    )
})

// 取得一般景點資料 地區類別篩選
///getViewData/地區/類別
router.get('/getViewData/:Area/:Tag', function (req, res) {
    conn.query(
        "select * from viewdata where Area = ? and ViewTag = ?",
        [req.params.Area,req.params.Tag],
        function (err, data) {
            console.log(err);
            res.send(JSON.stringify(data));
        }
    )
})

// 取得一般景點資料 類別篩選
///getViewDataByTag/類別
router.get('/getViewDataByTag/:Tag', function (req, res) {
    conn.query(
        "select * from viewdata where ViewTag = ?",
        [req.params.Tag],
        function (err, data) {
            console.log(err);
            res.send(JSON.stringify(data));
        }
    )
})


//取得會員收藏的全部景點資料
///getMemberCollectViewData/會員名稱
router.get('/getAllMemberCollectViewData/:name', function (req, res) {
    conn.query(
        "SELECT * FROM (`users` as u INNER JOIN memberview_details as mb on u.id = mb.UserID) INNER JOIN viewdata as v on v.ViewID = mb.ViewDataID WHERE name = ? UNION SELECT * FROM (`users` as u INNER JOIN spmemberview_details as spmb on u.id = spmb.UserID) INNER JOIN special_viewdata as sv on sv.ViewID = spmb.ViewDataID WHERE name = ? ORDER BY Area",
        [req.params.name,req.params.name],
        function (err, data) {
            console.log(err);
            res.send(JSON.stringify(data));
        }
    )
})

//取得會員收藏的一般景點資料
///getMemberCollectViewData/會員名稱
router.get('/getMemberCollectViewData/:name', function (req, res) {
    conn.query(
        "SELECT * FROM (`users` as u INNER JOIN memberview_details as mb on u.id = mb.UserID) INNER JOIN viewdata as v on v.ViewID = mb.ViewDataID WHERE name = ? ORDER BY Area",
        [req.params.name,req.params.name],
        function (err, data) {
            console.log(err);
            res.send(JSON.stringify(data));
        }
    )
})


//取得會員收藏的特別景點資料(賽馬夜店資料)
///getMemberCollectViewData/會員名稱
router.get('/getspMemberCollectViewData/:name', function (req, res) {
    conn.query(
        "SELECT * FROM (`users` as u INNER JOIN spmemberview_details as mb on u.id = mb.UserID) INNER JOIN special_viewdata as v on v.ViewID = mb.ViewDataID where name = ? ORDER BY ViewTag DESC",
        [req.params.name],
        function (err, data) {
            console.log(err);
            res.send(JSON.stringify(data));
        }
    )
})



//取得會員收藏的景點TAG(只有TAG) 加入我的行程用
///getMemberCollectViewData/會員名稱
router.get('/getMemberCollectViewDataTag/:name', function (req, res) {
    conn.query(
        "SELECT DISTINCT ViewTag FROM (`users` as u INNER JOIN memberview_details as mb on u.id = mb.UserID) INNER JOIN viewdata as v on v.ViewID = mb.ViewDataID WHERE name = ? UNION SELECT DISTINCT ViewTag FROM (`users` as u INNER JOIN spmemberview_details as spmb on u.id = spmb.UserID) INNER JOIN special_viewdata as sv on sv.ViewID = spmb.ViewDataID WHERE name = ?",
        [req.params.name,req.params.name],
        function (err, data) {
            console.log(err);
            res.send(JSON.stringify(data));
        }
    )
})


//依照會員選擇TAG篩選資料 加入我的行程用
///getMemberCollectViewData/會員名稱/TAG
router.get('/getMemberCollectViewDataTag/:name/:Tag', function (req, res) {
    conn.query(
        "SELECT * FROM (`users` as u INNER JOIN memberview_details as mb on u.id = mb.UserID) INNER JOIN viewdata as v on v.ViewID = mb.ViewDataID WHERE name = ? and ViewTag = ? UNION SELECT * FROM (`users` as u INNER JOIN spmemberview_details as spmb on u.id = spmb.UserID) INNER JOIN special_viewdata as sv on sv.ViewID = spmb.ViewDataID WHERE name = ? and ViewTag = ?",
        [req.params.name,req.params.Tag,req.params.name,req.params.Tag],
        function (err, data) {
            console.log(err);
            res.send(JSON.stringify(data));
        }
    )
})



///特別景點的全部資料(賽馬場夜店)
// 頁面資料用
router.get('/getSpecialViewData', function (req, res) {
    conn.query(
        "select * from special_viewdata",
        [],
        function (err, data) {
            console.log(err);
            res.send(JSON.stringify(data));
        }
    )
})

///一般景點加入我的最愛
// 需要傳入UserID跟ViewID
router.post('/addmemberviewdata/:UserID/:ViewdataID', function (req, res) {
    conn.query(
        "INSERT INTO memberview_details VALUES (?,?)",
        [req.params.UserID,req.params.ViewdataID],
        function (err, data) {
            res.set('Access-Control-Allow-Origin', '*');
            res.send('Insert OK');
        }
    )
})


///特別景點加入我的最愛(賽馬場夜店)
// 需要傳入UserID跟ViewID
router.post('/addspmemberviewdata/:UserID/:ViewdataID', function (req, res) {
    conn.query(
        "INSERT INTO spmemberview_details VALUES (?,?)",
        [req.params.UserID,req.params.ViewdataID],
        function (err, data) {
            res.set('Access-Control-Allow-Origin', '*');
            res.send('Insert OK');
        }
    )
})

///刪除會員收藏的一般景點
// 需要傳入UserID跟ViewID
router.post('/deletememberviewdata/:UserID/:ViewdataID', function (req, res) {
    conn.query(
        "DELETE FROM memberview_details WHERE UserID = ? and ViewDataID = ?",
        [req.params.UserID,req.params.ViewdataID],
        function (err, data) {
            res.set('Access-Control-Allow-Origin', '*');
            res.send('Delete OK');
        }
    )
})

///刪除會員收藏的特別景點(賽馬場夜店)
// 需要傳入UserID跟ViewID
router.post('/deletespmemberviewdata/:UserID/:ViewdataID', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    conn.query(
        "DELETE FROM spmemberview_details WHERE UserID = ? and ViewDataID = ?",
        [req.params.UserID,req.params.ViewdataID],
        function (err, data) {
            res.send('Delete OK');
        }
    )
})

module.exports = router;
