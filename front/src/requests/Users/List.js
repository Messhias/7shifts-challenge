import Request from '../../utils/Request';

export default function ListUsers() {
    return Request.get('https://shiftstestapi.firebaseio.com/users.json');
}
