export const config = {
  "dev": {
    "username": "udagramdev",
    "password": "udagramdev",
    "database": "udagramdev",
    "host": "udagramdev.c0q7jt1y7lps.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_reigion": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udacity-bucket-nd9990-filestore"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "c0q7jt1y7lps"
  }

}
