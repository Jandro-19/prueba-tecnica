CREATE DATABASE IF NOT EXISTS db_prueba_tecnica;
USE db_prueba_tecnica;
CREATE TABLE IF NOT EXISTS Articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titular VARCHAR(255) NOT NULL,
    contenido TEXT NOT NULLarticlesarticles
);
INSERT INTO Articles (titular, contenido) VALUES
    ('Artículo 1', 'Contenido del artículo 1'),
    ('Artículo 2', 'Contenido del artículo 2'),
    ('Artículo 3', 'Contenido del artículo 3'),
    ('Artículo 4', 'Contenido del artículo 4'),
    ('Artículo 5', 'Contenido del artículo 5');
