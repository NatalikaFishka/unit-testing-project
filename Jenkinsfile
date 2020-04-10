pipeline {
    agent any
    tools {
       nodejs 'Mine nodejs'
    }
    stages {
        stage('build') {
            steps {
                bat 'npm i'
            }
        }
        stage('test') {
            steps {
                bat 'npm run coverage'
            }
        }
    }
}
