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
    const reportTable=
    document.getElementById("reportTable");
    async function loadReports() {
        const {data, error}=
        await supabaseClient
        .from("shift_handover")
        .select("*")
        .order("id",{asecending:false});
        if(error){
            console.log(error);
            return;
        }
        displayReports(data);
    }
    function displayReports(reports){
        reportTable.innerHTML="";
        reports.foreach(report=>{
            const row = document.createElement("tr");
            row.innerHTML=`
            <td>${report.report_date||""}</td>
            <td>${report.plant_loadind||""}</td>
            <td>${report.units_operation||""}</td>
            <td>${report.stopped_units||""}</td>
            <td>${report.remarks||""}</td>
            <td>${report.actions ||""}</td>
            <th>${report.Availability_of_tools_and_utilities ||""} </th>
    <th>#{report.PLC / Fixed_phone_communication ||""}</th>
    <th>${report.Conditions_of_SCADA & MIMIC||""}</th>
    <th>${report.Plant_DC_system_condition ||""}</th>
    <th>${report.Standby_DG_Condition ||""}</th>
    <th>${report.Bus-bar, overhead & outgoing_lines ||""}</th>
            <td>
            <button>Edit</button>
            <button>delete</button>
            </td>
            `;
            reportTable.appendChild(row);
        });
    }
loadReports();