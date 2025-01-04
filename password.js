//Task 1

const line = [
  'Compilers intensily bestow', 
  'On commencing without ego', 
  'Different processes ajar', 
  'Exit with zero quick'];
  
export function frontDoorResponse(line) {
  return line[0];
}

frontDoorResponse(line)

// Task 2

const word = 'code'

export function frontDoorPassword(word) {
  if (word.length === 0) {
    return word;
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

frontDoorPassword(word)

// Task 3

export function backDoorResponse(line) {
  if (!Array.isArray(line)) {
    const trimmedLine = line.trim();
    const lastWord = trimmedLine[trimmedLine.length - 1];
    return lastWord;
  }

}

backDoorResponse(line)

// Task 4

const lineWords = 'work'

export function backDoorPassword(word) {
  if (lineWords.length > 0) { 
    const lastProblem = lineWords.charAt(0).toUpperCase() + lineWords.slice(1).toLowerCase();
    return lastProblem + ', please';
  }
}

backDoorPassword(word)
