import http from "./http-common";

const getAll = () => {
  return http.get("/mapkpis")
}

const mapKpiService = {
  getAll,
}

export default mapKpiService;