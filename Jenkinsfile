pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                script {
                    def pullRequestBranch = env.GITHUB_PR_SOURCE_BRANCH
                    checkout([$class: 'GitSCM', branches: [[name: "*/${pullRequestBranch}"]], userRemoteConfigs: [[url: 'https://github.com/program-training/class-3-finalProject-banner-front.git']]])
                }
            }
        }
        stage('client lint') {
            steps {
                script {
                    dir('client') {
                        sh 'echo "linting..."'
                        sh 'npm lint'
                    }
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
                    message: 'lint passed',
                )
            }
        }
        failure {
            script {
                echo 'Pipeline failed. Blocking pull request merge.'
                setGitHubPullRequestStatus(
                    state: 'FAILURE',
                    context: 'class3_banner_front_lint',
                    message: 'lint failed. Run npm run lint to see errors',
                )
            }
        }
        always {
            script {
                cleanWs()
            }
        }
    }
}
