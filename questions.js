const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Transfer Markup Language", "Hyper Text Makeup Language", "Hyper Text Markup Language", "Hyper Transfer Makeup Language"],
        correctAnswer: 2,
    },
    {
        question: "Which programming language is known for its use in web development and can be run in a browser?",
        options: ["Java", "Python", "C#", "JavaScript"],
        correctAnswer: 3,
    },
    {
        question: "What is the main purpose of CSS (Cascading Style Sheets) in web development?",
        options: ["To define the structure of a webpage", "To control the layout and presentation of a webpage", "To create dynamic web applications", "To handle server-side operations"],
        correctAnswer: 1,
    },
    {
        question: "What does SEO stand for in the context of websites?",
        options: ["Search Engine Optimization", "Software Engineering Operations", "Security Enforcement Operations", "Systematic External Observation"],
        correctAnswer: 0,
    },
    {
        question: "Which company developed the popular programming language Python?",
        options: ["Microsoft", "Apple", "Google", "Python Software Foundation"],
        correctAnswer: 3,
    },
    {
        question: "What is the purpose of a version control system like Git?",
        options: ["To manage databases", "To track changes in source code and collaborate on software development", "To optimize website performance", "To create backups of files"],
        correctAnswer: 1,
    },
    {
        question: "Which data structure follows the Last In, First Out (LIFO) principle?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correctAnswer: 1,
    },
    {
        question: "What is the primary function of an operating system?",
        options: ["To run web browsers", "To manage hardware resources and provide services for software", "To develop software applications", "To provide internet connectivity"],
        correctAnswer: 1,
    },
    {
        question: "What does HTTP stand for in web addresses (e.g., http://www.example.com)?",
        options: ["HyperText Transmission Protocol", "High-Tech Transfer Protocol", "Hyper Transfer Text Protocol", "Hyper Transfer Transmission Protocol"],
        correctAnswer: 0,
    },
    {
        question: "Which programming language is commonly used for data analysis and machine learning?",
        options: ["Java", "Python", "C++", "Ruby"],
        correctAnswer: 1,
    },
    {
        question: "What does CPU stand for in computing?",
        options: ["Central Processing Unit", "Computer Personal Unit", "Central Process Unit", "Control Process Unit"],
        correctAnswer: 1,
    },
    {
        question: "Who is the co-founder of Apple Inc. alongside Steve Jobs?",
        options: ["Steve Wozniak", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
        correctAnswer: 0,
    },
    {
        question: "What does SQL stand for in database management?",
        options: ["Structured Query Language", "Server Query Language", "System Query Language", "Simple Query Language"],
        correctAnswer: 0,
    },
    {
        question: "What is the purpose of the 'git' version control system?",
        options: ["Managing source code", "Sending emails", "Playing games", "Creating spreadsheets"],
        correctAnswer: 0,
    },
    {
        question: "What is the primary function of a firewall in computer networking?",
        options: ["Blocking unauthorized access", "Enhancing internet speed", "Managing emails", "Scanning for viruses"],
        correctAnswer: 0,
    },
    {
        question: "Which programming language is often used for web development alongside HTML and CSS?",
        options: ["JavaScript", "Java", "Python", "C++"],
        correctAnswer: 0,
    },
    {
        question: "What does ISP stand for in the context of internet services?",
        options: ["Internet Service Provider", "Internet Security Protocol", "Internal Service Protocol", "Internet Security Provider"],
        correctAnswer: 0,
    },
    {
        question: "Who is the co-founder of Microsoft alongside Bill Gates?",
        options: ["Paul Allen", "Steve Jobs", "Larry Page", "Mark Zuckerberg"],
        correctAnswer: 0,
    },
    {
        question: "What is the primary function of a router in computer networking?",
        options: ["Directing network traffic", "Playing music", "Running video games", "Printing documents"],
        correctAnswer: 0,
    },
    {
        question: "Who is the founder of SpaceX and Tesla?",
        options: ["Elon Musk", "Jeff Bezos", "Mark Zuckerberg", "Larry Page"],
        correctAnswer: 0,
    },
    {
        question: "Which programming language is often used for data analysis and scientific computing?",
        options: ["Python", "Java", "Ruby", "C++"],
        correctAnswer: 0,
    },
    {
        question: "What does API stand for in software development?",
        options: ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Advanced Process Interface"],
        correctAnswer: 0,
    },
    {
        question: "What is the purpose of a VPN (Virtual Private Network)?",
        options: ["Securing internet connections", "Sending faxes", "Playing video games", "Writing code"],
        correctAnswer: 0,
    },
    {
        question: "Who is known as the 'father of the World Wide Web'?",
        options: ["Tim Berners-Lee", "Steve Jobs", "Bill Gates", "Larry Page"],
        correctAnswer: 0,
    },
    {
        question: "What does GUI stand for in computing?",
        options: ["Graphical User Interface", "General User Interface", "Graphical User Instruction", "General User Instruction"],
        correctAnswer: 0,
    },
    {
        question: "What does HTTPS stand for in web security?",
        options: ["Hypertext Transfer Protocol Secure", "Hyperlink Text Protocol Secure", "High-Level Transfer Protocol Secure", "Hypertext Transmission Protocol Secure"],
        correctAnswer: 0,
    },
    {
        question: "Who is the co-founder of Apple Inc. alongside Steve Jobs?",
        options: ["Steve Wozniak", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
        correctAnswer: 0,
    },
    {
        question: "Which programming language is often used for game development?",
        options: ["C++", "Java", "Python", "Ruby"],
        correctAnswer: 0,
    },
    {
        question: "What does SQL stand for in database management?",
        options: ["Structured Query Language", "Server Query Language", "System Query Language", "Simple Query Language"],
        correctAnswer: 0,
    },
    {
        question: "What is the purpose of the 'git' version control system?",
        options: ["Managing source code", "Sending emails", "Playing games", "Creating spreadsheets"],
        correctAnswer: 0,
    },
    {
        question: "What is the primary function of an operating system?",
        options: ["Managing hardware resources", "Running applications", "Storing data", "Creating websites"],
        correctAnswer: 0,
    },
    {
        question: "Who is often called the 'father of the computer'?",
        options: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
        correctAnswer: 0,
    },
    {
        question: "Which company developed the JavaScript programming language?",
        options: ["Netscape", "Microsoft", "Oracle", "Adobe"],
        correctAnswer: 0,
    },
    {
        question: "What does HTML stand for?",
        options: ["Hypertext Transfer Markup Language", "Hyperlink Text Markup Language", "High-Level Text Markup Language", "Hyper Transfer Text Markup Language"],
        correctAnswer: 0,
    },
    {
        question: "Which programming language is often used for artificial intelligence and machine learning?",
        options: ["Python", "Java", "Ruby", "C#"],
        correctAnswer: 0,
    },
    {
        question: "What does URL stand for in web addresses?",
        options: ["Universal Resource Locator", "Uniform Resource Locator", "Universal Reference Link", "Uniform Reference Link"],
        correctAnswer: 0,
    },
    {
        question: "What does RAM stand for in computing?",
        options: ["Random Access Memory", "Read-Only Memory", "Rapid Application Management", "Real-time Access Memory"],
        correctAnswer: 0,
    },
    {
        question: "Which programming language is known as the 'mother of all languages'?",
        options: ["COBOL", "Fortran", "Assembly Language", "C++"],
        correctAnswer: 1,
    },
    {
        question: "What is the primary function of an operating system?",
        options: ["Managing hardware resources", "Running applications", "Storing data", "Creating websites"],
        correctAnswer: 0,
    },
    {
        question: "Who is often called the 'father of the computer'?",
        options: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
        correctAnswer: 0,
    },
    {
        question: "Which company developed the JavaScript programming language?",
        options: ["Oracle", "Microsoft", "Netscape", "Adobe"],
        correctAnswer: 2,
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyperlink Text Markup Language", "Hypertext Transfer Markup Language", "High-Level Text Markup Language", "Hyper Transfer Text Markup Language"],
        correctAnswer: 1,
    },
    {
        question: "Which programming language is often used for artificial intelligence and machine learning?",
        options: ["Python", "Java", "Ruby", "C#"],
        correctAnswer: 0,
    },
    {
        question: "What does URL stand for in web addresses?",
        options: ["Universal Resource Locator", "Uniform Resource Locator", "Universal Reference Link", "Uniform Reference Link"],
        correctAnswer: 1,
    },
    {
        question: "Who is the co-founder of Apple Inc. alongside Steve Jobs?",
        options: ["Steve Wozniak", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
        correctAnswer: 0,
    },
    {
        question: "What does SQL stand for in database management?",
        options: ["Structured Query Language", "Server Query Language", "System Query Language", "Simple Query Language"],
        correctAnswer: 0,
    },
    {
        question: "What is the purpose of the 'git' version control system?",
        options: ["Managing source code", "Sending emails", "Playing games", "Creating spreadsheets"],
        correctAnswer: 0,
    },
    {
        question: "What is the primary function of a firewall in computer networking?",
        options: ["Blocking unauthorized access", "Enhancing internet speed", "Managing emails", "Scanning for viruses"],
        correctAnswer: 0,
    },
    {
        question: "Which programming language is often used for web development alongside HTML and CSS?",
        options: ["JavaScript", "Java", "Python", "C++"],
        correctAnswer: 0,
    },
    {
        question: "What does ISP stand for in the context of internet services?",
        options: ["Internet Service Provider", "Internet Security Protocol", "Internal Service Protocol", "Internet Security Provider"],
        correctAnswer: 0,
    },
    {
        question: "Which company developed the Windows operating system?",
        options: ["Microsoft", "Apple", "Google", "Linux"],
        correctAnswer: 0,
    },
    {
        question: "What is the primary function of a router in computer networking?",
        options: ["Directing network traffic", "Playing music", "Running video games", "Printing documents"],
        correctAnswer: 0,
    },
    {
        question: "Which programming language is known for its use in scientific computing and data analysis?",
        options: ["R", "Ruby", "Rust", "React"],
        correctAnswer: 0,
    },
    {
        question: "What does GUI stand for in computing?",
        options: ["Graphical User Interface", "General User Interface", "Graphical User Instruction", "General User Instruction"],
        correctAnswer: 0,
    },
    {
        question: "What does HTTP stand for in web communication?",
        options: ["Hypertext Transfer Protocol", "Hypertext Transmission Protocol", "High-level Transfer Protocol", "Hyperlink Text Protocol"],
        correctAnswer: 0,
    },
    {
        question: "Who is the co-founder of Microsoft alongside Bill Gates?",
        options: ["Paul Allen", "Steve Jobs", "Larry Page", "Mark Zuckerberg"],
        correctAnswer: 0,
    },
    {
        question: "Which programming language is often used for game development?",
        options: ["C++", "Java", "Python", "Ruby"],
        correctAnswer: 0,
    },
    {
        question: "What is the purpose of an IDE (Integrated Development Environment)?",
        options: ["Simplifying code development", "Sending emails", "Watching movies", "Writing poetry"],
        correctAnswer: 0,
    },
    {
        question: "What is the main function of a DNS (Domain Name System) server?",
        options: ["Resolving domain names to IP addresses", "Sending emails", "Playing music", "Calculating math problems"],
        correctAnswer: 0,
    },
    {
        question: "Who is the founder of Amazon?",
        options: ["Jeff Bezos", "Elon Musk", "Mark Zuckerberg", "Larry Page"],
        correctAnswer: 0,
    },
    {
        question: "Which programming language is known for its simplicity and readability, often used for beginners?",
        options: ["Python", "Java", "C++", "Ruby"],
        correctAnswer: 0,
    },
    {
        question: "What does API stand for in software development?",
        options: ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Advanced Process Interface"],
        correctAnswer: 0,
    },
    {
        question: "What is the purpose of a VPN (Virtual Private Network)?",
        options: ["Securing internet connections", "Sending faxes", "Playing video games", "Writing code"],
        correctAnswer: 0,
    },
    {
        question: "Who is known as the 'father of the World Wide Web'?",
        options: ["Tim Berners-Lee", "Steve Jobs", "Bill Gates", "Larry Page"],
        correctAnswer: 0,
    },
    {
        question: "What does CSS stand for in web development?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Central Style Sheets", "Continuous Style Sheets"],
        correctAnswer: 0,
    },
    {
        question: "Which programming language is often used for mobile app development for iOS devices?",
        options: ["Swift", "Java", "C++", "Python"],
        correctAnswer: 0,
    },
    {
        question: "What is the purpose of a database management system (DBMS)?",
        options: ["Storing and managing data", "Sending text messages", "Playing video games", "Editing photos"],
        correctAnswer: 0,
    },
    {
        question: "Who developed the Linux operating system?",
        options: ["Linus Torvalds", "Richard Stallman", "Mark Zuckerberg", "Larry Page"],
        correctAnswer: 0,
    },
    {
        question: "What does IoT stand for in technology?",
        options: ["Internet of Things", "Information on Things", "Input of Things", "Internet of Theory"],
        correctAnswer: 0,
    },
    {
        question: "Which company developed the Android operating system?",
        options: ["Google", "Apple", "Microsoft", "Linux"],
        correctAnswer: 0,
    },
    {
        question: "What is the purpose of a microcontroller?",
        options: ["Controlling small electronic devices", "Sending emails", "Playing music", "Editing documents"],
        correctAnswer: 0,
    },
    {
        question: "Who is the co-founder of Google alongside Larry Page?",
        options: ["Sergey Brin", "Mark Zuckerberg", "Jeff Bezos", "Elon Musk"],
        correctAnswer: 0,
    },
    {
        question: "Which programming language is often used for web scraping and automation?",
        options: ["Python", "Java", "Ruby", "C#"],
        correctAnswer: 0,
    },
];




// Question: What does SSL stand for in web security?
// Choices: Secure Sockets Layer, Super Speedy Links, Security Service Layer, Simple Socket Layer
// Correct Answer: Secure Sockets Layer

// Question: What is the primary function of a proxy server?
// Choices: Acting as an intermediary, Cooking food, Playing games, Sending letters
// Correct Answer: Acting as an intermediary

// Question: Who is the co-founder of Twitter alongside Jack Dorsey and Biz Stone?
// Choices: Evan Williams, Mark Zuckerberg, Jeff Bezos, Elon Musk
// Correct Answer: Evan Williams

// Question: What does CPU cache help improve in computer performance?
// Choices: Speeding up data access, Sending emails, Playing video games, Writing code
// Correct Answer: Speeding up data access

// Question: What is the purpose of a CAPTCHA in online forms?
// Choices: Preventing automated submissions, Measuring website traffic, Playing music, Calculating math problems
// Correct Answer: Preventing automated submissions

// Question: Who is the co-founder of WhatsApp alongside Brian Acton?
// Choices: Jan Koum, Mark Zuckerberg, Jeff Bezos, Elon Musk
// Correct Answer: Jan Koum

// Question: Which programming language is known for its use in web development on the server-side?
// Choices: Node.js, Ruby, Java, Python
// Correct Answer: Node.js

// Question: What does DNS spoofing refer to in cybersecurity?
// Choices: Manipulating DNS records, Creating fake websites, Sending spam emails, Designing logos
// Correct Answer: Manipulating DNS records

// Question: What is the primary function of a CDN (Content Delivery Network)?
// Choices: Distributing content to multiple locations, Sending emails, Playing games, Editing documents
// Correct Answer: Distributing content to multiple locations

// Question: Who is the co-founder of Reddit alongside Steve Huffman?
// Choices: Alexis Ohanian, Mark Zuckerberg, Jeff Bezos, Elon Musk
// Correct Answer: Alexis Ohanian

// Question: Which programming language is often used for data analysis and statistical computing?
// Choices: R, Python, Ruby, C#
// Correct Answer: R

// Question: What does HTML5 stand for in web development?
// Choices: HyperText Markup Language 5, High-Level Text Markup Language 5, Hyperlink Text Markup Language 5, Hyper Transfer Text Markup Language 5
// Correct Answer: HyperText Markup Language 5

// Question: What is the purpose of a bug tracking system?
// Choices: Managing software issues, Sending emails, Playing music, Writing poetry
// Correct Answer: Managing software issues

// Question: What is the main function of a load balancer in server management?
// Choices: Distributing network traffic, Cooking food, Playing video games, Printing documents
// Correct Answer: Distributing network traffic

// Question: Who is known for developing the C programming language?
// Choices: Dennis Ritchie, Steve Jobs, Bill Gates, Tim Berners-Lee
// Correct Answer: Dennis Ritchie

// Question: What does SSH stand for in secure communication?
// Choices: Secure Shell, Secure Socket Hosting, Safe Server Handling, Simple Socket Handling
// Correct Answer: Secure Shell

// Question: What is the purpose of a containerization platform like Docker?
// Choices: Packaging and running applications, Sending emails, Playing music, Editing photos
// Correct Answer: Packaging and running applications

// Question: Who is the co-founder of Airbnb alongside Brian Chesky and Joe Gebbia?
// Choices: Nathan Blecharczyk, Mark Zuckerberg, Jeff Bezos, Elon Musk
// Correct Answer: Nathan Blecharczyk

// Question: Which programming language is known for its use in scientific and numerical computing?
// Choices: MATLAB, Ruby, Python, C#
// Correct Answer: MATLAB

// Question: What does HTTPS stand for in web security?
// Choices: Hypertext Transfer Protocol Secure, Hyperlink Text Protocol Secure, High-Level Transfer Protocol Secure, Hypertext Transmission Protocol Secure
// Correct Answer: Hypertext Transfer Protocol Secure

// Question: What is the purpose of a virtual machine (VM)?
// Choices: Running multiple operating systems on a single host, Sending text messages, Playing video games, Editing documents
// Correct Answer: Running multiple operating systems on a single host

// Question: Who is the co-founder of LinkedIn alongside Reid Hoffman?
// Choices: Jeff Weiner, Mark Zuckerberg, Jeff Bezos, Elon Musk
// Correct Answer: Jeff Weiner

// Question: Which programming language is known for its use in building mobile apps for Android?
// Choices: Java, Python, Ruby, Swift
// Correct Answer: Java

// Question: What does UX/UI design refer to in software development?
// Choices: User Experience/User Interface design, User Access/Interface design, User Experience/Interactive design, User Access/Interactive design
// Correct Answer: User Experience/User Interface design

// Question: What is the main function of a packet analyzer (sniffer) in network troubleshooting?
// Choices: Capturing and analyzing network traffic, Cooking food, Playing games, Sending letters
// Correct Answer: Capturing and analyzing network traffic

// Question: Who is known as the "father of artificial intelligence"?
// Choices: Alan Turing, Steve Jobs, Bill Gates, Tim Berners-Lee
// Correct Answer: Alan Turing

// Question: What does XSS stand for in web security?
// Choices: Cross-Site Scripting, Extra Secure Socket System, External Site Security, Extended Site Scripting
// Correct Answer: Cross-Site Scripting

// Question: What is the primary function of a WAF (Web Application Firewall)?
// Choices: Protecting web applications from attacks, Sending emails, Playing music, Calculating math problems
// Correct Answer: Protecting web applications from attacks

// Question: Who is known as the "father of modern computer science"?
// Choices: Alan Turing, Steve Jobs, Bill Gates, Tim Berners-Lee
// Correct Answer: Alan Turing

// Question: What does CDN stand for in web hosting?
// Choices: Content Delivery Network, Central Domain Network, Continuous Data Network, Content Distribution Network
// Correct Answer: Content Delivery Network

// Question: What is the purpose of a VPN (Virtual Private Network)?
// Choices: Securing internet connections, Sending faxes, Playing video games, Writing code
// Correct Answer: Securing internet connections

// Question: Who is the co-founder of SpaceX and Tesla?
// Choices: Elon Musk, Jeff Bezos, Mark Zuckerberg, Larry Page
// Correct Answer: Elon Musk

// Question: Which programming language is often used for game development?
// Choices: C++, Java, Python, Ruby
// Correct Answer: C++

// Question: What does API stand for in software development?
// Choices: Application Programming Interface, Advanced Programming Interface, Application Process Interface, Advanced Process Interface
// Correct Answer: Application Programming Interface

// Question: What is the purpose of a firewall in computer networking?
// Choices: Filtering network traffic, Sending emails, Playing music, Editing photos
// Correct Answer: Filtering network traffic

// Question: Who is the co-founder of Apple Inc. alongside Steve Jobs?
// Choices: Steve Wozniak, Bill Gates, Mark Zuckerberg, Larry Page
// Correct Answer: Steve Wozniak

// Question: What does HTML stand for in web development?
// Choices: Hyperlink Text Markup Language, Hypertext Transfer Markup Language, High-Level Text Markup Language, Hyper Transfer Text Markup Language
// Correct Answer: Hypertext Transfer Markup Language

// Question: Which programming language is often used for artificial intelligence and machine learning?
// Choices: Python, Java, Ruby, C#
// Correct Answer: Python

// Question: What does URL stand for in web addresses?
// Choices: Universal Resource Locator, Uniform Resource Locator, Universal Reference Link, Uniform Reference Link
// Correct Answer: Uniform Resource Locator

// Question: Who is often called the "father of the computer"?
// Choices: Alan Turing, Steve Jobs, Bill Gates, Tim Berners-Lee
// Correct Answer: Alan Turing

// Question: Which company developed the JavaScript programming language?
// Choices: Oracle, Microsoft, Netscape, Adobe
// Correct Answer: Netscape

// Question: What does CSS stand for in web development?
// Choices: Cascading Style Sheets, Computer Style Sheets, Central Style Sheets, Continuous Style Sheets
// Correct Answer: Cascading Style Sheets

// Question: What does HTTP stand for in web communication?
// Choices: Hypertext Transfer Protocol, Hypertext Transmission Protocol, High-level Transfer Protocol, Hyperlink Text Protocol
// Correct Answer: Hypertext Transfer Protocol

// Question: Who is the co-founder of Microsoft alongside Bill Gates?
// Choices: Paul Allen, Steve Jobs, Larry Page, Mark Zuckerberg
// Correct Answer: Paul Allen

// Question: Which programming language is often used for web development alongside HTML and CSS?
// Choices: JavaScript, Java, Python, C++
// Correct Answer: JavaScript

// Question: What does ISP stand for in the context of internet services?
// Choices: Internet Service Provider, Internet Security Protocol, Internal Service Protocol, Internet Security Provider
// Correct Answer: Internet Service Provider

// Question: Which company developed the Windows operating system?
// Choices: Microsoft, Apple, Google, Linux
// Correct Answer: Microsoft

// Question: What is the primary function of a router in computer networking?
// Choices: Directing network traffic, Playing music, Running video games, Printing documents
// Correct Answer: Directing network traffic

// Question: Who is the founder of SpaceX and Tesla?
// Choices: Elon Musk, Jeff Bezos, Mark Zuckerberg, Larry Page
// Correct Answer: Elon Musk

// Question: Which programming language is often used for data analysis and scientific computing?
// Choices: Python, Java, Ruby, C++
// Correct Answer: Python

// Question: What does API stand for in software development?
// Choices: Application Programming Interface, Advanced Programming Interface, Application Process Interface, Advanced Process Interface
// Correct Answer: Application Programming Interface

// Question: What is the purpose of a VPN (Virtual Private Network)?
// Choices: Securing internet connections, Sending faxes, Playing video games, Writing code
// Correct Answer: Securing internet connections

// Question: Who is known as the "father of the World Wide Web"?
// Choices: Tim Berners-Lee, Steve Jobs, Bill Gates, Larry Page
// Correct Answer: Tim Berners-Lee

// Question: What does GUI stand for in computing?
// Choices: Graphical User Interface, General User Interface, Graphical User Instruction, General User Instruction
// Correct Answer: Graphical User Interface

// Question: What does HTTPS stand for in web security?
// Choices: Hypertext Transfer Protocol Secure, Hyperlink Text Protocol Secure, High-Level Transfer Protocol Secure, Hypertext Transmission Protocol Secure
// Correct Answer: Hypertext Transfer Protocol Secure

// Question: Who is the co-founder of Apple Inc. alongside Steve Jobs?
// Choices: Steve Wozniak, Bill Gates, Mark Zuckerberg, Larry Page
// Correct Answer: Steve Wozniak

// Question: Which programming language is often used for game development?
// Choices: C++, Java, Python, Ruby
// Correct Answer: C++

// Question: What does SQL stand for in database management?
// Choices: Structured Query Language, Server Query Language, System Query Language, Simple Query Language
// Correct Answer: Structured Query Language

// Question: What is the purpose of the "git" version control system?
// Choices: Managing source code, Sending emails, Playing games, Creating spreadsheets
// Correct Answer: Managing source code

// Question: What is the primary function of an operating system?
// Choices: Managing hardware resources, Running applications, Storing data, Creating websites
// Correct Answer: Managing hardware resources

// Question: Who is often called the "father of the computer"?
// Choices: Alan Turing, Steve Jobs, Bill Gates, Tim Berners-Lee
// Correct Answer: Alan Turing

// Question: Which company developed the JavaScript programming language?
// Choices: Oracle, Microsoft, Netscape, Adobe
// Correct Answer: Netscape

// Question: What does HTML stand for?
// Choices: Hyperlink Text Markup Language, Hypertext Transfer Markup Language, High-Level Text Markup Language, Hyper Transfer Text Markup Language
// Correct Answer: Hypertext Transfer Markup Language

// Question: Which programming language is often used for artificial intelligence and machine learning?
// Choices: Python, Java, Ruby, C#
// Correct Answer: Python

// Question: What does URL stand for in web addresses?
// Choices: Universal Resource Locator, Uniform Resource Locator, Universal Reference Link, Uniform Reference Link
// Correct Answer: Uniform Resource Locator

// Question: Who is the co-founder of Apple Inc. alongside Steve Jobs?
// Choices: Steve Wozniak, Bill Gates, Mark Zuckerberg, Larry Page
// Correct Answer: Steve Wozniak

// Question: What does SQL stand for in database management?
// Choices: Structured Query Language, Server Query Language, System Query Language, Simple Query Language
// Correct Answer: Structured Query Language

// Question: What is the purpose of the "git" version control system?
// Choices: Managing source code, Sending emails, Playing games, Creating spreadsheets
// Correct Answer: Managing source code

// Question: What is the primary function of a firewall in computer networking?
// Choices: Blocking unauthorized access, Enhancing internet speed, Managing emails, Scanning for viruses
// Correct Answer: Blocking unauthorized access

// Question: Which programming language is often used for web development alongside HTML and CSS?
// Choices: JavaScript, Java, Python, C++
// Correct Answer: JavaScript

// Question: What does ISP stand for in the context of internet services?
// Choices: Internet Service Provider, Internet Security Protocol, Internal Service Protocol, Internet Security Provider
// Correct Answer: Internet Service Provider

// Question: Who is the co-founder of Microsoft alongside Bill Gates?
// Choices: Paul Allen, Steve Jobs, Larry Page, Mark Zuckerberg
// Correct Answer: Paul Allen

// Question: What is the primary function of an operating system?
// Choices: Managing hardware resources, Running applications, Storing data, Creating websites
// Correct Answer: Managing hardware resources

// Question: Who is often called the "father of the computer"?
// Choices: Alan Turing, Steve Jobs, Bill Gates, Tim Berners-Lee
// Correct Answer: Alan Turing

// Question: Which company developed the JavaScript programming language?
// Choices: Oracle, Microsoft, Netscape, Adobe
// Correct Answer: Netscape

// Question: What does HTML stand for?
// Choices: Hyperlink Text Markup Language, Hypertext Transfer Markup Language, High-Level Text Markup Language, Hyper Transfer Text Markup Language
// Correct Answer: Hypertext Transfer Markup Language

// Question: Which programming language is often used for artificial intelligence and machine learning?
// Choices: Python, Java, Ruby, C#
// Correct Answer: Python

// Question: What does URL stand for in web addresses?
// Choices: Universal Resource Locator, Uniform Resource Locator, Universal Reference Link, Uniform Reference Link
// Correct Answer: Uniform Resource Locator

// Question: Who is the co-founder of Apple Inc. alongside Steve Jobs?
// Choices: Steve Wozniak, Bill Gates, Mark Zuckerberg, Larry Page
// Correct Answer: Steve Wozniak

// Question: What does SQL stand for in database management?
// Choices: Structured Query Language, Server Query Language, System Query Language, Simple Query Language
// Correct Answer: Structured Query Language

// Question: What is the purpose of the "git" version control system?
// Choices: Managing source code, Sending emails, Playing games, Creating spreadsheets
// Correct Answer: Managing source code

// Question: What is the primary function of a firewall in computer networking?
// Choices: Blocking unauthorized access, Enhancing internet speed, Managing emails, Scanning for viruses
// Correct Answer: Blocking unauthorized access

// Question: Which programming language is often used for web development alongside HTML and CSS?
// Choices: JavaScript, Java, Python, C++
// Correct Answer: JavaScript

// Question: What does ISP stand for in the context of internet services?
// Choices: Internet Service Provider, Internet Security Protocol, Internal Service Protocol, Internet Security Provider
// Correct Answer: Internet Service Provider

// Question: Who is the co-founder of Microsoft alongside Bill Gates?
// Choices: Paul Allen, Steve Jobs, Larry Page, Mark Zuckerberg
// Correct Answer: Paul Allen

// Question: What is the primary function of a router in computer networking?
// Choices: Directing network traffic, Playing music, Running video games, Printing documents
// Correct Answer: Directing network traffic

// Question: Who is the founder of SpaceX and Tesla?
// Choices: Elon Musk, Jeff Bezos, Mark Zuckerberg, Larry Page
// Correct Answer: Elon Musk

// Question: Which programming language is often used for data analysis and scientific computing?
// Choices: Python, Java, Ruby, C++
// Correct Answer: Python

// Question: What does API stand for in software development?
// Choices: Application Programming Interface, Advanced Programming Interface, Application Process Interface, Advanced Process Interface
// Correct Answer: Application Programming Interface

// Question: What is the purpose of a VPN (Virtual Private Network)?
// Choices: Securing internet connections, Sending faxes, Playing video games, Writing code
// Correct Answer: Securing internet connections

// Question: Who is known as the "father of the World Wide Web"?
// Choices: Tim Berners-Lee, Steve Jobs, Bill Gates, Larry Page
// Correct Answer: Tim Berners-Lee

// Question: What does GUI stand for in computing?
// Choices: Graphical User Interface, General User Interface, Graphical User Instruction, General User Instruction
// Correct Answer: Graphical User Interface

// Question: What does HTTPS stand for in web security?
// Choices: Hypertext Transfer Protocol Secure, Hyperlink Text Protocol Secure, High-Level Transfer Protocol Secure, Hypertext Transmission Protocol Secure
// Correct Answer: Hypertext Transfer Protocol Secure

// Question: Who is the co-founder of Apple Inc. alongside Steve Jobs?
// Choices: Steve Wozniak, Bill Gates, Mark Zuckerberg, Larry Page
// Correct Answer: Steve Wozniak

// Question: Which programming language is often used for game development?
// Choices: C++, Java, Python, Ruby
// Correct Answer: C++

// Question: What does SQL stand for in database management?
// Choices: Structured Query Language, Server Query Language, System Query Language, Simple Query Language
// Correct Answer: Structured Query Language

// Question: What is the purpose of the "git" version control system?
// Choices: Managing source code, Sending emails, Playing games, Creating spreadsheets
// Correct Answer: Managing source code

// Question: What is the primary function of an operating system?
// Choices: Managing hardware resources, Running applications, Storing data, Creating websites
// Correct Answer: Managing hardware resources

// Question: Who is often called the "father of the computer"?
// Choices: Alan Turing, Steve Jobs, Bill Gates, Tim Berners-Lee
// Correct Answer: Alan Turing

// Question: Which company developed the JavaScript programming language?
// Choices: Oracle, Microsoft, Netscape, Adobe
// Correct Answer: Netscape

// Question: What does HTML stand for?
// Choices: Hyperlink Text Markup Language, Hypertext Transfer Markup Language, High-Level Text Markup Language, Hyper Transfer Text Markup Language
// Correct Answer: Hypertext Transfer Markup Language

// Question: Which programming language is often used for artificial intelligence and machine learning?
// Choices: Python, Java, Ruby, C#
// Correct Answer: Python

// Question: What does URL stand for in web addresses?
// Choices: Universal Resource Locator, Uniform Resource Locator, Universal Reference Link, Uniform Reference Link
// Correct Answer: Uniform Resource Locator

// Question: Who is the co-founder of Apple Inc. alongside Steve Jobs?
// Choices: Steve Wozniak, Bill Gates, Mark Zuckerberg, Larry Page
// Correct Answer: Steve Wozniak

// Question: What does SQL stand for in database management?
// Choices: Structured Query Language, Server Query Language, System Query Language, Simple Query Language
// Correct Answer: Structured Query Language

// Question: What is the purpose of the "git" version control system?
// Choices: Managing source code, Sending emails, Playing games, Creating spreadsheets
// Correct Answer: Managing source code

// Question: What is the primary function of a firewall in computer networking?
// Choices: Blocking unauthorized access, Enhancing internet speed, Managing emails, Scanning for viruses
// Correct Answer: Blocking unauthorized access

// Question: Which programming language is often used for web development alongside HTML and CSS?
// Choices: JavaScript, Java, Python, C++
// Correct Answer: JavaScript

// Question: What does ISP stand for in the context of internet services?
// Choices: Internet Service Provider, Internet Security Protocol, Internal Service Protocol, Internet Security Provider
// Correct Answer: Internet Service Provider

// Question: Who is the co-founder of Microsoft alongside Bill Gates?
// Choices: Paul Allen, Steve Jobs, Larry Page, Mark Zuckerberg
// Correct Answer: Paul Allen

// Question: What is the primary function of a router in computer networking?
// Choices: Directing network traffic, Playing music, Running video games, Printing documents
// Correct Answer: Directing network traffic

// Question: Who is the founder of SpaceX and Tesla?
// Choices: Elon Musk, Jeff Bezos, Mark Zuckerberg, Larry Page
// Correct Answer: Elon Musk

// Question: Which programming language is often used for data analysis and scientific computing?
// Choices: Python, Java, Ruby, C++
// Correct Answer: Python

// Question: What does API stand for in software development?
// Choices: Application Programming Interface, Advanced Programming Interface, Application Process Interface, Advanced Process Interface
// Correct Answer: Application Programming Interface

// Question: What is the purpose of a VPN (Virtual Private Network)?
// Choices: Securing internet connections, Sending faxes, Playing video games, Writing code
// Correct Answer: Securing internet connections

// Question: Who is known as the "father of the World Wide Web"?
// Choices: Tim Berners-Lee, Steve Jobs, Bill Gates, Larry Page
// Correct Answer: Tim Berners-Lee

// Question: What does GUI stand for in computing?
// Choices: Graphical User Interface, General User Interface, Graphical User Instruction, General User Instruction
// Correct Answer: Graphical User Interface

// Question: What does HTTPS stand for in web security?
// Choices: Hypertext Transfer Protocol Secure, Hyperlink Text Protocol Secure, High-Level Transfer Protocol Secure, Hypertext Transmission Protocol Secure
// Correct Answer: Hypertext Transfer Protocol Secure

// Question: Who is the co-founder of Apple Inc. alongside Steve Jobs?
// Choices: Steve Wozniak, Bill Gates, Mark Zuckerberg, Larry Page
// Correct Answer: Steve Wozniak

// Question: Which programming language is often used for game development?
// Choices: C++, Java, Python, Ruby
// Correct Answer: C++

// Question: What does SQL stand for in database management?
// Choices: Structured Query Language, Server Query Language, System Query Language, Simple Query Language
// Correct Answer: Structured Query Language

// Question: What is the purpose of the "git" version control system?
// Choices: Managing source code, Sending emails, Playing games, Creating spreadsheets
// Correct Answer: Managing source code

// Question: What is the primary function of an operating system?
// Choices: Managing hardware resources, Running applications, Storing data, Creating websites
// Correct Answer: Managing hardware resources

// Question: Who is often called the "father of the computer"?
// Choices: Alan Turing, Steve Jobs, Bill Gates, Tim Berners-Lee
// Correct Answer: Alan Turing

// Question: Which company developed the JavaScript programming language?
// Choices: Oracle, Microsoft, Netscape, Adobe
// Correct Answer: Netscape

// Question: What does HTML stand for?
// Choices: Hyperlink Text Markup Language, Hypertext Transfer Markup Language, High-Level Text Markup Language, Hyper Transfer Text Markup Language
// Correct Answer: Hypertext Transfer Markup Language

// Question: Which programming language is often used for artificial intelligence and machine learning?
// Choices: Python, Java, Ruby, C#
// Correct Answer: Python

// Question: What does URL stand for in web addresses?
// Choices: Universal Resource Locator, Uniform Resource Locator, Universal Reference Link, Uniform Reference Link
// Correct Answer: Uniform Resource Locator

// Question: Who is the co-founder of Apple Inc. alongside Steve Jobs?
// Choices: Steve Wozniak, Bill Gates, Mark Zuckerberg, Larry Page
// Correct Answer: Steve Wozniak

// Question: What does SQL stand for in database management?
// Choices: Structured Query Language, Server Query Language, System Query Language, Simple Query Language
// Correct Answer: Structured Query Language

// Question: What is the purpose of the "git" version control system?
// Choices: Managing source code, Sending emails, Playing games, Creating spreadsheets
// Correct Answer: Managing source code

// Question: What is the primary function of a firewall in computer networking?
// Choices: Blocking unauthorized access, Enhancing internet speed, Managing emails, Scanning for viruses
// Correct Answer: Blocking unauthorized access

// Question: Which programming language is often used for web development alongside HTML and CSS?
// Choices: JavaScript, Java, Python, C++
// Correct Answer: JavaScript

// Question: What does ISP stand for in the context of internet services?
// Choices: Internet Service Provider, Internet Security Protocol, Internal Service Protocol, Internet Security Provider
// Correct Answer: Internet Service Provider

// Question: Who is the co-founder of Microsoft alongside Bill Gates?
// Choices: Paul Allen, Steve Jobs, Larry Page, Mark Zuckerberg
// Correct Answer: Paul Allen

// Question: What is the primary function of a router in computer networking?
// Choices: Directing network traffic, Playing music, Running video games, Printing documents
// Correct Answer: Directing network traffic

// Question: Who is the founder of SpaceX and Tesla?
// Choices: Elon Musk, Jeff Bezos, Mark Zuckerberg, Larry Page
// Correct Answer: Elon Musk

// Question: Which programming language is often used for data analysis and scientific computing?
// Choices: Python, Java, Ruby, C++
// Correct Answer: Python

// Question: What does API stand for in software development?
// Choices: Application Programming Interface, Advanced Programming Interface, Application Process Interface, Advanced Process Interface
// Correct Answer: Application Programming Interface

// Question: What is the purpose of a VPN (Virtual Private Network)?
// Choices: Securing internet connections, Sending faxes, Playing video games, Writing code
// Correct Answer: Securing internet connections

// Question: Who is known as the "father of the World Wide Web"?
// Choices: Tim Berners-Lee, Steve Jobs, Bill Gates, Larry Page
// Correct Answer: Tim Berners-Lee

// Question: What does GUI stand for in computing?
// Choices: Graphical User Interface, General User Interface, Graphical User Instruction, General User Instruction
// Correct Answer: Graphical User Interface

// Question: What does HTTPS stand for in web security?
// Choices: Hypertext Transfer Protocol Secure, Hyperlink Text Protocol Secure, High-Level Transfer Protocol Secure, Hypertext Transmission Protocol Secure
// Correct Answer: Hypertext Transfer Protocol Secure

// Question: Who is the co-founder of Apple Inc. alongside Steve Jobs?
// Choices: Steve Wozniak, Bill Gates, Mark Zuckerberg, Larry Page
// Correct Answer: Steve Wozniak

// Question: Which programming language is often used for game development?
// Choices: C++, Java, Python, Ruby
// Correct Answer: C++

// Question: What does SQL stand for in database management?
// Choices: Structured Query Language, Server Query Language, System Query Language, Simple Query Language
// Correct Answer: Structured Query Language

// Question: What is the purpose of the "git" version control system?
// Choices: Managing source code, Sending emails, Playing games, Creating spreadsheets
// Correct Answer: Managing source code

// Question: What is the primary function of an operating system?
// Choices: Managing hardware resources, Running applications, Storing data, Creating websites
// Correct Answer: Managing hardware resources

// Question: Who is often called the "father of the computer"?
// Choices: Alan Turing, Steve Jobs, Bill Gates, Tim Berners-Lee
// Correct Answer: Alan Turing

// Question: Which company developed the JavaScript programming language?
// Choices: Oracle, Microsoft, Netscape, Adobe
// Correct Answer: Netscape

// Question: What does HTML stand for?
// Choices: Hyperlink Text Markup Language, Hypertext Transfer Markup Language, High-Level Text Markup Language, Hyper Transfer Text Markup Language
// Correct Answer: Hypertext Transfer Markup Language

// Question: Which programming language is often used for artificial intelligence and machine learning?
// Choices: Python, Java, Ruby, C#
// Correct Answer: Python

// Question: What does URL stand for in web addresses?
// Choices: Universal Resource Locator, Uniform Resource Locator, Universal Reference Link, Uniform Reference Link
// Correct Answer: Uniform Resource Locator

// Question: Who is the co-founder of Apple Inc. alongside Steve Jobs?
// Choices: Steve Wozniak, Bill Gates, Mark Zuckerberg, Larry Page
// Correct Answer: Steve Wozniak

// Question: What does SQL stand for in database management?
// Choices: Structured Query Language, Server Query Language, System Query Language, Simple Query Language
// Correct Answer: Structured Query Language

// Question: What is the purpose of the "git" version control system?
// Choices: Managing source code, Sending emails, Playing games, Creating spreadsheets
// Correct Answer: Managing source code

// Question: What is the primary function of a firewall in computer networking?
// Choices: Blocking unauthorized access, Enhancing internet speed, Managing emails, Scanning for viruses
// Correct Answer: Blocking unauthorized access

// Question: Which programming language is often used for web development alongside HTML and CSS?
// Choices: JavaScript, Java, Python, C++
// Correct Answer: JavaScript

// Question: What does ISP stand for in the context of internet services?
// Choices: Internet Service Provider, Internet Security Protocol, Internal Service Protocol, Internet Security Provider
// Correct Answer: Internet Service Provider

// Question: Who is the co-founder of Microsoft alongside Bill Gates?
// Choices: Paul Allen, Steve Jobs, Larry Page, Mark Zuckerberg
// Correct Answer: Paul Allen

// Question: What is the primary function of a router in computer networking?
// Choices: Directing network traffic, Playing music, Running video games, Printing documents
// Correct Answer: Directing network traffic