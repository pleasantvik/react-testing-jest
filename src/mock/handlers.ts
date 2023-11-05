// import { rest } from "msw";
// export const handlers = [
//   rest.get(
//     "https://jsonplaceholder.typicode.com/users",
//     (_: any, res: any, ctx: any) => {
//       return res(
//         ctx.status(200),
//         ctx.json([
//           { name: "Bruce" },
//           { name: "Clark Kent" },
//           { name: "Princess Diana" },
//         ])
//       );
//     }
//   ),
// ];

import { http, HttpResponse } from "msw";

// Let's keep a map of all existing posts in memory.
// At the beginning, this list is empty as we have no posts.
// const allPosts = new Map();

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    // Construct a JSON response with the list of all posts
    // as the response body.
    return HttpResponse.json([
      { name: "Bruce Wayne" },
      { name: "Clark Kent" },
      { name: "Princess Dianan" },
    ]);
  }),

  // ...the other request handlers.
];
