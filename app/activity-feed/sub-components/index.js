import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Items from "./feed-items.component";
import * as feedItemActions from "./feed-item.actions";

const mapDispatchToProps = (dispath) => ({
    ...bindActionCreators({
        ...feedItemActions,
    }, dispath),
});

export default connect(null, mapDispatchToProps)(Items);