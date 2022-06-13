pipeline {
  agent {
    label 'kubernetes'
  }
  options {
    buildDiscarder(logRotator(numToKeepStr:'10'))
    timeout(time: 5, unit: 'MINUTES')
    ansiColor('xterm')
  }
  parameters {
    string(name: 'key', defaultValue: '', description: '')
  }
  stages {
    stage('Run delete') {
      environment {
        lower_key = sh (
          script: 'tr [A-Z] [a-z] <<< "$key"',
          returnStdout: true
        ).trim()
        BRANCH = "$lower_key"
      }
      steps {
        sh "kubectl delete -n quickstart svc quickstart-react-service-$BRANCH | true"
        sh "kubectl delete -n quickstart ingress quickstart-react-ingress-$BRANCH | true"
        sh "kubectl delete -n quickstart deploy quickstart-react-deployment-$BRANCH | true"
      }
    }
  }
}
