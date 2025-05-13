const contacts = [
  {
    id: 1,
    name: "Alexandro Carlos",
    age: 30,
    email: "alexandrocarlos@gmail.com",
    phone: "+6281210550085",
    address: "Jakarta",
    country: "Indonesia",
  },
  {
    id: 2,
    name: "Minato",
    age: 50,
    email: "minato@gmail.com",
    phone: "+81210550085",
    address: "Osaka",
    country: "Japan",
  },
  {
    id: 3,
    name: "Rico Puji",
    age: 33,
    email: "ricopuji@gmail.com",
    phone: "+319742640382",
    address: "Cibubur",
    country: "Jakarta",
  },
];

function listContacts() {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    console.log(`
id: ${contact.id}      
Name: ${contact.name}
Age: ${contact.age} year old
Email: ${contact.email}
Address: ${contact.address}
Phone: ${contact.phone}
Country: ${contact.country}
`);
  }
}

function searchContacts(keyword) {
  const results = contacts.filter((contact) => contact.name.includes(keyword));
  return results;
}

function addContact(name, age, email, phone, address, country) {
  const lastContact = contacts[contacts.length - 1];
  const lastId = lastContact.id;
  const nextId = lastId + 1;

  contacts.push({
    id: nextId,
    name,
    age,
    email,
    phone,
    address,
    country,
  });
}

function deleteContact(id) {
  const updatedContacts = contacts.filter((contact) => contact.id !== id);
  contacts = updatedContacts;
  return contacts;
}

const contactsListElement = document.getElementById("contacts-list");

contactsListElement.innerHTML = contacts[0].name;
