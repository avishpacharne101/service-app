import Ticket from "../models/ticket.js";
const sendRequest = async (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const service = req.body.service;
    const description = req.body.description;
    const bookStatus = "not-booked";
    const status = false;
    const ticket = await Ticket.create({ name, address, service, description, status, bookStatus });
    res.status(201).json({ ticket });

}
const updateRequest = async (req, res) => {
    const id = req.params.id;
    const bookStatus = req.body.bookStatus;
    const status = req.body.status;
    const ticket = await Ticket.findByIdAndUpdate(id, { bookStatus, status }, { new: true });
    res.status(200).json({ ticket });
}
const deleteRequest = async (req, res) => {
    const id = req.params.id;
    const ticket = await Ticket.findByIdAndDelete(id);
    res.status(200).json({ ticket });
}
const getAllRequests = async (req, res) => {
    const tickets = await Ticket.find();
    res.status(200).json({ tickets });
}
export { sendRequest, updateRequest, deleteRequest, getAllRequests };