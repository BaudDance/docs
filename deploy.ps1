npm run build
Remove-Item .\build.zip
tar -czvf build.tar.gz build/*
scp -r ./build.tar.gz ubuntu@ssh.baud-dance.com:~/docs.tar.gz
ssh ubuntu@ssh.baud-dance.com "sudo rm -rf ~/docs/*"
ssh ubuntu@ssh.baud-dance.com "sudo tar -zxvf docs.tar.gz -C ~/docs"
ssh ubuntu@ssh.baud-dance.com "sudo rm -rf /opt/1panel/apps/openresty/openresty/www/sites/docs/index/*"
ssh ubuntu@ssh.baud-dance.com "sudo mv ~/docs/build/* /opt/1panel/apps/openresty/openresty/www/sites/docs/index"