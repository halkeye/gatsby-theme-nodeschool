pipeline {
  agent {
    docker {
      image 'node:16'
    }
  }

  options {
    timeout(time: 60, unit: 'MINUTES')
    ansiColor('xterm')
    disableConcurrentBuilds()
  }

  stages {
    stage('Lerna') {
      steps {
        sh 'npm install -g lerna'
      }
    }

    stage('Install') {
      steps {
        sh 'lerna bootstrap'
      }
    }

    stage('Lint') {
      steps {
        sh 'lerna run lint'
      }
    }

    stage('Test') {
      steps {
        sh 'lerna run test'
      }
    }

    stage('Build') {
      steps {
        sh 'lerna run build'
        sh 'lerna run build:pp'
        sh 'test -e packages/gatsby-theme-nodeschool-example/public/index.html || exit 1'
      }
    }

    stage('Deploy') {
      when { branch 'master' }
      environment {
        GITHUB = credentials('github-halkeye')
        GIT_URL = env.GIT_URL.replace("https://", "https://${GITHUB_USR}:${GITHUB_PSW}@")
      }
      steps {
        sh 'git config --global user.email "jenkins@gavinmogan.com"'
        sh 'git config --global user.name "jenkins.gavinmogan.com"'
        dir('packages/gatsby-theme-nodeschool-example') {
          sh 'npm run deploy:github -- -r "$GIT_URL"'
        }
      }
    }

  }
}
