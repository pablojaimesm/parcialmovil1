FROM postgres:16.2-alpine3.19
ADD db/init.sql /docker-entrypoint-initdb.d
RUN chmod a+r /docker-entrypoint-initdb.d/*
EXPOSE 5432