---------------------------CRIANDO AS TABELAS------------------------------
CREATE TABLE blogueiro (
	id serial PRIMARY KEY,
	nome VARCHAR(30) NOT NULL
);

CREATE TABLE areas (
	id serial PRIMARY KEY,
	titulo VARCHAR(15) NOT NULL
);

CREATE TABLE usuario (
	id serial PRIMARY KEY,
	nome VARCHAR(30) NOT NULL,
	email VARCHAR(20) NOT NULL
);

CREATE TABLE interesses (
	id serial PRIMARY KEY,
	titulo_area VARCHAR(30) NOT NULL
);

CREATE TABLE user_interesses (
	fk_id_usuario INT,
	fk_id_areas INT,
	CONSTRAINT user_interesses_pk PRIMARY KEY(fk_id_usuario, fk_id_areas),
	CONSTRAINT fk_id_usuario FOREIGN KEY(fk_id_usuario) REFERENCES usuario(ID),
	CONSTRAINT fk_id_areas FOREIGN KEY(fk_id_areas) REFERENCES areas(ID)
);

------------------------------INSERINDO DADOS----------------------------------
INSERT INTO blogueiro (nome) VALUES (
	('Izaias Nascimento'),
	('Wellington Silva'),
	('José Carlos'),
	('Matheus Bastos')
);

INSERT INTO fk_id_areas (titulo) VALUES (
	('Qualidade de vida'),
	('Espiritualidade'),
	('Família'),
	('Diversão'),
	('Carreira'),
	('Vida social'),
	('Atividade física')
);