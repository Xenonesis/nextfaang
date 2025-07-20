// Safe Clerk initialization utility
import React from 'react';

// Safe Clerk initialization utility
export const createSafeClerkProvider = async (publishableKey: string) => {
  try {
    // Import Clerk with error handling
    const clerkModule = await import('@clerk/clerk-react');
    
    // Validate the module
    if (!clerkModule.ClerkProvider || typeof clerkModule.ClerkProvider !== 'function') {
      throw new Error('Invalid ClerkProvider in module');
    }
    
    // Create a wrapper that handles class constructor errors
    const SafeClerkProvider = ({ children }: { children: React.ReactNode }) => {
      try {
        const { ClerkProvider } = clerkModule;
        
        return (
          <ClerkProvider 
            publishableKey={publishableKey}
            afterSignOutUrl="/"
            signInUrl="/sign-in"
            signUpUrl="/sign-up"
          >
            {children}
          </ClerkProvider>
        );
      } catch (error) {
        console.warn('ClerkProvider render error, using fallback:', error);
        return <>{children}</>;
      }
    };
    
    return SafeClerkProvider;
  } catch (error) {
    console.warn('Failed to create safe Clerk provider:', error);
    
    // Return a fallback component
    return ({ children }: { children: React.ReactNode }) => <>{children}</>;
  }
};

// Utility to check if Clerk can be safely initialized
export const canInitializeClerk = (): boolean => {
  try {
    // Check if we're in a secure context or development
    const isSecure = window.isSecureContext || import.meta.env.DEV;
    
    // Check if crypto.subtle is available
    const hasCrypto = !!window.crypto?.subtle;
    
    // Check if we have a publishable key
    const hasKey = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
    
    return isSecure && hasCrypto && hasKey;
  } catch (error) {
    console.warn('Error checking Clerk initialization requirements:', error);
    return false;
  }
};

// Utility to safely clear Clerk instances
export const clearClerkInstances = () => {
  try {
    // Clear window.Clerk
    if ((window as any).Clerk) {
      delete (window as any).Clerk;
    }
    
    // Clear any Clerk-related properties
    Object.keys(window).forEach(key => {
      if (key.toLowerCase().includes('clerk') && key !== 'clearClerkInstances') {
        try {
          delete (window as any)[key];
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    });
    
    console.debug('Clerk instances cleared');
  } catch (error) {
    console.warn('Error clearing Clerk instances:', error);
  }
};