import mongoose from 'mongoose';

const newsSchema = mongoose.Schema(
    {
        news_title: {
            type: String,
        },
        news_desc: {
            type: String,
        }
    },
    { collection: 'news' }
);

export const News = mongoose.model("News", newsSchema);