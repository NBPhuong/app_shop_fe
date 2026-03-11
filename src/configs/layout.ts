import path from "path";

export const VerticalItems = [
  {
    title: "Parent 1",
    icon: "ic:outline-more",
    path: "/",
    childrens: [
      {
        title: "children 1 1",
        icon: "ic:outline-more",
        path: "/",
        childrens: [
          {
            title: "children 1 1 1",
            icon: "ic:outline-more",
            path: "/"
          }
        ]
      }
    ]
  },
  {
    title: "Parent 2",
    icon: "ic:outline-more",
    path: "/",
    childrens: [
      {
        title: "children 2 1",
        icon: "ic:outline-more",
        path: "/",
      }
    ]
  }
]
