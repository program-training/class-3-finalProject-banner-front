pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                script {
                    def pullRequestBranch = env.GITHUB_PR_SOURCE_BRANCH
                    checkout([$class: 'GitSCM', branches: [[name: "*/${pullRequestBranch}"]], userRemoteConfigs: [[url: 'https://github.com/program-training/class-3-finalProject-ERP-back.git']]])
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js and npm
                    sh 'curl -sL https://deb.nodesource.com/setup_14.x | bash -'
                    sh 'apt-get install -y nodejs'
                    
                    // Install project dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Client Build') {
            steps {
                script {
                    sh 'echo "Building..."'
                    sh 'docker build -t banner-front .'
                }
            }
        }
        
        stage('Linting') {
            steps {
                script {
                    // Run ESLint
                    sh 'npx eslint .'
                }
            }
        }
    }

    post {
        success {
            script {
                echo 'Linting passed. You may now merge.'
                setGitHubPullRequestStatus(
                    state: 'SUCCESS',
                    context: 'class3_banner_front_lint',
                    message: 'Build passed',
                )
            }
        }
        failure {
            script {
                echo 'Pipeline failed. Blocking pull request merge.'
                setGitHubPullRequestStatus(
                    state: 'FAILURE',
                    context: 'class3_banner_front_lint',
                    message: 'Build failed. Run npm run build to see errors',
                )
            }
        }
    }
}
