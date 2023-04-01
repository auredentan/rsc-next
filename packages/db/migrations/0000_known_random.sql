CREATE TABLE `cities` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256),
	`country_id` int,
	`popularity` enum('unknown','known','popular')
);
--> statement-breakpoint
CREATE TABLE `countries` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256)
);
--> statement-breakpoint
CREATE UNIQUE INDEX name_idx ON countries (`name`);