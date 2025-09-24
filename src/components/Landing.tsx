import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, BarChart3, Trophy, ChevronRight, Star, Target, Activity } from "lucide-react";
import heroImage from "@/assets/sports-hero.jpg";

export default function Landing() {
  const [activeTab, setActiveTab] = useState("sai");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
                Smart India Hackathon 2024
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="gradient-text">Sports AI</span>
                <br />
                Analytics Platform
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Empowering sports talent discovery through intelligent data analysis. 
                Connect officials, recruiters, and athletes in one powerful ecosystem.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <div className="flex items-center gap-2 text-secondary">
                  <Target className="h-5 w-5" />
                  <span>AI-Powered Rankings</span>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <Activity className="h-5 w-5" />
                  <span>Real-time Analytics</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Trophy className="h-5 w-5" />
                  <span>Talent Discovery</span>
                </div>
              </div>
            </div>

            {/* Right Login Card */}
            <div className="card-sports p-8 max-w-md mx-auto w-full">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full">
                    <Shield className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">Access Platform</h2>
                <p className="text-muted-foreground">Choose your role to continue</p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="sai" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    SAI Official
                  </TabsTrigger>
                  <TabsTrigger value="recruiter" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Recruiter
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="sai" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="sai-email">Official Email</Label>
                    <Input 
                      id="sai-email" 
                      type="email" 
                      placeholder="official@sai.gov.in"
                      className="bg-muted/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sai-password">Password</Label>
                    <Input 
                      id="sai-password" 
                      type="password"
                      className="bg-muted/50"
                    />
                  </div>
                  <Button className="w-full btn-hero">
                    Access SAI Dashboard
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </TabsContent>

                <TabsContent value="recruiter" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="recruiter-email">Club Email</Label>
                    <Input 
                      id="recruiter-email" 
                      type="email" 
                      placeholder="scout@clubname.com"
                      className="bg-muted/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="recruiter-password">Password</Label>
                    <Input 
                      id="recruiter-password" 
                      type="password"
                      className="bg-muted/50"
                    />
                  </div>
                  <Button className="w-full btn-hero">
                    Access Recruiter Portal
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center space-y-2">
                <button className="text-sm text-primary hover:underline">
                  Forgot Password?
                </button>
                <div className="text-xs text-muted-foreground">
                  Need help? <button className="text-primary hover:underline">Contact Support</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Analytics for Sports Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover, analyze, and nurture sporting talent with cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-sports group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI-Powered Analytics</CardTitle>
                <CardDescription>
                  Advanced algorithms analyze player performance metrics, providing insights for talent identification
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-sports group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Smart Recruiting</CardTitle>
                <CardDescription>
                  Connect talented athletes with opportunities through intelligent matching and recruitment tools
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-sports group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Performance Tracking</CardTitle>
                <CardDescription>
                  Comprehensive dashboards track athlete progress, rankings, and potential across multiple sports
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}