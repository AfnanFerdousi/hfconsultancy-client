import Search from "../forms/Search";

const Jumbotron=({
  title,
  subTitle="Welcome to HF Consultancy"
})=> {
 
  return (
    <div
      className="container-fluid jumbotron"
      style={{ marginTop: "-8px", height: "250px" }}
    >
      <div className="row">
        <div className="col text-center p-5">
          <h1 className="font-bold text-white text-2xl">{title}</h1>
          <p className="text-lg mb-4">{subTitle}</p>
          <Search></Search>         
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
