import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardHeader, Container, Row} from "reactstrap";
import SimpleHeader from "components/Headers/SimpleHeader.js";

const BestPracticeView = () => {
    
    const temporaryFakePractice = {
        id:"fake-id",
        title: "Fake Title",
        content: "Fake content."
    }
    const currentPractice = temporaryFakePractice;
    

    return(
        <>
            <SimpleHeader name={currentPractice.title} parentName="Best Practices"/>
            <Container className="mt--6" fluid>
                <Row>
                    <div className="col">
                        <Card>
                            <CardHeader>
                                <h3 className="mb-0">{currentPractice.title}</h3>
                            </CardHeader>
                            <p>{currentPractice.content}</p>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default BestPracticeView;