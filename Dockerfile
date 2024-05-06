FROM openjdk:8
EXPOSE 8080
ADD target/resume.jar resume.jar
ENTRYPOINT ["java","-jar","/resume.jar"]
