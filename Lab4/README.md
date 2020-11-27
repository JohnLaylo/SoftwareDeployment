# Software Deployment Lab3
## Von John-Ervin Laylo
### Commands

`az login `

Wenn man keine RessourceGroup kann man eine neu erstellen:

`az group create --name myresourcegroup --location eastus`

AKS-cluster erstellen mit dem namen myaks:

`az aks create -g softwareDeploymentGroup -n myaks --node-count 1`

Um kubectl für die Verbindung mit Ihrem Kubernetes-Cluster zu konfigurieren, verwenden Sie den Befehl az aks get-credentials:

`az aks install-cli`

`az aks get-credentials --resource-group softwareDeploymentGroup --name myaks`

Man muss die Dateien mysql-deployment.yaml und die wordpress-deployment.yaml auf portal.azure.com hochladen.

Verbinden zum Account:

`az account set --subscription ******************************`

`az aks get-credentials --resource-group softwareDeploymentGroup --name myaks`

Die Bereitstellung des WordPress-Pods und des MySQL-Pods:

`kubectl apply -f /home/laylo/mysql-deployment.yaml`

`kubectl apply -f /home/laylo/wordpress-deployment.yaml`

Zum kontrollieren kann man die IP über den Command abrufen und dann die external IP verwenden:

`kubectl get services wordpress`
IP: 51.137.9.68
