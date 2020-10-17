# Software Deployment (John-Ervin Laylo)
## ARM Template 
### Aufgabestellung
Erstellung eines ARM Templates welches:

* Einen Azure Storage Account (Free Tier) anlegt
* Eine Azure Web-App für node.js (Free Tier) anlegt
* Parameters verwendet
  
### Einlogen
Um mit der Arbeit mit Azure PowerShell/Azure CLI zu beginnen, melden Sie sich mit Ihren Azure-Zugangsdaten an.

```
az login
```

### Resource-group anlegen
Erstellen Sie eine Ressourcengruppe, die die Ressourcen enthalten.

```
az group create --name SoftwareDeploymentGroup --location "West Europe"
```

### Azure Storage Account anlegen
Zum erstellen des Storage-Accounts wird das template-file `azuredeploy.json` als Vorlage verwendet. Der Storage-Account wird in der Ressourcengruppe `SoftwareDeploymentGroup` angelegt.

```
az deployment group create --name laylostorage1 --resource-group SoftwareDeploymentGroup --template-file "azuredeploy.json"
```

### Web-App anlegen
Zum Anlegen der Web-App werden Paramters benötigt, die sich in dem Json-File `azuredeploy.parameters.json` befinden.

```
az deployment group create --name laylostorageandwebapp1 --resource-group SoftwareDeploymentGroup --template-file "azuredeploy.json" --parameters "azuredeploy.parameters.json"
```
### Webseite
https://softwaredeploymentweb.azurewebsites.net/


