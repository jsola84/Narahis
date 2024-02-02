DROP DATABASE narahis;

USE narahis;

CREATE TABLE camiseta (
idCamiseta INT,
nombre VARCHAR(100),
color VARCHAR(25),
precio INT
);

CREATE TABLE pantalone (
idPantalones INT,
nombrePantalon VARCHAR(100),
color VARCHAR(25),
precio INT
);

CREATE TABLE conjunto (
idConjunto INT,
nombreConjunto VARCHAR(100),
color VARCHAR(25),
precio INT
);

CREATE TABLE anillo (
idAnillo INT,
nombreAnillo VARCHAR(100),
metal VARCHAR(25),
sexo CHAR(1),
color VARCHAR(25),
precio INT
);

CREATE TABLE pulsera (
idPulsera INT,
nombrePulsera VARCHAR(100),
metal VARCHAR(25),
sexo CHAR(1),
color VARCHAR(25),
precio INT
);

CREATE TABLE conjuntoBisuteria (
idConjuntoBisuteria INT,
nombreConjuntoBi VARCHAR(100),
metal VARCHAR(25),
sexo CHAR(1),
color VARCHAR(25),
precio INT
);

