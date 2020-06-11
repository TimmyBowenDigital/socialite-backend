DROP TABLE IF EXISTS posts;

CREATE TABLE IF NOT EXISTS posts (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , post_id varchar(50) NOT NULL
    , post_content varchar(500) NOT NULL
    , post_owner varchar(50) NOT NULL
    , post_postedTime datetime NOT NULL
    , post_comments varchar(50) NOT NULL
);