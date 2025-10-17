import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { categories as initialCategories } from '@/data/initialProducts';

interface Category {
  name: string;
  icon: string;
}

interface AdminContextType {
  isAdminLoggedIn: boolean;
  categories: Category[];
  theme: 'light' | 'dark';
  adminLogin: (password: string) => boolean;
  adminLogout: () => void;
  addCategory: (category: Category) => void;
  updateCategory: (oldName: string, newCategory: Category) => void;
  deleteCategory: (name: string) => void;
  toggleTheme: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return localStorage.getItem('shopease_admin_logged_in') === 'true';
  });

  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem('shopease_categories');
    return saved ? JSON.parse(saved) : initialCategories;
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('shopease_theme');
    return (saved as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('shopease_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('shopease_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('shopease_admin_logged_in', isAdminLoggedIn.toString());
  }, [isAdminLoggedIn]);

  const adminLogin = (password: string): boolean => {
    // Simple password check - in production, use proper authentication
    if (password === 'admin123') {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
  };

  const addCategory = (category: Category) => {
    setCategories(prev => [...prev, category]);
  };

  const updateCategory = (oldName: string, newCategory: Category) => {
    setCategories(prev =>
      prev.map(cat => (cat.name === oldName ? newCategory : cat))
    );
  };

  const deleteCategory = (name: string) => {
    setCategories(prev => prev.filter(cat => cat.name !== name));
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <AdminContext.Provider
      value={{
        isAdminLoggedIn,
        categories,
        theme,
        adminLogin,
        adminLogout,
        addCategory,
        updateCategory,
        deleteCategory,
        toggleTheme
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
