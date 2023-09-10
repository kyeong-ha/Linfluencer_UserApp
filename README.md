# 🚀 Linfluencer Web Application


## Quick Start
1. Start the DB server (MySQLWorkBench)

```shell
$ mysql.server start # MacOS
$ net start mysql # Windows
$ service mysql start # ubuntu
```

1.1. Start the Prisma studio (helps with Database visualization)

```shell
cd _legacy_server && npx prisma studio
```

2. Start Private Application (localhost:5002)

```shell
$ cd _legacy_server && yarn dev #for development
$ cd _legacy_server && yarn build #for optimized production build
$ cd _legacy_server && yarn start #for production
```

3. Start Public Application (localhost:3000)

```shell
$ yarn dev #for development
$ yarn build #for optimized production build
$ yarn start #for production
```

## 프로젝트 구조 v1 (2023-09-09)


