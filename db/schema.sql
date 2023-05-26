DROP DATABASE IF EXISTS movies;
CREATE DATABASE movies;
USE movies;


DROP TABLE IF EXISTS movieReviews;

CREATE TABLE movieReviews(
    movieName INT PRIMARY KEY,
    review VARCHAR(30) NOT NULL
)