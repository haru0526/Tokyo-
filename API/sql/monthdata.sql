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

 Date: 05/07/2022 11:23:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for monthdata
-- ----------------------------
DROP TABLE IF EXISTS `monthdata`;
CREATE TABLE `monthdata`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `month` int NOT NULL COMMENT '月份',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '標題',
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '圖片',
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '敘述',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of monthdata
-- ----------------------------
INSERT INTO `monthdata` VALUES (1, 3, '櫻花祭', './month/x03_sakuramaturi_950_637.jpg.pagespeed.ic.sIPeEjzWSj.jpeg			', '每到3月底，東京人會舉辦各式活動，一同慶祝櫻花季。以上野公園的「上野櫻花祭」為例，您可欣賞到美麗的櫻花林蔭道，17世紀的俳句詩人「松尾芭蕉」也曾吟詠過其綽約風姿。而「隅田公園櫻花祭」則是享受河岸散步之趣的好機會，在東京晴空塔背景襯托下的櫻花景緻不容錯過。除此之外，六義園知名的枝垂櫻也值得一看，當夜幕低垂，在燈光的照射下，其風采更是增添了幾分魅力。');
INSERT INTO `monthdata` VALUES (2, 3, '東京馬拉松', './month/03_tokyomarason_950_637.jpeg', '每年3月初舉行的「東京馬拉松」是代表東京的體育盛事之一，屆時會有眾多一般跑者與專業選手齊聚一堂，從東京都廳開始，慢跑穿梭在觀光景點及淺草、銀座等知名購物街之間。');
INSERT INTO `monthdata` VALUES (3, 3, '東京離島花卉', './month/03_shimanohana_670_450_02.jpeg', '東京的各座離島每年都會舉行賞花活動。「八丈島小蒼蘭祭」能夠讓您一邊欣賞色彩鮮豔的花朵，一邊品嚐美味的戶外茶點。伊豆大島的「大島山茶節」則推出山茶花染布體驗課程。');
INSERT INTO `monthdata` VALUES (4, 3, '女兒節', './month/x03_hinamaturi_950_637.jpg.pagespeed.ic.40VbWHK759.jpeg', '3月3日是日本的「女兒節」，人們在陳列台上擺飾優雅的人偶娃娃，用以祈求女孩健康幸福。京王廣場大飯店東京屆時將展出華麗無比的女兒節裝飾。而在淺草的「江戶人偶放流」活動中，則可參觀人們在隅田川流放紙製人偶的景象。');
INSERT INTO `monthdata` VALUES (5, 3, '花卉節', './month/03_flowerfes_950_637.jpeg', '正值3月盛開的花，可不是只有櫻花而已。國營昭和紀念公園每年3月底開始舉行「花卉節」，從4月的鬱金香、粉蝶花，一路到5月的罌粟，將為遊客帶來一場春日花卉盛宴。除此之外，還有展覽會、體驗課程及導覽遊等，每項活動皆值得一看。濱離宮恩賜庭園則有個彷彿黃色絨毯般的油菜花田，在高樓大廈環繞的對比下，更加引人入勝。');
INSERT INTO `monthdata` VALUES (6, 3, '深大寺　達摩不倒翁市集', './month/03_daruma_950_637.jpeg', '圓滾滾的傳統人偶達摩不倒翁，是用以祈求好運的吉祥物。3月3日與4日舉行的「深大寺達摩不倒翁市集」是日本三大達摩不倒翁市集之一，現場將有大約300個攤位販售不同大小與設計的達摩不倒翁。購買後，還可以請僧侶幫您在不倒翁眼睛畫上梵字。');
INSERT INTO `monthdata` VALUES (7, 3, '過火祭', './month/03_hiwatari_670_450_02.jpeg', '高尾山藥王院位於高尾山半山腰，為了祈求人們健康平安，每年在3月的第2個週日舉行過火祭。屆時，修行僧侶將赤腳走過燃燒的木材，作為傳統苦行的一部分。等火熄滅後，一般民眾也能參與過火儀式踩踩看。');
INSERT INTO `monthdata` VALUES (8, 3, '金龍之舞', './month/03_kinryu_950_637.jpeg', '每年3月18日舉行的金龍之舞，起源於1958年為記念淺草寺正殿重建而舉辦的供奉儀式。金龍全長18公尺、重88公斤，舞者將在祭典音樂伴奏下起舞表演。			');

SET FOREIGN_KEY_CHECKS = 1;
