use got_characters; 

INSERT INTO house
    (name)
VALUES
    ('Targaryen'),
    ('Lannister'),
    ('Stark');

INSERT INTO title
    (name, salary, house_id)
VALUES
    ('Targaryen Queen', 750000, 1),
    ('Targaryen King', 500000, 1),
    ('Targaryen Knight', 50000, 1),
    ('Lannister King', 1000000, 2),
    ('Lannister Queen', 1000000, 2),
    ('Lannister Knight', 60000, 2),
    ('Stark King', 250000, 3),
    ('Stark Queen', 250000, 3),
    ('Stark Knight', 50000, 3);

INSERT INTO characters 
    (first_name, last_name, title_id, commander_id)
VALUES  
    ('Daenerys', 'Targaryen', 1, NULL),
    ('Rhaehgar', 'Targaryen', 2, 1),
    ('George', 'Targaryen', 3, 1),
    ('Tywin', 'Lannister', 4, NULL),
    ('Joanna', 'Lannister', 5, 4),
    ('Jamie', 'Lannister', 6, 4),
    ('Ed', 'Stark', 7, NULL),
    ('Sansa', 'Stark', 8, 7),
    ('Jon', 'Snow', 9, 7);



    