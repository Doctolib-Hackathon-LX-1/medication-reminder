DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
`id` INT NOT NULL AUTO_INCREMENT,
`first_name` VARCHAR(80) NOT NULL,
`last_name` VARCHAR(80) NOT NULL,
PRIMARY KEY (`id`)
);

INSERT INTO `user` (first_name, last_name)
VALUES ("Antoine", "Dupont");

DROP TABLE IF EXISTS `medication`;

CREATE TABLE `medication` (
`id` INT NOT NULL AUTO_INCREMENT,
`medication_id` VARCHAR(255) NULL,
`Subject` VARCHAR(80) NOT NULL,
`StartTime` VARCHAR(80)  NOT NULL,
`EndTime` VARCHAR(80)  NOT NULL,
`RecurrenceRule` VARCHAR(256) NOT NULL,
`OwnerColor` VARCHAR(80) NULL,
`user_id` INT(11) NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`user_id`) REFERENCES user(`id`)
);

INSERT INTO medication 
(Subject, StartTime, EndTime, RecurrenceRule, OwnerColor, user_id) 
VALUES  (
	'Treatmenttest', 
	'2020-06-24T13:10:00.000Z', 
	'2020-06-24T13:40:00.000Z', 
	'FREQ=WEEKLY;BYDAY=SU,TU,TH;INTERVAL=2;UNTIL=20200831T130545Z;', 
	'#7499E1', 
	1
	),
 (
	'Treatmenttest2', 
	'2020-06-24T13:10:00.000Z', 
	'2020-06-24T13:40:00.000Z', 
	'FREQ=WEEKLY;BYDAY=SU,TU,TH;INTERVAL=5;UNTIL=20200831T130545Z;', 
	'#7499E1', 
	1
	);

