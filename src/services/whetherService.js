import axios from 'axios';

const baseUrl = 'https://api.whether.cloud/beta';

const config = {
  headers: {
    'x-api-key': 'BYi5MaSB1IaFAyUDbaIaMa25mmdyhngK3H4WENXe'
  }
};

const whetherService = (origin, destination, waypointDistance) => {
  const whetherUrl = `${baseUrl}?origin=${origin}&destination=${destination}&marker_distance=${waypointDistance}`;

  return axios.get(whetherUrl, config);
};

export default whetherService;
