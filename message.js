const fs = require("fs");

module.exports = {
  create: function (name, number) {
    const message = `${name}の学籍番号は${number}です。`;
    fs.writeFileSync("result.txt", message);
    return message;
  },
};
