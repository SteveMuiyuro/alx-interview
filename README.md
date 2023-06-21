# Ping A Doctor App

This was the application deployment project for our castoneproject. In this
project, we configured a web application
to serve a WSGI Flask app running through Gunicorn. Additionally, we set up an
Upstart script to keep the application running on server reboots.

## Tasks :page_with_curl:

- **0. Set up development with Python**

  - In this task, I configured the file `web_flask/0-hello_route.py` from my
    [Ping A Doctor](https://github.com/SteveMuiyuro/Project_Ping_A_Doctor) to serve content
    on the route `/Project_Ping_A_Doctor/`, running on port `5000`.

- **1. Set up production with Gunicorn**

  - This task involved setting up a production environment, installing and configuring
    Gunicorn to serve the same file obove.

- **2. Serve a page with Nginx**

  - [2-app_server-nginx_config](./2-app_server-nginx_config): Nginx configuration file
    proxying requests on the route `/Project_Ping_A_Doctor/` to the Gunicorn app running on
    port `5000`.

- **3. Add a route with query parameters**

  - [3-app_server-nginx_config](./3-app_server-nginx_config): Nginx configuration file
    proxying requests on the route `/Project_Ping_A_Doctor/`to the
    Gunicorn app running on port `5000`.

- **4. Let's do this for your API**

  - In this task, I configured the API from my [Ping_A_Doctor_App](./https://github.com/SteveMuiyuro/Project_Ping_A_Doctor) to run on Gunicorn.
  - [4-app_server-nginx_config](./4-app_server-nginx_config): Nginx configuration file
    that proxies requests on the AirBnB API to the corresponding Gunicorn app.

- **5. Serve your AirBnB clone**

  - In this task, I configured the complete AirBnB app from [Ping*A* Doctor_App](https://github.com/SteveMuiyuro/Project_Ping_A_Doctor) to run on Gunicorn and be served through Nginx.
  - [5-app_server-nginx_config](./5-app_server-nginx_config): Nginx configuration file
    configured to serve the static assets from `web_dynamic/static/` on the Gunicorn AirBnB
    app.

- **6. Deploy it**

  - [gunicorn.conf](./gunicorn.conf): Configuration file for an Upstart script that starts a
    Gunicorn process bounded to port 5003 that serves the content from task 5.
  - The Gunicorn process spawns three worker processes and logs errors to `/tmp/airbnb-error.log`,
    access to `/tmp/airbnb-access.log`.

- **7. No service interruption**
  - [4-reload_gunicorn_no_downtime](./4-reload_gunicorn_no_downtime): Bash script that gracefully
    reloads Gunicorn.
