---------------------------CRIANDO AS TABELAS------------------------------
CREATE TABLE actors (
	id serial PRIMARY KEY,
	name VARCHAR(30) not null,
	lastname VARCHAR(30) default null,
	lastupdate DATE not null default now,
	createdate DATE not null default now
);

CREATE TABLE areas (
	id serial PRIMARY KEY,
	name VARCHAR(20) not null,
	createdate DATE not null default now,
	lastupdate DATE not null default now
);

CREATE TABLE users (
	id serial PRIMARY KEY
	name VARCHAR not null,
	lastname VARCHAR default null,
	email VARCHAR default null,
	createdate DATE not null default now,
	lastupdate DATE not null default now
);

CREATE TABLE posts (
	id serial PRIMARY KEY,
	areas VARCHAR FOREIGN KEY not null,
	actors FOREIGN KEY not null,
	lastupdate DATE not null default now,
	createdate DATE not null default now

);

------------------------------INSERINDO DADOS----------------------------------
INSERT INTO actors (name) VALUES (
	('Izaias Nascimento'),
	('Wellington Silva'),
	('José Carlos'),
	('Matheus Bastos')
);

INSERT INTO posts (areas) VALUES (
	('Qualidade de vida'),
	('Espiritualidade'),
	('Família'),
	('Diversão'),
	('Carreira'),
	('Vida social'),
	('Atividade física')
);