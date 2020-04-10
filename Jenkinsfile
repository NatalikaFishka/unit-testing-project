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
        post {
          always {
              publishHTML target: [
                allowMissing         : false,
                alwaysLinkToLastBuild: false,
                keepAll             : true,
                reportDir            : 'coverage',
                reportFiles          : 'index.html',
                reportName           : 'Test Report'
              ]
              archiveArtifacts artifacts: 'coverage',
            }
        }
      }
    }
}
