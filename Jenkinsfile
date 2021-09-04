pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-v $HOME:/home/jenkins'
        }
    }
    stages {
        stage('npm install') {
            steps {
                sh 'npm install'
            }
        }

        stage('deploy') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker image') {
            steps {
                sh 'docker build -t bestpractice:dev .'
            }
        }

        stage('deploy on production') {
            when {
                expression { env.GIT_BRANCH == 'origin/master' }
            }
            steps {
                sh 'docker stop $(docker ps --filter publish=3000/tcp -q)'
                sh 'docker run -it --rm -p 3000:3000 bestpractice:dev'
            }
        }
    }
}
