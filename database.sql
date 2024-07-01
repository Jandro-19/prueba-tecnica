CREATE DATABASE IF NOT EXISTS db_prueba_tecnica;
USE db_prueba_tecnica;
CREATE TABLE IF NOT EXISTS Articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titular VARCHAR(255) NOT NULL,
    contenido TEXT NOT NULLarticlesarticlesidtitularcontenido
);
INSERT INTO Articles (titular, contenido) VALUES
    ('Los 5 mejores fichajes de la temporada', 'Descubre quiénes son los jugadores que están haciendo la diferencia en sus nuevos equipos esta temporada.'),
    ('El secreto detrás del éxito del equipo campeón', 'Analizamos las estrategias tácticas y el trabajo en equipo que llevaron a este equipo a levantar el trofeo.'),
    ('Joven promesa del fútbol rompe récord de goles', 'Con tan solo 18 años, este jugador ha establecido un nuevo récord de goles en una temporada histórica.'),
    ('Entrevista exclusiva con el entrenador estrella', 'El entrenador revela sus secretos para mantener la motivación y el rendimiento máximo de sus jugadores.'),
    ('El impacto del VAR en el fútbol moderno', 'Exploramos cómo la tecnología ha cambiado las reglas del juego y la controversia que ha generado en la comunidad futbolística.');

