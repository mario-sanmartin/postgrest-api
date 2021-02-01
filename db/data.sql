CREATE DATABASE mascotasapi;

CREATE TABLE mascotas(
    id SERIAL PRIMARY KEY,
    nombre varchar(30),
    edad integer,
    raza varchar(30)
);

INSERT INTO mascotas (nombre,edad,raza) VALUES
    ('Blue',9,'Labrador'),
        ('Luna',7,'Kiltro'),
            ('Atom',6,'Kiltro'),
                ('Sauronbebe',1,'Kiltro');