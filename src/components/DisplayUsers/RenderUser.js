import User from "./User";
import styles from './RenderUser.module.css';

const RenderUser = (props) => {
    return (
        <div className={styles.container}>
            {props.users.map(user => {
                return <User
                    key={user.id}
                    username={user.username}
                    age={user.age}
                />
            })}
        </div>
    )
}


export default RenderUser;