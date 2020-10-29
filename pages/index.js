import { useState, useSWR } from 'react';
import Repositories from '../components/Repositories/Repositories';
import { getRepositories } from './api/index';
import classes from '../styles/pages/index.module.scss';

export default function Main({data}) {

  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [repositories, setRepositories] = useState(null);
  const [error, setError] = useState(null);

  const inputValidation = (value) => {
    let isValid = false;
    if (value.trim() !== '') {
      isValid = true;
    }
    return isValid;
  }

  const inputChangedHandler = (e) => {
    const isValid = inputValidation(e.target.value);
    setInputValue(e.target.value);
    setIsValid(isValid);
  }

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const data = await getRepositories(inputValue);

      if (data) {
        console.log(data)
        let repositories = [];
        data.items.map((repo) => {
          let repInfo = {
            id: repo.id,
            name: repo.full_name,
            url: repo.clone_url,
            language: repo.language,
            stars: repo.stargazers_count,
            owner: repo.owner.login
          }
          repositories.push(repInfo);
        });

        setRepositories(repositories);
        setInputValue('');
        setIsValid(false);
      }
    } catch (e) {
      console.log('Error ', e)
      setError(e);
      setInputValue('');
      setIsValid(false);
    }
  }

  let repos = null;
  if (repositories) {
    repos = <Repositories repos={repositories} />;
  }

  let err = null;
  if (error) {
    err = <p>Something went wrong. Please try again</p>
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={inputValue}
          onChange={inputChangedHandler}
          placeholder="Repositories name..."
          className={classes.Input} />
          <button
            type="submit"
            disabled={!isValid}
            className={classes.Button}>Search</button>
      </form>
      {err}
      {repos}
    </>
  )
}