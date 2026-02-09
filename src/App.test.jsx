import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import App from './App';

// 1. Mock the AuthProvider so we don't need real Auth logic
vi.mock('./routes/AuthContext', () => ({
  AuthProvider: ({ children }) => <div data-testid="auth-provider">{children}</div>,
}));

// 2. Mock ProtectedRoutes to simply render children (bypass auth checks)
vi.mock('./routes/ProtectedRoute', () => ({
  default: ({ children }) => <div data-testid="protected-wrapper">{children}</div>,
}));

// 3. Mock your RoutesConfig to control what pages exist during the test
vi.mock('./routes/RoutesConfig', () => ({
  routesConfig: [
    { 
      path: '/', 
      element: () => <div>Home Page</div>, 
      roles: [], 
      isPublic: true 
    },
    { 
      path: '/dashboard', 
      element: () => <div>Dashboard Page</div>, 
      roles: ['admin'], 
      isPublic: false 
    },
  ],
}));

describe('App Component Routing', () => {
  
  it('renders the  Dashboard page by default', () => {
    render(<App />);
    
    // Check if Home Page text is present
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });

  it('renders the 404 page for non-existent routes', () => {
    // Force the browser to a random URL
    window.history.pushState({}, 'Test page', '/some-random-route');
    
    render(<App />);
    
    expect(screen.getByText(/404 - Page Not Found/i)).toBeInTheDocument();
  });

});