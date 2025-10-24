# Infrastructure Documentation for Microblog Application

This README file provides an overview of the infrastructure setup for the Microblog application, including instructions for using Docker and Kubernetes.

## Table of Contents

1. [Docker Setup](#docker-setup)
2. [Kubernetes Deployment](#kubernetes-deployment)
3. [Environment Variables](#environment-variables)
4. [Troubleshooting](#troubleshooting)

## Docker Setup

To run the Microblog application using Docker, follow these steps:

1. **Build the Docker Images**:
   Navigate to the `infra/docker` directory and run the following commands:

   ```bash
   docker build -t microblog-backend -f Dockerfile.backend .
   docker build -t microblog-frontend -f Dockerfile.frontend .
   ```

2. **Run the Docker Containers**:
   After building the images, you can run the containers using:

   ```bash
   docker run -d -p 5000:5000 microblog-backend
   docker run -d -p 3000:3000 microblog-frontend
   ```

3. **Access the Application**:
   - The backend API will be available at `http://localhost:5000`.
   - The frontend application will be available at `http://localhost:3000`.

## Kubernetes Deployment

To deploy the Microblog application on a Kubernetes cluster, follow these steps:

1. **Apply the Deployment Configuration**:
   Navigate to the `infra/k8s` directory and run the following command:

   ```bash
   kubectl apply -f deployment.yaml
   ```

2. **Expose the Services**:
   After deploying, expose the services using:

   ```bash
   kubectl apply -f service.yaml
   ```

3. **Access the Application**:
   Use `kubectl get services` to find the external IP address of the services and access the application.

## Environment Variables

Make sure to set the necessary environment variables for both the backend and frontend applications. These may include database connection strings, API keys, and other configuration settings.

## Troubleshooting

- If you encounter issues with Docker, ensure that Docker is running and that you have the necessary permissions.
- For Kubernetes, check the status of your pods using `kubectl get pods` and view logs with `kubectl logs <pod-name>` for debugging.

For further assistance, refer to the documentation of Docker and Kubernetes or contact the development team.