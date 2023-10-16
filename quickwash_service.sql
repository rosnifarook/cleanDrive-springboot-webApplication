-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 31, 2023 at 02:11 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quickwash_service`
--

-- --------------------------------------------------------

--
-- Table structure for table `dequeue_service`
--

DROP TABLE IF EXISTS `dequeue_service`;
CREATE TABLE IF NOT EXISTS `dequeue_service` (
  `service_id` int(11) NOT NULL,
  `vehicle_number` varchar(15) NOT NULL,
  `service_type` varchar(35) NOT NULL,
  `service_cost` double NOT NULL,
  `service_enqueue_time` datetime NOT NULL,
  `service_dequeue_time` datetime DEFAULT NULL,
  PRIMARY KEY (`service_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dequeue_service`
--

INSERT INTO `dequeue_service` (`service_id`, `vehicle_number`, `service_type`, `service_cost`, `service_enqueue_time`, `service_dequeue_time`) VALUES
(2, 'CAD-89752', 'Body-Wash', 4999, '2023-03-28 11:27:32', NULL),
(3, 'CAR-89752', 'Wheel-Alignment', 10500, '2023-03-28 11:27:32', NULL),
(4, 'CAD-89752', 'Body-Wash', 4999, '2023-03-28 15:33:17', NULL),
(5, 'CAD-89752', 'Body-Wash', 4999, '2023-03-28 15:49:04', '2023-03-28 21:32:03'),
(6, 'DDC-97278', 'Steam-Wash', 2499, '2023-03-29 01:30:00', '2023-03-29 13:27:46'),
(7, 'SAR_79879', 'Body-Wash', 10500, '2023-03-29 08:10:22', '2023-03-29 20:11:52'),
(8, 'LLL-97278', 'Steam-Wash', 99499, '2023-03-04 01:30:00', '2023-03-29 22:06:06'),
(9, 'CBF3345', 'Full-Service', 6000, '2023-03-31 09:13:42', '2023-03-31 14:45:45'),
(11, 'CBF4367', 'Full-Service', 6000, '2023-03-31 09:17:15', '2023-03-31 15:39:25');

-- --------------------------------------------------------

--
-- Table structure for table `enqueue_service`
--

DROP TABLE IF EXISTS `enqueue_service`;
CREATE TABLE IF NOT EXISTS `enqueue_service` (
  `service_id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicle_number` varchar(15) NOT NULL,
  `service_type` varchar(35) DEFAULT NULL,
  `service_cost` double NOT NULL,
  `service_enqueue_time` datetime DEFAULT NULL,
  PRIMARY KEY (`service_id`,`vehicle_number`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enqueue_service`
--

INSERT INTO `enqueue_service` (`service_id`, `vehicle_number`, `service_type`, `service_cost`, `service_enqueue_time`) VALUES
(12, 'SSD-4354', 'Full-Service', 466, '2023-03-31 10:18:32'),
(13, 'CFG-6253', 'Full-Service', 466, '2023-03-31 16:19:28'),
(14, 'CFH7428', NULL, 6000, '2023-03-31 17:13:04'),
(15, 'CCB-8765', 'Wheel-Alignment', 5000, '2023-03-31 17:18:42'),
(16, 'CAS3645', NULL, 6000, '2023-03-31 17:21:23'),
(17, 'CCR8946', NULL, 6000, '2023-03-31 17:25:42'),
(18, 'CCD9954', NULL, 6000, '2023-03-31 17:28:29'),
(19, 'CCT8827', NULL, 7000, '2023-03-31 17:42:19');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
