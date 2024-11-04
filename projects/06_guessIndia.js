// 28 states and 8 UTs 

const statesAndUTs = {
    "Andhra Pradesh": [615, 615],
    "Arunachal Pradesh": [980, 240],
    "Assam": [960, 286],
    "Bihar": [781, 318],
    "Chhattisgarh": [691, 439],
    "Goa": [500, 588],
    "Gujarat": [427, 392],
    "Haryana": [565, 221],
    "Himachal Pradesh": [581, 149],
    "Jharkhand": [767, 368],
    "Karnataka": [520, 615],
    "Kerala": [557, 729],
    "Madhya Pradesh": [587, 383],
    "Maharashtra": [506, 485],
    "Manipur": [988, 331],
    "Meghalaya": [909, 312],
    "Mizoram": [963, 364],
    "Nagaland": [1000, 284],
    "Odisha": [752, 453],
    "Punjab": [530, 177],
    "Rajasthan": [471, 287],
    "Sikkim": [863, 279],
    "Tamil Nadu": [603, 709],
    "Telangana": [606, 539],
    "Tripura": [937, 358],
    "Uttar Pradesh": [650, 285],
    "Uttarakhand": [633, 194],
    "West Bengal": [827, 381],

    "Andaman and Nicobar Islands": [902, 653],
    "Chandigarh": [574, 182],
    "Dadra and Nagar Haveli and Daman and Diu": [385, 478],
    "Lakshadweep": [432, 721],
    "Delhi": [587, 237],
    "Puducherry": [653, 667],
    "Jammu and Kashmir": [522, 106],
    "Ladakh": [571, 62]
}
const container = document.querySelector('.container');
const input = document.querySelector('input')
const button = document.querySelector('button')

// TODO: convert guessedName into titlecase
// let toTitleCase = (userInputValue) =>{
//     return userInputValue.toLowerCase().split(' ').;
// }

button.addEventListener('click', (e)=>{
    // let guessedName = toTitleCase(input.value);
    let guessedName = input.value;
    deleteme.innerText = guessedName;
    input.value = '';
});


// TODO: delete the below at last
const deleteme = document.querySelector('.deleteme');
        
container.addEventListener('click', (e)=>{
    deleteme.innerText = `${e.clientX}, ${e.clientY}`;
    let s = document.createElement('span');
    document.body.append(s)
    
// TODO: delete the below at the end
    var x = e.clientX; var y = e.clientY;
    s.innerHTML = `
    <span style="font-size: 14px;position: absolute;top: ${y}px; left: ${x}px">
        ${'guessedName'}
    </span>
        `;
});