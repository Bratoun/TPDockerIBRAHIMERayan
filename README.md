# TPDockerIBRAHIMERayan

## Manipulation de la base des conteneurs

### 1. Vérifier la version de Docker

**Commande :**

```bash
docker --version
```

**Résultat :**

```text
Docker version 29.9.2, build a82e528
```

### 2. Lister les images disponibles sur la machine

**Commande :**

```bash
docker images
```

**Résultat :**

```text
IMAGE                ID             DISK USAGE   CONTENT SIZE   EXTRA
hello-world:latest   eb84fdc6f2a3        5.2kB             0B
```

### 3. Télécharger une image depuis Docker Hub

**Commande :**

```bash
docker pull hello-world
```

**Résultat :**

```text
Using default tag: latest
latest: Pulling from library/hello-world
58dee6a49ef1: Pull complete
Digest: sha256:c567b231f65614688711a75f31518a064258a51d442117a3e771a3a8fdba78ef
Status: Downloaded newer image for hello-world:latest
docker.io/library/hello-world:latest
```

### 4. Exécuter un conteneur à partir de l'image

**Commande :**

```bash
docker run hello-world
```

**Résultat :**

```text
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (arm64v8)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

### 5. Lister les conteneurs en cours d'exécution

**Commande :**

```bash
docker ps
```

**Résultat :**

```text
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

### 6. Lister tous les conteneurs (actifs et stoppés)

**Commande :**

```bash
docker ps -a
```

**Résultat :**

```text
CONTAINER ID   IMAGE         COMMAND    CREATED         STATUS                     PORTS     NAMES
d583cb5c2829   hello-world   "/hello"   3 seconds ago   Exited (0) 2 seconds ago             priceless_hofstadter
```

### 7. Supprimer un conteneur

**Commande :**

```bash
docker rm <ID_conteneur>
```

**Résultat :**

```text
d583cb5c2829
```

### 8. Supprimer une image

**Commande :**

```bash
docker rmi <ID_image>
```

**Résultat :**

```text
Untagged: hello-world:latest
Untagged: hello-world@sha256:c567b231f65614688711a75f31518a064258a51d442117a3e771a3a8fdba78ef
Deleted: sha256:eb84fdc6f2a3a064445bb2a2fbc89c515666c428d6c96b6ab68a4cd218819688
Deleted: sha256:f8975ecc6f0e7f1d7a047a95402220019d4fbf9edd08161c256cf2d4f73009e4
```

## Création d'un serveur web avec Docker

### 1. Télécharger l'image officielle Nginx

**Commande :**

```bash
docker pull nginx
```

**Résultat :**

```text
Using default tag: latest
latest: Pulling from library/nginx
acd43e9bebc3: Pull complete
c19b54656735: Pull complete
998fb033610b: Pull complete
34a564bc5d28: Pull complete
3559a01b6a80: Pull complete
c64233207369: Pull complete
1f7e08c0f6ab: Pull complete
Digest: sha256:165ddde8751e75a1c907d24ef10d9f6deb08b57e0fe56caf67512486aff76d82
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest
```

### 2. Lancer un conteneur Nginx en arrière-plan

**Commande :**

```bash
docker run -d -p 8080:80 --name mon_nginx nginx
```

**Résultat :**

```text
06a8b907f74900fb45295042d9e4e82411a4fc8d6bd751ce54dc4537264223f7
```

### 3. Vérifier que le conteneur est actif

**Commande :**

```bash
docker ps
```

**Résultat :**

```text
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                                     NAMES
06a8b907f749   nginx     "/docker-entrypoint.…"   2 minutes ago   Up 2 minutes   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   mon_nginx
```

### 4. Accéder à la page par défaut de Nginx

Ouvrez `http://localhost:8080` dans votre navigateur.

**Résultat :**

![Page par défaut de Nginx](image.png)

### 5. Arrêter le conteneur

**Commande :**

```bash
docker stop mon_nginx
```

**Résultat :**

```text
mon_nginx
```

### 6. Supprimer le conteneur

**Commande :**

```bash
docker rm mon_nginx
```

**Résultat :**

```text
mon_nginx
```