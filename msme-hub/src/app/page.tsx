"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link"; 
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Users, Search, MessageSquare, Bot, ArrowRight, ChevronDown} from "lucide-react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {setScrollY(window.scrollY)}
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-8 h-20 flex items-center backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 transition-all duration-300" style={{ backgroundColor: `rgba(255, 255, 255, ${Math.min(scrollY / 500, 0.9)})` }}>
        <Link className="flex items-center justify-center" href="#">
          <Network className="h-8 w-8 text-primary mr-3" />
          <span className="font-bold text-2xl">MSME Connections</span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          <Link className="text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors" href="#ai-experience">
            AI Experience
          </Link>
          <Link className="text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-16 md:py-32 lg:py-48 xl:py-64 px-6 md:px-8 overflow-hidden">
          <div className="container mx-auto">
            <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, ease: "easeInOut"}}
            className="flex flex-col items-center space-y-6 text-center"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                Connect, Collaborate, Grow
              </h1>
              <p className="mx-auto max-w-[800px] text-gray-500 text-xl md:text-2xl lg:text-3xl dark:text-gray-400">
                Empowering MSMEs through an intelligent platform for mutual support and business connections.
              </p>
              <motion.div 
              className="flex flex-col sm:flex-row gap-6 mt-12"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.3, duration: 0.8}}
              >
                <Button size="lg" className="text-xl px-8 py-6 group">
                  Get Started
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="text-xl px-8 py-6">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <motion.div 
          animate={{y: [0, -15, 0]}}
          transition={{repeat: Infinity, duration: 2, ease: "easeInOut"}}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="h-14 w-14 text-primary animate-bounce" />
          </motion.div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Core Features</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Users, title: "Detailed Profiles", description: "Create comprehensive business profiles with essential details for effective connections." },
                { icon: Search, title: "Smart Matching", description: "Find businesses offering or seeking specific services quickly and easily." },
                { icon: MessageSquare, title: "Secure Messaging", description: "Connect directly with other businesses through our secure messaging system." }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="flex flex-col items-center space-y-4 p-6">
                      <feature.icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id = "ai-experience" className = "w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className = "container mx-auto px-4 md:px-6">
            <div className = "flex flex-col md:flex-row items-center justify-between gap-8">
              <motion.div 
              className = "flex-1 space-y-4"
              initial = {{opacity: 0, x: -50}}
              whileInView = {{opacity: 1, x: 0}}
              transition = {{duration: 0.8}}
              viewport = {{once: true}}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI-Enhanced Experience</h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform leverages cutting-edge AI to provide smart matching, intelligent suggestions, and streamlined interactions,
                  making it easier than ever to find the right business connections.
                </p>
                <ul className="space-y-2">
                  {[
                    "Smart profile recommendations",
                    "AI-powered business matching",
                    "Intelligent conversation suggestions"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Bot className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
              className = "flex-1 flex justify-center"
              initial = {{opacity: 0, x: 50}}
              whileInView = {{opacity: 1, x: 0}}
              transition = {{duration: 0.8}}
              viewport = {{once: true}}
              >
                <Card className = "w-full max-w-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Bot className="h-16 w-16 text-primary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="text-xl font-bold text-center mb-2">AI Assistant</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                      Our AI assistant helps you navigate the platform, find the right connections, and maximize your networking potential.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-50" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our MSME Community Today</h2>
              <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start connecting with other businesses, find new opportunities, and grow your MSME network.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-primary-foreground text-primary" placeholder="Enter your email" type="email" />
                  <Button type="submit" variant="secondary" className="transition-transform hover:scale-105">Sign Up</Button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>    
        </main>
        <footer className="w-full py-6 px-4 md:px-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 MSME Connections. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            {["Terms of Service", "Privacy Policy", "Contact Us"].map((item, index) => (
              <Link key={index} className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors" href="#">
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}