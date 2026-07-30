--HTTPD--

FROM httpd:latest
COPY . /usr/local/apache2/htdocs/

--NGNIX--

FROM nginx:latest
COPY . /usr/share/nginx/html

--PYTHON--

FROM python:3.11
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python","app.py"]

--JAVA--

FROM openjdk:17-jdk
WORKDIR /app
COPY target/myapp.jar app.jar
EXPOSE 8080
CMD ["java","-jar","app.jar"]

--NODEJS--

FROM node:20
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]
