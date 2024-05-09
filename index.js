const fs = require('fs');
const path = require('path');
const markdownpdf = require('markdown-pdf');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Specify the folder path where the Markdown files are located
const folderPath = './d47c074b-05aa-4281-bdfe-109f91f4294c\_Export-46649677-be82-489f-a5ca-c90050f64376';

// Create an array to store the contents of all Markdown files
const fileContents = [];

// Function to read files recursively
function readFilesRecursively(directory) {
  const files = fs.readdirSync(directory);
  files.forEach(file => {
    const filePath = path.join(directory, file);
    if (fs.statSync(filePath).isDirectory()) {
      // If it's a directory, recursively read its files
      readFilesRecursively(filePath);
    } else if (path.extname(file).toLowerCase() === '.md') {
      // If it's a Markdown file, read its content and append it to the fileContents array
      fileContents.push({ name: file, content: fs.readFileSync(filePath, 'utf8') });
    }
  });
}

// Read all files recursively in the folder and its subfolders
readFilesRecursively(folderPath);

// Define the options for the PDF generation
const options = {
  remarklinksubstitutions: true // Enable substitutions for links in Markdown
};

// Function to generate separate PDF files
function generateSeparatePDFs(index) {
  if (index >= fileContents.length) {
    console.log('All PDF files generated successfully!');
    rl.close();
    return;
  }

  const file = fileContents[index];
  const outputFileName = path.parse(file.name).name;
  const outputFolderName = 'separate_pdfs';

  // Create the output folder if it doesn't exist
  if (!fs.existsSync(outputFolderName)) {
    fs.mkdirSync(outputFolderName);
  }

  markdownpdf(options).from.string(file.content).to(`./${outputFolderName}/${outputFileName}.pdf`, function() {
    console.log(`PDF generated successfully for "${file.name}"!`);
    generateSeparatePDFs(index + 1);
  });
}

// Prompt the user to choose between separate files or all in one PDF
rl.question('Do you want to generate separate PDF files or all in one PDF? (separate/all): ', (choice) => {
  if (choice.toLowerCase() === 'separate') {
    // Generate separate PDF files for each Markdown file
    generateSeparatePDFs(0);
  } else if (choice.toLowerCase() === 'all') {
    // Generate a single PDF file with all Markdown contents combined
    const markdownContent = fileContents.map(file => file.content).join('\n\n');
    rl.question('Enter the output file name (without extension): ', (outputFileName) => {
      markdownpdf(options).from.string(markdownContent).to(`./${outputFileName}.pdf`, function() {
        console.log('PDF generated successfully!');
        rl.close();
      });
    });
  } else {
    console.log('Invalid choice. Please enter either "separate" or "all".');
    rl.close();
  }
});