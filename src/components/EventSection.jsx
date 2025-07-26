
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Code, Users, Lightbulb, Trophy, Network, GitBranch, Heart, Target } from "lucide-react";
import { Rocket } from 'lucide-react';


 function EventSection() {
  const upcomingEvents = [
    {
      icon: Code,
      title: "Hackathon / Coding Competition",
      description: "Focus on full-stack development with exciting challenges and real-world problem solving.",
      color: "primary",
      month: "November - December"
    },
    {
      icon: Users,
      title: "Tech Talks with Industry Experts",
      description: "Insights from professionals focusing on development and innovation trends.",
      color: "accent",
      month: "December - January"
    },
    {
      icon: Lightbulb,
      title: "Workshops on Emerging Technologies",
      description: "Hands-on sessions covering AI, cybersecurity, and cutting-edge technologies.",
      color: "primary",
      month: "December - February"
    },
    {
      icon: Target,
      title: "Collaborative Projects Launch",
      description: "Build practical, full-stack solutions in teams with real-world applications.",
      color: "accent",
      month: "January - February"
    },
    {
      icon: Network,
      title: "Peer-to-Peer Learning Program",
      description: "Connect with fellow members and share knowledge through structured learning sessions.",
      color: "primary",
      month: "January onwards"
    },
    {
      icon: Users,
      title: "Networking Events",
      description: "Connect with alumni and tech industry professionals for career guidance.",
      color: "accent",
      month: "January - February"
    },
    {
      icon: GitBranch,
      title: "Open-Source Contributions",
      description: "Contribute to development-driven projects and build your portfolio.",
      color: "primary",
      month: "January onwards"
    },
    {
      icon: Heart,
      title: "Community-Driven Tech Solutions",
      description: "Partner with NGOs to create technology solutions for social impact.",
      color: "accent",
      month: "February onwards"
    },
    {
      icon: Trophy,
      title: "Inter-College Competitions",
      description: "Collaborate with other clubs for competitive programming and innovation challenges.",
      color: "primary",
      month: "February onwards"
    }
  ];



  return (
    <section id="events" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm text-accent border border-accent/20 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Events & Activities
          </div>
          <h2 className="text-3xl lg:text-4xl text-primary">Upcoming Events</h2>
          
          {/* Events Header Image */}
          <div className="relative max-w-5xl mx-auto my-8 group">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-3xl">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&h=400&q=80"
                alt="Tech Innovators Club hackathon and coding competition"
                className="w-full h-[250px] sm:h-[350px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-accent/40 transition-all duration-500 group-hover:from-primary/60 group-hover:to-accent/60"></div>
              
              {/* Floating event elements */}
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-xs text-primary font-semibold">LIVE</span>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3 text-accent" />
                  <span className="text-xs text-accent font-semibold">Coming Soon</span>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white space-y-2 transform transition-all duration-500 group-hover:scale-110">
                  <h3 className="text-2xl sm:text-3xl font-bold">Tech Innovation Awaits</h3>
                  <p className="text-lg opacity-90 transition-all duration-300 group-hover:opacity-100">Hackathons • Workshops • Collaboration</p>
                </div>
              </div>
              
              {/* Animated corner effects */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
            </div>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As a newly established club, we are excited to announce our comprehensive 3-month plan featuring 
            hackathons, workshops, networking events, and collaborative projects designed to enhance your 
            full-stack development skills.
          </p>
        </div>

        {/* Event Types Gallery */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-500 hover:-translate-y-4 hover:rotate-1">
              <img
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=400&h=300&q=80"
                alt="Full-stack development hackathon with algorithms and code"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent transition-all duration-300 group-hover:from-primary/80"></div>
              {/* Floating hackathon elements */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-accent/50 rounded-full opacity-0 group-hover:opacity-100 delay-200 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-semibold flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Hackathons
                </h4>
                <p className="text-sm opacity-90">Full-stack coding challenges</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-500 hover:-translate-y-4 hover:-rotate-1">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=300&q=80"
                alt="AI and cybersecurity hands-on workshops"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent transition-all duration-300 group-hover:from-primary/80"></div>
              {/* Floating workshop elements */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-accent/50 rounded-full opacity-0 group-hover:opacity-100 delay-200 transition-opacity duration-300"></div>
             
              <div className="absolute bottom-4 left-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                <h4 className="font-semibold flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Tech Workshops
                </h4>
                <p className="text-sm opacity-90">AI, Cybersecurity & More</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-500 hover:-translate-y-4 hover:rotate-1">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&h=300&q=80"
                alt="Industry experts tech talks and networking"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent transition-all duration-300 group-hover:from-primary/80"></div>
              {/* Floating networking elements */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-accent/50 rounded-full opacity-0 group-hover:opacity-100 delay-200 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-4 left-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-200">
                <h4 className="font-semibold flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Tech Talks
                </h4>
                <p className="text-sm opacity-90">Industry expert insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* Budget Allocations & Financial Planning */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-2 border-transparent bg-gradient-to-br from-card to-card/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="space-y-6 relative z-10">
                <div className="flex items-center justify-end">
                  <span className="text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    Nov - Dec
                  </span>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">Club Identity & Tools</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span>Branding items (badges and hoodies)</span>
                    </li>
                    <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span>Raspberry Pi Kit and SSD</span>
                    </li>
                    <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span>Essential tools for hands-on tech projects</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground italic pt-2 border-t border-border/50 group-hover:border-primary/30 transition-colors duration-300">
                    Focus on establishing the club's identity and providing essential tools for hands-on tech projects
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-transparent bg-gradient-to-br from-card to-card/50 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden bg-gradient-to-r from-accent/5 to-primary/5 hover:from-accent/10 hover:to-primary/10">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="space-y-6 relative z-10">
                <div className="flex items-center justify-end">
                  <span className="text-sm px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    Dec - Jan
                  </span>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-accent group-hover:text-accent/80 transition-colors duration-300">Learning & Engagement</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span>Host seminars and workshops</span>
                    </li>
                    <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span>Small-scale competitions</span>
                    </li>
                    <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span>Awards for outstanding contributions</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground italic pt-2 border-t border-border/50 group-hover:border-accent/30 transition-colors duration-300">
                    Engage club members with learning opportunities and foster participation
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-transparent bg-gradient-to-br from-card to-card/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="space-y-6 relative z-10">
                <div className="flex items-center justify-end">
                  <span className="text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    Jan - Feb
                  </span>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">Final Activities & Showcase</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span>Final workshops and seminars</span>
                    </li>
                    <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span>Project showcases</span>
                    </li>
                    <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span>Wrap up club activities</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground italic pt-2 border-t border-border/50 group-hover:border-primary/30 transition-colors duration-300">
                    Provide valuable learning opportunities and allow members to showcase their projects
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-transparent bg-gradient-to-br from-card to-card/50 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden bg-gradient-to-r from-accent/5 to-primary/5 hover:from-accent/10 hover:to-primary/10">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="space-y-6 relative z-10">
                <div className="flex items-center justify-end">
                  <span className="text-sm px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    Feb - Mar
                  </span>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-accent group-hover:text-accent/80 transition-colors duration-300">Recognition & Wrap-up</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span>Awards for outstanding contributions</span>
                    </li>
                    <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span>Recognition of achievements</span>
                    </li>
                    <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span>Final operational needs</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground italic pt-2 border-t border-border/50 group-hover:border-accent/30 transition-colors duration-300">
                    Recognize achievements and ensure all activities are covered as the year concludes
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="relative rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&h=400&q=80"
              alt="MIT-WPU Tech Innovators Club collaborative coding environment"
              className="w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 transition-all duration-500 group-hover:from-primary/90 group-hover:to-accent/90"></div>
            
            {/* Floating elements */}
            <div className="absolute top-4 left-4 w-6 h-6 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-8 right-8 w-4 h-4 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 delay-200 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6 w-5 h-5 bg-white/35 rounded-full opacity-0 group-hover:opacity-100 delay-400 transition-opacity duration-300"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <Card className="p-8 bg-background/95 backdrop-blur-sm border-border/50 max-w-2xl mx-4 transform transition-all duration-500 group-hover:scale-105 group-hover:bg-background/98">
                <CardContent className="space-y-6">
                  <h3 className="text-2xl text-primary transition-all duration-300 group-hover:text-accent group-hover:scale-110">Ready to Innovate with Us?</h3>
                  <p className="text-muted-foreground transition-all duration-300 group-hover:text-foreground">
                    Join MIT-WPU's premier tech community where full-stack development meets real-world innovation. 
                    Build the future, one line of code at a time.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                      <span className="flex items-center gap-2">
                        <Rocket className="w-4 h-4" />
                        Join Tech Innovators
                      </span>
                    </Button>
                    <Button variant="outline" size="lg" className="px-8 border-primary/20 text-primary hover:bg-primary/5 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                      <span className="flex items-center gap-2">
                        <GitBranch className="w-4 h-4" />
                        View Projects
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventSection;