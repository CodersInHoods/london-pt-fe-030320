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

 /** 
  * HTML for each member: 
  * <li>
  *     <p class="name">Bilbo Baggins</p>
  *     <p class="life">1777 – 1888</p>
  *     <p class="gender"><strong>Gender: </strong>Male</p>
  *     <p class="culture"><strong>Culture: </strong>Hobbit</p>
  * </li>
 */

const createAMemberEl = (member) => {
	const li = document.createElement("li");
	const { name, gender, born, died, culture } = member;

	li.innerHTML = `
        <p class="name">${name}</p>
        <p class="life">${born} – ${died}</p>
        <p class="gender"><strong>Gender: </strong>${gender}</p>
        <p class="culture"><strong>Culture: </strong>${culture}</p>
    `;

	return li;
};

const fetchData = async (url) => await fetch(url).then((resp) => resp.json());

const swornMembers = async () => {
	const urls = await fetchData(houseURL);

	return urls.swornMembers;
};

const getSwornMembersData = async () => {
	const swornURLs = await swornMembers();

	const memberPromises = swornURLs.map((url) => fetchData(url));

	members = await Promise.all(memberPromises);
};

const filterMembers = (members, query) =>
	members.filter((member) => member.name.toLowerCase().match(query));

const renderMembers = (members) => {
	resultEl.innerHTML = "";
	members.forEach((member) => {
		resultEl.appendChild(createAMemberEl(member));
	});
};

const init = async () => {
	await getSwornMembersData();
	renderMembers(members);

	searchEl.addEventListener("keyup", (event) => {
		const query = event.target.value.toLowerCase();
        const filteredMembers = filterMembers(members, query);
        
		renderMembers(filteredMembers);
	});
};

init();
