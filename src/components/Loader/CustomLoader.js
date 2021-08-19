import { PageStatus } from "../../types/pageStatus";
import Loader from "react-loader-spinner";

export const CustomLoader = (props) => {
    if (props.pageStatus === PageStatus.Loading){
        return (
            <Loader
              type="Puff"
              color="#000000"
              height={50}
              width={50}
            />
          );
    }
    if (props.pageStatus === PageStatus.Error){
        return <div className="alert alert-danger" role="alert">Error.. {props.statusCode}</div>
    }
    if (props.pageStatus === PageStatus.NotAuthorised){
        return <div className="alert alert-danger" role="alert">Not Authorized.. {props.statusCode}</div>
    }
    return <></>
}
