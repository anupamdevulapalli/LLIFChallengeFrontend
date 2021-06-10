FROM  node:14.15

WORKDIR /LLIFInterviewAngular
ENV PATH /LLIFInterviewAngular/node_modules/.bin:$PATH

COPY package.json /LLIFInterviewAngular/package.json
RUN npm install
RUN npm install -g @angular/cli

COPY . /LLIFInterviewAngular
EXPOSE 4200
CMD ng serve --port 4200 --host 0.0.0.0
