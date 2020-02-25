-- drop database tmc;
-- create database tmc;
use tmc;


-- update tasks set status = "Active"

-- UPDATE users SET type = 'client' WHERE users.id = 3

select * from clients
select * from users
select * from tasks
select * from clienttasks

truncate table clienttasks


-- UPDATE tasks SET status = 'Active' WHERE id = 8
# id, title, description, completedBy, status, createdAt, updatedAt, UserId
'8', 'This is a new task', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad', '2020-03-07', 'created', '2020-02-25 01:51:26', '2020-02-25 01:51:26', '2'


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
('completed Task',
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



