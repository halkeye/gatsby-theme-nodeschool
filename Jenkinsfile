pipeline {
  agent {
    docker {
      image 'node:13'
    }
  }

  options {
    timeout(time: 60, unit: 'MINUTES')
    ansiColor('xterm')
    disableConcurrentBuilds()
  }

  stages {
    stage('Install') {
      steps {
        sh 'yarn install'
      }
    }

    stage('Lint') {
      steps {
        sh 'yarn lint'
      }
    }
    stage('Build') {
      steps {
        dir('packages/gatsby-theme-nodeschool') {
          sh 'yarn link'
        }
        dir('packages/gatsby-theme-nodeschool-example') {
          sh 'yarn link gatsby-theme-nodeschool'
          sh 'yarn clean'
          sh 'yarn build:pp'
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
        dir('packages/gatsby-theme-nodeschool-example') {
          sh "npm run deploy:github -- -r ${env.GIT_URL.replace("https://", "https://${GITHUB_USR}:${GITHUB_PSW}@")}"
        }
      }
    }

  }
}
