npm run build
ssh devops@51.250.107.216 'rm -rf /home/devops/front-prod'
scp -r ./build devops@51.250.107.216:/home/devops/front-prod