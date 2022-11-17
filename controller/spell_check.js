var Typo = require("typo-js");
var dictionary = new Typo("en_US");

const spellCheck = async (req, res) => {
  try {
    let { string } = req.body;
    const list_of_words = string.split(" ");
    let misspelt = [];
    let suggest = [];
    list_of_words.forEach((element) => {
      console.log(element);

      var is_spelled_correctly = dictionary.check(element);
      if (is_spelled_correctly === false) {
        var array_of_suggestions = dictionary.suggest(element);
        suggest.push(array_of_suggestions);
        misspelt.push(element);
        console.log("not spelled correctly", array_of_suggestions);
      }
    });
    res.status(200).json({
      Misspelt_word: misspelt,
      SUGGESTIONS: suggest,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { spellCheck };
