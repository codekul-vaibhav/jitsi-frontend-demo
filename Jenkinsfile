pipeline {
    agent any

    stages {

        stage('deploy') {
            steps {
                sh "npm run build"
            }
        }

        stage('Build Docker image'){
            steps {

                sh 'docker build -t bestpractice:dev .'
            }
        }


        stage('deploy on development'){
              when{
                    expression{ env.GIT_BRANCH =='origin/master'}
                  }

            steps {
                     sh 'docker stop $(docker ps --filter publish=3000/tcp -q)'
                     sh 'docker run -it --rm -p 3000:3000 bestpractice:dev'
            }
        }

        }
    }
}