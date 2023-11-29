pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing dependencies...'
                    sh 'cd frontend && npm install'
                }
            }
        }

        stage('Test Frontend') {
            steps {
                script {
                    echo 'Testing frontend...'
                    sh 'cd frontend && npm run test'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    echo 'Building frontend...'
                    sh 'cd frontend && npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Add your deployment steps here
            }
        }
    }
}
