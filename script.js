function countRupees() {
 var count2000 = parseInt(document.getElementById('note2000').value) || 0;
 var count500 = parseInt(document.getElementById('note500').value) || 0;
 var count200 = parseInt(document.getElementById('note200').value) || 0;
 var count100 = parseInt(document.getElementById('note100').value) || 0;
 var count50 = parseInt(document.getElementById('note50').value) || 0;

 var totalAmount = count2000 * 2000 + count500 * 500 + count200 * 200 + count100 * 100 + count50 * 50;

 var output = document.getElementById('output');
 output.textContent = `Total Amount: ${totalAmount} Rupees`;
}
