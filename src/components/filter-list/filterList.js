import React, {Component} from 'react';
import './filterList.css'


class FilterList extends Component {



    render() {
      

        return (
            <div className="filter">
                <input className='search__panel' type="text" placeholder='search' />
                <div className='btn_inputs'>
                    <input className='filter__btn active_btn' type="button" value='All' />
                    <input className='filter__btn' type="button" value='Active' />
                    <input className='filter__btn' type="button" value='Done' />
                </div>
            </div>
        )
    }
    

} 

export default FilterList;