use tmc
select * from clients
select * from users

select * from tasks
select * from clienttasks








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


INSERT INTO `tmc`.`tasks`
(`id`,
`title`,
`description`,
`completedBy`,
`status`,
`creator`,
`createdAt`,
`updatedAt`)
VALUES
(<{id: }>,
<{title: }>,
<{description: }>,
<{completedBy: }>,
<{status: }>,
<{creator: }>,
<{createdAt: }>,
<{updatedAt: }>);

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
2,
NOW(),
NOW());
