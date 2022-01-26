# Myria Strapi CMS

## SSH to EC2

Steps to SSH to EC2

- Step 1: Make sure your ssh public key have been added to EC2

- Step 2: Update `$HOME/.ssh/config` file on your local machine

  ```bash
  HOST prod-strapi
  HostName 54.254.10.155
  User ubuntu
  IdentityFile ~/.ssh/<your-ssh-private-key>
  ```

- Step 3: SSH to EC2

  ```bash
  ssh prod-strapi
  ```

## Production Deployment

Steps to deploy new code to production

- Step 1: Make sure you merged new code into the `main` branch
- Step 2: SSH to EC2
- Step 3: On EC2, run the following commands:

  ```bash
  cd myria-cms-strapi
  git checkout main
  git pull
  docker-compose up -d --build
  ```

## Note about .env file

On EC2 instance, `$HOME/myria-cms-strapi/.env` contains sensitive information such as Database username & password. This file should NEVER leave outside of the EC2 instance.
