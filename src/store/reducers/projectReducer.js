const initState = {
  projects: [
    {
      id: "1",
      title: "help me find peach",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis risus. Vestibulum fermentum tortor id mi. Curabitur vitae diam non enim vestibulum interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis viverra diam non justo. Duis risus. Vivamus porttitor turpis ac leo. Etiam dictum tincidunt diam. Nullam at arcu a est sollicitudin euismod. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Sed ac dolor sit amet purus malesuada congue. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Proin in tellus sit amet nibh dignissim sagittis. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante.",
    },
    {
      id: "2",
      title: "collect all the stars",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis risus. Vestibulum fermentum tortor id mi. Curabitur vitae diam non enim vestibulum interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis viverra diam non justo. Duis risus. Vivamus porttitor turpis ac leo. Etiam dictum tincidunt diam. Nullam at arcu a est sollicitudin euismod. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Sed ac dolor sit amet purus malesuada congue. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Proin in tellus sit amet nibh dignissim sagittis. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante.",
    },
    {
      id: "3",
      title: "egg hunt with yoshi",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis risus. Vestibulum fermentum tortor id mi. Curabitur vitae diam non enim vestibulum interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis viverra diam non justo. Duis risus. Vivamus porttitor turpis ac leo. Etiam dictum tincidunt diam. Nullam at arcu a est sollicitudin euismod. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Sed ac dolor sit amet purus malesuada congue. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Proin in tellus sit amet nibh dignissim sagittis. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante.",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project ", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("created project error ", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
