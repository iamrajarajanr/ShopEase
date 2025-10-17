import AdminLayout from '@/components/AdminLayout';
import { useAdmin } from '@/context/AdminContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Moon, Sun } from 'lucide-react';

const AdminSettings = () => {
  const { theme, toggleTheme } = useAdmin();

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Customize your admin panel</p>
        </div>

        <Card className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              <div>
                <Label className="text-base font-semibold">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark themes
                </p>
              </div>
            </div>
            <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-2">Admin Profile</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Admin: administrator@shopease.com
            </p>
            <Button variant="outline">Change Password</Button>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-2">Data Management</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Reset all data to default values
            </p>
            <Button variant="destructive" onClick={() => {
              if (window.confirm('This will clear all data. Continue?')) {
                localStorage.clear();
                window.location.reload();
              }
            }}>
              Reset All Data
            </Button>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
