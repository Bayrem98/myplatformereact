import Contenet from "./parts/Contenent";
import Sidebar from "./parts/Sidebar";
import Navbard from "./parts/Navbard";

const Dashboard = () => {
  return (
    <div className="container fluid">
      <div className="row">
        <div className="col-md-12  a1">
          <Navbard />
        </div>
        <div className=" col-md-2 r2 a3">
          <Sidebar />
        </div>
        <div className=" col-md-2 r2 a3">
          <Contenet />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
