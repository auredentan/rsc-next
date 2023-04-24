CREATE TABLE `Activities` (
	`id` varchar(256) PRIMARY KEY NOT NULL,
	`title` text,
	`slug` text,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `Users` (
	`id` varchar(256) PRIMARY KEY NOT NULL,
	`email` text,
	`provider` text
);
