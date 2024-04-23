terraform {
  backend "remote" {
    organization = "Vault1"
    workspaces {
      name = "learn-terraform-circleci"
    }
  }
}