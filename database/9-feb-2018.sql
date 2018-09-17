-- phpMyAdmin SQL Dump
-- version 4.5.0.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 09, 2018 at 12:45 PM
-- Server version: 10.2.10-MariaDB
-- PHP Version: 7.2.0

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
  `created` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `AccessToken`
--

INSERT INTO `AccessToken` (`id`, `ttl`, `scopes`, `created`, `userId`) VALUES
('1k6TzCmt8aYbcFJo5s2nGQRCeQwtlGdOfMjAviU1pUBrXHezFUUUYuoSyYJYeycS', 1209600, 'app', '2018-01-22 08:58:59', 10),
('34rxfjtXSCaDtQDTynRANU3eDvwRagc4q2i9sVI7pAepZqA58JZVO1PMNJD0b5EQ', 1209600, 'app', '2018-01-22 08:50:57', 10),
('3Fh31aqrnI4SOSHIJTBW1VGjXv7ZdCaXxtSxOA0Yne3pArVuKhJjfL32LR8YRrFF', 1209600, 'app', '2018-01-12 11:56:17', 10),
('5ITS6GPjAuZ43NUW4FWNHt0M8U0uaXPJPUnjhULFAWNWzJHGFVa4dShjywesT7zK', 1209600, 'app', '2018-01-25 07:09:18', 10),
('69djl9FBCZkUE02aNiOyPGqSdHQb1NwZ8OCoVmbkUsUKOh3Kfe8JU0z5eL0YiJaj', 1209600, 'app', '2018-01-12 11:59:20', 10),
('6bckCSIgF5T6Juf18lfbC7U9GM5R0ppto1h7G9MwBHvT9Q2DYUPQwn4oFbJCg7bg', 1209600, 'app', '2018-01-22 07:31:55', 10),
('7Fkq9QR48IboKypWC3lXSA6RiwqLZmN9hJIBxvkPLT0WZPDsd5KizCknoW5QrIND', 1209600, 'app', '2018-01-23 09:20:05', 10),
('aqfLYy7WV6XFABEIdGNOLkvMGtkZcRzRxcrdIztiKrfBTkjA5alWEQXFvU6HYzko', 1209600, 'app', '2018-02-06 04:48:26', 10),
('CmfHQplQX6hSNYseQpHWMT4NGEMuVjRnLtLUkvoBkVqwCxVrnDV4bngZqe2be1oa', 1209600, 'app', '2018-01-12 12:06:43', 10),
('cSxG89qnVntJpDV7mPnRExQknp1dcxcUb1DhMR1NF6MHLpQudslfMTzJCG4fLCSi', 1209600, 'app', '2018-02-05 06:55:34', 10),
('DSMMH8zkh21qqB0OrZuhBuWYZ7Rpatwj94zozpfxQBZmCjG6aqJwybGGDM2enG50', 1209600, 'app', '2018-01-11 12:04:47', 10),
('DvhJRFs8GRDnBIHlErX85gaQST82D7eQThieq5CO9GokkkQ2mV4BSBOkrLMis96w', 1209600, 'app', '2018-01-22 07:25:28', 10),
('EQdC9JFo2zUZXJOuQfwzxWaFWBrJzBcvDLoAwi3Op3Ct3OauyiozYEiFN2B3Ckmv', 1209600, 'app', '2018-02-01 11:35:36', 10),
('G7I6GSC2t7KehWyC35U0yAv4vp7vQ21HBgXIomzz3YgqidxvTqONRhBNgLosFQIF', 1209600, 'app', '2018-01-22 07:31:11', 10),
('GLz1sMhMgcHmLjinuaBB2SFP55GKGNrMpSvFNtSL5N4HJ9u9NBG4VuRfa9HuZCH9', 1209600, 'app', '2018-02-01 11:33:39', 10),
('gPP4TK41wdd2CysF5JJDuWjrwWRKD4VhsnRoUTLxMbDUDnPaP0lmq1izqoCTDeru', 1209600, 'app', '2018-01-29 10:15:02', 10),
('gvvEotmvqboJqN2tg2r6f7hBgV9G3aIwn40WiC6sCizymTsBOlD8wLdAh9vX8wuo', 1209600, 'app', '2018-02-06 06:31:36', 10),
('hxGYmlLHyakDGNHTmYleJsEwvlLQO1y7fVPWLC2YVs6nNusNTiGQa3Cq8tsNsgsZ', 1209600, 'app', '2018-01-29 05:13:34', 10),
('hZAy7I2MDsDM1URMabwiFzYrfajMEx8BbFE6xaYJLh8jdnPvH8G2WdeBnCXXRQ9C', 1209600, 'app', '2018-01-22 08:58:57', 10),
('j0XgiBgywcvRJ5WCxv8BzeBey87KUa34i2lfsbkWHGpajcBrcMh4KzBqMZWcGnVP', 1209600, 'app', '2018-01-12 12:37:39', 10),
('JORG8kBaifJZbWfxjZSjqvtqlBdHobBNX6MP8488tvpb5Ju9bQEYNDAjkvCofRq3', 1209600, 'app', '2018-02-09 10:23:53', 10),
('Kuc3P6zDJdJJpCsdrlqoVBfPZBse24wRgkQleUEgH2pUlIxEbCZ0vfwPhjnp5Grj', 1209600, 'app', '2018-01-29 05:45:44', 10),
('LK9OC0UyusRGBhwWhMNWfZYPOsGd2PHSWxGkWvwIPXeaugefwFV4wjOknee31Enw', 1209600, 'app', '2018-02-09 10:40:34', 10),
('Lls9wG63GbxhKjZCmkfOFDAPGlSrQMCeqVufVwyzzVZkNXJYIqs3N0n7sxhowLGt', 1209600, 'app', '2018-01-22 08:58:55', 10),
('mqkzkmtmsAiLabAuVZ5jBLYmCvxockIO2rpGvq9xL5ENqEB1EMeXgEe0H2w5K3iK', 1209600, 'app', '2018-01-22 08:47:23', 10),
('nWZ7h81RBUy6M2B8pZk8bZFKvj38HerhxKeqWluaoBXAYftxg0sqGRExKZj4sGsF', 1209600, 'app', '2018-01-12 12:03:52', 10),
('p1PmtIeuBnYHYg8qk8TXDQTM9QVEzSBy1QG8prDu6IXFa7gEkATlpKy87UmXi4DD', 1209600, 'app', '2018-01-22 08:50:39', 10),
('PiFvRQO9TcYyJkEJzyLAqXU98rZVviBeaNd8bDZ3BcafuaHj5GgxWdmkvhajzCSE', 1209600, 'app', '2018-01-22 08:59:06', 10),
('PnuSKgkMUodljBJysTXzSIN7xopTPaG7Z3WYxYFkAvcBiG8W9KH69mG70ifjud4y', 1209600, 'app', '2018-01-12 12:06:03', 10),
('RFl5DB2OsgbIZ32NdA1qEpccAias8ZYRAqDaPzSnTIchkFWm1trmDAfFKvgqHbkl', 1209600, 'app', '2018-01-22 07:32:53', 10),
('SdnDzBbwKo52U2tpEDRs3dDG7Ri4WopfSXmMcsZRUu9ZJhma0VL0jAg3WK1dghXX', 1209600, 'app', '2018-01-12 12:09:28', 10),
('TJCAz8yOIS3TDA4dB3o3q99UJaXWjT4Iqi9XhUwjytdEV97usAd0wyFhh2RX9u3I', 1209600, 'app', '2018-02-01 10:13:50', 10),
('tyIqbnMApIUe5BJmHnxFxJclYh6ONAB8zox2BSlnk7GCkdLKpjfQdEMtNrAw53Sh', 1209600, 'app', '2018-01-12 12:37:04', 10),
('ueubkGYN6WqMayG0wak7zhEroPCoo8P3MH11BvGdwDoIVe5MQfwjlLCpABozGv5V', 1209600, 'app', '2018-01-30 10:54:47', 10),
('VabrU6CVyjQrllYGbc7poACky7yzo8W2Wzr4HEYyIcFvSQG0YarcFRpmrKHZLF49', 1209600, 'app', '2018-01-25 07:05:33', 10),
('veEaT7gBe0MExVqIyK7mVbdELmEJ4BeOc2uVzAejESDUooyNM5CIr0q9UdGnA75a', 1209600, 'app', '2018-01-22 08:58:58', 10),
('VVzk2DzEvcV7yh3uDjpYSowUdG9yJrSYq3fQStNEEvGF4CecE1GYu0IXIeILHpfX', 1209600, 'app', '2018-01-29 06:07:29', 10),
('WRV6P43MbC9k0Ae7FUyDVACb611vvjZgjd5ImUD1aRrvXvDFbQM8GSOMcFcW82RS', 1209600, 'app', '2018-01-12 11:57:23', 10),
('WsaLTSiFY9OBUzmkvrDVXXVeodVrSTywjpWaoz8vAdSn34kXHGXV5ENFo9ZvCdrP', 1209600, 'app', '2018-01-16 04:45:02', 10),
('WXNhRVGpA9PbuuLuBTkhB4YiBEMDHBCYlQYRWBqsV7NqAfwYJ5J7E8DoKiEcmNgW', 1209600, 'app', '2018-02-06 14:35:57', 10),
('ylkRZ63N2mn6gKZ4AVwuQnrDv83lGezuxzhkXIwAumHaJf9cu9m4mu4MoXIIP2bG', 1209600, 'app', '2018-02-09 10:23:24', 10),
('YXn0At43YrolEBVQ0BeCT7FwxMr8RcRuv3LNZ0U8Bw44jYZib7B7UN6EGDBj9WkU', 1209600, 'app', '2018-01-22 07:27:05', 10),
('yZJSQ0TEBS6os7mhLM3bluXOsdJcySR6UXjnvtdEgTZ5yA6RdDxvW6dLj1cK0d2B', 1209600, 'app', '2018-01-22 08:45:43', 10),
('zBCRDFzPMQ3f6eTGrL89WYvGSNnkXniGmudF6g29lYuOMiaTQBpF5UJ6bl8CTH44', 1209600, 'app', '2018-02-06 06:12:22', 10),
('ZpmMTyN7h647r2WzWAKWEZLTP8tJg41jj1IG7y8V3bH4Ue51n7aSkPT2q3FeSY25', 1209600, 'app', '2018-02-01 11:54:17', 10);

-- --------------------------------------------------------

--
-- Table structure for table `age_groups`
--

CREATE TABLE `age_groups` (
  `id` int(11) NOT NULL,
  `group_name` int(50) NOT NULL,
  `under_or_above` tinyint(4) NOT NULL DEFAULT 1 COMMENT '1: Under, 2: Above',
  `sport_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `age_groups`
--

INSERT INTO `age_groups` (`id`, `group_name`, `under_or_above`, `sport_id`, `created_at`, `updated_at`, `is_active`, `formation_group_id`) VALUES
(29, 10, 1, 1, '2018-02-08 10:23:55', '2018-02-08 10:23:55', 1, 1),
(30, 13, 1, 1, '2018-02-08 10:25:20', '2018-02-08 10:25:20', 1, 2),
(31, 13, 2, 1, '2018-02-08 10:25:33', '2018-02-08 10:25:33', 1, 3),
(32, 20, 1, 1, '2018-02-09 09:37:43', '2018-02-09 09:37:43', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `assignments`
--

CREATE TABLE `assignments` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

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
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

-- --------------------------------------------------------

--
-- Table structure for table `attacking`
--

CREATE TABLE `attacking` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `sport_id` int(11) NOT NULL DEFAULT 1,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `attacking`
--

INSERT INTO `attacking` (`id`, `user_id`, `sport_id`, `is_active`, `name`, `created_at`, `updated_at`) VALUES
(2, 10, 1, 1, 'Attacking', '2018-01-17 12:42:35', '2018-01-17 12:42:35'),
(3, 10, 1, 1, 'Defending', '2018-01-29 05:19:41', '2018-01-29 05:19:41'),
(4, 10, 1, 1, 'NA', '2018-02-07 07:29:04', '2018-02-07 07:29:04');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(50) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

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
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `sport_id` int(11) NOT NULL DEFAULT 1,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `detailed_skill_set`
--

INSERT INTO `detailed_skill_set` (`id`, `user_id`, `is_active`, `sport_id`, `name`, `created_at`, `updated_at`) VALUES
(1, 10, 1, 1, 'On the ground', '2018-01-18 12:23:33', '2018-01-18 12:23:33'),
(2, 10, 1, 1, 'In the air', '2018-01-29 05:30:29', '2018-01-29 05:30:29'),
(3, 10, 1, 1, 'Driven', '2018-01-29 05:30:39', '2018-01-29 05:30:39'),
(4, 10, 1, 1, 'NA', '2018-02-07 07:29:20', '2018-02-07 07:29:20');

-- --------------------------------------------------------

--
-- Table structure for table `education_pillars`
--

CREATE TABLE `education_pillars` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `sport_id` int(11) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `education_pillars`
--

INSERT INTO `education_pillars` (`id`, `user_id`, `sport_id`, `created_at`, `updated_at`, `name`, `is_active`) VALUES
(1, 10, 1, '2018-01-19 17:42:53', '2018-01-19 17:42:53', 'Technical', 1),
(2, 10, 1, '2018-01-16 14:55:02', '2018-01-16 14:55:02', 'Tactical', 1),
(11, 10, 1, '2018-01-17 12:36:07', '2018-01-17 12:36:07', 'Physical', 1),
(13, 10, 1, '2018-01-29 10:05:40', '2018-01-29 10:05:40', 'Mental', 1),
(17, 10, 1, '2018-02-07 06:33:32', '2018-02-07 06:33:32', 'NA', 1);

-- --------------------------------------------------------

--
-- Table structure for table `field_location`
--

CREATE TABLE `field_location` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `sport_id` int(11) NOT NULL DEFAULT 1,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `field_location`
--

INSERT INTO `field_location` (`id`, `user_id`, `is_active`, `sport_id`, `name`, `created_at`, `updated_at`) VALUES
(2, 10, 1, 1, 'The Whole Field', '2018-01-17 12:39:37', '2018-01-17 12:39:37'),
(3, 10, 1, 1, 'Defensive Third of the Field', '2018-01-29 05:18:54', '2018-01-29 05:18:54'),
(4, 10, 1, 1, 'Middle Third of the Field', '2018-01-29 05:19:03', '2018-01-29 05:19:03'),
(5, 10, 1, 1, 'Offensive Third of the Field', '2018-01-29 05:19:17', '2018-01-29 05:19:17'),
(6, 10, 1, 1, 'NA', '2018-02-07 07:28:55', '2018-02-07 07:28:55');

-- --------------------------------------------------------

--
-- Table structure for table `formation`
--

CREATE TABLE `formation` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `sport_id` int(11) NOT NULL,
  `formation_group_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `formation`
--

INSERT INTO `formation` (`id`, `user_id`, `is_active`, `sport_id`, `formation_group_id`, `name`, `created_at`, `updated_at`) VALUES
(7, 10, 1, 1, 1, 'NA', '2018-02-07 07:26:18', '2018-02-07 07:26:18'),
(8, 10, 1, 1, 1, '1231', '2018-02-08 06:51:49', '2018-02-08 06:51:49'),
(9, 10, 1, 1, 1, '1321', '2018-02-08 06:52:01', '2018-02-08 06:52:01'),
(10, 10, 1, 1, 2, '1431', '2018-02-08 06:52:11', '2018-02-08 06:52:11'),
(11, 10, 1, 1, 2, '1341', '2018-02-08 06:52:23', '2018-02-08 06:52:23'),
(12, 10, 1, 1, 2, '1332', '2018-02-08 06:52:40', '2018-02-08 06:52:40'),
(13, 10, 1, 1, 3, '4432', '2018-02-08 06:52:50', '2018-02-08 06:52:50'),
(14, 10, 1, 1, 3, '4342', '2018-02-08 06:53:12', '2018-02-08 06:53:12'),
(15, 10, 1, 1, 1, '2221', '2018-02-09 03:46:54', '2018-02-09 03:46:54');

-- --------------------------------------------------------

--
-- Table structure for table `formation_age_group_mapping`
--

CREATE TABLE `formation_age_group_mapping` (
  `id` int(11) NOT NULL,
  `age_group_id` int(11) NOT NULL,
  `formation_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `formation_age_group_mapping`
--

INSERT INTO `formation_age_group_mapping` (`id`, `age_group_id`, `formation_id`, `created_at`, `updated_at`) VALUES
(7, 29, 8, '2018-02-08 10:23:56', '2018-02-08 10:23:56'),
(8, 29, 9, '2018-02-08 10:23:56', '2018-02-08 10:23:56'),
(9, 30, 10, '2018-02-08 10:25:20', '2018-02-08 10:25:20'),
(10, 30, 11, '2018-02-08 10:25:20', '2018-02-08 10:25:20'),
(11, 30, 12, '2018-02-08 10:25:20', '2018-02-08 10:25:20'),
(12, 31, 13, '2018-02-08 10:25:33', '2018-02-08 10:25:33'),
(13, 31, 14, '2018-02-08 10:25:33', '2018-02-08 10:25:33'),
(14, 32, 8, '2018-02-09 09:37:43', '2018-02-09 09:37:43'),
(15, 32, 9, '2018-02-09 09:37:43', '2018-02-09 09:37:43'),
(16, 32, 15, '2018-02-09 09:37:43', '2018-02-09 09:37:43');

-- --------------------------------------------------------

--
-- Table structure for table `formation_groups`
--

CREATE TABLE `formation_groups` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `formation_groups`
--

INSERT INTO `formation_groups` (`id`, `name`, `created_at`, `updated_at`, `is_active`) VALUES
(1, '7V7', '2018-02-05 00:00:00', '2018-02-05 00:00:00', 1),
(2, '9V9', '2018-02-08 00:00:00', '2018-02-08 00:00:00', 1),
(3, 'U13+', '2018-02-08 00:00:00', '2018-02-08 00:00:00', 1);

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
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`id`, `name`, `user_id`, `created_at`, `updated_at`, `age_group_id`, `display_name`, `description`, `type`, `no_of_questions`, `skill_set_id`, `detailed_skill_set_id`, `formation_id`) VALUES
(6, 'Module 1', 10, '2018-02-08 11:54:22', '2018-02-08 11:54:22', 29, 'Terminology', 'Terminology', 'education', 10, 1, 1, 9),
(7, 'Module 1', 10, '2018-02-09 09:39:39', '2018-02-09 09:39:39', 32, 'Terminology', 'test', 'education', 10, 1, 2, 8);

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
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `modules_age_groups_mapping`
--

INSERT INTO `modules_age_groups_mapping` (`id`, `user_id`, `age_group_id`, `module_id`, `no_of_questions`, `created_at`, `updated_at`) VALUES
(1, 10, 6, 1, 15, '2018-01-22 16:24:08', '2018-01-22 16:24:08'),
(3, 10, 3, 1, 15, '2018-01-22 17:48:56', '2018-01-22 17:48:56'),
(4, 10, 4, 1, 20, '2018-01-22 17:49:05', '2018-01-22 17:49:05'),
(5, 10, 5, 1, 8, '2018-01-22 17:49:10', '2018-01-22 17:49:10'),
(7, 10, 7, 1, 10, '2018-01-29 12:03:13', '2018-01-29 12:03:13'),
(8, 10, 8, 1, 7, '2018-01-29 12:03:24', '2018-01-29 12:03:24'),
(9, 10, 9, 1, 4, '2018-01-29 12:03:38', '2018-01-29 12:03:38');

-- --------------------------------------------------------

--
-- Table structure for table `new_table`
--

CREATE TABLE `new_table` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `transaction_id` varchar(50) NOT NULL,
  `status` tinyint(3) NOT NULL DEFAULT 1 COMMENT '0: FAILED, 1: PENDING, 2: PAID',
  `amount` decimal(10,2) NOT NULL,
  `plan_id` int(11) NOT NULL,
  `gateway` varchar(30) NOT NULL DEFAULT 'PAYPAL',
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `user_id`, `transaction_id`, `status`, `amount`, `plan_id`, `gateway`, `created_at`, `updated_at`) VALUES
(1, 10, 'ee3344', 1, '100.00', 1, 'PAYPAL', '2018-02-28 00:00:00', '2018-02-28 00:00:00');

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
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `correct_answer` int(11) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `questionnaire`
--

INSERT INTO `questionnaire` (`id`, `user_id`, `title`, `is_active`, `correct_answer`, `created_at`, `updated_at`, `age_group`, `pillar_id`, `formation_id`, `field_location_id`, `attacking_id`, `level_of_toughness`, `scene_id`) VALUES
(25, 10, 'What will be the position of 4th player?', 1, 75, '2018-02-09 10:20:07', '2018-02-09 10:20:07', 29, 1, 9, 2, 3, 'Toughest', 1);

-- --------------------------------------------------------

--
-- Table structure for table `questionnaire_answers`
--

CREATE TABLE `questionnaire_answers` (
  `id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `questionnaire_answers`
--

INSERT INTO `questionnaire_answers` (`id`, `question_id`, `title`, `is_active`, `created_at`, `updated_at`) VALUES
(71, 25, 'A', 1, '2018-02-09 10:20:08', '2018-02-09 10:20:08'),
(72, 25, 'B', 1, '2018-02-09 10:20:08', '2018-02-09 10:20:08'),
(73, 25, 'C', 1, '2018-02-09 10:20:08', '2018-02-09 10:20:08'),
(74, 25, 'D', 1, '2018-02-09 10:20:08', '2018-02-09 10:20:08'),
(75, 25, 'All of above', 1, '2018-02-09 10:20:08', '2018-02-09 10:20:08'),
(76, 25, 'None of above', 1, '2018-02-09 10:20:08', '2018-02-09 10:20:08');

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
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `scenes`
--

INSERT INTO `scenes` (`id`, `name`, `user_id`, `admin_media_url`, `user_media_url`, `created_at`, `updated_at`, `module_id`, `logo`) VALUES
(1, 'Scene 1', 10, 'media/module1/1.png', NULL, '2018-01-18 15:53:51', '2018-01-18 15:53:51', 6, 'media/logo.png'),
(2, 'Scene 2', 10, 'media/module1/2.png', NULL, '2018-01-18 15:53:51', '2018-01-18 15:53:51', 6, ''),
(3, 'Scene 3', 10, 'media/module1/3.png', NULL, '2018-01-18 15:54:13', '2018-01-18 15:54:13', 6, ''),
(4, 'Scene 4', 10, 'media/module1/4.png', NULL, '2018-01-18 15:53:51', '2018-01-18 15:53:51', 6, ''),
(5, 'Scene 5', 10, 'media/module1/5.png', NULL, '2018-01-18 15:53:51', '2018-01-18 15:53:51', 6, ''),
(6, 'Scene 6', 10, 'media/module1/6.png', NULL, '2018-01-18 15:54:13', '2018-01-18 15:54:13', 6, ''),
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
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `sport_id` int(11) NOT NULL DEFAULT 1,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `skill_set`
--

INSERT INTO `skill_set` (`id`, `user_id`, `is_active`, `sport_id`, `name`, `created_at`, `updated_at`) VALUES
(1, 10, 1, 1, 'Passing', '2018-01-18 12:23:24', '2018-01-18 12:23:24'),
(2, 10, 1, 1, 'Receiving', '2018-01-29 05:29:02', '2018-01-29 05:29:02'),
(3, 10, 1, 1, 'Ball Mastery (Dribbling)', '2018-01-29 05:29:16', '2018-01-29 05:29:16'),
(4, 10, 1, 1, 'Shooting', '2018-01-29 05:29:26', '2018-01-29 05:29:26'),
(5, 10, 1, 1, 'Goalkeeping', '2018-01-29 05:29:35', '2018-01-29 05:29:35'),
(6, 10, 1, 1, 'Movement', '2018-01-29 05:29:44', '2018-01-29 05:29:44'),
(7, 10, 1, 1, 'Crossing', '2018-01-29 05:29:53', '2018-01-29 05:29:53'),
(8, 10, 1, 1, 'NA', '2018-02-07 07:29:11', '2018-02-07 07:29:11');

-- --------------------------------------------------------

--
-- Table structure for table `sports`
--

CREATE TABLE `sports` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `sports`
--

INSERT INTO `sports` (`id`, `user_id`, `name`, `parent_id`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 10, 'Soccer', 0, 1, '2018-01-17 15:06:09', '2018-01-17 15:06:09'),
(21, 10, 'Table Tennis', 0, 1, '2018-02-09 11:38:32', '2018-02-09 11:38:32');

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
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

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
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `team_name`, `is_active`, `created_at`, `updated_at`, `user_id`, `team_logo`, `age_of_team`) VALUES
(12, 'India', 1, '2018-02-07 05:02:02', '2018-02-07 05:02:02', 23, NULL, 8);

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
  `role` enum('1','2','3') NOT NULL DEFAULT '3' COMMENT '1: Admin, 2: Coach, 3: Player',
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp
) ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`, `role`, `is_active`, `created_at`, `updated_at`, `is_paid`, `age`, `gender`) VALUES
(10, 'admin@sportsiq.com', '$2a$10$gLT6yisBf5.0SuKhUGfhPedySzOclKnVvkLnuReqbGmBUcSQwu6TK', 'qwerty', 'aaaa', '1', 1, '2018-01-10 11:24:10', '2018-01-10 11:24:10', 1, 10, '2'),
(23, 'coach@gmail.com', '$2a$10$n0ikkmVFaXyvupUVC3o20.WeB7Doy/bw.fZXpMoFJQiVWn1/tA5ze', 'John Wright', ' ', '2', 1, '2018-02-07 05:02:02', '2018-02-07 05:02:02', 0, 0, '2');

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `meta_key` varchar(100) NOT NULL,
  `meta_value` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`id`, `user_id`, `meta_key`, `meta_value`) VALUES
(9, 23, 'sport', '2'),
(10, 23, 'club', 'Gymkhana'),
(11, 23, 'address', 'h.no. 123,\nNehru colony,\nRajpur road'),
(12, 23, 'address2', 'h.no. 123,\nNehru colony,\nRajpur road'),
(13, 23, 'state', 'New York'),
(14, 23, 'city', 'San Diego'),
(15, 23, 'zipcode', '248003'),
(16, 23, 'phone_number', '5456544444');

-- --------------------------------------------------------

--
-- Table structure for table `user_logins`
--

CREATE TABLE `user_logins` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(50) NOT NULL,
  `ip` varchar(15) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp
) ;

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
-- Indexes for table `assignments_attempts`
--
ALTER TABLE `assignments_attempts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `question_id` (`question_id`),
  ADD KEY `answer_id` (`answer_id`);

--
-- Indexes for table `coaches_players`
--
ALTER TABLE `coaches_players`
  ADD PRIMARY KEY (`id`),
  ADD KEY `coach_id` (`coach_id`),
  ADD KEY `player_id` (`player_id`),
  ADD KEY `team_id` (`team_id`);

--
-- Indexes for table `invitations`
--
ALTER TABLE `invitations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `new_table`
--
ALTER TABLE `new_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `players_sports`
--
ALTER TABLE `players_sports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `coach_id` (`coach_id`),
  ADD KEY `sport_id` (`sport_id`),
  ADD KEY `player_id` (`player_id`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `assignments`
--
ALTER TABLE `assignments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `assignments_attempts`
--
ALTER TABLE `assignments_attempts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `assignment_questions`
--
ALTER TABLE `assignment_questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `attacking`
--
ALTER TABLE `attacking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `education_pillars`
--
ALTER TABLE `education_pillars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `field_location`
--
ALTER TABLE `field_location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `formation`
--
ALTER TABLE `formation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `formation_age_group_mapping`
--
ALTER TABLE `formation_age_group_mapping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `formation_groups`
--
ALTER TABLE `formation_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `invitations`
--
ALTER TABLE `invitations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `modules_age_groups_mapping`
--
ALTER TABLE `modules_age_groups_mapping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `new_table`
--
ALTER TABLE `new_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `questionnaire_answers`
--
ALTER TABLE `questionnaire_answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `scenes`
--
ALTER TABLE `scenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `skill_set`
--
ALTER TABLE `skill_set`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `sports`
--
ALTER TABLE `sports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `user_logins`
--
ALTER TABLE `user_logins`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `assignments_attempts`
--
ALTER TABLE `assignments_attempts`
  ADD CONSTRAINT `assignments_attempts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `assignments_attempts_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `questionnaire` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `assignments_attempts_ibfk_3` FOREIGN KEY (`answer_id`) REFERENCES `questionnaire_answers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Constraints for table `players_sports`
--
ALTER TABLE `players_sports`
  ADD CONSTRAINT `players_sports_ibfk_1` FOREIGN KEY (`coach_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `players_sports_ibfk_2` FOREIGN KEY (`player_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `players_sports_ibfk_3` FOREIGN KEY (`sport_id`) REFERENCES `sports` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_details`
--
ALTER TABLE `user_details`
  ADD CONSTRAINT `user_details_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
