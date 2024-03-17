import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentDashboard.css';

const StudentDashboard = () => {
    // State variables to store job details
    //const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Dummy jobs data (replace with actual API call)
    const jobs = [
        {
            id: 1,
            companyName: 'ABC Inc.',
            jobRole: 'Software Engineer',
            salary: '$80,000',
            graduates: 'B.Tech/M.Tech',
            educationQualification: 'Computer Science',
            department: 'Engineering',
            percentage: '70%',
            technologies: 'React, Node.js',
            bond: '2 years',
            jobLocation: 'New York',
            specialNote: 'Experience with AWS preferred',
        },
        {
            id: 2,
            companyName: 'XYZ Corp.',
            jobRole: 'Data Analyst',
            salary: '$60,000',
            graduates: 'B.Sc/M.Sc',
            educationQualification: 'Statistics',
            department: 'Analytics',
            percentage: '65%',
            technologies: 'Python, SQL',
            bond: '1 year',
            jobLocation: 'San Francisco',
            specialNote: 'Knowledge of Tableau required',
        },
    ];

    // Function to fetch job details from the backend API
    /*const fetchJobs = async () => {
        try {
            // Simulate fetching data from API
            setLoading(true);
            // const response = await axios.get('/api/student/jobs');
            // setJobs(response.data);
            setJobs(jobs); // Replace with response.data when API is available
            setLoading(false);
        } catch (error) {
            setError('Failed to fetch job details');
            setLoading(false);
        }
    };
  

    // Fetch job details when the component mounts
    useEffect(() => {
        fetchJobs();
    }, []);
     */

    return (
        <div>
            <h2>Student Dashboard</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {jobs.length > 0 && (
                <div className="job-container">
                    {jobs.map(job => (
                        <div key={job.id} className="job-card">
                            <h3>{job.companyName}</h3>
                            <p><span className="job-key">Job Role:</span> {job.jobRole}</p>
                            <p><span className="job-key">Salary:</span> {job.salary}</p>
                            <p><span className="job-key">Graduate:</span> {job.graduates}</p>
                            <p><span className="job-key">Education Qualification:</span> {job.educationQualification}</p>
                            <p><span className="job-key">Department:</span> {job.department}</p>
                            <p><span className="job-key">Percentage Criteria:</span> {job.percentage}</p>
                            <p><span className="job-key">Eligible Technologies:</span> {job.technologies}</p>
                            <p><span className="job-key">Bond:</span> {job.bond}</p>
                            <p><span className="job-key">Job Location:</span> {job.jobLocation}</p>
                            <p><span className="job-key">Special Note:</span> {job.specialNote}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default StudentDashboard;