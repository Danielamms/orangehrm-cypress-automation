pipeline {
  agent any

  options {
    timestamps()
    disableConcurrentBuilds()
  }

  parameters {
    booleanParam(
      name: 'RUN_REGRESSION',
      defaultValue: false,
      description: 'Executa a suite completa de regression'
    )
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Smoke') {
      steps {
        bat 'npm run cy:smoke'
      }
    }

    stage('Regression (optional)') {
      when {
        expression { return params.RUN_REGRESSION }
      }
      steps {
        bat 'npm run cy:regression'
      }
    }

    stage('Allure') {
      steps {
        bat 'npm run allure:generate'
      }
    }

    stage('Archive Artifacts') {
      steps {
        archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true
        archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
        archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
        archiveArtifacts artifacts: 'cypress/videos/**', allowEmptyArchive: true
      }
    }
  }

  post {
    always {
      echo 'Pipeline finalizada. Verifique os artifacts e o relatório Allure.'
    }
    failure {
      echo 'Falha detectada. Validar screenshots e logs dos estágios.'
    }
  }
}
