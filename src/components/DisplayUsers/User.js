import styles from './User.module.css';

const User = (props) => {
    return (
        <p className={styles}>{`${props.username} (${props.age} years old)`}</p>
    )
}

export default User;