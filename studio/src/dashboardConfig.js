export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62577712b9c39f06813c6f9b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-bb1d6h4y",
                  apiId: "b8100028-7f92-4fbd-8096-8c7d2ccd4733",
                },
                {
                  buildHookId: "6257771367ce3d083443a0ef",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-a793k3sn",
                  apiId: "61410566-173d-4b71-968a-bccd4e728324",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/zt6666397/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-a793k3sn.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
