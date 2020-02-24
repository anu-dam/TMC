use tmc
select * from clients
select * from users

select * from tasks
select * from clienttasks

update tasks set status = 'Active'

truncate table clienttasks



# id, name, email, address, status, createdAt, updatedAt
'1', 'Colonel Light Gardens Primary School', 'ColonelLightGardensPrimary@mail.com', '1 Colonel Light Gardens Adelaide', 'Active', '2020-02-24 17:15:42', '2020-02-24 17:15:42'


# id, status, createdAt, updatedAt, clientId, taskId
'1', 'Assigned', '2020-02-24 06:49:40', '2020-02-24 06:49:40', '1', '1'

# id, title, description, completedBy, status, createdAt, updatedAt, UserId
'1', 'New Task', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', '2020-02-25', 'Assigned', '2020-02-24 17:18:04', '2020-02-24 06:49:41', '1'


CREATE TABLE IF NOT EXISTS `Albums` (`id` INTEGER NOT NULL auto_increment , `album_belongsl_artist` INTEGER, `artist_hasmany_albums` INTEGER, PRIMARY KEY (`id`))
CREATE TABLE IF NOT EXISTS `Albums` (`id` INTEGER NOT NULL auto_increment , `album_id` INTEGER, PRIMARY KEY (`id`)) ENGINE=InnoDB;



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
'Assigned',
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
'Assigned',
1,
NOW(),
NOW());
