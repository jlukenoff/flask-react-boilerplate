# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster AS build

# Set the working directory in the container to /app
WORKDIR /app

# Install nodejs and npm
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy the client directory into the container
COPY client ./client

# Build the client
WORKDIR /app/client
RUN npm install && npm run build

# Python build stage
FROM python:3.9-slim-buster

WORKDIR /app

# Set an environment variable for the virtualenv
ENV VIRTUAL_ENV=/opt/venv
RUN python -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# Copy just the requirements.txt first to leverage Docker cache
COPY ./requirements.txt /app/requirements.txt

# Install any needed packages specified in requirements.txt into the virtualenv
RUN pip install --no-cache-dir -r requirements.txt

# Copy the built client from the previous stage
COPY --from=build /app/client/dist ./client/dist

# Add the remaining current directory contents into the container at /app
COPY . /app

# Use an environment variable for the port
ENV PORT 8000

# Expose the port
EXPOSE $PORT

RUN chmod +x /app/entrypoint.sh

# Run the application when the container launches
ENTRYPOINT ["/app/entrypoint.sh"]
