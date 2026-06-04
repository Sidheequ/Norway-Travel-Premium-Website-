const baseUrl = import.meta.env.VITE_CLOUDINARY_BASE_URL || "https://res.cloudinary.com/dclejmil5/image/upload";

/**
 * Resolves relative Cloudinary paths or full Cloudinary URLs against the dynamic base URL.
 * @param {string} path - The relative path (e.g. 'v1765994422/norway_project/logo.png') or full URL.
 * @returns {string} The resolved absolute URL.
 */
export const getCloudinaryUrl = (path) => {
    if (!path) return "";
    
    // If the path contains a full Cloudinary URL, strip it down to the relative path
    const cleanPath = path.replace(/^https?:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\//, "");
    
    // Combine base URL and relative path safely
    return `${baseUrl.replace(/\/+$/, "")}/${cleanPath.replace(/^\/+/, "")}`;
};
