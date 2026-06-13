import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
    import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
    
    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2sz07TqKrMIHl92VwLsW9T7G1ZaSVkSM",
  authDomain: "gibe3operationhandover.firebaseapp.com",
  projectId: "gibe3operationhandover",
  storageBucket: "gibe3operationhandover.firebasestorage.app",
  messagingSenderId: "588234679712",
  appId: "1:588234679712:web:c358c27dbbd4659f72f0c5",
  measurementId: "G-LPKZDDEWZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const reportsContainer = document.getElementById("reportsContainer");

async function loadReports() {
    const q = query(collection(db, "operation_handover_reports"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);

    if(querySnapshot.empty) {
        reportsContainer.innerHTML = "<p>ምንም የተመዘገበ ሪፖርት የለም።</p>";
        return;
    }

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const reportDiv = document.createElement("div");
        reportDiv.className = "report-card";

        reportDiv.innerHTML = `
            <h3>Date: ${data.date}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Morning (13:00)</th>
                        <th>Evening (20:00)</th>
                        <th>Night (06:00)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Total Plant Loading</td><td>${data.morning.loading}</td><td>${data.evening.loading}</td><td>${data.night.loading}</td></tr>
                    <tr><td>Units in Operation</td><td>${data.morning.unitsOp}</td><td>${data.evening.unitsOp}</td><td>${data.night.unitsOp}</td></tr>
                    <tr><td>Under Maintenance</td><td>${data.morning.unitsMaint}</td><td>${data.evening.unitsMaint}</td><td>${data.night.unitsMaint}</td></tr>
                    <tr><td>Stopped Units</td><td>${data.morning.stoppedUnits}</td><td>${data.evening.stoppedUnits}</td><td>${data.night.stoppedUnits}</td></tr>
                    <tr><td>Bus-bar & Lines</td><td>${data.morning.busbar}</td><td>${data.evening.busbar}</td><td>${data.night.busbar}</td></tr>
                    <tr><td>Standby DG</td><td>${data.morning.dgCondition}</td><td>${data.evening.dgCondition}</td><td>${data.night.dgCondition}</td></tr>
                    <tr><td>DC System</td><td>${data.morning.dcCondition}</td><td>${data.evening.dcCondition}</td><td>${data.night.dcCondition}</td></tr>
                    <tr><td>SCADA & MIMIC</td><td>${data.morning.scada}</td><td>${data.evening.scada}</td><td>${data.night.scada}</td></tr>
                    <tr><td>PLC / Phone</td><td>${data.morning.plc}</td><td>${data.evening.plc}</td><td>${data.night.plc}</td></tr>
                    <tr><td>Tools & Utilities</td><td>${data.morning.tools}</td><td>${data.evening.tools}</td><td>${data.night.tools}</td></tr>
                    <tr><td>Remarks</td><td>${data.morning.remarks}</td><td>${data.evening.remarks}</td><td>${data.night.remarks}</td></tr>
                    <tr class="meta-row">
                        <td><strong>Attended / Addressed</strong></td>
                        <td>By: ${data.morning.attendedBy}<br>To: ${data.morning.addressedTo}<br>Grp: ${data.morning.group}</td>
                        <td>By: ${data.evening.attendedBy}<br>To: ${data.evening.addressedTo}<br>Grp: ${data.evening.group}</td>
                        <td>By: ${data.night.attendedBy}<br>To: ${data.night.addressedTo}<br>Grp: ${data.night.group}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
        `;
        reportsContainer.appendChild(reportDiv);
    });
}

loadReports();