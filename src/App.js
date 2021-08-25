import "./App.css";
import Profile from "./components/Profile/";
import Statistics from "./components/Statistics/";
import user from "./json/user.json";
import statistics from "./json/statistical-data.json";

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" items={statistics} />
    </div>
  );
}

export default App;
