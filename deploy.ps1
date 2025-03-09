npm run build
Remove-Item .\build.zip
Compress-Archive -Path .\build\* -DestinationPath .\build.zip
scp -r ./build.zip ubuntu@docs.baud-dance.com:~/docs.zip
# ssh ubuntu@docs.baud-dance.com "sudo rm -rf ~/docs/*"
ssh ubuntu@docs.baud-dance.com "sudo unzip -o ~/docs.zip -d ~/docs"
ssh ubuntu@docs.baud-dance.com "sudo rm -rf /opt/1panel/apps/openresty/openresty/www/sites/docs/index/*"
ssh ubuntu@docs.baud-dance.com "sudo mv ~/docs/* /opt/1panel/apps/openresty/openresty/www/sites/docs/index"