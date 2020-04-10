pipeline {
    agent any
    tools {
       nodejs 'default-nodejs'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm i'
            }
        }
        stage('test') {
            steps {
                sh 'npm run coverage'
            }
        }
    }
}
