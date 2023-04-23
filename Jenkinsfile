pipeline {
  agent {
    docker {
      image 'node:18'
    }
  }

  environment {
    HOME = "${WORKSPACE}"
    NPM_CONFIG_PREFIX=".npm"
    NPM_CONFIG_CACHE="npm_cache"
  }

  options {
    timeout(time: 60, unit: 'MINUTES')
    ansiColor('xterm')
    disableConcurrentBuilds()
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
        sh 'test -e packages/@halkeye/gatsby-theme-nodeschool-example/public/index.html || exit 1'
      }
    }

    stage('Deploy') {
      when { branch 'master' }
      environment {
        GITHUB = credentials('github-halkeye')
        DEPLOY_URL = env.GIT_URL.replace("https://", "https://${GITHUB}@")
      }
      steps {
        sh '''
          git config --global user.email "jenkins@gavinmogan.com"
          git config --global user.name "jenkins.gavinmogan.com"

          git remote set-url origin "${DEPLOY_URL}"
          npm run deploy:github --workspace @halkeye/gatsby-theme-nodeschool-example 
        '''
      }
    }
  }
}
