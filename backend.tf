terraform {
  backend "remote" {
    organization = "Vault1"
    workspaces {
      name = "Automation-learning"
    }
  }
}