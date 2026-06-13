document.getElementById('handoverForm').addEventListener('submit', function(e) {
    e.preventDefault(); // ፎርሙ ሰብሚት ሲሆን ገጹ እንዳይረrefresh ማገድ

    // ፎርሙ ላይ የተሞሉትን መረጃዎች መሰብሰብ
    const reportDate = document.getElementById('reportDate').value;
    const attName = document.getElementById('attName').value;
    const addName = document.getElementById('addName').value;

    // ውጤቱን በገጹ ስር ማሳያ ቦታ ማዘጋጀት
    const summaryBox = document.getElementById('reportSummary');
    const summaryContent = document.getElementById('summaryContent');

    summaryContent.innerHTML = `
        <p><strong>Report Date:</strong> ${reportDate}</p>
        <p><strong>Status:</strong> Shift successfully handed over from <b>${attName}</b> to <b>${addName}</b>.</p>
        <p><i>Note: You can now print this report or save it as PDF using the button below.</i></p>
    `;

    // የተደበቀውን ሰመሪ ቦክስ ማሳየት
    summaryBox.classList.remove('hidden');
    
    // ወደ ታች ስክሮል እንዲያደርግ
    summaryBox.scrollIntoView({ behavior: 'smooth' });
});
