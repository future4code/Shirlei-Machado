##julian_shirlei_machado

**Exercicio 1**

* a) O comando DROP é usado para remover uma coluna.
* b) Altera o gender para sex com o maximo 6 caracteres
* c)O gender volta a ser gender e com 255 caracteres. 
* d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

**Exercício 2**

UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123";

* a)UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "2020-02-10"
WHERE id = "003";

* b)UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

* c)UPDATE Actor SET name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

* d)

**Exercício 3**

* a)DELETE FROM Actor WHERE name = "Fernanda Montenegro";
* b)DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;

**Exercício 4**

* a)SELECT MAX(salary) FROM Actor
* b) SELECT MIN(salary) FROM Actor WHERE gender = "female"
* c) SELECT COUNT(*) FROM Actor WHERE gender = "female"
* d)SELECT SUM(salary) FROM Actor

**Exercício 5**
* a) Ele mostra a soma por genero e agrupa mostrando os generos disposniveis e seus respectivos valores. 

Essa é a ordem correta. 
SELECT * FROM Actor 
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;

* b)SELECT id, name FROM Actor
ORDER BY name DESC;

* C)SELECT * FROM Actor
ORDER BY salary;

* d)SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

* e)SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

**Exercício 6**
 * a) ALTER TABLE Movie ADD playing_limit_date DATE;
 * b)ALTER TABLE Movie CHANGE rating rating FLOAT;
 * c)UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001"
 * d)DELETE FROM Movie WHERE id = "001"
 
**Exercício 7**
* a) 3
* b)9
* c)0
* d)3
* e)10
* f)8

**Exercício 8**
* a)SELECT * FROM Movie ORDER BY title;
* b)SELECT * FROM Movie ORDER BY title LIMIT 5;
* c)SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
* d)SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
 


