import * as fs from 'fs';
const numberOfRefferences: number = 328;
const filePath = 'src/diss.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log('File contents:', data);
  const uniqueNumbers = extractUniqueReferenceNumbers(data);
  // console.log(uniqueNumbers);
  const missingNumbers = findMissingNumbers(uniqueNumbers, numberOfRefferences);
  // console.log('missingNumbers', missingNumbers);
  const missingNumbersString = missingNumbers.join('\n'); // Use '\n' for line breaks or ',' for a single line
  // console.log('missingNumbersString', missingNumbersString);
  writeToFile('src/result.txt', missingNumbersString);
});

function extractUniqueReferenceNumbers(text: string): number[] {
  const regex = /\[(.*?)\]/g;
  const matches = [...text.matchAll(regex)];
  const numbers: Set<number> = new Set();

  matches.forEach((match) => {
    const numArray = match[1]
      .split(',')
      .map((num) => parseInt(num.trim(), 10))
      .filter((num) => !isNaN(num));

    numArray.forEach((num) => numbers.add(num));
  });

  return [...numbers].sort((a, b) => a - b);
}

function findMissingNumbers(
  uniqueNumbers: number[],
  numberOfRefferences: number,
): number[] {
  const allNumbers = new Set<number>(
    Array.from({ length: numberOfRefferences }, (_, i) => i + 1),
  );
  const uniqueSet = new Set(uniqueNumbers);

  // Find missing numbers by subtracting uniqueSet from allNumbers
  const missingNumbers: number[] = [...allNumbers].filter(
    (num) => !uniqueSet.has(num),
  );

  return missingNumbers;
}

function writeToFile(fileName: string, data: string): void {
  fs.writeFile(fileName, data, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`Data successfully written to ${fileName}`);
    }
  });
}
