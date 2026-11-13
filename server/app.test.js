const app = require('./app.js');

test('Server starts up correctly', () => {
    expect(app).toBeDefined();
});

// comment for test
afterAll(() => {
    app.close();
});