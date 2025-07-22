/**
 * MonTkay App Redirect Helper
 * Handles smooth transitions from the marketing website to the React app
 */

class MonTkayRedirect {
    constructor() {
        this.appUrl = 'https://product-offer-frontend-4ivcvo5xa-lilyans-projects-1055f01a.vercel.app';
        this.transitionUrl = '/redirect-transition.html';
        this.init();
    }

    init() {
        // Add analytics tracking if available
        this.setupAnalytics();
        
        // Preload the app for faster loading
        this.preloadApp();
    }

    /**
     * Main redirect function
     * @param {string} page - Target page (login, register, dashboard)
     * @param {Object} options - Additional options
     */
    redirectToApp(page = 'login', options = {}) {
        const {
            useTransition = true,
            source = 'website',
            newTab = false,
            immediate = false
        } = options;

        // Track the redirect attempt
        this.trackRedirect(page, source);

        if (immediate) {
            // Direct redirect without transition
            this.performDirectRedirect(page, source, newTab);
        } else if (useTransition) {
            // Use beautiful transition page
            this.performTransitionRedirect(page, source, newTab);
        } else {
            // Simple redirect with small delay
            setTimeout(() => {
                this.performDirectRedirect(page, source, newTab);
            }, 300);
        }
    }

    /**
     * Direct redirect to app
     */
    performDirectRedirect(page, source, newTab = false) {
        const url = `${this.appUrl}/${page}?source=${source}`;
        
        if (newTab) {
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            window.location.href = url;
        }
    }

    /**
     * Redirect through transition page
     */
    performTransitionRedirect(page, source, newTab = false) {
        const transitionParams = new URLSearchParams({
            page: page,
            source: source
        });
        
        const transitionUrl = `${this.transitionUrl}?${transitionParams.toString()}`;
        
        if (newTab) {
            window.open(transitionUrl, '_blank', 'noopener,noreferrer');
        } else {
            window.location.href = transitionUrl;
        }
    }

    /**
     * Setup analytics tracking
     */
    setupAnalytics() {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            this.analytics = {
                track: (action, data) => {
                    gtag('event', action, {
                        event_category: 'montkay_redirect',
                        ...data
                    });
                }
            };
        }
        // Alternative analytics (Mixpanel, etc.)
        else if (typeof mixpanel !== 'undefined') {
            this.analytics = {
                track: (action, data) => {
                    mixpanel.track('MonTkay Redirect', { action, ...data });
                }
            };
        }
        // Fallback - simple console logging
        else {
            this.analytics = {
                track: (action, data) => {
                    console.log('MonTkay Redirect:', action, data);
                }
            };
        }
    }

    /**
     * Track redirect events
     */
    trackRedirect(page, source) {
        this.analytics.track('redirect_initiated', {
            destination_page: page,
            source: source,
            timestamp: new Date().toISOString(),
            user_agent: navigator.userAgent
        });
    }

    /**
     * Preload the app for faster loading
     */
    preloadApp() {
        // Create a link element to preload the main app
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = this.appUrl;
        document.head.appendChild(link);

        // Preload critical app pages
        const criticalPages = ['login', 'register', 'dashboard'];
        criticalPages.forEach(page => {
            const pageLink = document.createElement('link');
            pageLink.rel = 'prefetch';
            pageLink.href = `${this.appUrl}/${page}`;
            document.head.appendChild(pageLink);
        });
    }

    /**
     * Check if user is already logged in (optional)
     */
    async checkAuthStatus() {
        try {
            const response = await fetch(`${this.appUrl}/api/auth/status`, {
                credentials: 'include'
            });
            return response.ok;
        } catch (error) {
            return false;
        }
    }

    /**
     * Smart redirect - goes to dashboard if logged in, otherwise login
     */
    async smartRedirect(options = {}) {
        const isLoggedIn = await this.checkAuthStatus();
        const targetPage = isLoggedIn ? 'dashboard' : 'login';
        
        this.redirectToApp(targetPage, {
            ...options,
            source: 'smart_redirect'
        });
    }
}

// Initialize the redirect helper
const montkayRedirect = new MonTkayRedirect();

// Convenience functions for easy use
function redirectToLogin(options = {}) {
    montkayRedirect.redirectToApp('login', options);
}

function redirectToRegister(options = {}) {
    montkayRedirect.redirectToApp('register', options);
}

function redirectToDashboard(options = {}) {
    montkayRedirect.redirectToApp('dashboard', options);
}

function smartRedirect(options = {}) {
    montkayRedirect.smartRedirect(options);
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MonTkayRedirect, montkayRedirect, redirectToLogin, redirectToRegister, redirectToDashboard, smartRedirect };
} 