pipeline {
  agent {
    label 'kubernetes'
  }
  options {
    buildDiscarder(logRotator(numToKeepStr:'10'))
    timeout(time: 15, unit: 'MINUTES')
    ansiColor('xterm')
  }
  environment {
    KEY = sh (
        script: "find_jira_key",
        returnStdout: true
      ).trim()
    BRANCH="${env.GERRIT_BRANCH}"
    REACT_APP_FIREBASE_API_KEY="AIzaSyB6YUpabBF4nqcpTl1Dab6Tp4YrkGcH7vc"
    REACT_APP_FIREBASE_AUTH_DOMAIN="softdesign-dev.firebaseapp.com"
    REACT_APP_FIREBASE_PROJECT_ID="softdesign-dev"
    REACT_APP_FIREBASE_STORAGE_BUCKET="softdesign-dev.appspot.com"
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID="1080306148002"
    REACT_APP_FIREBASE_APP_ID="1:1080306148002:web:45fcc314bde09157152dfb"
    REACT_APP_GOOGLE_ANALYTICS="UA-212281130-1"
    REACT_APP_API_URL="https://618a721734b4f400177c46d2.mockapi.io/api/v1/"
    PUBLIC_URL="/"
  }
  stages {
    // stage('generate .env') {
    //   steps {
    //     withCredentials([file(credentialsId: "quickstart-react-backoffice-${env.ENV_TYPE}", variable: 'envData')]) {
    //       writeFile file: ".env", text: readFile(envData)
    //     }
    //   }
    // }
    stage('Build App') {
      steps {
        nvm('v14.18'){
          sh 'node --version'
          sh 'npx yarn'
          sh 'npx yarn build'
          sh 'npx yarn lint:quiet'
        }
      }
    }
    stage('Build Dockerfile') {
      steps {
        sh "docker build -t quickstart/quickstart-react-backoffice:$BRANCH ."
        sh "docker tag quickstart/quickstart-react-backoffice:$BRANCH registry.softdesign-rs.com.br/quickstart/quickstart-react-backoffice:$BRANCH"
        sh "docker push registry.softdesign-rs.com.br/quickstart/quickstart-react-backoffice:$BRANCH"
      }
    }
    stage('Undeploy') {
      steps {
        build(job:'quickstart-react-backoffice-undeploy', parameters:[
          string(name: 'key', value:"$BRANCH")
        ])
      }
    }
    stage('Sleep 5s for wait delete') {
      steps {
        sh "sleep 5"
      }
    }
    stage('Create kubernetes enviroment') {
      steps {
        sh "kubectl apply -f ./k8s/$BRANCH/"
      }
    }
    stage('Wait and get URL\'s') {
      environment {
        POD_NAME = sh (
          script: "kubectl get pods -n quickstart --selector=app=quickstart-react-backoffice-$BRANCH -o=jsonpath='{.items[0].metadata.name}'",
          returnStdout: true
        ).trim()
        APP_URL = sh (
          script: "kubectl get ingress -n quickstart quickstart-react-backoffice-ingress-$BRANCH -o jsonpath='{.spec.rules[0].host}'",
          returnStdout: true
        ).trim()
      }
      steps {
        sh "kubectl wait --for=condition=ready --timeout=240s -n quickstart pod/$POD_NAME"
        sh 'printf "\033[1;32m Versão disponivel em: $APP_URL  \033[0m $1"'
        script {
          env.APP_URL = APP_URL
        }
      }
    }
    stage('Move card and comment') {
      steps {
        echo "------------------------------ ${env.APP_URL}"
        build(job:'devops-transicao-jira-deploy', parameters:[
          string(name: 'GERRIT_BRANCH', value: "$GERRIT_BRANCH"),
        ])
        build(job:'devops-develop-comment', parameters:[
          string(name: 'key', value:"$KEY"),
          string(name: 'URL', value:"${env.APP_URL}")
        ])
      }
    }
  }
}
