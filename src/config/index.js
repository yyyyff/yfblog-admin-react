const isDev = process.env.NODE_ENV !== "production"

export const SAVE_PREFIX = "yfblog_"
export const API_ROOT = isDev ? "api/" : "http://x64.im/api/"
