pipeline {
  agent {
    docker {
      image 'node:12'
    }
  }

  options {
    timeout(time: 20, unit: 'MINUTES')
    ansiColor('xterm')
  }

  stages {
    stage('Install') {
      steps {
        dir('example') {
          sh 'yarn install'
        }
      }
    }

    stage('Build') {
      steps {
        dir('example') {
          sh 'yarn clean'
          sh 'yar build:pp'
          sh 'test -e public/index.html || exit 1'
        }
      }
    }

    stage('Deploy') {
      when { branch 'master' }
      environment { GITHUB = credentials('github-halkeye') }
      steps {
        sh 'git config --global user.email "jenkins@gavinmogan.com"'
        sh 'git config --global user.name "jenkins.gavinmogan.com"'
        dir('example') {
          sh "npm run deploy:github -- -r ${env.GIT_URL.replace("https://", "https://${GITHUB_USR}:${GITHUB_PSW}@")}"
        }
      }
    }

  }
}
