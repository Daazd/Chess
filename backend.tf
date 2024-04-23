terraform {
  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "Vault1"
    workspaces {
      name = "learn-terraform-circleci"
    }
  }
}