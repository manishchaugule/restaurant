import React from 'react';
import './index.scss';

export default function ApplictaionMenuList({ list, isChecked, selectedCategoryId }) {
    function showList(value,index) {
        return (
            <div key ={index} className= 'list-container__list'>
                <div className= 'list-container__list__title'>
                    {value.displayName}
                </div>
                <div className= 'list-container__items'>
                    {
                        value.items.map((item,index) => {
                            if(isChecked){
                                if(item.inStock){
                                    return(
                                        showItem(item,index)
                                    )
                                }
                            }
                            else{
                                return(
                                    showItem(item,index)
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }
    function showItem(item,index) {
        return (
            <div key={index} className= 'list-container__items__container'>
                <div className= 'list-container__items__name'>
                    {item.name}
                </div>
                <div className= 'list-container__items__price'>
                    {item.price}
                </div>
            </div>
        )
    }
    return (
        <div className= "list-container">
            {
                list.map((value,index) => {
                    if (selectedCategoryId === 1) {
                        return (
                            showList(value,index)
                        )
                    }
                    if (selectedCategoryId === value.categoryId) {
                        return (
                            showList(value,index)
                        )
                    }

                })
            }
        </div>

    )
}