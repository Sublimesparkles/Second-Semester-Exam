import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Pagination from './Pagination';
import Search from './Search';
import '../styles/Repositories.css';

const RepositoryComponent = () => {
    //creating states
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [reposPerPage] = useState(3);

  useEffect(() => {
    const fetchRepository = async () => {
      try {
        const res = await axios.get('https://api.github.com/users/Sublimesparkles/repos');
        return res.data;
      } catch (error) {
        console.error("Something is amiss", error);
      }
    };

    fetchRepository().then((data) => {
      setRepos(data);
        setLoading(false);
    });
  }, []);


  useEffect(() => {
    setFilteredRepos(
      repos.filter(repo =>
        repo.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, repos]);

  //Pagination
  const indexOfLastRepo = page * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);


  const eachRepo = currentRepos.map((repo) => {
    return (
     <Link
        key={repo.id}
        to={`/repos/${repo.name}`}
        className="repolink "
      >
       <div className='repocard'>
       <div><h2 className="repoheader">{repo.name}</h2></div>
          <p className="repodescription">{repo.description}</p>
       </div>
      </Link>
    );
  });


  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  return (
<section className='repowrapper'>
  <div className='headcontainer'>
  <h2 className='reposectionheader'>My Repositories</h2>
  <div>
          <Search setSearch={setSearch} />
        </div>
  </div>
    <section className='reposection'>{eachRepo}</section>
<div>
        <Pagination
        page={page}
        setPage={setPage}
        reposPerPage={reposPerPage}
        totalRepos={filteredRepos.length}
      />
    </div>
</section>
  );
};

export default RepositoryComponent;
