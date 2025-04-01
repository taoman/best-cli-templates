import BestRequest from "best-request";
const baseURL = import.meta.env.VITE_BASE_URL;
const config = {
  baseURL,
  token: "",
  tenantId: "0",

  env: {
    yzfPublicKey: import.meta.env.VITE_YZF_PUBLIC_KEY,
    certificateSerial: import.meta.env.VITE_CERTIFICATE_SERIAL,
    app_id: import.meta.env.VITE_APP_ID,
    env: import.meta.env.VITE_ENV,
    sessionKey: import.meta.env.VITE_SESSION_KEY,
  },
};
export const request = async (url: string, data?: any) => {
  const res = await BestRequest.requestBridge({
    url,
    ...config,
    data,
  });
  return res;
};
