
import { Card, CardContent } from "./ui/card";
import { Target, Eye, Users, Lightbulb, Code, Globe } from "lucide-react";

 function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary border border-primary/20 mb-4">
            About Us
          </div>
          <h2 className="text-3xl lg:text-4xl text-primary">Tech Innovators Club</h2>
          
          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto my-8 group">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
              <img
                src="https://images.unsplash.com/photo-1538330496851-c475c75a7631?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="MIT students working on innovative tech projects in modern lab"
                className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              
              {/* Animated code elements */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-200">
                <code className="text-xs text-primary font-mono">const innovation = true;</code>
              </div>
              <div className="absolute top-16 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-400">
                <code className="text-xs text-accent font-mono">{`while(learning) { grow(); }`}</code>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm opacity-90">MIT-WPU Tech Innovators - Shaping Tomorrow&apos;s Technology</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            The Tech Innovators Club at MIT-WPU is dedicated to fostering a culture of technological growth, 
            focusing primarily on full-stack development. Our club encourages students to develop software 
            solutions through workshops, hackathons, and collaborative projects. We aim to bridge the gap 
            between learning and real-world applications by providing a platform for innovation and hands-on experience.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-border/50 bg-gradient-to-br from-card to-card/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 group">
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Eye className="w-6 h-6 text-primary transition-all duration-300 group-hover:scale-125" />
                </div>
                <h3 className="text-2xl text-primary transition-all duration-300 group-hover:text-accent">Our Vision</h3>
              </div>
              
              {/* Vision Image */}
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=200&q=80"
                  alt="Full-stack development workspace with multiple monitors"
                  className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 transition-all duration-300 group-hover:bg-primary/40"></div>
                
                {/* Floating tech icons */}
                <div className="absolute top-2 left-2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-200"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Lightbulb className="w-6 h-6 animate-pulse" />
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed transition-all duration-300 group-hover:text-foreground">
                Our vision is to establish the Tech Innovators Club as the leading platform for students to 
                advance their skills in full-stack development and related technologies. We seek to create 
                an environment where members can explore cutting-edge technologies, work on interdisciplinary 
                projects, and develop solutions to real-world challenges. Through teamwork, creativity, and 
                practical application, we aim to empower students to become industry-ready professionals who 
                will make meaningful contributions to society.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-border/50 bg-gradient-to-br from-card to-card/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 group">
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                  <Target className="w-6 h-6 text-accent transition-all duration-300 group-hover:scale-125" />
                </div>
                <h3 className="text-2xl text-accent transition-all duration-300 group-hover:text-primary">Our Mission</h3>
              </div>

              {/* Mission Image */}
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=200&q=80"
                  alt="Software development team solving real-world problems"
                  className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/20 transition-all duration-300 group-hover:bg-accent/40"></div>
                
                {/* Mission indicators */}
                <div className="absolute top-2 right-2 w-4 h-4 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-300"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Code className="w-6 h-6 animate-bounce" />
                </div>
              </div>

              <div className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>To equip students with full-stack development skills for solving real-world technological problems.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>To bridge the gap between theoretical knowledge and its practical application.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>To offer opportunities for students to work on impactful, interdisciplinary projects.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>To promote innovation and hands-on learning through regular events and industry exposure.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact on Students */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-2xl lg:text-3xl text-primary">Impact on Students</h3>
            
            {/* Impact Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto my-8">
              <div className="relative rounded-lg overflow-hidden aspect-square group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Full-stack development workshop at MIT-WPU"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-xs font-semibold">Full-Stack Workshop</p>
                </div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-square group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=300&h=300&q=80"
                  alt="JavaScript and React coding session"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:-rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-xs font-semibold">React & JavaScript</p>
                </div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-100"></div>
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-square group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Algorithm and data structures whiteboard session"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-xs font-semibold">Algorithms & DS</p>
                </div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-200"></div>
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-square group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=300&h=300&q=80"
                  alt="AI and machine learning project presentation"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:-rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-xs font-semibold">AI & ML Projects</p>
                </div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-300"></div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-border/50 bg-gradient-to-b from-card to-card/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/30 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl text-primary">Technical Excellence</h4>
                <p className="text-muted-foreground">
                  Develop essential skills in full-stack development and enhance technical expertise through hands-on projects.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-border/50 bg-gradient-to-b from-card to-card/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/20 to-primary/30 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl text-accent">Professional Growth</h4>
                <p className="text-muted-foreground">
                  Enhance problem-solving abilities and collaboration skills crucial for professional development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-border/50 bg-gradient-to-b from-card to-card/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/30 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl text-primary">Industry Ready</h4>
                <p className="text-muted-foreground">
                  Gain exposure to emerging technologies and mentorship from industry professionals to become future leaders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technologies We Work With */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-2xl lg:text-3xl text-primary">Technologies We Master</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our club focuses on cutting-edge technologies that are shaping the future of software development
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div className="relative rounded-lg overflow-hidden aspect-video group">
              <img
                src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=300&h=200&q=80"
                alt="React and JavaScript full-stack development"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <h4 className="font-semibold text-sm">Frontend</h4>
                <p className="text-xs opacity-90">React, Vue, Angular</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video group">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&h=200&q=80"
                alt="Node.js and backend development"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <h4 className="font-semibold text-sm">Backend</h4>
                <p className="text-xs opacity-90">Node.js, Python, Java</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=200&q=80"
                alt="AI and machine learning projects"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <h4 className="font-semibold text-sm">AI/ML</h4>
                <p className="text-xs opacity-90">TensorFlow, PyTorch</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video group">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=300&h=200&q=80"
                alt="Cloud computing and DevOps"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <h4 className="font-semibold text-sm">Cloud/DevOps</h4>
                <p className="text-xs opacity-90">AWS, Docker, K8s</p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Focus On */}
        <div className="text-center">
          <Card className="p-8 border-border/50 bg-gradient-to-br from-card to-card/50">
            <CardContent className="space-y-6">
              <h3 className="text-2xl text-primary">What We Focus On</h3>
              <p className="text-muted-foreground max-w-4xl mx-auto">
                With a focus on development, innovation, and interdisciplinary collaboration, the club prepares 
                students to tackle real-world challenges, making them industry-ready. Exposure to emerging 
                technologies and mentorship from industry professionals helps students become leaders in the 
                ever-evolving tech landscape, enabling them to drive impactful change in their careers and communities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;  