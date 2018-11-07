import React from "react";
import TrackingRow from "./TrackingRow";
import Axios from "axios";
import ApiLinks from "../../utils/ApiLinks";
import Auth from "../../utils/auth";

class TrackingList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { trackings: ""};
    }

    componentWillMount() {
        var config = {
            headers: { 'Authorization':Auth.getToken() }
        };

        let currentComponent = this;

        Axios
            .get(ApiLinks.Trackings, config)
            .then(function (response) {
                currentComponent.setState({trackings: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        if (this.state.trackings !== "") {
            var data = this.state.trackings;
            return (
                <ul>
                    <form>
                        {
                            data.map((tracking,i) => {
                                return<TrackingRow key={i}
                                        id={tracking.id}
                                        status={tracking.status}
                                        updateAt={tracking.updateAt}>
                                    </TrackingRow>
                            })
                        }
                    </form>
                </ul>
            );

        } else {
            return <p className="text-center">Error to Connect</p>
        }
    }
}

export default TrackingList;