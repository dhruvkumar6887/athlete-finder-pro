import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  MapPin, 
  Calendar, 
  Phone, 
  Mail, 
  Trophy, 
  Activity, 
  Target,
  Video,
  FileText,
  CheckCircle,
  XCircle,
  Star,
  TrendingUp
} from "lucide-react";

interface PlayerProfileProps {
  playerId: string;
  onClose: () => void;
}

// Mock player data - in real app this would come from props or API
const mockPlayer = {
  id: 1,
  name: "Arjun Kumar",
  age: 19,
  gender: "Male",
  sport: "Athletics",
  region: "Karnataka",
  score: 92,
  pushups: 45,
  sprintTime: "12.5s",
  status: "pending",
  email: "arjun.kumar@email.com",
  phone: "+91 9876543210",
  address: "Bangalore, Karnataka",
  joinDate: "March 2024",
  avatar: "",
  strengths: ["Speed", "Endurance", "Consistency"],
  weaknesses: ["Upper body strength", "Flexibility"],
  coachNotes: "Excellent potential for middle-distance running. Shows remarkable consistency in training.",
  performanceHistory: [
    { month: "Jan", score: 78 },
    { month: "Feb", score: 82 },
    { month: "Mar", score: 88 },
    { month: "Apr", score: 92 }
  ],
  videos: [
    { title: "100m Sprint Performance", duration: "2:45", date: "April 2024" },
    { title: "Training Session Highlights", duration: "5:20", date: "March 2024" }
  ]
};

export default function PlayerProfile({ playerId, onClose }: PlayerProfileProps) {
  const player = mockPlayer; // In real app, fetch by playerId

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 80) return "text-accent";
    if (score >= 70) return "text-warning";
    return "text-muted-foreground";
  };

  const getScoreGrade = (score: number) => {
    if (score >= 90) return "A+";
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    return "C";
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="card-sports max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={player.avatar} alt={player.name} />
                <AvatarFallback className="bg-primary/20 text-primary text-lg font-bold">
                  {player.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{player.name}</CardTitle>
                <CardDescription className="text-base">
                  {player.age} years old • {player.gender} • {player.sport}
                </CardDescription>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {player.region}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Joined {player.joinDate}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className={`text-3xl font-bold ${getScoreColor(player.score)}`}>
                  {player.score}
                </div>
                <div className="text-sm text-muted-foreground">
                  Grade {getScoreGrade(player.score)}
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>
                ✕
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Contact Information */}
                <Card className="card-sports">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{player.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{player.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{player.address}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Performance Metrics */}
                <Card className="card-sports">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5" />
                      Key Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Overall Score</span>
                      <div className="flex items-center gap-2">
                        <Progress value={player.score} className="w-20" />
                        <span className="text-sm font-bold">{player.score}/100</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Push-ups</span>
                      <Badge variant="secondary">{player.pushups}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Sprint Time</span>
                      <Badge variant="secondary">{player.sprintTime}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* AI Analysis */}
              <Card className="card-sports">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    AI Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-success mb-3 flex items-center gap-2">
                        <Star className="h-4 w-4" />
                        Strengths
                      </h4>
                      <div className="space-y-2">
                        {player.strengths.map((strength, index) => (
                          <Badge key={index} className="bg-success/20 text-success border-success/30 mr-2">
                            {strength}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-accent mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Areas for Improvement
                      </h4>
                      <div className="space-y-2">
                        {player.weaknesses.map((weakness, index) => (
                          <Badge key={index} className="bg-accent/20 text-accent border-accent/30 mr-2">
                            {weakness}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button className="flex-1 bg-success hover:bg-success/90">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Approve Player
                </Button>
                <Button variant="destructive" className="flex-1">
                  <XCircle className="h-4 w-4 mr-2" />
                  Reject Application
                </Button>
                <Button variant="outline">
                  <Trophy className="h-4 w-4 mr-2" />
                  Invite to State Program
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-6">
              <Card className="card-sports">
                <CardHeader>
                  <CardTitle>Performance History</CardTitle>
                  <CardDescription>Track record over the past 4 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {player.performanceHistory.map((record, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                        <span className="font-medium">{record.month}</span>
                        <div className="flex items-center gap-2">
                          <Progress value={record.score} className="w-32" />
                          <span className="text-sm font-bold w-12">{record.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="videos" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {player.videos.map((video, index) => (
                  <Card key={index} className="card-sports">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Video className="h-5 w-5 text-primary" />
                        <Badge variant="outline">{video.duration}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-medium mb-2">{video.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{video.date}</p>
                      <Button size="sm" className="w-full">
                        Watch Video
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="notes" className="space-y-6">
              <Card className="card-sports">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Coach Remarks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">{player.coachNotes}</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </div>
    </div>
  );
}