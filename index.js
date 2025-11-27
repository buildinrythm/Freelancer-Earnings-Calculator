document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');

    calculateBtn.addEventListener('click', () => {
       /* test listner 
        alert('Calculate button clicked!');
        */

        // Get form values
        const name = document.getElementById('name').value;
        const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
        const overtimeRate = parseFloat(document.getElementById('overtimeRate').value);
        const taxRate = parseFloat(document.getElementById('taxRate').value) / 100;
        
        // Basic validation
        if (!name || isNaN(hourlyRate) || isNaN(overtimeRate) || isNaN(taxRate)) {
            alert('Please fill in all fields with valid values.');
            return;
        }

        

    });
    });