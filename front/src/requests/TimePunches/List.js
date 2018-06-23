import Request from '../../utils/Request';

export default function ListTimePunches() {
    return Request.get('https://shiftstestapi.firebaseio.com/timePunches.json');
}
