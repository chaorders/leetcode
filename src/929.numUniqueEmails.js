const numUniqueEmails = emails => {
  let emailsSet = new Set();

  let index;
  let isAfterPlus;
  let char;
  let atCharIndex;
  let result;
  emails.map(email => {
    isAfterPlus = false;
    isAfterAt = false;
    result = '';

    for (index = 0; index < email.length; index++) {
      char = email[index];

      if (char === '@') {
        atCharIndex = index;
        break;
      }

      if (isAfterPlus) {
        continue;
      }

      if (char === '.') {
        continue;
      } else if (char === '+') {
        isAfterPlus = true;
        continue;
      } else {
        result += char;
      }
    }

    emailsSet.add(result + email.substr(atCharIndex));
  });

  return emailsSet.size;
};

module.exports = numUniqueEmails;