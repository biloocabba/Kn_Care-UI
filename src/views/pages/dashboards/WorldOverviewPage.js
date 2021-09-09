/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// reactstrap components
import { Card, CardBody, Container, Row } from "reactstrap";
// core components
import MapsHeader from "components/Headers/MapsHeader";



function Vector() {
  const [mapData, setMapData] = useState({});

  return (
    <>
      <MapsHeader name="World view" setMapData={setMapData} />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardBody className="pt-0">
                <VectorMap
                  containerClassName="vector-map"
                  containerStyle={{
                    width: "100%",
                    height: "600px",
                  }}
                  map={"world_mill"}
                  zoomOnScroll={true}
                  scaleColors={["#f00", "#0071A4"]}
                  normalizeFunction="polynomial"
                  hoverOpacity={0.7}
                  hoverColor={false}
                  backgroundColor="transparent"
                  regionStyle={{
                    initial: {
                      fill: "#e9ecef",
                      "fill-opacity": 0.8,
                      stroke: "none",
                      "stroke-width": 0,
                      "stroke-opacity": 1,
                    },
                    hover: {
                      fill: "#dee2e6",
                      "fill-opacity": 0.8,
                      cursor: "pointer"
                    }
                  }}
                  // markerStyle={{
                  //   initial: {
                  //     fill: "#fb6340",
                  //     "stroke-width": 0,
                  //   },
                  //   hover: {
                  //     fill: "#11cdef",
                  //     "stroke-width": 0,
                  //   },
                  // }}
                  // markers={[
                  //   {
                  //     latLng: [41.9, 12.45],
                  //     name: "Vatican City",
                  //   },
                  //   {
                  //     latLng: [43.73, 7.41],
                  //     name: "Monaco",
                  //   },
                  //   {
                  //     latLng: [35.88, 14.5],
                  //     name: "Malta",
                  //   },
                  // ]}
                  series={{
                    regions: [
                      {
                        values: mapData,
                        scale: ["#ced4da", "#043c7c"],
                        normalizeFunction: "polynomial",
                      },
                    ],
                  }}
                  onRegionTipShow={
                    function name(e, label, code) {
                      if (mapData[code] != undefined) {
                        label.html(label.html() +' - '+ mapData[code]);
                      }
                    }
                  }
                />
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Vector;
