# This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Docker
see code in file `Dockerfile`

To run app through docker in dev mode enter the below command in terminal from the app’s directory: 
``
$ docker build ./
``

Then after it builds run the below command (you can type $ docker images to find the image id).
```
$ docker images
$ pwd
$ docker -it -p 3000:3000 -v [our path here/src:/frontend/src] [image id]
```

Our app running on localhost:3000 and if you make changes in the code on your local machine it will automatically reload! This is done by sharing volumes using the -v Tag

To build a production image run:

```
 $ docker build ./ --build-arg app_env=production
```

Then to run the production image:
```
$ docker run -i -t -p 3000:3000 [image id]
```

### Explanation Dockerfile

• FROM node:8.11.3 as build-deps-custom => start from node base image. We can name it by adding 'as' command
• ENV NPM_CONFIG_LOGLEVEL warn => less messages during docker build
• ARG app_env => allows app_env to be set during build (defaults to empty string)
• ENV APP_ENV $app_env => sets an environment variable to app_env argument, this way the variable will persist in the container for use in code
• RUN mkdir -p /frontend => creates a folder to add code into
• WORKDIR /frontend => all subsequent commands will now be run from inside this folder
• COPY . ./ => copy all the code in the local frontend directory into the container’s working directory
• RUN npm install => install dependencies (Make sure to add node_modules to your .dockerignore incase you accidentally install locally.)
• CMD if ... => If the arg_env was set as production then this will install http-server, and then build & serve optimized static files. Otherwise uses create-react-app’s hot reloading tool (basically webpack—watch)
• Expose 3000 => The create-react-app runs on port 3000 by default