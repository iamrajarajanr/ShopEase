import { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Settings, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const { adminLogin, isAdminLoggedIn } = useAdmin();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  if (isAdminLoggedIn) {
    navigate('/admin/dashboard');
    return null;
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(password)) {
      toast.success('Admin login successful!');
      navigate('/admin/dashboard');
    } else {
      toast.error('Invalid password. Try: admin123');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <Card className="w-full max-w-md p-8 animate-scale-in">
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mr-3">
            <Settings className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              <span className="text-xl font-bold">ShopEase</span>
            </div>
            <p className="text-sm text-muted-foreground">Admin Panel</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="password">Admin Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              Default: admin123
            </p>
          </div>
          <Button type="submit" className="w-full" size="lg">
            Login to Admin Panel
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AdminLogin;
