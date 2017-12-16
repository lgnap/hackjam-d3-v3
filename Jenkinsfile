pipeline {
  agent any
  stages {
    stage('Npm install') {
      steps {
        withNPM()
      }
    }
    stage('Launch tests') {
      steps {
        sh 'npm run'
      }
    }
  }
}