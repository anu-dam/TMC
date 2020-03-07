-- drop database tmc;
-- create database tmc;
use tmc;


-- update tasks set status = "Active"

-- UPDATE users SET type = 'client' WHERE users.id = 3

select * from clients
select * from users
select * from tasks
select * from clients
select * from clienttasks where clientId = 2 order by updatedAt
# id, email, password, name, type, status, createdAt, updatedAt, ClientId
'1', 'james@mail.com', '$2a$10$83CHngqAQTvgDEujhstJlOZndGSxYXY2IkUTsRAdStnGAE7Po2mZS', 'James', 'administrator', 'active', '2020-02-25 01:42:38', '2020-02-25 01:42:38', NULL

# id, clientId, taskId, status, createdAt, updatedAt
'26', '2', '15', 'Completed', '2020-02-27 00:44:50', '2020-02-27 00:47:10'



-- UPDATE tasks SET status = 'Active' WHERE id = 8

# id, clientId, taskId, status, createdAt, updatedAt
'26', '2', '15', 'Completed', '2020-02-27 00:44:50', '2020-02-27 00:47:10'
-- UPDATE clienttasks SET status = 'Assigned'

-- insert clients
INSERT INTO `tmc`.`clients`
(
`name`,
`email`,
`address`,
`status`,
`createdAt`,
`updatedAt`)
VALUES
(
'Colonel Light Gardens Primary School',
'ColonelLightGardensPrimary@mail.com',
'1 Colonel Light Gardens Adelaide',
'Active',
NOW(),
NOW());

INSERT INTO `tmc`.`clients`
(
`name`,
`email`,
`address`,
`status`,
`createdAt`,
`updatedAt`)
VALUES
(
'Westbourne Park Primary School',
'WestbournePark.Primary@mail.com',
'2 Marlborough Rd, Westbourne Park SA 5041',
'Active',
NOW(),
NOW());


-- Insert tasks after creating users

INSERT INTO `tmc`.`tasks`
(`title`,
`description`,
`completedBy`,
`status`,
`UserId`,
`createdAt`,
`updatedAt`)
VALUES
('New Task',
'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
'2020-02-25',
'Active',
1,
NOW(),
NOW());

INSERT INTO `tmc`.`tasks`
(`title`,
`description`,
`completedBy`,
`status`,
`UserId`,
`createdAt`,
`updatedAt`)
VALUES
('Second Task',
'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
'2020-02-25',
'Active',
1,
NOW(),
NOW());


INSERT INTO `tmc`.`tasks`
(`title`,
`description`,
`completedBy`,
`status`,
`UserId`,
`createdAt`,
`updatedAt`)
VALUES
('Third Task',
'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
'2020-02-25',
'Active',
1,
NOW(),
NOW());

INSERT INTO `tmc`.`tasks`
(`title`,
`description`,
`completedBy`,
`status`,
`UserId`,
`createdAt`,
`updatedAt`)
VALUES
('Fourth Task',
'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
'2020-02-25',
'Active',
1,
NOW(),
NOW());



