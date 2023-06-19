const startButton = document.getElementById('start-btn')
const questioncontainerElement = document.getElementById('questioncontainerquiz')
const questionElement = document.getElementById('question')
const answerButtonElements = document.getElementById('answerbuttons')
let score2 = 0;
let shuffledQuestions, currentQuestinIndex

startButton.addEventListener('click', startGame)
answerButtonElements.addEventListener('click', () =>{
    currentQuestinIndex += 1;
    setTimeout(setNextQuestion, 1000)

})

function startGame() {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestinIndex = 0
score2 = 0;
questioncontainerElement .classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestinIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question
shuffle(question.answers)
question.answers.forEach(answer =>{
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn2')
    if (answer.correct) {
        button.dataset.correct = answer.correct
        button.classList.add('correct-btn')
       
    }
    button.addEventListener('click' , selectAnswer)
    answerButtonElements.appendChild(button)
    
})
}

function resetState() {
    
    clearStatusClass(document.body)
    while (answerButtonElements.firstChild) {
        answerButtonElements.removeChild
        (answerButtonElements.firstChild)
        
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonElements.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
})

    
    // if it is the last question, then show the score
    
    
    if (shuffledQuestions.lenght < currentQuestinIndex + 1) {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        questionElement.innerText = questions.question
    } else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        let score3 = score2 - currentQuestinIndex -1;
        questionElement.innerText = 'Dein Score ist ' + score3 + ' von ' + questions.length;
        
        
    }
    

}  

function setStatusClass(element, correct) {
    
    clearStatusClass(element)
        
    
    if (correct) {
        element.classList.add('correct')
        score2 += 1;

    } else{
        element.classList.add('wrong')
    }
    
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [

    {
      question: "Was versteht man unter Container Orchestrierung?",
      answers: [
        { text: "Die automatisierte Verwaltung und Bereitstellung von Containern in einer Cluster-Umgebung", correct: true },
        { text: "Das Verschieben von Containern zwischen verschiedenen Hosts", correct: false },
        { text: "Die Verschlüsselung von Containern für sichere Datenübertragung", correct: false },
        { text: "Das Konfigurieren von Containern für den Einsatz in verschiedenen Betriebssystemen", correct: false }
      ]
    },
    {
      question: "Welche der folgenden Tools können zur Container Orchestrierung verwendet werden?",
      answers: [
        { text: "Kubernetes", correct: true },
        { text: "Docker Swarm", correct: true },
        { text: "Apache Mesos", correct: true },
        { text: "Amazon EC2", correct: false }
      ]
    },
    {
      question: "Was sind Unterschiede zwischen Kubernetes und Docker Swarm?",
      answers: [
        { text: "Kubernetes bietet eine umfangreichere Funktionssuite und ist skalierbarer als Docker Swarm.", correct: true },
        { text: "Docker Swarm ist einfacher einzurichten und zu verwenden als Kubernetes.", correct: true },
        { text: "Kubernetes unterstützt mehr Container-Netzwerke als Docker Swarm.", correct: false },
        { text: "Docker Swarm ist speziell für Docker-Container optimiert, während Kubernetes eine breitere Palette von Containern unterstützt.", correct: true }
      ]
    },
    {
      question: "Welches Tool wird häufig für die Container Orchestrierung in großen, produktiven Umgebungen eingesetzt?",
      answers: [
        { text: "Kubernetes", correct: true },
        { text: "Docker Swarm", correct: false },
        { text: "Apache Mesos", correct: false },
        { text: "Amazon EC2", correct: false }
      ]
    },
    {
      question: "Was ist ein Vorteil der Container Orchestrierung?",
      answers: [
        { text: "Skalierbarkeit", correct: true },
        { text: "Kostenreduzierung", correct: false },
        { text: "Sicherere Datenübertragung", correct: false },
        { text: "Höhere CPU-Leistung", correct: false }
      ]
    },
    {
      question: "Welches der folgenden Tools ist KEIN Container Orchestrierungs-Tool?",
      answers: [
        { text: "Docker Engine", correct: true },
        { text: "Kubernetes", correct: false },
        { text: "Docker Swarm", correct: false },
        { text: "Apache Mesos", correct: false }
      ]
    },
    {
      question: "Welches Tool unterstützt die horizontale Skalierung von Containern?",
      answers: [
        { text: "Kubernetes", correct: true },
        { text: "Docker Swarm", correct: true },
        { text: "Apache Mesos", correct: false },
        { text: "Amazon EC2", correct: false }
      ]
    },
    {
      question: "Was ist eine Pod in Kubernetes?",
      answers: [
        { text: "Eine Gruppe von einem oder mehreren Containern, die gemeinsam auf einem Host ausgeführt werden", correct: true },
        { text: "Ein isolierter Container innerhalb eines Kubernetes-Clusters", correct: false },
        { text: "Eine Einheit zur Speicherung von Containern in der Container Registry", correct: false },
        { text: "Ein Container, der für die verteilte Speicherung von Daten verwendet wird", correct: false }
      ]
    },
    {
      question: "Welche Programmiersprache wurde für die Entwicklung von Kubernetes verwendet?",
      answers: [
        { text: "Go", correct: true },
        { text: "Java", correct: false },
        { text: "Python", correct: false },
        { text: "C++", correct: false }
      ]
    },
    {
      question: "Was ist ein Worker Node in Kubernetes?",
      answers: [
        { text: "Ein Knoten in einem Kubernetes-Cluster, der Aufgaben ausführt und Container hostet", correct: true },
        { text: "Ein Knoten in einem Docker Swarm-Cluster, der als Arbeitsknoten fungiert", correct: false },
        { text: "Ein Knoten in einem Apache Mesos-Cluster, der Container bereitstellt", correct: false },
        { text: "Ein Knoten in einem Amazon EC2-Cluster, der für die Containerausführung zuständig ist", correct: false }
      ]
    },
    {
    question: "Was ist der Zweck von Kubernetes?",
    answers: [
        { text: "Kubernetes ermöglicht die Automatisierung der Bereitstellung, Skalierung und Verwaltung von Containern.", correct: true },
        { text: "Kubernetes dient zur Erstellung von virtuellen Maschinen in einer Cloud-Umgebung.", correct: false },
        { text: "Kubernetes bietet eine Datenbanklösung für die Speicherung von Container-Images.", correct: false },
        { text: "Kubernetes ist ein Sicherheitsframework für die Absicherung von Containern.", correct: false }
    ]
    },
    {
    question: "Welche Schritte sind für die Installation und Konfiguration von Kubernetes erforderlich?",
    answers: [
        { text: "Installation von Kubernetes-Komponenten auf den Hosts, Konfiguration des Netzwerks und Einrichtung eines Cluster-Kontrollplans.", correct: true },
        { text: "Konfiguration von Container-Registries und Bereitstellung von Anwendungen auf Kubernetes.", correct: false },
        { text: "Installation eines Betriebssystems auf den Hosts und Konfiguration von Firewall-Regeln.", correct: false },
        { text: "Installation von Container-Runtimes wie Docker und Konfiguration der Container-Umgebungen.", correct: false }
    ]
    },
    {
    question: "Wie kann ein Kubernetes-Cluster verwaltet werden?",
    answers: [
        { text: "Durch die Nutzung von kubectl, dem Kubernetes-Befehlszeilentool, um Ressourcen zu erstellen, zu aktualisieren und zu überwachen.", correct: true },
        { text: "Durch die Einrichtung einer zentralen Datenbank zur Speicherung von Konfigurationsinformationen.", correct: false },
        { text: "Durch die Verwendung von Kubernetes-Dashboards, um die Clusterleistung zu überwachen und Fehler zu beheben.", correct: false },
        { text: "Durch die Skalierung der Cluster-Ressourcen mittels automatischer Lastverteilung.", correct: false }
    ]
    },
    {
    question: "Welche Komponenten sind Teil des Kubernetes-Cluster-Kontrollplans?",
    answers: [
        { text: "API-Server, Controller-Manager, Scheduler und etcd.", correct: true },
        { text: "Container-Registries, Load Balancer, Ingress-Controller und Pod-Netzwerke.", correct: false },
        { text: "Docker Swarm, Apache Mesos, Amazon EC2 und Kubernetes-Dashboard.", correct: false },
        { text: "Kubelet, kube-proxy, Calico und Persistent Volumes.", correct: false }
    ]
    },
    {
    question: "Wie können Kubernetes-Pods skaliert werden?",
    answers: [
        { text: "Durch die Verwendung von ReplicaSets oder Deployments, um mehrere Instanzen desselben Pods zu erstellen.", correct: true },
        { text: "Durch die Konfiguration von horizontaler Pod-Autoskalierung basierend auf der CPU-Auslastung.", correct: false },
        { text: "Durch die Verwendung von DaemonSets, um einen Pod auf jedem Worker-Knoten zu erstellen.", correct: false },
        { text: "Durch die Zuweisung von Ressourcenlimits für CPU und Speicher in den Pod-Spezifikationen.", correct: false }
    ]
    },
    {
    question: "Wie können Kubernetes-Dienste innerhalb eines Clusters zugänglich gemacht werden?",
    answers: [
        { text: "Durch die Erstellung eines Services mit dem Typ 'ClusterIP', der über eine interne IP-Adresse erreichbar ist.", correct: true },
        { text: "Durch die Verwendung von Ingress-Ressourcen, um den HTTP/TLS-Verkehr auf Services umzuleiten.", correct: false },
        { text: "Durch die Verwendung von Load Balancer-Diensten, um externe Zugriffe auf Services zu verteilen.", correct: false },
        { text: "Durch die Bereitstellung von Services mit dem Typ 'NodePort', um Zugriff über die Host-IP-Adressen und -Ports zu ermöglichen.", correct: false }
    ]
    },
    {
    question: "Was ist ein Kubernetes-Namespace?",
    answers: [
        { text: "Ein logisches Gruppierungskonzept, das Ressourcen innerhalb eines Clusters isoliert.", correct: true },
        { text: "Ein Container, der in einem Kubernetes-Cluster ausgeführt wird.", correct: false },
        { text: "Ein Sicherheitsmechanismus, um den Zugriff auf Ressourcen in einem Cluster zu beschränken.", correct: false },
        { text: "Ein Mechanismus zum Sichern von Datenbanken in einer Kubernetes-Umgebung.", correct: false }
    ]
    },
    {
    question: "Wie kann das Rolling-Update-Verfahren in Kubernetes durchgeführt werden?",
    answers: [
        { text: "Durch die Aktualisierung der Pod-Definitionen mit der neuen Version der Anwendung und Verwendung von 'kubectl apply' oder 'kubectl set image' Befehlen.", correct: true },
        { text: "Durch das Erstellen eines neuen Kubernetes-Clusters und die Migration der Anwendung auf den neuen Cluster.", correct: false },
        { text: "Durch die Verwendung von kubeadm, um die Aktualisierung von Kubernetes-Komponenten durchzuführen.", correct: false },
        { text: "Durch die Verwendung von Rollbacks, um zu einer vorherigen Version der Anwendung zurückzukehren.", correct: false }
    ]
    },
    {
    question: "Was ist ein Persistent Volume (PV) in Kubernetes?",
    answers: [
        { text: "Ein Speicherbereich, der von Pods verwendet werden kann und über die Lebensdauer von Pods hinaus persistiert.", correct: true },
        { text: "Ein Container, der kontinuierlich Daten in ein verteiltes Dateisystem schreibt.", correct: false },
        { text: "Ein Netzwerkprotokoll zum Verbinden von Kubernetes-Pods mit externen Speichersystemen.", correct: false },
        { text: "Ein Mechanismus zur Skalierung von Pods basierend auf der Auslastung des Speichers.", correct: false }
    ]
    },
    {
    question: "Wie können Kubernetes-Ressourcen deklarativ erstellt und aktualisiert werden?",
    answers: [
        { text: "Durch die Verwendung von YAML- oder JSON-Dateien, die die gewünschten Zustände der Ressourcen definieren.", correct: true },
        { text: "Durch die Ausführung von Shell-Skripten, die Befehle zur Erstellung und Aktualisierung von Ressourcen enthalten.", correct: false },
        { text: "Durch die Interaktion mit dem Kubernetes-API-Server über HTTP-Anfragen.", correct: false },
        { text: "Durch die Verwendung des Kubernetes-Dashboards zur manuellen Erstellung und Aktualisierung von Ressourcen.", correct: false }
    ]
    },
          {
            question: "Was ist die Architektur von Kubernetes?",
            answers: [
              { text: "Master-Node und Worker-Nodes", correct: true },
              { text: "Frontend-Server und Backend-Datenbank", correct: false },
              { text: "Client-Server-Architektur", correct: false },
              { text: "Verteiltes System mit Peer-to-Peer-Kommunikation", correct: false }
            ]
          },
          {
            question: "Welche sind die acht Hauptkomponenten von Kubernetes?",
            answers: [
              { text: "API-Server, Controller-Manager, Scheduler, etcd, kubelet, kube-proxy, Container-Runtime, kube-dns", correct: true },
              { text: "Docker, Kubernetes-Dashboard, Load Balancer, Ingress-Controller, Pods, Services, Persistent Volumes, Secrets", correct: false },
              { text: "Kubelet, Calico, Helm, Prometheus, Grafana, Fluentd, ElasticSearch, Kibana", correct: false },
              { text: "Istio, Knative, MetalLB, Nginx, Harbor, Argo CD, Velero, Cilium", correct: false }
            ]
          },
          {
            question: "Welche Schritte sind für die Installation und Konfiguration von Kubernetes erforderlich?",
            answers: [
              { text: "Installation von Kubernetes-Komponenten auf den Hosts, Konfiguration des Netzwerks und Einrichtung eines Cluster-Kontrollplans.", correct: true },
              { text: "Konfiguration von Container-Registries und Bereitstellung von Anwendungen auf Kubernetes.", correct: false },
              { text: "Installation eines Betriebssystems auf den Hosts und Konfiguration von Firewall-Regeln.", correct: false },
              { text: "Installation von Container-Runtimes wie Docker und Konfiguration der Container-Umgebungen.", correct: false }
            ]
          },
          {
            question: "Wie kann ein Kubernetes-Cluster verwaltet werden?",
            answers: [
              { text: "Durch die Nutzung von kubectl, dem Kubernetes-Befehlszeilentool, um Ressourcen zu erstellen, zu aktualisieren und zu überwachen.", correct: true },
              { text: "Durch die Einrichtung einer zentralen Datenbank zur Speicherung von Konfigurationsinformationen.", correct: false },
              { text: "Durch die Verwendung von Kubernetes-Dashboards, um die Clusterleistung zu überwachen und Fehler zu beheben.", correct: false },
              { text: "Durch die Skalierung der Cluster-Ressourcen mittels automatischer Lastverteilung.", correct: false }
            ]
          },
          {
            question: "Was ist der Zweck von Kubernetes?",
            answers: [
              { text: "Kubernetes ermöglicht die Automatisierung der Bereitstellung, Skalierung und Verwaltung von Containern.", correct: true },
              { text: "Kubernetes dient zur Erstellung von virtuellen Maschinen in einer Cloud-Umgebung.", correct: false },
              { text: "Kubernetes bietet eine Datenbanklösung für die Speicherung von Container-Images.", correct: false },
              { text: "Kubernetes ist ein Sicherheitsframework für die Absicherung von Containern.", correct: false }
            ]
          },
          {
            question: "Wie können Kubernetes-Pods skaliert werden?",
            answers: [
              { text: "Durch die Verwendung von ReplicaSets oder Deployments, um mehrere Instanzen desselben Pods zu erstellen.", correct: true },
              { text: "Durch die Konfiguration von horizontaler Pod-Autoskalierung basierend auf der CPU-Auslastung.", correct: false },
              { text: "Durch die Verwendung von DaemonSets, um einen Pod auf jedem Worker-Knoten zu erstellen.", correct: false },
              { text: "Durch die Zuweisung von Ressourcenlimits für CPU und Speicher in den Pod-Spezifikationen.", correct: false }
            ]
          },
          {
            question: "Wie können Kubernetes-Dienste innerhalb eines Clusters zugänglich gemacht werden?",
            answers: [
              { text: "Durch die Erstellung eines Services mit dem Typ 'ClusterIP', der über eine interne IP-Adresse erreichbar ist.", correct: true },
              { text: "Durch die Verwendung von Ingress-Ressourcen, um den HTTP/TLS-Verkehr auf Services umzuleiten.", correct: false },
              { text: "Durch die Verwendung von Load Balancer-Diensten, um externe Zugriffe auf Services zu verteilen.", correct: false },
              { text: "Durch die Bereitstellung von Services mit dem Typ 'NodePort', um Zugriff über die Host-IP-Adressen und -Ports zu ermöglichen.", correct: false }
            ]
          },
          {
            question: "Was ist ein Kubernetes-Namespace?",
            answers: [
              { text: "Ein logisches Gruppierungskonzept, das Ressourcen innerhalb eines Clusters isoliert.", correct: true },
              { text: "Ein Container, der in einem Kubernetes-Cluster ausgeführt wird.", correct: false },
              { text: "Ein Sicherheitsmechanismus, um den Zugriff auf Ressourcen in einem Cluster zu beschränken.", correct: false },
              { text: "Ein Mechanismus zum Sichern von Datenbanken in einer Kubernetes-Umgebung.", correct: false }
            ]
          },
          {
            question: "Wie kann das Rolling-Update-Verfahren in Kubernetes durchgeführt werden?",
            answers: [
              { text: "Durch die Aktualisierung der Pod-Definitionen mit der neuen Version der Anwendung und Verwendung von 'kubectl apply' oder 'kubectl set image' Befehlen.", correct: true },
              { text: "Durch das Erstellen eines neuen Kubernetes-Clusters und die Migration der Anwendung auf den neuen Cluster.", correct: false },
              { text: "Durch die Verwendung von kubeadm, um die Aktualisierung von Kubernetes-Komponenten durchzuführen.", correct: false },
              { text: "Durch die Verwendung von Rollbacks, um zu einer vorherigen Version der Anwendung zurückzukehren.", correct: false }
            ]
          },
          {
            question: "Was ist ein Persistent Volume (PV) in Kubernetes?",
            answers: [
              { text: "Ein Speicherbereich, der von Pods verwendet werden kann und über die Lebensdauer von Pods hinaus persistiert.", correct: true },
              { text: "Ein Container, der kontinuierlich Daten in ein verteiltes Dateisystem schreibt.", correct: false },
              { text: "Ein Netzwerkprotokoll zum Verbinden von Kubernetes-Pods mit externen Speichersystemen.", correct: false },
              { text: "Ein Mechanismus zur Skalierung von Pods basierend auf der Auslastung des Speichers.", correct: false }
            ]
          },
          {
            question: "Wie können Kubernetes-Ressourcen deklarativ erstellt und aktualisiert werden?",
            answers: [
              { text: "Durch die Verwendung von YAML- oder JSON-Dateien, die die gewünschten Zustände der Ressourcen definieren.", correct: true },
              { text: "Durch die Ausführung von Shell-Skripten, die Befehle zur Erstellung und Aktualisierung von Ressourcen enthalten.", correct: false },
              { text: "Durch die Interaktion mit dem Kubernetes-API-Server über HTTP-Anfragen.", correct: false },
              { text: "Durch die Verwendung des Kubernetes-Dashboards zur manuellen Erstellung und Aktualisierung von Ressourcen.", correct: false }
            ]
          },
          {
            "Fragen": [
              {
                question: "Wie kann Minikube auf dem lokalen Rechner installiert werden?",
                answers: [
                  { text: "Durch den Download der Minikube-Binärdatei und die Ausführung des Installationsbefehls entsprechend dem Betriebssystem.", correct: true },
                  { text: "Durch die Installation eines virtuellen Containers wie Docker auf dem lokalen Rechner.", correct: false },
                  { text: "Durch die Verwendung von Container-Runtime-Tools wie Kubernetes oder Docker auf dem lokalen Rechner.", correct: false },
                  { text: "Minikube ist bereits vorinstalliert auf bestimmten Betriebssystemen.", correct: false }
                ]
              },
              {
                question: "Wie kann ein Minikube-Cluster gestartet und gestoppt werden?",
                answers: [
                  { text: "Mit dem Befehl minikube start zum Starten des Clusters und minikube stop zum Stoppen des Clusters.", correct: true },
                  { text: "Durch die Ausführung eines Kubernetes-Manifests, das den Cluster startet und stoppt.", correct: false },
                  { text: "Durch die Interaktion mit dem Kubernetes-API-Server über HTTP-Anfragen.", correct: false },
                  { text: "Durch die Verwendung von Kubernetes-Dashboard, um den Cluster zu starten und zu stoppen.", correct: false }
                ]
              },
              {
                question: "Welche Minikube-Befehle können verwendet werden, um den Status des Clusters abzufragen?",
                answers: [
                  { text: "minikube status, minikube ip, minikube logs", correct: true },
                  { text: "kubectl get pods, kubectl get services, kubectl get nodes", correct: false },
                  { text: "minikube start, minikube stop, minikube delete", correct: false },
                  { text: "minikube dashboard, minikube ssh, minikube tunnel", correct: false }
                ]
              },
              {
                question: "Wie können Anwendungen auf einem Minikube-Cluster bereitgestellt und überwacht werden?",
                answers: [
                  { text: "Durch die Verwendung von Kubernetes-Manifesten oder Helm-Charts, um Anwendungen zu erstellen und zu verwalten.", correct: true },
                  { text: "Durch die Ausführung von Shell-Skripten, die Container-Images herunterladen und starten.", correct: false },
                  { text: "Durch die Interaktion mit dem Kubernetes-API-Server über HTTP-Anfragen.", correct: false },
                  { text: "Durch die Verwendung von kubectl-Befehlen zur direkten Verwaltung von Pods und Containern.", correct: false }
                ]
              },
              {
                question: "Wie kann auf ein Minikube-Cluster mit kubectl-Befehlen zugegriffen werden?",
                answers: [
                  { text: "Durch die Ausführung von minikube kubectl -- <kubectl-Befehl>.", correct: true },
                  { text: "Durch die Installation von kubectl auf dem lokalen Rechner und die Konfiguration der Verbindung zum Cluster.", correct: false },
                  { text: "Durch die Interaktion mit dem Kubernetes-API-Server über HTTP-Anfragen.", correct: false },
                  { text: "Durch die Verwendung von kubectl-Plugins, die speziell für Minikube entwickelt wurden.", correct: false }
                ]
              },
              {
                question: "Was ist Minikube?",
                answers: [
                  { text: "Ein Open-Source-Werkzeug zum Ausführen eines Kubernetes-Clusters auf dem lokalen Rechner.", correct: true },
                  { text: "Ein Container-Runtime-Tool zum Erstellen und Verwalten von Docker-Containern.", correct: false },
                  { text: "Ein Befehlszeilenwerkzeug zum Interagieren mit dem Kubernetes-API-Server.", correct: false },
                  { text: "Ein Monitoring-Tool zur Überwachung von Kubernetes-Clustern.", correct: false }
                ]
              },
              {
                question: "Welche Konfigurationsdatei wird für die Minikube-Konfiguration verwendet?",
                answers: [
                  { text: ".minikube/config/config.json", correct: true },
                  { text: ".kube/config", correct: false },
                  { text: "docker-compose.yml", correct: false },
                  { text: "minikube.yaml", correct: false }
                ]
              },
              {
                question: "Wie kann die Minikube-IP-Adresse abgerufen werden?",
                answers: [
                  { text: "Durch den Befehl minikube ip.", correct: true },
                  { text: "Durch den Befehl kubectl get nodes.", correct: false },
                  { text: "Durch den Befehl minikube status.", correct: false },
                  { text: "Durch den Befehl minikube service <service-name>.", correct: false }
                ]
              },
              {
                question: "Was ist das Minikube-Dashboard?",
                answers: [
                  { text: "Eine webbasierte Benutzeroberfläche zur Visualisierung und Verwaltung von Minikube-Clustern.", correct: true },
                  { text: "Ein Kubernetes-Objekt zum Bereitstellen von Benutzeroberflächen für Anwendungen.", correct: false },
                  { text: "Ein Monitoring-Tool zur Überwachung von Minikube-Clustern.", correct: false },
                  { text: "Ein Container-Image, das die Minikube-CLI enthält.", correct: false }
                ]
              },
              {
                question: "Was ist der Unterschied zwischen Minikube und einem produktionsbereiten Kubernetes-Cluster?",
                answers: [
                  { text: "Minikube ist ein lokales Entwicklungswerkzeug, das einen einzelnen Knoten-Cluster bereitstellt, während ein produktionsbereiter Cluster mehrere Knoten umfasst.", correct: true },
                  { text: "Minikube verwendet eine andere Container-Runtime-Engine als produktionsbereite Cluster.", correct: false },
                  { text: "Minikube unterstützt nur eine begrenzte Anzahl von Kubernetes-Ressourcen im Vergleich zu produktionsbereiten Clustern.", correct: false },
                  { text: "Minikube hat eine reduzierte Leistungsfähigkeit im Vergleich zu produktionsbereiten Clustern.", correct: false }
                ]
              }
            ]
          },
          {

                question: "Was sind Kubernetes-Pods?",
                answers: [
                  { text: "Grundlegende Ausführungseinheiten in Kubernetes, die eine oder mehrere Container enthalten.", correct: true },
                  { text: "Virtuelle Maschinen, die in Kubernetes-Clustern ausgeführt werden.", correct: false },
                  { text: "Ein Tool zur Verwaltung von Netzwerkkommunikation in Kubernetes.", correct: false },
                  { text: "Kubernetes-Ressourcen, die für die Verwaltung von Persistent Storage zuständig sind.", correct: false }
                ]
              },
              {
                question: "Wie können Pods in Kubernetes erstellt werden?",
                answers: [
                  { text: "Durch die Definition eines Pod-Manifests in YAML- oder JSON-Format und Verwendung des kubectl-Befehls 'kubectl create -f <manifest-file>'.", correct: true },
                  { text: "Durch die Ausführung des Befehls 'kubectl create pod <pod-name>' und die Angabe der Containerkonfiguration.", correct: false },
                  { text: "Durch die Interaktion mit dem Kubernetes-API-Server über HTTP-Anfragen.", correct: false },
                  { text: "Durch die Verwendung des Kubernetes-Dashboards zur manuellen Erstellung von Pods.", correct: false }
                ]
              },
              {
                question: "Welche Befehle können zum Arbeiten mit Pods verwendet werden?",
                answers: [
                  { text: "kubectl get pods, kubectl describe pod <pod-name>, kubectl delete pod <pod-name>", correct: true },
                  { text: "kubectl create pod <pod-name>, kubectl scale deployment <deployment-name>, kubectl exec <pod-name> -- <command>", correct: false },
                  { text: "kubectl apply -f <manifest-file>, kubectl expose pod <pod-name>, kubectl rollout restart deployment <deployment-name>", correct: false },
                  { text: "kubectl port-forward <pod-name> <local-port>:<pod-port>, kubectl logs <pod-name>, kubectl attach <pod-name>", correct: false }
                ]
              },
              {
                question: "Wie kann der Status eines Pods abgerufen werden?",
                answers: [
                  { text: "Durch den Befehl 'kubectl get pods'.", correct: true },
                  { text: "Durch den Befehl 'kubectl describe pod <pod-name>'.", correct: false },
                  { text: "Durch den Befehl 'kubectl logs <pod-name>'.", correct: false },
                  { text: "Durch den Befehl 'kubectl exec <pod-name> -- <command>'.", correct: false }
                ]
              },
              {
                question: "Wie kann ein Pod aktualisiert werden?",
                answers: [
                  { text: "Durch die Aktualisierung des Pod-Manifests und die Verwendung des Befehls 'kubectl apply -f <manifest-file>'.", correct: true },
                  { text: "Durch die Skalierung des Pods mit dem Befehl 'kubectl scale deployment <deployment-name>'.", correct: false },
                  { text: "Durch das Löschen des vorhandenen Pods und die Erstellung eines neuen Pods mit dem aktualisierten Manifest.", correct: false },
                  { text: "Durch das Ausführen des Befehls 'kubectl rollout restart deployment <deployment-name>'.", correct: false }
                ]
              },
              {
                question: "Was passiert, wenn ein Pod abstürzt oder gelöscht wird?",
                answers: [
                  { text: "Kubernetes startet automatisch einen neuen Pod, um den ausgefallenen Pod zu ersetzen.", correct: true },
                  { text: "Der ausgefallene Pod wird von Kubernetes manuell wiederhergestellt.", correct: false },
                  { text: "Der ausgefallene Pod bleibt gelöscht, bis ein neuer Pod erstellt wird.", correct: false },
                  { text: "Kubernetes skaliert automatisch den vorhandenen Pod, um den Ausfall zu kompensieren.", correct: false }
                ]
              },
              {
                question: "Was ist ein Pod-Controller in Kubernetes?",
                answers: [
                  { text: "Ein Ressourcentyp in Kubernetes, der die Replikation und das Management von Pods ermöglicht.", correct: true },
                  { text: "Ein spezieller Container, der in jedem Pod vorhanden sein muss.", correct: false },
                  { text: "Ein externer Service, der den Zugriff auf Pods ermöglicht.", correct: false },
                  { text: "Ein Kubernetes-Objekt zur Verwaltung von Zugriffsrechten und Sicherheitseinstellungen für Pods.", correct: false }
                ]
              },
              {
                question: "Was ist der Unterschied zwischen einem Pod und einem Deployment?",
                answers: [
                  { text: "Ein Pod ist eine einzelne Instanz einer Anwendung, während ein Deployment die Replikation und das Management von Pods ermöglicht.", correct: true },
                  { text: "Ein Pod repräsentiert einen physischen Knoten im Kubernetes-Cluster, während ein Deployment eine logische Gruppierung von Pods ist.", correct: false },
                  { text: "Ein Pod ist ein statischer Ressourcentyp, während ein Deployment dynamisch skaliert werden kann.", correct: false },
                  { text: "Ein Pod ist eine hochverfügbare Version einer Anwendung, während ein Deployment eine einzelne Instanz darstellt.", correct: false }
                ]
              },
              {
                question: "Wie kann der Inhalt der Protokollausgabe (Logs) eines Pods abgerufen werden?",
                answers: [
                  { text: "Durch den Befehl 'kubectl logs <pod-name>'.", correct: true },
                  { text: "Durch den Befehl 'kubectl describe pod <pod-name>'.", correct: false },
                  { text: "Durch den Befehl 'kubectl exec <pod-name> -- <command>'.", correct: false },
                  { text: "Durch den Befehl 'kubectl attach <pod-name>'.", correct: false }
                ]
              },
              {
                question: "Wie kann auf die Shell eines Containers innerhalb eines Pods zugegriffen werden?",
                answers: [
                  { text: "Durch den Befehl 'kubectl exec <pod-name> -- <command>'.", correct: true },
                  { text: "Durch den Befehl 'kubectl describe pod <pod-name>'.", correct: false },
                  { text: "Durch den Befehl 'kubectl attach <pod-name>'.", correct: false },
                  { text: "Durch den Befehl 'kubectl logs <pod-name>'.", correct: false }
                ]
              }, {
                question: "Was ist ein Kubernetes Service?",
                answers: [
                { text: "Ein Objekt in Kubernetes, das einen stabilen Netzwerkendpunkt bereitstellt, um auf Pods zuzugreifen.", correct: true },
                { text: "Ein Container, der in Kubernetes-Clustern ausgeführt wird und Netzwerkdienste bereitstellt.", correct: false },
                { text: "Ein Werkzeug zum Überwachen der Netzwerkaktivität in einem Kubernetes-Cluster.", correct: false },
                { text: "Ein Kubernetes-Objekt, das für die Speicherung von Konfigurationsdaten verwendet wird.", correct: false }
                ]
                },
                {
                question: "Wie kann ein Kubernetes Service erstellt und konfiguriert werden?",
                answers: [
                { text: "Durch die Definition einer Service-Manifestdatei in YAML- oder JSON-Format und Verwendung des kubectl-Befehls 'kubectl apply -f <manifest-file>'.", correct: true },
                { text: "Durch die Ausführung des Befehls 'kubectl create service <service-name>' und die Angabe der Servicekonfiguration.", correct: false },
                { text: "Durch die Interaktion mit dem Kubernetes-API-Server über HTTP-Anfragen.", correct: false },
                { text: "Durch die Verwendung des Kubernetes-Dashboards zur manuellen Erstellung und Konfiguration von Services.", correct: false }
                ]
                },
                {
                question: "Welche Service-Typen stehen in Kubernetes zur Verfügung?",
                answers: [
                { text: "ClusterIP, NodePort, LoadBalancer und ExternalName.", correct: true },
                { text: "Proxy, Gateway, Ingress und Egress.", correct: false },
                { text: "HTTP, TCP, UDP und DNS.", correct: false },
                { text: "Primary, Secondary, Tertiary und Quaternary.", correct: false }
                ]
                },
                {
                question: "Was ist der Service-Typ 'ClusterIP'?",
                answers: [
                { text: "Ein interner Service, der nur innerhalb des Kubernetes-Clusters erreichbar ist.", correct: true },
                { text: "Ein Service, der den Datenverkehr auf mehrere Pods verteilt.", correct: false },
                { text: "Ein Service, der den externen Zugriff auf einen bestimmten Pod ermöglicht.", correct: false },
                { text: "Ein Service, der eine Verbindung zu einem externen Dienst herstellt.", correct: false }
                ]
                },
                {
                question: "Was ist der Service-Typ 'NodePort'?",
                answers: [
                { text: "Ein Service, der den externen Zugriff auf einen bestimmten Port auf allen Nodes im Cluster ermöglicht.", correct: true },
                { text: "Ein Service, der den Datenverkehr auf mehrere Pods verteilt.", correct: false },
                { text: "Ein Service, der eine Verbindung zu einem externen Dienst herstellt.", correct: false },
                { text: "Ein interner Service, der nur innerhalb des Kubernetes-Clusters erreichbar ist.", correct: false }
                ]
                },
                {
                question: "Was ist der Service-Typ 'LoadBalancer'?",
                answers: [
                { text: "Ein Service, der einen externen Lastenausgleichsdienst bereitstellt, um den Datenverkehr auf die Pods zu verteilen.", correct: true },
                { text: "Ein interner Service, der nur innerhalb des Kubernetes-Clusters erreichbar ist.", correct: false },
                { text: "Ein Service, der eine Verbindung zu einem externen Dienst herstellt.", correct: false },
                { text: "Ein Service, der den externen Zugriff auf einen bestimmten Port auf allen Nodes im Cluster ermöglicht.", correct: false }
                ]
                },
                {
                question: "Was ist der Service-Typ 'ExternalName'?",
                answers: [
                { text: "Ein Service, der eine externe DNS-Eintragung bereitstellt, um den Zugriff auf externe Dienste zu ermöglichen.", correct: true },
                { text: "Ein interner Service, der nur innerhalb des Kubernetes-Clusters erreichbar ist.", correct: false },
                { text: "Ein Service, der den externen Zugriff auf einen bestimmten Port auf allen Nodes im Cluster ermöglicht.", correct: false },
                { text: "Ein Service, der den Datenverkehr auf mehrere Pods verteilt.", correct: false }
                ]
                },
                {
                question: "Wie kann ein Service verwendet werden, um auf Pods in einem Kubernetes-Cluster zuzugreifen?",
                answers: [
                { text: "Durch die Verwendung der DNS-Namen des Services in anderen Anwendungen oder Diensten innerhalb des Clusters.", correct: true },
                { text: "Durch die direkte Verwendung der IP-Adresse des Service-Endpoints.", correct: false },
                { text: "Durch die Verwendung des Kubernetes-Dashboards zur manuellen Zuordnung von Pods zu Services.", correct: false },
                { text: "Durch die Interaktion mit dem Kubernetes-API-Server über HTTP-Anfragen.", correct: false }
                ]
                },
                {
                question: "Wie kann die Erreichbarkeit eines Kubernetes Services überprüft werden?",
                answers: [
                { text: "Durch den Befehl 'kubectl get services' und Überprüfen des zugewiesenen ClusterIPs oder externen Endpunkts.", correct: true },
                { text: "Durch den Befehl 'kubectl describe service <service-name>' und Überprüfen des Status und der Endpunkte.", correct: false },
                { text: "Durch den Befehl 'kubectl logs <service-name>' und Überprüfen der Protokolldateien des Services.", correct: false },
                { text: "Durch den Befehl 'kubectl exec <service-name> -- <command>' und Überprüfen der Servicekonfiguration.", correct: false }
                ]
                },
                {
                question: "Können mehrere Services denselben Namen haben?",
                answers: [
                { text: "Ja, solange die Services in verschiedenen Namespaces existieren.", correct: true },
                { text: "Nein, jeder Service muss einen eindeutigen Namen im gesamten Cluster haben.", correct: false },
                { text: "Ja, solange die Services unterschiedliche Service-Typen haben.", correct: false },
                { text: "Nein, Kubernetes erlaubt keine doppelten Servicenamen im Cluster.", correct: false }
                ]
                },
                {
                question: "Können Services in verschiedenen Namespaces miteinander kommunizieren?",
                answers: [
                { text: "Ja, Services können über ihre DNS-Namen in anderen Namespaces erreicht werden.", correct: true },
                { text: "Nein, Services in verschiedenen Namespaces sind isoliert und können nicht miteinander kommunizieren.", correct: false },
                { text: "Ja, Services können über ihre IP-Adressen in anderen Namespaces erreicht werden.", correct: false },
                { text: "Nein, jede Namespace hat ihre eigenen Service-Domäne, die nicht überkreuzt werden kann.", correct: false }
                ]
                }, {
                    question: "Wie kann Minikube auf dem lokalen Rechner installiert werden?",
                    answers: [
                    { text: "Durch den Befehl 'minikube install'", correct: false },
                    { text: "Durch den Befehl 'minikube start'", correct: false },
                    { text: "Durch den Befehl 'minikube setup'", correct: false },
                    { text: "Durch den Befehl 'minikube installiert'", correct: true }
                    ]
                    },
                    {
                    question: "Wie kann Minikube auf dem lokalen Rechner konfiguriert werden?",
                    answers: [
                    { text: "Durch den Befehl 'minikube configure'", correct: false },
                    { text: "Durch den Befehl 'minikube config set'", correct: true },
                    { text: "Durch den Befehl 'minikube setup'", correct: false },
                    { text: "Durch den Befehl 'minikube config'", correct: false }
                    ]
                    },
                    {
                    question: "Wie kann ein Minikube-Cluster gestartet werden?",
                    answers: [
                    { text: "Durch den Befehl 'minikube start'", correct: true },
                    { text: "Durch den Befehl 'minikube run'", correct: false },
                    { text: "Durch den Befehl 'minikube create'", correct: false },
                    { text: "Durch den Befehl 'minikube cluster start'", correct: false }
                    ]
                    },
                    {
                    question: "Wie kann ein Minikube-Cluster gestoppt werden?",
                    answers: [
                    { text: "Durch den Befehl 'minikube stop'", correct: true },
                    { text: "Durch den Befehl 'minikube delete'", correct: false },
                    { text: "Durch den Befehl 'minikube halt'", correct: false },
                    { text: "Durch den Befehl 'minikube cluster stop'", correct: false }
                    ]
                    },
                    {
                    question: "Wie kann der Status eines Minikube-Clusters abgefragt werden?",
                    answers: [
                    { text: "Durch den Befehl 'minikube status'", correct: true },
                    { text: "Durch den Befehl 'minikube info'", correct: false },
                    { text: "Durch den Befehl 'minikube get status'", correct: false },
                    { text: "Durch den Befehl 'minikube cluster status'", correct: false }
                    ]
                    },
                    {
                    question: "Wie können Pods in einem Kubernetes-Cluster erstellt werden?",
                    answers: [
                    { text: "Durch die Verwendung des Befehls 'kubectl create pod'", correct: false },
                    { text: "Durch die Verwendung des Befehls 'kubectl run'", correct: true },
                    { text: "Durch die Verwendung des Befehls 'kubectl start pod'", correct: false },
                    { text: "Durch die Verwendung des Befehls 'kubectl new pod'", correct: false }
                    ]
                    },
                    {
                    question: "Wie kann der Status von Pods abgefragt werden?",
                    answers: [
                    { text: "Durch den Befehl 'kubectl get pods'", correct: true },
                    { text: "Durch den Befehl 'kubectl describe pod'", correct: false },
                    { text: "Durch den Befehl 'kubectl pod status'", correct: false },
                    { text: "Durch den Befehl 'kubectl inspect pod'", correct: false }
                    ]
                    },
                    {
                    question: "Wie kann auf einen laufenden Pod zugegriffen werden?",
                    answers: [
                    { text: "Durch den Befehl 'kubectl exec'", correct: true },
                    { text: "Durch den Befehl 'kubectl access'", correct: false },
                    { text: "Durch den Befehl 'kubectl attach'", correct: false },
                    { text: "Durch den Befehl 'kubectl connect'", correct: false }
                    ]
                    },
                    {
                    question: "Wie kann ein Pod gelöscht werden?",
                    answers: [
                    { text: "Durch den Befehl 'kubectl delete pod'", correct: true },
                    { text: "Durch den Befehl 'kubectl remove pod'", correct: false },
                    { text: "Durch den Befehl 'kubectl stop pod'", correct: false },
                    { text: "Durch den Befehl 'kubectl destroy pod'", correct: false }
                    ]
                    },
                    {
                    question: "Wie kann ein Kubernetes Service erstellt werden?",
                    answers: [
                    { text: "Durch den Befehl 'kubectl create service'", correct: false },
                    { text: "Durch den Befehl 'kubectl apply -f'", correct: true },
                    { text: "Durch den Befehl 'kubectl start service'", correct: false },
                    { text: "Durch den Befehl 'kubectl new service'", correct: false }
                    ]
                    },
                    {
                    question: "Wie kann der Status eines Services abgefragt werden?",
                    answers: [
                    { text: "Durch den Befehl 'kubectl get services'", correct: true },
                    { text: "Durch den Befehl 'kubectl describe service'", correct: false },
                    { text: "Durch den Befehl 'kubectl service status'", correct: false },
                    { text: "Durch den Befehl 'kubectl inspect service'", correct: false }
                    ]
                    },
                    {
                    question: "Wie kann der Zugriff auf einen Service in einem Kubernetes-Cluster getestet werden?",
                    answers: [
                    { text: "Durch den Befehl 'kubectl port-forward'", correct: true },
                    { text: "Durch den Befehl 'kubectl access-service'", correct: false },
                    { text: "Durch den Befehl 'kubectl expose service'", correct: false },
                    { text: "Durch den Befehl 'kubectl connect-service'", correct: false }
                    ]
                    },
                    {
                    question: "Wie kann ein Kubernetes Service aktualisiert werden?",
                    answers: [
                    { text: "Durch den Befehl 'kubectl edit service'", correct: false },
                    { text: "Durch den Befehl 'kubectl apply -f'", correct: true },
                    { text: "Durch den Befehl 'kubectl update service'", correct: false },
                    { text: "Durch den Befehl 'kubectl modify service'", correct: false }
                    ]
                    },
                    {
                    question: "Wie kann ein Kubernetes Service gelöscht werden?",
                    answers: [
                    { text: "Durch den Befehl 'kubectl delete service'", correct: true },
                    { text: "Durch den Befehl 'kubectl remove service'", correct: false },
                    { text: "Durch den Befehl 'kubectl stop service'", correct: false },
                    { text: "Durch den Befehl 'kubectl destroy service'", correct: false }
                    ]
                    },
                    {
                    question: "Wie kann der Service-Typ für einen Kubernetes Service festgelegt werden?",
                    answers: [
                    { text: "Durch die Angabe des Typs in der YAML-Datei", correct: true },
                    { text: "Durch den Befehl 'kubectl set service-type'", correct: false },
                    { text: "Durch den Befehl 'kubectl configure service-type'", correct: false },
                    { text: "Durch den Befehl 'kubectl assign service-type'", correct: false }
                    ]
                    },
                    {
                    question: "Welche Service-Typen stehen in Kubernetes zur Verfügung?",
                    answers: [
                    { text: "ClusterIP, NodePort, LoadBalancer, ExternalName", correct: true },
                    { text: "InternalIP, ExternalIP, Ingress, Endpoint", correct: false },
                    { text: "PrivateIP, PublicIP, Proxy, Redirect", correct: false },
                    { text: "IntraIP, InterIP, Firewall, Gateway", correct: false }
                    ]
                    },
                    {
                    question: "Wie kann die IP-Adresse eines Kubernetes Services abgerufen werden?",
                    answers: [
                    { text: "Durch den Befehl 'kubectl get service IP'", correct: false },
                    { text: "Durch den Befehl 'kubectl describe service'", correct: true },
                    { text: "Durch den Befehl 'kubectl service ip'", correct: false },
                    { text: "Durch den Befehl 'kubectl inspect service'", correct: false }
                    ]
                    },
                    {
                    question: "Wie kann ein Kubernetes Service auf einen anderen Service verweisen?",
                    answers: [
                    { text: "Durch die Angabe des Service-Namens in der YAML-Datei", correct: true },
                    { text: "Durch den Befehl 'kubectl refer service'", correct: false },
                    { text: "Durch den Befehl 'kubectl link service'", correct: false },
                    { text: "Durch den Befehl 'kubectl assign service'", correct: false }
                    ]
                    },
                    {
                    question: "Wie kann die Konfiguration eines Kubernetes Services überprüft werden?",
                    answers: [
                    { text: "Durch den Befehl 'kubectl get service'", correct: true },
                    { text: "Durch den Befehl 'kubectl describe service'", correct: false },
                    { text: "Durch den Befehl 'kubectl inspect service'", correct: false },
                    { text: "Durch den Befehl 'kubectl config service'", correct: false }
                    ]
                    },
                    {
                    question: "Wie kann ein Kubernetes Service skaliert werden?",
                    answers: [
                    { text: "Durch den Befehl 'kubectl scale'", correct: true },
                    { text: "Durch den Befehl 'kubectl resize'", correct: false },
                    { text: "Durch den Befehl 'kubectl adjust'", correct: false },
                    { text: "Durch den Befehl 'kubectl modify'", correct: false }
                    ]
                    },
                    {
                        question: "Welcher Befehl startet den Pod im Browser, indem er den Port 8001 auf den Port 80 des Pods weiterleitet?",
                        answers: [
                        { text: "kubectl port-forward mein-pod-mit-labels 8001:80", correct: true },
                        { text: "kubectl forward-port mein-pod-mit-labels 8001:80", correct: false },
                        { text: "kubectl expose pod mein-pod-mit-labels 8001:80", correct: false },
                        { text: "kubectl redirect port mein-pod-mit-labels 8001:80", correct: false }
                        ]
                        },
                        {
                        question: "Wie erstellt man einen Pod anhand einer Konfigurationsdatei 'pod-config-advanced.yaml'?",
                        answers: [
                        { text: "kubectl create -f pod-config-advanced.yaml", correct: false },
                        { text: "kubectl apply -f pod-config-advanced.yaml", correct: true },
                        { text: "kubectl start -f pod-config-advanced.yaml", correct: false },
                        { text: "kubectl deploy -f pod-config-advanced.yaml", correct: false }
                        ]
                        },
                        {
                        question: "Wie zeigt man eine Liste aller Pods im aktuellen Namespace an?",
                        answers: [
                        { text: "kubectl get pods", correct: true },
                        { text: "kubectl list pods", correct: false },
                        { text: "kubectl describe pods", correct: false },
                        { text: "kubectl show pods", correct: false }
                        ]
                        },
                        {
                        question: "Wie bekommt man eine ausführliche Beschreibung von 'mein-pod'?",
                        answers: [
                        { text: "kubectl describe pod mein-pod", correct: true },
                        { text: "kubectl inspect pod mein-pod", correct: false },
                        { text: "kubectl get pod mein-pod", correct: false },
                        { text: "kubectl details pod mein-pod", correct: false }
                        ]
                        },
                        {
                        question: "Wie gibt man die Logs von 'mein-pod' aus?",
                        answers: [
                        { text: "kubectl logs mein-pod", correct: true },
                        { text: "kubectl show logs mein-pod", correct: false },
                        { text: "kubectl get logs mein-pod", correct: false },
                        { text: "kubectl describe logs mein-pod", correct: false }
                        ]
                        },
                        {
                        question: "Wie zeigt man die Ressourcenauslastung (CPU, Speicher) für 'mein-pod' an?",
                        answers: [
                        { text: "kubectl top pod mein-pod", correct: true },
                        { text: "kubectl show resources mein-pod", correct: false },
                        { text: "kubectl get resources mein-pod", correct: false },
                        { text: "kubectl describe resources mein-pod", correct: false }
                        ]
                        },
                        {
                        question: "Wie zeigt man die Ressourcenauslastung aller Pods in allen Namespaces an?",
                        answers: [
                        { text: "kubectl top pod --all-namespaces", correct: true },
                        { text: "kubectl show resources --all-namespaces", correct: false },
                        { text: "kubectl get resources --all-namespaces", correct: false },
                        { text: "kubectl describe resources --all-namespaces", correct: false }
                        ]
                        },
                        {
                        question: "Wie gibt man die Logs von 'mein-pod' in Echtzeit aus?",
                        answers: [
                        { text: "kubectl logs -f mein-pod", correct: true },
                        { text: "kubectl stream logs mein-pod", correct: false },
                        { text: "kubectl follow logs mein-pod", correct: false },
                        { text: "kubectl tail logs mein-pod", correct: false }
                        ]
                        },
                        {
                        question: "Wie gibt man die Logs von einem beendeten Pod 'mein-pod' aus?",
                        answers: [
                        { text: "kubectl logs -p mein-pod", correct: true },
                        { text: "kubectl show logs -p mein-pod", correct: false },
                        { text: "kubectl get logs -p mein-pod", correct: false },
                        { text: "kubectl describe logs -p mein-pod", correct: false }
                        ]
                        },
                        {
                        question: "Wie löscht man den Pod 'mein-pod'?",
                        answers: [
                        { text: "kubectl delete pod mein-pod", correct: true },
                        { text: "kubectl remove pod mein-pod", correct: false },
                        { text: "kubectl stop pod mein-pod", correct: false },
                        { text: "kubectl destroy pod mein-pod", correct: false }
                        ]
                        }
                    ]
                   





function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
   
    while (currentIndex != 0) {
  
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
     
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }