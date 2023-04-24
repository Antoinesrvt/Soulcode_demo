const Post = {
  slug: "posts",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "publishedDate",
      type: "date",
      required: true,
    },
  ],
};

module.exports = {
  secret: "eauilcbamoqmyoxcmbuzmuieiaemam",
  mongoURL: "mongodb+srv://antoinesrvt:Manant%400012@testings.49smxd3.mongodb.net/?retryWrites=true&w=majority",
};
