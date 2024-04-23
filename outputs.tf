output "endpoint" {
    value = "${aws_s3_bucket.game_assets_bucket.bucket_domain_name}/index.html"
}