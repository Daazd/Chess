 provider "aws" {
   region = var.region

   default_tags {
     tags = {
       hashicorp-learn = "circleci"
     }
   }
 }

 resource "random_uuid" "randomid" {}

terraform {
  required_version = ">= 1.2.0" 
}


 resource "aws_s3_bucket" "game_assets_bucket" {
   tags = {
     Name = "Chess Game Assets Bucket"
   }

   bucket        = "${var.app}.${var.label}.${random_uuid.randomid.result}"
 }

 resource "aws_s3_bucket_object" "app" {
   key          = "index.html"
   bucket       = aws_s3_bucket.game_assets_bucket.id
   content      = file("./chess-game/public/index.html")
   content_type = "text/html"
 }

 resource "aws_s3_bucket_website_configuration" "terramino" {
   bucket = aws_s3_bucket.game_assets_bucket.bucket

   index_document {
     suffix = "index.html"
   }

   error_document {
     key = "error.html"
   }
 }