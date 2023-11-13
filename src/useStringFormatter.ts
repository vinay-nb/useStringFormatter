function useStringFormatter(text: string) {
  const lowerCase = () => {
    return text.toLowerCase();
  };

  const upperCase = () => {
    return text.toUpperCase();
  };

  const camelCase = () => {
    const words = text.split(" ");
    let result = "";
    result += words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
      result +=
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return result;
  };

  const pascalCase = () => {
    const words = text.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
      result +=
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return result;
  };

  const snakeCase = () => {
    const words = text.split(" ");
    let result = "";
    result += words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
      result += "_" + words[i].toLowerCase() + "_";
    }
    return result;
  };

  const kebabCase = () => {
    const words = text.split(" ");
    let result = "";
    result += words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
      result += "-" + words[i].toLowerCase() + "-";
    }
    return result;
  };

  const trim = () => {
    return text.trim();
  };

  return {
    lowerCase,
    upperCase,
    camelCase,
    pascalCase,
    snakeCase,
    kebabCase,
    trim,
  };
}

export default useStringFormatter;
