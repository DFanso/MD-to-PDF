const fs = require('fs');
const path = require('path');
const markdownpdf = require('markdown-pdf');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Specify the folder path where the Markdown files are located
const folderPath = './HCI_Short_Note';

// Create an array to store the contents of all Markdown files
const fileContents = [];

// Read all files in the folder and filter for Markdown files
fs.readdirSync(folderPath).filter(file => path.extname(file).toLowerCase() === '.md').forEach(file => {
  // Read the content of each Markdown file and append it to the fileContents array
  const filePath = path.join(folderPath, file);
  fileContents.push(fs.readFileSync(filePath, 'utf8'));
});

// Join the contents of all Markdown files into a single string, separated by newline characters
const markdownContent = fileContents.join('\n\n');

// Define the options for the PDF generation
const options = {
  remarklinksubstitutions: true // Enable substitutions for links in Markdown
};

// Prompt the user to enter the output file name
rl.question('Enter the output file name (without extension): ', (outputFileName) => {
  // Generate the PDF file
  markdownpdf(options).from.string(markdownContent).to(`./${outputFileName}.pdf`, function() {
    console.log('PDF generated successfully!');
    rl.close();
  });
});