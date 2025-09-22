npm run build
scp -r ./build/* ubuntu@ssh.baud-dance.com:~/docs
ssh ubuntu@ssh.baud-dance.com "sudo rm -rf /opt/1panel/apps/openresty/openresty/www/sites/docs/index/*"
ssh ubuntu@ssh.baud-dance.com "sudo mv ~/docs/* /opt/1panel/apps/openresty/openresty/www/sites/docs/index"