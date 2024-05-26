const exportPathMap = async function (defaultPathMap) {
  const pathMap = {};
  // Loop through all default paths
  Object.keys(defaultPathMap).forEach(page => {
    if (page === '/') pathMap[page] = { page };
    else pathMap[`${page}/index`] = { page };
  });
  return pathMap;
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  exportPathMap,
  compress: true,
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    staticFolder: 'src/public',
  },
};

export default nextConfig;
