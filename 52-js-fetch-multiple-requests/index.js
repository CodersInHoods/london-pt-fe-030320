const resultEl = document.querySelector(".result");
const searchEl = document.querySelector("input");
const houseURL = "https://anapioficeandfire.com/api/houses/378";

// STORE YOUR SWORN MEMBERS IN {members}
let members = [];
// =============================

/**
 * 
 * REQUIREMENTS:
 * 
 * 1. I should be able to see all {swornMembers}
 * after the page has loaded.
 * 2. When I type a query inside the input it should only
 * display members whose name includes the query
 */
const fetchData = async(url) => {
    return await fetch(url)
        .then((response) => response.json());
}

const fillMember = async() => {
    const swornMembers = await fetchData(houseURL).then((response) => response.swornMembers);
    const mappedMembers = swornMembers.map(async(el) => await fetchData(el));
    members = await Promise.all(mappedMembers);
    return members;
}


const constructor = async(members) => {
    resultEl.innerText = "";
    await members.forEach(element => {
        const li = document.createElement("li");
        const pName = document.createElement("p")
        pName.className = "name";
        pName.innerText = element.name;
        const plife = document.createElement("p")
        plife.className = "life"
        plife.innerText = `${element.born} - ${element.died}`;
        const pGender = document.createElement("p")
        pGender.className = "gender"
        pGender.innerText = element.gender
        const pCulture = document.createElement("p")
        pCulture.className = "culture"
        pCulture.innerText = element.culture;
        li.append(pName, plife, pGender, pCulture);
        resultEl.append(li);

    });
}
const loadMembers = async() => {
    members = await fillMember();
    constructor(members);
}

searchEl.addEventListener("keyup", (el) => {
    inputStr = el.target.value;
    let selectedMembers = [];
    selectedMembers = members.filter(el => el.name.toLowerCase().includes(inputStr.toLowerCase()));
    constructor(selectedMembers);
})



loadMembers();
// setTimeout(() => constructor(members), 1700);






/** 
 * HTML for each member: 
 * <li>
 *     <p class="name">Bilbo Baggins</p>
 *     <p class="life">1777 – 1888</p>
 *     <p class="gender"><strong>Gender: </strong>Male</p>
 *     <p class="culture"><strong>Culture: </strong>Hobbit</p>
 * </li>
 */