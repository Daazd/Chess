terraform {
  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "Vault1"
    workspaces {
      prefix = "Automation-learning"
    }
  }
}