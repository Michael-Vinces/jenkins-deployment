pipeline {
    agent any

    tools {
        nodejs 'Node18'
        dockerTool 'Dockertool'
    }

    stages {
        stage('Clonar Repositorio') {
            steps {
                checkout scm
            }
        }
        stage('Construir Imagen Docker') {
            steps {
                sh 'docker build -t my-app:latest .'
            }
        }
        stage('Desplegar Contenedor') {
            steps {
                sh '''
                    docker stop my-app || true
                    docker rm my-app || true
                    docker run -d --name my-app -p 3000:3000 my-app:latest
                '''
            }
        }
    }
}
