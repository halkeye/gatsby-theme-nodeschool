pipeline {
  agent {
    docker {
      image 'node:16'
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
    stage('Yarn') {
      steps {
        sh 'npm install -g yarn'
        // sh 'yarn plugin import workspace-tools'
        // sh 'yarn set version berry'
      }
    }

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

    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }

    stage('Build') {
      steps {
        sh 'yarn build'
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
          yarn workspace @halkeye/gatsby-theme-nodeschool-example run deploy:github
        '''
      }
    }
  }
}
