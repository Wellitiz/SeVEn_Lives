---------------------------CRIANDO A BASE DE DADOS------------------------
CREATE DATABASE seven;
USE seven;

---------------------------CRIANDO AS TABELAS------------------------------
CREATE TABLE authors (
	authorId INT PRIMARY KEY,
	name VARCHAR(30) not null,
	lastname VARCHAR(30) default null,
	createdate DATE not null default now,
	lastupdate DATE not null default now
);

CREATE TABLE areas (
	areaId serial PRIMARY KEY,
	name VARCHAR(20) not null,
	createdate DATE not null default now,
	lastupdate DATE not null default now
);

CREATE TABLE users (
	userId serial PRIMARY KEY
	name VARCHAR not null,
	lastname VARCHAR default null,
	email VARCHAR default null,
	createdate DATE not null default now,
	lastupdate DATE not null default now
);

CREATE TABLE posts (
	postId serial PRIMARY KEY,
	areasId INT not null,
	authorId INT not null,
	userId INT not null,
	lastupdate DATE not null default now,
	createdate DATE not null default now,
	FOREIGN KEY (areasId) REFERENCES areas(areaId),
	FOREIGN KEY (authorId) REFERENCES authors(authorId),
	FOREIGN KEY (userId) REFERENCES users(userId)

);

------------------------------INSERINDO DADOS----------------------------------
INSERT INTO authos (name) VALUES (
	('Izaias Nascimento'),
	('Wellington Silva'),
	('José Carlos'),
	('Matheus Bastos')
);

INSERT INTO posts (areas) VALUES (
	('Caminhada'),
	('Balada'),
	('Família'),
	('Profissional'),
	('Meditação'),
	('Academia'),
	('Religião')
);
-------------------------------CONSULTANDO TABELAS------------------------------
SELECT * FROM users 
SELECT name, lastname FROM users 
INNER JOIN posts
ON posts.postId = users.postId;

