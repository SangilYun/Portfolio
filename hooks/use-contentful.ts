const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

import { useState, useEffect } from "react";

const useContentful = (query: string) => {
  let [data, setData] = useState(null);
  let [errors, setErrors] = useState<string[] | null>(null);
  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${space}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          setErrors(errors);
        }
        if (data) {
          setData(data);
        }
      })
      .catch((error) => setErrors([error]));
  }, [query]);

  return { data, errors };
};
export default useContentful;
