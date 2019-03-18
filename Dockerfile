FROM node:5
WORKDIR /home/shareFiles
EXPOSE 3000

#Update system
RUN echo "Updating system..."
RUN apt-get update -y
RUN apt-get install apt-utils -y
RUN echo "System Updated"

#Install aptitude
RUN echo "Installing aptitude..."
RUN apt-get install aptitude -y
RUN echo "Aptitude installed."

#Install Forever (restart node)
#RUN npm install forever -g


#Install ExpressJS with EJS(templates) . (DEVELOP)
RUN echo "Install Express JS..."
RUN npm install express-generator -g
#RUN cd node/shareFiles
#RUN ls
#RUN express --view=ejs
#RUN echo "ExpressJS installed."

#Install Nodemon (DEVELOP)
#RUN npm install nodemon -g


#only for virtual box
RUN echo "Disabled bin-links" 
RUN npm config set bin-links false

#RUN aptitude install openssh-server