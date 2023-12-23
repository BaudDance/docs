npm run build
scp -r ./build/* ubuntu@blog.keysking.com:~/docs
ssh ubuntu@blog.keysking.com "sudo rm -rf /www/wwwroot/docs.baud-dance.com/*"
ssh ubuntu@blog.keysking.com "sudo mv ~/docs/* /www/wwwroot/docs.baud-dance.com"