import Link from 'next/link';
import classes from '../../../styles/components/repositories/repository/Repository.module.scss';

const repository = (props) => {

    const url = props.repInfo.name.split('/')[1];

    return (
            <Link as={`/repositories/${props.repInfo.id}`} href={`/repositories/:${props.repInfo.id}`}>
                <a>
                    <div className={classes.Repository} >
                        <p><strong>Name</strong>: {props.repInfo.name}</p>
                        <p><strong>Stars</strong>: {props.repInfo.stars}</p>
                    </div>
                </a>
            </Link>
    );
}

export default repository;