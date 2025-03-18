import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LogOut, User } from "lucide-react";

export default function HomePage() {
  const { user, logoutMutation } = useAuth();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-muted/20 p-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button 
            variant="outline" 
            onClick={() => logoutMutation.mutate()} 
            disabled={logoutMutation.isPending}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
            <User className="h-8 w-8" />
            <div>
              <p className="text-sm text-muted-foreground">Logged in as</p>
              <p className="font-medium">{user.username}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}