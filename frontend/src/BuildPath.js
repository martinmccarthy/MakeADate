const buildPath = (route) => {
    var localPath = "http://localhost:3001/api" + route;
    var productionPath = "" + route;
    return (process.env.NODE_ENV === "development" ? localPath : productionPath)
};

export default buildPath;