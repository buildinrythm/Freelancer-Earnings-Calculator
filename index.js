document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');

    calculateBtn.addEventListener('click', () => {
        // Get form values
        const freelancerName = document.getElementById('name').value.trim();
        const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
        const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
        const overtimeRate = parseFloat(document.getElementById('overtimeRate').value);
        const taxRate = parseFloat(document.getElementById('taxRate').value) / 100;

        // Basic validation
        if (!freelancerName) {
            alert('Please enter your name.');
            return;
        }
        if (isNaN(hoursWorked) || hoursWorked < 0) {
            alert('Please enter valid hours worked.');
            return;
        }
        if (isNaN(hourlyRate) || hourlyRate <= 0) {
            alert('Please enter a valid hourly rate.');
            return;
        }
        if (isNaN(overtimeRate) || overtimeRate <= 0) {
            alert('Please enter a valid overtime rate.');
            return;
        }
        if (isNaN(taxRate) || taxRate < 0) {
            alert('Please enter a valid tax rate.');
            return;
        }

        // Calculate earnings
        let regularHours = Math.min(hoursWorked, 40);
        let overtimeHours = Math.max(hoursWorked - 40, 0);

        let regularPay = regularHours * hourlyRate;
        let overtimePay = overtimeHours * overtimeRate;
        let grossPay = regularPay + overtimePay;
        let taxPaid = grossPay * taxRate;
        let netPay = grossPay - taxPaid;

        // Apply bonus
        let bonus = 0;
        if (hoursWorked > 50) bonus = 120;
        else if (hoursWorked > 40) bonus = 90;
        else if (hoursWorked > 30) bonus = 60;

        netPay += bonus;

        // Format results
        grossPay = grossPay.toFixed(2);
        taxPaid = taxPaid.toFixed(2);
        netPay = netPay.toFixed(2);
        bonus = bonus.toFixed(2);

        // Display results
        alert(`Earnings Summary for ${freelancerName}:\n
Gross Pay: $${grossPay}\n
Tax Paid: $${taxPaid}\n
Net Pay: $${netPay}\n
Bonus: $${bonus}`);

        console.log(`Freelancer: ${freelancerName}, Net Pay: €${netPay}`);
    });
});
