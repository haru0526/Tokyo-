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

 Date: 04/07/2022 16:03:39
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for spmemberview_details
-- ----------------------------
DROP TABLE IF EXISTS `spmemberview_details`;
CREATE TABLE `spmemberview_details`  (
  `UserID` tinyint(2) UNSIGNED ZEROFILL NOT NULL,
  `ViewDataID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of spmemberview_details
-- ----------------------------
INSERT INTO `spmemberview_details` VALUES (01, '1');
INSERT INTO `spmemberview_details` VALUES (01, '2');
INSERT INTO `spmemberview_details` VALUES (02, '1');

SET FOREIGN_KEY_CHECKS = 1;
