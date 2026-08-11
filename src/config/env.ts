const apiUrl = process.env.NEXT_PUBLIC_API_URL;

if (!apiUrl) {
  throw new Error("No api url found");
}

const env = {
  apiUrl,
};

export default env;
