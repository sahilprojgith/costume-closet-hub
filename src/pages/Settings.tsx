import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { 
  Settings as SettingsIcon, 
  Bell, 
  User, 
  Shield, 
  Palette,
  Database,
  Save
} from "lucide-react";

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-playfair font-bold text-foreground">
            Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your application preferences and configuration
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <SettingsIcon className="h-5 w-5 mr-2 text-primary" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="business-name">Business Name</Label>
              <Input 
                id="business-name" 
                placeholder="Costume Rental Co."
                defaultValue="Costume Rental Co."
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="business-email">Business Email</Label>
              <Input 
                id="business-email" 
                type="email"
                placeholder="contact@costume-rental.com"
                defaultValue="contact@costume-rental.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="business-phone">Business Phone</Label>
              <Input 
                id="business-phone" 
                placeholder="+1 (555) 123-4567"
                defaultValue="+1 (555) 123-4567"
              />
            </div>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Palette className="h-5 w-5 mr-2 text-primary" />
              Appearance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Theme</Label>
                <p className="text-sm text-muted-foreground">
                  Choose your preferred color scheme
                </p>
              </div>
              <ThemeToggle />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Compact Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Show more content in less space
                </p>
              </div>
              <Switch />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Animations</Label>
                <p className="text-sm text-muted-foreground">
                  Enable interface animations
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2 text-primary" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>New Rentals</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when new rentals are created
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Rental Returns</Label>
                <p className="text-sm text-muted-foreground">
                  Notifications when items are returned
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Low Inventory</Label>
                <p className="text-sm text-muted-foreground">
                  Alert when product stock is low
                </p>
              </div>
              <Switch />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications via email
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-primary" />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">
                  Add extra security to your account
                </p>
              </div>
              <Switch />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Session Timeout</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically log out inactive users
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <Button variant="outline" className="w-full">
              Change Password
            </Button>
            
            <Button variant="outline" className="w-full">
              Export Data
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <Card className="gradient-card shadow-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Save Changes</h3>
              <p className="text-sm text-muted-foreground">
                Make sure to save your changes before leaving this page
              </p>
            </div>
            <Button className="bg-gradient-primary">
              <Save className="h-4 w-4 mr-2" />
              Save Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;