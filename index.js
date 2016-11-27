import React from 'react'
import invariant from 'invariant'
import { createRouteFromReactElement } from './RouteUtils'
import { component, components } from './InternalPropTypes'

const { string, func } = React.PropTypes;

const TitleRoute = React.createClass({

    statics: {
        createRouteFromReactElement
    },

    propTypes: {
        path: string,
        component,
        components,
        getComponent: func,
        getComponents: func,
        title : string
    },

    /* istanbul ignore next: sanity check */
    render() {

        document.title = this.props.title;

        invariant(
            false,
            '<Route> elements are for router configuration only and should not be rendered'
        )
    }

});

export default TitleRoute