export default function promptUser()
{
    const t = prompt("Enter title: ", );
    const d = prompt("Enter description: ", );
    const date = new Date();
    return {t, d, date};
}
