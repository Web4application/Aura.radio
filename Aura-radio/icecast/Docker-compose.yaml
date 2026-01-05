version: "3.8"

services:
  icecast:
    build: ./icecast
    container_name: icecast
    ports:
      - "8000:8000"   # Icecast streaming
      - "8001:8001"   # Admin page
    restart: unless-stopped

  ws-server:
    build: ./ws-server
    container_name: ws-server
    ports:
      - "9000:9000"
    restart: unless-stopped

  web:
    image: nginx:alpine
    container_name: aura-web
    volumes:
      - ./web:/usr/share/nginx/html
    ports:
      - "8080:80"
    restart: unless-stopped
