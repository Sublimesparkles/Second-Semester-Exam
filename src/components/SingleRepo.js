import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/SingleRepo.css';

const RepositoryDetails = () => {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const res = await axios.get(`https://api.github.com/repos/Sublimesparkles/${repoName}`);
        setRepo(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };

    fetchRepoDetails();
  }, [repoName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!repo) {
    return <div>Repository not found.</div>;
  }

  return (
    <div className="repo-details">
      
      <h2>{repo.name}</h2>
      <p className='repodescription'>{repo.description}</p>
      <div className='right'><p><strong>Stars:</strong> {repo.stargazers_count}</p></div>
      <div className='left'><p><strong>Forks:</strong> {repo.forks_count}</p></div>
      <div className='right'><p><strong>Open Issues:</strong> {repo.open_issues_count}</p></div>
      <div className='left'><p><strong>Visibility </strong>: {repo.visibility}</p></div>
      <div className='right'><p><strong>Language:</strong> {repo.language}</p></div>
      <div className='bottom_section'>
      <div className='bottom_link'><a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a></div>
      <div className='bottom_link'><Link to="/">Back to Repositories</Link></div>
      </div>
    </div>
  );
};

export default RepositoryDetails;
