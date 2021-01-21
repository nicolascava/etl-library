// Bencode specs:
// - integer: i<number>e
// - string: <length>:<string>
// - list of values: l<contents>e
// - dictionary: d<contents>e
//
// Input: Cyberpunk 2077 is a nice but broken game.johnny2077{"error": "Cars are flying over buildings", "code": "ABC42"}

const INPUT = "36:Cyberpunk is a nice but broken game.l6:johnnyi2077eed5:error30:Cars are flying over buildings4:codei442ee";
const STRING_DELIMITER = ":";
const INTEGER_START = "i";
const VALUES_START = "l";
const DICT_START = "d";
const END_DELIMITER = "e";

let stdout = "";

const parseString = (str, log = true) => {
  const delimiter = str.indexOf(STRING_DELIMITER);
  const length = parseInt(str.substring(0, delimiter), 10);
  const parsedStr = str.substr(delimiter + 1, length);

  if (log) {
    stdout += `${parsedStr}\n`;
  }

  return [parsedStr, str.substr(delimiter + 1 + length)];
};

const parseInteger = (str, log = true) => {
  const end = str.indexOf(END_DELIMITER);
  const parsedInt = parseInt(str.substring(0, end), 10);

  if (log) {
    stdout += `${parsedInt}\n`;
  }

  return [parsedInt, str.substr(end + 1)];
};

const parseValues = (str, acc = [], log = true) => {
  if (str[0] === INTEGER_START) {
    const [value, rest] = parseInteger(str.substr(1), false);

    return parseValues(rest, [...acc, value], log);
  } else if (str[0] === END_DELIMITER) {
    if (log) {
      stdout += `${JSON.stringify(acc)}\n`;
    }

    return [acc, str.substr(1)];
  }

  const [value, rest] = parseString(str, false);
  
  return parseValues(rest, [...acc, value], log);
};

const parseDictionary = (str) => {
  const [value, rest] = parseValues(str, [], false);
  const parsedDictionary = value.reduce((acc, v) => {
    const [lastItem] = acc.slice(-1);

    if (!lastItem) {
      return [[v]];
    }

    return lastItem.length === 2 ? [...acc, [v]] : [...acc.slice(0, -1), [...lastItem, v]];
  }, []).reduce((acc, v) => ({ ...acc, [v[0]]: v[1] }), {});

  stdout += `${JSON.stringify(parsedDictionary)}\n`;

  return [parsedDictionary, rest];
};

const decode = (str) => {
  if (str === "") {
    console.log(stdout);
    process.exit(0);
  }

  switch (str[0]) {
    case VALUES_START:
      return decode(parseValues(str.substr(1))[1]);
    case DICT_START:
      return decode(parseDictionary(str.substr(1))[1]);
    case INTEGER_START:
      return decode(parseInteger(str.substr(1))[1]);
    case END_DELIMITER:
      return decode(str.substr(1));
    default:
      return decode(parseString(str)[1]);
  }
};

decode(INPUT);
