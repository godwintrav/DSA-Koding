// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

function anagrams(stringA, stringB) {
  const replacedStringA = stringA.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const replacedStringB = stringB.replace(/[^a-zA-Z]/g, '').toLowerCase();
  if(replacedStringA.length !== replacedStringB.length){
    return false;
  }

  let replacedStringACharCount = getCharCount(replacedStringA);
  let replacedStringBCharCount = getCharCount(replacedStringB);

  // for(let i =0; i < replacedStringA.length; i++){
  //   charCount[replacedStringA[i]] ? charCount[replacedStringA[i]]++ : charCount[replacedStringA[i]] = 1;
  // }

  // for(let i =0; i < replacedStringB.length; i++){
  //   if(!charCount[replacedStringB[i]]){
  //     return false;
  //   }

  //   charCount[replacedStringB[i]]--;
  // }

  return objectsAreEqual(replacedStringACharCount, replacedStringBCharCount);

}

function anagrams2(stringA, stringB) {
  const replacedStringA = stringA.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const replacedStringB = stringB.replace(/[^a-zA-Z]/g, '').toLowerCase();
  if(replacedStringA.length !== replacedStringB.length){
    return false;
  }

  let charCount = {};

  for(let i =0; i < replacedStringA.length; i++){
    charCount[replacedStringA[i]] ? charCount[replacedStringA[i]]++ : charCount[replacedStringA[i]] = 1;
  }

  for(let i =0; i < replacedStringB.length; i++){
    if(!charCount[replacedStringB[i]]){
      return false;
    }

    charCount[replacedStringB[i]]--;
  }

  return true;

}

function getCharCount(string){
  let charCount = {};

  for(let i = 0; i < string.length; i++){
      charCount[string[i]] ? charCount[string[i]]++ : charCount[string[i]] = 1;
  }

  return charCount;
}

function objectsAreEqual(obj1, obj2) {
  // Get the keys of the objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if the number of keys is the same
  if (keys1.length !== keys2.length) {
      return false;
  }

  // Check if all keys and their corresponding values are equal
  for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
          return false;
      }
  }

  // If all properties and values are equal, return true
  return true;
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Anagrams", () => {
  it("works if case sensitivity and non word characters NOT taken into account", () => {
    console.log(anagrams("earth", "heart"))
    assert.equal(anagrams("earth", "heart"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("is case insensitive. 'HEART' and 'earth' should return true", () => {
    assert.equal(anagrams("HEART", "earth"), true);
    assert.equal(anagrams("heart", "EARTH"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
    assert.equal(anagrams("heart!", " earth"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
});

mocha.run();
