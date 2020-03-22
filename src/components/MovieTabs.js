import React, { Component } from 'react';

class MovieTabs extends Component {

    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps, nextState) {
        console.log('WillReceiveProps');
        console.log('nextProps sort_by: ', nextProps.sort_by);
        console.log('nextState sort_by: ', this.props.sort_by);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.sort_by !== this.props.sort_by) {
            return true;
        } else {
            return false; //returns true by default 
        }
    }

    render() {

        const handleClick = value => () => {
            updateSortBy(value);
        };
    
        const getClassLink = value => {
            return `nav-link ${sort_by === value ? 'active' : ''}`;
        };

        const { sort_by, updateSortBy } = this.props;
        return (
            <div>
                <ul className="tabs nav nav-pills">
                    <li className="nav-item">
                        <div
                            className={getClassLink('popularity.desc')}
                            onClick={handleClick('popularity.desc')}
                        >
                            Popularity desc
                        </div>
                    </li>
                    <li className="nav-item">
                        <div
                            className={getClassLink('revenue.desc')}
                            onClick={handleClick('revenue.desc')}
                        >
                            Revenue desc
                        </div>
                    </li>
                    <li className="nav-item">
                        <div
                            className={getClassLink('vote_average.desc')}
                            onClick={handleClick('vote_average.desc')}
                        >
                            Vote average
                        </div>
                    </li>
                </ul>
            </div>
        );    
    }
} 

export default MovieTabs;
