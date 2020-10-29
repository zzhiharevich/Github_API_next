import Repository from './Repository/Repository';
import classes from '../../styles/components/repositories/repositories.module.scss';


const repositories = (props) => {
    return (
        <div className={classes.Repositories}>
            {props.repos.map(repo => (
                <Repository repInfo={repo} key={repo.id} />
            ))}
        </div>
    );
}

export default repositories;