-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 29. Nov 2018 um 23:04
-- Server-Version: 10.1.30-MariaDB-0ubuntu0.17.10.1
-- PHP-Version: 7.1.17-0ubuntu0.17.10.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `c0_vm3_BD1_a1`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Enabler`
--

CREATE TABLE `Enabler` (
  `enabler_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `Enabler`
--

INSERT INTO `Enabler` (`enabler_id`, `name`) VALUES
(1, 'Principles, Policies and Frameworks'),
(2, 'Processes'),
(3, 'Organizational structures'),
(4, 'Information'),
(5, 'Culture, ethics and behaviour'),
(6, 'Peoples, skills and competences'),
(7, 'Services, infrastructure and applications');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Faehigkeitslevel`
--

CREATE TABLE `Faehigkeitslevel` (
  `faehigkeitslevel_id` int(10) UNSIGNED NOT NULL,
  `level` enum('0','1','2','3') NOT NULL,
  `beschreibung` varchar(200) NOT NULL,
  `reifegrad_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `Faehigkeitslevel`
--

INSERT INTO `Faehigkeitslevel` (`faehigkeitslevel_id`, `level`, `beschreibung`, `reifegrad_id`) VALUES
(1, '3', 'A standardized process for DF activities is in place. The procedures underlie a continuous improvement', 5),
(2, '2', 'DF initiatives and activities are managed and not ad-hoc\nperformed', 4),
(3, '1', 'The intended goals in DF are reached', 3),
(4, '0', 'The DF related objectives are not reached', 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Indikator`
--

CREATE TABLE `Indikator` (
  `indikator_id` int(10) UNSIGNED NOT NULL,
  `typ` enum('verpflichtend','optional') NOT NULL,
  `max. konstributionslevel` enum('1','2','3') NOT NULL,
  `frage` varchar(200) NOT NULL,
  `enabler_id` int(10) UNSIGNED NOT NULL,
  `faehigkeitslevel_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `Indikator`
--

INSERT INTO `Indikator` (`indikator_id`, `typ`, `max. konstributionslevel`, `frage`, `enabler_id`, `faehigkeitslevel_id`) VALUES
(1, 'verpflichtend', '2', 'Are the initiatives to raise awareness for DF activities in place?', 1, 2),
(2, 'verpflichtend', '3', 'Are initiatives to raise awareness for DF activities in place and continuously monitored ?', 1, 3),
(3, 'verpflichtend', '1', 'Do Governance and Management understand DFR initiatives?', 1, 1),
(4, 'verpflichtend', '2', 'Are Principles and policies according to a DF investigation present?', 1, 2),
(5, 'verpflichtend', '1', 'Do Governance and Management pursue DFR initiatives?', 1, 3),
(6, 'verpflichtend', '2', 'Do Governance and Management are completely involved in planning DFR initiatives?', 1, 2),
(7, 'verpflichtend', '3', 'Do Governance and Management support DFR related organisational changes?', 1, 3),
(8, 'optional', '3', 'Is a change management in place?', 1, 3),
(9, 'verpflichtend', '2', 'Does the Staff take principles to DF related actions seriously?', 1, 2),
(10, 'verpflichtend', '1', 'Are principles clearly formulated?', 1, 2),
(11, 'verpflichtend', '1', 'Are the responsibilities for the case of a DF investigation known?', 2, 1),
(12, 'verpflichtend', '2', 'Are responsibilities for the case of a DF investigation defined?', 2, 1),
(13, 'verpflichtend', '3', 'Are DF related decision making guidelines included in job-descriptions or roles?', 2, 3),
(14, 'verpflichtend', '1', 'Are Rights within Information Systems defined?', 2, 1),
(15, 'verpflichtend', '2', 'Are rights within Information Systems defined and adjusted to prevent potential destroying or tamp', 2, 2),
(16, 'optional', '3', 'Is the Identity management system in place?', 2, 3),
(17, 'verpflichtend', '2', 'Are escalation rules defined?', 2, 2),
(18, 'verpflichtend', '3', 'Are escalation rules defined, reviewed and monitored?', 2, 3),
(19, 'verpflichtend', '1', 'Is a basic understanding of the DF investigation process present?', 3, 1),
(20, 'verpflichtend', '2', 'Is a deep understanding of the DF investigation process is present?', 3, 2),
(21, 'verpflichtend', '3', 'Is the support for the DF investigation process continuously improved?', 3, 3),
(22, 'verpflichtend', '2', 'Are related sub-processes to DF documented?', 3, 2),
(23, 'verpflichtend', '3', 'Is a guideline to prevent business interruption in the case of a DF investigation defined?', 3, 3),
(24, 'optional', '3', 'Are process models of business processes present?', 3, 3),
(25, 'optional', '2', 'Are DF related processes partially automated?', 3, 2),
(26, 'verpflichtend', '3', 'Are DF related processes partially automated?', 3, 2),
(27, 'verpflichtend', '1', 'Are documents about the right handling of digital evidences in general present?', 4, 1),
(28, 'verpflichtend', '2', 'Are documents about the right handling of digital evidences of all devices and systems within the organization present?', 4, 2),
(29, 'verpflichtend', '3', 'Are documents about the right handling of digital evidences of all devices and systems within the organization present and frequently reviewed?', 4, 3),
(30, 'verpflichtend', '1', 'Are information about DF investigations available and accessible?', 4, 2),
(31, 'optional', '1', 'Can employee contribute findings and knowledge regarding DF?', 4, 2),
(32, 'optional', '2', 'Can employee contribute findings and knowledge regarding DF?', 4, 3),
(33, 'verpflichtend', '2', 'Is the usage of tools for DF is documented?', 4, 2),
(34, 'verpflichtend', '3', 'Is the usage of tools for DF documented and continuously reviewed?', 4, 3),
(35, 'verpflichtend', '2', 'Is information about the usage of digital evidences in a law court present?', 4, 2),
(36, 'verpflichtend', '3', 'Is information about the usage of digital evidences in a law court present and frequently updated?', 4, 3),
(37, 'optional', '2', 'Do employees get frequent updates according DF related topics (e.g.: e-Mail, letter)?', 4, 2),
(38, 'verpflichtend', '3', 'Do employees get timely updates according DF related topics (e.g.: e-Mail, letter)?', 4, 3),
(39, 'verpflichtend', '2', 'Do employees understand the importance of digital evidences?', 6, 2),
(40, 'verpflichtend', '1', 'Do employees get informal DFR related Training?', 6, 1),
(41, 'verpflichtend', '2', 'Do employees get formal DFR related training?', 6, 2),
(42, 'verpflichtend', '3', 'Is the proper application of the knowledge assessed regularly?', 6, 3),
(43, 'optional', '2', 'Does human resource division ensure the right amount of DF skilled employees?', 6, 2),
(44, 'verpflichtend', '2', 'Does human resource division ensure the right amount of DF skilled employees?', 6, 2),
(45, 'verpflichtend', '2', 'Are services, infrastructure and applications documented?', 7, 2),
(46, 'verpflichtend', '3', 'Are Services, infrastructure and Applications documented and continuously updated?', 7, 3),
(47, 'verpflichtend', '1', 'Are Possibilities to retrieve log-files known?', 7, 1),
(48, 'verpflichtend', '2', 'Are possibilities to retrieve log-files known and is configuration reviewed?', 7, 2),
(49, 'optional', '3', 'Are possibilities to retrieve log-files known and is configuration reviewed?', 7, 3),
(50, 'verpflichtend', '3', 'Is internal laboratory present?', 7, 3),
(51, 'verpflichtend', '2', 'Is the possibility to store and protect digital evidences present?', 7, 2),
(52, 'optional', '2', 'Are tools and methods to produce forensically sound copies of hard drives and memory present?', 7, 2),
(53, 'verpflichtend', '3', 'Are tools and methods to produce forensically sound copies of hard drives and memory present and reviewed frequently?', 7, 3),
(54, 'verpflichtend', '3', 'Are own tools for DF related tasks  developed in a forensically sound manner?', 7, 3),
(55, 'verpflichtend', '3', 'Are methods to adjust infrastructure and applications present?', 7, 3),
(56, 'optional', '2', 'Is a fraud intolerant culture present?', 5, 2),
(57, 'verpflichtend', '3', 'Is a fraud intolerant culture pursued?', 5, 3),
(58, 'optional', '2', 'Is a open handling of mistakes and issues present?', 5, 2),
(59, 'verpflichtend', '3', 'Is open handling of mistakes and issues present?', 5, 3),
(60, 'verpflichtend', '3', 'Are anti-fraud ethics established?', 5, 3),
(61, 'verpflichtend', '1', 'Is a willingness to unveil fraud / crime present?', 5, 1),
(62, 'verpflichtend', '2', 'Are DF related activities accepted within employees?', 5, 2),
(63, 'optional', '2', 'Are specific guidelines for potential fraud related situations present?', 5, 2),
(64, 'verpflichtend', '2', 'Are specific guidelines for potential fraud related situations present and reviewed?', 5, 3),
(65, 'verpflichtend', '1', 'Do employees not hinder a DF Investigation? ', 5, 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Reifegrad`
--

CREATE TABLE `Reifegrad` (
  `reifegrad_id` int(10) UNSIGNED NOT NULL,
  `grad` enum('1','2','3','4','5') NOT NULL,
  `beschreibung` varchar(250) NOT NULL,
  `label` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `Reifegrad`
--

INSERT INTO `Reifegrad` (`reifegrad_id`, `grad`, `beschreibung`, `label`) VALUES
(1, '1', 'Ad-hoc/ just starting/ no formal Digital Investigations or forensics capability/ no documentation present/ no communication structure/ no training/ no regulations/ no DFR structure in place', 'non-existent (initial) '),
(2, '2', 'Repeatable DR processes are in place/ informal training is performed/ minimal formalization/ basic (but incomplete) documentation/ low communication structure/ DF measure informally performed', 'basic (managed)'),
(3, '3', 'Documented processes are present/ documented usage of tools and methods/ standardised DF procedures/ formal training/ formal regulations/ communication structure in place', 'intermediate (defined)'),
(4, '4', 'DFR related process improvement measurements present/ documents are reviewed and checked/ frequent communication to all staff/ formal training with accreditation/ principles are followed and monitored', 'Advanced (quantitatively managed)'),
(5, '5', 'DFR related process improvement measurements present and aligned with the governance of the organization/ process improvement is continuously done/ legislation an law are reviewed/ development of own tools', 'full (optimised)');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `Enabler`
--
ALTER TABLE `Enabler`
  ADD PRIMARY KEY (`enabler_id`);

--
-- Indizes für die Tabelle `Faehigkeitslevel`
--
ALTER TABLE `Faehigkeitslevel`
  ADD PRIMARY KEY (`faehigkeitslevel_id`),
  ADD KEY `reifegrad_id` (`reifegrad_id`);

--
-- Indizes für die Tabelle `Indikator`
--
ALTER TABLE `Indikator`
  ADD PRIMARY KEY (`indikator_id`),
  ADD KEY `enabler_id` (`enabler_id`),
  ADD KEY `faehigkeitslevel_id` (`faehigkeitslevel_id`);

--
-- Indizes für die Tabelle `Reifegrad`
--
ALTER TABLE `Reifegrad`
  ADD PRIMARY KEY (`reifegrad_id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `Enabler`
--
ALTER TABLE `Enabler`
  MODIFY `enabler_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT für Tabelle `Faehigkeitslevel`
--
ALTER TABLE `Faehigkeitslevel`
  MODIFY `faehigkeitslevel_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT für Tabelle `Indikator`
--
ALTER TABLE `Indikator`
  MODIFY `indikator_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
--
-- AUTO_INCREMENT für Tabelle `Reifegrad`
--
ALTER TABLE `Reifegrad`
  MODIFY `reifegrad_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `Faehigkeitslevel`
--
ALTER TABLE `Faehigkeitslevel`
  ADD CONSTRAINT `Faehigkeitslevel_ibfk_1` FOREIGN KEY (`reifegrad_id`) REFERENCES `Reifegrad` (`reifegrad_id`);

--
-- Constraints der Tabelle `Indikator`
--
ALTER TABLE `Indikator`
  ADD CONSTRAINT `Indikator_ibfk_1` FOREIGN KEY (`enabler_id`) REFERENCES `Enabler` (`enabler_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
