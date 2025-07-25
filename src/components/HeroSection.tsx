import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Star, Zap, Rocket, Bot, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/10 dark:to-primary/5 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/30 to-accent/30 dark:from-primary/20 dark:to-accent/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-secondary/40 to-primary/30 dark:from-secondary/30 dark:to-primary/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-accent/30 to-primary/30 dark:from-accent/20 dark:to-primary/20 rounded-full blur-3xl"
        />
        
        {/* Enhanced grid pattern with animation */}
        <motion.div 
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.03] bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:40px_40px]"
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/50 dark:bg-primary/30 rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Enhanced Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge variant="outline" className="px-6 py-3 border-2 border-primary/60 dark:border-primary/40 bg-gradient-to-r from-primary/20 to-accent/20 dark:from-primary/10 dark:to-accent/10 text-primary font-semibold text-sm backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="h-4 w-4 mr-2" />
                </motion.div>
                India's First LGM Platform
              </Badge>
            </motion.div>
          </motion.div>

          {/* Enhanced Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-[0.9] tracking-tight"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="block text-foreground/90 mb-3 font-bold text-2xl md:text-3xl lg:text-4xl"
            >
              Welcome to
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 120, damping: 10 }}
              className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent relative font-black"
            >
              NEXTFAANG
              {/* Enhanced glow effect */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-2xl"
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Text shadow for depth */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))"
                }}
                animate={{ 
                  filter: [
                    "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))",
                    "drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))",
                    "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                NEXTFAANG
              </motion.div>
            </motion.span>
          </motion.h1>

          {/* Enhanced Tagline */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16 space-y-6"
          >
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-6 max-w-5xl mx-auto leading-relaxed font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Master competitive programming and data structures to crack{" "}
              <span className="text-primary font-bold">top tech companies</span>
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Join <span className="text-accent font-semibold">thousands of students</span> transforming their coding journey with India's most comprehensive platform
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button size="xl" variant="neon" className="px-16 gap-4 text-xl font-bold shadow-2xl">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Rocket className="h-7 w-7" />
                </motion.div>
                Start Your Journey
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-blue-400/20"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                variant="glass" 
                size="xl" 
                className="px-16 gap-4 text-xl font-bold shadow-xl" 
                onClick={scrollToFeatures}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-7 w-7" />
                </motion.div>
                Explore Features
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {[
              { 
                number: "1M+", 
                label: "Problems Solved", 
                icon: Target, 
                numberColor: "text-primary",
                iconColor: "text-primary",
                bgColor: "bg-primary/10",
                borderColor: "border-primary/20"
              },
              { 
                number: "150+", 
                label: "FAANG Placements", 
                icon: Zap, 
                numberColor: "text-blue-600 dark:text-blue-400",
                iconColor: "text-blue-600 dark:text-blue-400",
                bgColor: "bg-blue-500/10",
                borderColor: "border-blue-500/20"
              },
              { 
                number: "98%", 
                label: "Success Rate", 
                icon: Bot, 
                numberColor: "text-green-600 dark:text-green-400",
                iconColor: "text-green-600 dark:text-green-400",
                bgColor: "bg-green-500/10",
                borderColor: "border-green-500/20"
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border-2 border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className={`p-3 rounded-full ${stat.bgColor} border ${stat.borderColor}`}>
                        <stat.icon className={`h-8 w-8 ${stat.iconColor}`} />
                      </div>
                    </div>
                    <motion.div 
                      className={`text-4xl md:text-5xl font-bold ${stat.numberColor} mb-3`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-muted-foreground font-medium text-lg">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};