pipeline {
    agent any

    options {
        timeout(time: 1, unit: 'HOURS')
    }

    triggers {
        pollSCM('*/15 15-20 * * *')
    }

    stages{

        stage('build it') {
            steps {
                ansiColor('xterm') {
                    sh 'npm ci'
                    sh 'npm run test'
                }
            }
        }
    }

    post {
        success {
            sh 'echo All good in the hood!'
        }
        failure {
            sh 'failed for reasons'
        }
    }
}