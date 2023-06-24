import React, { useEffect, useRef, useState } from 'react';
import { FaCaretRight, FaCaretDown, FaCircle } from 'react-icons/fa';

function SingleRecipe({ ingredients_list, name, description }) {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [styleHeight, setStyleHeight] = useState({});
  const ingredient_list_container = useRef(null);

  useEffect(() => {
    setStyleHeight({
      height: showIngredients
        ? `${
            ingredient_list_container?.current?.getBoundingClientRect()
              ?.height || '0'
          }px`
        : '0px',
    });
  }, [showIngredients, showDescription]);

  return (
    <li className='single_recipe_container'>
      <div
        className={showIngredients ? 'single_recipe selected' : 'single_recipe'}
      >
        <div
          className='single_recipe_header'
          onClick={() => {
            setShowIngredients(!showIngredients);
          }}
        >
          <div className='arrow_icon'>
            {showIngredients ? <FaCaretDown /> : <FaCaretRight />}
          </div>
          <h5>{name}</h5>
        </div>
        {showIngredients && (
          <div className='ingredients_list_container' style={styleHeight}>
            <div ref={ingredient_list_container} className='ingredients_list'>
              <h4>Ingredients</h4>
              <ul>
                {ingredients_list.map((ingredient, index) => {
                  return (
                    <li className='single_ingredient' key={index}>
                      <div className='bullet_icon'>
                        <FaCircle />
                      </div>
                      <p>{ingredient}</p>
                    </li>
                  );
                })}
              </ul>
              {showDescription && (
                <p className='description'>
                  <span>Description </span>
                  <br />
                  {description}
                </p>
              )}
              <button
                onClick={() => {
                  setShowDescription(!showDescription);
                }}
                className={
                  showDescription
                    ? 'btn description_toggle description_toggle_hide'
                    : 'btn description_toggle'
                }
              >
                {showDescription ? 'Hide Description' : 'Show Description'}
              </button>
            </div>
          </div>
        )}
      </div>
    </li>
  );
}

export default SingleRecipe;
