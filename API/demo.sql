/*
 Navicat Premium Data Transfer

 Source Server         : demo
 Source Server Type    : MySQL
 Source Server Version : 100424
 Source Host           : localhost:3306
 Source Schema         : demo

 Target Server Type    : MySQL
 Target Server Version : 100424
 File Encoding         : 65001

 Date: 01/07/2022 10:41:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for memberview_details
-- ----------------------------
DROP TABLE IF EXISTS `memberview_details`;
CREATE TABLE `memberview_details`  (
  `UserID` tinyint(2) UNSIGNED ZEROFILL NOT NULL,
  `ViewDataID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of memberview_details
-- ----------------------------
INSERT INTO `memberview_details` VALUES (01, '1');
INSERT INTO `memberview_details` VALUES (01, '2');
INSERT INTO `memberview_details` VALUES (02, '4');
INSERT INTO `memberview_details` VALUES (02, '5');
INSERT INTO `memberview_details` VALUES (01, '23');
INSERT INTO `memberview_details` VALUES (01, '55');

-- ----------------------------
-- Table structure for special_viewdata
-- ----------------------------
DROP TABLE IF EXISTS `special_viewdata`;
CREATE TABLE `special_viewdata`  (
  `ViewID` int NOT NULL AUTO_INCREMENT,
  `ViewName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Area` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ViewTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ViewText` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ViewImage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `latitude` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '緯度',
  `longitude` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '經度',
  PRIMARY KEY (`ViewID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 79 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of special_viewdata
-- ----------------------------
INSERT INTO `special_viewdata` VALUES (1, '東京都市賽馬場', '品川區', '賽馬', '位於東京品川區內的大井賽馬場也被稱之為「東京都市賽馬場」，夜間賽馬是其最知名的特色，也被稱作”東京夜晚的新景點”，只要100日圓就能夠體驗震撼力滿點的夜間賽馬。在夜間賽馬舉辦的期間(4~12月之間)，場內會有各式各樣璀璨奪目的燈光秀，同時也是戀人夜間約會的絕佳去處!', './pic/00012.png', '35.59235711', '139.7412917');
INSERT INTO `special_viewdata` VALUES (2, '東京競馬場', '港區', '賽馬', '和東京都市賽馬場不同，東京競馬場並未坐落於東京23區內，然而比起前者，他又更具有國際地位!!\n是舉辦世界知名賽事「日本盃」的地點，「日本盃」是G1等級的世界級賽馬，在百大世界賽馬一級賽中排名第7，日本國內則是排名第一，可以說是最能代表日本的賽馬場。\n和東京都市賽馬場一樣，只要100日圓，就能夠體驗賽馬的樂趣!\n場內也有各式各樣的設施，提供與駿馬近距離接觸的機會，是一日遊的絕佳去處!\n', './pic/00013.png', '35.67491099', '139.483953');
INSERT INTO `special_viewdata` VALUES (3, 'Ginza 300 Bar', '中央區', '夜店', '你以為酒吧消費一定相當昂貴嗎?這間店的存在將打破你的刻板印象。\n店內提供300日圓起跳的各式酒類品項，讓您透過可以負擔的價格，輕鬆體驗久吧內的氛圍。\n除了提供酒類以外，店內同時也提供各式各樣的精緻餐點，更會依照不同分店提供「限定菜單」，快去各個分店去解鎖吧!\n店內每天也都有DJ進駐，品著特殊的調酒，搭配精緻的食物，伴隨著熱鬧的音樂，這些體驗一定能讓您印象深刻!!\n', './pic/00014.png', '35.67056291', '139.7649585');
INSERT INTO `special_viewdata` VALUES (4, 'Tantra Tokyo', '港區', '夜店', '不同於一般的酒吧，整間店內充滿了時尚與高級的氛圍，十分優雅。在六本木已經開業十餘年，有不少外國遊客、名人、運動選手都會光顧，是屬於大人的社交場所。\n除了鋼管舞與脫衣舞的表演之外，更有著期間限定的「東京藝者表演」，比起其他的表演，多了日本的「和」元素，給您留下更深刻的印象!\n', './pic/00015.png', '35.66384992', '139.7340163');
INSERT INTO `special_viewdata` VALUES (5, 'Bar TRENCH', '澀谷區', '夜店', '如果您追求的是究極的飲酒體驗，那您一定不能錯過這間店!\n不同於一般常見的酒吧，這間店提供了世界罕見的瑞士藥草酒跟苦艾酒，超過100種的苦精酒來調配出獨一無二的雞尾酒。\n甚至在2019年亞洲的50大最佳酒吧中，勇奪第23名的佳績。\n儘管酒吧店面不大，但特意挑高的天花板配上center類型的座位，營造出獨樹一格的一流氣氛。\n', './pic/00016.png', '35.64860542', '139.7079778');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` tinyint(2) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `birthday` date NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `googleID` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (01, 'admin', '1995-06-06', 'admin@google.com', '123456', NULL);
INSERT INTO `users` VALUES (02, 'test', '2022-06-22', 'test@gmail.com', '456789', NULL);

-- ----------------------------
-- Table structure for viewdata
-- ----------------------------
DROP TABLE IF EXISTS `viewdata`;
CREATE TABLE `viewdata`  (
  `ViewID` int NOT NULL AUTO_INCREMENT,
  `ViewName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Area` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ViewTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ViewText` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ViewImage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `latitude` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '緯度',
  `longitude` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '經度',
  PRIMARY KEY (`ViewID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 79 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of viewdata
-- ----------------------------
INSERT INTO `viewdata` VALUES (1, '元渕江公園', '足立區', '景點', '足立區元淵江公園是公園內有足立生物公園的公園。 您可以在池塘里釣魚，孩子們在多功能廣場和玩具廣場自由玩耍。', './pic/元渕江公園.jpg\r\n', '35.7926759', '139.7899791');
INSERT INTO `viewdata` VALUES (2, '三ノ輪橋－三ノ輪商店街\r\n', '荒川區', '景點', '都電荒川線的起迄站，經過保留和整修過的車站被入選為「関東の駅百選」，是個具有歷史意義的車站，其商店街也保存了昭和時代東京老城區的復古風格，獨具下町風情的街區，讓你體會有別於東京市區的寧靜。', './pic/三芝輪.jpg', '35.7330819', '139.7885275');
INSERT INTO `viewdata` VALUES (3, '町屋二丁目－餃子は一龍 町屋店\r\n\r\n\r\n', '荒川區', '餐廳', '特色：餡料豐富的特大餃子\n', './pic/餃子館.jpg', '35.7439832', '139.7789689');
INSERT INTO `viewdata` VALUES (4, '東京大學', '文京區\n', '景點', '東京23區位於中央偏北的「文京區」，顧名思義為「文之京都」之意。為東京最主要的文教區，歷代文人如夏目漱石、森鷗外、宮澤賢治都曾經住在文京區，現今亦有許多作家、政治家、學者居住於此。', './pic/東京大學.jpg', '35.7146265', '139.7592053');
INSERT INTO `viewdata` VALUES (5, '小石川後樂園', '文京區\n', '景點', '「小石川後樂園」（小石川後楽園）建造於江戶時代初期（1669年完工），被視為東京最古老的庭園。是水戶德川家水戶藩家的庭園，因二代藩主與中國思想家朱舜水有私交，採用許多他的意見，也因此在設計上小石川後樂園融入許多儒學的元素，在園內景點的命名上亦可看到深受朱舜水之影響，像是「小廬山」等。', './pic/小石川後樂園.jpg', '35.7055327', '139.7471006');
INSERT INTO `viewdata` VALUES (6, '蜂蜜吐司咖啡屋（秋?原店）', '千代田區', '美食', '評論:蜂蜜吐司太棒了，包括黑巧克力。鮮奶油味道很好。牛奶麵包的味道很完美，外面烤的麵包皮恰到好處。裏面的麵包也很好吃。包裝精緻。如果你在日本秋葉原，我強烈推薦這個地方。', './pic/蜂蜜吐司咖啡屋.jpg', '35.69761', '139.7685162');
INSERT INTO `viewdata` VALUES (7, '東京皇居', '千代田區', '景點', '皇居顧名思義就是給天皇居住的地方，自古以來，皇居不斷在搬遷，但自從明治天皇上位後，皇居就一直位於東京千代田區，直到現在都沒改變', './pic/東京皇居.jpg', '35.685175', '139.7198405');
INSERT INTO `viewdata` VALUES (8, '水天宮', '中央區', '神社', '從江戶時代以來，作為安產、求子之神受到人們深厚的信仰，有許多孕婦、求子或平安順產的夫婦前來參拜', './pic/水天宮.jpg', '35.718476', '139.586162');
INSERT INTO `viewdata` VALUES (9, '江戶川區自然動物園', '江戶川區', '景點', '江戶川區自然動物園於昭和58年（1983年）成立了34年，是東京第1間區立動物園。', './pic/江戶川區自然動物園.jpg', '35.6710531', '139.8562134');
INSERT INTO `viewdata` VALUES (10, '日本科學未來館', '江東區', '景點', '日本科學未來館是一間位於日本東京御台場區的博物館。', './pic/日本科學未來館.jpg', '35.6193359', '139.7722796');
INSERT INTO `viewdata` VALUES (11, 'はし田屋', '目黑區', '美食', 'Lourmarin Market & Gallery不遠處這間日式風建築，則是販售博多風水炊雞鍋的「はし田屋」，他們家雞湯底喝來真如滴雞精般實在，親子丼也很好吃喔！', './pic/はし田屋.jpg', '35.655673', '139.6976067');
INSERT INTO `viewdata` VALUES (12, '中野百老匯', '中野區', '景點', '中野百老匯於1966年開業，是中野代表性的文化聚集地。這棟大樓由低層的購物中心（從地下1樓至地上4樓）與高層的集合住宅所構成。動漫、cosplay與玩具等亞文化相關的店鋪與服裝店、飲食店等日常生活相關的店鋪在這裡混合。總店鋪數高達250間以上。', './pic/中野百老匯.jpg', '35.7092518', '139.6634637');
INSERT INTO `viewdata` VALUES (13, '大泉学園', '練馬區', '景點', '因這有著綠意盎然與清悠的居住環境，因此吸引許多漫畫家居住於此，像是【哆啦A夢】作者【藤子不二雄】與【原子小金剛】作者【手塚治虫】就是居住於此並在此創作。另外，日本第一部突破性的長篇動畫【白蛇傳】就是在此由【東映アニメーション】製作並誕生的喲！', './pic/大泉学園.jpg', '35.7493644', '139.5843575');
INSERT INTO `viewdata` VALUES (14, '平和之森公園運動場', '大田區', '景點', '在這個鄰近平和之森公園的繩網運動場解放你內在的極限體能王。從攀牆到平衡木，有各種的障礙物考驗你的能耐。公園內還有一處分離的區塊提供水上的障礙挑戰，可以乘坐能在小小水道上划行的小船。旁邊還有一個能容納 6 人的小型免費區域。', './pic/平和之森公園運動場.jpg', '35.5800327', '139.6082835');
INSERT INTO `viewdata` VALUES (15, '世田谷路面電車沿線', '世田谷區', '景點', '僅5公里長的「世田谷線」是東京少見的路面電車，雖然短小，但卻擁有許多特別特色小店與景點散落沿線，像是恭奉許多招福貓的豪德寺與美食咖啡廳，值得花上一天好好探訪。', './pic/世田谷路面電車沿線.jpg', '35.6434634', '139.5188778');
INSERT INTO `viewdata` VALUES (16, '品川神社', '品川區', '神社', '東京都內有諸多被譽為能量景點的地方，此座「品川神社」因與源賴朝的故事有深厚淵源，因而產生了起死回生、一舉逆轉等關鍵詞。再加上腹地內阿那稻荷神社的「一粒萬倍之神泉」據說可提升財運，因此信徒絡繹不絕。', './pic/品川神社.jpg', '35.6184708', '139.7354776');
INSERT INTO `viewdata` VALUES (17, '荻窪中華そば 春木屋', '杉並區', '美食', '從荻窪站北口徒步2分鐘，來到了「荻窪中華そば 春木屋」。這間1949年開業的老店，提供著有「拉麵原點」之稱的小魚乾風味的醬油拉麵，是許多饕客慕名遠道而來的人氣拉麵店，經常一開店就馬上客滿', './pic/荻窪中華そば 春木屋.jpg', '35.6189584', '139.5188751');
INSERT INTO `viewdata` VALUES (18, '墨田北齋美術館', '墨田區', '景點', '「墨田北齋美術館」位於東京都墨田區中，離晴空塔步行30分鐘。旅客能在這裡欣賞到日本江戶時代代表性的藝術家——葛飾北齋的作品。北齋生涯90年中大半是在墨田區渡過，與墨田區淵源極深。作為浮世繪繪師，他的影響力不單遍及日本，甚至遠觸歐洲。', './pic/JAgjLVC7ZCDfpyBMdxAj7blJJVjZ3kxhxcXh6db9-1920x1080.jpg', '35.6963356', '139.7982253');
INSERT INTO `viewdata` VALUES (19, '晴藏咖啡館', '台東區', '美食', '這棟經過改建的傳統日式建築，前身是一家餐廳。據現任屋主所說，這裡曾是藝妓的居所。這棟屋子總是迎合著淺草地區的需求，如今晴藏咖啡館已譜下這段歷史故事的新篇章，而日本講究細節的精神，在手沖咖啡或精心準備的鬆軟吐司上立即可見。', './pic/晴藏咖啡館.jpg', '35.7173769', '139.7940358');
INSERT INTO `viewdata` VALUES (20, '焼鳥トリビアン', '台東區', '美食', '這間餐廳的每個環節都是工藝精神的展現，從挑選雞肉（只選公雞肉），到師傅的注視下，經過烤爐細心翻烤的每隻串燒。每一口的滋味和活絡的吧檯氛圍都值得細細品味。我們的建議是放下菜單吧，交由大廚為你包辦餐點（omakase），免去親自挑選的艱難過程。', './pic/焼鳥トリビアン.jpg', '35.7174301', '139.7938703');
INSERT INTO `viewdata` VALUES (21, 'こちら葛飾区亀有公園前派出所', '葛飾區', '動畫、電影', '「龜有公園前派出所」是作者虛構的存在，但是在龜有站的北口有一個派出所，聽說問裡面的警察：請問阿兩在嗎？他們會回答說：阿兩出去巡邏囉。', './pic/e168.png', '35.7665375', '139.8475334');
INSERT INTO `viewdata` VALUES (22, '人中之龍', '新宿區', '動畫、電影', '在華燈初上之後，新宿歌舞伎町處處是電影院、酒吧、遊戲機中心等娛樂場所，可謂燈紅酒緣、夜夜笙歌，直到翌日太陽再次升起。有相信是《人中之龍》的粉絲留言，指歌舞伎町現在看起來，跟遊戲中虛構的神室町非常相似，甚至號召一眾粉絲到哪裡，仿照主角桐生一馬拍張照！', './pic/Kabukicho.png', '35.6955426', '139.698772');
INSERT INTO `viewdata` VALUES (23, 'Sunshine City--空之境界、偶像大師', '豐島區', '動畫、電影', '位於日本首都東京的繁華地區-池袋，其中作為池袋代表性的觀光地「池袋太陽城Sunshine City」裡，包含水族館、天象儀、展望台，甚至是室內複合設施「NAMJATOWN（ナンジャタウン）」、飯店等娛樂設施豐富多元，因此是備受日本國內外觀光客喜愛的觀光景點，其中水族館更是常有許多動畫在此取景', './pic/sunshine city.jpg', '35.7286557', '139.7169334');
INSERT INTO `viewdata` VALUES (24, '東京體育館--黑子的籃球', '澀谷區', '動畫、電影', '由朝日新聞社、全國高等學校體育聯盟、日本籃球協會主辦的全國高中籃球選拔優勝大會，是日本高中籃球比賽的盛事。由於在年末舉行，因此俗稱為“ウインターカップ”（Winter Cup）。為黑子的籃球第二、三季主舞台。', './pic/news.jpg', '35.6797407', '139.7102164');
INSERT INTO `viewdata` VALUES (25, 'LABI新宿東口館---你的名字', '新宿區', '動畫、電影', '這座建築雖然有很大的街頭視野，但它是劇中像征東京城市的地方，例如開場，“禪禪”流動的場景，以及故事的舞台回到東京的場景。一遍又一遍地作為其中之一出現，現已停業', './pic/LABI新宿東口館.jpg', '35.6910254', '139.6972058');
INSERT INTO `viewdata` VALUES (26, '須賀神社・男坂階段--你的名字', '新宿區', '動畫、電影', '穿過鳥居，然後繼續前進。此處的樓梯就是“你的名字\"最後一幕的舞台', './pic/你的名字.jpg', '35.6852851', '139.7202896');
INSERT INTO `viewdata` VALUES (27, '三軒茶屋--女神異聞錄5', '世田谷區', '動畫、電影', '遊戲中主人公借住的地方叫「四軒茶屋」!! 現實中其實是叫三軒茶屋，遊戲中的配置跟現實中還是有一些落差!! 但是很多地方真的都實際存在呦!!\n', './pic/三軒茶屋.png', '35.6436399', '139.6713265');
INSERT INTO `viewdata` VALUES (28, '澀谷十字路口', '澀谷區', '動畫、電影', '當紅綠燈信號變成綠燈的瞬間，來自四面八方的行人們同時往十字路口的中間移動。應該不少人有印象，在網路、影片等等的媒體看過吧，這就是澀谷的全向十字路口！位在澀谷車站出口附近的澀谷十字路口，代表著現今日本的觀光景點之一，也是許多動漫影視作品的熱門取景點', './pic/澀谷十字路口.jpg', '35.6596162', '139.6991185');
INSERT INTO `viewdata` VALUES (29, '新宿御苑--言葉之庭', '新宿區', '動畫、電影', '東京版紐約中央公園，在江戶時代（1603～1867）為武家的宅地，占地寬敞、綠意盎然，於1949年立為公園。之後便成為身處大都會的東京居民親近自然的熱門休閒場所，也是言葉之庭的主舞台', './pic/新宿御苑.jpg', '35.6859662', '139.7091484');
INSERT INTO `viewdata` VALUES (30, '大泉學園路--四月是你的謊言', '練馬區', '動畫、電影', '大泉學園路，從大泉學園站北口步行5分鐘，靠近大泉學園通的大泉中學。 由於連續的紅綠燈，道路（尤其是對面車道）在白天都是擁堵的，無論是一周中的哪一天。 如果想少車拍照，建議早上', './pic/四月.jpg', '35.7630427', '139.5861932');
INSERT INTO `viewdata` VALUES (31, '池袋--デュラララ!!', '豐島區', '動畫、電影', '本作以池袋為舞台，嚮往非日常的少年、愛找碴的小混混、跟蹤狂的電波系少女、以作情報販子「為樂」的青年、專接不尋常病患的密醫、迷上魔物的高中生以及騎著漆黑色機車的「無頭騎士」等共同展開的一連串非日常的故事。・サンシャイン通り、60階通り（サンシャイン60通り、池袋西口公園等等', './pic/無頭騎士.jpg', '35.7295028', '139.7087114');
INSERT INTO `viewdata` VALUES (32, '東映動畫博物館', '練馬區', '動畫、電影', '2018年7月在東映動畫大泉工作室開館的動畫博物館。 館內展示了東映動畫作品的故事板和原畫等珍貴的製作資料，您可以在巨大的觸摸顯示器上搜索作品和觀看影片。', './pic/東映動畫博物館.jpg', '35.7523856', '139.5945118');
INSERT INTO `viewdata` VALUES (33, '杉並動畫博物館', '杉並區', '動畫、電影', '由日本動畫協會負責營運，館內分為多個區域，除了用圖像和映像說明動畫的歷史和製作過程外，也設有放映室把圖書館持有的動畫作品播放。另外也設有錄音室，能讓參觀者體驗動畫的後期配音及效果聲效製作等及處理間介紹監督、作畫監督、美術監督的工作，也包括傳統動畫（Cell Animation）、由分鏡至後期製作的製作流程。設有工作坊讓在場人士體驗仕上（即上色）和編集及初級數碼動畫。1年內也有3至4次的焦點作品展出，介紹原作者及登場角色等。近期展出包括蠟筆小新等。', './pic/杉並動畫博物館.jpg', '35.7104086', '139.6056367');
INSERT INTO `viewdata` VALUES (34, 'ULTRAMAN STREET ', '世田谷區', '動畫、電影', '環繞小田急線的宗司谷大倉站的三條商店街、宗司谷南商店街、宗司谷商店街和宗司谷振興會商店街，被稱為“奧特曼商店街”。 由於圓谷製作 經在世田谷区附近，這是一個以區域推廣而命名的購物區。', './pic/ULTRAMANSTREET.png', '35.6431368', '139.608806');
INSERT INTO `viewdata` VALUES (35, '東京鐵塔', '港區', '景點', '東京鐵塔的正式名稱是「日本電波塔」，它作為綜合電波塔長年負責關東地區的電視和無線電的信號輸送。\n\n1953年2月1日，NHK（日本放送協會）成功正式播放了日本首個電視信號，4年以後其他多個民營播放局也陸續獲得了播放權。但是由於當時還沒有電波塔，各播放局使用各自的電波裝置發射電視信號。\n\n那個時候由於日本正迎來經濟快速發展時期，家用電視機廣泛普及，人民對電視信號的需求也不斷增加，面對這種狀況，前田久吉（日本實業家和政治家）提出了建設綜合電波塔的計劃，結束各個播放局各自信號亂飛的狀況，由綜合電波塔統一', './pic/00000.jpg', '35.65870688', '139.7454651');
INSERT INTO `viewdata` VALUES (36, '淺草雷門', '台東區', '景點', '淺草寺是東京最古老的寺廟，也是最熱門的東京旅遊景點，其周邊整個淺草區域在江戶時代曾是東京最繁榮的一條街，保留了東京為數不多的江戶下町氛圍，非常適合換上和服在這裡拍美照，首先到知名的「雷門」打卡後，一路沿著淺草寺前的表參道「仲見世通」逛，這條商店街販售著各式復古玩具、日式點心、特色伴手禮、美食小吃，最後來到「淺草寺」參拜求張籤，便是最經典的淺草散步路線。', './pic/00001.jpg', '35.71126431', '139.7963656');
INSERT INTO `viewdata` VALUES (37, '晴空塔', '墨田區', '景點', '東京晴空塔可說是當今東京頭號地標，塔高達634公尺，是現今世界第二高塔（僅次於杜拜哈利法塔），除了可以俯瞰整個東京市區的觀景台外，晴空塔裡滿滿的日本伴手禮、美食餐廳，更有Pokemon專賣店，絕對是遊客來東京必去景點之一。', './pic/00002.jpg', '35.71026305', '139.8108184');
INSERT INTO `viewdata` VALUES (38, '台場', '港區', '景點', '來到擁有許多休閒娛樂設施的「台場」，這個大人小孩都愛的東京景點，只有實際來過一次才能體會何以日劇浪漫拍攝場景都在此的絕美聖地，早上首衝現在全世界最流行的夢幻光影互動展「teamLab」，沈浸在科技打造的藝術中，接著來去AQUA CITY、Diver City Tokyo等商場逛逛，日劇迷&海賊王迷不要錯過可以買限定商品的富士電視台，或到Decks瘋玩室內遊樂設施、懷舊昭和商店街，台場真的太好玩啦！', './pic/00003.jpg', '35.62806437', '139.771825');
INSERT INTO `viewdata` VALUES (39, '銀座', '中央區', '景點', '銀座是東京頂級購物區之一，各大國際奢侈品牌都會在銀座設立旗艦店，也有很多精品下午茶餐廳，適合甜點控探索，資生堂、伊東屋等日本老字號在銀座也都有點，是喜歡買精品、吃下午茶的人不可錯過的東京景點；旁邊的日比谷公園風景相當美麗，更是秋天賞楓好去處；距離銀座15分鐘步行時間的汐留，玻璃帷幕互相倒影著各個超高大樓景色相當令人震撼，還有宮崎駿監督製造的大笨鐘也是必去景點之一；Caretta 46F免費眺望東京景致，可看到遠處的彩虹大橋、台場、築地市場及隔著隅田川的月島，是拍夜景的好地方。', './pic/00004.jpg', '35.67956151', '139.7689984');
INSERT INTO `viewdata` VALUES (40, '明治神宮', '澀谷區', '景點', '明治神宮是供奉明治天皇、昭憲皇太后的神社，有著佔地70萬平方公尺的森林綠地，是個適合散步放空的好地方\n，擁有日本最大木製鳥居，是東京人人皆知的經典必去景點。\n南參道、酒樽牆、明治神宮御苑、明治神宮御守 (開運木鈴尤其酷)，以及神社參拜流程都是重點\n', './pic/00005.jpg', '35.67765259', '139.6991542');
INSERT INTO `viewdata` VALUES (41, '竹下通、原宿', '澀谷區', '景點', '而明治神宮所在的原宿，旁邊就是「竹下通」，一個可以感受東京年輕人活力的逛街區，在竹下通，你不用在意別人的眼光，穿上你想穿的服飾展現自己的個性，可以說是東京一個解脫自我的地方，原宿也是「卡哇伊（カワイイ）」文化發源地，這個東京國高中生流連的街區，在社群媒體當紅的時代，許多東京IG網紅打卡小吃都是從原宿、竹下通紅出來的呢！', './pic/00006.jpg', '35.67123043', '139.7051551');
INSERT INTO `viewdata` VALUES (42, '六本木', '港區', '景點', '六本木位於東京港區，眾所皆知港區是東京有錢人住的地方，而六本木則是港區的娛樂地，尤其是晚上的娛樂！這裡很浪漫、很有文藝氣息、還有很多美食，聚集了美術館的六本木，無論是春天賞櫻，或是冬天看聖誕點燈都很美，其中六本木之丘最高的「森大樓」，從52樓的360度玻璃觀景台「六本木新城展望台」可以眺望新宿超高大樓群、東京鐵塔等東京重點區域，是東京數一數二的看夜景景點；另一頭的「Tokyo Midtown 東京中城」還有三得利美術館可以逛，喜歡日劇中都會男女場景的，一定要來六本木。', './pic/00007.jpg', '35.66125409', '139.7291447');
INSERT INTO `viewdata` VALUES (43, '新宿', '新宿區', '景點', '說到東京逛街好去處，喜歡找便宜的會往吉祥寺去，想買包包或逛藥妝就會去阿美橫町，池袋、原宿也都是購物好去處，不過如果要我選，我覺得東京最潮流、款式最多最好買的地方還是新宿，如果你問東京在地人，十個也有八個會跟你說他們都去新宿購物，新宿究竟有多好買呢？像飄兒這樣不愛購物的，也花了四天晚上流連新宿，從風衣、鞋子、毛衣、配件、相機包、茶葉、伴手禮全都在新宿各大品牌及百貨公司購入呢！', './pic/00008.jpg', '35.69102259', '139.7040644');
INSERT INTO `viewdata` VALUES (44, '上野恩賜公園', '台東區', '景點', '上野公園是個散步好去處，這裡氣氛非常悠閒愜意，還有許多博物館、美術館、古蹟、神社可以逛，櫻花季時這裡更是東京著名的賞櫻勝地，若是楓葉季前來，也可以在公園裡看到美麗的銀杏與楓葉，是非常值得一訪的東京景點。', './pic/00008-1.jpg', '35.7155566', '139.7740942');
INSERT INTO `viewdata` VALUES (45, '吾妻橋', '墨田區', '景點', '吾妻橋橫跨在隅田川上，連接淺草寺地區和東京晴空塔，是在淺草擁有悠久歷史的建築。吾妻橋最初架設的時間可以追溯到1774年，但是這座橋多年來一直在重新整建。現在的吾妻橋則是在1931年重新架設完成。當這個地區種植的300棵櫻花樹在春天一同綻放，河岸旁的大片桃紅色花朵襯托出淺草的美麗。', './pic/00009.jpg', '35.7101676', '139.7989474');
INSERT INTO `viewdata` VALUES (46, '澀谷FUKURAS', '澀谷區', '景點', '澀谷地區數一數二的購物休閒中心\n近年來，澀谷地區誕生了許多全新的商業設施，而其中格外引人注目的，就是有著玻璃外牆與多樣店家進駐的18層樓複合式商業大樓「澀谷FUKURAS」。這裡可滿足您購物、美食、觀光等多方面的需求。\n', './pic/00010.jpg', '35.65788113', '139.7003329');
INSERT INTO `viewdata` VALUES (47, '勝鬨橋', '中央區', '景點', '展現日本技術的隅田川入口玄關\n走過橫跨隅田川27座橋之一的勝鬨橋，近距離看看日本的技術與智慧吧。1940年，渡船還是當時主要的交通方式，為了讓船通過而建造了這座橋面可向上移動的雙扇開啟橋。然而1970年，因道路交通優先政策，永久停止開閉這座橋。\n在附近的「勝鬨橋資料館」，可以看見橋開闔時使用的發電設備。因其位於築地市場附近，建議安排早上來到這區，看看勝鬨橋和博物館。\n', './pic/00011.jpg', '35.66252517', '139.7750264');
INSERT INTO `viewdata` VALUES (48, '愛宕神社', '港區', '神社', '愛宕神社是東京23區中海拔最高的神社，位於東京都內少見的自然山丘上，四周鳥語花香、富有自然景觀。要到達本殿必須爬上一個計86段的「飛黃騰達的石階」（出世の石段）才能夠參拜。愛宕神社本為德川家康為了祭拜防火防災之神而建造，在當時曾有一位武士自願騎馬上下陡峭石梯為德川家康摘取當時盛開的梅花，近而得到德川家康賞識，所以此石階便被認為是成功的象徵。傳說只要能夠一口氣爬完階梯，不論戀愛還是功名，心中的願望都會成功實現。', './pic/00017.jpg', '35.66492713', '139.7484558');
INSERT INTO `viewdata` VALUES (49, '代代木八幡宮', '澀谷區', '神社', '祭祀的是応神天皇（八幡様），応神天皇自古以來就被朝廷以及武將們所崇敬，應而成為武將、到現在的政治官員們常參拜的神社，祈求成功、升遷…...等等。被譽為是東京都內數一數二的能量景點!', './pic/00018.jpg', '35.67215813', '139.6888245');
INSERT INTO `viewdata` VALUES (50, '日枝神社', '千代田區', '神社', '永田町是日本的政治中心，位於此地的日枝神社，常有政治人物來此參拜，祈求成功、蒸蒸日上。每年6月會在此舉辦「江戶三大祭」之一的「山王祭」。神社區域內還有「寶物殿」，收藏著國寶、重要文化財等諸多與德川將軍家有所淵源的物品。', './pic/00019.jpg', '35.67698522', '139.7389173');
INSERT INTO `viewdata` VALUES (51, '東京大神宮', '千代田區', '神社', '東京大神宮日本首創的神前結婚式遠近馳名，自然成為了求姻緣的絕佳聖地，主祀太陽女神「天照大神」，以及掌管姻緣的「造化三神」與絕世女神「倭比賣命」。東京大神宮的戀愛籤詩也總是能夠一語驚醒夢中人！在日本女性中擁有著絕佳人氣，去到東京大神宮，除了購買造型非常夢幻可愛的御守外，也別忘了抽支籤詩喔！', './pic/00020.jpg', '35.70016875', '139.7468588');
INSERT INTO `viewdata` VALUES (52, '神田明神', '千代田區', '神社', '位於東京神田車站附近的神田明神，又稱為神田神社。建於西元730年，經過的多次重建和整修，雖然嶄新，確保有了傳統的樣貌。神田明神所祭拜的是大己貴命，被尊稱為「大黑樣」，大黑樣不僅求戀愛聞名，求財運以及事業運也非常靈驗，神田神社因為十分靠近秋葉原，神社內也多了一些動漫的元素，有動漫人物的繪馬、扭蛋求籤機等等，參拜中也帶了一些趣味感呢。', './pic/00021.jpg', '35.70288252', '139.7676998');
INSERT INTO `viewdata` VALUES (53, '淺草鷲神社', '台東區', '神社', '淺草鷲神社位於東京都台東區，是「酉之市」（酉の市）的起源發祥神社，因此大為知名。「酉之市」是一項感謝神明，祈求生意興隆、幸運及除厄的祭典。神社也販售多種獨特的御守。而難得來到東京保有傳統街景的「淺草地區」，不妨換上傳統的日本和服，在街頭或是漫步，或是搭乘人力車，感受彷彿穿越時空般的浪漫情懷', './pic/00022.jpg', '35.72280221', '139.7919293');
INSERT INTO `viewdata` VALUES (54, '芝大神宮', '港區', '神社', '芝大神宮位於東京都港區，是一間歷史悠久的神社。神社祭祀「天照大御神」，除健康以外，還被認為能保佑許多事情。最厲害的就是這裡的「強運」御守非常有名，據說日本藝人北川景子、DAIGO先生也曾來這裡求過「強運」御守而造成話題唷！', './pic/00023.jpg', '35.65776279', '139.7531449');
INSERT INTO `viewdata` VALUES (55, '五條天神社', '台東區', '神社', '五條天神社位於台東區上野，離東京都內知名觀光名勝的上野動物園及不忍池相當近。這裡每月10日會舉辦「醫藥祭」，可接受疾病痊癒的祈禱。', './pic/00024.jpg', '35.71372471', '139.7722341');
INSERT INTO `viewdata` VALUES (56, '湯島天滿宮', '文京區\n', '神社', '湯島天滿宮（湯島天神）位於文京區，主祭神是被神格化為學問之神的學者菅原道真，可保佑學業有成。推薦即將考試的學生，或想取得執照的社會人士前來參拜。', './pic/00025.jpg', '35.70788868', '139.7682944');
INSERT INTO `viewdata` VALUES (57, '龜戶天神社', '江東區', '神社', '「龜戶天神社」是位於東京都江東區的神社，也是九州太宰府天滿宮的關東分社，古時也被稱為東宰府天滿宮、龜戶宰府天滿宮、龜戶天滿宮，直到了1936年才正名為龜戶天神社。因主祭神為掌管學問的菅原道真，神社境內各處能看到象徵性的梅花徽紋、祈求學業順利的御守繪馬，以及多達300株的梅樹，內有50株以上紫藤，例年會在4月下旬起開始綻放，神社將配合花期，舉辦「紫藤祭」。這裡花朵四季變換，全年還會舉辦梅花祭、例大祭等各項祭典。', './pic/00026.jpg', '35.7031856', '139.8206296');
INSERT INTO `viewdata` VALUES (58, '明治神宮', '澀谷區', '神社', '號稱東京綠洲的明治神宮，在繁華的都市中心裡，擁有70萬平方公尺的超大綠地面積，明治神宮的主祭神就是第122代天皇「明治天皇」與其妻子「昭憲皇太后」，天皇在日人心中有非常崇高的地位，因此明治神宮可以說是神聖的能量之地，常有人在此舉行神社結婚式。其中求姻緣的人氣處就在正殿左方的兩株神木「夫婦楠」，傳說除了能夠祈求夫婦圓滿、全家平安外，對提升戀愛運也很有幫助！據說繫著繩子的神木都是「神明的居住處」，因此不建議用手觸摸，用心靈來吸收神社的神聖精華吧!', './pic/00027.jpg', '35.67685079', '139.6993259');
INSERT INTO `viewdata` VALUES (59, '石神井公園', '練馬區', '景點', '難以置信的大池塘，是野生鳥類的家園。喜歡在周末去参觀這個寧靜的公園。好的停車場(收費)非常方便。不到一個小時就可以沿着池塘進行一次往返旅行。強烈推薦!', './pic/00028.jpg', '35.74003925', '139.598587');
INSERT INTO `viewdata` VALUES (60, '赤塚公園', '板橋區', '景點', '公園裡的一個大噴泉。春天天上的櫻花和明天上的落葉樹緊急漂流。橡子般的秋葉，雅米，可以享受和享受模子的味道。運動設置（球、網球、排球），外圓周非常適合步行。\n雄一公園，華麗的紫藤架，五月的第一朵鮮花。', './pic/00029.jpg', '35.78564933', '139.657015');
INSERT INTO `viewdata` VALUES (61, '大谷美術館', '北區', '景點', '已故大谷武次郎（昭和電極前社長，現公司名SEC Carbon Co., Ltd.）捐贈的土地、建築物和藝術品，以及收藏品對公眾開放，因此是1972年11月（昭和47年）開館的博物館。除了以現代日本畫、現代日本畫、現代法國畫為中心的原始收藏外，他還收藏了當地藝術家的作品和版畫，主要集中在阪神地區，現在有1100多件作品。\n包括與現代日本美術史相關的展覽，近年來越來越受歡迎的繪本原畫展覽，不分流派的繪畫以外的作品展覽，以及新藝術的介紹捕捉當代趨勢。', './pic/00030.jpg', '35.74344493', '139.7472092');
INSERT INTO `viewdata` VALUES (62, '總持寺(西新井大師)', '足立區', '景點', '這座寺廟是這個地區里主要的寺廟。寺廟內部很豐富。寺廟附近有很多小神龕。這裡有一座美麗的花園，花園裡有瀑布，池塘和大紫藤。寺廟在春天時很秀麗。人不是特別多。', './pic/00031.jpg', '35.78759407', '139.7806021');
INSERT INTO `viewdata` VALUES (63, '中野百老匯', '中野區', '景點', '中野百老匯建於西元1966年，會取名「中野百老匯」這個名字，據說是因為當時建造的社長宮田到美國紐約時，對於眼前又酷又炫的街景感到憧憬，因此希望在日本也能打造一座時尚的地標。雖然開張初期的確吸引許多人潮，不過東京的變化速度是難以想像的，很快地又有其他更新的商場出現，中野百老匯也免不了走向沒落。', './pic/00032.jpg', '35.70940423', '139.665706');
INSERT INTO `viewdata` VALUES (64, '高円寺氣象神社', '杉並區', '景點', '日本唯一氣象神社，祈求天氣放晴的絕佳之處!同時也是天氣之子影迷的朝聖處', './pic/00033.jpg', '35.70497545', '139.6511335');
INSERT INTO `viewdata` VALUES (65, '豪德寺', '世田谷區', '景點', '招財貓的可愛模樣，加上有招財納福的吉祥意象，一直深受日本國內外喜愛\n\n東京三大招財貓神社之一的《豪德寺》，傳聞為招財貓發源地之一，特色是擁有上千隻還願招財貓，擺在一起非常壯觀!\n從新宿搭乘小田急線出發，僅需15分鐘車程就能抵達《豪德寺》，相當適合安排半日遊、一日遊貓旅行唷', './pic/00034.jpg', '35.64926436', '139.6474549');
INSERT INTO `viewdata` VALUES (66, '東京都寫真美術館', '目黑區', '景點', '東京都寫真美術館成立於1995年，是一間攝影影像及錄像作品專門的美術館。美術館隱身於東京惠比壽花園廣場，全館共有五個樓層：除了將一樓規劃成大廳及電影放映室；三個樓層（B1、2F、3F）的展廳作為特展使用外，館方也在四樓設置攝影圖書館，收藏國內外攝影集、攝影評論及攝影史等資源，免費提供給民眾閱覽。\r\n2019年特展《写真の時間》，從館藏的三萬五千多件攝影作品中，挑選個人照片及系列作品，展覽關注的是攝影媒介本身所包含的影像和敘事，並點出「時間」在攝影影像中所扮演的角色。', './pic/00035.jpg', '35.64185906', '139.7133108');
INSERT INTO `viewdata` VALUES (67, '林試森林公園', '品川區', '景點', '公園曾經是一個喬木研究實驗室，你會看到這麼多不同種類的樹木和植物。公園內有一個漂亮的池塘有海龜和鳥類，孩子的遊樂區，運動場，小橋，非常優美的小路穿過公園。我很幸運地在二月中旬櫻花盛開的季節找到這裏。', './pic/00036.jpg', '35.62507914', '139.7032255');
INSERT INTO `viewdata` VALUES (68, '城南島海濱公園', '大田區', '景點', '這是一個在東京大田的社區公園。它有一個大型露營地和沙灘，有小狗在那裡跑來跑去。還有專門野餐和燒烤的地方。人們可以看到從羽田機場起飛的飛機。還能看到各種船隻駛入東京的港口。從JR大森東出口或東京單軌鐵路流通中心乘坐京濱急行巴士Mori32（Jonanjima環線），在JR大森4丁目巴士站下車。從車站步行3分鐘即到公園。在晚上，這裏景色很美。', './pic/00037.jpg', '35.58058222', '139.7854423');
INSERT INTO `viewdata` VALUES (69, 'Sunshine Aquarium', '豐島區', '景點', '陽光水族館的約70種水族箱裡，棲息著多達550種共23,000隻生物。展場內可以欣賞裝有約240噸海水的大水槽「陽光岩礁水槽」、誕生於2020年的水母區「水母空間」，還有海獅及企鵝等其他眾多生物，驚喜不斷。\n還可以見到大型虎鯊及曼波魚、裸海蝶等大大小小各式各樣的生物，以及綠鬣蜥這種不住在海洋裡的生物。陽光水族館會舉辦培訓及餵養解說等活動，也有咖啡廳及禮品店。\n', './pic/00038.jpg', '35.72923021', '139.7202324');
INSERT INTO `viewdata` VALUES (70, '東京大學', '文京區\n', '景點', '有別於東京街頭並排於道路兩旁的銀杏，本鄉校區內除了銀杏大道外還有一顆獨立的大銀杏，許多人會慕名而來。不過由於東京大學並非觀光設施，不論平日或假日，皆都有許多校內師生在此上課讀書，前往欣賞銀杏時可別忘了留意音量及禮儀。', './pic/00039.jpg', '35.71284509', '139.7619626');
INSERT INTO `viewdata` VALUES (71, '葛西臨海水族園', '江戶川區', '景點', '葛西臨海公園是座面對東京都江戶川區東京灣的公園。面積高達810,000平方公尺，為東京都內最寬廣的公園，當初東京都是以為了保護東京灣岸環境而建造而成。在園內有水族館跟各種不同鳥類棲息的鳥類園等等設施，是家庭、情侶假日休閒的好場所。而且，它就位在前往距離東京迪士尼的JR京葉線1站的距離。', './pic/00040.jpg', '35.64015004', '139.8621952');
INSERT INTO `viewdata` VALUES (72, '荒川遊樂園', '荒川區', '景點', '荒川遊樂園(あらかわ遊園)位於日本東京，佔地約5公頃，是一個政府開辦的綜合性主題樂園，裡面有大型的遊樂園設施外，還有釣魚場、玩水區、方便野餐的大片草地等。\r\n遊樂設施總共有6項，4歲以上就所有設施都可以玩了，裡面有摩天輪、遊園小火車、旋轉木馬、旋轉咖啡杯、空中腳踏車跟3歲以上就能玩的兒童版雲霄飛車。另外園區內還有大型的氣墊溜滑弟、或者一般的公園溜滑梯可以免費給小小朋友玩。', './pic/00041.jpg', '35.75396207', '139.7584212');
INSERT INTO `viewdata` VALUES (73, '柴又帝釋天', '葛飾區', '景點', '正式名稱是經榮山題經寺。「柴又帝釋天」是「題經寺」的俗稱。自古以來作為東京的觀光名勝出現在各種作品中。現在則作為與電影《寅次郎的故事》的主人公寅次郎有淵源的寺院而聞名，古色古香。', './pic/00042.jpg', '35.75865853', '139.8784332');

SET FOREIGN_KEY_CHECKS = 1;
