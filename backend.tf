terraform {
  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "Vault1"
    workspaces {
      name = "Automation-learning"
    }
  }

  cloud {
    organization = "Vault1"

    workspaces {
      name = "Automation-learning"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.4.0"
    }
  }

  required_version = ">= 1.2.0"
}