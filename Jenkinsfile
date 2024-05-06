pipeline {
    agent any
    tools{
        maven 'maven3'
    }
    stages{
        stage('Build Maven'){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/AneeshMSomayaji/ResumeForge']]])
                bat 'mvn clean install'
            }
        }
        stage('Build docker image'){
            steps{
                
                    bat 'docker build -t aneeshmsomayaji/resume .'
                
            }
        }
        stage('Push image to Hub'){
            steps{
                   bat 'docker login -u aneeshmsomayaji -p Madhu@0708'
                   bat 'docker push aneeshmsomayaji/resume'
                }
        }
        stage('Docker pull'){
            steps{
                bat 'docker pull aneeshmsomayaji/resume'
            }
        }
        stage('Docker run'){
            steps{
                bat 'docker run -p 8080:8081 aneeshmsomayaji/resume'
            }
        }
        
    }
}
