import axios from "axios";

axios.defaults.baseURL = "https://66322f1dc51e14d695639d4a.mockapi.io";

export const getContacts = async () => {
  const response = await axios.get("/contacts");
  return response.data;
};

export const postContact = async (contact) => {
    const response = await axios.post("/contacts", contact);
    return response.data;
}

export const removeContact = async (id) => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
}