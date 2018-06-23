import Request from '../../utils/Request';

export default function SubmitPunches(data) {
    return Request.post(`http://localhost:8000/${data.id}/submit-punches/`, {
        data: data
    });
}
