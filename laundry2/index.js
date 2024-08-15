const newdate = document.getElementById("date")
const display = document.getElementById("picking")
const d = new Date()


 newdate.addEventListener('change', ()=>{
    //Get the value from the calendar
    const my_Date= newdate.value 
    //get the day and add 2 to it 
    const add_day = new Date(my_Date);
    const pick_up = add_day.getDate() + 2;
    // This will provide timestamp
    const pick_1 = add_day.setDate(pick_up)
    // convert the timestamp to the new pick up date 
    const pick_up_cloth = new Date(pick_1)
    const final_pick = pick_up_cloth.getDay()
    //console.log(pick_up_cloth)
    if( final_pick === 6 || final_pick === 0){
        const pick_up_cloth_1= new Date(pick_up_cloth)
        const cloth_1 = pick_up_cloth_1.getDate() + 2
        const cloth_12= pick_up_cloth_1.setDate(cloth_1)
        const cloth_123 = new Date(cloth_12)
        const cloth_1234 = cloth_123.toLocaleDateString()
        display.value=cloth_1234
        
    }
    else{
        const pick_up_cloth1 = pick_up_cloth.toLocaleDateString()
        display.value= pick_up_cloth1
    }
 })

























