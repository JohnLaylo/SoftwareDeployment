# Software Deployment Lab3
## Von John-Ervin Laylo
### Task 
Setzen Sie die Software „Wordpress“ mit externer MySQL DB in 2 Containern auf. Diese Aufgabe besteht aus 2 Teilen. In den Teilen wird jeweils die gleiche Software mittels container zu Verfügung gestellt, wobei die container in Teil 2 selbst zu erstellen sind.

#### Teil1
Im Teil1 befindet sich der docker-compose.yml Datei.
Compose ist ein Werkzeug zur Definition und Ausführung von Multi-Container-Docker-Anwendungen.
Mit Compose verwendet man eine YAML-Datei zur Konfiguration der Dienste der Anwendung. 
In dem Compose wird eine WordPress-Seite konfiguriert.

##### docker-compose.yml
Mit `Run docker-compose up` startet und führt es die gesamte Anwendung aus.

#### Teil2
Beim Teil 2 werden eigene Images (MySql und Wordpress) erstellt von `debain:jessie` für eine Wordpress container installation.

##### SQL
In dem Dockerfile wird der Datenbankname, der user und das Passwort definiert.
Es wird dann ein mysql server installiert, der Entrypoint gesetzt und der Port definiert.

Um es zu deployn wird der Command `docker build -t name .` benutzt, wobei `name` der Name vom Image ist. (In diesem Bsp: sql)

##### Wordpress
In dem Dockerfile wird Wordpress installiert,wlches apache und php auch inkludiert hat.
Es wird auch wieder der Port und der Entrypoint definiert.

Um es zu deployn wird der Command `docker build -t name .` benutzt, wobei `name` der Name des Images ist. (In diesem Bsp: wp)

##### docker-compose.yml
In dem File ist zu beachten, dass man die Richtigen Ports und Image Namen verwendet, die man gebuildet hat.

Mit `Run docker-compose up` startet und führt es die gesamte Anwendung aus. 
