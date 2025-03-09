npm run build
scp -r ./build/* ubuntu@docs.baud-dance.com:~/docs
ssh ubuntu@docs.baud-dance.com "sudo rm -rf /opt/1panel/apps/openresty/openresty/www/sites/docs/index/*"
ssh ubuntu@docs.baud-dance.com "sudo mv ~/docs/* /opt/1panel/apps/openresty/openresty/www/sites/docs/index"