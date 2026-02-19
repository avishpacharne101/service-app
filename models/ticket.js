import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    bookStatus: {
        type: String,
        enum: ["not-booked", "pending", "completed", "cancelled", "in-progress"],
        default: "not-booked"
    }
});

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;