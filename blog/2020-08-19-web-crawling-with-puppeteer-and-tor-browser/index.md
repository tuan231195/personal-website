---
templateKey: blog-post
title: Web crawling with Puppeteer and Tor
date: 2020-08-19T01:29:05.270Z
image: ./drew-collins-nrqijf2nvhq-unsplash.jpg
tags:
  - JavaScript
  - Puppeteer
  - Kubernetes
---
Web crawling is sometimes essential to collect data that you need from external websites. However, certain websites will block your IP when you reach a specific threshold of request rates. An easy way to get around that is to set up a proxy server to rotate your IP address frequently. In this guide, we will be using Tor proxy to get around that.

**Prerequisites**:

* Minikube
* Kubernetes

We will be using Minikube for demonstration purposes. In real life, you will need to run it in a real Kubernetes cluster (Google Cloud Platform will give you some credits to run your cluster when you sign up).

1. Start minikube

```shell
minikube start
```

2. Create a proxy deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
    name: proxy-deployment
spec:
    replicas: 1
    selector:
        matchLabels:
            app: proxy
    template:
        metadata:
            name: proxy-pod
            labels:
                app: proxy
        spec:
            containers:
                - name: proxy
                  image: u1234x1234/torpool:1.0.2
                  args: ['--MaxCircuitDirtiness', '30', '--NewCircuitPeriod', '30', '--Tors', '10']
                  ports:
                      - name: proxy
                        containerPort: 9300
                  resources:
                      requests:
                          cpu: 300m

```

We will be using [this ](https://github.com/u1234x1234/torpool)docker image to create a pool of multiple tor instances (10 in this case). It will rotate the IP every 30 seconds.

The docker image exposes port 9300 for http proxy.

3. Create a service

Now we have a deployment, we will need to create a proxy service to expose the deployment:

```yaml
apiVersion: v1
kind: Service
metadata:
    name: proxy-service
    labels:
      app: proxy
spec:
    ports:
        - name: proxy
          port: 80
          targetPort: 9300
          protocol: TCP
    type: NodePort
    selector:
        app: proxy

```

Here, this proxy service will forward all traffic to its port 9300 to port 9300 of the deployment pods. The service is exposed on port 30000 of the cluster nodes.

4. Apply all kubernetes configs:

```shell
> kubectl apply -f .
deployment.apps/proxy-deployment created
service/proxy-service created
```

5. Access the new proxy using minikube

Access the minikube ip with `minikube ip` (In my case, it is `192.168.190.176`). After that, you will be able to test the HTTP proxy by:

```
> curl -x 192.168.190.176:30000 http://ipinfo.io/ip
23.92.125.158

> curl -x 192.168.190.176:30000 http://ipinfo.io/ip
185.220.101.8

> curl -x 192.168.190.176:30000 http://ipinfo.io/ip
185.220.100.253
```

You can see my IP addresses are rotated after each run.

6. Use the new proxy url in puppeteer:

```typescript
import puppeteer from 'puppeteer';

const proxyServer = '192.168.190.176:30000';
const browserOptions = {
    ignoreHTTPSErrors: true,
    headless: true,
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--lang=en-US,en;q=0.9',
        `--proxy-server=${proxyServer}`,
    ],
};

const browser = await puppeteer.launch(browserOptions);
```

Now you are ready to start crawling data.

**Happy coding!**
