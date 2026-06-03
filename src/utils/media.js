const API_BASE = "https://real-estate-project-wdkz.onrender.com";

export const resolveMediaUrl = (path) => {
  if (!path) {
    return "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80";
  }
  if (path.startsWith("http")) {
    return path;
  }
  return `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
};
