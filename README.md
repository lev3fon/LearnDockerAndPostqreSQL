Учусь работать с Docker, PostgreSQL, express, Sequelize.

Комадна для создания и запуска докера с БД
```docker run --name test-pg -p 6432:5432 -e POSTGRES_USER=test-user -e POSTGRES_PASSWORD=123 -e POSTGRES_DB=test-db -d postgres```