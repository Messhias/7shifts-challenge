import Request from '../../utils/Request';

export default function ListLocations() {
    return Request.get("https://shiftstestapi.firebaseio.com/locations.json");
}
