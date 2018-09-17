-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 23, 2018 at 03:05 PM
-- Server version: 5.7.20-0ubuntu0.16.04.1
-- PHP Version: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sportsiq`
--

-- --------------------------------------------------------

--
-- Table structure for table `AccessToken`
--

CREATE TABLE `AccessToken` (
  `id` varchar(100) NOT NULL,
  `ttl` int(11) NOT NULL,
  `scopes` varchar(250) NOT NULL DEFAULT 'app',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `AccessToken`
--

INSERT INTO `AccessToken` (`id`, `ttl`, `scopes`, `created`, `userId`) VALUES
('1k6TzCmt8aYbcFJo5s2nGQRCeQwtlGdOfMjAviU1pUBrXHezFUUUYuoSyYJYeycS', 1209600, 'app', '2018-01-22 08:58:59', 10),
('34rxfjtXSCaDtQDTynRANU3eDvwRagc4q2i9sVI7pAepZqA58JZVO1PMNJD0b5EQ', 1209600, 'app', '2018-01-22 08:50:57', 10),
('3Fh31aqrnI4SOSHIJTBW1VGjXv7ZdCaXxtSxOA0Yne3pArVuKhJjfL32LR8YRrFF', 1209600, 'app', '2018-01-12 11:56:17', 10),
('69djl9FBCZkUE02aNiOyPGqSdHQb1NwZ8OCoVmbkUsUKOh3Kfe8JU0z5eL0YiJaj', 1209600, 'app', '2018-01-12 11:59:20', 10),
('6bckCSIgF5T6Juf18lfbC7U9GM5R0ppto1h7G9MwBHvT9Q2DYUPQwn4oFbJCg7bg', 1209600, 'app', '2018-01-22 07:31:55', 10),
('7Fkq9QR48IboKypWC3lXSA6RiwqLZmN9hJIBxvkPLT0WZPDsd5KizCknoW5QrIND', 1209600, 'app', '2018-01-23 09:20:05', 10),
('CmfHQplQX6hSNYseQpHWMT4NGEMuVjRnLtLUkvoBkVqwCxVrnDV4bngZqe2be1oa', 1209600, 'app', '2018-01-12 12:06:43', 10),
('DSMMH8zkh21qqB0OrZuhBuWYZ7Rpatwj94zozpfxQBZmCjG6aqJwybGGDM2enG50', 1209600, 'app', '2018-01-11 12:04:47', 10),
('DvhJRFs8GRDnBIHlErX85gaQST82D7eQThieq5CO9GokkkQ2mV4BSBOkrLMis96w', 1209600, 'app', '2018-01-22 07:25:28', 10),
('G7I6GSC2t7KehWyC35U0yAv4vp7vQ21HBgXIomzz3YgqidxvTqONRhBNgLosFQIF', 1209600, 'app', '2018-01-22 07:31:11', 10),
('hZAy7I2MDsDM1URMabwiFzYrfajMEx8BbFE6xaYJLh8jdnPvH8G2WdeBnCXXRQ9C', 1209600, 'app', '2018-01-22 08:58:57', 10),
('j0XgiBgywcvRJ5WCxv8BzeBey87KUa34i2lfsbkWHGpajcBrcMh4KzBqMZWcGnVP', 1209600, 'app', '2018-01-12 12:37:39', 10),
('Lls9wG63GbxhKjZCmkfOFDAPGlSrQMCeqVufVwyzzVZkNXJYIqs3N0n7sxhowLGt', 1209600, 'app', '2018-01-22 08:58:55', 10),
('mqkzkmtmsAiLabAuVZ5jBLYmCvxockIO2rpGvq9xL5ENqEB1EMeXgEe0H2w5K3iK', 1209600, 'app', '2018-01-22 08:47:23', 10),
('nWZ7h81RBUy6M2B8pZk8bZFKvj38HerhxKeqWluaoBXAYftxg0sqGRExKZj4sGsF', 1209600, 'app', '2018-01-12 12:03:52', 10),
('p1PmtIeuBnYHYg8qk8TXDQTM9QVEzSBy1QG8prDu6IXFa7gEkATlpKy87UmXi4DD', 1209600, 'app', '2018-01-22 08:50:39', 10),
('PiFvRQO9TcYyJkEJzyLAqXU98rZVviBeaNd8bDZ3BcafuaHj5GgxWdmkvhajzCSE', 1209600, 'app', '2018-01-22 08:59:06', 10),
('PnuSKgkMUodljBJysTXzSIN7xopTPaG7Z3WYxYFkAvcBiG8W9KH69mG70ifjud4y', 1209600, 'app', '2018-01-12 12:06:03', 10),
('RFl5DB2OsgbIZ32NdA1qEpccAias8ZYRAqDaPzSnTIchkFWm1trmDAfFKvgqHbkl', 1209600, 'app', '2018-01-22 07:32:53', 10),
('SdnDzBbwKo52U2tpEDRs3dDG7Ri4WopfSXmMcsZRUu9ZJhma0VL0jAg3WK1dghXX', 1209600, 'app', '2018-01-12 12:09:28', 10),
('tyIqbnMApIUe5BJmHnxFxJclYh6ONAB8zox2BSlnk7GCkdLKpjfQdEMtNrAw53Sh', 1209600, 'app', '2018-01-12 12:37:04', 10),
('veEaT7gBe0MExVqIyK7mVbdELmEJ4BeOc2uVzAejESDUooyNM5CIr0q9UdGnA75a', 1209600, 'app', '2018-01-22 08:58:58', 10),
('WRV6P43MbC9k0Ae7FUyDVACb611vvjZgjd5ImUD1aRrvXvDFbQM8GSOMcFcW82RS', 1209600, 'app', '2018-01-12 11:57:23', 10),
('WsaLTSiFY9OBUzmkvrDVXXVeodVrSTywjpWaoz8vAdSn34kXHGXV5ENFo9ZvCdrP', 1209600, 'app', '2018-01-16 04:45:02', 10),
('YXn0At43YrolEBVQ0BeCT7FwxMr8RcRuv3LNZ0U8Bw44jYZib7B7UN6EGDBj9WkU', 1209600, 'app', '2018-01-22 07:27:05', 10),
('yZJSQ0TEBS6os7mhLM3bluXOsdJcySR6UXjnvtdEgTZ5yA6RdDxvW6dLj1cK0d2B', 1209600, 'app', '2018-01-22 08:45:43', 10);

-- --------------------------------------------------------

--
-- Table structure for table `age_groups`
--

CREATE TABLE `age_groups` (
  `id` tinyint(11) NOT NULL,
  `group_name` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `age_groups`
--

INSERT INTO `age_groups` (`id`, `group_name`, `created_at`, `updated_at`, `is_active`) VALUES
(2, 'Under 15', '2018-01-22 12:36:52', '2018-01-22 12:36:52', 1),
(3, 'Under 12', '2018-01-22 17:48:35', '2018-01-22 17:48:35', 1),
(4, 'Under 5', '2018-01-22 17:48:40', '2018-01-22 17:48:40', 1),
(5, 'Under 21', '2018-01-22 17:48:45', '2018-01-22 17:48:45', 1);

-- --------------------------------------------------------

--
-- Table structure for table `assignments`
--

CREATE TABLE `assignments` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignments`
--

INSERT INTO `assignments` (`id`, `name`, `created_at`, `updated_at`, `is_active`) VALUES
(1, 'Assignment 1', '2018-01-19 12:56:35', '2018-01-19 12:56:35', 1),
(2, 'Assignment 2', '2018-01-19 12:56:35', '2018-01-19 12:56:35', 1),
(3, 'Assignment 3', '2018-01-19 12:56:43', '2018-01-19 12:56:43', 1),
(4, 'Assignment 4', '2018-01-19 12:56:43', '2018-01-19 12:56:43', 1);

-- --------------------------------------------------------

--
-- Table structure for table `assignments_attempts`
--

CREATE TABLE `assignments_attempts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `answer_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `time_taken` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `assignment_questions`
--

CREATE TABLE `assignment_questions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `assignment_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignment_questions`
--

INSERT INTO `assignment_questions` (`id`, `user_id`, `assignment_id`, `question_id`, `created_at`, `updated_at`) VALUES
(1, 10, 1, 10, '2018-01-19 13:00:49', '2018-01-19 13:00:49'),
(2, 10, 1, 11, '2018-01-19 13:00:49', '2018-01-19 13:00:49'),
(5, 10, 2, 12, '2018-01-19 13:01:35', '2018-01-19 13:01:35'),
(6, 10, 3, 10, '2018-01-19 13:01:35', '2018-01-19 13:01:35'),
(7, 10, 1, 13, '2018-01-19 13:00:49', '2018-01-19 13:00:49'),
(8, 10, 1, 14, '2018-01-19 13:00:49', '2018-01-19 13:00:49'),
(9, 10, 1, 15, '2018-01-19 13:01:35', '2018-01-19 13:01:35'),
(10, 10, 3, 15, '2018-01-19 13:01:35', '2018-01-19 13:01:35');

-- --------------------------------------------------------

--
-- Table structure for table `attacking`
--

CREATE TABLE `attacking` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `field_location_id` int(11) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attacking`
--

INSERT INTO `attacking` (`id`, `user_id`, `field_location_id`, `is_active`, `name`, `created_at`, `updated_at`) VALUES
(2, 10, 2, 1, 'Attacking', '2018-01-17 12:42:35', '2018-01-17 12:42:35');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(50) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `parent_id` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `coaches_players`
--

CREATE TABLE `coaches_players` (
  `id` int(11) NOT NULL,
  `coach_id` int(11) NOT NULL,
  `player_id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detailed_skill_set`
--

CREATE TABLE `detailed_skill_set` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `skill_set_id` int(11) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detailed_skill_set`
--

INSERT INTO `detailed_skill_set` (`id`, `user_id`, `skill_set_id`, `is_active`, `name`, `created_at`, `updated_at`) VALUES
(1, 10, 1, 1, 'On the ground', '2018-01-18 12:23:33', '2018-01-18 12:23:33');

-- --------------------------------------------------------

--
-- Table structure for table `education_pillars`
--

CREATE TABLE `education_pillars` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(100) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `education_pillars`
--

INSERT INTO `education_pillars` (`id`, `user_id`, `created_at`, `updated_at`, `name`, `is_active`) VALUES
(1, 10, '2018-01-19 17:42:53', '2018-01-19 17:42:53', 'Technical', 1),
(2, 10, '2018-01-16 14:55:02', '2018-01-16 14:55:02', 'Tactical', 1),
(11, 10, '2018-01-17 12:36:07', '2018-01-17 12:36:07', 'Physical', 1),
(12, 10, '2018-01-17 12:36:15', '2018-01-17 12:36:15', 'Mental', 1);

-- --------------------------------------------------------

--
-- Table structure for table `field_location`
--

CREATE TABLE `field_location` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `formation_id` int(11) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `field_location`
--

INSERT INTO `field_location` (`id`, `user_id`, `formation_id`, `is_active`, `name`, `created_at`, `updated_at`) VALUES
(2, 10, 1, 1, 'The Whole Field', '2018-01-17 12:39:37', '2018-01-17 12:39:37');

-- --------------------------------------------------------

--
-- Table structure for table `formation`
--

CREATE TABLE `formation` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `pillar_id` int(11) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `formation`
--

INSERT INTO `formation` (`id`, `user_id`, `pillar_id`, `is_active`, `name`, `created_at`, `updated_at`) VALUES
(1, 10, 1, 1, '1 4 4 2', '2018-01-17 09:50:54', '2018-01-17 09:50:54');

-- --------------------------------------------------------

--
-- Table structure for table `invitations`
--

CREATE TABLE `invitations` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `has_joined` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sport_id` int(11) NOT NULL DEFAULT '1',
  `display_name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`id`, `name`, `user_id`, `created_at`, `updated_at`, `sport_id`, `display_name`) VALUES
(1, 'Module 1', 10, '2018-01-18 15:47:07', '2018-01-18 15:47:07', 1, 'Learning Module'),
(2, 'Module 2', 10, '2018-01-18 15:47:07', '2018-01-18 15:47:07', 1, 'Lesson 1'),
(3, 'Module 3', 10, '2018-01-18 15:47:07', '2018-01-18 15:47:07', 1, 'Lession 2'),
(4, 'Module 4', 10, '2018-01-18 15:47:07', '2018-01-18 15:47:07', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `modules_age_groups_mapping`
--

CREATE TABLE `modules_age_groups_mapping` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `age_group_id` int(11) NOT NULL,
  `module_id` int(11) NOT NULL,
  `no_of_questions` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `modules_age_groups_mapping`
--

INSERT INTO `modules_age_groups_mapping` (`id`, `user_id`, `age_group_id`, `module_id`, `no_of_questions`, `created_at`, `updated_at`) VALUES
(1, 10, 2, 1, 10, '2018-01-22 16:24:08', '2018-01-22 16:24:08'),
(3, 10, 3, 1, 15, '2018-01-22 17:48:56', '2018-01-22 17:48:56'),
(4, 10, 4, 1, 20, '2018-01-22 17:49:05', '2018-01-22 17:49:05'),
(5, 10, 5, 1, 8, '2018-01-22 17:49:10', '2018-01-22 17:49:10');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `transaction_id` varchar(50) NOT NULL,
  `status` tinyint(3) NOT NULL DEFAULT '1' COMMENT '0: FAILED, 1: PENDING, 2: PAID',
  `amount` decimal(10,2) NOT NULL,
  `plan_id` int(11) NOT NULL,
  `gateway` varchar(30) NOT NULL DEFAULT 'PAYPAL',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `players_sports`
--

CREATE TABLE `players_sports` (
  `id` int(11) NOT NULL,
  `coach_id` int(11) NOT NULL,
  `sport_id` int(11) NOT NULL,
  `player_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `questionnaire`
--

CREATE TABLE `questionnaire` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` text NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `correct_answer` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `age_group` tinyint(4) NOT NULL,
  `pillar_id` int(11) NOT NULL,
  `formation_id` int(11) NOT NULL,
  `field_location_id` int(11) NOT NULL,
  `attacking_id` int(11) NOT NULL,
  `skill_set_id` int(11) NOT NULL,
  `detailed_skill_set_id` int(11) NOT NULL,
  `level_of_toughness` tinyint(4) NOT NULL DEFAULT '1',
  `scene_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questionnaire`
--

INSERT INTO `questionnaire` (`id`, `user_id`, `title`, `is_active`, `correct_answer`, `created_at`, `updated_at`, `age_group`, `pillar_id`, `formation_id`, `field_location_id`, `attacking_id`, `skill_set_id`, `detailed_skill_set_id`, `level_of_toughness`, `scene_id`) VALUES
(10, 10, 'Question 1', 1, 10, '2018-01-19 11:48:29', '2018-01-19 11:48:29', 2, 1, 1, 2, 2, 1, 1, 1, 1),
(11, 10, 'Question 2', 1, 15, '2018-01-19 11:48:29', '2018-01-19 11:48:29', 2, 1, 1, 2, 2, 1, 1, 1, 4),
(12, 10, 'Question 3', 1, 20, '2018-01-19 11:48:29', '2018-01-19 11:48:29', 2, 1, 1, 2, 2, 1, 1, 1, 1),
(13, 10, 'Question 11', 1, 21, '2018-01-19 11:48:29', '2018-01-19 11:48:29', 2, 1, 1, 2, 2, 1, 1, 1, 5),
(14, 10, 'Question 22', 1, 27, '2018-01-19 11:48:29', '2018-01-19 11:48:29', 2, 1, 1, 2, 2, 1, 1, 1, 4),
(15, 10, 'Question 33', 1, 31, '2018-01-19 11:48:29', '2018-01-19 11:48:29', 2, 1, 1, 2, 2, 1, 1, 1, 6);

-- --------------------------------------------------------

--
-- Table structure for table `questionnaire_answers`
--

CREATE TABLE `questionnaire_answers` (
  `id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questionnaire_answers`
--

INSERT INTO `questionnaire_answers` (`id`, `question_id`, `title`, `is_active`, `created_at`, `updated_at`) VALUES
(9, 10, 'A', 1, '2018-01-19 11:48:29', '2018-01-19 11:48:29'),
(10, 10, 'B', 1, '2018-01-19 11:48:29', '2018-01-19 11:48:29'),
(11, 10, 'C', 1, '2018-01-19 11:48:29', '2018-01-19 11:48:29'),
(12, 10, 'D', 1, '2018-01-19 11:48:29', '2018-01-19 11:48:29'),
(13, 11, 'A', 1, '2018-01-19 12:58:17', '2018-01-19 12:58:17'),
(14, 11, 'B', 1, '2018-01-19 12:58:17', '2018-01-19 12:58:17'),
(15, 11, 'C', 1, '2018-01-19 12:58:27', '2018-01-19 12:58:27'),
(16, 11, 'D', 1, '2018-01-19 12:58:27', '2018-01-19 12:58:27'),
(17, 12, 'A', 1, '2018-01-19 12:58:37', '2018-01-19 12:58:37'),
(18, 12, 'B', 1, '2018-01-19 12:58:37', '2018-01-19 12:58:37'),
(19, 12, 'C', 1, '2018-01-19 12:58:47', '2018-01-19 12:58:47'),
(20, 12, 'D', 1, '2018-01-19 12:58:47', '2018-01-19 12:58:47'),
(21, 13, 'A', 1, '2018-01-19 11:48:29', '2018-01-19 11:48:29'),
(22, 13, 'B', 1, '2018-01-19 11:48:29', '2018-01-19 11:48:29'),
(23, 13, 'C', 1, '2018-01-19 11:48:29', '2018-01-19 11:48:29'),
(24, 13, 'D', 1, '2018-01-19 11:48:29', '2018-01-19 11:48:29'),
(25, 14, 'A', 1, '2018-01-19 12:58:17', '2018-01-19 12:58:17'),
(26, 14, 'B', 1, '2018-01-19 12:58:17', '2018-01-19 12:58:17'),
(27, 14, 'C', 1, '2018-01-19 12:58:27', '2018-01-19 12:58:27'),
(28, 14, 'D', 1, '2018-01-19 12:58:27', '2018-01-19 12:58:27'),
(29, 15, 'A', 1, '2018-01-19 12:58:37', '2018-01-19 12:58:37'),
(30, 15, 'B', 1, '2018-01-19 12:58:37', '2018-01-19 12:58:37'),
(31, 15, 'C', 1, '2018-01-19 12:58:47', '2018-01-19 12:58:47'),
(32, 15, 'D', 1, '2018-01-19 12:58:47', '2018-01-19 12:58:47');

-- --------------------------------------------------------

--
-- Table structure for table `scenes`
--

CREATE TABLE `scenes` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `admin_media_url` varchar(150) DEFAULT NULL,
  `user_media_url` varchar(150) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `module_id` int(11) NOT NULL,
  `logo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `scenes`
--

INSERT INTO `scenes` (`id`, `name`, `user_id`, `admin_media_url`, `user_media_url`, `created_at`, `updated_at`, `module_id`, `logo`) VALUES
(1, 'Scene 1', 10, 'module1/1.png', NULL, '2018-01-18 15:53:51', '2018-01-18 15:53:51', 1, 'media/logo.png'),
(2, 'Scene 2', 10, 'module1/2.png', NULL, '2018-01-18 15:53:51', '2018-01-18 15:53:51', 1, ''),
(3, 'Scene 3', 10, 'module1/3.png', NULL, '2018-01-18 15:54:13', '2018-01-18 15:54:13', 1, ''),
(4, 'Scene 4', 10, 'module1/4.png', NULL, '2018-01-18 15:53:51', '2018-01-18 15:53:51', 1, ''),
(5, 'Scene 5', 10, 'module1/5.png', NULL, '2018-01-18 15:53:51', '2018-01-18 15:53:51', 1, ''),
(6, 'Scene 6', 10, 'module1/6.png', NULL, '2018-01-18 15:54:13', '2018-01-18 15:54:13', 1, ''),
(7, 'Scene 1', 10, 'module3/scene1.jpg', NULL, '2018-01-18 15:53:51', '2018-01-18 15:53:51', 3, ''),
(8, 'Scene 2', 10, 'module3/scene2.jpg', NULL, '2018-01-18 15:53:51', '2018-01-18 15:53:51', 3, ''),
(9, 'Scene 3', 10, 'module3/scene3.jpg', NULL, '2018-01-18 15:54:13', '2018-01-18 15:54:13', 3, '');

-- --------------------------------------------------------

--
-- Table structure for table `skill_set`
--

CREATE TABLE `skill_set` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `attacking_id` int(11) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `skill_set`
--

INSERT INTO `skill_set` (`id`, `user_id`, `attacking_id`, `is_active`, `name`, `created_at`, `updated_at`) VALUES
(1, 10, 2, 1, 'Passing', '2018-01-18 12:23:24', '2018-01-18 12:23:24');

-- --------------------------------------------------------

--
-- Table structure for table `sports`
--

CREATE TABLE `sports` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sports`
--

INSERT INTO `sports` (`id`, `user_id`, `name`, `parent_id`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 10, 'Football', 0, 1, '2018-01-17 15:06:09', '2018-01-17 15:06:09'),
(2, 10, 'Cricket', 0, 1, '2018-01-17 15:11:47', '2018-01-17 15:11:47'),
(3, 10, 'Hockey', 0, 1, '2018-01-17 15:11:56', '2018-01-17 15:11:56'),
(4, 10, 'Golf', 0, 1, '2018-01-17 15:12:04', '2018-01-17 15:12:04'),
(5, 10, 'ODIs', 2, 1, '2018-01-17 15:50:29', '2018-01-17 15:50:29'),
(6, 10, '50-50', 5, 1, '2018-01-17 15:51:01', '2018-01-17 15:51:01'),
(7, 10, '20-20', 5, 1, '2018-01-17 15:51:13', '2018-01-17 15:51:13'),
(8, 10, 'Domestic', 6, 1, '2018-01-17 15:51:43', '2018-01-17 15:51:43'),
(9, 10, 'International', 6, 1, '2018-01-17 15:51:52', '2018-01-17 15:51:52'),
(11, 10, 'American Football', 1, 1, '2018-01-18 14:12:53', '2018-01-18 14:12:53');

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `duration` int(5) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `description` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `title`, `duration`, `amount`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Monthly Subscription', 30, '10.00', '', '2018-01-10 13:02:58', '2018-01-10 13:02:58');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` int(11) NOT NULL,
  `team_name` varchar(50) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(50) NOT NULL DEFAULT ' ',
  `last_name` varchar(50) NOT NULL DEFAULT ' ',
  `role` tinyint(4) NOT NULL DEFAULT '3',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_paid` tinyint(1) NOT NULL DEFAULT '0',
  `age` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`, `role`, `is_active`, `created_at`, `updated_at`, `is_paid`, `age`) VALUES
(4, 'ankit1@gmail.com', 'b0baee9d279d34fa1dfd71aadb908c3f', ' ', ' ', 3, 1, '2018-01-09 04:54:38', '2018-01-09 04:54:38', 0, 0),
(5, 'ankit@hello.com', '11111', ' ', ' ', 3, 1, '2018-01-09 05:47:03', '2018-01-09 05:47:03', 0, 0),
(9, 'abhishek@test.com', '$2a$10$QEyiq4xnc3ozj7sz7ScX3eZocZ/2IB/aoR.6a8YAw8GxEPCzSkAQy', 'string', 'string2', 2, 1, '2018-01-10 10:42:22', '2018-01-10 10:42:22', 0, 10),
(10, 'ankit@gmail.com', '$2a$10$gLT6yisBf5.0SuKhUGfhPedySzOclKnVvkLnuReqbGmBUcSQwu6TK', 'qwerty', 'aaaa', 3, 1, '2018-01-10 11:24:10', '2018-01-10 11:24:10', 1, 10);

-- --------------------------------------------------------

--
-- Table structure for table `user_logins`
--

CREATE TABLE `user_logins` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(50) NOT NULL,
  `ip` varchar(15) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` tinyint(4) NOT NULL,
  `role_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`id`, `role_name`) VALUES
(1, 'Admin'),
(2, 'Coach'),
(3, 'Player');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `AccessToken`
--
ALTER TABLE `AccessToken`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`userId`);

--
-- Indexes for table `age_groups`
--
ALTER TABLE `age_groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `assignments`
--
ALTER TABLE `assignments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `assignments_attempts`
--
ALTER TABLE `assignments_attempts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `question_id` (`question_id`),
  ADD KEY `answer_id` (`answer_id`);

--
-- Indexes for table `assignment_questions`
--
ALTER TABLE `assignment_questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `assignment_id` (`assignment_id`),
  ADD KEY `question_id` (`question_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `attacking`
--
ALTER TABLE `attacking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coaches_players`
--
ALTER TABLE `coaches_players`
  ADD PRIMARY KEY (`id`),
  ADD KEY `coach_id` (`coach_id`),
  ADD KEY `player_id` (`player_id`),
  ADD KEY `team_id` (`team_id`);

--
-- Indexes for table `detailed_skill_set`
--
ALTER TABLE `detailed_skill_set`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `education_pillars`
--
ALTER TABLE `education_pillars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `field_location`
--
ALTER TABLE `field_location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `formation`
--
ALTER TABLE `formation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invitations`
--
ALTER TABLE `invitations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `modules_age_groups_mapping`
--
ALTER TABLE `modules_age_groups_mapping`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `plan_id` (`plan_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `players_sports`
--
ALTER TABLE `players_sports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `coach_id` (`coach_id`),
  ADD KEY `sport_id` (`sport_id`),
  ADD KEY `player_id` (`player_id`);

--
-- Indexes for table `questionnaire`
--
ALTER TABLE `questionnaire`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `age_group` (`age_group`);

--
-- Indexes for table `questionnaire_answers`
--
ALTER TABLE `questionnaire_answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `scenes`
--
ALTER TABLE `scenes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skill_set`
--
ALTER TABLE `skill_set`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sports`
--
ALTER TABLE `sports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `role` (`role`);

--
-- Indexes for table `user_logins`
--
ALTER TABLE `user_logins`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `age_groups`
--
ALTER TABLE `age_groups`
  MODIFY `id` tinyint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `assignments`
--
ALTER TABLE `assignments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `assignments_attempts`
--
ALTER TABLE `assignments_attempts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `assignment_questions`
--
ALTER TABLE `assignment_questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `attacking`
--
ALTER TABLE `attacking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `coaches_players`
--
ALTER TABLE `coaches_players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `detailed_skill_set`
--
ALTER TABLE `detailed_skill_set`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `education_pillars`
--
ALTER TABLE `education_pillars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `field_location`
--
ALTER TABLE `field_location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `formation`
--
ALTER TABLE `formation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `invitations`
--
ALTER TABLE `invitations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `modules_age_groups_mapping`
--
ALTER TABLE `modules_age_groups_mapping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `players_sports`
--
ALTER TABLE `players_sports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `questionnaire`
--
ALTER TABLE `questionnaire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `questionnaire_answers`
--
ALTER TABLE `questionnaire_answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- AUTO_INCREMENT for table `scenes`
--
ALTER TABLE `scenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `skill_set`
--
ALTER TABLE `skill_set`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `sports`
--
ALTER TABLE `sports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `user_logins`
--
ALTER TABLE `user_logins`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `AccessToken`
--
ALTER TABLE `AccessToken`
  ADD CONSTRAINT `AccessToken_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `assignments_attempts`
--
ALTER TABLE `assignments_attempts`
  ADD CONSTRAINT `assignments_attempts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `assignments_attempts_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `questionnaire` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `assignments_attempts_ibfk_3` FOREIGN KEY (`answer_id`) REFERENCES `questionnaire_answers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `assignment_questions`
--
ALTER TABLE `assignment_questions`
  ADD CONSTRAINT `assignment_questions_ibfk_1` FOREIGN KEY (`assignment_id`) REFERENCES `assignments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `assignment_questions_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `questionnaire` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `assignment_questions_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `coaches_players`
--
ALTER TABLE `coaches_players`
  ADD CONSTRAINT `coaches_players_ibfk_1` FOREIGN KEY (`coach_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `coaches_players_ibfk_2` FOREIGN KEY (`player_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `coaches_players_ibfk_3` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `invitations`
--
ALTER TABLE `invitations`
  ADD CONSTRAINT `invitations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`plan_id`) REFERENCES `subscriptions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `payments_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `players_sports`
--
ALTER TABLE `players_sports`
  ADD CONSTRAINT `players_sports_ibfk_1` FOREIGN KEY (`coach_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `players_sports_ibfk_2` FOREIGN KEY (`player_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `players_sports_ibfk_3` FOREIGN KEY (`sport_id`) REFERENCES `sports` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `questionnaire`
--
ALTER TABLE `questionnaire`
  ADD CONSTRAINT `questionnaire_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `questionnaire_answers`
--
ALTER TABLE `questionnaire_answers`
  ADD CONSTRAINT `questionnaire_answers_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `questionnaire` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sports`
--
ALTER TABLE `sports`
  ADD CONSTRAINT `sports_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `teams`
--
ALTER TABLE `teams`
  ADD CONSTRAINT `teams_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_logins`
--
ALTER TABLE `user_logins`
  ADD CONSTRAINT `user_logins_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
