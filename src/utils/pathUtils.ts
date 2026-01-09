// Utility function to construct paths correctly for both root and subdirectory deploys
export const getPath = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // If base is root '/', just return the path
  if (base === '/') return normalizedPath;
  
  // Otherwise, concatenate base + path
  return `${base}${normalizedPath}`;
};
