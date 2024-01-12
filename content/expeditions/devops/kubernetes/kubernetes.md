---
title: Kubernetes
description: Kubernetes container orchestration platform
tags:
  - containers
  - MOC
publish: true
---

Kubernetes, often abbreviated as **K8s**, is a popular *open-source* *container orchestration* platform that automates the *deployment*, *scaling*, and *management* of *containerized applications*. Originally *developed by Google*, it has gained widespread adoption due to its ability to simplify the complexities of containerized environments. At its core, Kubernetes provides a framework for *automating* the *deployment and scaling* of application containers across *clusters of hosts*. It abstracts away the underlying infrastructure, allowing developers to focus on building and deploying applications without worrying about the intricacies of the infrastructure.

Kubernetes operates based on a master-node architecture, where the *master node*, which is now termed as the *control plane* manages the overall cluster and coordinates communication with worker nodes. *Worker nodes*, on the other hand, host the containers (in units called pods) and execute the tasks assigned by the master. Kubernetes supports features like automatic load balancing, rolling updates, and self-healing, making it a powerful tool for managing containerized workloads at scale.

> [!INFO]- No more MASTERS - Moving towards a more inclusive language
> The industry-wide movement toward inclusive language responds to the recognition that certain terms in technology may carry implicit biases. A notable aspect is the shift away from terms like "master" and "slave" to more neutral alternatives, promoting a more welcoming and inclusive environment. This effort, embraced by many organizations and communities, aims to eliminate language that could be exclusionary and contributes to building a diverse and respectful culture within the tech

## Comparing BMs, VMs and Containers

![](https://patfolio-assets.s3.ap-south-1.amazonaws.com/BMs-VMs-Containers.png)

|  | Bare Metal (BMs) | Virtual Machines (VMs) | Containers |
| ---- | ---- | ---- | ---- |
| **Isolation** | Runs directly on physical hardware without an additional layer. | Runs on a hypervisor, providing isolation from the physical hardware. | Runs on a shared operating system kernel, providing lightweight isolation. |
| **Resource Overhead** | Minimal, as there is no virtualization layer. | Moderate to high, as VMs include a full OS and hypervisor overhead. | Low, as containers share the host OS kernel and do not require a full OS. |
| **Resource Efficiency** | Maximum resource utilization but lacks flexibility. | Moderate resource efficiency due to the hypervisor layer. | Highly efficient use of resources, providing rapid scalability. |
| **Performance** | Generally provides high performance but lacks flexibility in resource allocation. | Slightly reduced compared to bare metal due to virtualization overhead. | Minimal overhead, resulting in near-native performance. |
| **Deployment Time** | Longer deployment time due to manual setup and configuration. | Faster deployment compared to bare metal, but slower than containers. | Almost instant deployment due to lightweight nature and minimal setup. |
| **Isolation** | Complete isolation. | Strong isolation between VMs. | Lightweight isolation, sharing the host OS kernel. |
| **Scalability** | Limited scalability compared to VMs and containers. | Offers good scalability with the ability to run multiple VMs on a single physical host. | Highly scalable, allowing the deployment of numerous containers on a single host. |
| **Deployment Speed** | Slow deployment. | Faster deployment than bare metal but slower than containers. | Almost instant deployment. |
| **Use Case** | Suitable for resource-intensive applications that require direct access to hardware. | Ideal for running multiple applications with different OS requirements on a single host. | Best for microservices architectures, CI/CD pipelines, and lightweight, scalable applications. |

### Containerization v Container Orchestration

| Aspect            | Containerization                                                                                  | Container Orchestration                                                                                             |
|-------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| **Definition**        | Packaging, distributing, and executing applications in isolated environments known as containers. | Managing the deployment, scaling, and operation of containers within a larger ecosystem.                            |
| **Focus**             | Concerned with bundling and running applications in isolated environments.                        | Concerned with automating, scaling, and managing the lifecycle of multiple containers as part of a system.          |
| **Key Components**    | Containers, Images, Docker (or containerization platform of choice).                              | Orchestration platforms (e.g., Kubernetes, Docker Swarm, Apache Mesos).                                             |
| **Isolation Level**   | Provides lightweight isolation, sharing the host OS kernel.                                       | Manages the deployment and operation of multiple containers, ensuring they run seamlessly in isolated environments. |
| **Resource Overhead** | Low, as containers share the host OS kernel and have minimal overhead.                            | Moderate, as orchestration platforms add additional components and services for managing containers.                |
| **Scalability**       | Scalable, but manual scaling might be required for larger deployments.                            | Highly scalable, with automated scaling based on demand, ensuring efficient resource utilization.                   |
| **Use Case**          | Ideal for packaging and running applications consistently across different environments.          | Essential for deploying and managing large-scale, distributed applications with multiple interacting components.    |
| **Examples**          | [Docker](../docker/docker.md), Podman, containerd.                                                                       | Kubernetes, Docker Swarm, Apache Mesos.                                                                             |

### Understanding container orchestration

- **Container Orchestration** is the automated process of *managing*, *deploying*, *scaling*, and *operating* containerized applications. It involves coordinating the deployment and lifecycle management of multiple containers to ensure they work together seamlessly to deliver a *complex*, *distributed application*.
- Some of the key components of a container orchestration platform/engine are Orchestrators
	1. **Orchestrators** - Tools or platforms that automate the management of containers.
	2. **Cluster** - A collection of machines (nodes) that collectively run containerized applications.
	3. **Container Runtime** - The underlying software responsible for running containers (e.g., Docker, containerd).
- Some of the most commonly used container orchestration platforms are
	1. [Kubernetes](kubernetes.md) - An open-source platform for automating deployment, scaling, and management of containerized applications.
	2. [Docker Swarm](Docker%20Swarm.md) - A native clustering and orchestration solution for [Docker](../docker/docker.md).
	3. [Apache Mesos](Apache%20Mesos.md) - A distributed systems kernel that abstracts resources and manages workloads.
- Some of the key features of container orchestration are listed below.
	- **Automated Deployment** - Simplifies the process of deploying applications across multiple containers and nodes.
	- **Scaling** - Allows automatic scaling of the number of containers based on demand to handle varying workloads.
	- **Load Balancing** - Distributes incoming traffic among containers to ensure even resource utilization and high availability.
	- **Health Monitoring and Recovery** - Continuously monitors the health of containers and automatically replaces or restarts failed instances.
	- **Networking** - Manages network configurations, enabling communication between containers and external services.
	- **Resource Allocation** - Efficiently allocates computing, storage, and network resources to containers.
	- **Service Discovery** - Facilitates the discovery and communication between containers within a dynamic environment.

### Why Kubernetes?

Kubernetes has emerged as the de facto standard for container orchestration due to its comprehensive feature set, robust architecture, and widespread community adoption. The advantages of using Kubernetes extend across various aspects of containerized application management:

1. **Automated Deployment and Scaling**
	- Kubernetes allows users to define the desired state of their applications, and it automatically handles the deployment and scaling of containerized workloads to meet that desired state.
	- Automated scaling features, including horizontal pod autoscaling, enable applications to dynamically scale based on demand.
2. **High Availability and Fault Tolerance**
	- Kubernetes ensures high availability by distributing applications across multiple nodes in a cluster.
	- It automatically reschedules and replaces failed containers, contributing to fault tolerance.
	- Self-healing mechanisms detect and address issues, minimizing downtime and disruptions to applications.
3. **Service Discovery and Load Balancing**
	- Kubernetes provides built-in service discovery, allowing containers within a cluster to find and communicate with each other using DNS or environment variables.
	- Integrated load balancing ensures even distribution of traffic among containerized applications, optimizing performance and reliability.
4. **Resource Efficiency**
	- Kubernetes efficiently utilizes resources by packing containers onto nodes based on resource requirements and constraints. This ensures optimal use of computing resources in the cluster.
	- Resource quotas and limits allow for fine-grained control over resource allocation, preventing one application from monopolizing resources.
5. **Declarative Configuration**
	- Users can define the desired state of their applications and infrastructure using declarative configuration files (YAML). This approach simplifies deployment and promotes version control of configurations.
	- Declarative syntax allows for easy tracking of changes, collaboration, and rollbacks to previous configurations.
6. **Extensive Ecosystem**
	- Kubernetes has a rich ecosystem of extensions, tools, and plugins. This includes Helm charts for package management, Operators for automating application management, and a variety of storage and networking solutions.
	- The vast ecosystem contributes to Kubernetes' adaptability to diverse use cases and environments.
7. **Portability and Vendor Neutrality**
	- Kubernetes is open source and follows a container-centric infrastructure approach, making it vendor-agnostic. It can run on various cloud providers, on-premises data centers, and even edge environments.
	- This portability ensures that applications built and deployed on Kubernetes can easily move across different environments without major modifications.
8. **Community Support and Innovation**
	- Kubernetes benefits from a large and active open-source community. This community-driven development model fosters innovation, continuous improvement, and the rapid adoption of emerging best practices.
	- Regular releases and updates introduce new features, security enhancements, and performance improvements.
9. **Built-in Security Features**
	- Kubernetes provides several security features, including role-based access control (RBAC), pod security policies, and network policies. These features help enforce access controls and secure communication between pods.
	- Kubernetes allows for integration with container runtime security solutions and provides a foundation for building secure containerized applications.
10. **Standardization and Industry Support**
	- Kubernetes has become a standard for container orchestration, with major cloud providers offering managed Kubernetes services (Amazon EKS, Google Kubernetes Engine, Azure Kubernetes Service).
	- Standardization simplifies the deployment and management of containerized applications, fostering a consistent experience across different environments.

## Getting to know Kubernetes

### History and Current State

Kubernetes originated from Google's internal container orchestration system, **Borg**. Google open-sourced the Kubernetes project in 2014, allowing it to quickly gain traction as a leading container orchestration platform. The [Cloud Native Computing Foundation (CNCF)](https://www.cncf.io) took over its governance in 2015, fostering a vibrant and collaborative ecosystem around the project.

Over the years, Kubernetes has evolved to become the de facto standard for container orchestration in the industry. Its robust features for automating deployment, scaling, and management of containerized applications have made it a cornerstone of modern cloud-native infrastructure. The project has seen regular updates and enhancements, with a strong focus on scalability, stability, and extensibility. Kubernetes has also spurred the development of a rich ecosystem of tools and services, contributing to its widespread adoption across various industries.

In the current state, Kubernetes continues to be a dynamic and influential force in the world of container orchestration. Its community-driven development model ensures ongoing innovation, and its compatibility with diverse environments, including on-premises data centers and multiple cloud providers, solidifies its role as a key enabler of scalable and resilient application architectures. As Kubernetes matures, it remains a critical technology for organizations seeking to deploy and manage containerized workloads at scale.

### Alternatives to K8s

1. **Docker Swarm** - Docker's native orchestration tool, Swarm, provides a simple and lightweight way to orchestrate Docker containers without the need for Kubernetes.
2. **Nomad** - Developed by HashiCorp, Nomad is a standalone orchestrator that supports both containers and virtual machines. It is designed for simplicity and flexibility.
3. **Mesos/Marathon** - Apache Mesos, combined with the Marathon framework, offers a general-purpose orchestration solution for both containers and traditional workloads.
4. **Amazon ECS (Elastic Container Service)** - ECS is Amazon's proprietary container orchestration service that manages Docker containers. While AWS offers Amazon EKS with Kubernetes, ECS itself is a separate solution.

## The Basics of Kubernetes

### Kubernetes Architecture

In Kubernetes, the architecture is commonly referred to as the **Master-Node Architecture**. Machines in which Kubernetes is running is usually referred to as a *cluster*. In a Kubernetes cluster, the following types of nodes are available.
1. **Master Node**
2. **Worker Node**

#### Master Node
In a Kubernetes cluster, the Master Node plays a pivotal role in *orchestrating* and *managing* the *overall state* of the system. It is responsible for *coordinating the activities* of the cluster and *ensuring* that the *desired state*, as *defined* by users and applications, is maintained. A master node has 4 components.
1. **API Server**
	- At the heart of the Master Node is the API Server, serving as the *primary entry point for all communication* within the cluster. This includes CLI or GUI based interfaces, 3rd party kubernetes management tools or even inter-node communications.
	- This component *exposes the Kubernetes API*, receiving requests and facilitating interactions between various entities. 
	- It acts as the *central hub for communication*, validating and processing requests.
	- It *enforces security* measures through *authentication*, *authorization*, and *admission control*.
2. **Controller Manager**
	- The Controller Manager is tasked with *overseeing controllers* that *regulate the state of the cluster*.
	- These controllers ensure that the current state aligns with the desired state, managing aspects like *replication*, *endpoints*, and more.
	- Manages various controllers that govern different aspects of the cluster's state such as the *Replication Controller* and *ReplicaSet controller*.
	- This is the entity that ensures that the *current state matches the desired state* defined by users.
3. **Scheduler**
	- The Scheduler is responsible for *making decisions regarding pod placement*. 
	- When a new pod is created, the Scheduler determines the optimal node for deployment based on factors such as *resource requirements*, *affinity*, and *anti-affinity rules*.
	- The scheduler listens for new pod requirements without assigned nodes and then makes decisions on pod placement, optimizing resource utilization.
4. **etcd**
	- Serving as the *distributed key-value store*, etcd is a critical component of the Master Node. It is considered as distributed as in case of more than one master nodes, the etcd is set up as a distributed data store, serving data to other kubernetes master components.
	- It *stores* the *configuration data* of the entire cluster, acting as the source of truth.
	- etcd ensures *consistency* and *fault tolerance*, providing *resilience against node failures*.

> [!TIP]+ Kubernetes Control Plane
> The **Control Plane** is the core system within Kubernetes that is responsible for *maintaining the desired state of the cluster*. It actively *responds to changes* and *makes decisions* to facilitate the *deployment*, *scaling*, and *management of applications* according to user specifications. This authoritative entity acts as a *central interface*, orchestrating various activities within the cluster. Not confined to a single master node, the Control Plane is a *distributed collection of master nodes*, ensuring *redundancy and high availability* while collectively serving the management functionality of the Kubernetes cluster.

#### Worker Node

Worker nodes form the *foundation* of a Kubernetes cluster, *executing* and *managing* the *containers* that make up the applications. They play a crucial role in realizing the desired state set by the Control Plane, and their proper functioning ensures the efficient operation of the entire system. In short, this is where the actual containers and thereby the applications deployed (workload) runs. A worker node has 3 main components.
1. **Kubelet**
	- Kubelet acts as the node-level supervisor, ensuring containers are running in a Pod.
	- It listens for instructions from the Control Plane (via the API Server) to start and stop containers.
	- It also reports the status of the node such as resource (CPU, memory) utilization, back to the control plane (again, via the API server)
2. **Container Runtime**
	- Container runtimes are the entities that execute and manage the actual containers as per the instructions from Kubelet.
	- It pulls the container images from the container repositories as per the instruction from the kubelet.
	- It runs container based on the specifications defined in pods.
	- Any container runtimes that follow the OCI spec can be used as the container runtime. Some of the most popular choices include *[containerd](containerd.md)* and *[Docker](../docker/docker.md)*. 
3. **Kube proxy**
	- Kube proxy maintains the network rules on nodes
	- It serves as the communications channel across the kubernetes cluster facilitating communication between pods across the cluster.
	- It manages the efficient routing of traffic to the intended pod.

| Consideration Category | Master Nodes Considerations | Worker Nodes Considerations |
| ---- | ---- | ---- |
| **High Availability** | Deploy multiple Master Nodes for redundancy and fault tolerance. Generally odd numbers of Master Nodes (e.g., 3 or 5) are recommended to avoid split-brain scenarios. | Deploy multiple worker nodes to distribute the application workload and improve availability. |
| **API Server Load Balancing** | Implement load balancing for the API Server to distribute requests evenly. It enhances availability by ensuring that requests can be handled by any available Master Node. | Enhances availability by ensuring that requests can be handled by any available Master Node. |
| **Resource Allocation** | Allocate sufficient resources to Master Nodes based on cluster size and requirements. Adequate resources ensure the smooth functioning of control plane components. | Allocate sufficient resources to worker nodes based on the resource requirements of the running containers. |
| **Network Connectivity** | Ensure robust network connectivity between Master Nodes. Low-latency, high-bandwidth communication is crucial for effective coordination. | Low-latency, high-bandwidth communication is crucial for effective coordination. |
| **Backup and Restore Procedures** | Establish backup and restore procedures for etcd. Regular backups mitigate the risk of data loss or corruption, aiding recovery. | Regular backups mitigate the risk of data loss or corruption, aiding recovery. |
| **Security Measures** | Implement security measures to protect Master Nodes from unauthorized access. Regularly update and patch both the operating system and Kubernetes components to address security vulnerabilities. | Regularly update and patch both the operating system and Kubernetes components to address security vulnerabilities. |
| **Monitoring and Logging** | Set up monitoring and logging for Master Nodes. Monitor API Server, Controller Manager, Scheduler, and etcd for performance metrics and errors. |  |
| **Isolation from Workload** | Avoid running application workloads, Kubelet, and Container Runtime on Master Nodes. Isolating Master Nodes enhances security, stability, and resource management. |  |

![](https://patfolio-assets.s3.ap-south-1.amazonaws.com/meme-containerd-and-kubernetes.png)


