import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import PlayerProfile from "./PlayerProfile";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Users, 
  Trophy, 
  TrendingUp, 
  Filter, 
  Search, 
  Download,
  Eye,
  CheckCircle,
  XCircle,
  Star,
  Activity,
  BarChart3
} from "lucide-react";

// Extended mock data for demonstration
const mockPlayers = [
  {
    id: 1,
    name: "Arjun Kumar",
    age: 19,
    gender: "Male",
    sport: "Athletics",
    region: "Karnataka",
    score: 92,
    pushups: 45,
    sprintTime: "12.5s",
    status: "pending"
  },
  {
    id: 2,
    name: "Priya Sharma",
    age: 17,
    gender: "Female",
    sport: "Swimming",
    region: "Maharashtra",
    score: 88,
    pushups: 35,
    sprintTime: "13.2s",
    status: "approved"
  },
  {
    id: 3,
    name: "Vikram Singh",
    age: 20,
    gender: "Male",
    sport: "Football",
    region: "Punjab",
    score: 85,
    pushups: 50,
    sprintTime: "11.8s",
    status: "pending"
  },
  {
    id: 4,
    name: "Ananya Patel",
    age: 18,
    gender: "Female",
    sport: "Badminton",
    region: "Gujarat",
    score: 90,
    pushups: 40,
    sprintTime: "12.9s",
    status: "rejected"
  },
  {
    id: 5,
    name: "Rohit Verma",
    age: 21,
    gender: "Male",
    sport: "Wrestling",
    region: "Haryana",
    score: 94,
    pushups: 60,
    sprintTime: "11.2s",
    status: "approved"
  },
  {
    id: 6,
    name: "Sneha Reddy",
    age: 19,
    gender: "Female",
    sport: "Tennis",
    region: "Telangana",
    score: 87,
    pushups: 38,
    sprintTime: "13.5s",
    status: "pending"
  },
  {
    id: 7,
    name: "Karan Joshi",
    age: 18,
    gender: "Male",
    sport: "Boxing",
    region: "Rajasthan",
    score: 91,
    pushups: 55,
    sprintTime: "12.1s",
    status: "approved"
  },
  {
    id: 8,
    name: "Meera Singh",
    age: 20,
    gender: "Female",
    sport: "Athletics",
    region: "Uttar Pradesh",
    score: 89,
    pushups: 42,
    sprintTime: "12.8s",
    status: "pending"
  },
  {
    id: 9,
    name: "Aditya Rajan",
    age: 19,
    gender: "Male",
    sport: "Swimming",
    region: "Kerala",
    score: 93,
    pushups: 48,
    sprintTime: "11.9s",
    status: "approved"
  },
  {
    id: 10,
    name: "Kavya Nair",
    age: 17,
    gender: "Female",
    sport: "Badminton",
    region: "Tamil Nadu",
    score: 86,
    pushups: 36,
    sprintTime: "13.1s",
    status: "pending"
  },
  {
    id: 11,
    name: "Suresh Kumar",
    age: 22,
    gender: "Male",
    sport: "Hockey",
    region: "Odisha",
    score: 88,
    pushups: 52,
    sprintTime: "12.3s",
    status: "approved"
  },
  {
    id: 12,
    name: "Ritika Gupta",
    age: 18,
    gender: "Female",
    sport: "Volleyball",
    region: "Delhi",
    score: 84,
    pushups: 34,
    sprintTime: "13.7s",
    status: "rejected"
  },
  {
    id: 13,
    name: "Abhishek Yadav",
    age: 20,
    gender: "Male",
    sport: "Kabaddi",
    region: "Bihar",
    score: 87,
    pushups: 47,
    sprintTime: "12.6s",
    status: "pending"
  },
  {
    id: 14,
    name: "Pooja Sharma",
    age: 19,
    gender: "Female",
    sport: "Shooting",
    region: "Himachal Pradesh",
    score: 95,
    pushups: 41,
    sprintTime: "13.0s",
    status: "approved"
  },
  {
    id: 15,
    name: "Rahul Tripathi",
    age: 21,
    gender: "Male",
    sport: "Weightlifting",
    region: "Madhya Pradesh",
    score: 92,
    pushups: 58,
    sprintTime: "12.4s",
    status: "approved"
  },
  {
    id: 16,
    name: "Deepika Singh",
    age: 18,
    gender: "Female",
    sport: "Archery",
    region: "Jharkhand",
    score: 90,
    pushups: 39,
    sprintTime: "13.3s",
    status: "pending"
  },
  {
    id: 17,
    name: "Manish Kumar",
    age: 19,
    gender: "Male",
    sport: "Cricket",
    region: "West Bengal",
    score: 85,
    pushups: 44,
    sprintTime: "12.7s",
    status: "rejected"
  },
  {
    id: 18,
    name: "Sanya Malhotra",
    age: 17,
    gender: "Female",
    sport: "Gymnastics",
    region: "Chandigarh",
    score: 93,
    pushups: 37,
    sprintTime: "12.2s",
    status: "approved"
  },
  {
    id: 19,
    name: "Vivek Sharma",
    age: 22,
    gender: "Male",
    sport: "Table Tennis",
    region: "Goa",
    score: 89,
    pushups: 46,
    sprintTime: "12.5s",
    status: "pending"
  },
  {
    id: 20,
    name: "Nisha Patel",
    age: 20,
    gender: "Female",
    sport: "Cycling",
    region: "Gujarat",
    score: 88,
    pushups: 43,
    sprintTime: "12.9s",
    status: "approved"
  },
  {
    id: 21,
    name: "Arpit Jain",
    age: 18,
    gender: "Male",
    sport: "Judo",
    region: "Assam",
    score: 86,
    pushups: 49,
    sprintTime: "12.8s",
    status: "pending"
  },
  {
    id: 22,
    name: "Tanvi Agarwal",
    age: 19,
    gender: "Female",
    sport: "Squash",
    region: "Uttarakhand",
    score: 91,
    pushups: 40,
    sprintTime: "13.1s",
    status: "approved"
  },
  {
    id: 23,
    name: "Shubham Tiwari",
    age: 21,
    gender: "Male",
    sport: "Rowing",
    region: "Chhattisgarh",
    score: 87,
    pushups: 51,
    sprintTime: "12.3s",
    status: "pending"
  },
  {
    id: 24,
    name: "Ishita Sharma",
    age: 18,
    gender: "Female",
    sport: "Fencing",
    region: "Manipur",
    score: 89,
    pushups: 38,
    sprintTime: "13.4s",
    status: "approved"
  },
  {
    id: 25,
    name: "Gaurav Singh",
    age: 20,
    gender: "Male",
    sport: "Sailing",
    region: "Andhra Pradesh",
    score: 84,
    pushups: 45,
    sprintTime: "12.6s",
    status: "rejected"
  }
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSport, setSelectedSport] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [players, setPlayers] = useState(mockPlayers);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const { toast } = useToast();

  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport = selectedSport === "all" || player.sport === selectedSport;
    const matchesRegion = selectedRegion === "all" || player.region === selectedRegion;
    const matchesStatus = selectedStatus === "all" || player.status === selectedStatus;
    return matchesSearch && matchesSport && matchesRegion && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-success/20 text-success border-success/30">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-destructive/20 text-destructive border-destructive/30">Rejected</Badge>;
      default:
        return <Badge className="bg-warning/20 text-warning border-warning/30">Pending</Badge>;
    }
  };

  const handlePlayerAction = (playerId: number, action: 'approve' | 'reject') => {
    setPlayers(prev => prev.map(player => 
      player.id === playerId 
        ? { ...player, status: action === 'approve' ? 'approved' : 'rejected' }
        : player
    ));
    
    const player = players.find(p => p.id === playerId);
    toast({
      title: `Player ${action === 'approve' ? 'Approved' : 'Rejected'}`,
      description: `${player?.name} has been ${action === 'approve' ? 'approved' : 'rejected'} successfully.`,
      variant: action === 'approve' ? 'default' : 'destructive'
    });
  };

  const handleMassApprove = () => {
    const highScorers = filteredPlayers.filter(p => p.score >= 90 && p.status === 'pending');
    setPlayers(prev => prev.map(player => 
      highScorers.some(h => h.id === player.id)
        ? { ...player, status: 'approved' }
        : player
    ));
    
    toast({
      title: "Mass Approval Complete",
      description: `${highScorers.length} high-scoring players have been approved.`,
    });
  };

  const handleExport = () => {
    const csvContent = "Name,Age,Gender,Sport,Region,Score,Pushups,Sprint Time,Status\n" +
      filteredPlayers.map(p => 
        `${p.name},${p.age},${p.gender},${p.sport},${p.region},${p.score},${p.pushups},${p.sprintTime},${p.status}`
      ).join("\n");
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'players_data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    
    toast({
      title: "Export Complete",
      description: "Player data has been exported successfully.",
    });
  };

  // Calculate stats
  const totalPlayers = players.length;
  const approvedPlayers = players.filter(p => p.status === 'approved').length;
  const topPerformers = players.filter(p => p.score >= 90).length;
  const aiRecommendations = players.filter(p => p.score >= 90 && p.status === 'pending').length;

  return (
    <div className="min-h-screen bg-background">
      {selectedPlayer && (
        <PlayerProfile
          playerId={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
        />
      )}
      
      {/* Header */}
      <header className="bg-card border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                <Trophy className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Sports AI Platform</h1>
                <p className="text-sm text-muted-foreground">SAI Official Dashboard</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Users className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="card-sports">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Players</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalPlayers}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+12%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="card-sports">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved</CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{approvedPlayers}</div>
              <p className="text-xs text-muted-foreground">
                {totalPlayers > 0 ? Math.round((approvedPlayers / totalPlayers) * 100) : 0}% approval rate
              </p>
            </CardContent>
          </Card>

          <Card className="card-sports">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Performers</CardTitle>
              <Star className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{topPerformers}</div>
              <p className="text-xs text-muted-foreground">
                Score above 90
              </p>
            </CardContent>
          </Card>

          <Card className="card-sports">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Recommendations</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{aiRecommendations}</div>
              <p className="text-xs text-muted-foreground">
                Ready for state program
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            <Card className="card-sports">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search Players</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Enter player name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Sport</label>
                  <Select value={selectedSport} onValueChange={setSelectedSport}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select sport" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sports</SelectItem>
                      <SelectItem value="Athletics">Athletics</SelectItem>
                      <SelectItem value="Swimming">Swimming</SelectItem>
                      <SelectItem value="Football">Football</SelectItem>
                      <SelectItem value="Badminton">Badminton</SelectItem>
                      <SelectItem value="Wrestling">Wrestling</SelectItem>
                      <SelectItem value="Tennis">Tennis</SelectItem>
                      <SelectItem value="Boxing">Boxing</SelectItem>
                      <SelectItem value="Hockey">Hockey</SelectItem>
                      <SelectItem value="Volleyball">Volleyball</SelectItem>
                      <SelectItem value="Kabaddi">Kabaddi</SelectItem>
                      <SelectItem value="Shooting">Shooting</SelectItem>
                      <SelectItem value="Weightlifting">Weightlifting</SelectItem>
                      <SelectItem value="Archery">Archery</SelectItem>
                      <SelectItem value="Cricket">Cricket</SelectItem>
                      <SelectItem value="Gymnastics">Gymnastics</SelectItem>
                      <SelectItem value="Table Tennis">Table Tennis</SelectItem>
                      <SelectItem value="Cycling">Cycling</SelectItem>
                      <SelectItem value="Judo">Judo</SelectItem>
                      <SelectItem value="Squash">Squash</SelectItem>
                      <SelectItem value="Rowing">Rowing</SelectItem>
                      <SelectItem value="Fencing">Fencing</SelectItem>
                      <SelectItem value="Sailing">Sailing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Region</label>
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="Karnataka">Karnataka</SelectItem>
                      <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="Punjab">Punjab</SelectItem>
                      <SelectItem value="Gujarat">Gujarat</SelectItem>
                      <SelectItem value="Haryana">Haryana</SelectItem>
                      <SelectItem value="Telangana">Telangana</SelectItem>
                      <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                      <SelectItem value="Kerala">Kerala</SelectItem>
                      <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="Odisha">Odisha</SelectItem>
                      <SelectItem value="Delhi">Delhi</SelectItem>
                      <SelectItem value="Bihar">Bihar</SelectItem>
                      <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                      <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
                      <SelectItem value="Jharkhand">Jharkhand</SelectItem>
                      <SelectItem value="West Bengal">West Bengal</SelectItem>
                      <SelectItem value="Chandigarh">Chandigarh</SelectItem>
                      <SelectItem value="Goa">Goa</SelectItem>
                      <SelectItem value="Assam">Assam</SelectItem>
                      <SelectItem value="Uttarakhand">Uttarakhand</SelectItem>
                      <SelectItem value="Chhattisgarh">Chhattisgarh</SelectItem>
                      <SelectItem value="Manipur">Manipur</SelectItem>
                      <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full" variant="outline" onClick={handleExport}>
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
              </CardContent>
            </Card>

            <Card className="card-sports">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary">Top Region</p>
                    <p className="text-xs text-muted-foreground">Karnataka leads with 23% of top performers</p>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                    <p className="text-sm font-medium text-secondary">Trending Sport</p>
                    <p className="text-xs text-muted-foreground">Athletics shows 35% growth in registrations</p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-sm font-medium text-accent">Performance Alert</p>
                    <p className="text-xs text-muted-foreground">43 players ready for state-level programs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Players Table */}
          <div className="lg:col-span-3">
            <Card className="card-sports">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Player Database</CardTitle>
                    <CardDescription>
                      Showing {filteredPlayers.length} of {mockPlayers.length} players
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-success hover:bg-success/90" onClick={handleMassApprove}>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Mass Approve (Score ≥90)
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => toast({ title: "Analytics", description: "Advanced analytics feature coming soon!" })}>
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Analytics
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Player</TableHead>
                      <TableHead>Sport</TableHead>
                      <TableHead>Region</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Pushups</TableHead>
                      <TableHead>Sprint</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPlayers.map((player) => (
                      <TableRow key={player.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{player.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {player.age}y, {player.gender}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>{player.sport}</TableCell>
                        <TableCell>{player.region}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="text-lg font-bold">{player.score}</div>
                            {player.score >= 90 && <Star className="h-4 w-4 text-accent" />}
                          </div>
                        </TableCell>
                        <TableCell>{player.pushups}</TableCell>
                        <TableCell>{player.sprintTime}</TableCell>
                        <TableCell>{getStatusBadge(player.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Button size="sm" variant="ghost" onClick={() => setSelectedPlayer(player.id.toString())}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="text-success hover:bg-success/20"
                              onClick={() => handlePlayerAction(player.id, 'approve')}
                              disabled={player.status === 'approved'}
                            >
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="text-destructive hover:bg-destructive/20"
                              onClick={() => handlePlayerAction(player.id, 'reject')}
                              disabled={player.status === 'rejected'}
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}