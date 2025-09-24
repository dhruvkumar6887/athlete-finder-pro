import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

// Mock data for demonstration
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
  }
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSport, setSelectedSport] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const filteredPlayers = mockPlayers.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport = selectedSport === "all" || player.sport === selectedSport;
    const matchesRegion = selectedRegion === "all" || player.region === selectedRegion;
    return matchesSearch && matchesSport && matchesRegion;
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

  return (
    <div className="min-h-screen bg-background">
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
              <div className="text-2xl font-bold">1,247</div>
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
              <div className="text-2xl font-bold text-success">892</div>
              <p className="text-xs text-muted-foreground">
                71.5% approval rate
              </p>
            </CardContent>
          </Card>

          <Card className="card-sports">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Performers</CardTitle>
              <Star className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">156</div>
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
              <div className="text-2xl font-bold text-primary">43</div>
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
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full" variant="outline">
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
                    <Button size="sm" className="bg-success hover:bg-success/90">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Mass Approve
                    </Button>
                    <Button size="sm" variant="outline">
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
                            <Button size="sm" variant="ghost">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-success">
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-destructive">
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