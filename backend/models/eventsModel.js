import mongoose from 'mongoose';

const eventsSchema = mongoose.Schema(
    {
        event_name: {
            type: String,
        },
        event_date: {
            type: Date,
        },
        event_desc: {
            type: String,
        }
    },
    { collection: 'events' }
);

export const Events = mongoose.model("Events", eventsSchema);