 const SUPABASE_URL =
"https://nvlvtxjihoktgemgwkzw.supabase.co/rest/v1/";

const SUPABASE_KEY =
"YOUR_ANON_PUBLIC_KEY";
[6/9/2026 6:54 AM] Getachew Tenaw: const supabaseClient =
supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);
[6/9/2026 6:54 AM] Getachew Tenaw: const saveBtn =
document.getElementById("saveBtn");
[6/9/2026 6:54 AM] Getachew Tenaw: saveBtn.addEventListener(
"click",
async () => {

alert("Save button works");

});
