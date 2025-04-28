function generateHash() {
    const fileInput = document.getElementById('fileInput');
    const hashOutput = document.getElementById('hashOutput');
  
    if (fileInput.files.length === 0) {
      alert('Please upload a certificate file!');
      return;
    }
  
    const file = fileInput.files[0];
    const reader = new FileReader();
  
    reader.onload = function (e) {
      const fileContent = e.target.result;
      // eslint-disable-next-line no-undef
      const hash = sha256(fileContent);
      hashOutput.textContent = `Hash: ${hash}`;
    };
  
    reader.readAsText(file);
  }
  