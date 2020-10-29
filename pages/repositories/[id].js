import { useRouter } from 'next/router';
import { getRepository } from '../api/index';
import classes from '../../styles/pages/repositories/id.module.scss';

const Repo = ({data}) => {
    const router = useRouter();

    return (
        <div className={classes.InformationBlock}>
            <p className={classes.Text}><strong>Name</strong>: {data.full_name}</p>
            <p className={classes.Text}><strong>URL</strong>: {data.clone_url}</p>
            <p className={classes.Text}><strong>Language</strong>: {data.language}</p>
            <p className={classes.Text}><strong>Start</strong>: {data.stargazers_count}</p>
            <p className={classes.Text}><strong>Owner login</strong>: {data.owner.login}</p>
            <button className={classes.Button} onClick={() => router.back()}>Go Back</button>
        </div>
    )
}

export async function getServerSideProps({query}) {

    const data = await getRepository(query.id);

    return {
        props: {
            data
        }
    }

}

export default Repo;