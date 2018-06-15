import Home from "../screens/home/home";
import Projects from "../screens/projects/projects";
import More from "../screens/more/more";
import Me from "../screens/home/me";

export default (Routes = {
  HomeRoutes: {
    Home: Home,
    Me: Me
  },
  ProjectsRoutes: {
    Projects: Projects
  },
  MoreRoutes: {
    More: More
  }
});
