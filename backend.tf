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
}