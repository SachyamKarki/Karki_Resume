// Simple API test for Netlify frontend to Render backend coordination
const API_URL = 'https://karki-resume-backend.onrender.com';

// Test backend health
async function testBackendHealth() {
    try {
        console.log('Testing backend health...');
        const response = await fetch(API_URL + '/api/health');
        const result = await response.json();
        console.log('✅ Backend health check successful:', result);
        return true;
    } catch (error) {
        console.error('❌ Backend health check failed:', error);
        return false;
    }
}

// Test contact form submission
async function testContactForm() {
    const testData = {
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'This is a test message from the coordination test.'
    };
    
    try {
        console.log('Testing contact form submission...');
        console.log('Sending to:', API_URL + '/api/contact');
        console.log('Data:', testData);
        
        const response = await fetch(API_URL + '/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData)
        });
        
        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));
        
        const result = await response.json();
        console.log('Response data:', result);
        
        if (response.ok && result.success) {
            console.log('✅ Contact form test successful!');
            return true;
        } else {
            console.error('❌ Contact form test failed:', result.message);
            return false;
        }
        
    } catch (error) {
        console.error('❌ Contact form test error:', error);
        return false;
    }
}

// Run all tests
async function runAllTests() {
    console.log('🚀 Starting frontend-backend coordination tests...');
    
    const healthTest = await testBackendHealth();
    const contactTest = await testContactForm();
    
    if (healthTest && contactTest) {
        console.log('🎉 All tests passed! Frontend and backend are coordinating properly.');
    } else {
        console.log('⚠️ Some tests failed. Check the logs above for details.');
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { testBackendHealth, testContactForm, runAllTests };
}

// Auto-run tests if this script is loaded directly
if (typeof window !== 'undefined') {
    window.addEventListener('load', runAllTests);
}
