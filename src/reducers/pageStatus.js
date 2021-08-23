import { PageStatus } from "types/pageStatus";
import {
    API_SEND_START,
    API_SEND_END
} from "../actions/types/index";
const pageStatusReducer = (pageStatus = PageStatus.Ok, action) => {
    const { type, payload } = action;

    switch(type){
        case API_SEND_START:
            return payload;
        case API_SEND_END:
            return payload;
        default: 
            return pageStatus;
    }
}
export default pageStatusReducer;