
export const parseEnv = () => {
    let result = '';
    for (let key in process.env) {
      if (key.slice(0, 4) === "RSS_") {
        result = result + `${key}=${process.env[key]}; `;
      }
    }
    console.log(result.slice(0, result.length-2));
};

parseEnv();