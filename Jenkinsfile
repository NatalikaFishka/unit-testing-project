pipeline {
    agent any
    tools {
       nodejs 'Mine nodejs'
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
