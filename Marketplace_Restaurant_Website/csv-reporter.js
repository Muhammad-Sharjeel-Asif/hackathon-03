import { createObjectCsvWriter } from 'csv-writer';

// Function to generate a CSV report
async function generateCSVReport() {
    // Create the CSV writer instance
    const csvWriter = createObjectCsvWriter({
        path: 'testing.csv', // Path to the output CSV file
        header: [
            { id: 'testName', title: 'Test Name' },   // Column for test names
            { id: 'status', title: 'Status' },       // Column for test status
            { id: 'time', title: 'Duration (ms)' },  // Column for test duration
        ],
    });

    // Simulated test results (Replace this with real test data)
    const testResults = [
        { testName: 'Login Test', status: 'Passed', time: 120 },
        { testName: 'Signup Test', status: 'Failed', time: 300 },
        { testName: 'Profile Update Test', status: 'Passed', time: 180 },
    ];

    // Write the test results to the CSV
    await csvWriter.writeRecords(testResults);
    console.log('✅ Testing CSV report generated successfully: testing.csv');
}

// Execute the script
generateCSVReport().catch((error) => {
    console.error('❌ Failed to generate CSV:', error);
});