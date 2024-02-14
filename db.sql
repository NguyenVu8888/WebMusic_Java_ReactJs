CREATE DATABASE  IF NOT EXISTS `servermusicspringboot` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `servermusicspringboot`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: servermusicspringboot
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `album`
--

DROP TABLE IF EXISTS `album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `album` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` datetime DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `release_date` datetime DEFAULT NULL,
  `artistid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjgbrhsmu8mnqlv0hg5jyf2egn` (`artistid`),
  CONSTRAINT `FKjgbrhsmu8mnqlv0hg5jyf2egn` FOREIGN KEY (`artistid`) REFERENCES `artist` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album`
--

LOCK TABLES `album` WRITE;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
INSERT INTO `album` VALUES (1,NULL,'2023-12-12 22:21:59',NULL,'2023-12-12 22:21:59','woman-1509956_640.jpg','Album nhạc buồn','2023-12-12 22:21:58',1),(2,NULL,'2023-12-12 22:22:22',NULL,'2023-12-12 22:22:22','bird-2295431_640.jpg','Album nhạc vui nhộn','2023-12-12 22:22:22',2),(3,NULL,'2023-12-14 14:41:09',NULL,'2023-12-14 14:41:09','butterflies-1127666_640.jpg','Abum không lời','2023-12-14 14:41:09',10),(5,NULL,'2023-12-18 15:32:09',NULL,'2023-12-18 15:32:09','flowers-4072214_640.jpg','Album nhạc giáng sinh','2023-12-18 15:32:09',NULL),(6,NULL,'2023-12-18 15:32:23',NULL,'2023-12-18 15:32:23','flowers-174817_640.jpg','Album rock','2023-12-18 15:32:23',NULL);
/*!40000 ALTER TABLE `album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artist`
--

DROP TABLE IF EXISTS `artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artist` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` datetime DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `gerne` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artist`
--

LOCK TABLES `artist` WRITE;
/*!40000 ALTER TABLE `artist` DISABLE KEYS */;
INSERT INTO `artist` VALUES (1,NULL,'2023-12-12 22:17:44',NULL,'2023-12-12 22:17:44','nhạc trẻ','ireland-1971997_640.jpg','Hồ Quang Hiếu'),(2,NULL,'2023-12-12 22:18:11',NULL,'2023-12-12 22:18:11','nhạc trẻ','flowers-4072214_640.jpg','Hương Ly'),(3,NULL,'2023-12-12 22:18:53',NULL,'2023-12-12 22:18:53','nhạc chữ tình','anemone-2396299_640.jpg','Nguyên Hà'),(4,NULL,'2023-12-12 22:19:23',NULL,'2023-12-12 22:19:23','nhạc chữ tình','butterfly-1218884_640.jpg','Phạm Quốc Vương'),(5,NULL,'2023-12-12 22:19:47',NULL,'2023-12-12 22:19:47','nhạc tịnh tâm','flowers-3876195_640.jpg','Nguyễn Đình Tân'),(6,NULL,'2023-12-12 22:21:06',NULL,'2023-12-12 22:21:06','nhạc','flowers-174817_640.jpg','Vũ Lâm Phương'),(7,NULL,'2023-12-14 12:25:03',NULL,'2023-12-14 12:25:03','bolero','ireland-1971997_640.jpg','Nobody Know'),(10,NULL,'2023-12-18 15:19:48',NULL,'2023-12-18 15:19:48','Nhạc buồn','flowers-3876195_640.jpg','Thiều Bảo Trâm'),(11,NULL,'2023-12-18 15:20:08',NULL,'2023-12-18 15:20:08','Nhạc vui nhộn','flower-field-250016_640.jpg','Đức Phúc'),(12,NULL,'2023-12-18 15:20:35',NULL,'2023-12-18 15:20:35','Nhạc không lời','butterfly-1218884_640.jpg','Hương Giang'),(14,NULL,'2023-12-18 15:22:26',NULL,'2023-12-18 15:22:26','Nhạc giáng sinh','pink-324175_640.jpg','Văn Mai Hương');
/*!40000 ALTER TABLE `artist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `follow` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` datetime DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `artistid` bigint(20) DEFAULT NULL,
  `userid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKx1ug20vqsf215ca30tgb4gwj` (`artistid`),
  KEY `FK5m0mr0x7yod59rt2cmn3s3auk` (`userid`),
  CONSTRAINT `FK5m0mr0x7yod59rt2cmn3s3auk` FOREIGN KEY (`userid`) REFERENCES `user` (`id`),
  CONSTRAINT `FKx1ug20vqsf215ca30tgb4gwj` FOREIGN KEY (`artistid`) REFERENCES `artist` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
INSERT INTO `follow` VALUES (1,NULL,'2023-12-12 22:23:25',NULL,'2023-12-12 22:23:25',1,3),(2,NULL,'2023-12-12 22:23:29',NULL,'2023-12-12 22:23:29',2,3),(3,NULL,'2023-12-12 22:23:33',NULL,'2023-12-12 22:23:33',5,3),(4,NULL,'2023-12-12 22:23:40',NULL,'2023-12-12 22:23:40',3,4),(5,NULL,'2023-12-12 22:23:43',NULL,'2023-12-12 22:23:43',4,4),(6,NULL,'2023-12-12 22:23:47',NULL,'2023-12-12 22:23:47',6,4);
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` datetime DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `playdate` datetime DEFAULT NULL,
  `songid` bigint(20) DEFAULT NULL,
  `userid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKq5qpi6c7bvvyqg1sv9naxhf11` (`songid`),
  KEY `FK13c2wil3ue8s9fxx7juhy460y` (`userid`),
  CONSTRAINT `FK13c2wil3ue8s9fxx7juhy460y` FOREIGN KEY (`userid`) REFERENCES `user` (`id`),
  CONSTRAINT `FKq5qpi6c7bvvyqg1sv9naxhf11` FOREIGN KEY (`songid`) REFERENCES `songs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
INSERT INTO `history` VALUES (2,NULL,'2023-12-12 22:35:40',NULL,'2023-12-12 22:35:40','2023-12-12 22:35:40',5,3),(3,NULL,'2023-12-12 22:35:45',NULL,'2023-12-12 22:35:45','2023-12-12 22:35:45',1,4),(4,NULL,'2023-12-12 22:35:48',NULL,'2023-12-12 22:35:48','2023-12-12 22:35:48',3,4),(5,NULL,'2023-12-18 15:41:44',NULL,'2023-12-18 15:41:44','2023-12-18 15:41:44',13,3),(6,NULL,'2023-12-18 15:41:57',NULL,'2023-12-18 15:41:57','2023-12-18 15:41:57',15,3),(7,NULL,'2023-12-18 15:42:01',NULL,'2023-12-18 15:42:01','2023-12-18 15:42:01',18,3),(8,NULL,'2023-12-18 15:42:04',NULL,'2023-12-18 15:42:04','2023-12-18 15:42:04',17,3),(9,NULL,'2023-12-18 15:42:07',NULL,'2023-12-18 15:42:07','2023-12-18 15:42:07',14,3),(10,NULL,'2023-12-18 15:42:10',NULL,'2023-12-18 15:42:10','2023-12-18 15:42:10',19,3),(11,NULL,'2023-12-18 15:42:13',NULL,'2023-12-18 15:42:13','2023-12-18 15:42:13',25,3),(12,NULL,'2023-12-18 15:42:20',NULL,'2023-12-18 15:42:20','2023-12-18 15:42:20',21,3),(13,NULL,'2023-12-18 15:42:23',NULL,'2023-12-18 15:42:23','2023-12-18 15:42:23',29,3),(14,NULL,'2023-12-18 15:42:27',NULL,'2023-12-18 15:42:27','2023-12-18 15:42:27',20,3),(40,NULL,'2023-12-21 23:37:12',NULL,'2023-12-21 23:37:12','2023-12-21 23:37:12',3,3),(42,NULL,'2023-12-21 23:45:02',NULL,'2023-12-21 23:45:02','2023-12-21 23:45:02',2,3),(52,NULL,'2023-12-23 16:35:04',NULL,'2023-12-23 16:35:04','2023-12-23 16:35:04',14,2),(55,NULL,'2023-12-23 16:37:29',NULL,'2023-12-23 16:37:29','2023-12-23 16:37:29',2,2),(58,NULL,'2023-12-23 16:42:55',NULL,'2023-12-23 16:42:55','2023-12-23 16:42:55',3,2),(63,NULL,'2023-12-23 16:58:54',NULL,'2023-12-23 16:58:54','2023-12-23 16:58:54',4,2),(64,NULL,'2023-12-23 16:59:12',NULL,'2023-12-23 16:59:12','2023-12-23 16:59:12',2,2),(66,NULL,'2023-12-23 17:04:30',NULL,'2023-12-23 17:04:30','2023-12-23 17:04:30',21,2),(68,NULL,'2023-12-23 17:58:49',NULL,'2023-12-23 17:58:49','2023-12-23 17:58:49',16,2);
/*!40000 ALTER TABLE `history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likesong`
--

DROP TABLE IF EXISTS `likesong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likesong` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` datetime DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `songid` bigint(20) DEFAULT NULL,
  `userid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2i3f1l1r5p3dsw62i9t8itdb7` (`songid`),
  KEY `FKig9pee39q452iwgbo8x6hji89` (`userid`),
  CONSTRAINT `FK2i3f1l1r5p3dsw62i9t8itdb7` FOREIGN KEY (`songid`) REFERENCES `songs` (`id`),
  CONSTRAINT `FKig9pee39q452iwgbo8x6hji89` FOREIGN KEY (`userid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likesong`
--

LOCK TABLES `likesong` WRITE;
/*!40000 ALTER TABLE `likesong` DISABLE KEYS */;
INSERT INTO `likesong` VALUES (2,NULL,'2023-12-12 22:41:10',NULL,'2023-12-12 22:41:10',2,4),(4,NULL,NULL,NULL,NULL,4,23),(5,NULL,NULL,NULL,NULL,2,27),(6,NULL,NULL,NULL,NULL,2,28),(7,NULL,'2023-12-18 15:43:05',NULL,'2023-12-18 15:43:05',16,3),(9,NULL,'2023-12-18 15:43:14',NULL,'2023-12-18 15:43:14',30,3),(10,NULL,'2023-12-18 15:43:18',NULL,'2023-12-18 15:43:18',25,3),(12,NULL,'2023-12-18 15:46:14',NULL,'2023-12-18 15:46:14',27,27),(13,NULL,'2023-12-18 15:46:17',NULL,'2023-12-18 15:46:17',27,28),(14,NULL,'2023-12-18 15:46:41',NULL,'2023-12-18 15:46:41',27,23),(15,NULL,'2023-12-18 15:46:49',NULL,'2023-12-18 15:46:49',27,2),(16,NULL,'2023-12-18 15:48:01',NULL,'2023-12-18 15:48:01',25,2),(17,NULL,'2023-12-18 15:48:44',NULL,'2023-12-18 15:48:44',16,4),(18,NULL,'2023-12-19 00:59:02',NULL,'2023-12-19 00:59:02',28,3),(20,NULL,'2023-12-20 10:45:29',NULL,'2023-12-20 10:45:29',18,3),(21,NULL,'2023-12-21 23:29:01',NULL,'2023-12-21 23:29:01',22,3);
/*!40000 ALTER TABLE `likesong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` datetime DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `content` text,
  `title` varchar(255) DEFAULT NULL,
  `userid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2kcyyi3inwcr0sflvdi14vnwa` (`userid`),
  CONSTRAINT `FK2kcyyi3inwcr0sflvdi14vnwa` FOREIGN KEY (`userid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
INSERT INTO `notification` VALUES (1,NULL,'2023-12-12 22:48:23',NULL,'2023-12-12 22:48:23','noi dung thong bao la chang co gi can thong bao ca','thong bao 2',3),(2,NULL,'2023-12-12 22:49:18',NULL,'2023-12-12 22:49:18','noi dung thong bao la chang co gi can thong bao ca ngoai viec ban su dung phan mem qua loi thoi','Tối hậu thư',4);
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playlist`
--

DROP TABLE IF EXISTS `playlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlist` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` datetime DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `userid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKb3q3dpmckl8l8yh0ovw8o8ixh` (`userid`),
  CONSTRAINT `FKb3q3dpmckl8l8yh0ovw8o8ixh` FOREIGN KEY (`userid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlist`
--

LOCK TABLES `playlist` WRITE;
/*!40000 ALTER TABLE `playlist` DISABLE KEYS */;
INSERT INTO `playlist` VALUES (1,NULL,'2023-12-12 22:49:55',NULL,'2023-12-12 22:49:55','lotus-978659_640.jpg','Playlist  nhạc Âu Mĩ',3),(2,NULL,'2023-12-12 22:50:08',NULL,'2023-12-12 22:50:08','water-lily-1510707_640.jpg','playlist nhạc Nhật',4),(3,NULL,'2023-12-14 15:03:00',NULL,'2023-12-14 15:03:23','flowers-4072214_640.jpg','Playlist nhạc Trung',2),(4,NULL,NULL,NULL,NULL,'bouquet-142876_640.jpg','Playlist nhạc Hàn',2),(5,NULL,NULL,NULL,NULL,'flower-100263_640.jpg','Playlist nhạc Nga',2),(6,NULL,NULL,NULL,NULL,'flower-3140492_640.jpg','Playlist nhạc Pháp',2),(7,NULL,'2023-12-18 15:57:37',NULL,'2023-12-18 15:58:09','butterflies-1127666_640.jpg','Playlist xxxxx',2);
/*!40000 ALTER TABLE `playlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playlistsong`
--

DROP TABLE IF EXISTS `playlistsong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlistsong` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` datetime DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `playlistid` bigint(20) DEFAULT NULL,
  `songid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKkk1o4yvp6xgxyee4j4egk9h8t` (`playlistid`),
  KEY `FKonl4p5uikqufbld6rc7xryryf` (`songid`),
  CONSTRAINT `FKkk1o4yvp6xgxyee4j4egk9h8t` FOREIGN KEY (`playlistid`) REFERENCES `playlist` (`id`),
  CONSTRAINT `FKonl4p5uikqufbld6rc7xryryf` FOREIGN KEY (`songid`) REFERENCES `songs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlistsong`
--

LOCK TABLES `playlistsong` WRITE;
/*!40000 ALTER TABLE `playlistsong` DISABLE KEYS */;
INSERT INTO `playlistsong` VALUES (1,NULL,'2023-12-12 22:50:30',NULL,'2023-12-12 22:50:30',2,3),(2,NULL,'2023-12-12 22:50:34',NULL,'2023-12-12 22:50:34',2,2),(3,NULL,'2023-12-12 22:50:37',NULL,'2023-12-12 22:50:37',2,1),(4,NULL,'2023-12-12 22:50:45',NULL,'2023-12-12 22:50:45',1,4),(5,NULL,'2023-12-12 22:50:48',NULL,'2023-12-12 22:50:48',1,5);
/*!40000 ALTER TABLE `playlistsong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` datetime DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,NULL,NULL,NULL,NULL,'administrator','administrator'),(2,NULL,NULL,NULL,NULL,'admin','admin'),(3,NULL,NULL,NULL,NULL,'admin1','admin 1'),(4,NULL,NULL,NULL,NULL,'user','user');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `songs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` datetime DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `artist` varchar(255) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `gerne` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `albumid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4orrolaht28fud5c2fiohah0m` (`albumid`),
  CONSTRAINT `FK4orrolaht28fud5c2fiohah0m` FOREIGN KEY (`albumid`) REFERENCES `album` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (1,NULL,'2023-12-12 22:27:53',NULL,'2023-12-12 22:27:53','we are the king',150,'nhạc buồn','istockphoto-1573329496-1024x1024.jpg','Sad Song','1687087438293.mp3',NULL),(2,NULL,'2023-12-12 22:29:12',NULL,'2023-12-12 22:29:12','Ember Ílands',126,'nhạc buồn','istockphoto-1456962553-1024x1024.jpg','Umbrella','1687093475533.mp3',1),(3,NULL,'2023-12-12 22:31:09',NULL,'2023-12-12 22:31:09','T-ARA',126,'Kpop','istockphoto-1443496281-1024x1024.jpg','Day by Day','1687093616545.mp3',1),(4,NULL,'2023-12-12 22:32:05',NULL,'2023-12-12 22:32:05','Boyce',156,'nhạc âu mỹ','flowers-276014_1280.jpg','Demons','1687094313235.mp3',1),(5,NULL,'2023-12-12 22:34:41',NULL,'2023-12-12 22:34:41','Dụ Ngôn Gia',143,'nhạc trung','flowers-19830_1280.jpg','Đêm tỏ tình ','1687094852888.mp3',2),(13,NULL,'2023-12-18 14:56:20',NULL,'2023-12-18 14:56:20','Nobody Know',167,'Nhạc buồn','woman-1509956_640.jpg','Em đồng ý','1687094908779.mp3',3),(14,NULL,'2023-12-18 14:56:55',NULL,'2023-12-18 14:56:55','SuKi',187,'Nhạc buồn','water-lily-1510707_640.jpg','LaLaLa','1687094960995.mp3',5),(15,NULL,'2023-12-18 14:57:53',NULL,'2023-12-18 14:57:53','Thiều Bảo Châm',180,'Nhạc buồn','rose-729509_640.jpg','Một mình có buồn không','1687095033769.mp3',1),(16,NULL,'2023-12-18 14:58:49',NULL,'2023-12-18 14:58:49','Miina',192,'Nhạc buồn','rose-165819_640.jpg','Mùa hè năm ấy','1687095125563.mp3',2),(17,NULL,'2023-12-18 14:59:22',NULL,'2023-12-18 14:59:22','Văn mai Hương',177,'Nhạc buồn','poppies-174276_640.jpg','Mưa tháng sáu','1687095125563.mp3',3),(18,NULL,'2023-12-18 15:01:17',NULL,'2023-12-18 15:01:17','Đức Phúc',166,'Nhạc vui nhộn','pink-324175_640.jpg','Ngày đầu tiên','1687095481401.mp3',5),(19,NULL,'2023-12-18 15:02:02',NULL,'2023-12-18 15:02:02','Đức Phúc',177,'Nhạc vui nhộn','marguerite-729510_640.jpg','Qua khứ đôi, hiện tại đơn','1687095481401.mp3',2),(20,NULL,'2023-12-18 15:02:38',NULL,'2023-12-18 15:02:38','We are the king',175,'Nhạc vui nhộn','lotus-1205631_640.jpg','Sad Song','1687095481401.mp3',3),(21,NULL,'2023-12-18 15:03:27',NULL,'2023-12-18 15:03:27','Thiều Bảo Trâm',191,'Nhạc vui nhộn','lotus-978659_640.jpg','Thương Anh ','1687095638976.mp3',5),(22,NULL,'2023-12-18 15:04:47',NULL,'2023-12-18 15:04:47','Thiều Bảo Trâm',187,'Nhạc vui nhộn','istockphoto-1573329496-1024x1024.jpg','Trước tiên anh hãy quên anh đi','1687095800457.mp3',2),(23,NULL,'2023-12-18 15:06:24',NULL,'2023-12-18 15:06:24','Hứa Kim Tuyền',172,'Nhạc giáng sinh','ireland-1971997_640.jpg','Hai Mươi Hai','1687096139085.mp3',3),(24,NULL,'2023-12-18 15:07:22',NULL,'2023-12-18 15:07:22','Hoàng Dũng',188,'Nhạc giáng sinh','flowers-3876195_640.jpg','Nàng Thơ','1687096196072.mp3',5),(25,NULL,'2023-12-18 15:08:05',NULL,'2023-12-18 15:08:05','Hương Giang',184,'Nhạc giáng sinh','flowers-174817_640.jpg','Thế giới của em','1687096257069.mp3',6),(26,NULL,'2023-12-18 15:08:36',NULL,'2023-12-18 15:08:36','Hoàng Dũng',181,'Nhạc giáng sinh','flowers-19830_1280.jpg','Thích em hơi nhiều','1687096257069.mp3',1),(27,NULL,'2023-12-18 15:09:08',NULL,'2023-12-18 15:09:08','AMEE',184,'Nhạc giáng sinh','flower-field-250016_640.jpg','Ưng quá chừng','1687096257069.mp3',2),(28,NULL,'2023-12-18 15:09:49',NULL,'2023-12-18 15:09:49','Hương Giang',194,'Nhạc không lời','flower-3140492_640.jpg','Vu vơ','1687096257069.mp3',3),(29,NULL,'2023-12-18 15:14:07',NULL,'2023-12-18 15:14:07','Hương Giang',198,'Nhạc không lời','anemone-2396299_640.jpg','Cô đơn trên sofa','1687087438293.mp3',5),(30,NULL,'2023-12-18 15:14:56',NULL,'2023-12-18 15:14:56','Đức Phúc',178,'Nhạc không lời','art-2436545_640.jpg','Yêu anh đi anh bán bánh mì','1687087438293.mp3',NULL),(31,NULL,'2023-12-18 15:15:53',NULL,'2023-12-18 15:15:53','Văn Mai Hương',169,'Nhạc không lời','bird-2295431_640.jpg','Bên trên tầng lầu','1687093616545.mp3',NULL),(32,NULL,'2023-12-18 15:16:54',NULL,'2023-12-18 15:16:54','Văn Mai Hương',181,'Nhạc không lời','butterflies-1127666_640.jpg','Lưu số em đi','1687094908779.mp3',NULL),(33,NULL,'2023-12-20 10:46:36',NULL,'2023-12-20 10:46:36','Ayassa',150,'nhac buon','bouquet-142876_640.jpg','Thuyền Quyên','1687095033769.mp3',NULL);
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` datetime DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKn82ha3ccdebhokx3a8fgdqeyy` (`role_id`),
  CONSTRAINT `FKn82ha3ccdebhokx3a8fgdqeyy` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,NULL,NULL,NULL,NULL,'abc@gmail.com','adminstrator','rose-165819_640.jpg','123456',1,'adminstrator',1),(2,NULL,NULL,NULL,NULL,'zxc@gmail.com','admin','rose-165819_640.jpg','123456',1,'admin',2),(3,NULL,NULL,NULL,'2023-12-19 23:34:28','zxcxvxc@gmail.com','Trần Minh Nguyệt','bird-2295431_640.jpg','123456',1,'user',4),(4,NULL,NULL,NULL,'2023-12-14 15:45:16','begainho@gmail.com','bang thi thom','flowers-276014_1280.jpg','123456',1,'hoahongden',4),(23,NULL,'2023-12-14 14:00:13',NULL,'2023-12-14 19:50:27','conccc@gmail.com','nguyen van D','flowers-174817_640.jpg','123456',1,'bongbongnho',4),(27,NULL,'2023-12-14 15:52:47',NULL,'2023-12-14 15:52:47','gaconbebong@gmail.com','be ga dang yeu','flowers-19830_1280.jpg','123456',1,'congacon',4),(28,NULL,'2023-12-14 19:47:28',NULL,'2023-12-14 19:47:28','nguyenha@gmail.com','nguyen van ha','rose-165819_640.jpg','123456',1,'nguyenvanha',4),(36,NULL,'2023-12-23 13:27:35',NULL,'2023-12-23 13:27:35','xxxxx@gmail.com','xxxxxxxxxx','butterflies-1127666_640.jpg','123456',1,'userxxxx',4);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` datetime DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `description` text,
  `duration` int(11) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `thumb` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (1,NULL,'2023-12-12 22:42:43',NULL,'2023-12-12 22:42:43','loi bai hat va link goc',180,'Lạc Trôi Remix cực chất hay hơn cả Sơn Tùng MTP.mp4','lotus-1205631_640.jpg','lac troi'),(2,NULL,'2023-12-12 22:44:16',NULL,'2023-12-12 22:44:16','loi bai hat va link goc',210,'Ngày Chưa Giông Bão (OST Người Bất Tử) - Bùi Lan Hương [ Official MV ].mp4','cherry-blossom-tree-1225186_640.jpg','Ngày chưa giông bão'),(3,NULL,'2023-12-12 22:45:42',NULL,'2023-12-12 22:45:42','TheFatRat',240,'Oblivion - TheFatRat ft. Lola Blanc - Fred Eddy Remix (Lyrics + Vietsub) .mp4','butterflies-1127666_640.jpg','Obilivion'),(4,NULL,'2023-12-12 22:47:02',NULL,'2023-12-12 22:47:02','description',238,'The Promised Neverland OST - Isabellas Lullaby.mp4','flower-100263_640.jpg','The Promise Never Land'),(5,NULL,'2023-12-12 22:47:54',NULL,'2023-12-12 22:47:54','description',197,'you can be king again.mp4','rose-729509_640.jpg','You can be king again'),(8,NULL,'2023-12-14 12:51:13',NULL,'2023-12-14 12:51:26','DAG',150,'Ngày Chưa Giông Bão (OST Người Bất Tử) - Bùi Lan Hương [ Official MV ].mp4','bird-2295436_640.jpg','Ayasa Theater Episode 7');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-23 18:03:27
