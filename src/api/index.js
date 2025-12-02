const fetchAPI = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const res = await response.json();
    return res.code === 0 ? res.data : null;
  } catch (error) {
    console.error(`Fetch error for ${url}:`, error);
    return null;
  }
};

export const getLabInfo = () => fetchAPI('/api/lab/info');
export const getBanners = () => fetchAPI('/api/home/banners');
export const getNews = (limit = 100) => fetchAPI(`/api/news?limit=${limit}`);
export const getNewsDetail = (id) => fetchAPI(`/api/news/${id}`);
export const getFeatures = () => fetchAPI('/api/home/features');
export const getProjects = (limit = 20) => fetchAPI(`/api/projects/highlight?limit=${limit}`);
export const getActivities = () => fetchAPI('/api/activities');
export const getResources = () => fetchAPI('/api/resources');