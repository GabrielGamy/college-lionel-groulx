import './UserList.css';
import Card from '../../Common/Card/Card';

const UserList = (props) => {
    return (
        <>
            <h2 className="user-header">Available Github Public Users</h2>
            <div className="user-list">
                { 
                    props.users.map(user => {
                        return (
                            <Card key={user.id} className="user-info">
                                <div className="user-info__profile">
                                    <img src={user.avatar_url} alt="Profile" width="100" height="100" />
                                    <div className="user-info__profile-name">{user.login}</div>
                                </div>
                                <div className="user-info__details">
                                    <a href={user.html_url} target="_blank" rel="noreferrer">Repositories</a>
                                </div>
                            </Card>
                        );
                    })
                }
            </div>
        </>
    );
}

export default UserList;